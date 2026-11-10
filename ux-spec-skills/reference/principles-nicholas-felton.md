# Felton — Editorial information design

**Source**: Nicholas Felton, the *Feltron Annual Reports* and personal-data reporting work.

---

## Core ideas

- **Data as narrative**: A report is an edited story, not a data dump. Decide the throughline first, then let every number earn its place in service of it.
- **Small multiples as structure**: Repeated, consistently-scaled mini-charts let a reader compare across time, category, or place at a glance. Consistency of frame is what makes the comparison honest.
- **Typographic density done well**: Dense is fine when the hierarchy is disciplined—clear type scale, aligned grids, generous whitespace between groups. Density without hierarchy is noise.
- **Annotation carries meaning**: Numbers are paired with short, specific labels and captions so the reader never has to guess what a figure represents.
- **One consistent visual system**: A shared palette, unit format, and grid across the whole report make many small facts read as a single coherent artifact.

---

## For specs

- State the report's throughline (the edited story) before laying out modules; every module should map to it.
- When showing the same metric across periods or segments, specify small multiples on a shared scale rather than one crowded combined chart.
- Define a single type scale, number/unit format, and grid for the whole artifact; require alignment to it.
- Require a short label + caption for each figure; no bare numbers without context.
- Reserve density for reference/annual summaries, not live monitoring—pair with `dashboard-onepager` when condensing to a single editorial page.

---

## Quick checklist

- [ ] Report has a stated throughline; each module supports it.
- [ ] Repeated metrics use small multiples on a shared, consistent scale.
- [ ] One type scale, unit format, and grid across the whole artifact.
- [ ] Every figure has a short label and caption—no bare numbers.
- [ ] Density is disciplined: hierarchy and whitespace separate groups.
