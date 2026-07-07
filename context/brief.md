# Prestige Joinery — Website Brief

This repository is the website for Prestige Joinery, a small local business in Carrum Downs, Victoria, Australia that handcrafts bespoke small furniture items of high quality.

## Goal

Advertise the business's services with contact information and demonstrations of past work, to attract new customers. The tone should be compelling, sleek and prestigious — premium craftsmanship, not mass production.

## Current Status (v1)

First version, built for demoing to the business owner. All products, photos, testimonials and contact details are **placeholders** and will be replaced once the business provides real content.

Placeholders to replace:

- **Photography** — all images are flat timber-tone gradient tiles (`.img-placeholder` / `.banner-flat` / `.feature-panel` with `ph-*` classes). Swap for real product and workshop photos.
- **Products** — service categories (occasional furniture, boxes & keepsakes, custom commissions) and gallery items are educated guesses; confirm against the real product range.
- **Contact details** — phone `0400 000 000`, email `hello@prestigejoinery.com.au`, street address, and opening hours are all placeholders.
- **Testimonials** — invented; replace with real client quotes (with permission).
- **Service area** — assumed Carrum Downs / Frankston / Mornington Peninsula / south-east Melbourne; confirm.

## Tech Stack

Mirrors the no-build GitHub Pages stack of `D:\Code Projects\2-0-Studios.github.io`:

- Plain static HTML, no framework, no bundler, no build step.
- Shared CSS in `assets/css/site.css` (light/dark theming via CSS custom properties).
- Tiny progressive JS in `assets/js/` (`theme-boot.js` prevents theme flash, `theme-toggle.js` cycles auto/light/dark).
- Root-relative asset paths, so the site serves directly from GitHub Pages or any static server.

## Design Direction

- Warm timber and brass palette; serif display headings (Palatino stack) over a sans-serif body for a prestige feel.
- Sticky header, restrained cards, full-width dark "feature panel" statement sections.
- Light and dark themes with an auto/light/dark toggle.
- Accessible semantic HTML, responsive down to 320px.
- Australian English in customer-facing copy (local audience); American English in code.

## Structure

```text
/
  index.html        Home: hero, services, about, process, recent pieces, testimonials, contact
  gallery.html      Portfolio grouped by category (tables, boxes, commissions)
  context/
    brief.md        This file — durable project intent and guidance
  assets/
    css/site.css
    js/theme-boot.js
    js/theme-toggle.js
```

## Development Notes

- Root-relative paths (`/assets/...`) behave most like production when served from the repo root; use any simple static server for local preview (e.g. `python -m http.server`).
- Keep durable decisions and session outcomes in this file so future sessions can recover intent quickly.

## Session Log

### 2026-07-07

- Started the Prestige Joinery site; mirrored the static no-build stack from `2-0-Studios.github.io`.
- Built v1 home page and gallery page with placeholder content throughout.
- Rethemed the shared CSS with a timber/brass palette and serif display headings.
- Added this brief.
