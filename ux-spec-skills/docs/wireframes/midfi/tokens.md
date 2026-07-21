# Mid-Fi Tokens — Dataviz Kit

**Artifact root:** `ux-spec-skills/docs/`  
**Design system:** [Konstrukt](http://straatmini.tail56d80d.ts.net:4331/)  
**Source of truth:** `DESIGN_BRIEF.md` §7 · implement with `tokens.css` / `base.css` / `shell.css`  
**Lo-fi inputs:** `wireframes/lofi/` · **Companion:** `components.md`, `screens/`, `ui.html`  
**Accessibility target:** WCAG 2.1 AA

Tailwind class names below are **mapping aids for prototyping**. Production docs shell uses Konstrukt CSS variables—do not restyle the shell with Tailwind/shadcn from `examples/html/`.

---

## Spacing

| Token | px | Konstrukt / CSS | Tailwind |
|-------|----|-----------------|----------|
| space-0 | 0 | `0` | `p-0` / `gap-0` |
| space-2 | 2 | — | `p-0.5` |
| space-4 | 4 | micro gaps | `p-1` |
| space-6 | 6 | — | `p-1.5` |
| space-8 | 8 | tight module padding | `p-2` |
| space-12 | 12 | nav item padding | `p-3` |
| space-16 | 16 | module / card padding | `p-4` |
| space-24 | 24 | section gaps | `p-6` |
| space-32 | 32 | page header bottom | `p-8` |

**Layout**

| Region | Desktop | Mobile |
|--------|---------|--------|
| Sidebar width | ~240px sticky | drawer overlay |
| Main max content | fluid in shell | full width − padding |
| Page padding | 24–32 | 16 |
| Card grid gap | 16 | 12 |
| Module stack gap | 24 | 16 |

---

## Typography

| Role | Family | Size | Line height | Weight | Tailwind |
|------|--------|------|-------------|--------|----------|
| Display / brand / H1 | Space Grotesk `--font-display` | 2xl (24–28px) | 1.2 | 600–700 | `font-semibold text-2xl` |
| Section label | Space Grotesk or Inter | xs–sm uppercase | 1.3 | 600 | `text-xs font-semibold tracking-wide` |
| Body | Inter `--font-sans` | base (16px) | 1.5 | 400 | `text-base` |
| Tagline | Inter | lg (18px) | 1.4 | 400 | `text-lg` |
| Card title | Inter / display | lg | 1.3 | 600 | `text-lg font-semibold` |
| Card detail / meta | Inter | sm (14px) | 1.4 | 400 | `text-sm` |
| Micro-label | Inter | xs (12px) | 1.3 | 500–600 | `text-xs font-medium` |
| Mono path / version | SF Mono / Fira Code `--font-mono` | sm–xs | 1.4 | 400 | `font-mono text-sm` |

**Hierarchy rules**

- One H1 per page (`.page-header`).
- Category labels use `.section-label` / `.micro-label`, not competing H1s.
- Prompt blocks use mono; body copy never uses mono for prose.

---

## Color

### Neutrals

| Token | Hex | Role | Tailwind approx |
|-------|-----|------|-----------------|
| `--bg` | `#F5F5F0` | Page background | `bg-stone-100` (warm) |
| `--surface` / `--card` | `#FFFFFF` | Modules, cards, nav surface | `bg-white` |
| `--ink` / `--text` | `#0A0A0A` | Primary text, borders | `text-neutral-950` / `border-neutral-950` |
| `--text-muted` | `#6A6A6A` | Meta, empty states, skeletons | `text-neutral-500` |
| Border / rule | `#0A0A0A` @ full or hairline | Flat hierarchy (ink rules) | `border-neutral-950` |

### Brand / accent

| Token | Hex | Role | Tailwind approx |
|-------|-----|------|-----------------|
| `--accent` | `#067F8A` | Active nav left edge, accent-left modules, focus ring, primary quiet CTA | `teal-700` ≈ `#0f766e` — prefer exact `#067F8A` |

### Semantic

| Token | Use | Notes |
|-------|-----|-------|
| Accent | Focus, active nav, Router CTA left bar | Not decorative fill on every card |
| Muted | “No sample yet”, loading meta | Must remain readable ≥ 4.5:1 on `--bg` / white where text is required |
| Destructive (error) | Error page headline / optional border | Keep ink-first; accent optional for CTA only |
| Success | Not required for v1 browse UI | — |
| Badge variants | sample / HTML meta | `.badge` family; ink border + muted fill, not colored pills |

### Contrast (WCAG AA)

| Pair | Expected | Check |
|------|----------|-------|
| `#0A0A0A` on `#F5F5F0` | Pass AAA for body | Default text |
| `#0A0A0A` on `#FFFFFF` | Pass AAA | Cards / modules |
| `#6A6A6A` on `#FFFFFF` | ≥ 4.5:1 for text-sm+ | Empty Related; if fails at xs, bump to `#555` or keep size ≥ 14px |
| `#067F8A` on `#F5F5F0` | Verify for text links | Prefer accent as border/underline; large text OK |
| Focus ring | Accent 2px solid + 2px offset on surface | Visible against bg and white |

**Theme:** `data-mode` / `data-palette` via Konstrukt `theme.js`. Mid-fi assumes light default; dark mode inherits same structure with swapped token values—do not invent a parallel palette here.

---

## Radius

| Token | Value | Tailwind | Konstrukt |
|-------|-------|----------|-----------|
| radius-sm | 0 | `rounded-none` | `--radius: 0` |
| radius-md | 0 | `rounded-none` | — |
| radius-lg | 0 | `rounded-none` | — |
| radius-full | 0 (avoid pills) | `rounded-none` | — |

**Rule:** Flat elevation. No rounded cards, no pill clusters. Hierarchy from ink borders and accent left edges.

---

## Shadows

| Token | Value | Tailwind | Konstrukt |
|-------|-------|----------|-----------|
| shadow-sm | none | `shadow-none` | `--shadow: none` |
| shadow-md | none | `shadow-none` | — |
| shadow-lg | none | `shadow-none` | — |

Drawer/backdrop uses dimmed overlay (`rgba(0,0,0,0.4)` approx), not drop shadow on panels.

---

## Motion (mid-fi notes)

| Interaction | Behavior |
|-------------|----------|
| Drawer open/close | Short transform / opacity (~150–200ms); respect `prefers-reduced-motion` |
| Focus | Instant ring; no bounce |
| Skeleton | Static muted blocks (optional subtle pulse only if reduced-motion allows) |

---

## Breakpoints

| Name | Min width | Shell |
|------|-----------|-------|
| Mobile | ~375px | Top bar + drawer |
| Desktop | ≥1024px | Sticky left sidebar |

---

## Do not

- Purple gradients, glow, multi-layer shadows, rounded-full pills
- Borrow Tailwind dashboard styling from `examples/html/` into the docs shell
- Use “hero” / “heroes” in UI copy for people (label: **Experts**)
