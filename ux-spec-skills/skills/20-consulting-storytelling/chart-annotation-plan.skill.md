# Skill: Chart annotation plan

## Purpose

Generate a spec for **where and how to annotate** charts for storytelling: callouts, reference lines, labels, and narrative text. Keeps annotations purposeful (Tufte: every mark carries information).

## When to Use

- Dashboard or deck has key charts that need to “tell a story” (e.g. highlight a trend, exception, or comparison).
- You want a consistent plan for annotations across charts rather than ad hoc labels.

## Inputs (copy/paste)

- **Charts** (list): Chart name or type and what it shows (e.g. Revenue trend, Segment comparison).
- **Story per chart**: What the viewer should notice (e.g. “Q3 dip,” “Segment A outperforming”).
- **Audience**: Executive / PM / Client.
- **Context**: In-dashboard vs exported/slide.

## Prompt (copy/paste)

Generate a **chart annotation plan** for the following.

**Charts**: [name/type + what it shows]
**Story per chart**: [what viewer should notice]
**Audience**: [audience]
**Context**: [in-dashboard vs slide/export]

Requirements:
- Annotations support the story; no decorative or redundant labels. Types: reference line, callout, label, short narrative. Specify placement and trigger (always on vs on hover/click) where relevant. Tufte: maximize data-ink; annotations are signal.

Output in the structure defined in **Output Format** below. Use tables for chart-level annotations.

## Output Format

1. **Purpose** – Why annotations matter for this set of charts (bullets)
2. **Annotation types** – Brief list: reference line, callout, label, narrative text; when to use each
3. **Per-chart plan** – Table: Chart | Story to support | Annotation type | Content/placement | Trigger (always / hover / click)
4. **Rules** – No more than N callouts per chart; reference lines only when meaningful; etc.
5. **States** – How annotations behave in empty/error/partial data

## Anti-patterns to avoid

- Annotating everything; only annotate what drives the story.
- Redundant labels that repeat axis or legend.
- Reference lines or callouts without a clear “so what.”

## Example invocation (short)

“Chart annotation plan. Charts: Revenue trend, Segment bar chart. Stories: Revenue trend—highlight Q3 dip and recovery; Segment—call out Segment A as top. Context: Exec slide. Limit 2 callouts per chart.”
