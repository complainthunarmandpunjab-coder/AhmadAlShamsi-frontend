# Sitemap and Page Requirements

Build a real multi-page site. The homepage introduces the brand and routes visitors toward listings, communities, off-plan projects, and advisor contact; it must not contain the only version of all content.

## Recommended route map

| Page | Suggested route | Primary purpose |
|---|---|---|
| Home | `/{locale}/` | Brand introduction and property discovery |
| All properties | `/{locale}/properties/` | Search, filters, sorting, pagination |
| Property detail | `/{locale}/properties/{slug}/` | Full listing details and inquiry |
| Communities index | `/{locale}/communities/` | Explore locations |
| Community detail | `/{locale}/communities/{slug}/` | Location guide, amenities, listings |
| Off-plan index | `/{locale}/off-plan/` | Discover new developments |
| Off-plan project detail | `/{locale}/off-plan/{slug}/` | Developer, payment plan, completion details |
| Services index | `/{locale}/services/` | Overview of real-estate services |
| Service detail | `/{locale}/services/{slug}/` | Dedicated SEO landing page for each service |
| About | `/{locale}/about/` | Company, advisor, credentials, approach |
| Insights index | `/{locale}/insights/` | Market guides and useful editorial content |
| Article detail | `/{locale}/insights/{slug}/` | Searchable article with author/date |
| Contact | `/{locale}/contact/` | Contact details and inquiry form |
| Privacy | `/{locale}/privacy-policy/` | Privacy notice |
| Terms | `/{locale}/terms/` | Terms of use |
| Not found | framework 404 | Helpful recovery links |

## Homepage content modules
- Header and main navigation
- Hero with two CTAs
- Property search panel
- Community list/gallery
- Featured property
- Advisor/trust section
- Verified testimonials or alternative proof points
- Closing CTA banner
- Footer

## Property listing page
- Introductory H1 and short unique paragraph
- Filter controls: buy/rent, area, type, beds, price, availability
- Sort options and result count
- Listing grid with image, title, location, key facts, and price
- Pagination or crawlable pagination links where appropriate
- Empty state, loading state, and filter reset
- Canonical URL rules for filter combinations to avoid index bloat

## Property detail page
- Unique H1 and image gallery
- Price and availability, if verified and current
- Location, type, bedrooms, bathrooms, area, furnishing/parking only when supplied
- Description, features, location context, map if accurate
- Inquiry CTA with property ID/slug included
- Related listings
- Breadcrumbs and unique metadata
- Appropriate structured data only when eligible and accurate

## Community detail page
- Unique location introduction
- Gallery and location map
- Lifestyle/amenities, transport, schools, attractions only when verified
- Available properties linked to detail pages
- FAQs based on genuine common questions
- Related communities

## Services
Create individual pages only for services the company actually provides, such as buying, selling, renting, property management, investment advisory, or off-plan guidance. Do not publish a service merely because it is listed here as an example.

## Internationalization
- Choose supported locales from actual business requirements (for example English and Arabic only if translations and RTL QA are available).
- Use locale-prefixed URLs and correct `hreflang` relationships.
- Arabic pages require correct `dir="rtl"` and a tested layout; do not merely translate labels.
- Keep language switching on the equivalent page when a translation exists; otherwise direct users to the locale homepage or a relevant fallback.
