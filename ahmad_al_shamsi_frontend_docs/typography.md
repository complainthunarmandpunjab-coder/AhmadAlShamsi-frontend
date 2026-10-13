# Typography System

Typography should feel like a refined real-estate editorial: elegant serif headlines paired with a clean, highly legible sans-serif interface. Avoid heavy bold weights and overly futuristic typefaces.

## Recommended font pairing
- **Headlines:** `Cormorant Garamond` or `DM Serif Display`
- **Body, UI, forms, navigation:** `DM Sans` or `Inter`
- Use one headline family and one interface family only. Prefer self-hosted WOFF2 files where licensing permits.

## Type tokens

| Token | Desktop target | Mobile target | Weight / line height |
|---|---:|---:|---|
| Display / hero H1 | 56–72 px | 36–44 px | 400–500 / 0.98–1.08 |
| H1 page title | 48–60 px | 34–40 px | 400–500 / 1.05 |
| H2 section title | 36–44 px | 28–34 px | 400–500 / 1.08–1.18 |
| H3 card title | 22–28 px | 20–24 px | 400–500 / 1.2 |
| Body lead | 18–21 px | 17–19 px | 400 / 1.5–1.65 |
| Body | 15–17 px | 15–16 px | 400 / 1.55–1.75 |
| Navigation | 12–14 px | 15–16 px | 500 / 1.2 |
| Eyebrow / metadata | 10–12 px | 10–12 px | 500, uppercase, letter spacing 0.12–0.18em |
| Button | 12–14 px | 13–15 px | 500 / 1.2 |

Use fluid sizes with `clamp()` rather than hard-coded jumps wherever practical.

```css
:root {
  --font-heading: "Cormorant Garamond", Georgia, serif;
  --font-body: "DM Sans", Arial, sans-serif;
  --text-display: clamp(2.35rem, 5vw, 4.5rem);
  --text-h1: clamp(2.1rem, 4.2vw, 3.75rem);
  --text-h2: clamp(1.75rem, 3vw, 2.75rem);
  --text-h3: clamp(1.25rem, 1.8vw, 1.75rem);
  --text-body: clamp(0.9375rem, 1.1vw, 1.0625rem);
}
```

## Typesetting rules
- Use sentence case for most UI; use uppercase only for small eyebrow labels.
- Use serif display headings with modest tracking, not ultra-bold condensed headings.
- Keep body copy measure around 45–75 characters per line.
- Limit all-caps navigation labels and avoid all-caps paragraphs.
- Use proper typographic punctuation and currency formatting appropriate to the target market.
- Do not convert logos into text or substitute a different logo mark.
- Confirm font licensing and loading behavior before launch; provide system fallbacks.
