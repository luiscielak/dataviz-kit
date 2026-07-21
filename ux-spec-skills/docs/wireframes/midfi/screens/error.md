# Screen: Error

**Lo-fi:** `error-desktop.txt`, `error-mobile.txt`  
**State:** Broken asset / missing page / 404 profile

---

## Purpose

Honest failure inside the app-shell. Prefer muted empty Related on profiles when the asset map already knows something is missing (avoid navigating to 404).

---

## Layout

| Region | Spec |
|--------|------|
| Shell | Nav remains usable |
| Main | Error module: title · explanation · primary CTA · secondary links |
| Optional | Maintainer detail: path / asset id |

**Copy**

- Title: Something went wrong  
- Body: We couldn’t open that page or asset. Prefer honest failure over a blank module.  
- Primary: Back to Overview  
- Secondary: Experts index · Router  

---

## States

| State | Spec |
|-------|------|
| error | Default for this screen (`role="alert"` on message) |
| hover / focus | CTA and recovery links |
| loading | N/A |

---

## Interactions

| Control | Action |
|---------|--------|
| Back to Overview | → Overview |
| Experts index | → Experts index |
| Router | → Router skill profile |

---

## Accessibility

- Clear H1/H2 for error title
- Don’t rely on red alone—ink text + structure
- Recovery paths keyboard-reachable
- Optional technical path in muted text for QA only
