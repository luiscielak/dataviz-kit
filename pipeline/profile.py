#!/usr/bin/env python3
"""
Profile multiple CSVs: infer schema (columns, types), row counts, basic stats.
Output: JSON profile for spec and HTML generation.
Paths in config are relative to repo root (cwd when running from repo root).
"""

import csv
import json
import os
import re
from datetime import datetime
from pathlib import Path


def infer_type(values: list[str]) -> str:
    """Infer column type from non-empty string values."""
    sample = [v.strip() for v in values if v and str(v).strip()]
    if not sample:
        return "string"
    # date-like
    date_count = 0
    for v in sample[:50]:
        if re.match(r"^\d{4}-\d{2}-\d{2}", str(v)) or re.match(r"^\d{1,2}/\d{1,2}/\d{2,4}", str(v)):
            date_count += 1
    if date_count >= min(3, len(sample)):
        return "date"
    # number
    num_count = 0
    for v in sample[:50]:
        s = str(v).replace(",", "").replace("$", "").strip()
        if s.replace(".", "").replace("-", "").isdigit():
            num_count += 1
    if num_count >= min(3, len(sample)):
        return "number"
    # categorical if few distinct
    distinct = len(set(sample))
    if distinct <= 20 and len(sample) >= 3:
        return "categorical"
    return "string"


def profile_file(path: str, base_dir: Path) -> dict:
    """Profile a single CSV file."""
    full = base_dir / path
    if not full.exists():
        return {"path": path, "error": "file not found", "rows": 0, "columns": []}
    rows = []
    columns = []
    try:
        with open(full, newline="", encoding="utf-8", errors="replace") as f:
            reader = csv.DictReader(f)
            columns = reader.fieldnames or []
            for i, row in enumerate(reader):
                if i >= 500:  # cap for profiling
                    break
                rows.append(row)
    except Exception as e:
        return {"path": path, "error": str(e), "rows": 0, "columns": []}
    # column types and stats
    col_info = []
    for col in columns:
        values = [row.get(col, "") for row in rows if col in row]
        t = infer_type(values)
        info = {"name": col, "type": t}
        if t == "categorical":
            distinct = len(set(v for v in values if v))
            info["distinct"] = distinct
            info["sample"] = list(set(v for v in values if v))[:10]
        elif t == "number":
            nums = []
            for v in values:
                s = str(v).replace(",", "").replace("$", "").strip()
                try:
                    nums.append(float(s))
                except ValueError:
                    pass
            if nums:
                info["min"] = min(nums)
                info["max"] = max(nums)
        col_info.append(info)
    return {
        "path": path,
        "name": full.name,
        "rows": len(rows),
        "total_rows": len(rows) if len(rows) < 500 else "500+",
        "columns": col_info,
        "sample_rows": rows[:5],
    }


def profile_sources(sources: list[dict], base_dir: Path) -> list[dict]:
    """Profile each source; return list of file profiles."""
    return [profile_file(s["path"], base_dir) for s in sources]


def main():
    import sys
    base_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else Path.cwd()
    config_path = base_dir / "datasets" / "dashboard.yaml"
    if not config_path.exists():
        config_path = base_dir / "dashboard.yaml"
    if not config_path.exists():
        print(json.dumps({"error": "config not found", "profiles": []}, indent=2))
        return
    try:
        import yaml
        with open(config_path) as f:
            config = yaml.safe_load(f)
    except Exception as e:
        print(json.dumps({"error": str(e), "profiles": []}, indent=2))
        return
    sources = config.get("sources", [])
    if isinstance(sources[0], str):
        sources = [{"path": p} for p in sources]
    profiles = profile_sources(sources, base_dir)
    out = {
        "config_name": config.get("name", "dashboard"),
        "cadence": config.get("cadence", "weekly"),
        "skills": config.get("skills", []),
        "profiles": profiles,
    }
    print(json.dumps(out, indent=2))


if __name__ == "__main__":
    main()
