# Shop concept (high-level)

The plan for letting Prestige Joinery **sell finished one-off pieces directly from the site**.
This is a design sketch for a **separate build pass** — the shop is intentionally *not* in the
current site. A working prototype was built earlier and then removed to keep the marketing site
clean; this captures what it should be so we can rebuild it deliberately.

A fuller build spec (with the exact API and file layout that were prototyped) lives in the
research repo at `research/website-research/simulated-store-spec.md`.

## What it's for

The maker builds **single, one-off pieces** (the first being a Blackwood coffee table). He wants
to list a finished piece and sell it online. Because each piece is unique (quantity of one), the
core requirement is unusual for a shop: it must **never let two people buy the same piece at
once**. That was his specific worry — two customers hitting "buy" on the one table.

## Guiding constraints (deliberately minimal)

- **Mock only, for now** — simulated checkout, **no real payment** is taken, validated or stored.
- **No login, no user accounts.**
- **No database.**
- **No admin UI** — the owner isn't managing a dashboard. Inventory is edited "by hand" in a
  simple file (by us, over time). This avoids all the auth/security/database scope until it's
  genuinely wanted.

## Core design

### Inventory
- A single hand-edited file (e.g. `data/inventory.json`) is the source of truth: one entry per
  piece with name, price, timber, dimensions, weight, description, image, and a `status`
  (`available` / `sold` / `hidden`).
- To relist, sell off, or hide a piece, you edit that file. `hidden` keeps a draft off the shop.

### Preventing the double-buy (the important bit)
- Client-side code alone **cannot** guarantee this — two browsers can't see each other. So the
  shop needs a **tiny server** that holds a piece while someone checks out.
- Flow: **Buy → reserve** (the server locks that piece for ~10 minutes) → **checkout → confirm**.
  A second person who clicks Buy on a held piece is politely refused ("someone's checking out —
  try again shortly"). Abandoned reservations lapse automatically.
- This genuinely solves the race: the server processes one reservation at a time, so the piece
  can only be handed to one buyer.

### Checkout
- Single-item: reserve one piece, then a **mock** payment form (clearly labelled demo — no real
  card processing) that always "succeeds" and returns an order reference.
- Not a multi-item cart. One-off pieces are quantity one, so a cart adds complexity without
  modelling the real risk; single-item reserve→pay is both simpler and a better fit.

### Managing it (no dashboard)
- Adding/pricing/hiding/selling pieces = editing the inventory file. That's the whole "admin".
- Web-made sales can be transient (reset when the server restarts); marking a piece permanently
  sold is a one-line edit to its `status`.

## Deployment implication

Adding the shop turns the site from pure static into a **small app** (a lightweight server that
serves the pages *and* the shop API). On Railway that means the service runs a start command
rather than serving files statically. Worth noting because the current marketing site is static
and needs no server.

## Deliberately out of scope (until asked)

- Real payments (Stripe etc.), receipts, tax/GST handling.
- Accounts, saved details, order history.
- A real database or persistent order store.
- An admin interface for the owner.
- Shipping calculation, multi-quantity stock, discount codes.

## Open questions before the build pass

- Real payments now or keep it a "reserve / enquire to buy" flow (deposit by invoice)?
- Does he want a small line of ready-made stock, or commission-only with the shop as a showcase?
- Postage/delivery model and pricing for finished pieces.
- Whether "sold" should persist across restarts (needs a small persistent store) or stay simple.
