# HTML dashboard examples

Self-contained HTML examples that visualize the dashboard specs from `../generic/`. Each file is a single HTML document with no build step.

## Stack

- **Tailwind CSS** via [Play CDN](https://tailwindcss.com/docs/installation/play-cdn) (script tag). No npm or build required.
- **shadcn-inspired styling**: Neutral palette, rounded corners, borders, and typography replicated with Tailwind utilities and a small `@theme` block (e.g. `--color-card`, `--color-muted`, `--color-border`). These are not React shadcn components—they are static HTML styled to match that look.

## Files

| File | Spec counterpart | Contents |
|------|------------------|----------|
| `daily-exec-pulse.html` | `../generic/sample-daily-dashboard.md` | Hero (Bookings, MRR, Pipeline), exceptions list, sparkline placeholder, segment snapshot. |
| `weekly-performance-review.html` | `../generic/sample-weekly-dashboard.md` | Week summary, variance table, 7-week trend placeholder, segment breakdown. |
| `alerts-in-dashboard.html` | `skills/10-exec-dashboards/alerts.skill.md` | Alert banner, alert list with severity (P1/P2), states (New / Acknowledged / Resolved). |

## How to open

- **Option 1**: Open the `.html` file directly in a browser (`file:///...`). Tailwind loads from the CDN, so a network connection is required the first time.
- **Option 2**: Serve the folder with any static server (e.g. `npx serve .`, or your IDE’s “Open with Live Server”) to avoid any file-origin restrictions.

Data in the examples is placeholder only; there is no API or interactivity beyond static UI.
