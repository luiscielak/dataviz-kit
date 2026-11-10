# Dataviz Kit — UI Prototype

Clickable Next.js prototype for the Dataviz Kit docs shell, built from mid-fi wireframes under `../wireframes/midfi/`.

**Artifact root:** `ux-spec-skills/docs/`  
**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui (Radix)  
**Visual target:** Konstrukt tokens (Space Grotesk / Inter / mono, `#F5F5F0` bg, ink borders, `--radius: 0`, accent `#067F8A`)  
**Live:** [https://thehoomanloop.com/dataviz](https://thehoomanloop.com/dataviz) · origin [dataviz-kit.vercel.app/dataviz](https://dataviz-kit.vercel.app/dataviz)

---

## Setup

```bash
cd ux-spec-skills/docs/prototype
npm install
npm run dev
```

Open [http://localhost:3000/dataviz](http://localhost:3000/dataviz). Routes are under `basePath: /dataviz` (local, Vercel, and `thehoomanloop.com/dataviz` share the same paths).

```bash
npm run build   # production build
npm run lint    # ESLint
```

---

## Deploy (Vercel)

Hosted on Vercel under the **Hooman Loop** team, deployed from the [luiscielak/dataviz-kit](https://github.com/luiscielak/dataviz-kit) repo. Because the app lives in a subdirectory, the **Root Directory** must be set.

| Setting | Value |
|---------|-------|
| Team | Hooman Loop |
| Repo | `luiscielak/dataviz-kit` |
| Project name | `dataviz-kit` |
| Root Directory | `ux-spec-skills/docs/prototype` |
| Framework | Next.js (auto-detected) |
| Install | `npm install` |
| Build | `npm run build` |
| Production URL | [https://dataviz-kit.vercel.app/dataviz](https://dataviz-kit.vercel.app/dataviz) |
| Canonical URL | [https://thehoomanloop.com/dataviz](https://thehoomanloop.com/dataviz) (Netlify 200-proxy, same as `/spell`) |

First deploy:

1. In Vercel, import the `luiscielak/dataviz-kit` GitHub repo under the **Hooman Loop** team.
2. Set **Root Directory** to `ux-spec-skills/docs/prototype`.
3. Keep the auto-detected Next.js framework preset and default build/install commands.
4. Deploy. Pushes to `main` publish to production; other branches/PRs get preview URLs.

**Access the experts explorer** (append to the production or preview URL):

| Path | Screen |
|------|--------|
| `/experts` | Experts index |
| `/experts/edward-tufte` | Tufte profile |
| `/experts/ben-shneiderman` | Shneiderman profile |
| `/skills/tufte-cleanup` | Skill profile |

Other expert slugs: `ben-fry`, `stephen-few`, `tamara-munzner`, `barbara-minto`, `cole-nussbaumer-knaflic`.

---

## Routes

| Route | Screen |
|-------|--------|
| `/` (→ `/dataviz`) | Overview — three doors (experts, skills, free critique), Experts gallery (×11), skills workflow, category grids, Router CTA |
| `/dataviz/crit` | Free Dataviz Critique offer — principles, sample report, request form |
| `/experts` | Experts index — flat gallery |
| `/experts/[slug]` | Expert profile (bio, works, further reading, principles, related skills) |
| `/skills/[slug]` | Skill profile (purpose → related; empty Related for sparse maps) |
| `/loading` | Overview loading skeletons (brand/nav real) |
| `/error` | Honest failure + recovery CTAs |
| `/assets?path=…` | Stub for Related template/sample/HTML/principles paths |

**Expert slugs:** `edward-tufte`, `ben-shneiderman`, `ben-fry`, `stephen-few`, `tamara-munzner`, `barbara-minto`, `cole-nussbaumer-knaflic`, `nicholas-felton`, `alberto-cairo`, `nancy-duarte`, `andy-kirk`

**Skill slugs:** match `SKILLS_INDEX.md` (e.g. `daily-exec-pulse`, `tufte-cleanup`, `router`, `dataviz-crit`, …)

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
5b. **Free critique** — Overview third door / Critique nav → `/dataviz/crit` → request form (or run `/dataviz/skills/dataviz-crit` yourself)  
6. **Empty Related** — e.g. `/skills/tufte-cleanup` (muted empties; expert + principles still link)  
7. **Mobile nav** — hamburger → drawer → Esc / backdrop / navigate closes  

---

## Known gaps

- Skill/expert copy is **prototype mock data**, not a live parse of every `.skill.md` / missing `reference/experts/*.md`.
- Related assets open a **path stub** (`/assets?path=…`) instead of serving markdown/HTML from the monorepo.
- Principle checklists are not rendered in-app; links go to the asset stub.
- `/dataviz/crit` request form posts to the Netlify intake (`/dataviz/api/subscribe` + `/dataviz/api/upload-url`) when hosted on `thehoomanloop.com`; locally it validates only.
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
