#!/usr/bin/env ruby
# frozen_string_literal: true

# Copy topic resources into the same section-relative layout created by
# render_topics.rb.  This deliberately excludes source/templates, repository
# metadata, and Middleman's CSS/JS build machinery.

require "fileutils"
require "optparse"
require "pathname"
require "yaml"

ASSET_EXTENSIONS = %w[
  .png .jpg .jpeg .gif .svg .webp .ico .pdf .mp4 .webm .ogg .mp3 .wav
  .woff .woff2 .ttf .otf .eot
].freeze

options = { source_root: "src/doc", destination_root: "build", verbose: false }
OptionParser.new do |parser|
  parser.banner = "Usage: #{File.basename($PROGRAM_NAME)} [options]"
  parser.on("--source DIR", "Input submodule directory (default: #{options[:source_root]})") { |value| options[:source_root] = value }
  parser.on("--output DIR", "Generated Markdown directory (default: #{options[:destination_root]})") { |value| options[:destination_root] = value }
  parser.on("-v", "--verbose", "Print copied files") { options[:verbose] = true }
end.parse!

source_root = Pathname(options[:source_root]).realpath
destination_root = Pathname(options[:destination_root]).expand_path

# Keep asset locations aligned with the Markdown locations emitted by
# render_topics.rb: Bookbinder maps checkout names to public directories.
config_file = source_root.join("docs-book-cloudfoundry", "config.yml")
sections = if config_file.file?
             (YAML.safe_load_file(config_file, aliases: true) || {}).fetch("sections", [])
           else
             []
           end
section_directories = sections.each_with_object({}) do |section, mapping|
  repository = section.dig("repository", "name")&.split("/")&.last
  directory = section["directory"]
  mapping[repository] = directory if repository && directory
end
copied = 0

Dir.glob(source_root.join("**", "*").to_s).sort.each do |filename|
  source = Pathname(filename)
  next unless source.file?
  next unless ASSET_EXTENSIONS.include?(source.extname.downcase)

  relative = source.relative_path_from(source_root)
  repository, *path = relative.each_filename.map(&:to_s)
  # Assets belonging to the overview repository's Middleman site shell are not
  # topic resources. A future mdBook theme migration can copy them explicitly.
  next if repository == "docs-book-cloudfoundry"

  section = section_directories.fetch(repository, repository)
  destination = destination_root.join(section, *path)
  FileUtils.mkdir_p(destination.dirname)
  FileUtils.cp(source, destination, preserve: true)
  copied += 1
  warn "copy #{relative}" if options[:verbose]
end

warn "Copied #{copied} resources to #{destination_root}" if options[:verbose]
