# Sample: Munzner why–what–how — Segment snapshot module

**View/chart**: Segment snapshot (from `sample-daily-dashboard.md` § Modules & layout)
**Task (why)**: Compare bookings across 3 customer segments to spot which one is driving today's number
**Data (what)**: Segment (Enterprise / Mid-market / SMB — nominal), Bookings (quantitative)
**Last updated**: 2025-02-03

---

## 1. Task (why)

- **Taxonomy**: Discover/present (not explore) — the viewer isn't searching, they're being shown the answer.
- **Target**: Compare values across a small number of categories (not trend, not distribution, not correlation).
- **Scope**: Few (3 segments) — comparison of a handful of discrete items, not "many" or "all."

---

## 2. Data (what)

- **Key attribute**: Segment — nominal, 3 levels, no inherent order.
- **Value attribute**: Bookings — quantitative, ratio scale (zero-baseline meaningful).
- **Derived attribute**: % of total — quantitative, part-to-whole, shown alongside raw value per § Detail view conventions.

---

## 3. Encoding (how)

- **Recommended mark**: Bar.
- **Recommended channel**: Position along a common baseline for the category axis (segment), length for the value (bookings) — the two most accurate channels for a "compare few values" task (Munzner/Mackinlay ranking).
- **Does current spec match?** Yes — `sample-daily-dashboard.md` specifies a bar/table for the segment snapshot, not a pie or donut.

---

## 4. Alignment check

| Why | What | How | Aligned? |
|-----|------|-----|----------|
| Compare bookings across 3 segments | Segment (nominal) × Bookings (quantitative) | Bar: position + length | Y |

---

## 5. Recommendation

No change needed — task, data, and encoding already agree. If a future request asks for "segment trend over time" (a different *why*: trend, not compare-few), that is a different view (small multiples or a line per segment), not a re-skin of this bar chart — see `sample-chart-annotation-plan.md` for how the trend chart is handled separately.
