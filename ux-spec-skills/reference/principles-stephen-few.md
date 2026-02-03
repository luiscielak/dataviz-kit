# Stephen Few — Perceptual and dashboard design

**Source**: Stephen Few, *Show Me the Numbers*, *Information Dashboard Design*.

---

## Core ideas

- **Perceptual accuracy**: Use encodings that match how we perceive magnitude—position and length are strong; area and angle are weaker for precise comparison. Order channels by effectiveness for the task.
- **Dashboard discipline**: Dashboards should fit one screen; support monitoring and comparison; avoid decoration and excessive density. Same principles as Tufte (data-ink, no chartjunk) applied to multi-widget views.
- **Right chart for the task**: Match chart type to the question (compare categories, see trend, part-to-whole, distribution). Avoid “default” charts that don’t fit the task.
- **Tables when appropriate**: For exact values and many categories, well-designed tables often beat charts; use alignment and minimal formatting.

---

## For specs

- Specify chart type and encoding with the task in mind (compare / trend / part-to-whole / distribution).
- Prefer position and length for primary comparisons; use color and area with care (and document in encoding-accuracy skill).
- Dashboards: one-screen constraint; modules with clear purpose; no redundant or decorative widgets.
- Consider tables for dense, exact-value comparison when charts would be less effective.

---

## Quick checklist

- [ ] Chart type matches task (compare, trend, part-to-whole, distribution).
- [ ] Primary comparisons use the most accurate channels (position, length).
- [ ] Dashboard fits one screen; each module has a stated purpose.
- [ ] Tables specified where exact values and many categories matter.
