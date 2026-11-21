# website-mensa-summit

Website for the **Mensa Summit 2027**, 14–15 May 2027 in Konstanz (arrival 13 May, departure 16 May), organised by MENSArevolution, Green Office Konstanz and netzwerk n.

A static site with no build step and no dependencies: open `index.html` in a browser.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page: hero with countdown, hard facts, idea, audience, programme, how to join, homestay, travel, signup, FAQ, organisers |
| `config.js` | **Everything still open**: contact address, registration link and the links of the other buttons. Without a link, a button opens a prepared mail |
| `styles.css` | Look, in the MENSArevolution palette (lime `#83a603`, forest `#394b1f`, pink `#f16376`, sun `#f6bf69`, mint `#8acd8f`) and the Heebo font |
| `script.js` | Countdown, mobile menu, links from `config.js`, reveal on scroll |
| `impressum.html` | Impressum and privacy page, **with TODOs to fill in before going live** |
| `assets/` | Self-hosted font (no Google Fonts, so no GDPR issue), favicon, share image, calendar file (`.ics`), MENSArevolution wordmark |

## Before going live

1. Fill in the Impressum (responsible organisation or person with address) in `impressum.html`.
2. Confirm the contact address in `config.js`.
3. Once the registration form exists, set `registration` in `config.js`.
4. Set `og:image` in `index.html` to the absolute URL once the domain is known (share previews need it).
5. Add the detailed programme and the venue to `index.html` once they are set.

## Hosting

Any static host works: GitHub Pages (needs a public repo on a free plan), Netlify or Cloudflare Pages. No build command; the publish directory is the repo root.
