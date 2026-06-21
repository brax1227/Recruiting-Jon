# Cruit Lab — Website

A static marketing site for Cruit Lab. No build step, no dependencies — just
HTML, CSS, and vanilla JS.

## Files
- `index.html` — the full single-page site (nav, hero, services/tiers, how it
  works, about, intake form, footer)
- `styles.css` — the "Lab" theme (matte black + volt-green accent)
- `script.js` — mobile nav + the intake form handler

## Run it locally
Just open `index.html` in a browser, or serve the folder:

```bash
cd site
python3 -m http.server 8000
# visit http://localhost:8000
```

## Make the contact form actually deliver
By default the form opens the visitor's email app with everything pre-filled
(nothing is lost). To collect submissions automatically:

1. Create a free form at [Formspree](https://formspree.io) (~2 minutes).
2. In `script.js`, set `FORM_ENDPOINT` to your Formspree URL.
3. Set `CONTACT_EMAIL` to your real inbox.

(Netlify Forms or any POST endpoint works too — just point `FORM_ENDPOINT` at it.)

## Deploy
Any static host works:
- **GitHub Pages** — point Pages at this folder (or move these files to the repo
  root / `docs/`).
- **Netlify / Vercel / Cloudflare Pages** — drag-and-drop the `site/` folder, or
  connect the repo and set the publish directory to `site`.

## Before going live
- Swap in the real logo once the wordmark is finalized (see `BRAND_IDENTITY.md`).
- Confirm pricing in the tiers matches what you're charging.
- Point a custom domain (`cruitlab.com`) at your host.
