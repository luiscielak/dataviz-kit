#!/usr/bin/env python3
"""
Run the full pipeline: config -> profile -> spec -> HTML.
Usage: from repo root, run:
  python pipeline/run.py
  # or
  python pipeline/run.py /path/to/repo/root
"""

import json
import subprocess
import sys
from pathlib import Path


def main():
    repo_root = Path(sys.argv[1]) if len(sys.argv) > 1 else Path.cwd()
    out_dir = repo_root / "output"
    out_dir.mkdir(parents=True, exist_ok=True)
    pipeline_dir = Path(__file__).resolve().parent

    # 1. Profile
    result = subprocess.run(
        [sys.executable, str(pipeline_dir / "profile.py"), str(repo_root)],
        capture_output=True,
        text=True,
        cwd=str(repo_root),
    )
    if result.returncode != 0:
        print(result.stderr or result.stdout, file=sys.stderr)
        sys.exit(1)
    profile_data = json.loads(result.stdout)
    (out_dir / "profile.json").write_text(json.dumps(profile_data, indent=2), encoding="utf-8")
    print("Profile written to output/profile.json")

    # 2. Spec from profile
    result = subprocess.run(
        [sys.executable, str(pipeline_dir / "spec_from_profile.py"), str(repo_root)],
        capture_output=True,
        text=True,
        cwd=str(repo_root),
    )
    if result.returncode != 0:
        print(result.stderr or result.stdout, file=sys.stderr)
        sys.exit(1)
    spec_md = (out_dir / f"{profile_data.get('config_name', 'dashboard')}.spec.md").read_text(encoding="utf-8")
    print("Spec written to output/" + f"{profile_data.get('config_name', 'dashboard')}.spec.md")

    # 3. HTML from profile
    result = subprocess.run(
        [sys.executable, str(pipeline_dir / "html_from_profile.py"), str(repo_root)],
        capture_output=True,
        text=True,
        cwd=str(repo_root),
    )
    if result.returncode != 0:
        print(result.stderr or result.stdout, file=sys.stderr)
        sys.exit(1)
    print("Dashboard HTML written to output/" + f"{profile_data.get('config_name', 'dashboard')}.dashboard.html")
    print("Done. Open output/*.dashboard.html in a browser.")


if __name__ == "__main__":
    main()
