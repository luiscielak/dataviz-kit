# Screen: Experts index

**Lo-fi:** `experts-index-desktop.txt`, `experts-index-mobile.txt`  
**Flow:** Browse experts (entry)  
**FR:** 012 · US-007, US-009

---

## Purpose

Full **flat** gallery of all **7 shipped** experts. Same set and order as Overview gallery; queued authors omitted. No Core / Practice sectioning in the UI.

---

## Layout

| ID | Section | Spec |
|----|---------|------|
| S1 | Page header | H1 Experts · tagline · meta `7 profiles` |
| S2 | Gallery | Single card grid ×7 (desktop wraps ~4 cols; mobile stack) |
| S3 | Note | Muted: queued authors omitted until `reference/` ships |

Nav: Experts active (`aria-current="page"`).

---

## Card content

**Order (curated):** Edward Tufte · Ben Shneiderman · Ben Fry · Stephen Few · Tamara Munzner · Barbara Minto · Cole Nussbaumer Knaflic

Each card: **name** · why-in-kit one-liner → **expert profile** (not checklist-only). No tier label on cards.

**Content examples**

| | Short | Long |
|--|-------|------|
| Why | Data-ink & chartjunk | Practical storytelling for business charts and executive slides |

Tier (Core / Practice) stays in `PRINCIPLES_QUEUE.md` for maintainers; optional quiet micro-label on the **expert profile** only—not gallery sections.

---

## States

| State | Spec |
|-------|------|
| default | 7 cards |
| hover / focus | Card link states |
| loading | Skeleton cards under real header |
| empty | N/A for shipped set; never show Felton/Cairo placeholders |

---

## Accessibility

- H1 Experts; no H2 Core / Practice
- Cards keyboard-reachable; accessible name = name (+ detail)
- Note is informational text, not a disabled card row
