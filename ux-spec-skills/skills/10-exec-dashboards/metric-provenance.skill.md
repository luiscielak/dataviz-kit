# Skill: Metric provenance

## Purpose

Generate a spec for the **trust layer** around metrics: definitions, lineage (source and derivation), freshness, and caveats. Ensures every dashboard can show “what this number means” and “where it comes from.”

## When to Use

- Any dashboard spec that exposes KPIs or derived metrics; use as a companion to the main dashboard skill or as a standalone trust-layer spec.
- Stakeholder asks for “metric definitions,” “data dictionary,” “lineage,” or “freshness” for a dashboard.

## Inputs (copy/paste)

- **Metrics** (5–15): Name and short definition.
- **Sources**: System(s) and table or API; refresh cadence.
- **Derivations**: Formula or logic for computed metrics (e.g. WoW %, RAG).
- **Caveats**: Known limitations (e.g. excludes X, lag of N hours).

## Prompt (copy/paste)

Generate a **metric provenance (trust layer) spec** for the following.

**Metrics**: [name + short definition]
**Sources**: [system, table/API, refresh]
**Derivations**: [formula or logic for computed metrics]
**Caveats**: [known limitations]

Requirements:
- Every metric has: definition (user-facing), source (system/table/refresh), derivation (if computed), and caveats. Format for use in “definition” panels or help in dashboards. No chartjunk; this is reference content.

Output in the structure defined in **Output Format** below. Use tables for metrics and lineage.

## Output Format

1. **Purpose** – Why provenance matters for this dashboard (bullets)
2. **Metric definitions** – Table: Metric | Definition (user-facing) | Unit | Example
3. **Lineage** – Table: Metric | Source (system / table or API) | Refresh | Derivation (formula or “raw”)
4. **Freshness** – Per source or per dashboard: expected latency; what “stale” means
5. **Caveats** – Table: Metric or scope | Caveat (e.g. excludes X, lag N hours)
6. **Where shown in UI** – Inline tooltip / side panel / help page / export

## Anti-patterns to avoid

- Definitions that only repeat the metric name; use clear, unambiguous language.
- Missing derivation for computed metrics (e.g. % change, RAG) so users can’t verify.
- No caveats when data has known exclusions or lag.

## Example invocation (short)

“Metric provenance spec. Metrics: Bookings, MRR, Pipeline. Sources: Salesforce (nightly), billing (daily). Derivations: MRR = sum(ARR/12). Caveats: Bookings exclude renewals under $10k.”
