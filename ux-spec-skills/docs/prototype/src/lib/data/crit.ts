export const SAMPLE_REPORT_HREF =
  "https://thehoomanloop.com/dataviz/example-report/";
export const TALK_DECK_HREF = "https://canva.link/d93jdy5ojq61i85";
export const GITHUB_KIT_HREF = "https://github.com/luiscielak/dataviz-kit";

export const CRIT_PRINCIPLES = [
  {
    n: "01",
    name: "Encoding Accuracy",
    blurb:
      "Do the marks fit the data — the right channel for the task, a perceptual order that matches the values, zero baselines for magnitude?",
  },
  {
    n: "02",
    name: "Data-Ink & Integrity",
    blurb:
      "Is every mark carrying information — no chartjunk, no truncated axes, no distorted scales, one message per chart?",
  },
  {
    n: "03",
    name: "Task–Encoding Fit",
    blurb:
      "Does the encoding serve the actual decision — the why, the what, and the how of the reader's task?",
  },
  {
    n: "04",
    name: "Provenance & Trust",
    blurb:
      "Can the reader trust the numbers — definitions, lineage, freshness, and caveats present and correct?",
  },
  {
    n: "05",
    name: "Cognitive Load",
    blurb:
      "Overview-first, sensible density and grouping, progressive disclosure — or everything competing at once?",
  },
  {
    n: "06",
    name: "Annotation Clarity",
    blurb:
      "Do labels, units, legends, and titles-as-takeaways make the point, or leave the reader to decode a shape?",
  },
] as const;

export const CRIT_SCORES = [
  { score: "1", meaning: "Critical failures; misleading or unreadable" },
  { score: "2", meaning: "Significant issues; workarounds required to interpret" },
  { score: "3", meaning: "Adequate; meets basics but clear room to improve" },
  { score: "4", meaning: "Strong; minor gaps only" },
  { score: "5", meaning: "Exemplary; reference-quality for this principle" },
] as const;

export const CRIT_SEVERITY = [
  {
    level: "High",
    meaning:
      "Misleads the reader, breaks integrity, or blocks the core decision",
  },
  {
    level: "Medium",
    meaning:
      "Adds friction or confusion; weaker-than-ideal encoding for many readers",
  },
  {
    level: "Low",
    meaning: "Polish, minor inconsistency, or edge-case improvement",
  },
] as const;

export const CRIT_STEPS = [
  {
    n: "1",
    title: "Send one dashboard",
    body: "Upload a screenshot of the dashboard or chart that matters most — the one a decision hangs on. One artifact, so the read stays deep instead of shallow.",
  },
  {
    n: "2",
    title: "We critique it",
    body: "We run the six-principle critique against what a real reader actually sees, weighing each finding by its impact on the decision the view is meant to support.",
  },
  {
    n: "3",
    title: "You get a shareable report",
    body: "A private link to the full report — scorecard, prioritized findings, and specific fixes — that you can forward to your team. Typical turnaround is a few business days.",
  },
] as const;

export const CRIT_FIT = [
  "You have a dashboard or chart a real decision depends on — and you suspect it's not landing.",
  "You're an analytics lead, PM, founder, or operator who can act on the findings.",
  "You want a specific, prioritized read, not reassurance.",
  "You can point to one view that matters most right now.",
] as const;

export const CRIT_NOT_FIT = [
  "You want a full BI rebuild or a new data model — that's a different engagement.",
  "You're looking for data engineering or pipeline work specifically.",
  "The numbers themselves are wrong at the source — a critique reviews the visualization, not the ETL.",
  "The dashboard is too sensitive to share — run the critique yourself with the self-serve skill instead.",
  "You want a rubber stamp rather than an honest critique.",
] as const;
