# Dataviz Kit — Design Brief

**Product:** Dataviz Kit  
**Suite:** The Hooman Loop tools  
**Design system:** [Konstrukt](http://straatmini.tail56d80d.ts.net:4331/)  
**Status:** Brief (implementation after approval)  
**Content source:** Spec Skills Library in this package (`skills/`, `SKILLS_INDEX.md`)

---

## 1. Intent

Ship a **documentation-style frontend** for Dataviz Kit with **two equal pillars**: browse and learn about shipped **dataviz experts**, and discover and run **Spec Skills**—same Konstrukt shell as other tools in The Hooman Loop.

This UI is for discovery and explanation. Skill markdown files remain the source of truth for prompts and generation. Existing Tailwind HTML dashboards in `examples/html/` stay **linked demos**, not the primary shell. The kit is not framed as an exec-dashboard-only product.

### Job to be done

Help a designer, engineer, consultant, or learner:

1. Understand what Dataviz Kit is (within The Hooman Loop tools)—experts + skills
2. Browse dataviz experts (who they are, known works, where to learn more, principles for specs)
3. Pick the right skill for their request and see how to run it (inputs → prompt → output)
4. Jump to a sample spec or HTML demo when one exists

### Non-goals (v1)

- CMS, search, auth, or live prompt execution in the browser
- Automated capture or client-facing report/portal delivery for critiques (Phase 2; would reuse the ux-crit app as a dataviz domain pack, not a clone)
- Replacing or regenerating `.skill.md` files from the UI
- Redesigning the dashboard HTML demos
- A separate visual language outside Konstrukt
- Expert cards for authors still queued in [`PRINCIPLES_QUEUE.md`](./PRINCIPLES_QUEUE.md) (Felton+)
- Using “hero” in product UI copy for people (collides with UI hero pattern); use **Experts**

---

## 2. Product framing

| | |
|--|--|
| **Name** | Dataviz Kit |
| **Suite** | The Hooman Loop tools |
| **Why Konstrukt** | Dataviz Kit is a tool in The Hooman Loop; it should look and feel native to the suite |
| **Underlying library** | UX Spec Skills Library (`ux-spec-skills/`) |
| **Audience** | Learners exploring dataviz experts; operators and Cursor users who run Spec Skills |
| **Pillars** | **Experts** (browse / learn) · **Skills** (discover / run) |

**Experts (MVP):** All 7 already-shipped authors in [`PRINCIPLES_QUEUE.md`](./PRINCIPLES_QUEUE.md) appear in a **flat** Overview Experts gallery and Experts index (no Core / Practice sectioning in the UI). Principle checklists remain a module on the expert profile (and Related on skills), not the only entry point. Core / Practice tiers stay in the queue doc for maintainers; optional quiet micro-label on the expert profile only.

**Coming soon:** Felton, Cairo, Duarte, Kirk first; Bertin, Cleveland, Lupi, Stefaner, Bremer, Rosling later. Do not invent expert or principle cards until the matching `reference/` docs ship.

---

## 3. Information architecture

```
Overview
├── Two doors (Browse experts · Browse skills)
├── Experts gallery (×7 shipped, flat) ──► Expert profile
│         ├── See it: principle demo → examples/experts/<slug>/demo.html
│         ├── Bio / context
│         ├── Known works
│         ├── Where to learn more
│         ├── Principles for specs → reference/
│         └── Related skills
├── How to use (skills workflow)
├── Critique
├── Dataviz rigor
├── Consulting storytelling
├── Executive dashboards
├── Global
├── Router
└── Router CTA
        ▼
Skill profile (×16)
├── Purpose / When to use
├── Inputs / Prompt / Output
├── Anti-patterns / Example
└── Related (template, sample, HTML demo, expert / principles)
```

### Pages

| Page | Role |
|------|------|
| **Overview** | Dual entry: Experts gallery (all 7) + Skills catalog (all 16); generic suite brand; Router CTA |
| **Experts index** | Full flat gallery; same 7 as overview gallery |
| **Expert profile** | Who they are, known works, further reading—distinct from the principle checklist |
| **Skill profile** | One page per skill; structured modules matching `.skill.md` sections |

Category-only index pages are optional later. For v1, category sections on the overview are enough. Nav label for people is **Experts** (not “Heroes”).

---

## 4. Skill inventory (catalog)

Source of truth: [`SKILLS_INDEX.md`](../SKILLS_INDEX.md).

### Global

| Skill | Path |
|-------|------|
| Global standards | `skills/00-global-standards.skill.md` |

### Executive dashboards

| Skill | Path |
|-------|------|
| Daily exec pulse | `skills/10-exec-dashboards/daily-exec-pulse.skill.md` |
| Weekly performance review | `skills/10-exec-dashboards/weekly-performance-review.skill.md` |
| Monthly strategy & risk | `skills/10-exec-dashboards/monthly-strategy-risk.skill.md` |
| Entity drilldown | `skills/10-exec-dashboards/entity-drilldown.skill.md` |
| Alerts | `skills/10-exec-dashboards/alerts.skill.md` |
| Metric provenance | `skills/10-exec-dashboards/metric-provenance.skill.md` |

### Consulting storytelling

| Skill | Path |
|-------|------|
| Executive slide outline | `skills/20-consulting-storytelling/executive-slide-outline.skill.md` |
| Dashboard one-pager | `skills/20-consulting-storytelling/dashboard-onepager.skill.md` |
| Chart annotation plan | `skills/20-consulting-storytelling/chart-annotation-plan.skill.md` |

### Dataviz rigor

| Skill | Path |
|-------|------|
| Ben Fry pipeline | `skills/30-dataviz-rigor/ben-fry-pipeline.skill.md` |
| Tufte cleanup | `skills/30-dataviz-rigor/tufte-cleanup.skill.md` |
| Munzner why–what–how | `skills/30-dataviz-rigor/munzner-why-what-how.skill.md` |
| Encoding accuracy | `skills/30-dataviz-rigor/encoding-accuracy.skill.md` |

### Critique

| Skill | Path |
|-------|------|
| Dataviz critique | `skills/40-critique/dataviz-critique.skill.md` |

### Router

| Skill | Path |
|-------|------|
| Router | `skills/99-router.skill.md` |

---

## 5. Content model (skill profile)

Map each profile 1:1 from `.skill.md` plus catalog metadata.

| Field | Source |
|-------|--------|
| Name, category, one-line description | `SKILLS_INDEX.md` |
| Purpose | skill § Purpose |
| When to use | skill § When to Use |
| Inputs | skill § Inputs |
| Prompt | skill § Prompt |
| Output format | skill § Output Format |
| Anti-patterns | skill § Anti-patterns |
| Example invocation | skill § Example invocation (when present) |
| Path (mono) | skill file path |
| Related template | `templates/` when mapped |
| Related sample | `examples/generic/sample-*.md` when mapped |
| Related HTML demo | `examples/html/*.html` when mapped |
| Related principles | `reference/principles-*.md` when relevant |

### Related-asset map (v1)

| Skill | Sample | Template | HTML demo |
|-------|--------|----------|-----------|
| Daily exec pulse | `sample-daily-dashboard.md` | `daily-dashboard.spec.template.md` | `daily-exec-pulse.html` |
| Weekly performance review | `sample-weekly-dashboard.md` | `weekly-dashboard.spec.template.md` | `weekly-performance-review.html` |
| Monthly strategy & risk | `sample-monthly-dashboard.md` | `monthly-dashboard.spec.template.md` | — |
| Entity drilldown | `sample-entity-drilldown.md` | `entity-drilldown.spec.template.md` | (panel in `rigor-and-consulting-skills.html`) |
| Alerts | — | `alerting-system.spec.template.md` | `alerts-in-dashboard.html` |
| Metric provenance | `sample-metric-provenance.md` | `metric-provenance.spec.template.md` | (panel in `rigor-and-consulting-skills.html`) |
| Executive slide outline | `sample-exec-slide-outline.md` | `exec-slide-outline.template.md` | — |
| Dashboard one-pager | `sample-dashboard-onepager.md` | `consulting-onepager.template.md` | — |
| Chart annotation plan | `sample-chart-annotation-plan.md` | — | (panel in `rigor-and-consulting-skills.html`) |
| Ben Fry pipeline | `sample-ben-fry-pipeline.md` | — | (panel in `rigor-and-consulting-skills.html`) |
| Munzner why–what–how | `sample-munzner-why-what-how.md` | — | (panel in `rigor-and-consulting-skills.html`) |
| Encoding accuracy | `sample-encoding-accuracy.md` | — | (panel in `rigor-and-consulting-skills.html`) |
| Dataviz critique | `sample-dataviz-critique.md` | — | (reviews `weekly-performance-review.html`) |
| Tufte cleanup | — | — | — |
| Global standards | — | — | — |
| Router | — | — | — |

Missing assets show as muted meta (“No sample yet”), not fake links.

---

## 5b. Content model (expert profile)

Source of truth: short markdown under `reference/experts/` (to be authored). Principle checklists stay in `reference/principles-*.md`—do not merge biography into the checklist.

| Field | Notes |
|-------|--------|
| Name | Full name as commonly cited |
| Tier | Core or Practice in PRINCIPLES_QUEUE only; optional quiet profile micro-label — do not section galleries by tier |
| Why in this kit | One line (same spirit as skill index descriptions) |
| Bio / context | 2–4 short paragraphs max; attribution-level, not a CV |
| Known works | Books, papers, notable projects (title + year; optional publisher) |
| Where to learn more | 2–5 curated links: official site, primary work landing, key talk/essay when stable |
| Principles for specs | Link to matching `reference/principles-*.md` |
| Related skills | Skills that cite or pair with this expert |

### MVP expert inventory (shipped only)

| Expert | Tier | Principles doc | Expert content (planned) |
|--------|------|----------------|--------------------------|
| Edward Tufte | Core | `principles-tufte.md` | `experts/edward-tufte.md` |
| Ben Shneiderman | Core | `principles-shneiderman.md` | `experts/ben-shneiderman.md` |
| Ben Fry | Core | `principles-ben-fry.md` | `experts/ben-fry.md` |
| Stephen Few | Practice | `principles-stephen-few.md` | `experts/stephen-few.md` |
| Tamara Munzner | Practice | `principles-munzner.md` | `experts/tamara-munzner.md` |
| Barbara Minto | Practice | `principles-minto.md` | `experts/barbara-minto.md` |
| Cole Nussbaumer Knaflic | Practice | `principles-storytelling-with-data.md` | `experts/cole-nussbaumer-knaflic.md` |

Queued authors (Felton, Cairo, …) get expert profiles only when their principle doc ships—same gate as principle cards. Shipped experts are browse-first on Overview (all 7, flat gallery).

---

## 6. Page compositions

### 6.1 Overview

**Shell**

- `app-shell` with sticky left sidebar (`shell.css`)
- Brand: **Dataviz Kit** with subtitle / micro-label **by The Hooman Loop** (Konstrukt `nav-brand` / `nav-brand-subtitle` pattern)
- Nav groups: Overview · Experts · Critique · Dataviz rigor · Consulting · Executive · Global · Router  
  (Critique before rigor so "review my viz" reads as a first-class door, not a rigor deep-dive. Executive later so the shell does not read as an alerts/exec-only product. Category items jump to overview sections.)

**Main**

1. `.page-header` — H1 “Dataviz Kit”; tagline e.g. *Learn from dataviz experts. Run Spec Skills with clarity.*; `.meta-row` (version from `CHANGELOG.md`, **7 experts · 16 skills**)
2. **Two doors** — side-by-side modules: *Browse experts* → in-page gallery / Experts index; *Browse skills* → skills workflow / catalog
3. **Experts gallery** — all **7** shipped experts as one flat card grid (curated order; no Core / Practice rows or card tier labels). Each card opens the **expert profile**. Queued authors stay out — see [`PRINCIPLES_QUEUE.md`](./PRINCIPLES_QUEUE.md)
4. **How to use** (skills pillar) — 3–4 steps: Choose skill → Gather inputs → Run prompt → Optional template, rigor, or critique pass
5. **Skills catalog** — `.section-label` + `.card-grid` of `.index-card`, UI order: **Critique → Dataviz rigor → Consulting storytelling → Executive dashboards → Global → Router**
   - `card-label` = category
   - `h3` = skill name
   - `card-detail` = one-line description
   - `card-meta` = badge if sample/HTML exists
6. Router CTA — `.module.accent-left`: “Not sure which skill?” → Router profile

### 6.2 Skill profile

**Chrome:** same shell; active nav item uses `aria-current="page"` + left accent border.

**Main**

1. Breadcrumb: Overview / Category / Skill
2. `.page-header` — skill name; category micro-label; tagline = index description; meta = path (`.mono`), related badge(s)
3. Modules in order:
   - Purpose (`.module.accent-left`)
   - When to use
   - Inputs (list or `.data-table`)
   - Prompt (secondary; can be collapsed or in a quieter module)
   - Output format
   - Anti-patterns
   - Example invocation
   - Related — links to template / sample / HTML / expert profiles (and principle checklists)

### 6.3 Expert profile

**Chrome:** same shell; Experts nav active (or Principles / Experts group).

**Main**

1. Breadcrumb: Overview / Experts / {Name}
2. `.page-header` — expert name; tagline = why-in-this-kit; meta = link to principles checklist; optional quiet tier micro-label (Core / Practice) for maintainers—not used to section galleries
3. Modules in order:
   - See it (`.module.accent-left`) — principle label + one-sentence "what to notice"; embeds the expert's `examples/experts/<slug>/demo.html` in a titled iframe with an "Open full demo" link. Present only when a demo exists.
   - Bio / context (`.module.accent-left`)
   - Known works (list or `.data-table`: title, year, type)
   - Where to learn more (external links; prefer official / primary sources)
   - Principles for specs — summary pointer + link into `reference/principles-*.md`
   - Related skills — cards or quiet links into skill profiles

Keep pages short. No portrait hero requirement; Konstrukt flat modules are enough. Demos are original educational figures (not the dashboard shell, not copyrighted reproductions); the iframe uses the Tailwind CDN and does not follow the app dark-mode toggle by design.

---

## 7. Konstrukt mapping

Design system source: `http://straatmini.tail56d80d.ts.net:4331/`  
Assets: `css/tokens.css`, `css/base.css`, `css/shell.css`, `js/theme.js`

### Tokens / aesthetic

| Token / rule | Value / note |
|--------------|--------------|
| Display font | Space Grotesk (`--font-display`) |
| Body font | Inter (`--font-sans`) |
| Mono | SF Mono / Fira Code (`--font-mono`) — paths, versions |
| Background | `--bg` `#F5F5F0` |
| Surface | `--surface` / `--card` `#FFFFFF` |
| Ink / text | `--ink` / `--text` `#0A0A0A` |
| Muted | `--text-muted` `#6A6A6A` |
| Accent | `--accent` `#067F8A` (The Hooman Loop teal) |
| Radius | `--radius: 0` |
| Shadow | `--shadow: none` |
| Mode / palette | `data-mode`, `data-palette` via `theme.js` |

### Components → UI need

| Need | Konstrukt class / pattern |
|------|---------------------------|
| App chrome | `app-shell`, `#site-nav.site-nav`, mobile drawer |
| Page title | `.page-header`, `.tagline`, `.meta-row` |
| Section breaks | `.section-label`, `.micro-label` |
| Skill cards | `.index-card`, `.card-grid`, `.card-label`, `.card-detail`, `.card-meta` |
| Content blocks | `.module`, `.module.accent-left`, `.module-header` |
| Tables | `.data-table` |
| Status | `.badge` (`badge-draft`, `badge-review`, `badge-complete`, …) |
| Category tags | `.tag` (or category-specific labels) |
| Principles | `.principle-grid`, `.principle-card` |
| Quiet actions | `.portal-quiet-btn` where needed |

### Explicit avoid

- Do not restyle the docs shell with Tailwind / shadcn from `examples/html/`
- Do not use rounded cards, multi-layer shadows, or purple gradient “AI default” looks
- Keep elevation flat; hierarchy from ink borders and accent left edges

---

## 8. Walkthrough script (demo)

Use when presenting Dataviz Kit:

1. **Overview** — “Dataviz Kit is a tool in The Hooman Loop. Two pillars: learn from dataviz experts, run Spec Skills.”
2. **Experts gallery** — Point at the flat gallery of 7; open Tufte (or Fry): known works → further reading → principles checklist.
3. **Two doors** — Show Browse experts vs Browse skills.
4. **Skills catalog** — Point at Critique first (the "review my viz" door), then Dataviz rigor (not Executive first); open Dataviz critique or Encoding accuracy.
5. **Related** — Open sample markdown and/or HTML demo link.
6. **Router** — “Unclear ask → start here.”

---

## 9. Implementation notes (post-brief)

Suggested location: `ux-spec-skills/docs/site/` (static HTML).

1. Vendor or link Konstrukt `tokens.css`, `base.css`, `shell.css`, `theme.js`
2. Build overview (two doors + 7-expert gallery + reordered skill grids) + 16 skill profiles
3. Author `reference/experts/*.md` for the 7 shipped experts; build expert profiles + Experts index
4. Wire Related links from the asset map; expert gallery cards → expert profiles
5. Keep dashboard HTML demos as external links under `examples/html/`

The brief does not implement the site.

---

## 10. Success criteria

- Someone new to The Hooman Loop can tell Dataviz Kit is a suite tool within 5 seconds (brand + subtitle + Konstrukt chrome)
- Within 5 seconds they can also tell it is an **experts + skills** kit (not exec-dashboard-only)
- Every skill in `SKILLS_INDEX.md` has a reachable profile
- Every shipped dataviz expert (7/7) has a reachable profile and appears on the Overview Experts gallery
- Overview → skill profile → sample/demo path works for at least Daily exec pulse and Encoding accuracy
- Overview expert card → expert profile path works across the flat gallery (e.g. Tufte and Knaflic)
- Visual language matches Konstrukt (fonts, ink rules, zero radius, teal accent) without borrowing demo-dashboard styling
