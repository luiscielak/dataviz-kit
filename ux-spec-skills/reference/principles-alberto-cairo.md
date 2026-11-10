# Cairo — Truthfulness and visual form

**Source**: Alberto Cairo, *The Truthful Art* and *How Charts Lie*.

---

## Core ideas

- **Truthful**: Show the data honestly. Don't cherry-pick ranges, hide uncertainty, or frame a comparison to imply a conclusion the data doesn't support.
- **Functional**: The visual form should serve the reader's task; decoration that fights comprehension is a defect, not polish.
- **Beautiful**: Craft and aesthetics matter, but in service of clarity—never as a substitute for it.
- **Insightful**: A good chart reveals something the reader couldn't see in the raw numbers, at the depth the audience needs.
- **Enlightening**: The best charts change understanding on subjects that matter, responsibly.
- **How charts lie**: Common failures—truncated or dual axes, misleading area/3D encodings, bad aggregation, missing base rates, and framing that exploits the reader's defaults.

---

## For specs

- Require an explicit note whenever an axis is truncated, dual, or non-linear, and justify it.
- State the population, time range, and any exclusions so the reader can judge whether the comparison is fair.
- Show uncertainty where it exists (ranges, sample sizes, "n=") rather than implying false precision.
- Prefer encodings the eye reads accurately for the stated task (see `encoding-accuracy`); avoid area/3D for magnitude comparisons.
- Use in `dataviz-crit` as a truthfulness lens: does the chart's form match what the data can honestly claim?

---

## Quick checklist

- [ ] Axis truncation, dual axes, or non-linear scales are noted and justified.
- [ ] Population, time range, and exclusions are stated.
- [ ] Uncertainty (ranges, sample size) is shown, not hidden.
- [ ] Encoding is accurate for the task; no misleading area/3D.
- [ ] Framing does not imply a conclusion the data can't support.
