## Using musubi-ui

No provider or root wrapper is required — `musubi-ui` components read no
context/theme. Import and use them directly:

```tsx
import { Button, Card } from "musubi-ui";

function Example() {
  return (
    <Card title="Data platform">
      A small, composable pipeline your team can operate and extend.
      <Button variant="primary">Create automation</Button>
    </Card>
  );
}
```

### Styling idiom

This is not a utility-class system — each component ships its own styles
under a fixed class prefix (`musubi-button`, `musubi-card`,
`musubi-nori-band`), applied automatically. **Never invent new
`musubi-*` classes or override these components' internal structure.**
When you need layout glue *around* these components (spacing between them,
a custom container), use the design system's own CSS custom properties
rather than arbitrary values:

| Token | Value | Use |
|---|---|---|
| `--musubi-color-paper` | `#F2F0E8` | base surface |
| `--musubi-color-carbon` | `#111113` | ink/text |
| `--musubi-color-accent` | `#2563EB` | primary technical accent — CTAs, interactive states, code only. Never decorative. |
| `--musubi-color-accent-counter` | `#E85D3D` | sparse counter-tone — one highlight per view at most, never a default/primary action |
| `--musubi-color-border` | `#E3E3E9` | hairline borders |
| `--musubi-font-sans` | IBM Plex Sans stack | UI text |
| `--musubi-font-mono` | IBM Plex Mono stack | code, technical-register contexts |
| `--musubi-space-sm` / `-md` / `-lg` | `8px` / `16px` / `24px` | spacing scale |
| `--musubi-radius-sm` / `-md` | `7px` / `12px` | corner radius |

### Components

- **Button** — `variant`: `primary` (default, ink-blue) / `secondary`
  (outline, no accent) / `counter` (orange-red, sparing use only). `size`:
  `sm` / `md`.
- **Card** — content surface. Optional `title`; `padding`: `sm` / `md` /
  `lg`.
- **NoriBand** — the dark textured band from the brand identity, a
  functional device only (never decorative). `variant`: `footer` (site
  footer) / `code` (code-block container, sets the mono font). `as`:
  `footer` / `div`.

### Where the truth lives

Read `styles.css` (imports the compiled `_ds_bundle.css` with all of the
above) before styling anything by hand — it's the real, current source.
