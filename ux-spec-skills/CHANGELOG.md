# Changelog

All notable changes to the UX Spec Skills Library.

---

## [Unreleased]

### Added

- **Practice experts (v1 queue) shipped**: Nicholas Felton, Alberto Cairo, Nancy Duarte, and Andy Kirk. Each gains a principle checklist (`reference/principles-*.md`), an expert profile (`reference/experts/*.md`), a "See it" demo (`examples/experts/<slug>/demo.html`), and a flat gallery card. Expert count goes 7 → 11; Later-queue authors (Bertin, Cleveland, Lupi, Stefaner, Bremer, Rosling) remain omitted.

- **Expert demos**: `examples/experts/<slug>/demo.html` — one original educational micro-demo per shipped expert (before/after or wrong/right) teaching a single signature principle on a shared fictional "Revenue pulse" dataset; conceptual layouts for Ben Fry (pipeline) and Minto (pyramid). No copyrighted figures.
- **See it section**: expert profiles gain a first-class "See it" module that embeds the demo (titled iframe) with an "Open full demo" link; Overview and Experts gallery cards show a `demo` cue. Prototype serves demos from `docs/prototype/public/expert-demos/` (copied from `examples/experts/` by a `predev`/`prebuild` script).
- **Critique band**: `skills/40-critique/dataviz-crit.skill.md` — a first-class, multi-lens critique workflow (scorecard, severity findings, positives) that orchestrates the `30-dataviz-rigor/` skills as lenses. Critique is its own category, not a rigor deep-dive.
- **Router**: maps "critique / review / audit / is this chart OK" intents to the new critique skill.
- **Index**: new **Critique** section in `SKILLS_INDEX.md`.
- **Example**: `examples/generic/sample-dataviz-crit.md` reviewing `examples/html/weekly-performance-review.html`.
- **Rename**: the critique skill and its sample are now `dataviz-crit` (slug, file names, and prototype route `/skills/dataviz-crit`); the "Critique" category label is unchanged. The old `/skills/dataviz-critique` route permanently redirects.
- **Artifact intake**: the prototype crit page adds a client-side artifact picker (URL field or file upload with image/text/HTML preview) that composes the copy-paste prompt; nothing is uploaded to a server.
- **Critique offer (`/crit`)**: the kit Overview gains a third door — Get a free critique — and the Critique nav item opens `/crit`, the lead-magnet page (six principles, sample report, request form). `/skills/dataviz-crit` stays the self-serve skill. Live submit posts to the existing Netlify intake when the kit is served at `thehoomanloop.com/dataviz`.
- **Canonical URL**: the kit is mounted at `thehoomanloop.com/dataviz` (`basePath: /dataviz`, Netlify 200-proxy to Vercel, same pattern as `/spell`). `/dataviz/crit` is the free critique; `/dataviz/api/*`, `/dataviz/example-report/`, and `/dataviz/thank-you/` stay on the marketing site.

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
