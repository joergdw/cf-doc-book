#!/usr/bin/env ruby
# frozen_string_literal: true

# Render Cloud Foundry's Markdown/ERB topic files for consumption by mdBook.
#
# The input layout is the git-submodule tree in src/doc.  The output retains
# the Bookbinder section directories (for example concepts/ and running/) so
# that repository-relative images and links have a stable destination.

require "erb"
require "fileutils"
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
    relative.sub_ext("").sub_ext("").sub_ext(".md")
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
    base = name.start_with?(".") ? current_file.dirname.join(name) : current_file.dirname.join(name)
    dirname = base.dirname
    stem = base.basename.to_s
    stem = "_#{stem}" unless stem.start_with?("_")
    [dirname.join("#{stem}#{PARTIAL_SUFFIX}"), dirname.join("#{stem}.md.erb"), dirname.join("#{stem}.erb")]
  end

  class Variables
    def initialize(values)
      @values = values.transform_keys(&:to_s)
    end

    def method_missing(name, *arguments)
      return super unless arguments.empty? && @values.key?(name.to_s)

      @values[name.to_s]
    end

    def respond_to_missing?(name, include_private = false)
      @values.key?(name.to_s) || super
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

    def vars
      @renderer.instance_variable_get(:@variables)
    end

    def partial(name, *_arguments)
      @renderer.send(:render_partial, name, @current_file)
    end

    # Middleman's image_tag has a single use in the topic corpus.  Emit normal
    # HTML, retaining all supplied attributes, which mdBook passes through.
    def image_tag(source, attributes = {})
      attributes = attributes.transform_keys(&:to_s)
      attributes["src"] = source
      rendered = attributes.map { |key, value| %(#{key}="#{ERB::Util.html_escape(value)}") }.join(" ")
      "<img #{rendered}>"
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
