# Screen: Overview — Loading

**Lo-fi:** `overview-loading-desktop.txt`, `overview-loading-mobile.txt`  
**State:** Core loading / first paint while meta or catalog hydrates  
*(Static HTML MVP may rarely show this; keep for parity and future generators.)*

---

## Purpose

Preserve suite recognition while content modules load. Brand + nav always real—never skeleton the chrome.

---

## Layout

| Region | Loading treatment |
|--------|-------------------|
| Nav / brand / subtitle | Real content |
| Page header title/tagline | Real or light skeleton under title |
| Meta row | Muted “Loading version · expert count · skill count…” |
| Two doors | Two skeleton blocks |
| Experts gallery | Card-shaped skeletons (3+ shown) |
| How to use / grids | Step / card skeletons |

---

## States

| State | Spec |
|-------|------|
| loading | `aria-busy="true"` on main content region |
| default | Replace skeletons with live modules (see `overview.md`) |
| error | If fetch fails → `error.md` (don’t infinite-skeleton) |

---

## Accessibility

- Live region optional: “Loading Dataviz Kit content”
- Skeletons decorative (`aria-hidden="true"`) if busy announced on parent
- Focus stays on skip/nav; don’t auto-move into skeletons
- Respect `prefers-reduced-motion` (no pulse if reduced)
