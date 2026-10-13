# Accessibility Requirements

Target WCAG 2.2 AA as the baseline.

- Semantic landmarks: `header`, `nav`, `main`, section headings, and `footer`.
- One descriptive H1 per page and logical heading order.
- Keyboard access for all navigation, dropdowns, filters, galleries, and dialogs.
- Visible focus indicators; never remove outlines without a replacement.
- Label every form control; associate validation messages programmatically.
- Use meaningful link text and button labels.
- Maintain sufficient text/background contrast; do not rely on gold alone for state communication.
- Provide text alternatives for meaningful images; decorative backgrounds use empty alt text or CSS backgrounds.
- Use `aria-expanded`, `aria-controls`, and appropriate dialog semantics for the mobile menu.
- Carousels must have pause/previous/next controls where applicable and should not autoplay by default.
- Respect reduced-motion preferences.
- Ensure content remains usable at 200% zoom and on small screens.
- Do not communicate selected filters, errors, or availability through color alone.
- Test with keyboard-only navigation and at least one screen reader before launch.
