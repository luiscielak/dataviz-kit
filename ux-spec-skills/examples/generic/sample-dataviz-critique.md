---
date: 2025-02-03
subject: Operations performance review (weekly dashboard)
source: examples/html/weekly-performance-review.html
---

# Sample: Dataviz critique — Weekly performance review

**Subject**: Operations performance review (weekly dashboard)
**Artifact**: `examples/html/weekly-performance-review.html`
**Context**: Dashboard; audience = Chief Operating Officer (COO) and operations leads
**Last updated**: 2025-02-03

---

## 1. Summary

A clean, well-structured weekly review: the summary cards, variance table, and segment breakdown read clearly and follow overview-then-detail order. The main priorities are the trend module, which uses a bar chart for time-series data with no vertical (y) axis scale, and the use of red/green color that conflicts with metric semantics for Returns. Fixing those two removes the only places where the dashboard can mislead a fast-reading executive.

---

## 2. Scorecard

| Lens | Score (1–5) | Rationale |
|------|-------------|-----------|
| encodingAccuracy | 3 | Cards and tables encode well; the trend uses bars (length) for a continuous time series where a line better shows rate of change. |
| dataInkIntegrity | 2 | Trend has no y-axis scale or values, so bar heights are not verifiable; otherwise low chartjunk. |
| taskEncodingFit | 3 | Overview → variance → segment supports the review task; the trend does not clearly answer "which direction, how fast." |
| provenanceTrust | 3 | "Data as of Monday 08:00" is present, but no metric definitions or source for Fulfillment rate / Returns. |
| cognitiveLoad | 4 | Strong grouping, one message per section, restrained palette; density is appropriate for the audience. |
| annotationClarity | 3 | Section titles are descriptive but not takeaway-oriented; the trend lacks axis labels and a callout for the latest week. |

---

## 3. Positives

- Summary cards pair each value with two comparisons (week-over-week and vs plan), giving context without clutter.
- The variance table exposes This week / Prior week / Plan side by side, so the gap is explainable in one glance — exactly the review task.
- Elevation and color are restrained (light borders, single accent), keeping data-ink high and chartjunk near zero.

---

## 4. Findings

| Element | Principle | Severity | Impact | Recommendation | Technical note | Evidence |
|---------|-----------|----------|--------|----------------|----------------|----------|
| Trend (7 weeks) module | dataInkIntegrity | high | Bars have no y-axis, gridline, or values, so the reader cannot tell the magnitude or whether the scale starts at zero — the "+" story is unverifiable. | Add a labeled y-axis (or direct value labels) starting at zero; note the scale explicitly if truncated. | Bar heights are inline `style="height: 45%"` etc. with no scale reference; add axis ticks and an accessible `<figcaption>`. | `Trend (7 weeks)` section |
| Trend (7 weeks) chart type | taskEncodingFit | medium | Bars encode a continuous weekly series; comparing rate of change across weeks is harder than with a connected line. | Use a line (or line + point) for the 7-week trend; reserve bars for the discrete segment comparison. | Swap the bar spans for an inline SVG polyline; keep one series per small multiple if three metrics are shown. | `Trend (7 weeks)` section |
| Trend, three metrics in one axis | encodingAccuracy | medium | Orders (~12k), Fulfillment (~94%), and Returns (~300) share one implied axis but have incomparable units and ranges. | Split into three small multiples or dual-encode with clearly separate axes; never plot counts and percentages on one unlabeled scale. | Subhead lists "Orders, Fulfillment rate, Returns"; render as `.small-multiple` grid. | `Trend (7 weeks)` subhead |
| Returns "WoW −2.1%" shown in red | encodingAccuracy | medium | Red conventionally signals "bad," but fewer returns is good; the color inverts the meaning for a scanning executive. | Encode by direction of goodness, not raw sign: green when Returns fall, or drop color and use an explicit "lower is better" caption. | The cells hardcode `text-red-600` / `text-emerald-600` on sign; add a per-metric "good direction" flag. | Returns card and variance table `WoW %` |
| Metric definitions / source | provenanceTrust | medium | Fulfillment rate and Returns have no definition or source, so two readers may interpret them differently. | Add a trust line or tooltip per metric (definition, source, refresh) per `metric-provenance` skill. | Header shows "data as of Monday 08:00" only; add a `<details>` glossary or footnotes. | Header meta row |
| Section titles | annotationClarity | low | Titles ("Variance table," "Trend") describe the object, not the finding, so the reader must derive the takeaway. | Use takeaway titles ("Orders up 4.2%, ahead of plan") where a clear message exists (Knaflic). | Titles are static `<h2>`; can be data-bound to the computed headline. | Each section header |

---

## 5. Priority fixes

1. Give the trend a labeled, zero-based y-axis (or value labels) — this is the one place the dashboard can mislead.
2. Switch the trend from bars to a line and separate the three metrics (small multiples), so direction and rate of change are legible.
3. Make sign-based color follow each metric's good direction (fix Returns red/green), and add short metric definitions for Fulfillment rate and Returns.
