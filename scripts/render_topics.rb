#!/usr/bin/env ruby
# frozen_string_literal: true

# Render Cloud Foundry's Markdown/ERB topic files for consumption by mdBook.
#
# The input layout is the git-submodule tree in src/doc.  The output retains
# the Bookbinder section directories (for example concepts/ and running/) so
# that repository-relative images and links have a stable destination.

require "erb"
require "fileutils"
require "nokogiri"
require "optparse"
require "pathname"
require "yaml"

class CloudFoundryRenderer
  TEMPLATE_SUFFIX = ".html.md.erb"
  PARTIAL_SUFFIX = ".html.md.erb"

  def initialize(source_root:, destination_root:, variables_file:, verbose: false)
    @source_root = Pathname(source_root).realpath
    @destination_root = Pathname(destination_root).expand_path
    @variables_file = Pathname(variables_file).realpath
    @variables = load_variables
    @section_directories = load_section_directories
    @repositories_by_section = @section_directories.invert
    @subnav_file = @variables_file.dirname.parent.join("master_middleman/source/subnavs/_cf-subnav.erb")
    @verbose = verbose
    @partial_stack = []
  end

  def render_all
    templates = Dir.glob(@source_root.join("**", "*#{TEMPLATE_SUFFIX}").to_s).sort
    abort "No #{TEMPLATE_SUFFIX} files found beneath #{@source_root}" if templates.empty?

    templates.each do |filename|
      source = Pathname(filename)
      relative = source.relative_path_from(@source_root)
      next if partial?(source)

      destination = @destination_root.join(output_relative_path(relative))
      FileUtils.mkdir_p(destination.dirname)
      File.write(destination, render_file(source))
      warn "render #{relative} -> #{destination.relative_path_from(@destination_root)}" if @verbose
    end

    write_summary
  end

  private

  def load_variables
    document = YAML.safe_load_file(@variables_file, aliases: true) || {}
    values = document.fetch("template_variables") do
      abort "#{@variables_file} does not contain template_variables"
    end
    Variables.new(values)
  end

  def partial?(path)
    path.basename.to_s.start_with?("_")
  end

  def output_relative_path(relative)
    repository, *path = relative.each_filename.map(&:to_s)
    section = @section_directories.fetch(repository, repository)
    Pathname.new(File.join(section, *path)).sub_ext("").sub_ext("").sub_ext(".md")
  end

  def load_section_directories
    config = @variables_file.dirname.parent.join("config.yml")
    return {} unless config.file?

    sections = (YAML.safe_load_file(config, aliases: true) || {}).fetch("sections", [])
    sections.each_with_object({}) do |section, mapping|
      repository = section.dig("repository", "name")&.split("/")&.last
      directory = section["directory"]
      mapping[repository] = directory if repository && directory
    end
  end

  # Bookbinder's _cf-subnav.erb is the curated table of contents used by the
  # published documentation. Reuse its list hierarchy rather than deriving a
  # navigation from file names. Links to external sites or absent topics cannot
  # be mdBook chapters and are omitted (with a warning).
  def write_summary
    unless @subnav_file.file?
      warn "No Bookbinder subnavigation at #{@subnav_file}; SUMMARY.md was not generated"
      return
    end

    document = Nokogiri::HTML::DocumentFragment.parse(File.read(@subnav_file))
    root_list = document.at_css("#sub-nav .nav-content > ul")
    unless root_list
      warn "Could not find the Bookbinder navigation list in #{@subnav_file}; SUMMARY.md was not generated"
      return
    end

    @summary_paths = {}
    lines = ["# Summary", ""]
    append_summary_items(root_list, lines, 0)
    FileUtils.mkdir_p(@destination_root)
    File.write(@destination_root.join("SUMMARY.md"), lines.join("\n") + "\n")
    warn "write SUMMARY.md" if @verbose
  end

  def append_summary_items(list, lines, depth)
    list.xpath("./li").each do |item|
      title, href = summary_item_label(item)
      children = item.at_xpath("./ul")
      target = summary_target(href)

      # A chapter must only appear once in mdBook. Keep its first, canonical
      # Bookbinder location, but retain descendants as an unlinked group.
      if target && @summary_paths.key?(target)
        warn "SUMMARY duplicate omitted: #{target} (#{title})"
        target = nil
      elsif target
        @summary_paths[target] = true
      end

      if target
        lines << "#{'  ' * depth}- [#{title}](#{target})"
      elsif title && children
        lines << "#{'  ' * depth}- #{title}"
      elsif title && href
        warn "SUMMARY link omitted (not rendered): #{href} (#{title})"
      end

      append_summary_items(children, lines, depth + 1) if children
    end
  end

  def summary_item_label(item)
    link = item.at_xpath("./a")
    return [normalized_text(link), link["href"]] if link

    label = item.at_xpath("./strong|./span[not(.//hr)]")
    [label && normalized_text(label), nil]
  end

  def normalized_text(node)
    node.text.gsub(/\s+/, " ").strip
  end

  def summary_target(href)
    return nil unless href&.start_with?("/")

    path = href.split(/[?#]/, 2).first
    path = "#{path}index.html" if path.end_with?("/")
    return nil unless path.end_with?(".html")

    target = Pathname.new(path.delete_prefix("/")).sub_ext(".md")
    return nil unless @destination_root.join(target).file?

    target.to_s
  end

  def render_file(path)
    expanded = path.expand_path
    raise "Recursive partial: #{(@partial_stack + [expanded]).join(' -> ')}" if @partial_stack.include?(expanded)

    @partial_stack << expanded
    ERB.new(File.read(expanded), trim_mode: "-").result(RenderContext.new(self, expanded).get_binding)
  rescue Errno::ENOENT => e
    raise "While rendering #{expanded}: #{e.message}"
  ensure
    @partial_stack.pop
  end

  def render_partial(name, current_file)
    candidates = partial_candidates(name, current_file)
    partial = candidates.find(&:file?)
    raise "Partial #{name.inspect}, referenced by #{current_file}, was not found (tried: #{candidates.join(', ')})" unless partial

    render_file(partial)
  end

  def partial_candidates(name, current_file)
    name = name.to_s.sub(%r{\A/}, "")
    candidates = candidates_for(current_file.dirname.join(name))

    # Partial references follow public Bookbinder paths (for example
    # ../adminguide/foo); source checkouts use docs-cf-admin instead.
    relative = current_file.relative_path_from(@source_root)
    repository = relative.each_filename.first.to_s
    section = @section_directories.fetch(repository, repository)
    public_base = Pathname.new(section).join(*relative.each_filename.drop(1).map(&:to_s)).dirname.join(name).cleanpath
    public_parts = public_base.each_filename.map(&:to_s)
    source_repository = @repositories_by_section.fetch(public_parts.first, public_parts.first)
    candidates.concat(candidates_for(@source_root.join(source_repository, *public_parts.drop(1))))
    candidates.uniq
  end

  def candidates_for(base)
    stem = base.basename.to_s
    stem = "_#{stem}" unless stem.start_with?("_")
    dirname = base.dirname
    [dirname.join("#{stem}#{PARTIAL_SUFFIX}"), dirname.join("#{stem}.md.erb"), dirname.join("#{stem}.erb")]
  end

  class Variables
    def initialize(values)
      @values = values.transform_keys(&:to_s)
    end

    def method_missing(name, *arguments)
      return super unless arguments.empty?

      # The shared template_variables.yml intentionally leaves a number of
      # legacy variables undefined.  Middleman renders these as empty values;
      # do the same instead of aborting the complete conversion.
      @values[name.to_s]
    end

    def respond_to_missing?(name, include_private = false)
      true
    end
  end

  class RenderContext
    def initialize(renderer, current_file)
      @renderer = renderer
      @current_file = current_file
    end

    def get_binding
      binding
    end

    # Middleman metadata assignments occur in some topics. Their front matter
    # remains in the rendered Markdown, so this writable no-op is sufficient.
    def current_page
      @current_page ||= Page.new
    end

    class Page
      def data
        @data ||= Data.new
      end
    end

    class Data
      def method_missing(_name, *arguments)
        return nil if arguments.empty?
        return arguments.first if arguments.length == 1

        super
      end

      def respond_to_missing?(_name, _include_private = false)
        true
      end
    end

    def vars
      @renderer.instance_variable_get(:@variables)
    end

    def partial(name, *_arguments)
      @renderer.send(:render_partial, name, @current_file)
    end

    # Middleman's image_tag resolves a bare file name from the images directory.
    # Preserve explicit relative/absolute paths and external URLs unchanged.
    def image_tag(source, attributes = {})
      source = source.to_s
      source = "images/#{source}" if bare_image_filename?(source)

      attributes = attributes.transform_keys(&:to_s)
      attributes["src"] = source
      rendered = attributes.map do |key, value|
        %(#{key}="#{ERB::Util.html_escape(value)}")
      end.join(" ")
      "<img #{rendered}>"
    end

    private

    def bare_image_filename?(source)
      !source.start_with?("/", "./", "../", "#") &&
        !source.match?(%r{\A[a-z][a-z0-9+.-]*:}i) &&
        !source.include?("/")
    end

    # Translate Middleman's Mermaid helper to the syntax accepted by mdBook
    # preprocessors supporting Mermaid.
    def mermaid_diagram
      body = yield
      "```mermaid\n#{body.strip}\n```\n"
    end
  end
end

options = {
  source_root: "src/doc",
  destination_root: "build",
  variables_file: "src/doc/docs-book-cloudfoundry/config/template_variables.yml"
}

OptionParser.new do |parser|
  parser.banner = "Usage: #{File.basename($PROGRAM_NAME)} [options]"
  parser.on("--source DIR", "Input submodule directory (default: #{options[:source_root]})") { |value| options[:source_root] = value }
  parser.on("--output DIR", "Generated Markdown directory (default: #{options[:destination_root]})") { |value| options[:destination_root] = value }
  parser.on("--variables FILE", "template_variables.yml") { |value| options[:variables_file] = value }
  parser.on("-v", "--verbose", "Print rendered files") { options[:verbose] = true }
end.parse!

CloudFoundryRenderer.new(**options).render_all
