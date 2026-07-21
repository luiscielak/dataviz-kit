# Screen: Expert profile

**Lo-fi:** `expert-profile-desktop.txt`, `expert-profile-mobile.txt`  
**Example:** Edward Tufte (Core)  
**Flows:** Browse experts · Principles close · Related skills  
**FR:** 011, 013 · US-009, US-010

---

## Purpose

Who they are, known works, further reading—**distinct** from the principle checklist. No portrait/UI-hero requirement.

---

## Layout

| ID | Section | Pattern |
|----|---------|---------|
| S1 | Breadcrumb | Overview / Experts / {Name} |
| S2 | Page header | H1 name · why-in-kit · link to checklist · optional quiet tier micro-label (Core/Practice — not used for gallery grouping) |
| S2.5 | See it (principle demo) | `.module.accent-left` · principle label + one-sentence "what to notice" · titled iframe of `examples/experts/{slug}/demo.html` · "Open full demo" link. Present only when a demo exists. |
| S3 | Bio / context | `.module.accent-left` · 2–4 short paragraphs |
| S4 | Known works | `.data-table` (Title · Year · Type) or stacked list on mobile |
| S5 | Where to learn more | 2–5 curated external links |
| S6 | Principles for specs | Module: rules for specs + Button/link to checklist |
| S7 | Related skills | Cards or quiet links → skill profiles |

Nav: Experts active.

---

## Content examples

| Field | Short | Long |
|-------|-------|------|
| Why | Data-ink ratio | Data-ink ratio, chartjunk, and graphical integrity for kit specs |
| Bio | 2 short paras | Up to 4 paras; attribution-level, not a CV |
| Works | 2 rows | 5–7 titles with year + type |
| Further reading | Official site | Site + primary work + key talk URL |

---

## States

| State | Spec |
|-------|------|
| default | Full modules from `reference/experts/` + principles link |
| hover / focus | External links, principles CTA, related skill cards |
| loading | Skeleton under breadcrumb/header |
| error | Missing expert md → `error.md` |
| empty works | Prefer omit table vs fake rows (shouldn’t happen for shipped 7) |

---

## Interactions

| Control | Action |
|---------|--------|
| See it — Open full demo (S2.5) | → `examples/experts/{slug}/demo.html` (new tab); embedded above in a titled iframe |
| Principles checklist (header or S6) | → `reference/principles-*.md` [A7] |
| Further reading | External; prefer stable primary URLs [A8] |
| Related skill | → Skill profile |
| Breadcrumb Experts | → Experts index |

---

## Accessibility

- Profile (who/works) ≠ checklist (rules)—separate links and headings
- External links: indicate if new tab
- Table headers scoped; mobile list still uses clear title/year/type text
- See it: iframe carries a descriptive `title`; the "what to notice" caption is the text alternative; before/after regions are labeled `<figure>`/`<section>`; demo renders light-only (does not follow the app dark-mode toggle) by design
- No copyrighted figure dumps; demos are original educational figures on placeholder data
