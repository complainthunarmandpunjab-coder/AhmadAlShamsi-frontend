# Implementation Roadmap and Acceptance Criteria

## Phase 1 — Foundation
- Create Next.js + TypeScript project and locale route structure.
- Add color and typography tokens.
- Add global layout, container, button, header, footer, and responsive navigation.
- Configure linting, formatting, environment variables, and image handling.

**Acceptance:** builds cleanly; all routes have a shared layout; no horizontal overflow at common widths.

## Phase 2 — Homepage visual build
- Create the hero with real, clean image assets and HTML copy layered separately.
- Add property search panel.
- Build community feature, featured property, trust/advisor, testimonials-or-proof, closing CTA, and footer.
- Match spacing, restrained gold rules, warm ivory background, serif headings, and dark navy actions.

**Acceptance:** close visual alignment with the reference without copying the entire screenshot as one image; mobile hero remains readable; all CTAs have real destinations.

## Phase 3 — Listings and detail templates
- Build property listing filters, sort, pagination, and empty states.
- Build property detail page with gallery, verified facts, inquiry form, related listings.
- Build community index/detail and off-plan index/detail templates.
- Add service detail pages and insights templates as required by actual business offerings.

**Acceptance:** each page has a unique URL, title, description, H1, canonical, and internal links.

## Phase 4 — Functionality
- Connect search to a real data source.
- Connect forms to an approved CRM/email endpoint with server-side validation and spam protection.
- Configure official WhatsApp contact URL and locale switching.
- Add analytics and consent handling where required.

**Acceptance:** search and forms work end-to-end; errors are accessible; no secrets are exposed in the browser.

## Phase 5 — SEO and internationalization
- Implement metadata templates, sitemap, robots, canonical URLs, Open Graph, breadcrumbs, structured data, and hreflang.
- Prepare English first; add Arabic only when translations and RTL testing are ready.
- Add redirects for any existing URLs being replaced.
- Create genuinely useful community and market content.

**Acceptance:** no duplicate title/description on indexable pages; all sitemap URLs return 200; structured data is accurate and validated.

## Phase 6 — Quality and launch
- Test keyboard access, focus states, reduced motion, and screen reader basics.
- Test responsive widths and 200% zoom.
- Run performance audits and optimize LCP/INP/CLS.
- Check image rights, company details, contact information, legal copy, analytics, 404, and redirect behavior.
- Submit sitemap to search engines after launch.

**Launch checklist**
- [ ] No fabricated reviews, prices, contact information, licenses, or listing facts.
- [ ] All links, buttons, filters, forms, and language controls work.
- [ ] Every important page is reachable through internal links.
- [ ] Metadata and canonical URLs are unique and correct.
- [ ] Images are compressed, responsive, and correctly described.
- [ ] Reduced-motion and keyboard behavior verified.
- [ ] English and any additional locale have been reviewed by a fluent human.
