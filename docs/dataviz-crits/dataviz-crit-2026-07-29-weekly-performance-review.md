---
date: 2026-07-29
subject: Operations performance review — Weekly dashboard
source: ux-spec-skills/examples/html/weekly-performance-review.html
kind: dataviz-crit
---

# Dataviz Critique — Operations performance review (weekly dashboard)

## Summary

This weekly operations dashboard has an exemplary trust frame and a clean, overview-first layout, but its centerpiece visualization undercuts both. The Trend (7 weeks) block is labelled for three metrics (Orders, Fulfillment rate, Returns) yet renders a single unlabelled bar series with no value axis, so the most prominent chart on the page communicates almost nothing quantitatively. The fastest wins are rebuilding that trend as small multiples with a value axis and takeaway titles, and fixing the directional color for Returns, where a decrease is good but is currently flagged red.

## Scorecard

| Lens | Score | Rationale |
|------|-------|-----------|
| Encoding Accuracy | 2/5 | The trend chart collapses three named metrics into one ambiguous height-encoded bar series, and directional color for Returns is inconsistent and wrong-polarity. Tables otherwise use position and aligned numerals well. |
| Data-Ink & Integrity | 3/5 | Tables are high-data-ink and honest (prior week, plan, and deltas side by side), but the trend bars are non-data decoration — rounded, unscaled, unlabelled. |
| Task–Encoding Fit | 3/5 | Structure serves the weekly-review task, but the variance table promises to "explain the gap" and sort with no visible sort state or driver decomposition, and the hero chart does not support the comparison it names. |
| Provenance & Trust | 3/5 | A strong, explicit freshness and period stamp plus prior-week and plan columns give real trust — but no metric definitions, plan vintage, or lineage. |
| Cognitive Load | 4/5 | Overview-first ordering, a consistent card rhythm, and restrained density keep the page easy to scan; filters are present and unobtrusive. |
| Annotation Clarity | 2/5 | Key performance indicator cards annotate deltas well, but the trend chart has no axis, units, labels, or legend, and every section title is generic. Table headers omit units and the compared week dates. |

## Positives

- The header carries an explicit trust frame most executive dashboards omit: the reporting period ("Week ending 2025-02-02") and a data-as-of timestamp ("data as of Monday 08:00"), alongside prior-week and plan columns.
- Information architecture follows overview-first (Shneiderman): key performance indicator summary, then variance table, then trend, then click-to-drill segment breakdown.
- The variance and segment tables are high-data-ink and scannable: quiet rules, right-aligned numerals, and directional color reserved for the delta columns.

## Findings

### Encoding Accuracy

**Trend (7 weeks) chart — `high`.** The subtitle names three metrics (Orders, Fulfillment rate, Returns) but the visual is a single row of seven bars with only the latest emphasized. Three series cannot be read from one height-encoded bar set, so the most prominent chart on the page is undecodable. **Recommendation:** split into three small multiples sharing a time axis, each with its own value scale and a zero baseline; or use a single indexed line chart rebased to 100 if comparing growth. *Technical note:* keep week-over-week (WoW) deltas as direct labels on the latest point.

**Returns delta color (KPI card and variance table) — `medium`.** For Returns a decrease is good, but −2.1% WoW is colored red on both the card and the table, while −5.2% vs plan is green in the table — opposite polarity for the same lower-is-better metric. **Recommendation:** define directionality per metric and color by semantic direction, not raw sign.

### Data-Ink & Integrity

**Trend (7 weeks) bars — `medium`.** With no scale or labels, the bar heights encode no verifiable quantity; rounded tops and a single arbitrary color emphasis make this chartjunk masquerading as a chart, occupying the largest block while carrying the least information. **Recommendation:** replace with a real scaled chart; if a spark is wanted, drop rounding and add min/max labels.

### Task–Encoding Fit

**Variance table — "Explain the gap · Sort by WoW or vs plan" — `medium`.** The subtitle promises gap explanation and sorting, but there is no visible sort control or sorted-state indicator and no variance decomposition. **Recommendation:** add a visible sort affordance and active-sort indicator, and surface the driver (a "biggest mover" callout or contribution-to-variance column).

### Provenance & Trust

**Metric definitions and lineage — `medium`.** No metric is defined: no formula for Fulfillment rate, no definition of an Order or Return, no source system. **Recommendation:** add a definitions affordance (notes row or hover) giving formula, source, owner, and refresh cadence.

**"Vs plan" definition — `low`.** The column appears without stating the plan vintage (annual plan or re-forecast) or whether it is weekly or cumulative. **Recommendation:** footnote the plan definition and its as-of date.

### Cognitive Load

**Segment breakdown — ambiguous WoW % column — `low`.** The region table mixes counts and a rate with a single WoW % column, leaving unclear which measure the change refers to. **Recommendation:** label the delta column with its measure, or provide a per-measure delta.

### Annotation Clarity

**Trend (7 weeks) chart — axis, labels, legend — `high`.** No value axis, units, data labels, or legend; the dark final bar signals emphasis but carries no readable value. **Recommendation:** add a value axis or direct data labels, a legend mapping color to series, and a takeaway title (e.g. "Orders +4.2% WoW — a 7-week high").

**Table headers — missing units and dates — `low`.** Headers omit units and periods: "Returns" is a count while "Fulfillment rate" is a percentage, and "This week" / "Prior week" never state the actual week-ending dates. **Recommendation:** add units to headers and the concrete week-ending dates.

## Priority fixes

1. Rebuild the Trend (7 weeks) block as three labelled small multiples (or an indexed line chart) with a value axis, legend, and a takeaway title.
2. Fix Returns delta color so a decrease reads as favorable, applied consistently across the card and the variance table.
3. Add metric definitions and lineage (formula, source, owner, freshness) so each number is defensible.
