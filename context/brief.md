# Prestige Joinery — Website Brief

This repository is the website for Prestige Joinery, a small local business in Carrum Downs, Victoria, Australia that handcrafts bespoke small furniture items of high quality.

## Goal

Advertise the business's services with contact information and demonstrations of past work, to attract new customers. The tone should be compelling, sleek and prestigious — premium craftsmanship, not mass production.

## Hypothetical business (what the site currently models)

The business is real-in-intent but very early: the owner is a highly skilled carpenter of four
decades, exploring a pivot to fine furniture full time. He has **not named the business yet**
(so "Prestige Joinery" stays as a deliberately-easy-to-replace placeholder) and is **setting up
a workshop**. To make the site feel real for review, it currently models a concrete hypothetical:

- A small one-person **workshop**, ~4 × 8 m, plus a ~4 × 4 m room to store finished pieces.
- Open **Monday–Friday, 8am–4pm**.
- First finished piece intended for sale: a **solid Blackwood coffee table** (planned for the
  shop — see `shop-concept.md`).
- Future/stretch interests (once healed): **resin** work (no experience yet) and big, simple
  **reclaimed pieces** such as train-sleeper shelving.

Deeper market and product research supporting this lives in the sibling research repo
(`D:\Code Projects\prestige-joinery-research`).

## Current Status

Built for demoing to the business owner. Testimonials and contact details are still
**placeholders**, and the photography is AI-generated **mock imagery** for review (not photos of
real pieces). The site is a **static front end** — no build step, no dependencies. An earlier
pass prototyped a simulated store; it has been removed to keep the site clean, and the store is
being redesigned as a separate pass (see `shop-concept.md`).

Placeholders to replace:

- **Photography** — images in `assets/img/` are AI-generated mock stand-ins. Replace with real photos of the actual maker, workshop and pieces.
- **Products** — service categories (occasional furniture, boxes & keepsakes, custom commissions) and gallery items are educated guesses; confirm against the real product range.
- **Contact details** — phone `0400 000 000`, email `hello@prestigejoinery.com.au`, street address, and opening hours are all placeholders.
- **Testimonials** — invented; replace with real client quotes (with permission).
- **Service area** — assumed Carrum Downs / Frankston / Mornington Peninsula / south-east Melbourne; confirm.

## Tech Stack

- Plain static HTML/CSS/JS — no framework, no bundler, no build step, no dependencies.
- Shared CSS in `assets/css/site.css` (light/dark theming via CSS custom properties).
- Tiny progressive JS in `assets/js/` (`theme-boot.js` prevents theme flash, `theme-toggle.js`
  cycles auto/light/dark).
- Web-optimised images in `assets/img/` (~90–260 KB JPGs).
- Root-relative asset paths; serves from any static file server.

The simulated shop (mock checkout, server-side inventory reservation) is **not built** in this
pass. Its high-level design is captured in `shop-concept.md` for a later, separate pass.

## Design Direction

- Warm timber and brass palette; serif display headings (Palatino stack) over a sans-serif body for a prestige feel.
- Sticky header, restrained cards, full-width dark "feature panel" statement sections.
- Light and dark themes with an auto/light/dark toggle.
- Accessible semantic HTML, responsive down to 320px.
- Australian English in customer-facing copy (local audience); American English in code.

## Structure

```text
/
  index.html        Home: hero, what we make, the maker, quality, process, recent pieces, testimonials, contact
  gallery.html      Portfolio grouped by category (tables, boxes, commissions)
  assets/
    css/site.css
    js/theme-boot.js
    js/theme-toggle.js
    img/            Web-optimised imagery (mock stand-ins for now)
  context/
    brief.md        This file — durable project intent and guidance
    shop-concept.md High-level design for the (not-yet-built) simulated shop
```

## Development Notes

- Local preview: `python -m http.server`, then http://localhost:8000.
- Keep durable decisions and session outcomes in this file so future sessions can recover intent quickly.

## Session Log

### 2026-07-09 (revision + imagery)

- Replaced every gradient placeholder with real (AI-generated, web-optimised) photography:
  hero, workshop, the maker's hands, category cards, recent pieces and the full gallery.
- Rewrote the home copy to lead with the **solo master-craftsman story** and heirloom
  positioning (four decades, hand-cut joinery, signed & dated); added a "The Maker" section.
- **Removed the prototyped shop** (server, `shop.html`, inventory, store JS/CSS) to keep this a
  clean static site; the store will be a separate pass. Captured its design in `shop-concept.md`.
- Set up the Gemini "Nano Banana" image pipeline in the research repo
  (`research/website-research/image-prompts/`, incl. a `generate.py` batch generator).

### 2026-07-09 (earlier — hypothetical business + shop prototype, since removed)

- Reframed the site around a concrete **hypothetical business** (workshop ~4×8 m + 4×4 m store,
  Mon–Fri 8am–4pm, first product a Blackwood coffee table). Kept "Prestige Joinery" as a
  deliberate placeholder name.
- Prototyped a mock store with server-side reservation (double-buy protection), then removed it
  per the plan to rebuild it in a dedicated pass.

### 2026-07-07

- Started the Prestige Joinery site; mirrored the static no-build stack from `2-0-Studios.github.io`.
- Built v1 home page and gallery page with placeholder content throughout.
- Rethemed the shared CSS with a timber/brass palette and serif display headings.
- Added this brief.
