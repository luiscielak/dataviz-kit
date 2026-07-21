# Color Roles — Dataviz Kit (Hi-Fi)

**Source:** mid-fi `tokens.md` · implement via `theme.md` CSS variables  
**Default mode:** light · dark inherits structure with swapped values

---

## Role → token

| Role | Token | Light | Dark | Usage |
|------|-------|-------|------|-------|
| Page canvas | `--bg` | `#F5F5F0` | `#121212` | App shell background |
| Surface / card | `--surface` / `--card` | `#FFFFFF` | `#1A1A1A` | Modules, cards, nav, tables |
| Ink / primary text | `--ink` / `--text` | `#0A0A0A` | `#F5F5F0` | Body, headings, borders, rules |
| Muted text | `--text-muted` | `#6A6A6A` | `#A3A3A3` | Meta, empty Related, skeletons captions |
| Border / rule | `--border` | `#0A0A0A` | `#F5F5F0` | 1px flat hierarchy |
| Brand accent | `--accent` | `#067F8A` | `#2BB3C0` | Active nav left edge, accent-left modules, focus ring, quiet CTA emphasis |
| Accent on accent | `--accent-fg` | `#FFFFFF` | `#0A0A0A` | Rare filled accent control (prefer quiet outline) |
| Overlay | `--overlay` | `rgba(0,0,0,0.4)` | `rgba(0,0,0,0.55)` | Mobile drawer backdrop |
| Skeleton | `--skeleton` | `#DDDCD6` | `#2A2A2A` | Loading blocks |
| Destructive | ink-first | `--ink` | `--ink` | Error headline; CTA may use accent border only |
| Success | — | N/A v1 | N/A v1 | Omit |

---

## Component application

| Component | Default | Hover | Focus | Active / current | Disabled / empty |
|-----------|---------|-------|-------|------------------|------------------|
| Quiet button | ink text · ink border · surface fill | bg `--bg` | 2px accent ring + 2px offset | thicker border or accent tick | muted text; omit when “empty Related” |
| Index card | surface · 1px ink | bg `--bg` | accent ring on link | — | omit card |
| Module default | surface · ink border | — | focus-within on controls | — | — |
| Module accent-left | + 4px `--accent` left | — | — | Purpose, Router CTA, Bio | — |
| Nav item | ink | bg `--bg` | accent outline | accent left bar + `aria-current` | N/A |
| Badge | ink border · bg `--bg` | — | — | — | not interactive |
| Table header | bg `--bg` | — | — | — | — |
| Table cell | surface | optional row bg `--bg` | link focus ring | — | — |
| Empty Related | muted sentence only | — | — | — | never fake `href="#"` |
| Error panel | ink title · muted body | CTA hover | CTA focus | — | page-level recovery |
| Theme toggle | ink border icon | bg `--bg` | accent ring | pressed ink fill optional | — |

---

## Semantic usage rules

1. **Accent is structural.** Use for focus, current nav, accent-left modules, and Router CTA emphasis—not as a wash on every card.
2. **Muted is for absence and meta.** Empty Related = muted text, not disabled buttons.
3. **Badges are ink + muted fill.** Not colored status pills (`sample`, `HTML`).
4. **Links in Related** may use accent for text links; keep underlines or clear affordance—do not rely on color alone.
5. **Error stays ink-first.** Prefer honest copy + recovery CTAs over red chrome.

---

## Contrast (WCAG AA)

| Pair | Expectation |
|------|-------------|
| `#0A0A0A` on `#F5F5F0` | AAA body |
| `#0A0A0A` on `#FFFFFF` | AAA cards |
| `#6A6A6A` on `#FFFFFF` | ≥ 4.5:1 at `text-sm+`; if xs fails, bump to `#555` or size ≥ 14px |
| `#067F8A` on `#F5F5F0` | Prefer border/underline; verify for text links |
| Dark: `#F5F5F0` on `#121212` | AAA body |
| Dark: `#A3A3A3` on `#1A1A1A` | ≥ 4.5:1 for meta at `text-sm+` |
| Focus ring | Accent 2px solid + 2px offset visible on bg and surface |

---

## shadcn / Tailwind role map

| Semantic | CSS var | shadcn token |
|----------|---------|--------------|
| background | `--bg` | `background` |
| foreground | `--ink` | `foreground` |
| card | `--surface` | `card` |
| muted | `--bg` / `--text-muted` | `muted` / `muted-foreground` |
| primary | `--accent` | `primary` |
| border | `--border` | `border` |
| ring | `--accent` | `ring` |
| destructive | ink-first | override away from red default for v1 docs UI |
