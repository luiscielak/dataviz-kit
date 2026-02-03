# Sample: Weekly dashboard spec — Operations performance review

**Cadence**: Weekly  
**Audience**: COO, Operations leads  
**Owner**: Operations analytics  
**Last updated**: 2025-02-03  

---

## 1. Purpose & decisions supported

- Explain weekly performance (orders, fulfillment, returns) and variance vs plan and prior week.
- Spot trends and segment underperformance for follow-up.
- Support Monday leadership sync with one-screen summary and drilldown.

---

## 2. Modules & layout

| Module name | Purpose | Primary metrics | Placement |
|-------------|---------|-----------------|-----------|
| Week summary | One-number + direction | Orders (total), Fulfillment rate (%), Returns (count); WoW Δ% and vs plan | Top |
| Variance table | Explain the gap | Metric, This week, Prior week, Plan, WoW %, Vs plan | Below summary |
| Trend (7 weeks) | Context | Line chart: Orders, Fulfillment rate, Returns over last 7 weeks | Middle |
| Segment breakdown | Where to look | Table or bar: Region × Orders, Fulfillment, Returns; sort by WoW or vs plan | Middle |
| Detail (on demand) | Order-level or region drill | Orders list or region detail | Modal or drill view |

---

## 3. Data requirements

- **Sources**: ERP (orders, fulfillment), DW (aggregates); refresh Monday 08:00 local.
- **Refresh**: Weekly, Monday 08:00; week = Mon–Sun.
- **Derived metrics**: WoW % = (This week − Prior week) / Prior week; Vs plan % = (This week − Plan) / Plan; Fulfillment rate = Shipped on time / Orders.

---

## 4. Interaction model

- **Overview (default)**: Summary + variance table + 7-week trend + segment breakdown. Week = latest completed.
- **Filters**: Week selector (last 8 weeks); Region (all or single).
- **Details on demand**: Click region → region detail (orders list, fulfillment by DC); click metric → definition + freshness.

---

## 5. Trust layer

- **Definitions**: Orders = customer-facing order count; Fulfillment rate = % shipped by promised date; Returns = units returned in week. Link to full definitions.
- **Freshness**: “Week ending [date]; data as of Monday 08:00.”
- **Caveats**: Partial week (current week) not shown in “This week”; note when selected week is partial.

---

## 6. States

| State | What user sees | Action |
|-------|----------------|--------|
| Empty | “No data for selected week” | Choose another week or contact support |
| Error | “Data temporarily unavailable” + last refresh | Retry; status page |
| Stale | Banner: “Data older than 8 days” | Acknowledge or contact analytics |
| Partial week | Summary shows “Partial week” label; variance note | Use for directional view only |

---

## 7. Analytics events

| Event | When | Payload |
|-------|------|---------|
| `dashboard_view` | Page load | dashboard_id, week_end_date, filters |
| `week_change` | User changes week | from_week, to_week |
| `segment_click` | Click segment row/bar | segment_id, metric |
| `variance_sort` | Sort variance table | sort_by, direction |
| `definition_open` | Open definition | metric_id |
