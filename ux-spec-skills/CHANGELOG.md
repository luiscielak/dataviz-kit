# Changelog

All notable changes to the UX Spec Skills Library.

---

## [Unreleased]

### Added

- **Expert demos**: `examples/experts/<slug>/demo.html` — one original educational micro-demo per shipped expert (before/after or wrong/right) teaching a single signature principle on a shared fictional "Revenue pulse" dataset; conceptual layouts for Ben Fry (pipeline) and Minto (pyramid). No copyrighted figures.
- **See it section**: expert profiles gain a first-class "See it" module that embeds the demo (titled iframe) with an "Open full demo" link; Overview and Experts gallery cards show a `demo` cue. Prototype serves demos from `docs/prototype/public/expert-demos/` (copied from `examples/experts/` by a `predev`/`prebuild` script).
- **Critique band**: `skills/40-critique/dataviz-critique.skill.md` — a first-class, multi-lens critique workflow (scorecard, severity findings, positives) that orchestrates the `30-dataviz-rigor/` skills as lenses. Critique is its own category, not a rigor deep-dive.
- **Router**: maps "critique / review / audit / is this chart OK" intents to the new critique skill.
- **Index**: new **Critique** section in `SKILLS_INDEX.md`.
- **Example**: `examples/generic/sample-dataviz-critique.md` reviewing `examples/html/weekly-performance-review.html`.

---

## [0.1.0] – 2025-02-03

### Added

- **Structure**: `ux-spec-skills/` with `skills/`, `templates/`, `examples/generic/`, `reference/`.
- **README.md**: Repo purpose, principles, layout, how to use skills, workflow, quick start.
- **SKILLS_INDEX.md**: Categorized index of all skills with paths and one-line descriptions.
- **Global standards**: `00-global-standards.skill.md` (Tufte + Shneiderman + Ben Fry).
- **Executive dashboard skills**: daily-exec-pulse, weekly-performance-review, monthly-strategy-risk, entity-drilldown, alerts, metric-provenance.
- **Consulting storytelling skills**: executive-slide-outline, dashboard-onepager, chart-annotation-plan.
- **Dataviz rigor skills**: ben-fry-pipeline, tufte-cleanup, munzner-why-what-how, encoding-accuracy.
- **Router**: `99-router.skill.md` for selecting skill from request type.
- **Templates**: exec-dashboard-suite, daily/weekly/monthly dashboard, entity-drilldown, alerting-system, metric-provenance, consulting-onepager, exec-slide-outline.
- **Examples**: sample daily, weekly, monthly dashboard specs; sample exec slide outline; sample dashboard one-pager.
- **Reference**: principles docs for Tufte, Shneiderman, Ben Fry, Stephen Few, Munzner, Minto, Storytelling with Data.
