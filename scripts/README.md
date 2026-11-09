# Cloud Foundry → mdBook preprocessing

The original Cloud Foundry documentation is a set of Git submodules below
`src/doc/`.  Its topic files are Markdown containing ERB and use Bookbinder /
Middleman conventions.  These scripts create an intermediate mdBook-oriented
source tree in `build/`.

```sh
ruby scripts/render_topics.rb
ruby scripts/copy_resources.rb
```

Both commands accept `--source DIR`, `--output DIR`, and `--verbose`.  The
renderer additionally accepts `--variables FILE`.

## Output layout

Paths beneath `src/doc` are retained.  A topic such as

```text
src/doc/docs-cloudfoundry-concepts/diego/diego-architecture.html.md.erb
```

becomes

```text
build/docs-cloudfoundry-concepts/diego/diego-architecture.md
```

and a resource such as `images/example.png` is copied to the corresponding
location beneath `build/`.  Keeping this layout makes existing relative image
references valid.  Before invoking `mdbook build`, a later assembly step should
map repository names to the public section names from
`src/doc/docs-book-cloudfoundry/config.yml` (for example,
`docs-cloudfoundry-concepts` → `concepts`) and generate `SUMMARY.md` from the
Bookbinder subnavigation.

## ERB support and limits

`render_topics.rb` always loads
`src/doc/docs-book-cloudfoundry/config/template_variables.yml` and exposes its
`template_variables` mapping as `vars`, so `<%= vars.app_runtime_abbr %>` is
expanded.  It also resolves topic partials (`partial 'foo'`), emits the one
observed `image_tag` usage as HTML, and translates `mermaid_diagram` blocks to
fenced Mermaid code blocks.

The source corpus is **not** limited to simple variable expansion: it contains
partials, ERB comments, assignments to Middleman page data, and Mermaid helper
blocks.  The central variables file is the only configuration file directly
needed for the observed topic ERB variable expansions, but it is not the only
input needed for a complete site: `config.yml` defines repository-to-section
mappings and the Middleman subnavigation/layout files define navigation and the
old site shell.  The scripts intentionally do not migrate that Middleman shell,
analytics, redirects, CSS, or JavaScript.

A rendering error is intentional: it identifies an unsupported Middleman helper
or a missing partial rather than silently generating incomplete Markdown.
