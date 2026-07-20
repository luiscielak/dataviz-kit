#!/usr/bin/env python3
"""
Generate a dashboard spec (markdown) from a data profile.
Uses profile JSON (from profile.py) to fill a template aligned with
ux-spec-skills (weekly-performance-review style). No LLM required.
"""

import json
import sys
from pathlib import Path


def column_short_name(col: dict) -> str:
    """Short label for a column (e.g. for metric name)."""
    name = col.get("name", "")
    if len(name) > 35:
        return name[:32] + "..."
    return name


def derive_metrics(profiles: list[dict]) -> list[dict]:
    """Derive suggested metrics from profiles: counts, rates, categorical breakdowns."""
    metrics = []
    for p in profiles:
        if p.get("error"):
            continue
        name = p.get("name", p.get("path", "?"))
        rows = p.get("rows", 0)
        metrics.append({"name": f"Rows ({Path(name).stem})", "definition": f"Row count for {name}", "value": rows})
        for col in p.get("columns", []):
            if col.get("type") == "categorical" and col.get("name"):
                metrics.append({
                    "name": column_short_name(col),
                    "definition": f"Breakdown by {col['name']}",
                    "distinct": col.get("distinct", 0),
                })
    return metrics


def derive_modules(profiles: list[dict], metrics: list[dict]) -> list[dict]:
    """Suggest modules from profile (summary, table, segment)."""
    modules = [
        {"name": "Summary", "purpose": "At-a-glance counts and key metrics", "placement": "Top"},
        {"name": "By source", "purpose": "Row counts and breakdown per CSV/event", "placement": "Middle"},
        {"name": "Detail on demand", "purpose": "Drill into rows or segments", "placement": "Modal or panel"},
    ]
    return modules


def spec_markdown(profile_data: dict) -> str:
    """Produce full spec markdown from profile output."""
    config_name = profile_data.get("config_name", "dashboard")
    cadence = profile_data.get("cadence", "weekly")
    profiles = profile_data.get("profiles", [])
    metrics = derive_metrics(profiles)
    modules = derive_modules(profiles, metrics)
    source_list = ", ".join(p.get("path", "?") for p in profiles if not p.get("error"))
    total_rows = sum(p.get("rows", 0) for p in profiles if not p.get("error"))

    lines = [
        f"# Dashboard spec — {config_name}",
        "",
        f"**Cadence**: {cadence.capitalize()}",
        "**Audience**: Dashboard consumer",
        "**Data sources**: " + source_list,
        "**Generated from**: Data profile (no LLM)",
        "",
        "---",
        "",
        "## 1. Purpose & decisions supported",
        "",
        "- Understand counts and breakdowns across the provided CSVs.",
        "- Compare metrics by source (file/event) and by categorical dimensions.",
        "- Drill into detail on demand (Tufte, Shneiderman).",
        "",
        "---",
        "",
        "## 2. Modules & layout",
        "",
        "| Module name | Purpose | Placement |",
        "|-------------|---------|-----------|",
    ]
    for m in modules:
        lines.append(f"| {m['name']} | {m['purpose']} | {m['placement']} |")
    lines.extend([
        "",
        "---",
        "",
        "## 3. Data requirements",
        "",
        f"- **Sources**: {source_list}",
        "- **Refresh**: Manual / on run.",
        f"- **Total rows (profiled)**: {total_rows}",
        "- **Derived**: Row counts per source; breakdowns by categorical columns.",
        "",
        "---",
        "",
        "## 4. Interaction model",
        "",
        "- **Overview**: Summary cards + table by source.",
        "- **Filter**: By source/file if multiple.",
        "- **Details on demand**: Click row or segment for detail.",
        "",
        "---",
        "",
        "## 5. Trust layer",
        "",
        "- **Definitions**: Metric names reflect column or source names from profile.",
        "- **Freshness**: Data as of last pipeline run.",
        "- **Caveats**: Profile may sample up to 500 rows per file.",
        "",
        "---",
        "",
        "## 6. States",
        "",
        "| State | What user sees | Action |",
        "|-------|----------------|--------|",
        "| Empty | No data | Re-run pipeline or check sources |",
        "| Error | Message per failed source | Fix path or CSV format |",
        "",
        "---",
        "",
        "## 7. Profile summary (metrics)",
        "",
    ])
    for m in metrics:
        extra = f" (distinct: {m['distinct']})" if m.get("distinct") else ""
        lines.append(f"- **{m['name']}**: {m.get('definition', '')}{extra}")
    return "\n".join(lines)


def main():
    base_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else Path.cwd()
    profile_path = base_dir / "output" / "profile.json"
    if not profile_path.exists():
        # read from stdin
        profile_data = json.load(sys.stdin)
    else:
        with open(profile_path) as f:
            profile_data = json.load(f)
    md = spec_markdown(profile_data)
    out_dir = base_dir / "output"
    out_dir.mkdir(parents=True, exist_ok=True)
    name = profile_data.get("config_name", "dashboard")
    out_file = out_dir / f"{name}.spec.md"
    out_file.write_text(md, encoding="utf-8")
    print(f"Wrote {out_file}", file=sys.stderr)
    print(md)


if __name__ == "__main__":
    main()
