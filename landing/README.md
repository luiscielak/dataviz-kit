# Dataviz Kit — landing page

A framework-free static landing page for the Dataviz Kit lead magnet. Mirrors
the Hooman Loop Business OS design system: one token file, a brand-palette axis
(`Atelier · Courage · Minimal · HL · Blueprint`) and a light/dark axis, both set
on `<html>` via `data-palette` and `data-theme`.

```
landing/
  index.html          # the page
  app.js              # theme + palette toggle, Kit form enhancement
  styles/
    tokens.css        # design tokens (swap for the portal's real tokens.css)
    site.css          # layout & components
  assets/
    og.png            # 1200x630 social share image
```

No build step. It's plain HTML/CSS/JS.

## Preview locally

```bash
cd landing
python3 -m http.server 4000
# open http://localhost:4000
```

## Wire up the Kit (ConvertKit) form

The form in `index.html` ships with placeholders and a safe fallback: until it's
connected, "Send me the kit" sends people straight to the GitHub repo, so no lead
is lost.

1. In Kit: **Grow → Landing Pages & Forms →** your form **→ Embed → HTML**.
2. From the embed snippet, copy the form's action URL
   (`https://app.kit.com/forms/<FORM_ID>/subscriptions`) and the form UID.
3. In `index.html`, on the `<form id="kit-form">` element, replace:
   - `data-uid="REPLACE_WITH_KIT_UID"` → your UID
   - `data-kit-action="…/forms/REPLACE_WITH_FORM_ID/subscriptions"` → your action URL
   - `action="…/forms/REPLACE_WITH_FORM_ID/subscriptions"` → same action URL
4. Remove the `<!-- KIT (ConvertKit) FORM … -->` comment note.

Once a real action is set, `app.js` submits via `fetch` (with a native-POST
fallback) and shows an inline success/error message. Configure the actual
"here's the kit" email (repo link, walkthrough, demo) as the incentive/automation
inside Kit.

## Deploy

The page is static, so any static host works. Two paths:

### A. Into the Business OS portal (recommended for brand consistency)
Copy `landing/` into your Business OS repo as a page/subdomain and replace
`styles/tokens.css` with the portal's real `tokens.css` — the semantic token
names (`--bg`, `--fg`, `--accent`, `--surface`, …) line up, so it inherits the
live palette and mode.

### B. Standalone (Vercel / Netlify / GitHub Pages)
- **Vercel/Netlify:** set the project/publish directory to `landing/`.
- **GitHub Pages:** publish `landing/` (e.g. via a Pages workflow or a
  `landing/`-rooted branch).

### Point dataviz-kit.thehoomanloop.com at it
DNS is a manual step on your side:

1. In your host, add the custom domain `dataviz-kit.thehoomanloop.com`.
2. At your DNS provider, add a **CNAME** record:
   `dataviz-kit` → the host target (e.g. `cname.vercel-dns.com`,
   `<site>.netlify.app`, or `<user>.github.io`).
3. Wait for DNS + TLS to provision, then confirm HTTPS resolves.

## Notes

- Absolute `og:image` / canonical URLs assume `https://dataviz-kit.thehoomanloop.com/`.
  Update them in `index.html` if you deploy elsewhere.
- All GitHub links point to `https://github.com/luiscielak/dataviz-kit`.
