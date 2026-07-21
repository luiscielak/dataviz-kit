# Expert principle demos

One self-contained HTML micro-demo per shipped expert. Each teaches a single signature idea through an original before/after (or wrong/right) contrast — not a reproduction of any published figure.

These are the canonical source. The Next prototype serves copies from `docs/prototype/public/expert-demos/<slug>.html` (see the copy script wired to `predev`/`prebuild` in the prototype `package.json`) and embeds them in the "See it" section of each expert profile.

## Folder shape

```
examples/experts/
  <expert-slug>/
    demo.html
```

`<expert-slug>` matches the expert `slug` in `docs/prototype/src/lib/data/experts.ts` (e.g. `edward-tufte`).

## Stack

- **Tailwind CSS** via the browser CDN (`@tailwindcss/browser@4`), same as `examples/html/`. No npm or build step.
- Small `@theme` block for a neutral light palette so demos read as one kit.
- Placeholder data only. Chart-level demos share a fictional **Revenue pulse** SaaS dataset; the structural demos (Ben Fry pipeline, Minto pyramid) use a conceptual layout instead of a chart.

## Rules

- **No copyrighted figures.** Every demo is an original educational example built from placeholder data. Each page carries a footer stating this.
- **Teach the principle, not the biography.** Attribute the idea to the expert; keep the framing to one signature lesson.
- **Accessibility.** Each contrast region is a labeled `<figure>`/`<section>` so screen readers can tell "before" from "after"; a one-sentence caption states what to notice.
- **Theming trade-off.** Demos use the Tailwind CDN and render on a fixed neutral light surface. They intentionally do **not** follow the prototype's dark-mode toggle — this is by design, not a bug.

## Files

| Expert | Slug | Visual lesson |
|--------|------|---------------|
| Edward Tufte | `edward-tufte` | Chartjunk bars vs cleaned data-ink (same numbers) |
| Ben Shneiderman | `ben-shneiderman` | Overview first, then zoom/filter, then details on demand |
| Ben Fry | `ben-fry` | Pipeline stages: skipped acquire/filter vs the complete path |
| Stephen Few | `stephen-few` | Cluttered monitoring tile vs KPI + sparkline |
| Tamara Munzner | `tamara-munzner` | Wrong encoding for a rank task (pie/angle) vs aligned (bar/position) |
| Barbara Minto | `barbara-minto` | Evidence-first block vs answer-first pyramid |
| Cole Nussbaumer Knaflic | `cole-nussbaumer-knaflic` | Cluttered chart vs action title + annotation focus |

## How to open

- Open the `.html` directly in a browser (`file:///...`); Tailwind loads from the CDN, so a network connection is needed the first time.
- Or serve the folder with any static server (`npx serve .`).
- In the prototype, open the matching expert profile and use the "See it" section (embedded) or "Open full demo".
