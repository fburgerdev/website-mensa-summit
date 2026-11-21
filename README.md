# website-mensa-summit

Website for the **Mensa Summit 2027**, 14–15 May 2027 in Konstanz (arrival 13 May, departure 16 May), organised by MENSArevolution, Green Office Konstanz and netzwerk n.

Live: https://fburgerdev.github.io/website-mensa-summit/ (GitHub Pages, published from `main`, repo root).

A static site with no build step and no dependencies: open `index.html` in a browser.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page: hero with countdown, hard facts, idea, audience, programme, orga team, how to join, homestay, travel, signup, FAQ, organisers |
| `config.js` | **Everything that changes**: contact address, orga meetings, registration link and the links of the other buttons. Without a link, a button opens a prepared mail |
| `styles.css` | The look of the @mensasummit Instagram posts: dark `#162b2e`, mint `#3ae189`, leaf `#1a7a4a`, pink `#fa52a3`, orange `#fa9a4b`, lime `#e9f90b`, cream `#fbfdea`; tilted labels; Comfortaa |
| `script.js` | Countdown, next orga meeting, mobile menu, links from `config.js`, reveal on scroll |
| `impressum.html` | Impressum (still empty) and privacy notice |
| `assets/` | Logo cut from the Save-the-Date post, icon from the Instagram profile picture, self-hosted font (no Google Fonts), share image, calendar file (`.ics`), MENSArevolution wordmark |

## Updating

- New orga meeting: add a line to `orgaMeetings` in `config.js`. The page shows the next one by itself.
- Registration form live: set `registration`, `registrationLabel` and `registrationNote` in `config.js`.
- Programme and venue: edit the "Programm" and "Anreise" sections in `index.html`.

## Still open

- The Impressum in `impressum.html` (responsible organisation or person with address, § 5 DDG).
