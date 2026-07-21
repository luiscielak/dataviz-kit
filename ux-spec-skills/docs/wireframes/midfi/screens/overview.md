# Screen: Overview

**Lo-fi:** `wireframes/lofi/overview-desktop.txt`, `overview-mobile.txt`  
**Flows:** Browse experts · Discover skills · Ambiguous ask  
**FR:** 001, 002, 003, 006, 007, 008, 009, 010, 014  
**Breakpoints:** Desktop ≥1024 (sidebar) · Mobile ~375 (top bar + drawer)

---

## Purpose

First paint for Dataviz Kit: suite brand + two equal pillars (Experts · Skills). Not exec-dashboard-only.

---

## Layout

### Desktop

| Region | Spec |
|--------|------|
| Sidebar | Sticky `site-nav`: brand, subtitle, 8 nav items, theme |
| Main | Page header → Two doors → Experts gallery → How to use → Skill category grids → Router CTA |

### Mobile

| Region | Spec |
|--------|------|
| Top bar | Hamburger · brand + subtitle · theme |
| Main | Same section order; doors stacked; cards single column |

---

## Sections

| ID | Name | Components | Content (short / long) |
|----|------|------------|------------------------|
| S1 | Site nav | Navbar, Sidebar / Sheet | Brand “Dataviz Kit” / subtitle “by The Hooman Loop” |
| S2 | Page header | Page header | H1 Dataviz Kit · tagline · `v0.x.x · 7 experts · 16 skills` |
| S3 | Two doors | Module ×2, Button | Browse experts / Browse skills |
| S4 | Experts gallery | Section label, flat Card grid ×7 | Curated order; no Core/Practice rows; queued omitted |
| S5 | How to use | Module / step list | 1 Choose → 2 Inputs → 3 Prompt → 4 Optional (template / rigor / critique) |
| S6–S11 | Skill catalogs | Section label, Card grid, Badge | Critique → Rigor → Consulting → Executive → Global → Router |
| S12 | Router CTA | Module accent-left, Button | “Not sure which skill?” |

---

## States

| State | Behavior |
|-------|----------|
| default | Full content from index + CHANGELOG version |
| hover / focus | Cards and CTAs per `components.md` |
| loading | See `overview-loading.md` — skeletons; brand/nav real |
| error | Navigate failures → `error.md` |
| empty Related | N/A here; gallery never invents queued experts |

---

## Interactions & flows

| Control | Action |
|---------|--------|
| View experts / expert cards | → Expert profile or Experts index |
| View skills / skill cards | → Skill profile (in-page anchors for category nav) |
| Open Router | → Router skill profile |
| Nav Critique / Dataviz rigor… | Scroll to section or load overview with hash |
| Hamburger | → Shell drawer |

---

## Accessibility

- Skip link → `#main`
- Overview nav: `aria-current="page"` + accent bar
- Cards keyboard-reachable; H1 once
- Meta counts as text (not color alone)
- Contrast: ink on bg/surface; muted meta ≥ AA at `text-sm+`

---

## Annotations (from lo-fi)

[A1] app-shell · [A2] brand + Hooman Loop · [A3] aria-current · [A4] cards are links · [A5] no queued cards · [A8] badges when assets exist · [A10] expert + skill counts
