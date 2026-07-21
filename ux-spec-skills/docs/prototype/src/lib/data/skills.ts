import type { Skill, SkillCategory } from "./types";
import { CATEGORY_LABELS, CATEGORY_ORDER } from "./types";

export const skills: Skill[] = [
  {
    slug: "dataviz-critique",
    name: "Dataviz critique",
    category: "critique",
    categoryLabel: CATEGORY_LABELS.critique,
    description:
      "Multi-lens review of a dashboard/chart/spec: scorecard, severity findings, positives.",
    path: "skills/40-critique/dataviz-critique.skill.md",
    purpose:
      "Run a multi-lens critique of a rendered dashboard, chart, or spec and produce a client-ready review: scorecard, prioritized findings with severity, and recommendations. Orchestrates rigor skills as lenses.",
    whenToUse: [
      'User asks to "critique," "review," "audit," or "grade" a dashboard, chart, or spec.',
      "After generating a spec or HTML dashboard, as a review gate before handoff.",
      "When a stakeholder needs a single scored report instead of one lens.",
    ],
    inputs: [
      { name: "Subject", detail: "Dashboard name, chart, or spec title" },
      { name: "Artifact", detail: "Spec markdown, HTML path, and/or screenshot(s)" },
      { name: "Context", detail: "Dashboard / Slide / Report; audience" },
      { name: "Metric definitions", detail: "Optional — enables provenance findings" },
    ],
    prompt:
      "Produce a dataviz critique of the provided artifact. Evaluate encoding accuracy, data-ink & integrity, task–encoding fit, provenance & trust, cognitive load, and annotation clarity. Output scorecard, positives, and prioritized findings with severity.",
    outputFormat: [
      "Summary (2–4 sentences)",
      "Scorecard — Lens | Score (1–5) | Rationale",
      "Positives (2–3 specific)",
      "Findings with severity",
      "Priority fixes (top 1–3)",
    ],
    antiPatterns: [
      "Inventing high severity when issues are minor",
      "Generic praise instead of specific positives",
      "Covering fewer than four lenses",
    ],
    example:
      "Critique weekly-performance-review.html for an ops lead. Context: weekly dashboard.",
    related: {
      sample: "examples/generic/sample-dataviz-critique.md",
      html: "examples/html/weekly-performance-review.html",
      expertSlug: "edward-tufte",
      principles: "reference/principles-tufte.md",
    },
  },
  {
    slug: "ben-fry-pipeline",
    name: "Ben Fry pipeline",
    category: "rigor",
    categoryLabel: CATEGORY_LABELS.rigor,
    description:
      "Checklist: Acquire → Parse → Filter → Mine → Represent → Refine → Interact.",
    path: "skills/30-dataviz-rigor/ben-fry-pipeline.skill.md",
    purpose:
      "Walk a viz or dashboard ask through Ben Fry’s seven stages so acquire, filter, and trust steps are not skipped.",
    whenToUse: [
      "Early scoping of a new visualization or dashboard.",
      "When the team jumped to chart type before clarifying data stages.",
    ],
    inputs: [
      { name: "Ask / goal", detail: "What decision or question the viz supports" },
      { name: "Data context", detail: "Known sources, grain, refresh" },
    ],
    prompt:
      "Apply the Ben Fry pipeline (Acquire → Parse → Filter → Mine → Represent → Refine → Interact) to the ask. Note gaps per stage and recommended next steps.",
    outputFormat: [
      "Stage checklist with status",
      "Gaps and risks",
      "Recommended next actions",
    ],
    antiPatterns: [
      "Skipping Acquire/Filter and jumping to Represent",
      "Treating Interact as decoration only",
    ],
    related: {
      sample: "examples/generic/sample-ben-fry-pipeline.md",
      html: "examples/html/rigor-and-consulting-skills.html",
      expertSlug: "ben-fry",
      principles: "reference/principles-ben-fry.md",
    },
  },
  {
    slug: "tufte-cleanup",
    name: "Tufte cleanup",
    category: "rigor",
    categoryLabel: CATEGORY_LABELS.rigor,
    description: "Remove chartjunk and maximize data-ink; clarity and integrity.",
    path: "skills/30-dataviz-rigor/tufte-cleanup.skill.md",
    purpose:
      "Review a spec or chart list for Tufte compliance: maximize data-ink, remove chartjunk, avoid distorting comparisons.",
    whenToUse: [
      "After drafting a dashboard or slide spec; before handoff.",
      'Stakeholder asks to "clean up" or "reduce noise."',
    ],
    inputs: [
      { name: "Spec or chart list", detail: "Draft markdown or chart descriptions" },
      { name: "Context", detail: "Dashboard / Slide deck / Report" },
    ],
    prompt:
      "Apply Tufte cleanup. Check data-ink, chartjunk, integrity, and clarity. Output cleanup checklist and summary (Pass / Edit).",
    outputFormat: [
      "Cleanup checklist table",
      "Summary — Pass / Edit with priority changes",
      "Optional revised snippets",
    ],
    antiPatterns: [
      'Vague "make it simpler" without pointing to elements',
      "Adding decoration that increases chartjunk",
    ],
    example:
      "Tufte cleanup for [module table]. Context: weekly dashboard.",
    related: {
      expertSlug: "edward-tufte",
      principles: "reference/principles-tufte.md",
    },
  },
  {
    slug: "munzner-why-what-how",
    name: "Munzner why–what–how",
    category: "rigor",
    categoryLabel: CATEGORY_LABELS.rigor,
    description: "Align task (why), data (what), and encoding (how).",
    path: "skills/30-dataviz-rigor/munzner-why-what-how.skill.md",
    purpose:
      "Force alignment between user task, data abstraction, and visual encoding before locking chart types.",
    whenToUse: [
      "Choosing or defending an encoding choice.",
      "When charts feel arbitrary relative to the question.",
    ],
    inputs: [
      { name: "Task (why)", detail: "What the user needs to do" },
      { name: "Data (what)", detail: "Types, grain, attributes" },
      { name: "Encoding draft (how)", detail: "Proposed marks/channels" },
    ],
    prompt:
      "Apply Munzner why–what–how. State task, data abstraction, and encoding; flag mismatches and recommend fixes.",
    outputFormat: [
      "Why / What / How summary",
      "Mismatch findings",
      "Recommended encoding changes",
    ],
    antiPatterns: [
      "Picking a chart type before stating the task",
      "Encoding that fights data type or perceptual order",
    ],
    related: {
      sample: "examples/generic/sample-munzner-why-what-how.md",
      html: "examples/html/rigor-and-consulting-skills.html",
      expertSlug: "tamara-munzner",
      principles: "reference/principles-munzner.md",
    },
  },
  {
    slug: "encoding-accuracy",
    name: "Encoding accuracy",
    category: "rigor",
    categoryLabel: CATEGORY_LABELS.rigor,
    description:
      "Ensure visual encodings match data semantics and perception.",
    path: "skills/30-dataviz-rigor/encoding-accuracy.skill.md",
    purpose:
      "Check that channels fit data types, respect perceptual order, and avoid misleading double encodings.",
    whenToUse: [
      "Reviewing chart specs for channel–data fit.",
      "Before shipping HTML demos or executive slides.",
    ],
    inputs: [
      { name: "Chart / module list", detail: "Encodings proposed per view" },
      { name: "Data types", detail: "Quantitative, ordinal, categorical, temporal" },
    ],
    prompt:
      "Audit encoding accuracy. Flag channel–data mismatches, missing zero baselines for magnitude, and conflicting channels.",
    outputFormat: [
      "Encoding audit table",
      "Severity-ranked issues",
      "Recommended fixes",
    ],
    antiPatterns: [
      "Rainbow scales for unordered categories without legend care",
      "Area encoding for 1D magnitude comparisons",
    ],
    related: {
      sample: "examples/generic/sample-encoding-accuracy.md",
      html: "examples/html/rigor-and-consulting-skills.html",
      expertSlug: "tamara-munzner",
      principles: "reference/principles-munzner.md",
    },
  },
  {
    slug: "executive-slide-outline",
    name: "Executive slide outline",
    category: "consulting",
    categoryLabel: CATEGORY_LABELS.consulting,
    description: "Spec for executive deck: slide-by-slide outline and narrative.",
    path: "skills/20-consulting-storytelling/executive-slide-outline.skill.md",
    purpose:
      "Produce a slide-by-slide outline with narrative spine for an executive deck.",
    whenToUse: [
      "Need a consulting-style deck from analysis or dashboard takeaways.",
      "Ambiguous ask that is presentation-first, not a live dashboard.",
    ],
    inputs: [
      { name: "Decision / ask", detail: "What the room must decide" },
      { name: "Evidence", detail: "Key facts, charts, risks" },
      { name: "Audience", detail: "Exec / board / client" },
    ],
    prompt:
      "Draft an executive slide outline using pyramid structure. One message per slide; annotate chart intent.",
    outputFormat: [
      "Narrative spine",
      "Slide table: # | Title-as-takeaway | Content | Visual",
      "Open questions",
    ],
    antiPatterns: [
      "Title as topic instead of takeaway",
      "Deck that dumps every chart without a recommendation",
    ],
    related: {
      sample: "examples/generic/sample-exec-slide-outline.md",
      template: "templates/exec-slide-outline.template.md",
      expertSlug: "barbara-minto",
      principles: "reference/principles-minto.md",
    },
  },
  {
    slug: "dashboard-onepager",
    name: "Dashboard one-pager",
    category: "consulting",
    categoryLabel: CATEGORY_LABELS.consulting,
    description:
      "Spec for dashboard companion one-pager (purpose, modules, takeaways).",
    path: "skills/20-consulting-storytelling/dashboard-onepager.skill.md",
    purpose:
      "Write a companion one-pager that explains purpose, modules, and takeaways for a dashboard.",
    whenToUse: [
      "Handing a dashboard to stakeholders who will not explore interactively.",
      "Need a leave-behind alongside a live view.",
    ],
    inputs: [
      { name: "Dashboard purpose", detail: "Decisions supported" },
      { name: "Modules", detail: "Names and primary metrics" },
      { name: "Key takeaways", detail: "Current story if known" },
    ],
    prompt:
      "Produce a dashboard one-pager: purpose, module map, takeaways, and caveats.",
    outputFormat: [
      "Purpose",
      "Module summary",
      "Takeaways",
      "Caveats / freshness",
    ],
    antiPatterns: [
      "Reprinting the full dashboard without synthesis",
      "Missing caveats or definitions",
    ],
    related: {
      sample: "examples/generic/sample-dashboard-onepager.md",
      template: "templates/consulting-onepager.template.md",
      expertSlug: "cole-nussbaumer-knaflic",
      principles: "reference/principles-storytelling-with-data.md",
    },
  },
  {
    slug: "chart-annotation-plan",
    name: "Chart annotation plan",
    category: "consulting",
    categoryLabel: CATEGORY_LABELS.consulting,
    description: "Spec for where and how to annotate charts for storytelling.",
    path: "skills/20-consulting-storytelling/chart-annotation-plan.skill.md",
    purpose:
      "Plan titles-as-takeaways, callouts, and labels so charts tell a clear story.",
    whenToUse: [
      "Polishing charts for slides or one-pagers.",
      "Critique found weak annotation clarity.",
    ],
    inputs: [
      { name: "Charts", detail: "List with intended message" },
      { name: "Audience", detail: "Familiarity with the domain" },
    ],
    prompt:
      "Create a chart annotation plan: title, callouts, units, and declutter notes per chart.",
    outputFormat: [
      "Per-chart annotation table",
      "Global declutter rules",
    ],
    antiPatterns: [
      "Labels that restate the axis without a takeaway",
      "Callouts on every point",
    ],
    related: {
      sample: "examples/generic/sample-chart-annotation-plan.md",
      html: "examples/html/rigor-and-consulting-skills.html",
      expertSlug: "cole-nussbaumer-knaflic",
      principles: "reference/principles-storytelling-with-data.md",
    },
  },
  {
    slug: "daily-exec-pulse",
    name: "Daily exec pulse",
    category: "executive",
    categoryLabel: CATEGORY_LABELS.executive,
    description:
      "Spec for daily cadence exec dashboard: key metrics, exceptions, and actions.",
    path: "skills/10-exec-dashboards/daily-exec-pulse.skill.md",
    purpose:
      "Generate a structured spec for a daily cadence executive dashboard: key metrics, exceptions, and clear actions. Overview first; drilldown on demand.",
    whenToUse: [
      'Stakeholder asks for a "daily exec dashboard," "daily pulse," or "morning briefing."',
      "Cadence is daily; audience needs to start the day informed.",
    ],
    inputs: [
      { name: "Domain", detail: "e.g. Revenue, Supply chain, Product health" },
      { name: "Primary KPIs", detail: "3–7 with one-line definitions" },
      { name: "Exception rules", detail: "What counts as needs attention" },
      { name: "Audience", detail: "Executive / Ops / Mixed" },
      { name: "Data sources", detail: "Systems and refresh time" },
    ],
    prompt:
      "Generate a daily executive dashboard spec. Overview first: summary metrics, exception list, optional detail. Follow Shneiderman; no chartjunk. Include trust layer and states.",
    outputFormat: [
      "Purpose & decisions supported",
      "Modules & layout table",
      "Data requirements",
      "Interaction model",
      "Trust layer",
      "States",
      "Analytics events",
    ],
    antiPatterns: [
      "Too many metrics above the fold",
      "Detail-first without summary and exceptions",
      "Missing trust layer",
    ],
    example:
      "Domain: Revenue. KPIs: Bookings, MRR, Pipeline. Exceptions: >15% drop vs prior day. Audience: CRO.",
    related: {
      sample: "examples/generic/sample-daily-dashboard.md",
      template: "templates/daily-dashboard.spec.template.md",
      html: "examples/html/daily-exec-pulse.html",
      expertSlug: "ben-shneiderman",
      principles: "reference/principles-shneiderman.md",
    },
  },
  {
    slug: "weekly-performance-review",
    name: "Weekly performance review",
    category: "executive",
    categoryLabel: CATEGORY_LABELS.executive,
    description:
      "Spec for weekly review dashboard: trends, comparisons, and variance.",
    path: "skills/10-exec-dashboards/weekly-performance-review.skill.md",
    purpose:
      "Spec a weekly performance review: trends, comparisons, and variance vs plan or prior period.",
    whenToUse: [
      "Weekly ops or leadership review cadence.",
      "Need trend context beyond daily exceptions.",
    ],
    inputs: [
      { name: "KPIs", detail: "Primary and secondary metrics" },
      { name: "Comparisons", detail: "WoW, vs plan, vs prior year" },
      { name: "Segments", detail: "Optional breakouts" },
    ],
    prompt:
      "Generate a weekly performance review dashboard spec with trends, variance, and drill paths.",
    outputFormat: [
      "Purpose",
      "Modules & layout",
      "Comparisons & variance rules",
      "Trust layer",
      "States",
    ],
    antiPatterns: [
      "Daily exception list without weekly trend context",
      "Too many segments on the default view",
    ],
    related: {
      sample: "examples/generic/sample-weekly-dashboard.md",
      template: "templates/weekly-dashboard.spec.template.md",
      html: "examples/html/weekly-performance-review.html",
      expertSlug: "stephen-few",
      principles: "reference/principles-stephen-few.md",
    },
  },
  {
    slug: "monthly-strategy-risk",
    name: "Monthly strategy & risk",
    category: "executive",
    categoryLabel: CATEGORY_LABELS.executive,
    description:
      "Spec for monthly strategy/risk dashboard: goals, progress, and risk indicators.",
    path: "skills/10-exec-dashboards/monthly-strategy-risk.skill.md",
    purpose:
      "Spec a monthly strategy and risk view: goals, progress, and risk indicators.",
    whenToUse: [
      "Monthly leadership or board-style review.",
      "Need goal progress and risk, not only operational KPIs.",
    ],
    inputs: [
      { name: "Goals", detail: "Strategic objectives and owners" },
      { name: "Risk register cues", detail: "Known risks or RAG rules" },
      { name: "Horizon", detail: "Month / quarter framing" },
    ],
    prompt:
      "Generate a monthly strategy & risk dashboard spec with goals, progress, and risk modules.",
    outputFormat: [
      "Purpose",
      "Goal & risk modules",
      "Data & owners",
      "Trust & caveats",
    ],
    antiPatterns: [
      "Only green RAG without leading indicators",
      "No link from risk to decision",
    ],
    related: {
      sample: "examples/generic/sample-monthly-dashboard.md",
      template: "templates/monthly-dashboard.spec.template.md",
      expertSlug: "stephen-few",
      principles: "reference/principles-stephen-few.md",
    },
  },
  {
    slug: "entity-drilldown",
    name: "Entity drilldown",
    category: "executive",
    categoryLabel: CATEGORY_LABELS.executive,
    description:
      "Spec for drilldown from summary to entity-level detail (overview → zoom → details).",
    path: "skills/10-exec-dashboards/entity-drilldown.skill.md",
    purpose:
      "Specify overview → zoom/filter → details-on-demand paths to entity-level detail.",
    whenToUse: [
      "Users must move from summary KPIs to account/product/region detail.",
      "Applying Shneiderman mantra to an existing dashboard.",
    ],
    inputs: [
      { name: "Entity type", detail: "Account, SKU, region, etc." },
      { name: "Summary metrics", detail: "What appears at overview" },
      { name: "Detail fields", detail: "What appears on entity view" },
    ],
    prompt:
      "Spec entity drilldown paths: overview, filters, entity page modules, and back-navigation.",
    outputFormat: [
      "Interaction model",
      "Overview modules",
      "Entity detail modules",
      "States (empty entity, no access)",
    ],
    antiPatterns: [
      "Deep link with no overview context",
      "Entity page that dumps raw tables only",
    ],
    related: {
      sample: "examples/generic/sample-entity-drilldown.md",
      template: "templates/entity-drilldown.spec.template.md",
      html: "examples/html/rigor-and-consulting-skills.html",
      expertSlug: "ben-shneiderman",
      principles: "reference/principles-shneiderman.md",
    },
  },
  {
    slug: "alerts",
    name: "Alerts",
    category: "executive",
    categoryLabel: CATEGORY_LABELS.executive,
    description:
      "Spec for alerting system: triggers, severity, channels, and escalation.",
    path: "skills/10-exec-dashboards/alerts.skill.md",
    purpose:
      "Specify alerting: triggers, severity, channels, and escalation—not vague “red badges.”",
    whenToUse: [
      "Need threshold or anomaly alerts tied to a dashboard.",
      "Ops asks for paging or Slack escalation rules.",
    ],
    inputs: [
      { name: "Triggers", detail: "Thresholds, rules, owners" },
      { name: "Severity model", detail: "Levels and meaning" },
      { name: "Channels", detail: "In-app, email, Slack, page" },
    ],
    prompt:
      "Generate an alerting system spec: triggers, severity, channels, escalation, and dashboard surfacing.",
    outputFormat: [
      "Trigger table",
      "Severity & escalation",
      "Channel matrix",
      "Dashboard integration",
    ],
    antiPatterns: [
      "Alerts without clear ownership or severity",
      "Paging for informational noise",
    ],
    related: {
      template: "templates/alerting-system.spec.template.md",
      html: "examples/html/alerts-in-dashboard.html",
      expertSlug: "stephen-few",
      principles: "reference/principles-stephen-few.md",
    },
  },
  {
    slug: "metric-provenance",
    name: "Metric provenance",
    category: "executive",
    categoryLabel: CATEGORY_LABELS.executive,
    description:
      "Spec for definitions, lineage, freshness, and caveats (trust layer).",
    path: "skills/10-exec-dashboards/metric-provenance.skill.md",
    purpose:
      "Document definitions, lineage, freshness, and caveats so metrics are trustworthy.",
    whenToUse: [
      "Building the trust layer for any cadence dashboard.",
      "Stakeholders dispute what a KPI means.",
    ],
    inputs: [
      { name: "Metrics list", detail: "Names needing definitions" },
      { name: "Sources", detail: "Systems and transforms" },
      { name: "Freshness", detail: "Refresh cadence and lag" },
    ],
    prompt:
      "Produce metric provenance: definition, owner, lineage, freshness, caveats per metric.",
    outputFormat: [
      "Metric definition table",
      "Lineage notes",
      "Freshness & caveats",
    ],
    antiPatterns: [
      "Definitions only in tribal knowledge",
      "No freshness statement on the surface",
    ],
    related: {
      sample: "examples/generic/sample-metric-provenance.md",
      template: "templates/metric-provenance.spec.template.md",
      html: "examples/html/rigor-and-consulting-skills.html",
      expertSlug: "ben-fry",
      principles: "reference/principles-ben-fry.md",
    },
  },
  {
    slug: "global-standards",
    name: "Global standards",
    category: "global",
    categoryLabel: CATEGORY_LABELS.global,
    description:
      "Combined Tufte, Shneiderman, Ben Fry principles and usage rules for every spec.",
    path: "skills/00-global-standards.skill.md",
    purpose:
      "Apply combined Tufte, Shneiderman, and Ben Fry standards as a baseline for every spec.",
    whenToUse: [
      "Starting any new spec before specialized skills.",
      "Quick baseline pass across principles.",
    ],
    inputs: [
      { name: "Draft spec", detail: "Optional existing draft" },
      { name: "Context", detail: "Dashboard / slide / report" },
    ],
    prompt:
      "Apply global standards (Tufte + Shneiderman + Ben Fry). List must-haves and gaps for the draft or ask.",
    outputFormat: [
      "Standards checklist",
      "Gaps",
      "Recommended skill follow-ups",
    ],
    antiPatterns: [
      "Treating global standards as a full critique substitute",
      "Ignoring overview-first or data-ink rules",
    ],
    related: {
      expertSlug: "edward-tufte",
      principles: "reference/principles-tufte.md",
    },
  },
  {
    slug: "router",
    name: "Router",
    category: "router",
    categoryLabel: CATEGORY_LABELS.router,
    description:
      "Selects the right skill from a user request (daily/weekly/monthly/drilldown/alerts/consulting).",
    path: "skills/99-router.skill.md",
    purpose:
      "Select the right Spec Skill when the ask is ambiguous—cadence, consulting, rigor, or critique.",
    whenToUse: [
      "User is unsure which skill to run.",
      "Ask mixes dashboard, slides, and critique language.",
    ],
    inputs: [
      { name: "User request", detail: "Raw ask in their words" },
      { name: "Constraints", detail: "Optional cadence, audience, artifact type" },
    ],
    prompt:
      "Route this request to the best skill. State primary skill, why, and optional secondary rigor/critique pass.",
    outputFormat: [
      "Primary skill + path",
      "Rationale",
      "Optional follow-up skills",
    ],
    antiPatterns: [
      "Defaulting everything to daily exec pulse",
      "Skipping critique when the ask is clearly a review",
    ],
    example:
      '"Is this weekly chart OK?" → Dataviz critique (then optional Tufte / encoding).',
    related: {},
  },
];

export function getSkill(slug: string): Skill | undefined {
  return skills.find((s) => s.slug === slug);
}

export function skillsByCategory(category: SkillCategory): Skill[] {
  return skills.filter((s) => s.category === category);
}

export function skillsGrouped(): { category: SkillCategory; label: string; skills: Skill[] }[] {
  return CATEGORY_ORDER.map((category) => ({
    category,
    label: CATEGORY_LABELS[category],
    skills: skillsByCategory(category),
  }));
}

export function skillHasSample(skill: Skill): boolean {
  return Boolean(skill.related.sample);
}

export function skillHasHtml(skill: Skill): boolean {
  return Boolean(skill.related.html);
}
