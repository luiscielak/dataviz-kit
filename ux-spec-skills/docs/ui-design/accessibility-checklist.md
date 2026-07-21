# Accessibility Checklist — Dataviz Kit (Hi-Fi)

**Target:** WCAG 2.1 AA  
**Product:** Documentation shell (Experts + Spec Skills)  
**Companion:** `theme.md`, `color-roles.md`, mid-fi `components.md`

Use at engineering handoff and before each release of the docs UI.

---

## Perceivable

- [ ] Body text `#0A0A0A` (or dark ink) on `--bg` / `--surface` meets ≥ 4.5:1
- [ ] Muted meta `#6A6A6A` on white meets ≥ 4.5:1 at `text-sm+` (bump size or darken if xs fails)
- [ ] Accent used as border/underline/left bar; text links verified for contrast
- [ ] Active nav does not rely on color alone (`aria-current` + accent bar)
- [ ] Badges are not the sole indicator (`sample` / `HTML` in accessible name or `aria-describedby`)
- [ ] Images/icons (theme toggle, hamburger) have accessible names; avoid icon-only CTAs in v1
- [ ] Skeleton/loading regions expose `aria-busy="true"`; brand/nav remain real content
- [ ] Error message uses `role="alert"` (or equivalent live announcement)

---

## Operable

- [ ] Skip link “Skip to main content” is first focusable; targets `#main`
- [ ] All interactive controls keyboard reachable (Tab / Shift+Tab)
- [ ] Buttons activate with Enter and Space; links with Enter
- [ ] Visible focus: 2px `--accent` outline, 2px offset; never `outline: none` without replacement
- [ ] Mobile drawer: Esc closes; focus trap while open; restore focus to hamburger on close
- [ ] No keyboard trap outside open drawer
- [ ] Card grids: whole card is one link; no nested interactive elements
- [ ] Prompt collapse: `aria-expanded` + `aria-controls` + panel `id`
- [ ] Touch targets ≥ 24×24px (prefer 32×32 for icon buttons)
- [ ] Motion ≤ 200ms for drawer; honor `prefers-reduced-motion`

---

## Understandable

- [ ] One H1 per page; module titles as H2+
- [ ] Breadcrumb: `<nav aria-label="Breadcrumb">`; current page `aria-current="page"` (text, not link)
- [ ] Primary nav: `<nav aria-label="Primary">`
- [ ] Page language set (`lang="en"`)
- [ ] Empty Related: muted sentence—“No sample yet”—not disabled fake buttons
- [ ] Never render `href="#"` for unmapped assets (FR-005)
- [ ] External / new-tab links indicate “opens in new window” in accessible name when used
- [ ] UI copy uses **Experts** (not “hero/heroes”) for people
- [ ] Error page offers recovery: Back to Overview + Experts / Router

---

## Robust

- [ ] Semantic landmarks: `header` / `nav` / `main` / optional `aside`
- [ ] Tables: `<th scope="col">`; caption visible or `sr-only`
- [ ] Form controls (if added later): visible label, error text associated via `aria-describedby`
- [ ] Dialog (if added later): focus trap, Esc, labelledby title—prefer full-page error in v1
- [ ] Theme toggle announces mode change (accessible name updates: “Switch to dark” / “Switch to light”)
- [ ] Valid HTML; no duplicate IDs
- [ ] Works without color vision reliance; works with 200% zoom without loss of essential content

---

## Screen-specific

| Screen | Extra checks |
|--------|----------------|
| Overview | Meta counts as text; expert + skill galleries keyboard-reachable; Router CTA after catalogs |
| Overview loading | Skeletons match geometry; live region optional if slow fetch |
| Experts index | Flat list of 7; no Core/Practice sectioning |
| Expert profile | Profile (who/works) ≠ principles checklist (separate headings/links) |
| Skill profile | Heading order Purpose→…→Related; Related only real hrefs |
| Skill empty Related | Muted slots; Expert + Principles may still link |
| Shell drawer | `aria-expanded` on menu; `aria-label="Main navigation"` on panel |
| Error | Nav remains usable; primary recovery CTA |

---

## Manual smoke (15 min)

1. Tab through Overview desktop: skip → nav → theme → doors → cards → Router CTA  
2. Open mobile drawer: Esc, backdrop, navigate, focus restore  
3. Open skill with empty Related: no dead links  
4. Force error route: recovery CTAs work  
5. Toggle theme: contrast still AA; focus ring visible on both modes  
6. VoiceOver / TalkBack: card name includes title + badge meaning  

---

## Out of scope v1 (still design for later)

Input, Select, Tabs, Dialog, Toast—if introduced, inherit ink border, `--radius: 0`, accent focus ring, and this checklist’s form/dialog rows.
