# Screen: Skill profile

**Lo-fi:** `skill-profile-desktop.txt`, `skill-profile-mobile.txt`  
**Example content:** Daily exec pulse (full Related path)  
**Flows:** Run path · Demo path · Theory (expert / principles)  
**FR:** 004, 005, 008, 009, 013

---

## Purpose

One page per skill: purpose → when → inputs → prompt → output → anti-patterns → example → related. Source of truth remains `.skill.md`.

---

## Layout

Same app-shell as Overview. Active nav = skill’s category (e.g. Executive for Daily exec pulse).

| Order | Section | Pattern |
|-------|---------|---------|
| S1 | Breadcrumb | Overview / Category / Skill |
| S2 | Page header | Micro-label category · H1 name · tagline · mono path · badges |
| S3 | Purpose | `.module.accent-left` |
| S4 | When to use | Module + list |
| S5 | Inputs | `.data-table` (desktop) or list (mobile) |
| S6 | Prompt | Quieter module; collapsible OK; mono body |
| S7 | Output format | Module |
| S8 | Anti-patterns | Module |
| S9 | Example invocation | Optional module |
| S10 | Related | Links: template · sample · HTML · expert · principles |

Desktop may place S7 / S8 in a two-column row; mobile stacks.

---

## Content examples

| Field | Short | Long |
|-------|-------|------|
| Name | Alerts | Daily exec pulse |
| Tagline | Thresholds & severity | Morning pulse for ops leaders scanning overnight change |
| Path | `…/alerts.skill.md` | `skills/10-exec-dashboards/daily-exec-pulse.skill.md` |
| Related | Sample only | Template + sample + HTML + expert + principles |

---

## States

| State | Spec |
|-------|------|
| default | All modules from skill md; badges when asset map has entries |
| hover / focus | Links, collapse control, related anchors |
| loading | Skeleton modules under real breadcrumb/header chrome |
| empty Related | See `skill-profile-empty-related.md` |
| error | Missing profile → `error.md` |
| success | N/A |

**Collapse (Prompt):** `aria-expanded` on control; panel `id` referenced by `aria-controls`.

---

## Interactions

| Control | Action |
|---------|--------|
| Breadcrumb Overview / Category | → Overview (category hash optional) |
| Related template/sample/HTML | Open asset (external/static); [A8] |
| Related expert | → Expert profile [A7] |
| Related principles | → `reference/principles-*.md` (distinct from expert) |
| Collapse prompt | Toggle visibility only |

---

## Accessibility

- Heading order: H1 skill → H2 module titles
- Mono path selectable; don’t force all-caps for paths
- Related: real `href` only when mapped; otherwise muted text (FR-005)
- Focus order: breadcrumb → header links → modules top→bottom → related list
- Active category nav: `aria-current="page"`
