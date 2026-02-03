# Skill: Ben Fry pipeline

## Purpose

Apply **Ben Fry’s pipeline** (Acquire → Parse → Filter → Mine → Represent → Refine → Interact) as a checklist to a spec or implementation. Ensures the data flow and visualization pipeline are explicit and complete.

## When to Use

- Reviewing a dashboard or dataviz spec for pipeline completeness.
- Stakeholder asks for “data pipeline” or “how does the data get to the chart” in the spec.

## Inputs (copy/paste)

- **Spec or description**: Draft spec (markdown) or short description of the dashboard/viz.
- **Data sources**: Systems, tables, or APIs (if known).

## Prompt (copy/paste)

Apply **Ben Fry’s pipeline** as a checklist to the provided spec or description.

**Spec/description**: [paste or summarize]
**Data sources** (if known): [list]

For each stage, output:
- **Acquire**: Where data comes from; refresh/cadence.
- **Parse**: Structure and types; how raw is normalized.
- **Filter**: What’s in scope for this view (time, segment, entity).
- **Mine**: Derived metrics, aggregations, computations.
- **Represent**: Visual encoding (chart types, tables, sparklines).
- **Refine**: Simplification, removal of noise (Tufte alignment).
- **Interact**: Overview → zoom/filter → details (Shneiderman alignment).

Output a **Pipeline checklist** table: Stage | Specified? (Y/N) | Note. Then list any **Gaps** (missing or vague stages) and **Recommendations**.

## Output Format

1. **Pipeline checklist** – Table: Stage (Acquire … Interact) | Specified? (Y/N) | Note
2. **Gaps** – Bullet list of missing or vague stages
3. **Recommendations** – Concrete additions or edits to the spec

## Anti-patterns to avoid

- Treating “we have a dashboard” as sufficient; each stage should be explicit in the spec.
- Skipping Filter or Mine when the spec only describes Represent.
- No Interact when the dashboard has drilldown or filters.

## Example invocation (short)

“Apply Ben Fry pipeline to [paste daily dashboard spec]. Output checklist, gaps, and recommendations.”
