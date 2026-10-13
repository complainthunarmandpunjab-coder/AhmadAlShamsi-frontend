# Responsive Layout Rules

## Breakpoints
Use content-driven breakpoints. Suggested starting points:
- Small phone: under 480 px
- Phone / large phone: 480–767 px
- Tablet: 768–1023 px
- Desktop: 1024–1439 px
- Wide desktop: 1440 px and above

These are design targets, not rigid device categories. Adjust when real content requires it.

## Header
- Desktop: logo, primary navigation, locale and contact shortcuts.
- Tablet: reduce gaps; move lower-priority links into a menu when needed.
- Mobile: logo plus menu/contact controls; all navigation links remain available in the menu.
- Ensure touch targets are at least 44 × 44 CSS px where practical.

## Hero
- Desktop: two-column or overlay composition with left-side copy and waterfront image extending to the right.
- Tablet: slightly smaller headline and narrower copy width.
- Mobile: use a carefully art-directed crop or dedicated portrait crop; keep heading and CTA readable.
- Avoid putting essential text over busy parts of the image without a contrast overlay.
- Set a reasonable minimum hero height, but avoid forcing a 100vh hero on short mobile screens.

## Search panel
- Desktop: compact horizontal form.
- Tablet: two-column or wrapping grid.
- Mobile: stacked fields with full-width search button and clear labels.
- Do not hide essential filters on mobile without an accessible way to open them.

## Grids and cards
- Community section: desktop editorial split layout; stack in reading order on mobile.
- Property cards: 3 columns wide desktop, 2 tablet, 1 phone as a baseline; tune to content and image aspect ratio.
- Featured property: side-by-side on desktop, stacked on mobile.
- Testimonials: avoid tiny horizontally squeezed cards; use a readable stack or accessible carousel.

## QA
Test at 320, 360, 390, 768, 1024, 1280, and 1440 px widths, plus zoom at 200%.
Prevent horizontal overflow, clipped controls, unreadable metadata, and overlapping fixed widgets.
