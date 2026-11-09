# Command runner for the Cloud Foundry documentation preprocessors.
SHELL := /bin/sh

SOURCE_ROOT := src/doc
BUILD_ROOT := build
RENDERER := scripts/render_topics.rb
RESOURCE_COPIER := scripts/copy_resources.rb

.PHONY: all build mdbook render resources clean help

all: build

# Always rebuild; this Makefile intentionally does not track file changes.
build: render resources mdbook

# Generate the Markdown source tree, then build the HTML book using book.toml.
mdbook: render resources
	mdbook build

render: clean
	mkdir --parents $(BUILD_ROOT)
	ruby $(RENDERER) --source $(SOURCE_ROOT) --output $(BUILD_ROOT)

resources: render
	ruby $(RESOURCE_COPIER) --source $(SOURCE_ROOT) --output $(BUILD_ROOT)

clean:
	rm --recursive --force $(BUILD_ROOT)

help:
	@printf '%s\n' \
		'make build      Render topics and copy resources into build/.' \
		'make mdbook     Build the rendered documentation as an mdBook in book/html/.' \
		'make render     Recreate build/ and render Markdown topics only.' \
		'make resources  Copy resources into the existing build/ tree.' \
		'make clean      Remove generated build/.'
