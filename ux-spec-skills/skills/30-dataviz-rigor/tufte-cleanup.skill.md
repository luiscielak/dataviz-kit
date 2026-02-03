# Skill: Tufte cleanup

## Purpose

Review a spec or chart list for **Tufte** compliance: maximize data-ink ratio, remove chartjunk, avoid distorting comparisons, and ensure every mark carries information.

## When to Use

- After drafting a dashboard or slide spec; before handoff to design/engineering.
- Stakeholder asks to “clean up” or “reduce noise” in a viz spec.

## Inputs (copy/paste)

- **Spec or chart list**: Draft spec (markdown) or list of charts with short descriptions.
- **Context**: Dashboard / Slide deck / Report.

## Prompt (copy/paste)

Apply **Tufte cleanup** to the provided spec or chart list.

**Spec/chart list**: [paste]
**Context**: [dashboard / slide / report]

Check for:
- **Data-ink**: Is every mark necessary? Remove: decorative grid lines, 3D, redundant color, heavy borders, duplicate encodings.
- **Chartjunk**: No non-data decoration; no “chartoons.” Signal over noise.
- **Integrity**: No truncated axes without explicit note; no distorted scale (e.g. area for 1D comparison); no misleading aggregation.
- **Clarity**: One clear message per chart; labels and units explicit.

Output: **Cleanup checklist** (table: Issue type | Location | Finding | Recommendation) and **Summary** (Pass / Edit with 1–3 priority edits).

## Output Format

1. **Cleanup checklist** – Table: Issue type (data-ink / chartjunk / integrity / clarity) | Location | Finding | Recommendation
2. **Summary** – Pass / Edit; if Edit, 1–3 priority changes
3. **Optional: revised snippet** – For 1–2 high-impact items, show before/after text or bullet

## Anti-patterns to avoid

- Vague “make it simpler” without pointing to a specific element or section.
- Adding decoration (e.g. “make it prettier”) that increases chartjunk.
- Ignoring integrity (e.g. recommending a log scale without noting it in the spec).

## Example invocation (short)

“Tufte cleanup for [paste module table and chart list]. Context: weekly dashboard. Output checklist and summary.”
