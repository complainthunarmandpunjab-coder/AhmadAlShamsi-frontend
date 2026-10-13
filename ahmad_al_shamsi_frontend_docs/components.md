# Reusable Component Specifications

## Layout
- `Container`: consistent max-width and responsive side padding.
- `SectionHeading`: optional eyebrow, heading, and short intro.
- `SiteHeader`: logo, navigation, locale switcher, contact shortcut, mobile menu.
- `SiteFooter`: key navigation, contact, socials, legal links, copyright.
- `Breadcrumbs`: visible, accessible hierarchy for internal pages.

## Calls to action
- `Button`: primary, secondary, text/link variants; visible focus state; loading/disabled states.
- Primary: ink background, white label, restrained arrow treatment if helpful.
- Secondary: transparent/paper background, ink border, ink label.
- Avoid using arrows as a substitute for accessible link labels.

## Property search
- `PropertySearchPanel`: tabs for Buy / Rent / Off-plan and a semantic form.
- `SelectField`: visible label, keyboard operation, clear selected state.
- `PriceRange`: validated numeric values and currency displayed explicitly.
- Search must update URL query parameters where appropriate, support refresh/share, and have a clear empty state.

## Property cards
- `PropertyCard`: image, status only if verified, title, location, property type, key facts, price, detail link.
- Do not place critical facts only inside hover states.
- Images should maintain consistent aspect ratios; use `object-fit: cover`.
- Avoid false scarcity labels such as “Only 2 left” unless backed by live data.

## Property detail
- `PropertyGallery`: keyboard-accessible thumbnails/lightbox; meaningful image descriptions.
- `PropertyFacts`: concise list of known property facts.
- `InquiryForm`: name, email/phone as appropriate, message, consent notice, validation, success and error states.
- `WhatsAppLink`: open the configured official number using a valid `https://wa.me/` URL; never invent the number.

## Community
- `CommunityCard`: image, name, short verified description, detail link.
- `CommunityMap`: use a legitimate map provider or a carefully designed static map. Include a textual location fallback.
- Do not create a fake map that implies exact boundaries or location data.

## Testimonials and trust
- Display genuine, permissioned reviews only.
- Include reviewer name/initials and role only with explicit approval.
- Do not generate fake faces, fake customer identities, fabricated quotes, or invented star ratings.
- If genuine testimonials are unavailable, show verified process commitments, service details, or actual credentials.

## Icons
- Use a consistent, licensed icon set such as Lucide, or inline SVG for a small number of simple symbols.
- Use icons only when they improve recognition or comprehension.
- Do not use emoji as UI icons; avoid decorative icon clusters.
