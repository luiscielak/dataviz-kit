# Local data (not committed)

Put your CSVs here. This folder is for **local datasets only** — raw data is gitignored so PII and proprietary files never enter the repo.

## Layout

```text
data/
  my-dataset/
    file-a.csv
    file-b.csv
```

Use any folder name under `data/`. Point `datasets/dashboard.yaml` at those paths (relative to the repo root).

## Rules

- Do not commit CSVs, exports, or files with names/emails/phones.
- Prefer copying a local config from `datasets/dashboard.example.yaml` → `datasets/dashboard.yaml`.
- Generated artifacts land in `output/` (also gitignored).
