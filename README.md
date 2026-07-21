# Dataviz Kit

A spec-driven toolkit for building **executive dashboards** and **consulting storytelling** that respect the fundamentals of data visualization — Tufte, Shneiderman, Ben Fry, Munzner, Few, and Minto.

Two parts, one workflow:

- **`ux-spec-skills/`** — a reusable **Spec Skills Library**. Skills turn a request ("I need a weekly exec review") into a structured spec; templates give you doc skeletons; examples show finished outputs; a critique skill reviews any dashboard/chart against the principles.
- **`pipeline/`** — a dataset-agnostic **CSV → spec → self-contained HTML dashboard** pipeline. Point it at your CSVs and get a profile, a spec, and a ready-to-open dashboard.

## Why

Most dashboards are built by taste and habit. This kit encodes the principles into repeatable skills and a small pipeline, so every spec and output follows the same non-negotiables:

- **Tufte** — clarity and integrity; signal over noise; no chartjunk.
- **Shneiderman** — overview first, then zoom/filter, then details on demand.
- **Ben Fry** — Acquire → Parse → Filter → Mine → Represent → Refine → Interact.

## The workflow

```
Inputs (domain, KPIs, cadence, audience)
    → Skill (e.g. daily-exec-pulse, weekly-performance-review)
    → Spec (purpose, modules, data, interaction, trust, states, events)
    → Dashboard build (design + engineering)
    → Optional: consulting outputs (exec slide outline, one-pager)
```

## Quick start

**Generate a spec (no install needed):**

1. Open [`ux-spec-skills/SKILLS_INDEX.md`](ux-spec-skills/SKILLS_INDEX.md) (or the router at `ux-spec-skills/skills/99-router.skill.md`) and pick a skill.
2. Fill in the skill's "Inputs" section and run its "Prompt" in Cursor (or your tool of choice).
3. Optionally start from a matching template in `ux-spec-skills/templates/`.

**Turn CSVs into a dashboard:**

```bash
pip install -r pipeline/requirements.txt
cp datasets/dashboard.example.yaml datasets/dashboard.yaml   # edit paths to your CSVs
python3 pipeline/run.py                                       # → output/<name>.dashboard.html
```

See [`pipeline/README.md`](pipeline/README.md) for details.

## Repo layout

| Path | Purpose |
|------|---------|
| `ux-spec-skills/` | Spec Skills Library: skills, templates, examples, expert demos, principle references. Start at its [`README.md`](ux-spec-skills/README.md). |
| `pipeline/` | CSV → spec → self-contained HTML pipeline (Python). |
| `datasets/` | Pipeline config. `dashboard.example.yaml` is committed; your `dashboard.yaml` is local/gitignored. |
| `data/` | Your local CSVs. Gitignored so PII never enters the repo (only `data/README.md` is committed). |
| `output/` | Generated artifacts (gitignored). |
| `landing/` | Static landing page for the kit (see `landing/README.md`). |

## Principles

Detailed summaries live in [`ux-spec-skills/reference/`](ux-spec-skills/reference/): Tufte, Shneiderman, Ben Fry, Stephen Few, Tamara Munzner, Barbara Minto, and Storytelling with Data.

## License

[MIT](LICENSE) — fork it, make it yours.
