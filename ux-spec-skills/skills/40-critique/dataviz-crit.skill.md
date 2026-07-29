# Skill: Dataviz crit

## Purpose

Run a **multi-lens critique** of a rendered dashboard, chart, or spec and produce a client-ready review: a scorecard, prioritized findings with severity, and specific recommendations. This is the entry-point "review my viz" workflow. It orchestrates the specialist `30-dataviz-rigor/` skills as lenses rather than replacing them.

## When to Use

- User asks to "critique," "review," "audit," or "grade" a dashboard, chart, or spec ("is this chart OK?", "clean up my dashboard").
- After generating a spec or HTML dashboard, as a review gate before handoff or delivery.
- When a stakeholder needs a single scored report instead of one lens (encoding-only, Tufte-only).

For a single lens, use the specialist skill directly (see Related lenses).

## Inputs (copy/paste)

- **Subject**: What is being reviewed (dashboard name, chart, or spec title).
- **Artifact**: One or more of — spec markdown (paste), generated HTML path (e.g. `output/dashboard.html` or `examples/html/weekly-performance-review.html`), and/or screenshot(s).
- **Context**: Dashboard / Slide / Report; audience (executive / PM / operations / consulting client).
- **Metric definitions** (optional): Definitions, sources, freshness — enables provenance/trust findings.

## Prompt (copy/paste)

Produce a **dataviz critique** of the provided artifact for a data/analytics lead and the engineer implementing it. Evaluate against the lenses below, then output a scorecard, positives, and prioritized findings.

**Subject**: [name]
**Artifact**: [paste spec / HTML path / screenshot reference]
**Context**: [dashboard / slide / report; audience]
**Metric definitions**: [optional]

Evaluate each lens:
- **Encoding accuracy** — channel–data fit, perceptual order, no double-duty channels, zero baselines for magnitude. (`30-dataviz-rigor/encoding-accuracy.skill.md`)
- **Data-ink & integrity** — chartjunk, data-ink ratio, truncated axes, distorted scales, one message per chart. (`30-dataviz-rigor/tufte-cleanup.skill.md`)
- **Task–encoding fit** — does the encoding serve the user's task (why/what/how). (`30-dataviz-rigor/munzner-why-what-how.skill.md`)
- **Provenance & trust** — definitions, lineage, freshness, caveats present and correct. (`10-exec-dashboards/metric-provenance.skill.md`, `30-dataviz-rigor/ben-fry-pipeline.skill.md`)
- **Cognitive load** — overview-first, density, grouping, progressive disclosure (Shneiderman, Few).
- **Annotation clarity** — labels, units, titles-as-takeaways, annotation of key points (Knaflic).

For every finding include: **element** (what/where), **principle** (lens), **severity** (`high`/`medium`/`low`), **impact**, **recommendation**, **technicalNote**, **evidence** (chart name, spec section, or screenshot).

Rules:
- Produce **5–12 findings** covering at least **4 lenses**; include at least one `high` when genuine issues exist (do not invent severity).
- Include **2–3 specific positives** ("what's working"), not generic praise.
- Spell out each acronym on first use, e.g. "monthly recurring revenue (MRR)".
- Score each lens **1–5** (use the full range; avoid clustering at 3).

## Output Format

1. **Summary** – 2–4 sentence executive summary of overall quality and the top priority.
2. **Scorecard** – Table: Lens | Score (1–5) | Rationale (1–2 sentences).
   Score keys (camelCase): `encodingAccuracy`, `dataInkIntegrity`, `taskEncodingFit`, `provenanceTrust`, `cognitiveLoad`, `annotationClarity`.
3. **Positives** – 2–3 specific strengths.
4. **Findings** – Grouped by lens or severity. Each: element | principle | severity | impact | recommendation | technicalNote | evidence.
5. **Priority fixes** – Numbered list of the top 1–3 changes.

## Severity guide

| Severity | When to use |
|----------|-------------|
| **high** | Misleads the reader, breaks integrity, or blocks the core task |
| **medium** | Adds friction or confusion; weaker-than-ideal encoding for many users |
| **low** | Polish, minor inconsistency, or edge-case improvement |

## Scoring (1–5 per lens)

| Score | Meaning |
|-------|---------|
| 1 | Critical failures; misleading or unreadable |
| 2 | Significant issues; workarounds required to interpret |
| 3 | Adequate; meets basics but clear room to improve |
| 4 | Strong; minor gaps only |
| 5 | Exemplary; reference-quality for this lens |

## Save the critique to a file

