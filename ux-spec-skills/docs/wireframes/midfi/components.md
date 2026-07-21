# Mid-Fi Components — Dataviz Kit

**Artifact root:** `ux-spec-skills/docs/`  
**Design system:** Konstrukt (`app-shell`, `.index-card`, `.module`, `.badge`, …)  
**A11y:** WCAG 2.1 AA · keyboard + focus visible · meaningful headings

Inventory covers the mid-fi skill checklist. Components marked **N/A v1** are not in MVP browse UI; keep API notes for later so prototypes stay consistent.

---

## Inventory

| Component | Konstrukt / pattern | v1 use |
|-----------|---------------------|--------|
| Button | `.portal-quiet-btn`, text buttons in modules | Yes |
| Input | — | N/A v1 (no search) |
| Select | — | N/A v1 |
| Card | `.index-card` + `.card-grid` | Yes (experts + skills) |
| Dialog | — | N/A v1 |
| Sheet | Mobile nav drawer (`shell.css`) | Yes |
| Toast | — | N/A v1 |
| Tabs | — | N/A v1 |
| Pagination | — | N/A v1 |
| Table | `.data-table` | Yes (inputs, known works) |
| Navbar | `#site-nav.site-nav` + brand | Yes |
| Sidebar | Sticky left nav in `app-shell` | Yes (desktop) |
| Page header | `.page-header`, `.tagline`, `.meta-row` | Yes |
| Module | `.module`, `.module.accent-left` | Yes |
| Badge / Tag | `.badge`, `.tag`, `.card-label` | Yes |
| Breadcrumb | text links | Yes |
| Skeleton | muted blocks | Yes (loading) |
| Empty meta | muted text | Yes (Related) |
| Theme toggle | `theme.js` control | Yes |

---

## Button

**Anatomy:** label · optional leading icon (rare) · focus ring  

**Variants**

| Variant | Use |
|---------|-----|
| Quiet primary | Two doors CTAs, Router CTA, Open principles |
| Link-as-button | Related asset rows (prefer `<a>` styled quietly) |
| Ghost / text | Breadcrumb segments |

**States**

| State | Spec |
|-------|------|
| default | Ink text; 1px ink border or underline; transparent fill |
| hover | Slight bg `--bg` or stronger underline; cursor pointer |
| focus | 2px `--accent` outline, 2px offset; never remove outline |
| active / pressed | Ink border thicker or accent left tick |
| disabled | Muted text; `aria-disabled` / `disabled`; no pointer; **do not** use for empty Related—use muted text instead |
| loading | Optional: label “Loading…” + `aria-busy`; keep width stable |
| error | Rare on buttons; prefer page-level error |
| success | N/A v1 |

**Props (conceptual):** `label`, `href` | `onClick`, `variant`, `disabled`, `aria-label` (if icon-only—avoid icon-only in v1)

**Keyboard:** Enter / Space activate · Tab in focus order · no trap  

**Focus order:** After surrounding copy; CTAs after section intro sentence  

**A11y:** Contrast ≥ 4.5:1 · do not rely on color alone for state  

---

## Input / Select

**N/A v1** — no CMS, search, or filters. If added later: 1px ink border, `--radius: 0`, focus accent ring, label above field, error text in muted/destructive under field.

---

## Card (`.index-card`)

**Anatomy**

```
.card-label     → skill category only (RIGOR / CONSULTING / EXEC …)
h3 / title      → expert or skill name
.card-detail    → one-line description (optional on overview gallery)
.card-meta      → badges: [sample] [HTML] when mapped
```

**Expert cards:** name + why-in-kit detail only. No Core / Practice tier labels on gallery cards (tier is optional quiet micro-label on the expert profile).

**States**

| State | Spec |
|-------|------|
| default | White surface, 1px ink border, flat |
| hover | Border emphasis or bg `--bg`; entire card is hit target |
| focus | Accent outline on focusable card link |
| disabled | N/A — omit card instead of disabling |
| loading | Skeleton rectangles inside card bounds |
| error | N/A at card level |
| success | N/A |

**Props:** `href`, `label`, `title`, `detail?`, `badges[]?` · (`tier` only on expert profile header, never on gallery cards)

**Interactions:** Whole card is one link (`<a class="index-card">` or wrap). Nested interactive elements forbidden.

**Keyboard:** Tab to card · Enter activate · arrow keys not required  

**Focus order:** Grid is DOM order (experts: curated flat list; skill categories rigor → … → router)  

**A11y:** Title in accessible name; badges announced as text (“Has sample. Has HTML demo.”) or via `aria-describedby`  

**Content examples**

| | Short | Long |
|--|-------|------|
| Title | Ben Fry | Cole Nussbaumer Knaflic |
| Detail | Acquire → filter → mine… | Practical storytelling for business charts and slides… |
| Meta | — | [sample] [HTML] |

---

## Dialog

**N/A v1.** Prefer full-page error and muted empty Related over modal confirmation.

---

## Sheet (mobile drawer)

**Anatomy:** overlay backdrop · panel · close control · nav list · brand row (shared with top bar)

**States**

