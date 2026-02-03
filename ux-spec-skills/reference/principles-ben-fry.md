# Ben Fry — Pipeline: Acquire → Parse → Filter → Mine → Represent → Refine → Interact

**Source**: Ben Fry, *Visualizing Data* (O’Reilly).

---

## Pipeline stages

1. **Acquire** — Obtain the data (sources, APIs, files); refresh and cadence.
2. **Parse** — Structure and types; normalize so downstream steps can rely on it.
3. **Filter** — What’s in scope for this view (time range, segment, entity); remove the irrelevant.
4. **Mine** — Derived metrics, aggregations, computations (e.g. WoW %, RAG, variance).
5. **Represent** — Visual encoding: chart types, tables, sparklines; mark and channel.
6. **Refine** — Simplify; remove noise; align with Tufte (data-ink, no chartjunk).
7. **Interact** — Overview → zoom/filter → details on demand; align with Shneiderman.

---

## For specs

- Every dashboard spec should make each stage explicit: where data comes from (Acquire), how it’s shaped (Parse), what’s in scope (Filter), what’s computed (Mine), what’s shown (Represent), and how it’s simplified (Refine) and interacted with (Interact).
- Gaps in the spec (e.g. “we have a chart” but no Filter or Mine) should be called out and filled.
- Represent and Interact map to “modules & layout” and “interaction model”; Acquire–Mine map to “data requirements” and “derived metrics.”

---

## Quick checklist

- [ ] Acquire: sources and refresh specified.
- [ ] Parse: structure/types or normalization noted.
- [ ] Filter: in-scope dimensions (time, segment, entity) specified.
- [ ] Mine: derived metrics and formulas specified.
- [ ] Represent: chart/table types and encodings specified.
- [ ] Refine: simplification and cleanup (e.g. Tufte) considered.
- [ ] Interact: overview → zoom/filter → details specified.
