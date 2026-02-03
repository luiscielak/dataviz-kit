# Skill: Monthly strategy & risk

## Purpose

Generate a structured spec for a **monthly cadence** strategy and risk dashboard. Focus: goals vs actuals, progress toward targets, risk indicators, and strategic narrative (not operational minutiae).

## When to Use

- Stakeholder asks for “monthly exec,” “monthly strategy,” “board pack,” or “monthly risk” view.
- Cadence is monthly; audience is exec or board; emphasis on goals, progress, and risk.

## Inputs (copy/paste)

- **Domain**: e.g. Strategy, Risk, Finance, Product.
- **Goals / targets**: Name, target value or range, and how progress is measured.
- **Risk indicators**: Name, definition, threshold or rating (e.g. RAG).
- **Audience**: Executive / Board / Strategy.
- **Data sources**: Systems and refresh (e.g. first business day of month).

## Prompt (copy/paste)

Generate a **monthly strategy & risk dashboard spec** for the following.

**Domain**: [domain]
**Goals / targets**: [name, target, how progress is measured]
**Risk indicators**: [name, definition, threshold or RAG]
**Audience**: [audience]
**Data sources**: [sources + refresh]

Requirements:
- Overview: goal progress and risk summary; then goal drilldown; then risk detail. Shneiderman: overview → zoom/filter → details. Tufte: no chartjunk; integrity in comparisons.
- Include: purpose and decisions supported; modules and layout; data requirements and derived metrics (e.g. % to target, RAG logic); interaction; trust layer; states; analytics events.

Output in the structure defined in **Output Format** below. Use tables for modules, goals, risk indicators, and events.

## Output Format

1. **Purpose & decisions supported** – What decisions does this dashboard support? (bullets)
2. **Modules & layout** – Table: Module name | Purpose | Primary metrics | Placement
3. **Goals & targets** – Table: Goal | Target | Current | % to target | Trend
4. **Risk indicators** – Table: Indicator | Definition | Threshold/RAG | Source
5. **Data requirements** – Source, refresh, derived metrics
6. **Interaction model** – Overview; filters (month, business unit); details on demand
7. **Trust layer** – Definitions, freshness, caveats
8. **States** – Empty / Error / Stale / Partial month
9. **Analytics events** – Table: Event | When | Payload

## Anti-patterns to avoid

- Operational daily/weekly metrics dominating; monthly should emphasize goals and risk.
- Vague “risk” without clear definitions or thresholds.
- No link between goals and data (how “% to target” is computed).

## Example invocation (short)

“Monthly strategy & risk spec. Domain: Finance. Goals: Revenue target, Margin target. Risks: Cash runway, DSO, Customer concentration. Audience: CFO + Board. Data: ERP + planning, 1st biz day.”
