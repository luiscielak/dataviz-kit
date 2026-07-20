# Sample: Encoding accuracy review — Revenue pulse charts

**Charts/modules reviewed**: Segment snapshot (bar), Revenue trend (line), an earlier pie-chart draft (rejected)
**Context**: Dashboard (`sample-daily-dashboard.md`) and exec slide (`sample-exec-slide-outline.md`)
**Last updated**: 2025-02-03

---

## 1. Encoding table

| Chart | Attribute | Channel | Data type | OK? |
|-------|-----------|---------|-----------|-----|
| Segment snapshot (bar) | Segment | Position (category axis) | Nominal | Y |
| Segment snapshot (bar) | Bookings | Length (bar height, zero baseline) | Quantitative | Y |
| Revenue trend (line) | Date | Position (x-axis) | Ordinal/temporal | Y |
| Revenue trend (line) | MRR | Position (y-axis, aligned scale) | Quantitative | Y |
| Draft: segment pie chart | Segment | Angle + color (both) | Nominal | N |
| Draft: segment pie chart | Bookings | Angle (arc size) | Quantitative | N |

---

## 2. Issues

- **Draft pie chart, angle for magnitude**: Angle is a weaker channel than position/length for comparing 3 segments of similar size (48% / 34% / 18%) — small differences between Mid-market and SMB are hard to judge by eye. **Recommendation**: use the bar chart already in the spec; position on an aligned scale makes the 34% vs. 18% gap immediately legible.
- **Draft pie chart, color double duty**: Color was being used to both label the segment (categorical identity) and imply ranking by slice order — no second channel confirmed identity. **Recommendation**: if color is kept at all, use it only for identity, with a direct label carrying the value (see `20-consulting-storytelling/chart-annotation-plan.skill.md`).
- **Revenue trend line, no issue found**, but flagging for future edits: any future truncated y-axis (e.g. to exaggerate a trend) must carry an explicit "axis does not start at zero" note per Tufte integrity — not present today because the current axis does start at zero.

---

## 3. Summary

- **Verdict**: Pass for the two charts actually shipping (segment bar, revenue line). Edit required only if the pie-chart draft is reconsidered.
- **Priority fixes**: (1) Do not ship the pie-chart draft as-is — replace with the bar chart. (2) If a future chart truncates an axis, add an explicit note per the integrity rule above.
