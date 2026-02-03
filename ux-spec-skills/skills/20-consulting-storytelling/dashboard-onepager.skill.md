# Skill: Dashboard one-pager

## Purpose

Generate a **one-pager** that accompanies a dashboard: purpose, key modules, how to read it, and 3–5 takeaways. Serves as a handout or quick reference for consulting and internal clients.

## When to Use

- Stakeholder asks for “dashboard one-pager,” “companion doc,” or “how to read this dashboard.”
- You have (or are building) a dashboard spec and need a single-page narrative summary.

## Inputs (copy/paste)

- **Dashboard name and cadence**: e.g. Weekly Performance, Daily Pulse.
- **Purpose**: What decisions or questions it supports.
- **Modules**: Name and one-line purpose each (or reference to dashboard spec).
- **Primary audience**: Who uses it.
- **Takeaways**: 3–5 things the reader should remember or do after reading.

## Prompt (copy/paste)

Generate a **dashboard one-pager** for the following.

**Dashboard**: [name + cadence]
**Purpose**: [what it supports]
**Modules**: [name + one-line purpose]
**Audience**: [primary users]
**Takeaways**: [3–5]

Requirements:
- One page when rendered. Sections: purpose; how to read (overview → drilldown); modules at a glance; takeaways; definitions/freshness (short). Crisp, scannable; tables for modules. No fluff.

Output in the structure defined in **Output Format** below.

## Output Format

1. **Title & cadence** – Dashboard name; Daily / Weekly / Monthly
2. **Purpose** – 2–3 bullets: what decisions or questions this supports
3. **How to read** – Overview first → then zoom/filter → then details on demand (2–3 sentences)
4. **Modules at a glance** – Table: Module | Purpose | Key metric(s)
5. **Takeaways** – 3–5 numbered bullets: what to remember or do
6. **Definitions & freshness** – 1–2 sentences; link to full definitions if available

## Anti-patterns to avoid

- More than one page of content; cut or summarize.
- Vague “use this dashboard” without clear takeaways or how to read.
- Missing freshness or definitions when dashboard has caveats.

## Example invocation (short)

“Dashboard one-pager. Dashboard: Weekly Performance Review. Purpose: Explain variance, spot trends. Modules: Summary, WoW comparison, Segment breakdown. Takeaways: Revenue up 5% WoW; West below plan; review segment filters. Freshness: Monday 8am.”
