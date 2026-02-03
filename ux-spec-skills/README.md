# UX Spec Skills Library

A reusable **Spec Skills Library** for enterprise executive dashboards and consulting storytelling. Use skills to generate structured specs; use templates as doc skeletons; use examples as reference outputs.

## Principles (non-negotiable)

- **Tufte**: Clarity and integrity; signal over noise; no chartjunk.
- **Shneiderman**: Overview first → zoom/filter → details on demand.
- **Ben Fry**: Acquire → Parse → Filter → Mine → Represent → Refine → Interact.

All specs and outputs in this repo follow these principles. See `reference/` for detailed principle docs.

---

## Repo layout

| Path | Purpose |
|------|--------|
| `skills/` | Spec-generator skills (`.skill.md`). Each defines purpose, inputs, prompt, output format. |
| `templates/` | Document skeletons with headings that match skill outputs. Copy and fill. |
| `examples/generic/` | Sample spec outputs (daily, weekly, monthly, slide outline, one-pager). |
| `examples/html/` | Self-contained HTML dashboard examples (Tailwind CDN, shadcn-inspired styling). |
| `reference/` | Principle summaries (Tufte, Shneiderman, Ben Fry, Few, Munzner, Minto, Storytelling with Data). |
| `SKILLS_INDEX.md` | Index of all skills with paths and one-line descriptions. |
| `CHANGELOG.md` | Version history. |

---

## How to use skills

1. **Choose a skill**  
   Use `SKILLS_INDEX.md` or the **router** (`skills/99-router.skill.md`) to pick the right skill for the request (daily vs weekly vs monthly vs drilldown vs alerts vs consulting).

2. **Gather inputs**  
   Copy the "Inputs" section from the skill file. Fill in context (domain, KPIs, cadence, audience).

3. **Run the prompt**  
   Paste your inputs into the skill’s "Prompt" section and execute (in Cursor or your workflow). The output is a structured spec.

4. **Optional: start from a template**  
   Copy the matching template from `templates/` and merge the generated spec into it, or use the spec as the source of truth and keep the template for structure.

5. **Refine**  
   Apply `00-global-standards.skill.md` and any `30-dataviz-rigor/` skills for consistency and rigor.

---

## Workflow

```
Inputs (domain, KPIs, cadence, audience)
    → Skill (e.g. daily-exec-pulse, weekly-performance-review)
    → Spec (purpose, modules, data, interaction, trust, states, events)
    → Dashboard build (design + engineering)
    → Optional: consulting outputs (exec slide outline, dashboard one-pager)
```

- **Executive dashboards**: Daily / Weekly / Monthly cadence; use `10-exec-dashboards/` skills.
- **Consulting storytelling**: Use `20-consulting-storytelling/` for slide outline and dashboard one-pager.
- **Rigor**: Use `30-dataviz-rigor/` for pipeline check, Tufte cleanup, and encoding accuracy.

---

## Quick start

- **"I need a daily exec dashboard spec"** → `skills/10-exec-dashboards/daily-exec-pulse.skill.md`
- **"I need a weekly review spec"** → `skills/10-exec-dashboards/weekly-performance-review.skill.md`
- **"I need a monthly strategy/risk spec"** → `skills/10-exec-dashboards/monthly-strategy-risk.skill.md`
- **"I need drilldown or alerts"** → `skills/10-exec-dashboards/entity-drilldown.skill.md` or `alerts.skill.md`
- **"I need an exec slide outline or one-pager"** → `skills/20-consulting-storytelling/`
- **"I’m not sure which skill"** → `skills/99-router.skill.md`

Always run `00-global-standards.skill.md` in mind (or explicitly) so every spec respects Tufte, Shneiderman, and Ben Fry.
