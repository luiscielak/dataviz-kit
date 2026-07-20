# Sample: Ben Fry pipeline checklist — applied to the daily dashboard spec

**Spec reviewed**: `sample-daily-dashboard.md`
**Data sources**: Salesforce (bookings, pipeline), Billing system (MRR)
**Last updated**: 2025-02-03

---

## 1. Pipeline checklist

| Stage | Specified? | Note |
|-------|------------|------|
| Acquire | Y | Salesforce + Billing, nightly sync by 06:00 UTC — stated in § Data requirements |
| Parse | N | Spec says "nightly sync" but not how raw Salesforce/Billing rows are normalized into the dashboard's schema |
| Filter | Y | Scope is implicit (current day vs. prior day) but not stated as an explicit filter step |
| Mine | Y | Δ% vs. prior day, exception threshold — stated as derived metrics |
| Represent | Y | Hero cards, sparklines, table — stated in § Modules & layout |
| Refine | Partial | No chartjunk in the module list, but no explicit statement of what was cut (e.g. "no pie chart considered") |
| Interact | Y | Overview → date/severity filter → detail panel — stated in § Interaction model |

---

## 2. Gaps

- **Parse** is unspecified: raw CRM/billing fields aren't mapped to dashboard fields anywhere in the spec, so an implementer has to guess at schema.
- **Filter** scope (today vs. prior day, which is the only comparison window) is implied by the modules but never stated as its own decision — a reader can't tell if last-week or last-month filtering was considered and rejected, or just never discussed.
- **Refine** has no explicit "what we removed" — useful for future spec reviewers to know a pie chart or gauge was considered and rejected, not just absent.

---

## 3. Recommendations

- Add a **Parse** subsection to § Data requirements: source field → dashboard field mapping for Bookings, MRR, Pipeline (e.g. `opportunities.amount` → `bookings`).
- Make the **Filter** scope explicit: "Scope: current day vs. prior day only; no rolling window in v1" — so the decision is visible, not inferred.
- Add one line under **Refine**: "Considered and rejected: pie chart for segment snapshot (poor part-to-whole comparison at 3 segments); gauge for pipeline (redundant with the hero number)." This documents the design decision instead of leaving it silent.
