# Sample: Daily executive dashboard spec — Revenue pulse

**Cadence**: Daily  
**Audience**: CRO, Revenue ops  
**Owner**: Revenue ops  
**Last updated**: 2025-02-03  

---

## 1. Purpose & decisions supported

- Decide where to focus today (accounts, segments, pipeline).
- Identify same-day follow-up (big moves, exceptions).
- Confirm daily bookings and MRR are on track vs prior day and run rate.

---

## 2. Modules & layout

| Module name | Purpose | Primary metrics | Placement |
|-------------|---------|-----------------|-----------|
| Hero summary | At-a-glance pulse | Bookings, MRR, Pipeline (total) | Top, full width |
| Exceptions | Needs attention | List: metric, prior day, current, %Δ; filter by severity | Below hero |
| Trend sparklines | 7-day context | Sparkline per hero metric | Right of hero numbers |
| Segment snapshot | Quick split | Bookings by segment (bar or table) | Middle |
| Detail (on demand) | Drill into segment or account | Table: account, amount, product | Modal or side panel |

---

## 3. Data requirements

- **Sources**: CRM (bookings, pipeline), Billing (MRR); both nightly sync by 06:00 UTC.
- **Refresh**: Daily 06:00 UTC; no intraday refresh.
- **Derived metrics**: Bookings Δ% vs prior day; MRR Δ% vs prior day; Pipeline total; Exceptions = any hero metric with Δ% &lt; −10% or &gt; +15% vs prior day.

---

## 4. Interaction model

- **Overview (default)**: Hero + exceptions + sparklines + segment snapshot. No filter; date = latest available.
- **Zoom / filter**: Date picker (last 7 days); severity filter on exceptions (all / critical / warning).
- **Details on demand**: Click segment → table of top accounts; click metric in hero → definition + freshness in tooltip or side panel.

---

## 5. Trust layer

- **Definitions**: Bookings = new + expansion in closed period; MRR = recurring revenue monthly rate; Pipeline = sum of opportunity amount for open stages. Link to full metric provenance doc.
- **Freshness**: “Data as of [date] 06:00 UTC.”
- **Caveats**: Excludes renewals under $10k; pipeline excludes lost/canceled.

---

## 6. States

| State | What user sees | Action |
|-------|----------------|--------|
| Empty | “No data for selected date”; empty hero and list | Choose another date or contact support |
| Error | “Data temporarily unavailable” + last known refresh | Retry; link to status page |
| Stale | Banner: “Data older than 36 hours” | Acknowledge or contact ops |
| Partial | Note under affected module: “Segment X delayed” | Use rest of dashboard; caveat in tooltip |

---

## 7. Analytics events

| Event | When | Payload |
|-------|------|---------|
| `dashboard_view` | Page load | dashboard_id, date, user_role |
| `exception_click` | Click exception row | exception_id, metric, severity |
| `segment_click` | Click segment in snapshot | segment_id, date |
| `date_change` | User changes date | from_date, to_date |
| `definition_open` | Open definition for metric | metric_id |
