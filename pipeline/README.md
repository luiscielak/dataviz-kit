# Pipeline: multiple CSVs → spec + self-contained HTML

Dataset-agnostic. Point a local config at your CSVs; nothing under `data/` or `output/` is committed.

Run from the **repository root** (`dataviz-kit/`).

## Setup

```bash
pip install -r pipeline/requirements.txt
```

## Config

1. Put CSVs under `data/<your-dataset>/` (see `data/README.md`).
2. Copy the example config and edit paths:

```bash
cp datasets/dashboard.example.yaml datasets/dashboard.yaml
```

```yaml
name: my-dashboard
cadence: weekly
skills:
  - weekly-performance-review
sources:
  - path: data/my-dataset/file-a.csv
  - path: data/my-dataset/file-b.csv
```

`datasets/dashboard.yaml` is gitignored so local paths and dataset names stay private.

## Run

```bash
python3 pipeline/run.py
```

From repo root. This will:

1. **Profile** all CSVs (schema, types, row counts) → `output/profile.json`
2. **Generate spec** (markdown) from profile → `output/<name>.spec.md`
3. **Generate dashboard HTML** with embedded data → `output/<name>.dashboard.html`

Open `output/<name>.dashboard.html` in a browser. No server needed; data is embedded (Tailwind from CDN).

## Scripts

| Script | Purpose |
|--------|--------|
| `profile.py` | Read config, profile each CSV, output JSON to stdout |
| `spec_from_profile.py` | Read `output/profile.json`, write spec markdown |
| `html_from_profile.py` | Read `output/profile.json`, write self-contained HTML |
| `run.py` | Run all three and write to `output/` |

Principles (Tufte, Shneiderman, Ben Fry) are reflected in the spec template and dashboard layout (overview first, then by-source, then breakdown).
