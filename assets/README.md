# assets/

Reserved for the **social-sharing thumbnail** — the image that shows up when the link is pasted into WhatsApp, iMessage, Messenger, X, Discord, etc.

## Adding your thumbnail

1. Make an image **1200 × 630 px** (JPG, ideally under 300 KB).
2. Name it exactly **`preview-thumbnail.jpg`**.
3. Put it in this folder (`assets/preview-thumbnail.jpg`) and commit/push (or use GitHub's **Add file → Upload files** button inside this folder).
4. Wait ~1 minute for GitHub Pages to redeploy, then check it's live at
   `https://<your-username>.github.io/<repo>/assets/preview-thumbnail.jpg`.

Want a different file name or a PNG? Change the `og:image` and `twitter:image` lines in the `<head>` of `index.html` to match.

## If the old preview keeps showing

Chat apps cache link previews aggressively. Tricks that help:
- Add a throwaway query string when you send the link, e.g. `…/news-today/?v=2`.
- Facebook/Messenger: re-scrape at https://developers.facebook.com/tools/debug/
- Test what scrapers see at https://www.opengraph.xyz/

> This image is **only** used for link previews. The website itself deliberately uses no images at all.
