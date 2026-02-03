# Skill: Daily exec pulse

## Purpose

Generate a structured spec for a **daily cadence** executive dashboard. Focus: key metrics at a glance, exceptions that need attention, and clear actions. Overview first; drilldown on demand.

## When to Use

- Stakeholder asks for a “daily exec dashboard,” “daily pulse,” or “morning briefing” view.
- Cadence is daily; audience is executives or ops leads who need to start the day informed.

## Inputs (copy/paste)

- **Domain**: e.g. Revenue, Supply chain, Customer success, Product health.
- **Primary KPIs** (3–7): name and one-line definition each.
- **Exception rules**: What counts as “needs attention” (e.g. >10% drop vs prior day, threshold breach).
- **Audience**: Executive / Ops / Mixed.
- **Data sources**: Systems and refresh time (e.g. nightly 6am UTC).

## Prompt (copy/paste)

Generate a **daily executive dashboard spec** for the following.

**Domain**: [domain]
**Primary KPIs**: [list name + definition]
**Exception rules**: [what triggers “attention”]
**Audience**: [audience]
**Data sources**: [sources + refresh]

Requirements:
- Overview first: summary row or hero metrics; then exception list; then optional detail modules.
- Follow Shneiderman: overview → zoom/filter → details on demand. No chartjunk (Tufte).
- Include: purpose and decisions supported; modules and layout; data requirements and derived metrics; interaction (overview → drilldown); trust layer (definitions, freshness, caveats); states (empty, error, stale, partial); analytics events.

Output in the structure defined in **Output Format** below. Use tables for modules, KPIs, and events.

## Output Format

1. **Purpose & decisions supported** – What decisions does this dashboard support? (bullets)
2. **Modules & layout** – Table: Module name | Purpose | Primary metrics | Placement
3. **Data requirements** – Source, refresh, derived metrics (formulas where relevant)
4. **Interaction model** – Overview (default); zoom/filter (e.g. date, segment); details on demand (where)
5. **Trust layer** – Definitions (link or inline), freshness statement, caveats
6. **States** – Empty / Error / Stale / Partial: what user sees and any actions
7. **Analytics events** – Table: Event | When | Payload (key dimensions)

## Anti-patterns to avoid

- Too many metrics above the fold (keep to 3–7 primary).
- Detail-first layout without a clear summary and exception list.
- Missing exception rules or vague “alerts” without criteria.
- No trust layer (definitions, freshness, caveats).

## Example invocation (short)

“Generate daily exec pulse spec. Domain: Revenue. KPIs: Bookings, MRR, Pipeline. Exceptions: >15% drop vs prior day. Audience: CRO. Data: Salesforce + internal DB, refresh 6am UTC.”
