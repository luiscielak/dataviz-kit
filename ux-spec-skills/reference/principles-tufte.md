# Tufte — Clarity and integrity

**Source**: Edward Tufte, *The Visual Display of Quantitative Information* and related work.

---

## Core ideas

- **Data-ink ratio**: Maximize the share of ink (or pixels) that represent data; minimize non-data ink. Every mark should carry information.
- **Chartjunk**: Avoid decorative elements—redundant grid lines, 3D effects, decorative color, heavy borders, “chartoons.” Signal over noise.
- **Lie factor**: Do not distort comparisons. If a 10% change in data is shown as a 50% change in the visual, the representation is misleading. Truncated axes must be explicit and justified.
- **Integrity**: Show data variation, not design variation. No misleading aggregation or scale.

---

## For specs

- Specify that every visual element has a data purpose; remove or call out decorative elements.
- Require explicit note when axes are truncated or when scale is non-linear (e.g. log).
- Prefer clarity over “polish”; avoid specs that add decoration (gradients, 3D, redundant legends) without information gain.
- In tables: avoid redundant encoding (e.g. color and number for the same value unless one is for accessibility).

---

## Quick checklist

- [ ] No 3D or decorative effects.
- [ ] Grid and axes only as needed for reading.
- [ ] Zero baseline for length/area when showing magnitude (or explicit note if truncated).
- [ ] One clear message per chart; no double duty for the same channel (e.g. color = one thing only).
- [ ] Definitions and caveats available so the viewer can assess integrity.
