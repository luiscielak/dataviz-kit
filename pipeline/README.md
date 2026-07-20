# Pipeline: multiple CSVs → spec + self-contained HTML

Run from the **repository root** (`dataviz-kit/`).

## Setup

```bash
pip install -r pipeline/requirements.txt
```

## Config

Edit `datasets/dashboard.yaml` to point at your CSVs (paths relative to repo root):

```yaml
name: my-dashboard
cadence: weekly
skills:
  - weekly-performance-review
sources:
  - path: data/my-dataset/example-a.csv
  - path: data/my-dataset/example-b.csv
  # ...
```

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
