# Principles & pros — coming soon queue

Backlog of reference authors and frameworks to add to Dataviz Kit.  
Shipped docs live in [`reference/`](../reference/). Core (always on) stays Tufte · Shneiderman · Ben Fry until explicitly expanded.

**Status key:** `queued` → `in progress` → `shipped` (move to `reference/` + remove from this list).

**Browse vs checklist:** The docs site treats **Experts** as a first-class pillar. All **Already shipped** authors (7) appear in a **flat** Overview Experts gallery and Experts index (no Core / Practice UI sections). Tier in this doc is for maintainers; optional quiet micro-label on the expert profile only. Principle checklists stay in `reference/principles-*.md` and are linked from each expert profile; they are not the only entry point. UI label is **Experts** (not “heroes”—collides with UI hero).

---

## Already shipped

| Who | Doc | Tier |
|-----|-----|------|
| Edward Tufte | `reference/principles-tufte.md` | Core |
| Ben Shneiderman | `reference/principles-shneiderman.md` | Core |
| Ben Fry | `reference/principles-ben-fry.md` | Core |
| Stephen Few | `reference/principles-stephen-few.md` | Practice |
| Tamara Munzner | `reference/principles-munzner.md` | Practice |
| Barbara Minto | `reference/principles-minto.md` | Practice |
| Cole Nussbaumer Knaflic | `reference/principles-storytelling-with-data.md` | Practice |

These seven are browse-first on Overview (gallery cards → expert profiles). Expert markdown: `reference/experts/` (planned).

---

## Queue — Practice / craft (v1 priority)

Add as `reference/principles-*.md` **and** expert markdown under `reference/experts/`, then surface on the docs Overview Experts gallery. Do not invent gallery cards before those docs ship.

| # | Who | Working title | Why for this kit | Status |
|---|-----|---------------|------------------|--------|
| 1 | **Nicholas Felton** | Editorial information design / personal reports | Dense typographic layouts, small multiples as narrative, annual-report craft | queued |
| 2 | **Alberto Cairo** | Truthfulness + visual form | Bridges academic rigor and day-to-day practice | queued |
| 3 | **Nancy Duarte** | Executive narrative / slide structure | Pairs with Minto + exec slide outline skill | queued |
| 4 | **Andy Kirk** | Chart selection & workflow | Practical encoding choices; pairs with encoding-accuracy skill | queued |

**Suggested filenames when shipping**

- `reference/principles-nicholas-felton.md`
- `reference/principles-alberto-cairo.md`
- `reference/principles-nancy-duarte.md`
- `reference/principles-andy-kirk.md`

---

## Queue — Later (inspiration / foundations)

Do not block the site or Core strip. Add when Practice queue is done.

| # | Who | Notes | Status |
|---|-----|-------|--------|
| 5 | **Jacques Bertin** | Semiology of graphics — foundational, heavy | queued |
| 6 | **William Cleveland** | Perception / *The Elements of Graphing Data* — overlaps Few; add only if distinct checklist | queued |
| 7 | **Giorgia Lupi** | Humanistic / hand-drawn data — craft inspiration, less exec-dashboard | queued |
| 8 | **Moritz Stefaner** | Showcase / exploratory viz — inspiration more than rules | queued |
| 9 | **Nadieh Bremer** | Showcase / custom viz craft — inspiration more than rules | queued |
| 10 | **Hans Rosling** | Gapminder storytelling — talk & animation more than spec rules | queued |

---

## How to ship an item from this queue

1. Write `reference/principles-<slug>.md` (same shape as Tufte: source, core ideas, for specs, checklist).
2. Write short `reference/experts/<slug>.md` (bio/context, known works, where to learn more)—distinct from the checklist.
3. Surface on the docs Overview Experts gallery + Experts index; link gallery card → expert profile → principles checklist.
4. Optionally map Related experts/principles on relevant skills (e.g. Felton → consulting one-pager; Duarte → exec slide outline; Kirk → encoding accuracy).
5. Mark row `shipped` here (or delete) and note in `CHANGELOG.md`.

---

## Do not duplicate

| Tempting add | Already covered by |
|--------------|--------------------|
| Cleveland (dashboard defaults) | Stephen Few |
| Business declutter / annotation | Knaflic |
| Why–what–how encoding | Munzner (+ skill) |
| Pyramid / answer-first consulting | Minto |
