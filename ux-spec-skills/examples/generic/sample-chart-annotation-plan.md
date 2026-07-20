# Sample: Chart annotation plan — Revenue pulse exec slide

**Charts**: Revenue trend (line), Segment comparison (bar)
**Audience**: Executive (CRO staff meeting)
**Context**: Exported to exec slide (`sample-exec-slide-outline.md`), not live dashboard
**Last updated**: 2025-02-03

---

## 1. Purpose

- Make the Q3 dip and recovery legible in a single glance, without a verbal walkthrough.
- Call out the one segment (Enterprise) driving the quarter's result, so the narrative and the chart agree.
- Keep annotation count low enough that the slide reads as "signal," not a marked-up chart.

---

## 2. Annotation types

- **Reference line**: Horizontal or vertical line marking a threshold or a point in time (e.g. quarter boundary). Use only when the line itself carries meaning (a target, a known event) — not as decoration.
- **Callout**: Short text + leader line pointing at a specific data point or region. Use for the one or two moments the viewer must not miss.
- **Label**: Direct label on a mark (replacing a legend lookup). Use for the top 1–2 series when a legend would force a slower read.
- **Narrative text**: One-line caption under the chart stating the "so what." Always present; carries the conclusion the chart supports.

---

## 3. Per-chart plan

| Chart | Story to support | Annotation type | Content / placement | Trigger |
|-------|-------------------|------------------|-----------------------|---------|
| Revenue trend | Q3 dip and recovery | Callout | "Q3 dip: EMEA renewal delay" pointing at the Q3 low point | Always on (static export) |
| Revenue trend | Recovery trajectory | Reference line | Dashed vertical line at quarter start, labeled "Q4" | Always on |
| Segment comparison | Enterprise is the top segment | Direct label | "$198k" labeled on the Enterprise bar directly, no legend needed | Always on |
| Segment comparison | Enterprise vs. rest | Callout | "Enterprise: 48% of bookings" above the bar | Always on |
| Both | Conclusion | Narrative text | Caption line below each chart stating the takeaway in one sentence | Always on |

---

## 4. Rules

- No more than 2 callouts per chart — a third means the story isn't focused yet.
- Reference lines only when they mark something real (a quarter boundary, a target), never as visual filler.
- Direct labels replace the legend only when ≤ 2 series are labeled; beyond that, keep the legend and drop the labels (see `30-dataviz-rigor/encoding-accuracy.skill.md`).
- Every chart ends with exactly one narrative caption — never zero, never a paragraph.

---

## 5. States

- **Empty period** (no data for a quarter): Chart renders with a "No data" placeholder in place of the line/bar for that period; annotations referencing that period are suppressed rather than pointing at nothing.
- **Partial data**: Callouts are suppressed for the incomplete segment; caption notes "Partial data for current period."
- **Error**: Chart and all annotations are replaced by a single error state; no partial/broken annotation is ever shown.
