# Sample: Monthly dashboard spec — Finance strategy & risk

**Cadence**: Monthly  
**Audience**: CFO, Board, Finance leadership  
**Owner**: FP&A  
**Last updated**: 2025-02-03  

---

## 1. Purpose & decisions supported

- Track progress to revenue and margin targets; support board and exec review.
- Surface cash runway, DSO, and concentration risk for decisions.
- One-screen monthly narrative: goals, risk, and trend.

---

## 2. Modules & layout

| Module name | Purpose | Primary metrics | Placement |
|-------------|---------|-----------------|-----------|
| Goal progress | Targets vs actuals | Revenue (target vs actual, % to target); Margin (target vs actual, % to target); trend arrow | Top |
| Risk summary | RAG status | Cash runway (months), DSO (days), Top-customer concentration (%); each with RAG | Below goals |
| Goal trend | 12-month view | Line: Revenue and Margin actual vs target over 12 months | Middle |
| Risk detail | Definitions + history | Table or small multiples: each risk indicator with threshold and trend | Middle |
| Detail (on demand) | Underlying data or breakdown | Revenue by segment; concentration list | Modal or panel |

---

## 3. Goals & targets

| Goal | Target | Current | % to target | Trend |
|------|--------|---------|-------------|-------|
| Revenue | $X.XM (FY) | $X.XM (MTD or month) | XX% | ↑ / ↓ / → |
| Margin | XX% (FY) | XX% (MTD or month) | On / Off track | ↑ / ↓ / → |

---

## 4. Risk indicators

| Indicator | Definition | Threshold / RAG | Source |
|-----------|------------|----------------|--------|
| Cash runway | Months of operating runway at current burn | Green &gt;12, Yellow 6–12, Red &lt;6 | Treasury |
| DSO | Days sales outstanding | Green &lt;45, Yellow 45–60, Red &gt;60 | AR |
| Top-customer concentration | % of revenue from top 5 customers | Green &lt;25%, Yellow 25–40%, Red &gt;40% | Revenue |

---

## 5. Data requirements

- **Sources**: ERP (revenue, margin), Treasury (cash, burn), AR (DSO), CRM (customer revenue). Refresh first business day of month by 10:00.
- **Refresh**: Monthly, first business day 10:00.
- **Derived metrics**: % to target = Actual / Target; RAG from thresholds above; trend = prior month comparison.

---

## 6. Interaction model

- **Overview (default)**: Goal progress + risk summary + 12-month trend + risk detail. Month = latest closed.
- **Filters**: Month (last 12); Business unit (all or single).
- **Details on demand**: Click goal → segment breakdown; click risk → definition + history; definitions in tooltip or side panel.

---

## 7. Trust layer

- **Definitions**: Revenue = recognized per policy; Margin = (Revenue − COGS) / Revenue; Cash runway = Cash / Avg monthly burn. Link to full metric provenance.
- **Freshness**: “Month ending [date]; data as of first business day 10:00.”
- **Caveats**: Month-end close lag; RAG thresholds are guidelines, not policy.

---

## 8. States

| State | What user sees | Action |
|-------|----------------|--------|
| Empty | “No data for selected month” | Choose month or contact FP&A |
| Error | “Data temporarily unavailable” | Retry; status page |
| Stale | Banner: “Data older than 35 days” | Acknowledge or contact FP&A |
| Partial month | “Current month in progress”; goals show MTD with label | Use for directional only |

---

## 9. Analytics events

| Event | When | Payload |
|-------|------|---------|
| `dashboard_view` | Page load | dashboard_id, month, filters |
| `month_change` | User changes month | from_month, to_month |
| `goal_click` | Click goal row | goal_id |
| `risk_click` | Click risk indicator | risk_id, rag |
| `definition_open` | Open definition | metric_id |
