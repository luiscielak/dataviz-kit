# Skill: Encoding accuracy

## Purpose

Ensure **visual encodings** in a spec match data semantics and perception: correct use of position, length, angle, area, color (and order of effectiveness); no misleading dual use of the same channel.

## When to Use

- Reviewing a spec that defines charts or modules; validate that encodings are accurate and perceptually appropriate.
- Stakeholder asks about “which chart type” or “color meaning” for a metric.

## Inputs (copy/paste)

- **Charts or modules**: List with chart type and what is encoded (e.g. bar: region → revenue; line: time → count).
- **Data types**: Quantitative / ordinal / nominal per attribute.
- **Context**: Dashboard / Slide.

## Prompt (copy/paste)

Review **encoding accuracy** for the provided charts/modules.

**Charts/modules**: [list with type and encoding]
**Data types**: [per attribute]
**Context**: [dashboard / slide]

Check:
- **Channel–data fit**: Position and length for quantitative; color for categorical or diverging scale; avoid area for 1D comparison; avoid angle for non-part-to-whole.
- **Perceptual order**: Use most accurate channels (position on aligned scale, length) for primary comparisons; color/saturation for secondary or categorical.
- **No double duty**: Same channel should not encode two different attributes (e.g. color for category and also for value).
- **Scales**: Zero baseline for length/area when showing magnitude; explicit scale when truncated.

Output: **Encoding table** (Chart | Attribute | Channel | Data type | OK?) and **Issues** (list with recommendation).

## Output Format

1. **Encoding table** – Table: Chart | Attribute | Channel (position/length/color/…) | Data type | OK? (Y/N)
2. **Issues** – Bullet list: chart + issue + recommendation
3. **Summary** – Pass / Edit; 1–3 priority fixes

## Anti-patterns to avoid

- Using area or volume for 1D quantitative comparison (underestimates difference).
- Using color for both category and value without clear legend or scale.
- Truncated axis without explicit note in spec (integrity).

## Example invocation (short)

“Encoding accuracy. Charts: Bar (region → revenue), Line (time → MRR). Data: region nominal, revenue/MRR quantitative. Output encoding table and issues.”
