# Skill: Alerts

## Purpose

Generate a spec for an **alerting system** tied to dashboards or KPIs: triggers, severity, channels, and escalation. Keeps alerts actionable and minimal (Tufte: signal over noise).

## When to Use

- Stakeholder asks for “alerts,” “notifications,” or “exception handling” for a dashboard or KPI set.
- You need to define what triggers an alert, who gets it, and how it’s surfaced (in-app, email, Slack, etc.).

## Inputs (copy/paste)

- **KPIs or metrics** that can trigger alerts: name and definition.
- **Trigger rules**: Condition (e.g. threshold, % change, missing data) and time window.
- **Audience**: Who receives alerts (roles or personas).
- **Channels**: In-app / Email / Slack / PagerDuty / Other.
- **Escalation** (if any): When and how alerts escalate.

## Prompt (copy/paste)

Generate an **alerting system spec** for the following.

**KPIs / metrics**: [name + definition]
**Trigger rules**: [condition + time window per metric]
**Audience**: [who receives]
**Channels**: [in-app, email, Slack, etc.]
**Escalation**: [when and how]

Requirements:
- Alerts are signal, not noise: only fire when action is needed. Clear severity and owner. Include: purpose; alert catalog (trigger, severity, channel); escalation; in-dashboard treatment (badge, banner, list); states (acknowledged, resolved); analytics events.

Output in the structure defined in **Output Format** below. Use tables for alert catalog and events.

## Output Format

1. **Purpose** – What decisions or actions alerts support (bullets)
2. **Alert catalog** – Table: Alert name | Metric | Trigger rule | Severity | Channel(s) | Owner
3. **Escalation** – Table: Condition | Action (e.g. escalate after 2h) | Next owner/channel
4. **In-dashboard treatment** – Where alerts appear (banner, module, list); how user acknowledges or drills through
5. **States** – New / Acknowledged / Resolved; what user can do in each
6. **Trust layer** – How trigger is defined; freshness of underlying data; caveats
7. **Analytics events** – Table: Event | When | Payload (alert_id, severity, channel, action)

## Anti-patterns to avoid

- Too many alerts or low thresholds so everything fires (alert fatigue).
- No severity or owner so recipients don’t know what to do.
- Missing in-dashboard treatment so alerts exist only in email/Slack and dashboard feels disconnected.

## Example invocation (short)

“Alerts spec. KPIs: Revenue, Error rate. Triggers: Revenue down >10% WoW; Error rate >5%. Severity: P1/P2. Channels: Slack + in-app. Escalation: P1 to on-call after 1h.”