| State | Spec |
|-------|------|
| closed | Off-canvas; hamburger `aria-expanded="false"` |
| open | Panel visible; backdrop dimmed; focus moved into panel |
| focus | First focusable = close or first nav item (choose one; be consistent) |
| loading | N/A |

**Props:** `open`, `onClose`, `aria-label="Main navigation"`

**Keyboard**

- Esc closes
- Tab cycles within drawer while open (focus trap recommended)
- Enter on nav item navigates and closes
- Backdrop click / tap closes

**Focus order:** Close → Overview → Experts → Dataviz rigor → Consulting → Executive → Global → Router → theme toggle if inside panel  

**A11y:** `role="dialog"` or disclosure pattern per Konstrukt shell; restore focus to hamburger on close  

---

## Toast

**N/A v1.**

---

## Tabs / Pagination

**N/A v1.** Category sections are in-page anchors on Overview, not tabs.

---

## Table (`.data-table`)

**Anatomy:** caption (visible or `sr-only`) · thead · tbody rows · cells  

**Use:** Skill Inputs; Expert Known works (Title · Year · Type)

**States:** default · hover row (optional, subtle bg) · focus cell/link inside  

**Keyboard:** Tab through links in cells; tables are not grid-widgets in v1  

**A11y:** Header cells `scope="col"`; keep column count small (2–3)  

**Content examples**

| Short | Long |
|-------|------|
| Input: Metrics list | Input: Metrics list with definitions, owners, and refresh cadence notes… |
| Work: *Envisioning Information* · 1990 · Book | Full subtitle + publisher optional in detail view only |

---

## Navbar + Sidebar

**Anatomy**

```
nav-brand              → "Dataviz Kit"
nav-brand-subtitle     → "by The Hooman Loop"
nav items              → Overview · Experts · Critique · Dataviz rigor · Consulting · Executive · Global · Router
theme control          → [☀] / mode toggle
mobile hamburger       → opens Sheet
```

**States**

| State | Spec |
|-------|------|
| default | Ink text |
| hover | Muted → ink |
| focus | Accent outline |
| active / current | `aria-current="page"` + left accent bar (`--accent`) |
| disabled | N/A |

**Keyboard:** Tab through items · Enter navigate · mobile: hamburger → Sheet behavior  

**Focus order (desktop):** Brand (if link) → nav items top→bottom → theme → main skip link target  

**A11y**

- Landmark: `<nav aria-label="Primary">`
- Skip link: “Skip to main content” first focusable on page
- Active item must not rely on color alone (accent bar + `aria-current`)

---

## Page header

**Anatomy:** micro-label (category/tier) · H1 · tagline · `.meta-row` (version · counts · path · badges)

**States:** default · loading (muted skeleton for meta)  

**A11y:** Single H1; meta is text, not only color badges  

---

## Module (`.module` / `.module.accent-left`)

**Anatomy:** optional `.module-header` · body · optional CTA  

**Variants**

| Variant | Use |
|---------|-----|
| Default | When to use, Output, Anti-patterns |
| `accent-left` | Purpose, Bio/context, Router CTA, Principles pointer |

**States:** default · focus-within (if contains controls)  

---

## Badge / Tag

**Anatomy:** short label text  

**States:** default only (not interactive). Examples: `sample`, `HTML`, category tags  

**A11y:** Never sole indicator of presence—pair with card accessible name  

---

## Breadcrumb

**Anatomy:** Overview / {Category|Experts} / {Current}  

**States:** default · hover/focus on ancestors · current is text (not a link)  

**Keyboard:** Tab ancestors only  

**A11y:** `<nav aria-label="Breadcrumb">` · current with `aria-current="page"`  

---

## Skeleton (loading)

**Anatomy:** rectangular muted blocks matching card/module geometry  

**States:** loading only · `aria-busy="true"` on region · brand/nav always real  

**A11y:** Announce “Loading content” via live region once if fetch is slow; prefer static HTML so loading is rare  

---

## Empty meta (Related)

**Anatomy:** muted sentence, e.g. “No sample yet”  

**States:** empty (default for missing map entries) — **not** disabled buttons  

**Rule (FR-005 / A5):** Never render `href="#"` or fake links for unmapped assets. Expert + Principles links may still appear when demos are missing.

---

## Error panel

**Anatomy:** title · explanation · primary CTA (Back to Overview) · secondary links (Experts · Router) · optional maintainer path  

**States:** error (page-level)  

**A11y:** Prefer `role="alert"` on message · heading level H1 or H2 consistent with page  

---

## Cross-cutting: interactive states checklist

Every interactive control in mid-fi must define:

| State | Required |
|-------|----------|
| default | ✓ |
| hover | ✓ (pointer devices) |
| focus | ✓ visible accent ring |
| disabled | ✓ when applicable; else omit control |
| loading | ✓ for async regions (Overview meta/grids) |
| error | ✓ page-level recovery |
| success | optional / N/A v1 |

---

## Keyboard & focus map (sitewide)

1. Skip to main  
2. Primary nav (sidebar or drawer)  
3. Theme toggle  
4. Main: breadcrumb → doors/CTAs → card grids → module CTAs → Related links  
5. External Related assets open in same or new tab per suite convention; if `target="_blank"`, include “opens in new window” in accessible name  

**Focus never trapped** except mobile drawer while open.
