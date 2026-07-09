# Prestige Joinery

Website for **Prestige Joinery** (placeholder name) — bespoke handcrafted furniture, made in
Carrum Downs, Victoria, Australia.

Plain static HTML/CSS/JS with no build step. See `context/brief.md` for project intent, the
hypothetical business it models, and placeholder status.

## Running locally

Serve the repo root with any static file server, e.g.:

```
python -m http.server
```

Then open http://localhost:8000. There is no build step and nothing to install.

## Structure

- `index.html` — home: hero, what we make, the maker, quality, process, recent pieces,
  testimonials, contact.
- `gallery.html` — portfolio grouped by tables, boxes & keepsakes, and custom commissions.
- `assets/css/site.css` — shared styles (timber/brass palette, serif display headings,
  light/dark theming via CSS custom properties).
- `assets/js/` — `theme-boot.js` (prevents theme flash) and `theme-toggle.js` (auto/light/dark).
- `assets/img/` — web-optimised photography (currently AI-generated mock imagery).
- `context/` — durable project notes, including `shop-concept.md`.

## Images

Images are optimised JPGs (~90–260 KB each). They are **mock/placeholder** imagery for review,
to be replaced with real photos of the actual maker, workshop and pieces. The prompts that
generated them live in the sibling research repo at
`prestige-joinery-research/research/website-research/image-prompts/`.

## The shop (planned, not built)

An earlier pass prototyped a simulated store; it has been removed to keep this a clean static
site. The store is being (re)designed as a separate pass — see
`context/shop-concept.md` for the high-level design.
