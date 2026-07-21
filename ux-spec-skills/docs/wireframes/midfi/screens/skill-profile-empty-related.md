# Screen: Skill profile — Empty Related

**Lo-fi:** `skill-profile-empty-related-desktop.txt`, `…-mobile.txt`  
**Example:** Tufte cleanup (no sample / template / HTML in v1 map)  
**FR:** 005 · US-005 · Annotation [A5]

---

## Purpose

Honest empty states for unmapped Related assets. Never fake links. Theory links (expert + principles) may still appear.

---

## Delta from skill-profile

Modules S3–S9 unchanged. Header: **no** `[sample]` / `[HTML]` badges.

### Related (S10)

| Slot | State |
|------|-------|
| Template | Muted text: “No template yet” — not a control |
| Sample | Muted: “No sample yet” |
| HTML demo | Muted: “No HTML demo yet” |
| Expert profile | Link OK when mapped (e.g. Edward Tufte) |
| Principles | Link OK → `reference/principles-tufte.md` |

---

## States

| State | Spec |
|-------|------|
| empty | Default for missing map entries |
| hover / focus | Only on real links (expert / principles) |
| disabled | **Do not** use disabled buttons that look clickable |

---

## Accessibility

- Muted copy uses `--text-muted` at ≥ `text-sm` for AA contrast
- Screen readers: empty slots are text nodes, not `aria-disabled` links
- Expert vs principles remain separate destinations [A7]

---

## Applies to

Skills with sparse asset maps: Tufte cleanup, Global standards, Router, and any skill lacking sample/template/HTML per Design Brief §5.
