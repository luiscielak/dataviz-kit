#!/usr/bin/env python3
"""
Generate self-contained HTML dashboard from profile JSON.
Embeds aggregated data as JSON in the page; vanilla JS renders it.
Styling: Tailwind CDN + shadcn-inspired (same as ux-spec-skills/examples/html).
"""

import json
import sys
from pathlib import Path


def build_payload(profile_data: dict) -> dict:
    """Build the data payload to embed: summary cards + by-source table + optional breakdown."""
    profiles = profile_data.get("profiles", [])
    config_name = profile_data.get("config_name", "dashboard")
    cadence = profile_data.get("cadence", "weekly")
    summary = []
    total_rows = 0
    by_source = []
    for p in profiles:
        if p.get("error"):
            by_source.append({"source": p.get("path", "?"), "rows": 0, "error": p["error"]})
            continue
        rows = p.get("rows", 0)
        total_rows += rows
        name = Path(p.get("path", p.get("name", "?"))).stem
        if len(name) > 50:
            name = name[:47] + "..."
        by_source.append({"source": name, "path": p.get("path"), "rows": rows})
        summary.append({"label": name[:30] + ("..." if len(name) > 30 else ""), "value": rows})
    # If we have categorical columns, pick first one for a simple breakdown (from first file)
    breakdown = []
    for p in profiles:
        if p.get("error") or not p.get("sample_rows"):
            continue
        for col in p.get("columns", []):
            if col.get("type") == "categorical" and col.get("sample"):
                col_name = col.get("name", "?")
                if len(col_name) > 25:
                    col_name = col_name[:22] + "..."
                # count distinct sample values as placeholder
                values = [r.get(col["name"]) for r in p["sample_rows"] if r.get(col["name"])]
                from collections import Counter
                counts = Counter(values)
                breakdown = [{"segment": k, "count": v} for k, v in counts.most_common(8)]
                break
        if breakdown:
            break
    return {
        "title": config_name.replace("-", " ").title(),
        "cadence": cadence,
        "total_rows": total_rows,
        "summary": summary[:6],
        "by_source": by_source,
        "breakdown": breakdown,
    }


HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dashboard — __TITLE__</title>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <style type="text/tailwindcss">
    @theme {
      --color-background: #fafafa;
      --color-card: #ffffff;
      --color-muted: #737373;
      --color-border: #e5e5e5;
      --color-primary: #0f172a;
      --radius-card: 0.5rem;
    }
  </style>
