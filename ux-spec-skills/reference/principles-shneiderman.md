# Shneiderman — Overview first, then zoom/filter, then details on demand

**Source**: Ben Shneiderman, “The Eyes Have It” (information-seeking mantra).

---

## Core idea

**Visual information-seeking mantra**:  
1. **Overview first** — Show the whole (summary, key metrics, scope).  
2. **Zoom and filter** — Let the user narrow (time range, segment, entity).  
3. **Details on demand** — Show detail only when requested (click, expand, tooltip).

---

## For specs

- Default view must be an overview (summary row, hero metrics, exception list), not a detail view.
- Every dashboard or multi-view product needs an explicit “overview” and “detail” definition; drilldown and filters are the zoom step.
- Details (definitions, breakdowns, provenance) live in panels, tooltips, or linked docs—not cluttering the overview.
- Breadcrumbs and back navigation when user has drilled; avoid dead ends.

---

## Quick checklist

- [ ] Overview is the default; no “detail-first” layout.
- [ ] Zoom/filter (date, segment, entity) is specified and scoped.
- [ ] Details on demand: where they appear (tooltip, panel, page) and what they contain.
- [ ] Navigation back to overview (breadcrumb, back button) is specified for drilldown flows.
