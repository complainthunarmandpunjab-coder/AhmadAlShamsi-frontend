# Visual Design and UX Direction

## Design concept
A luxury real-estate editorial website with the confidence of an established local advisor and the polish of an international property brand. The reference image provides the visual direction: a warm ivory canvas, restrained gold details, dark ink typography, high-quality waterfront/property photography, spacious layouts, fine dividers, and calm navigation.

## Global layout
- Maximum content width: approximately 1280–1440 px on large screens.
- Side padding: 5–6vw on desktop, 24 px on tablet, 16–20 px on small phones.
- Section spacing: 80–120 px desktop, 56–80 px tablet, 40–56 px mobile.
- Use asymmetrical editorial grids rather than a wall of identical cards.
- Use thin neutral borders and occasional low-elevation shadows.
- Images should be genuine property/location photography, with consistent color grading and deliberate crops.

## Header
- Light ivory header with original company logo on the left.
- Primary navigation: Properties, Communities, Off-Plan, Services, About.
- Right side: language switcher, WhatsApp/contact shortcut, and a compact menu control if needed.
- Keep header height around 72–88 px desktop; reduce on mobile.
- Sticky header is optional; if enabled, keep it unobtrusive and avoid a large shadow.
- Mobile navigation must be keyboard accessible and trap focus only while the modal menu is open.

## Homepage sequence
1. **Hero:** wide waterfront/property image, copy column with an H1, short supporting sentence, primary and secondary CTA. On desktop, preserve negative space on the left for text; on mobile, use a separate crop or image overlay to keep copy readable.
2. **Property search:** compact, high-contrast search panel with Buy / Rent / Off-plan tabs, location, property type, bedrooms, price, and Search. Controls must be functional, labeled, and usable on mobile.
3. **Communities:** editorial split layout with a list of community links, one featured location image, and a simplified map/location panel.
4. **Featured property:** large image paired with concise facts, price, property type, location, and View Property CTA. Only use verified data.
5. **Advisor/trust section:** concise local expertise copy with a real advisor/team portrait if supplied.
6. **Testimonials:** use only approved, genuine reviews with permission. If none exist, omit the section or replace with verified service commitments.
7. **Closing CTA:** panoramic waterfront image with restrained overlay and a single clear CTA.
8. **Footer:** dark ink/navy surface, logo, navigation, contact details, social links, legal links, and copyright.

## Image rules
- Do not bake headings, buttons, or logos into the background image.
- Provide responsive `srcset`/sizes or the framework image component.
- Use meaningful alt text for informative images; use empty alt text for purely decorative backgrounds.
- Avoid stock-photo repetition. Each property and community should have relevant imagery.
- Prefer WebP/AVIF where supported, with a suitable fallback and sensible compression.
- Do not use a screenshot of the complete reference page as the live hero image.

## Interaction style
- Buttons: square or subtly rounded corners (2–4 px), not pill-shaped by default.
- Hover: small color shift, underline, or 1–2 px movement; avoid bounce effects.
- Cards: image hover may use a slight scale (maximum ~1.03), with no layout shift.
- Use clear active states for navigation and filters.
- Avoid generic gradients, excessive blur, floating neon elements, chatbot-like decorative UI, emoji, and unnecessary icon decoration.
