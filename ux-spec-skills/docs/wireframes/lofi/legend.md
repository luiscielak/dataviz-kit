# Lo-Fi Legend — Dataviz Kit

**Artifact root:** `ux-spec-skills/docs/`  
**Pillars:** Experts (browse / learn) · Skills (discover / run)  
**Screens:** Overview · Skill profile · Experts index · Expert profile · Shell drawer · Loading / Error / Empty Related

**Naming:** UI label for people is **Experts** (not “heroes”—collides with UI hero).

---

## Symbols

| Element | Notation |
|---------|----------|
| Container | `+------+` / `| content |` / `+------+` |
| Image | `[IMG:w×h]` |
| Avatar | `(O)` |
| Icon | `[*]` |
| Button | `[Button: Label]` |
| Input | `[Input: Placeholder]` |
| Select | `[Select: Value]` |
| Checkbox | `[x] Label` |
| Link | `> Link label` |
| Muted / empty | `(muted) No … yet` |
| Active nav | `|› Item` (left accent) |
| Sections | `[S1]`, `[S2]` … |
| Annotations | `[A1]`, `[A2]` … |
| Flow hook | `[→ flow: name]` |

---

## Screens ↔ primary flows

| Screen files | Flows |
|--------------|--------|
| `overview-*` | Browse experts · Discover skills · Ambiguous ask |
| `skill-profile-*` | Run path · Demo path |
| `skill-profile-empty-related-*` | Honest empty Related |
| `experts-index-*` | Browse experts (entry) |
| `expert-profile-*` | Browse experts · Principles close |
| `shell-drawer-mobile` | Mobile browse (US-008) |
| `overview-loading-*` / `error-*` | Core interaction states |

---

## FR → screen / section map

| FR | Screen | Section |
|----|--------|---------|
| **FR-001** | overview | [S1] brand / `nav-brand` + subtitle |
| **FR-002** | overview | [S5] skills workflow |
| **FR-003** | overview | [S6]–[S10] skill category grids (rigor first) |
| **FR-004** | skill-profile | profile modules |
| **FR-005** | skill-profile · skill-profile-empty-related | Related / muted empties |
| **FR-006** | overview | [S11] Router CTA |
| **FR-007** | overview | [S4] Experts gallery (flat ×7) |
| **FR-008** | overview · skill-profile | card-meta / header badges |
| **FR-009** | overview · shell-drawer-mobile | nav order + `aria-current` · drawer |
| **FR-010** | overview | [S2] meta: version · 7 experts · 16 skills + generic tagline |
| **FR-011** | expert-profile | expert modules |
| **FR-012** | experts-index · overview nav | Experts list (flat ×7) |
| **FR-013** | expert-profile · skill-profile Related | Principles checklist ≠ bio |
| **FR-014** | overview | [S3] Two doors |

---

## Annotation key (shared)

| ID | Meaning |
|----|---------|
| `[A1]` | Konstrukt `app-shell` chrome; sticky sidebar desktop / hamburger → drawer mobile |
| `[A2]` | Brand + “by The Hooman Loop” subtitle — suite recognition on first paint |
| `[A3]` | Active nav: `aria-current="page"` + left accent |
| `[A4]` | Skill / expert cards are links; keyboard-reachable |
| `[A5]` | Missing Related assets: muted text only — never a dead fake link; no queued expert cards |
| `[A6]` | Experts gallery opens **expert profile**, not only checklist |
| `[A7]` | Expert profile and principle checklist are distinct surfaces |
| `[A8]` | External assets open outside shell (templates / samples / HTML demos / further reading) |
| `[A10]` | Meta-row includes expert count and skill count |
