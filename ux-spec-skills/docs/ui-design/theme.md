# Theme — Dataviz Kit (Hi-Fi)

**Artifact root:** `ux-spec-skills/docs/`  
**Source:** `wireframes/midfi/tokens.md` · `DESIGN_BRIEF.md` §7  
**Design system:** Konstrukt  
**Modes:** light (default) · dark (`data-mode="dark"`)  
**Accessibility:** WCAG 2.1 AA

Implement with Konstrukt CSS variables (`tokens.css` / `base.css` / `shell.css`). Tailwind / shadcn class names below are mapping aids—do not restyle the docs shell with dashboard demo styles from `examples/html/`.

---

## CSS variables

```css
:root,
[data-mode="light"] {
  --bg: #F5F5F0;
  --surface: #FFFFFF;
  --card: #FFFFFF;
  --ink: #0A0A0A;
  --text: #0A0A0A;
  --text-muted: #6A6A6A;
  --border: #0A0A0A;
  --accent: #067F8A;
  --accent-fg: #FFFFFF;
  --destructive: #0A0A0A; /* ink-first; optional accent CTA only */
  --overlay: rgba(0, 0, 0, 0.4);
  --skeleton: #DDDCD6;
  --radius: 0;
  --shadow: none;
  --font-display: "Space Grotesk", sans-serif;
  --font-sans: Inter, sans-serif;
  --font-mono: ui-monospace, "SF Mono", "Fira Code", monospace;
  --sidebar-width: 240px;
  --focus-ring: 2px solid var(--accent);
  --focus-offset: 2px;
}

[data-mode="dark"] {
  --bg: #121212;
  --surface: #1A1A1A;
  --card: #1A1A1A;
  --ink: #F5F5F0;
  --text: #F5F5F0;
  --text-muted: #A3A3A3;
  --border: #F5F5F0;
  --accent: #2BB3C0;
  --accent-fg: #0A0A0A;
  --destructive: #F5F5F0;
  --overlay: rgba(0, 0, 0, 0.55);
  --skeleton: #2A2A2A;
}
```

Dark mode keeps the same structure (flat borders, zero radius, accent left edge). Swap values only—do not invent a parallel visual language.

---

## Brand & accent

| Role | Light | Dark | Notes |
|------|-------|------|-------|
| Brand / product | Dataviz Kit · Space Grotesk | same | Suite: The Hooman Loop |
| Page background | `#F5F5F0` | `#121212` | Warm stone, not cream-terracotta AI default |
| Accent | `#067F8A` | `#2BB3C0` | Active nav, accent-left modules, focus, quiet CTA edge |
| Primary text | `#0A0A0A` | `#F5F5F0` | Ink rules for hierarchy |

Accent is structural (border / underline / left bar), not decorative fill on every card.

---

## Typography scale

| Role | Token / class | Spec |
|------|---------------|------|
| Display / H1 | `--font-display` | 24–28px · 600–700 · lh 1.2 |
| Section label | display or sans | xs–sm uppercase · tracking wide · 600 |
| Body | `--font-sans` | 16px · 400 · lh 1.5 |
| Tagline | Inter | 18px · 400 · lh 1.4 |
| Card title | display / sans | ~lg · 600 |
| Meta / detail | Inter | 14px · muted |
| Micro-label | Inter | 12px · 500–600 · uppercase |
| Path / version | `--font-mono` | sm–xs |

**Rules:** One H1 per page. Prompt blocks use mono; prose never uses mono.

---

## Spacing

| Token | px | Use |
|-------|-----|-----|
| space-4 | 4 | micro gaps |
| space-8 | 8 | tight module padding |
| space-12 | 12 | nav item padding · mobile card gap |
| space-16 | 16 | card / module padding · mobile page pad |
| space-24 | 24 | section gaps · desktop page pad |
| space-32 | 32 | page header bottom |

| Region | Desktop | Mobile |
|--------|---------|--------|
| Sidebar | ~240px sticky | drawer overlay |
| Page padding | 24–32 | 16 |
| Card grid gap | 16 | 12 |
| Module stack | 24 | 16 |

---

## Radius & elevation

| Token | Value |
|-------|-------|
| `--radius` | `0` (all sizes) |
| `--shadow` | `none` |

Hierarchy from ink borders and accent left edges. Drawer uses dimmed overlay, not drop shadows.

---

## Motion

| Interaction | Spec |
|-------------|------|
| Drawer | 150–200ms transform / opacity |
| Focus | Instant accent ring |
| Skeleton | Static muted blocks; pulse only if `prefers-reduced-motion: no-preference` |

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Tailwind / shadcn mapping

| Token | Tailwind approx | shadcn |
|-------|-----------------|--------|
| `--bg` | `bg-stone-100` (warm; prefer exact hex) | `background` |
| `--surface` | `bg-white` | `card` |
| `--ink` | `text-neutral-950` / `border-neutral-950` | `foreground` / `border` |
| `--text-muted` | `text-neutral-500` | `muted-foreground` |
| `--accent` | custom `teal` `#067F8A` | `primary` (override) |
| radius | `rounded-none` | `--radius: 0` |
| shadow | `shadow-none` | strip card shadows |

```js
// tailwind.config theme.extend (illustrative)
colors: {
  background: "var(--bg)",
  foreground: "var(--ink)",
  card: "var(--surface)",
  muted: { DEFAULT: "var(--bg)", foreground: "var(--text-muted)" },
  primary: { DEFAULT: "var(--accent)", foreground: "var(--accent-fg)" },
  border: "var(--border)",
},
borderRadius: { none: "0", DEFAULT: "0" },
```

---

## Breakpoints

| Name | Min | Shell |
|------|-----|-------|
| Mobile | ~375px | Top bar + Sheet drawer |
| Desktop | ≥1024px | Sticky left sidebar |

---

## Do not

- Purple gradients, glow, multi-layer shadows, `rounded-full` pills
- Borrow Tailwind dashboard look from `examples/html/` into the docs shell
- Use “hero” / “heroes” in UI copy for people (label: **Experts**)
