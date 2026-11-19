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
│   └── README.md  # Drop preview-thumbnail.jpg here (link-preview image)
├── .nojekyll      # Tells GitHub Pages to serve files untouched
└── README.md
```

### What happens when she opens it
1. **Browser tab / link preview** says *"Etsy Hacked: Resellers Beware"* (the decoy — it only lives in `<head>`).
2. **Opening screen** — *"GIO IS FEELING DOWN. IMMEDIATE CHEER-UP PROTOCOL INITIATED."* with two buttons:
   - 🚨 **Emergency Happiness Protocol** → hearts everywhere, status log, *"YOU ARE LOVED. MORE THAN YOU KNOW. ♡"*, a hug counter, and a button back.
   - 🔬 **Show me the scientific evidence** → loading sequence → dashboard.
3. **Dashboard** — ticker tape, KPI tiles, doughnut/pie/bar/line charts (animate as they scroll into view), the Thiccness Analytics Division (gauge whose needle breaks), happiness forecast (today is highlighted), MissingYou.exe crashing, a compliment generator, the Classified Intelligence notes, and the certificate with a CSS seal.

The 🚨 button stays in the top bar so the emergency protocol is always one tap away.

## Personalising — edit `CONFIG` in `script.js`

Everything text-related is in the `CONFIG` object at the very top of `script.js`. You never need to touch the HTML.

| Key | What it controls |
| --- | --- |
| `girlfriendName` | Her name (default **Gio**) — used in the headline, ticker and certificate |
| `nickname` | Available as `{nickname}` in any text |
| `yourName` | Signature on the certificate + footer |
| `relationshipStart` | `YYYY-MM-DD` — drives "Days of research" and the love-over-time x-axis |
| `opening` | Headline, subheading and message on the first screen |
| `emergency` | Protocol messages, timing, final message, hug count |
| `loading` | Loading messages and the final "ANALYSIS COMPLETE" line |
| `ticker`, `kpis` | Stock-ticker items and the four stat tiles |
| `charts.*` | Labels, values and captions for every chart |
| `thicc` | Index number, classification, readings, conclusion, disclaimer |
| `forecast` | Seven days: `icon`, `temp` (big word), `text` |
| `missingYou` | Status messages and the error text |
| `compliments` | Messages for the compliment generator (add as many as you like) |
| `classified.messages` | The sincere notes |
| `certificate` | Title, body, classification, signature |

**Placeholders** you can use in any text: `{name}`, `{NAME}` (caps), `{nickname}`, `{me}`, `{days}`.

Tips
- Chart values don't need to add up to 100 — Chart.js computes slices proportionally.
- In `charts.top10.values`, anything above 100 renders as "off the chart".
- Emojis work anywhere (forecast icons, compliments, notes).

## Social-sharing thumbnail

See [`assets/README.md`](assets/README.md). Short version: upload a 1200×630 `preview-thumbnail.jpg` into `assets/`.
The `og:image` URL in `index.html` is absolute (link scrapers require that). If you rename the repo or add a custom domain, update the three `https://…github.io/…` URLs in the `<head>`.

## Running locally

Just open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Accessibility

- Respects `prefers-reduced-motion` (floating hearts, chart animations and timers are toned down or skipped).
- Buttons are real `<button>`s with focus styles; `Esc` closes the emergency overlay.
