# Agent instructions — musubi-studio/site

This repo is **public**. Guardrails:

- Only brand name allowed anywhere in this repo: **Musubi**. No client
  names, partner names, internal codenames, pricing, or contracts.
- Design tokens (palette, isotype, typography): [docs/DESIGN.md](docs/DESIGN.md) —
  read before any visual/copy decision. Same tokens are also loaded via the
  `musubi-brand-design` project skill.
- No secrets, API keys, or `.env` values ever committed here.
- Docs in English, concise.
- GitHub Actions in `.github/workflows/` are pinned to a commit SHA, never
  a mutable tag (`@v4`, `@main`) — see `musubi-brand/AGENTS.md` for why.
- **`assets/isotype.png` (the onigiri mark) is under a Vecteezy Free
  License — attribution is legally required, not optional.** Must credit
  "Vecteezy.com" (linked) somewhere in every rendered page. Currently in
  the footer of `site/src/pages/index.astro`. Any new page using this asset
  must include the same attribution.
