# Musubi — site

Public landing page for [musubi.lat](https://musubi.lat).

Hosted on Cloudflare Pages. See [AGENTS.md](AGENTS.md) before making design
or copy changes.

## Deploys & rollback

Cloudflare Pages auto-deploys on push to `main` (preview deploys on PRs)
once the git integration is connected, and keeps every past deployment —
roll back to any previous one from the Cloudflare dashboard or API with no
custom tooling needed. DNS/hosting wiring lives in `musubi-studio/infra`.
