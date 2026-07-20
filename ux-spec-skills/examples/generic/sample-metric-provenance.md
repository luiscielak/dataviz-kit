# Sample: Metric provenance spec — Revenue pulse trust layer

**Companion to**: `sample-daily-dashboard.md`, `sample-weekly-dashboard.md`
**Owner**: Revenue ops
**Last updated**: 2025-02-03

---

## 1. Purpose

- Let any viewer answer "what does this number mean" and "where did it come from" without asking Revenue ops.
- Prevent the same metric from being computed two different ways in two dashboards.
- Give support/finance a single reference when reconciling dashboard numbers against source systems.

---

## 2. Metric definitions

| Metric | Definition (user-facing) | Unit | Example |
|--------|---------------------------|------|---------|
| Bookings | New + expansion revenue closed in the period | USD | $412k (daily) |
| MRR | Recurring revenue, monthly rate, as of period end | USD | $2.84M |
| Pipeline | Sum of open opportunity amount across all active stages | USD | $8.2M |
| NRR | Net revenue retention: existing-customer revenue this period vs. same cohort last period | % | 108% |
| Exception | Any hero metric whose day-over-day change breaches threshold | boolean | flagged / not flagged |

---

## 3. Lineage

| Metric | Source (system / table or API) | Refresh | Derivation |
|--------|----------------------------------|---------|------------|
| Bookings | Salesforce → `opportunities` (closed-won) | Nightly, 02:00 UTC | raw sum, filtered to closed period |
| MRR | Billing system → `subscriptions` | Daily, 04:00 UTC | `sum(ARR) / 12` |
| Pipeline | Salesforce → `opportunities` (open stages) | Nightly, 02:00 UTC | raw sum, excludes closed/lost |
| NRR | Billing system → `subscriptions`, cohort join | Daily, 04:00 UTC | `(start ARR + expansion − contraction − churn) / start ARR` |
| Exception | Derived in dashboard layer | Computed at render | `Δ% < −10% or > +15%` vs. prior day |

---

## 4. Freshness

- **Expected latency**: Salesforce feed lands by 02:00 UTC; billing feed by 04:00 UTC. Dashboard is safe to view from 06:00 UTC.
- **Stale** means: no successful sync in the last 36 hours. Dashboard shows a stale-data banner (see `sample-daily-dashboard.md` § States) rather than silently serving old numbers.

---

## 5. Caveats

| Metric or scope | Caveat |
|------------------|--------|
| Bookings | Excludes renewals under $10k (netted out to reduce noise from auto-renew) |
| Pipeline | Excludes lost/canceled opportunities; includes only open stages |
| NRR | Cohort defined at contract start, not calendar year — comparisons across dashboards using calendar-year NRR will not match |
| All metrics | Currency is USD-normalized at time of sync; does not reflect same-day FX moves |

---

## 6. Where shown in UI

- **Inline tooltip**: Hovering a hero metric label shows definition + "as of" freshness timestamp.
- **Side panel**: Clicking "Definitions" opens the full table above, filterable by metric name.
- **Export**: PDF/slide exports include a footnote row citing source + refresh time per metric, generated from this doc.
