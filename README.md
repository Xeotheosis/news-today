# 📰 News Today (definitely just a news site)

…actually it's **THE GIRLFRIEND APPRECIATION INDEX™** — an unnecessarily sophisticated scientific investigation into one particular girlfriend. A kawaii Bloomberg Terminal operated by an excessively affectionate boyfriend.

Plain HTML + CSS + vanilla JS. Chart.js is the only dependency (loaded from a CDN). No build step — GitHub Pages serves it as-is.

## Project structure

```
.
├── index.html     # Page structure + the decoy <title> and link-preview metadata
├── style.css      # All styling & animations (pastel tokens at the top in :root)
├── script.js      # CONFIG object at the top ← edit this; engine code below
├── assets/
│   ├── preview-thumbnail.jpg  # Link-preview image
│   └── README.md
├── .nojekyll      # Tells GitHub Pages to serve files untouched
└── README.md
```

### What happens when she opens it
1. **Browser tab / link preview** says *"Etsy Hacked: Resellers Beware"* (the decoy — it only lives in `<head>` and `assets/preview-thumbnail.jpg`).
2. **Opening screen** — *"GIO IS FEELING DOWN. IMMEDIATE CHEER-UP PROTOCOL INITIATED."* → 🔬 **Show me the scientific evidence** → loading sequence → dashboard.
3. **Dashboard** — ticker tape, KPI tiles, doughnut/pie/bar/line charts (they animate as they scroll into view), the Thiccness Analytics Division (the gauge needle breaks), MissingYou.exe crashing, and the Classified Intelligence notes.

## Personalising — edit `CONFIG` in `script.js`

Everything text-related is in the `CONFIG` object at the very top of `script.js`. You never need to touch the HTML.

| Key | What it controls |
| --- | --- |
| `girlfriendName` | Her name (default **Gio**) — used in the headline and ticker |
| `nickname` | Available as `{nickname}` in any text |
| `yourName` | Footer |
| `relationshipStart` | `YYYY-MM-DD`, or an approximation like `"± 30 days"` (shown as "± 30") — drives "Days of research" and the adoration-over-time x-axis |
| `opening` | Headline, subheading and message on the first screen |
| `loading` | Loading messages and the final "ANALYSIS COMPLETE" line |
| `ticker`, `kpis` | Stock-ticker items and the four stat tiles |
| `charts.*` | Labels, values and captions for every chart |
| `thicc` | Index number, classification, readings, conclusion, disclaimer |
| `missingYou` | Status messages and the error text |
| `classified.messages` | The sincere notes |

**Placeholders** you can use in any text: `{name}`, `{NAME}` (caps), `{nickname}`, `{me}`, `{days}`.

Tips
- Chart values don't need to add up to 100 — Chart.js computes slices proportionally.
- In `charts.top10.values`, anything above 100 renders as "off the chart".
- Emojis work anywhere.

## Social-sharing thumbnail

See [`assets/README.md`](assets/README.md). The current thumbnail is already in `assets/preview-thumbnail.jpg` (1200×670). To swap it, overwrite that file.
The `og:image` URL in `index.html` is absolute (link scrapers require that). If you rename the repo or add a custom domain, update the three `https://…github.io/…` URLs in the `<head>`.

## Updating the live site

GitHub Pages redeploys automatically ~1 minute after every push to `main`.
Browsers may cache files for up to 10 minutes; to force everyone onto new CSS/JS, bump the `?v=` number on the `style.css` and `script.js` links in `index.html`.

## Running locally

Just open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Accessibility

- Respects `prefers-reduced-motion` (floating hearts, chart animations and timers are toned down or skipped).
- Buttons are real `<button>`s with focus styles.
