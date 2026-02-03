# Skill: Global standards (Tufte + Shneiderman + Ben Fry)

## Purpose

Apply a single set of non-negotiable principles to every dashboard and storytelling spec: clarity and integrity (Tufte), overview-then-detail interaction (Shneiderman), and a clear data pipeline (Ben Fry). Use this skill as a gate before or after any other spec skill.

## When to Use

- Before or after generating any dashboard or consulting spec.
- When reviewing an existing spec for compliance.
- When aligning a team on “how we spec” for enterprise dashboards and storytelling.

## Inputs (copy/paste)

- **Spec or scope**: Either a draft spec (markdown) or a short description of the product (dashboard/slide deck/one-pager).
- **Audience**: Executive / PM / Operations / Consulting client.
- **Cadence** (if dashboard): Daily / Weekly / Monthly / Ad hoc.

## Prompt (copy/paste)

Apply the following standards to the provided spec or scope. Output a short compliance checklist and any required edits.

**1. Tufte**
- Maximize data-ink ratio; remove chartjunk (decorative lines, 3D, unnecessary color).
- Show data variation, not design variation.
- Every mark must carry information; no redundant or misleading encodings.
- Integrity: do not distort comparisons (e.g. truncated axes must be explicit and justified).

**2. Shneiderman (overview → zoom/filter → details on demand)**
- Default view is an overview (summary, key metrics, exceptions).
- User can zoom or filter to narrow scope (e.g. time range, segment, entity).
- Details (definitions, breakdowns, provenance) available on demand, not cluttering the overview.

**3. Ben Fry (pipeline)**
- Acquire: source(s) and refresh.
- Parse: structure and types.
- Filter: what’s in scope for this view/cadence.
- Mine: derived metrics and aggregations.
- Represent: visual encoding (charts, tables, sparklines).
- Refine: simplify and remove noise.
- Interact: overview → zoom/filter → details.

**4. Output rules**
- Specs use headings and bullet lists; tables for modules, KPIs, events.
- No vague advice; explicit sections for purpose, modules, data, interaction, trust (definitions/freshness/caveats), states (empty/error/stale/partial), and analytics events.

Produce:
1. A **Compliance checklist** (Tufte / Shneiderman / Ben Fry) with Pass / Fail / Edit.
2. **Required edits** (concrete changes to the spec, or “None”).
3. **One-line summary** of overall compliance.

## Output Format

- **Compliance checklist**: Table with Principle (Tufte / Shneiderman / Ben Fry), Criterion, Status (Pass / Fail / Edit), Note.
- **Required edits**: Numbered list of specific changes, or “None.”
- **Summary**: One sentence.

## Anti-patterns to avoid

- Vague “make it cleaner” without pointing to specific sections or elements.
- Adding decoration or extra “polish” that increases chartjunk.
- Ignoring interaction model (e.g. detail-first layouts with no overview).
- Skipping the trust layer (definitions, freshness, caveats) or state handling.

## Example invocation (short)

“Apply global standards to [paste draft daily dashboard spec]. Output compliance checklist, required edits, and summary.”
