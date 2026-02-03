# Skill: Executive slide outline

## Purpose

Generate a **slide-by-slide outline** for an executive deck that tells a clear story: situation, evidence, conclusion, recommendation. Supports consulting and internal strategy presentations. Aligns with Minto and storytelling-with-data principles.

## When to Use

- Stakeholder asks for “exec deck outline,” “slide outline,” or “presentation structure” for an executive audience.
- You have a topic or dataset and need a narrative skeleton (not full slide copy).

## Inputs (copy/paste)

- **Topic or title**: e.g. Q3 Performance, Strategy Option A vs B, Risk Review.
- **Audience**: Executive / Board / Client.
- **Key messages** (2–5): What must be remembered or decided.
- **Evidence**: Main data or analyses to support (e.g. dashboard, model, research).
- **Desired outcome**: Decision / Alignment / Awareness.

## Prompt (copy/paste)

Generate an **executive slide outline** for the following.

**Topic**: [topic or title]
**Audience**: [audience]
**Key messages**: [2–5 messages]
**Evidence**: [main data or analyses]
**Desired outcome**: [decision / alignment / awareness]

Requirements:
- Structure: opening (situation/context), body (evidence, one idea per slide or logical group), conclusion and recommendation, appendix/backup. No chartjunk; each slide has a single job. Use Minto-style: answer first, then support.

Output in the structure defined in **Output Format** below. Use a table for the slide list.

## Output Format

1. **Purpose & outcome** – What the deck is for; what decision or outcome is desired (bullets)
2. **Narrative arc** – 2–3 sentences: opening → evidence → conclusion → ask
3. **Slide outline** – Table: Slide # | Title | Purpose | Key content (bullets or 1 line) | Visual (chart/table/text)
4. **Appendix** – Slides for backup or Q&A (title + purpose only if needed)
5. **Speaker notes** – Optional: 1 line per critical slide (what to say / emphasize)

## Anti-patterns to avoid

- Too many ideas per slide; one clear idea per slide.
- Evidence before the “so what”; lead with the answer or conclusion where appropriate.
- No clear ask or recommendation at the end.

## Example invocation (short)

“Exec slide outline. Topic: Q3 Revenue Review. Audience: C-suite. Messages: On track to plan; West underperforming; recommend reallocating spend. Evidence: Weekly dashboard + regional breakdown. Outcome: Approve reallocation.”
