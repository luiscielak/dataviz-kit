# Dataviz Kit — UI Prototype

Clickable Next.js prototype for the Dataviz Kit docs shell, built from mid-fi wireframes under `../wireframes/midfi/`.

**Artifact root:** `ux-spec-skills/docs/`  
**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui (Radix)  
**Visual target:** Konstrukt tokens (Space Grotesk / Inter / mono, `#F5F5F0` bg, ink borders, `--radius: 0`, accent `#067F8A`)

---

## Setup

```bash
cd ux-spec-skills/docs/prototype
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

---

## Routes

| Route | Screen |
|-------|--------|
| `/` | Overview — two doors, Experts gallery (×7), skills workflow, category grids, Router CTA |
| `/experts` | Experts index — flat gallery |
| `/experts/[slug]` | Expert profile (bio, works, further reading, principles, related skills) |
| `/skills/[slug]` | Skill profile (purpose → related; empty Related for sparse maps) |
| `/loading` | Overview loading skeletons (brand/nav real) |
| `/error` | Honest failure + recovery CTAs |
| `/assets?path=…` | Stub for Related template/sample/HTML/principles paths |

**Expert slugs:** `edward-tufte`, `ben-shneiderman`, `ben-fry`, `stephen-few`, `tamara-munzner`, `barbara-minto`, `cole-nussbaumer-knaflic`

**Skill slugs:** match `SKILLS_INDEX.md` (e.g. `daily-exec-pulse`, `tufte-cleanup`, `router`, `dataviz-critique`, …)

---

## Components (prototype)

| Component | Role |
|-----------|------|
| `AppShell` | Sidebar (desktop) + Sheet drawer (mobile), brand, theme toggle, skip link |
| `PageHeader` | H1, tagline, meta row |
| `IndexCard` | Whole-card link for experts/skills |
| `ModuleBlock` | `.module` / accent-left content blocks |
| `RelatedAssets` | Real links or muted “No … yet” (never fake `#`) |
| `PromptPanel` | Collapsible mono prompt (`aria-expanded`) |
| `QuietButton` | Quiet primary CTA |
| `ThemeToggle` | Light / dark (`data-mode` + `.dark`) |
| shadcn | `button`, `card`, `sheet`, `table`, `skeleton`, `badge`, … |

Mock data lives in `src/lib/data/` (`experts.ts`, `skills.ts`).

---

## Primary flows (clickable)

1. **Browse experts** — Overview → gallery / Experts → profile → principles stub → related skill  
2. **Discover skills** — Overview → category card → skill profile  
3. **Run path** — Purpose → When → Inputs → Prompt → Output → Related  
4. **Demo path** — Daily exec pulse / Encoding accuracy → Related sample or HTML stub  
5. **Ambiguous ask** — Router CTA → Router profile  
6. **Empty Related** — e.g. `/skills/tufte-cleanup` (muted empties; expert + principles still link)  
7. **Mobile nav** — hamburger → drawer → Esc / backdrop / navigate closes  

---

## Known gaps

- Skill/expert copy is **prototype mock data**, not a live parse of every `.skill.md` / missing `reference/experts/*.md`.
- Related assets open a **path stub** (`/assets?path=…`) instead of serving markdown/HTML from the monorepo.
- Principle checklists are not rendered in-app; links go to the asset stub.
- shadcn `form` was not required for v1 browse flows (no search/CMS).
- Production docs site remains planned as static HTML under `docs/site/` with vendored Konstrukt CSS; this app is the interactive mid-fi → hi-fi bridge.
- Category nav hashes (`/#rigor`) rely on in-page section ids on Overview.

---

## Accessibility notes

- Skip link to `#main`
- `aria-current="page"` + left accent on active nav
- Visible focus rings (accent, 2px offset)
- Cards are single links (no nested controls)
- Related empty states are text, not disabled buttons
- Drawer restores focus to the menu button on close