</head>
<body class="bg-[var(--color-background)] text-[var(--color-primary)] min-h-screen antialiased">
  <div class="max-w-6xl mx-auto px-4 py-6 space-y-6" id="app">
    <header class="flex items-center justify-between">
      <div>
        <h1 class="text-xl font-semibold tracking-tight" id="header-title">__TITLE__</h1>
        <p class="text-sm text-[var(--color-muted)]" id="header-subtitle">Data from profile · self-contained</p>
      </div>
    </header>
    <section class="grid grid-cols-1 md:grid-cols-3 gap-4" id="summary-cards"></section>
    <section class="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] shadow-sm overflow-hidden">
      <div class="px-4 py-3 border-b border-[var(--color-border)]">
        <h2 class="font-medium text-sm">By source</h2>
        <p class="text-xs text-[var(--color-muted)] mt-0.5">Row counts per CSV</p>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-[var(--color-border)] bg-neutral-50/50">
              <th class="text-left py-2.5 px-4 font-medium text-[var(--color-muted)]">Source</th>
              <th class="text-right py-2.5 px-4 font-medium text-[var(--color-muted)]">Rows</th>
            </tr>
          </thead>
          <tbody id="by-source-body"></tbody>
        </table>
      </div>
    </section>
    <section class="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] shadow-sm overflow-hidden" id="breakdown-section" style="display: none;">
      <div class="px-4 py-3 border-b border-[var(--color-border)]">
        <h2 class="font-medium text-sm">Breakdown</h2>
        <p class="text-xs text-[var(--color-muted)] mt-0.5">Sample categorical breakdown</p>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-[var(--color-border)] bg-neutral-50/50">
              <th class="text-left py-2.5 px-4 font-medium text-[var(--color-muted)]">Segment</th>
              <th class="text-right py-2.5 px-4 font-medium text-[var(--color-muted)]">Count</th>
            </tr>
          </thead>
          <tbody id="breakdown-body"></tbody>
        </table>
      </div>
    </section>
  </div>
  <script type="application/json" id="dashboard-data">__PAYLOAD_JSON__</script>
  <script>
    (function() {
      var el = document.getElementById('dashboard-data');
      var data = JSON.parse(el ? el.textContent : '{}');
      var title = data.title || 'Dashboard';
      document.getElementById('header-title').textContent = title;
      document.getElementById('header-subtitle').textContent = (data.cadence || '') + ' · Total rows: ' + (data.total_rows ?? 0) + ' · Self-contained';

      var cards = document.getElementById('summary-cards');
      (data.summary || []).forEach(function(s) {
        var art = document.createElement('article');
        art.className = 'bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-4 shadow-sm';
        art.innerHTML = '<p class="text-sm text-[var(--color-muted)]">' + escapeHtml(s.label) + '</p><p class="text-2xl font-semibold mt-0.5">' + formatNumber(s.value) + '</p>';
        cards.appendChild(art);
      });
      if ((data.summary || []).length === 0 && data.total_rows != null) {
        var art = document.createElement('article');
        art.className = 'bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-4 shadow-sm';
        art.innerHTML = '<p class="text-sm text-[var(--color-muted)]">Total rows</p><p class="text-2xl font-semibold mt-0.5">' + formatNumber(data.total_rows) + '</p>';
        cards.appendChild(art);
      }

      var tbody = document.getElementById('by-source-body');
      (data.by_source || []).forEach(function(row) {
        var tr = document.createElement('tr');
        tr.className = 'border-b border-[var(--color-border)] hover:bg-neutral-50/50';
        var err = row.error ? ' <span class="text-red-600 text-xs">(' + escapeHtml(row.error) + ')</span>' : '';
        tr.innerHTML = '<td class="py-2.5 px-4">' + escapeHtml(row.source) + err + '</td><td class="text-right py-2.5 px-4">' + formatNumber(row.rows) + '</td>';
        tbody.appendChild(tr);
      });

      var breakdown = data.breakdown || [];
      if (breakdown.length > 0) {
        document.getElementById('breakdown-section').style.display = 'block';
        var bbody = document.getElementById('breakdown-body');
        breakdown.forEach(function(row) {
          var tr = document.createElement('tr');
          tr.className = 'border-b border-[var(--color-border)] hover:bg-neutral-50/50';
          tr.innerHTML = '<td class="py-2.5 px-4">' + escapeHtml(String(row.segment).slice(0, 60)) + '</td><td class="text-right py-2.5 px-4">' + formatNumber(row.count) + '</td>';
          bbody.appendChild(tr);
        });
      }

      function escapeHtml(s) {
        if (s == null) return '';
        var div = document.createElement('div');
        div.textContent = s;
        return div.innerHTML;
      }
      function formatNumber(n) {
        if (n == null || isNaN(n)) return '—';
        return Number(n).toLocaleString();
      }
    })();
  </script>
</body>
</html>
"""


def main():
    base_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else Path.cwd()
    profile_path = base_dir / "output" / "profile.json"
    if not profile_path.exists():
        print("Run pipeline first to generate output/profile.json", file=sys.stderr)
        sys.exit(1)
    with open(profile_path) as f:
        profile_data = json.load(f)
    payload = build_payload(profile_data)
    payload_json = json.dumps(payload, ensure_ascii=False)
    title = payload.get("title", "Dashboard")
    html = HTML_TEMPLATE.replace("__TITLE__", title).replace("__PAYLOAD_JSON__", payload_json)
    out_dir = base_dir / "output"
    out_dir.mkdir(parents=True, exist_ok=True)
    name = profile_data.get("config_name", "dashboard")
    out_file = out_dir / f"{name}.dashboard.html"
    out_file.write_text(html, encoding="utf-8")
    print(f"Wrote {out_file}", file=sys.stderr)
    print(html)


if __name__ == "__main__":
    main()
