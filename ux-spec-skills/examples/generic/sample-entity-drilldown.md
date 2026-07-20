# Sample: Entity drilldown spec — Regional revenue → Account

**Parent view**: Regional revenue summary (from `sample-daily-dashboard.md` segment snapshot)
**Entity type**: Account
**Owner**: Revenue ops
**Last updated**: 2025-02-03

---

## 1. Purpose

- Let a rep or manager go from "which region is off" to "which account caused it" without leaving the dashboard.
- Support same-day follow-up: identify the specific account(s) behind a regional or territory exception.
- Keep the summary view uncluttered; account-level detail only appears on explicit request.

---

## 2. Entry points

| Source view | Trigger | Target |
|-------------|---------|--------|
| Regional revenue summary (hero/segment table) | Click region row | Territory list for that region |
| Exceptions list | Click exception tied to a region | Territory list, pre-filtered to flagged territories |
| Territory list | Click territory row | Account list for that territory |

---

## 3. Levels & hierarchy

| Level | Entity type | Key dimensions | Aggregations shown |
|-------|-------------|----------------|---------------------|
| 1 | Region | NA, EMEA, APAC | Bookings, MRR, Δ% vs prior day |
| 2 | Territory | Named territory within region | Bookings, MRR, account count |
| 3 | Account (lowest) | Individual account | Revenue, units, last order, health score |

---

## 4. Detail view

- **Metrics**: Revenue (period), units, last order date, health score (Good / Watch / At risk).
- **Attributes**: Account name, segment (Enterprise / Mid-market / SMB), owner (CSM/AE).
- **Layout**: Single table, sortable by revenue; health score as a colored badge, not a standalone chart. No sparkline at this level — trend belongs one level up.

---

## 5. Navigation

- **Breadcrumb**: `Regional summary > NA > Northeast > Acme Corp`, each segment clickable.
- **Back**: Browser-style back returns to the exact prior filter state (not a reset to the top).
- **Deep-link**: URL reflects the current level and filters so a shared link reopens the same drilldown state.

---

## 6. Data & loading

- Region-level aggregates are loaded with the parent dashboard (already in memory).
- Territory and account data load **on expand**, not eagerly — one request per level, scoped to the selected parent.
- Account list paginates at 50 rows; sort/filter re-queries rather than sorting client-side beyond the loaded page.

---

## 7. States

| Level | Loading | Empty | Error |
|-------|---------|-------|-------|
| Territory | Skeleton rows under region | "No territories with activity this period" | "Territory data unavailable — retry" |
| Account | Skeleton rows under territory | "No accounts with activity this period" | "Account data unavailable — retry" |

---

## 8. Analytics events

| Event | When | Payload |
|-------|------|---------|
| `drilldown_open` | Row click at any level | level, parent_id, source_view |
| `drilldown_navigate` | Level change (deeper or via breadcrumb) | from_level, to_level, entity_id |
| `drilldown_back` | Back action | from_level, to_level |
| `account_detail_view` | Account row expanded to full detail | account_id, segment |
