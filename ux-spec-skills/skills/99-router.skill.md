# Skill: Router (select spec skill from request)

## Purpose

**Select the right spec skill** from a user’s natural-language request. Maps “daily dashboard,” “weekly review,” “monthly strategy,” “drilldown,” “alerts,” “slide outline,” “one-pager,” etc. to the corresponding skill file and path.

## When to Use

- User says “I need a spec for…” or “generate a spec…” without naming a specific skill.
- You are unsure whether to use daily vs weekly vs monthly vs consulting outputs.

## Inputs (copy/paste)

- **User request**: The full or partial request (e.g. “I need a daily exec dashboard for revenue,” “weekly performance review,” “one-pager for the dashboard,” “alerting spec”).

## Prompt (copy/paste)

Given the **user request** below, select the single most appropriate spec skill from this library. Output only the skill path and a one-line reason.

**User request**: [paste]

**Skill mapping**:
- **Daily** (pulse, morning briefing, daily exec) → `skills/10-exec-dashboards/daily-exec-pulse.skill.md`
- **Weekly** (weekly review, weekly performance, WoW) → `skills/10-exec-dashboards/weekly-performance-review.skill.md`
- **Monthly** (monthly exec, strategy, risk, board) → `skills/10-exec-dashboards/monthly-strategy-risk.skill.md`
- **Drilldown** (entity drill, drill into, detail view, hierarchy) → `skills/10-exec-dashboards/entity-drilldown.skill.md`
- **Alerts** (alerts, notifications, exception handling) → `skills/10-exec-dashboards/alerts.skill.md`
- **Metric definitions / provenance / trust** → `skills/10-exec-dashboards/metric-provenance.skill.md`
- **Executive slide / deck outline / presentation** → `skills/20-consulting-storytelling/executive-slide-outline.skill.md`
- **Dashboard one-pager / companion doc** → `skills/20-consulting-storytelling/dashboard-onepager.skill.md`
- **Chart annotations** → `skills/20-consulting-storytelling/chart-annotation-plan.skill.md`
- **Data pipeline / Ben Fry** → `skills/30-dataviz-rigor/ben-fry-pipeline.skill.md`
- **Tufte cleanup / chartjunk** → `skills/30-dataviz-rigor/tufte-cleanup.skill.md`
- **Task/data/encoding (Munzner)** → `skills/30-dataviz-rigor/munzner-why-what-how.skill.md`
- **Encoding accuracy** → `skills/30-dataviz-rigor/encoding-accuracy.skill.md`
- **Critique / review / audit a dashboard or chart** (multi-lens review, scorecard, "is this chart OK?") → `skills/40-critique/dataviz-critique.skill.md`
- **Global standards / principles** → `skills/00-global-standards.skill.md`

If the request is ambiguous or could match multiple skills, pick the primary intent and mention the alternative in the reason. If no skill fits, say “No single skill; consider: [list].”

## Output Format

- **Selected skill**: `skills/…/filename.skill.md`
- **Reason**: One line why this skill fits the request.
- **Alternative** (optional): If relevant, one other skill path and when to use it.

## Anti-patterns to avoid

- Returning multiple skills when one clearly fits (pick one; suggest the other as follow-up).
- Confusing weekly vs monthly (weekly = trends/WoW; monthly = goals/strategy/risk).
- Routing “dashboard” without cadence to daily by default; prefer asking or defaulting to daily only if context implies it.

## Example invocation (short)

“Route: I need a spec for a weekly performance dashboard for sales.” → `skills/10-exec-dashboards/weekly-performance-review.skill.md` — Request explicitly asks for weekly performance/sales.
