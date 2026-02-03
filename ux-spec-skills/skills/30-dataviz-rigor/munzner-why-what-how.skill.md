# Skill: Munzner why–what–how

## Purpose

Align **task (why), data (what), and encoding (how)** using Munzner’s framework. Ensures each view in a spec has a clear purpose, matches the data types, and uses appropriate visual encoding.

## When to Use

- Designing or reviewing a dashboard module or chart; need to validate that the right encoding is used for the task and data.
- Stakeholder asks “why this chart type” or “what task does this support.”

## Inputs (copy/paste)

- **View or chart**: Name and short description (e.g. “Revenue trend,” “Segment comparison”).
- **Task (why)**: What the user is trying to do (e.g. compare, find trend, lookup value).
- **Data (what)**: Key attributes and types (e.g. time, categorical, quantitative).

## Prompt (copy/paste)

Apply **Munzner why–what–how** to the provided view/chart.

**View/chart**: [name + description]
**Task (why)**: [user goal]
**Data (what)**: [attributes + types]

Output:
- **Task taxonomy**: Identify Munzner task type(s): discover (present) vs produce (explore); target (value / trend / etc.); scope (one / few / many / all).
- **Data taxonomy**: Attribute types (key vs value); semantics (ordinal, quantitative, categorical).
- **Encoding (how)**: Recommended channel and mark; does current spec match? If not, recommend change.
- **Alignment check**: Table: Why | What | How | Aligned? (Y/N)

## Output Format

1. **Task (why)** – Taxonomy: discover/produce; target (value, trend, distribution, …); scope
2. **Data (what)** – Key vs value attributes; types (Q, O, N, …)
3. **Encoding (how)** – Mark + channel; recommendation
4. **Alignment check** – Table: Why | What | How | Aligned? (Y/N)
5. **Recommendation** – If misaligned, concrete change to spec

## Anti-patterns to avoid

- Picking a chart type first without stating the task.
- Ignoring data type (e.g. using position for categorical when length or color might be better for the task).
- Vague “use a bar chart” without linking to why (task) and what (data).

## Example invocation (short)

“Munzner why-what-how. View: Regional revenue comparison. Task: Compare 5 regions. Data: Region (nominal), Revenue (quantitative). Output alignment check and encoding recommendation.”
