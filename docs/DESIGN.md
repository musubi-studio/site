# Musubi — design tokens

Public-safe design system reference for this repo. Full brand rationale
lives in the private `musubi-studio/brand` repo — this file only has what's
needed to build the site.

## Palette

- Raw paper: `#F9F9FB` (base surface)
- Carbon black: `#111113` (text/ink)
- Ink blue: `#2563EB` — primary technical accent. CTAs, interactive states,
  and code only. Never decorative.
- Orange-red: `#E85D3D` — secondary counter-tone, used sparingly (a single
  highlight, a badge, an accent inside the isotype). Never a primary CTA
  color, never the default over ink blue.
- Neutral grey: `#8C8C90` — pairs with carbon black for two-tone/monochrome
  contexts (e.g. `assets/isotype-bw.png`).

## Isotype

A 16-bit pixel-art onigiri — the logomark. File: `assets/isotype.png`
(200×200, transparent, hard pixel edges — don't resample). Monochrome
version: `assets/isotype-bw.png` (black + grey, not black + white — flat
black-on-white read as too stark). Under a Vecteezy Free License — see
[AGENTS.md](../AGENTS.md) for the mandatory attribution requirement before
this asset ships on a live page.

## Nori

Dark, textured horizontal band. Functional UI device (footer, code block
containers) — never decorative illustration.

## Typography / voice

IBM Plex Sans (UI) + IBM Plex Mono (code/technical-register contexts).
Direct, no inflated adjectives, no "handcrafted"/artisanal framing.

## Coherence check

Does this connect, compose, simplify, or evolve something? If a design or
copy choice needs a big claim to justify itself, drop it.
