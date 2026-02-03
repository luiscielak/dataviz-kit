# Skill: Entity drilldown

## Purpose

Generate a spec for **drilldown** from a summary (e.g. region, segment, product) to entity-level detail. Enforces overview → zoom/filter → details on demand (Shneiderman).

## When to Use

- Dashboard has aggregate views and users need to drill into specific entities (accounts, regions, products, time periods).
- You are defining drilldown targets, breadcrumbs, and what “details on demand” contains.

## Inputs (copy/paste)

- **Parent view**: What the user sees first (e.g. regional summary, product line summary).
- **Entity type**: What they drill into (e.g. account, store, campaign).
- **Drill levels** (if multi-level): e.g. Region → Territory → Account.
- **Detail payload**: Metrics and attributes shown at the lowest level.
- **Back / breadcrumb**: How user returns to overview.

## Prompt (copy/paste)

Generate an **entity drilldown spec** for the following.

**Parent view**: [description]
**Entity type**: [e.g. account, store, campaign]
**Drill levels** (if multi-level): [list]
**Detail payload**: [metrics and attributes at lowest level]
**Back / breadcrumb**: [how user returns]

Requirements:
- Overview is the default; drilldown is explicit (click, row expand, or navigation). Details on demand only. No chartjunk (Tufte).
- Include: purpose; entry points (where drill starts); levels and hierarchy; detail view content; navigation (breadcrumb, back); data and loading; states (loading, empty, error); analytics events for drill actions.

Output in the structure defined in **Output Format** below. Use tables for levels, detail payload, and events.

## Output Format

1. **Purpose** – What decisions drilldown supports (bullets)
2. **Entry points** – Where drill is triggered (table: Source view | Trigger | Target)
3. **Levels & hierarchy** – Table: Level | Entity type | Key dimensions | Aggregations shown
4. **Detail view** – Metrics and attributes at lowest level; layout notes
5. **Navigation** – Breadcrumb structure; back behavior; deep-link support (if any)
6. **Data & loading** – What is loaded per level; when (e.g. on expand vs on navigate)
7. **States** – Loading / Empty / Error at each level
8. **Analytics events** – Table: Event | When | Payload (e.g. level, entity_id)

## Anti-patterns to avoid

- Detail-first flows that require multiple clicks to get to the summary.
- Missing breadcrumb or back so users get lost.
- Overloading the detail view with every possible attribute; keep to “details on demand” set.

## Example invocation (short)

“Entity drilldown spec. Parent: Regional revenue summary. Entity: Account. Levels: Region → Territory → Account. Detail: Revenue, units, last order. Breadcrumb: full path, back to summary.”
