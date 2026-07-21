# Layout Guidelines — Dataviz Kit (Hi-Fi)

**Artifact root:** `ux-spec-skills/docs/`  
**Shell:** Konstrukt `app-shell` · sticky sidebar (desktop) · top bar + Sheet (mobile)  
**Screens:** Overview · Experts index · Expert profile · Skill profile · Error · Loading

---

## Principles

1. **Documentation shell, not dashboard.** Flat ink borders; zero radius; no card elevation theater.
2. **Two equal pillars.** Experts and Skills share first-paint weight on Overview.
3. **One H1.** Category labels use `.section-label` / `.micro-label`.
4. **Whole-card hit targets.** Index cards are single links; no nested controls.
5. **Honest emptiness.** Missing Related assets → muted text, never `href="#"`.

---

## App shell

### Desktop (≥1024px)

```
┌────────────┬────────────────────────────────────┐
│ Sidebar    │ Main                               │
│ ~240px     │ padding 24–32                      │
│ sticky     │ page-header → modules → grids      │
│ brand      │                                    │
│ nav ×7     │                                    │
│ theme      │                                    │
└────────────┴────────────────────────────────────┘
```

- Sidebar: white/surface, 1px ink right border, brand + subtitle, nav list, theme control.
- Active nav: 3–4px `--accent` left bar + `aria-current="page"`.
- Main scrolls independently; sidebar stays sticky.

### Mobile (~375px)

```
┌────────────────────────────────┐
│ [≡] Dataviz Kit     [theme]    │  top bar sticky
│ by The Hooman Loop             │
├────────────────────────────────┤
│ Main · padding 16 · stack      │
└────────────────────────────────┘
```

- Hamburger opens Sheet (drawer): backdrop `--overlay`, panel ≤78% / max ~280px.
- Esc / backdrop / nav select closes; restore focus to hamburger.
- Same section order as desktop; doors and grids stack to one column.

---

## Page patterns

| Page | Main structure |
|------|----------------|
| **Overview** | Header → Two doors → Experts gallery (×7 flat) → How to use → Skill categories (Rigor → … → Router) → Router CTA |
| **Experts index** | Header → flat card grid ×7 |
| **Expert profile** | Breadcrumb → Header (+ optional quiet Core/Practice micro-label) → Bio accent-left → Known works table → Further reading → Principles CTA → Related skills |
| **Skill profile** | Breadcrumb → Header (category micro · path mono · badges) → Purpose accent-left → When → Inputs → Prompt → Output → Anti-patterns → Example → Related |
| **Error** | Usable nav · alert module · Back to Overview · secondary Experts / Router |
| **Loading** | Real brand/nav · skeleton blocks for meta/grids · `aria-busy` |

---

## Grids & modules

| Pattern | Desktop | Mobile |
|---------|---------|--------|
| Two doors | 2 columns | stack |
| Experts gallery | 3–4 columns | 1 column |
| Skill cards | 2–3 columns | 1 column |
| How-to steps | 4 columns | stack |
| Module stack gap | 24 | 16 |
| Card gap | 16 | 12 |

**Modules**

- Default: Purpose companions (When, Output, Anti-patterns).
- `accent-left`: Purpose, Bio, Router CTA, Principles pointer.
- Padding: 14–16px; 1px ink border; no shadow.

**Tables (`.data-table`)**

- Desktop: Title · Year · Type (experts) or Input rows (skills).
- Mobile: stacked list with same fields as text—keep column meaning.

---

## Content width & density

- Main content fluid inside shell (no narrow marketing column).
- Tagline max ~52ch for readability when long.
- Meta row: mono, muted (`v0.x.x · 7 experts · 16 skills`).
- Prompt: quieter module; collapsible OK (`aria-expanded` / `aria-controls`).

---

## Navigation IA (order)

Overview → Experts → Critique → Dataviz rigor → Consulting → Executive → Global → Router

Category nav on Overview may scroll to in-page anchors. Label people **Experts** (never “Heroes”).

---

## Focus & skip

1. Skip link → `#main` (first focusable)
2. Primary nav (sidebar or drawer)
3. Theme toggle
4. Main: breadcrumb → CTAs → cards → module links → Related

Focus trap only while mobile drawer is open.

---

## Engineering notes

- Prefer Konstrukt classes: `.app-shell`, `.site-nav`, `.index-card`, `.module`, `.badge`, `.data-table`, `.page-header`.
- Tailwind/shadcn: map to `theme.md` variables; keep `--radius: 0` and `shadow-none`.
- External Related: if `target="_blank"`, include “opens in new window” in accessible name.
- Queued experts (Felton+) never appear until `reference/` ships.