After producing the critique in chat:

1. **Path**: `docs/dataviz-crits/dataviz-crit-YYYY-MM-DD-<slug>.md` (use today's date and a short slug, e.g. `weekly-dashboard`). If the project has no `docs/` folder, use `dataviz-crits/` at the project root.
2. **Contents**: Optional YAML frontmatter (`date`, `subject`, `source`), then summary, scorecard, positives, and findings grouped by lens.
3. **Confirm** the saved file path in chat.

## Tool mode (UX Crit app — `review.json`)

The [ux-crit](../../../../ux-crit) app is now a kind-aware crit engine: it captures an artifact into `data/reviews/<id>/`, renders a client report, and publishes to a private portal. A `dataviz-crit` review reuses that whole pipeline — only the lens vocabulary and score keys differ (this skill is the source of truth for them).

When the user references `data/reviews/<id>` or a `review.json` with `status: "captured"` and `kind: "dataviz-crit"` exists:

1. **Read** `data/reviews/<id>/review.json` and every screenshot in that folder (e.g. `upload.png`).
2. **Analyze** using the lenses, severity, and scoring rules above.
3. **Write findings** directly into `review.json` by updating these fields:

```json
{
  "status": "reviewed",
  "summary": "2–4 sentence executive summary for the client",
  "scores": {
    "encodingAccuracy": 3,
    "dataInkIntegrity": 4,
    "taskEncodingFit": 2,
    "provenanceTrust": 3,
    "cognitiveLoad": 3,
    "annotationClarity": 2
  },
  "scoreRationale": {
    "encodingAccuracy": "1–2 sentences on why this score, referencing the findings that drove it.",
    "taskEncodingFit": "e.g. A dual-axis combo chart forces the reader to compare unrelated scales for the core decision."
  },
  "positives": [
    "Specific observation of what works well",
    "Another specific strength"
  ],
  "findings": [
    {
      "element": "Revenue vs. churn dual-axis chart",
      "principle": "Task–Encoding Fit",
      "severity": "high",
      "impact": "Readers can't tell whether revenue or churn is driving the trend because two scales share one plot.",
      "recommendation": "Split into two aligned small multiples with a shared time axis and zero baselines.",
      "technicalNote": "Use week-over-week (WoW) deltas; keep a zero baseline for the magnitude series.",
      "screenshot": "upload.png"
    }
  ]
}
```

4. **Preserve** existing fields: `subject`, `kind`, `sourceType`, `date`, `capturedAt`, `metadata`, `screenshots`. Use the `principle` display labels exactly as they appear in the scorecard (Encoding Accuracy, Data-Ink & Integrity, Task–Encoding Fit, Provenance & Trust, Cognitive Load, Annotation Clarity) so the report groups findings under the right lens.
5. **Set** `status` to `"reviewed"`.
6. **Also save** a markdown copy to `docs/dataviz-crits/dataviz-crit-YYYY-MM-DD-<slug>.md` (or `dataviz-crits/` at project root if there is no `docs/`).
7. **Confirm** in chat: the internal report path (`/report.html?id=<id>`) and the markdown file path. The operator then runs `npm run publish -- <id> --customer "Name"` to push it to the client portal.

`scoreRationale` is optional but recommended — keyed by the same camelCase score keys, each a short justification the report renders under "How we reached each score."

### Finding count guidance

- Aim for **5–12 findings** covering at least **4 lenses**; include at least **1 high** when genuine.
- Do not invent severity to fill the count.

## Anti-patterns to avoid

- Duplicating a specialist skill's full prompt instead of citing it as a lens.
- Clustering all scores at 3, or inventing high-severity findings to fill the count.
- Vague findings ("make it cleaner") without a specific element and recommendation.
- Skipping provenance/trust when metric definitions were provided.

## Related lenses (deep dives)

- Encoding-only → `30-dataviz-rigor/encoding-accuracy.skill.md`
- Chartjunk / data-ink → `30-dataviz-rigor/tufte-cleanup.skill.md`
- Task/data/encoding → `30-dataviz-rigor/munzner-why-what-how.skill.md`
- Pipeline completeness → `30-dataviz-rigor/ben-fry-pipeline.skill.md`
- Trust layer → `10-exec-dashboards/metric-provenance.skill.md`
- Compliance gate → `00-global-standards.skill.md`

## Example invocation (short)

"Dataviz critique of `examples/html/weekly-performance-review.html`. Context: weekly dashboard, exec audience. Output scorecard, positives, and prioritized findings."
