# Skill: Weekly performance review

## Purpose

Generate a structured spec for a **weekly cadence** performance review dashboard. Focus: trends, week-over-week comparisons, variance vs plan or prior period, and narrative-ready views.

## When to Use

- Stakeholder asks for “weekly review,” “weekly performance,” or “weekly operating dashboard.”
- Cadence is weekly; audience needs to compare and explain variance (e.g. leadership, ops, PM).

## Inputs (copy/paste)

- **Domain**: e.g. Revenue, Operations, Product, Support.
- **Primary KPIs** (3–7): name, definition, and whether comparison is WoW, vs plan, or both.
- **Segments** (optional): e.g. region, product line, cohort.
- **Audience**: Executive / Ops / PM.
- **Data sources**: Systems and refresh (e.g. Monday 8am).

## Prompt (copy/paste)

Generate a **weekly performance review dashboard spec** for the following.

**Domain**: [domain]
**Primary KPIs**: [name, definition, comparison type: WoW / vs plan / both]
**Segments** (if any): [list]
**Audience**: [audience]
**Data sources**: [sources + refresh]

Requirements:
- Overview: summary of the week (key numbers + direction); then variance and trends; then segment or breakdown views. Shneiderman: overview → zoom/filter → details. Tufte: no chartjunk.
- Include: purpose and decisions supported; modules and layout; data requirements and derived metrics (e.g. WoW %, variance); interaction; trust layer; states (empty, error, stale, partial); analytics events.

Output in the structure defined in **Output Format** below. Use tables for modules, KPIs, and events.

## Output Format

1. **Purpose & decisions supported** – What decisions does this dashboard support? (bullets)
2. **Modules & layout** – Table: Module name | Purpose | Primary metrics | Placement
3. **Data requirements** – Source, refresh, derived metrics (WoW %, variance %, formulas)
4. **Interaction model** – Overview (default); filters (week, segment); details on demand
5. **Trust layer** – Definitions, freshness, caveats (e.g. partial week)
6. **States** – Empty / Error / Stale / Partial week: what user sees and actions
7. **Analytics events** – Table: Event | When | Payload

## Anti-patterns to avoid

- Daily-level detail dominating the view; weekly should emphasize week-level aggregates and comparison.
- Missing variance or comparison (WoW or vs plan) when audience needs to explain performance.
- No handling of “partial week” or cut-off timing in trust layer.

## Example invocation (short)

“Weekly performance review spec. Domain: Operations. KPIs: Orders, Fulfillment rate, Returns (WoW + vs plan). Segments: Region. Audience: COO. Data: ERP + DW, Monday 8am.”
