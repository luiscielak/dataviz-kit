# Dataviz Kit — PRD

**Product:** Dataviz Kit  
**Suite:** The Hooman Loop tools  
**Design system:** [Konstrukt](http://straatmini.tail56d80d.ts.net:4331/)  
**Status:** Ready for implementation  
**Related:** [`DESIGN_BRIEF.md`](./DESIGN_BRIEF.md), [`PRINCIPLES_QUEUE.md`](./PRINCIPLES_QUEUE.md)  
**Content source:** Spec Skills Library (`skills/`, `SKILLS_INDEX.md`)

---

## 1. Overview

| | |
|--|--|
| **product_name** | Dataviz Kit |
| **elevator_pitch** | A Konstrukt-native documentation frontend with two equal pillars—browse dataviz experts (who they are, known works, where to learn more) and discover Spec Skills (how to run them)—so learners and operators can explore theory and practice without leaving The Hooman Loop suite look and feel. |
| **problem_statement** | The Spec Skills Library lives as markdown that is hard to browse, and principle checklists name experts without introducing who they are. New users cannot quickly tell Dataviz Kit is more than an exec-dashboard toolkit, which skill fits their ask, or where to learn about the people behind the principles. Existing Tailwind HTML dashboards are demos, not a discovery shell. |

---

## 2. Goals and Non-Goals

### Goals

- Ship a documentation-style site that makes Dataviz Kit feel like a native tool in The Hooman Loop (brand, subtitle, Konstrukt chrome).
- Equal pillars: **Experts** (browse / learn) and **Skills** (discover / run)—Overview must not read as exec-dashboard-only.
- Surface all **7 shipped** dataviz experts on a **flat** Overview gallery (no Core / Practice UI sections), each linking to an expert profile (bio, works, further reading) separate from the principle checklist.
- Enable skill discovery: overview → category scan → skill profile → related sample / template / HTML demo / experts / principles.
- Keep `.skill.md` files as the source of truth for prompts and generation; UI is browse-and-explain only.

### Non-goals (v1)

- CMS, full-text search, auth, or live prompt execution in the browser
- Editing or regenerating `.skill.md` from the UI
- Redesigning `examples/html/` dashboard demos
- A visual language outside Konstrukt
- Category-only index pages (sections on overview are enough)
- Expert or principle cards for authors still in [`PRINCIPLES_QUEUE.md`](./PRINCIPLES_QUEUE.md) (Felton+)
- Full biographies, academic CVs, or licensed reproductions of copyrighted figures
- Using “hero” / “heroes” in product UI for people profiles (use **Experts**)

---

## 3. Target Users and Personas

| Persona | Who | Needs |
|---------|-----|--------|
| **Learner** | Designer/engineer new to viz theory | Expert gallery + profiles: who, known works, further reading, principles for specs |
| **Operator** | Internal or client-facing user of The Hooman Loop tooling | Suite-native shell; pick the right skill fast; jump to samples/demos |
| **Cursor practitioner** | Engineer / designer running skills in Cursor | Clear inputs → prompt → output path; mono path to skill file |
| **Presenter** | Someone demoing Dataviz Kit | Walkthrough: overview → experts → skill → related → router |

**Primary audience:** Learners exploring dataviz experts, plus operators and Cursor users who run Spec Skills (co-primary).

---

## 4. User Stories (INVEST) and Primary Flows

### User stories

| ID | Story | Priority |
|----|--------|----------|
| **US-001** | As an operator new to the suite, I want to see Dataviz Kit branded as a tool in The Hooman Loop on first paint, so I know where I am. | P0 |
| **US-002** | As a Cursor user, I want a short workflow (choose → inputs → prompt → optional template/rigor), so I know how to run a skill. | P0 |
| **US-003** | As an operator, I want skills grouped by category on the overview, so I can scan Rigor vs Consulting vs Executive quickly. | P0 |
| **US-004** | As a practitioner, I want a profile page for every skill in `SKILLS_INDEX.md`, so I can read purpose, inputs, prompt, and output format. | P0 |
| **US-005** | As a practitioner, I want Related links (template, sample, HTML demo, principles) or honest “not yet” states, so I never hit fake links. | P0 |
| **US-006** | As an unsure user, I want a clear Router CTA, so I know where to start when the ask is ambiguous. | P0 |
| **US-007** | As a learner or presenter, I want all shipped experts on one flat overview gallery with links to expert profiles (and principle checklists), so I can browse people without maintainer tier sections. | P0 |
| **US-008** | As a mobile user, I want the Konstrukt shell (sticky nav / drawer) to work, so I can browse experts and skills on a small screen. | P1 |
| **US-009** | As a learner, I want a profile for each shipped dataviz expert (who they are, known works, where to learn more), so I can go deeper without leaving Dataviz Kit. | P0 |
| **US-010** | As a practitioner, I want expert profiles linked from the Overview gallery and from Related on skills, so theory and practice stay connected. | P1 |
| **US-011** | As a new visitor, I want Overview entry points for both experts and skills, so I can tell this is not an exec-dashboard-only kit. | P0 |

### Primary flows

1. **Browse experts** — Land on Overview → Experts gallery (or Experts nav) → expert profile → known works / further reading → principles checklist → related skills.
2. **Discover & choose (skills)** — Overview → two doors / skills catalog → open skill profile.
3. **Run path** — On skill profile: Purpose → When to use → Inputs → Prompt → Output → (optional) Example → Related assets.
4. **Demo path** — Overview → Encoding accuracy or Daily exec pulse → Related sample and/or HTML demo.
5. **Ambiguous ask** — Overview Router CTA → Router profile.
6. **Principles close** — Expert profile → `reference/` checklist (distinct surface from bio).

---

## 5. Scope

### MVP

- Static site under `ux-spec-skills/docs/site/` (HTML + Konstrukt CSS/JS).
- Overview page: app shell, brand + The Hooman Loop subtitle, generic tagline, meta (version · 7 experts · 16 skills), two doors, **Experts gallery (all 7)**, skills workflow, category card grids (all 16 skills in UI order: Critique → Dataviz rigor → Consulting → Executive → Global → Router), Router CTA.
- Skill profile ×16: modules mapped 1:1 from `.skill.md` + catalog metadata; breadcrumb; related asset map with muted empty states; Related principles link to expert profiles where mapped.
- **Expert profile ×7** + **Experts index**: bio/context, known works, where to learn more, link to principle checklist, related skills.
- Nav: Overview · Experts · Critique · Dataviz rigor · Consulting · Executive · Global · Router.
- Content source for experts: short markdown under `reference/experts/` (or equivalent), separate from principle checklists in `reference/principles-*.md`.
- Version meta from `CHANGELOG.md`; expert + skill counts on Overview.
- External links to `examples/html/`, `templates/`, `examples/generic/`, `reference/`, and curated further-reading URLs (no restyling demos).

### MVP expert inventory

| Expert | Tier | Principles doc |
|--------|------|----------------|
| Edward Tufte | Core | `reference/principles-tufte.md` |
| Ben Shneiderman | Core | `reference/principles-shneiderman.md` |
| Ben Fry | Core | `reference/principles-ben-fry.md` |
| Stephen Few | Practice | `reference/principles-stephen-few.md` |
| Tamara Munzner | Practice | `reference/principles-munzner.md` |
| Barbara Minto | Practice | `reference/principles-minto.md` |
| Cole Nussbaumer Knaflic | Practice | `reference/principles-storytelling-with-data.md` |

### Post-MVP

- Category-only index pages
- Client-side search / filter
- Expert + principle cards when queued authors ship (Felton, Cairo, Duarte, Kirk, …)
- Build script to regenerate skill/expert profiles from markdown (if hand-maintained HTML becomes painful)

---

## 6. Functional Requirements

| ID | Requirement | User story | Metric |
|----|-------------|------------|--------|
| **FR-001** | Overview renders Dataviz Kit brand with **by The Hooman Loop** subtitle in Konstrukt `nav-brand` / `nav-brand-subtitle` pattern inside `app-shell`. | US-001 | M-001 |
| **FR-002** | Overview shows a 3–4 step skills workflow module: Choose skill → Gather inputs → Run prompt → Optional template, rigor, or critique pass. | US-002 | M-002 |
| **FR-003** | Overview lists all skills from `SKILLS_INDEX.md` in category sections as `.index-card` grids, UI order: Critique → Dataviz rigor → Consulting storytelling → Executive dashboards → Global → Router. | US-003 | M-003 |
| **FR-004** | Each skill has a reachable profile URL; profile modules include Purpose, When to use, Inputs, Prompt, Output format, Anti-patterns, Example (when present), Related. | US-004 | M-003 |
| **FR-005** | Related section uses the v1 asset map; missing sample/template/HTML shows muted “No … yet”, never a dead fake link. | US-005 | M-004 |
| **FR-006** | Overview includes Router CTA (`.module.accent-left`) linking to Router profile. | US-006 | M-002 |
| **FR-007** | Overview Experts gallery shows all 7 shipped experts in one flat grid linking to expert profiles; no Core / Practice sectioning; queued authors excluded. | US-007, US-010, US-011 | M-005 |
| **FR-008** | Skill cards and profile headers surface badges/meta when sample and/or HTML demo exists. | US-005 | M-004 |
| **FR-009** | Shell nav marks active page with `aria-current="page"` and left accent; mobile drawer from Konstrukt `shell.css`; nav order Overview · Experts · Critique · Dataviz rigor · Consulting · Executive · Global · Router. | US-008 | M-006 |
| **FR-010** | Page header meta shows version (from `CHANGELOG.md`), expert count (7), and skill count on Overview; tagline is generic (experts + skills), not exec-dashboard-only. | US-001, US-011 | M-001 |
| **FR-011** | Each shipped expert has a reachable profile with: name, why-in-this-kit one-liner, short bio/context, known works, where to learn more (curated external links), link to principle checklist, related skills; optional quiet tier micro-label (not used for gallery grouping). | US-009 | M-007 |
| **FR-012** | Experts nav and Experts index list all shipped expert profiles in one flat gallery (same 7 as Overview). | US-009, US-010 | M-007 |
| **FR-013** | Skill Related principles and expert “Principles for specs” deep-link to the matching `reference/principles-*.md` (or in-site checklist view); expert profile and checklist are distinct surfaces. | US-010 | M-005 |
| **FR-014** | Overview includes two-door entry modules: Browse experts and Browse skills. | US-011 | M-001 |
| **FR-015** | Each shipped expert profile includes a "See it" module that embeds one original educational demo (`examples/experts/<slug>/demo.html`) in a titled iframe with an "Open full demo" link; Overview and Experts gallery cards surface a `demo` cue when a demo exists. Demos are original figures on placeholder data, never copyrighted reproductions. | US-009, US-010 | M-007 |

Every FR maps to ≥1 user story and ≥1 metric (see §9).

---

## 7. Non-Functional Requirements

| ID | Requirement |
|----|-------------|
| **NFR-001** | Visual language matches Konstrukt: Space Grotesk / Inter / mono, `--bg` `#F5F5F0`, flat elevation, `--radius: 0`, accent `#067F8A`. No Tailwind/shadcn restyle of the docs shell; no purple-gradient “AI default” look. |
| **NFR-002** | Skill markdown remains source of truth; UI does not mutate `skills/`. |
| **NFR-003** | Site is static (no auth, CMS, or runtime prompt execution in v1). |
| **NFR-004** | Works on desktop and mobile via Konstrukt shell patterns. |
| **NFR-005** | Content fidelity: skill profile fields map from `SKILLS_INDEX.md` + `.skill.md`; expert fields map from `reference/experts/` (or equivalent) as specified in the Design Brief content model. |
| **NFR-006** | Accessibility baseline: keyboard-reachable nav and cards; meaningful headings; `aria-current` on active nav. |
| **NFR-007** | Expert pages are short and factual (attribution + pointers), not encyclopedias; prefer primary sources and stable URLs; no copyrighted figure dumps. |

---

## 8. Acceptance Criteria

### Suite recognition (US-001, US-011, FR-001, FR-010, FR-014)

```gherkin
Feature: Suite-native first paint
  Scenario: New visitor lands on Overview
    Given I open the Dataviz Kit overview
    Then I see brand "Dataviz Kit" and subtitle "by The Hooman Loop"
    And the chrome uses Konstrukt app-shell patterns
    And meta shows version, expert count, and skill count
    And I see entry points for experts and for skills
    And within 5 seconds I can tell this is a tool in The Hooman Loop suite
    And within 5 seconds I can tell it is an experts-and-skills kit, not exec-dashboard-only
```

### Full catalog (US-003, US-004, FR-003, FR-004)

```gherkin
Feature: Complete skill catalog
  Scenario: Every indexed skill is reachable
    Given SKILLS_INDEX.md lists 16 skills
    When I use the overview category grids
    Then each skill card links to a profile
    And category UI order starts with Critique, then Dataviz rigor, before Executive dashboards
    And each profile exposes Purpose, When to use, Inputs, Prompt, Output format, and Anti-patterns
```

### Demo path (US-005, FR-005, FR-008)

```gherkin
Feature: Overview to sample or demo
  Scenario Outline: Critical skills have a working related path
    Given I open the "<skill>" profile from the overview
    When I use the Related module
    Then I can open a sample and/or HTML demo without a broken link
    And skills without assets show muted empty states

    Examples:
      | skill              |
      | Daily exec pulse   |
      | Encoding accuracy  |
```

### Visual language (NFR-001)

```gherkin
Feature: Konstrukt fidelity
  Scenario: Docs shell does not borrow demo styling
    Given I view Overview and any skill profile
    Then fonts, ink borders, zero radius, and teal accent match Konstrukt
    And examples/html dashboards are linked externally, not embedded as the shell
```

### Experts gallery (US-007, FR-007)

```gherkin
Feature: Experts gallery
  Scenario: All shipped experts appear on Overview
    Given PRINCIPLES_QUEUE.md lists seven Already shipped authors
    When I view the overview Experts gallery
    Then I see all seven experts in one flat gallery linking to expert profiles
    And I do not see Core / Practice section headers
    And I do not see invented cards for queued authors
```

### Expert profiles (US-009, FR-011, FR-012)

```gherkin
Feature: Dataviz expert profiles
  Scenario: Every shipped expert is profiled
    Given seven experts are listed as Already shipped in PRINCIPLES_QUEUE.md
    When I open Experts from the nav
    Then each expert has a profile with bio/context, known works, and where to learn more
    And each profile links to its principle checklist and related skills
    And queued authors do not appear

  Scenario: Gallery opens an expert, not only a checklist
    Given I am on Overview
    When I activate the Tufte expert card
    Then I land on the Edward Tufte expert profile
```

---

## 9. Success Metrics

### North star

| ID | Metric | Target | Timeframe | Measurement method |
|----|--------|--------|-----------|-------------------|
| **M-001** | Suite + pillar recognition on first paint | ≥90% of new reviewers answer “The Hooman Loop tool” and recognize experts + skills (not exec-only) from Overview alone | Within 1 week of MVP review | 5-second brand test in walkthrough / stakeholder review (Design Brief §10) |

### Leading indicators

| ID | Metric | Target | Timeframe | Measurement method |
|----|--------|--------|-----------|-------------------|
| **M-002** | Time-to-correct-skill (guided) | ≤2 minutes from Overview to opening the intended profile (or Router when unsure) | MVP acceptance | Timed walkthrough script (§ Design Brief §8) |
| **M-003** | Catalog coverage | 100% of `SKILLS_INDEX.md` skills have a reachable profile | MVP ship | Checklist vs `SKILLS_INDEX.md` (15/15) |
| **M-004** | Critical path integrity | Daily exec pulse and Encoding accuracy: Overview → profile → sample and/or HTML demo works; no fake Related links sitewide | MVP ship | Manual QA of asset map + empty-state audit |
| **M-005** | Experts gallery fidelity | Overview gallery = all 7 shipped; cards open expert profiles; zero queued authors | MVP ship | Diff against `reference/` + `PRINCIPLES_QUEUE.md` + link audit |
| **M-006** | Mobile browseability | Primary flows (incl. expert profile) completable on a phone-width viewport via shell drawer | MVP ship | Manual QA at ~375px width |
| **M-007** | Expert catalog coverage | 100% of shipped experts (7/7) have profiles with works + further reading; further-reading links resolve | MVP ship | Checklist vs PRINCIPLES_QUEUE “Already shipped” + spot-check external URLs |

---

## 10. Dependencies and Constraints

### Dependencies

- Konstrukt assets: `css/tokens.css`, `css/base.css`, `css/shell.css`, `js/theme.js` (vendor or link from design system host).
- Content: `SKILLS_INDEX.md`, all `.skill.md` files, `CHANGELOG.md`, related map in Design Brief §5.
- Expert content: new `reference/experts/*.md` (or equivalent) for the 7 shipped authors; principle checklists remain in `reference/principles-*.md`.
- Optional deep links: `templates/`, `examples/generic/`, `examples/html/`, `reference/`, curated further-reading URLs.

### Constraints

- Implementation after brief approval; site suggested at `ux-spec-skills/docs/site/`.
- Flat, ink-border hierarchy; no cards-as-decoration beyond Konstrukt `.index-card` / `.module` / `.principle-card` patterns.
- Do not invent expert or principle UI ahead of shipped `reference/` docs.
- Expert copy stays attribution-level; no full-text book excerpts.

### Stakeholders

| Role | Interest |
|------|----------|
| Product / The Hooman Loop | Suite consistency, demo walkthrough |
| Spec Skills maintainers | Content fidelity to markdown |
| Learners / Operators / Cursor users | Expert browse + skill discovery |

### Timeline

| Milestone | Outcome |
|-----------|---------|
| **M0 — Approved brief** | DESIGN_BRIEF + this PRD agreed |
| **M1 — Shell + Overview** | Konstrukt shell, two doors, 7-expert gallery, reordered skill grids, Router CTA |
| **M2 — Skill profiles** | All 16 skill profiles + Related map |
| **M2b — Expert profiles** | All 7 shipped expert profiles + Experts index/nav |
| **M3 — Acceptance** | Metrics M-001–M-007 pass; walkthrough script runnable |

---

## 11. Assumptions and Open Questions

### Assumptions

- Static HTML is sufficient for v1; no build pipeline required unless content drift becomes painful.
- Konstrukt host/assets remain reachable or will be vendored into the repo.
- Skill count is 16 for MVP; new skills get a profile when added to the index.
- Expert count for MVP is the 7 shipped authors; all 7 appear on Overview in one flat gallery.
- Expert markdown will be authored as part of implementation (does not exist yet under `reference/experts/`).

### Open questions

1. Vendor Konstrukt CSS/JS into `docs/site/` vs link the design-system host?
2. Hand-authored HTML vs small generator from `.skill.md` / `reference/experts/` for profiles?
3. Hosting path for the docs site within the wider tooling portal for The Hooman Loop?
4. Preferred further-reading link policy (official site + 1–2 primary works only vs richer bibliography)?

---

## 12. Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Content drift between UI and `.skill.md` | Wrong prompts/inputs shown | Treat markdown as source of truth; regenerate or re-copy on skill changes; prefer generator if churn is high |
| Konstrukt host unavailable | Broken styles | Vendor tokens/base/shell/theme into repo for ship |
| Fake or stale Related / further-reading links | Trust loss | Enforce asset map + muted empty states; QA M-004 / M-007; prefer stable primary URLs |
| Scope creep (search, CMS, live run, long bios, Felton+ early) | Delayed MVP | Hold non-goals; keep expert pages short; gate queue on `reference/` ship |
| Expert vs checklist confusion | Users miss the spec rules | Distinct modules: profile (who/works) vs principles checklist (rules for specs) |
| Exec-dashboard-first framing | Kit feels too narrow | Two doors + Experts gallery first; skill category UI order starts with Critique then Dataviz rigor |

---

## 13. Release Plan and Milestones

| Phase | Deliverable | Exit criteria |
|-------|-------------|----------------|
| **1. Foundation** | `docs/site/` scaffold; vendored/linked Konstrukt; Overview shell + brand | FR-001, FR-010, NFR-001 |
| **2. Overview content** | Two doors, Experts gallery (7), workflow, category grids (16), Router CTA | FR-002, FR-003, FR-006, FR-007, FR-014 |
| **3. Skill profiles** | 16 profiles + breadcrumbs + Related map | FR-004, FR-005, FR-008, M-003 |
| **4. Expert profiles** | `reference/experts/` content + 7 profiles + Experts index; wire from gallery + Related | FR-011, FR-012, FR-013, M-007 |
| **5. Polish & QA** | Active nav, mobile drawer, empty states, walkthrough | FR-009, M-001–M-007 |
| **6. Demo** | Run Design Brief walkthrough with stakeholders | Acceptance sign-off |

**Suggested build order:** (1) Konstrukt assets → (2) Overview (experts + skills pillars) → (3) 16 skill profiles + Related map → (4) author expert markdown + expert profiles → (5) keep HTML demos as external links.

---

## Traceability checklist

- [x] Every FR maps to ≥1 user story and ≥1 metric
- [x] Each metric has target, timeframe, measurement method
- [x] `PRD.md` under `artifact_root` (`ux-spec-skills/docs/`)
- [x] Aligned to DESIGN_BRIEF.md scope, IA, content model, and success criteria
