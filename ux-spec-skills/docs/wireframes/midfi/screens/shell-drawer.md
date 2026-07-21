# Screen: Shell drawer (mobile)

**Lo-fi:** `shell-drawer-mobile.txt`  
**FR:** 009 · US-008 · NFR-006  
**Component:** Sheet

---

## Purpose

Primary navigation on small viewports when hamburger is open. Same IA/order as desktop sidebar.

---

## Layout

```
Top bar: [×] Dataviz Kit / by The Hooman Loop  [theme]
Drawer panel:
  › Overview          ← aria-current when on overview
    Experts
    Dataviz rigor
    Consulting
    Executive
    Global
    Router
Backdrop: dimmed page content
```

---

## States

| State | Spec |
|-------|------|
| closed | Default; `aria-expanded="false"` on menu button |
| open | Panel + backdrop; focus in drawer |
| hover / focus | Nav items per Navbar states |
| active | Left accent + `aria-current="page"` |

---

## Interactions

| Control | Action |
|---------|--------|
| [=] hamburger | Open drawer |
| [×] / Esc / backdrop | Close; restore focus to hamburger |
| Nav item | Navigate (page or hash) + close drawer |
| Theme | Toggle mode without closing (optional; may live in top bar) |

---

## Accessibility

- Focus trap while open
- `aria-label="Main navigation"` on panel
- Keyboard-reachable items; order matches desktop
- Do not leave inert main content focusable under backdrop
