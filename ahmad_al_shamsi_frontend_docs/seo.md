# SEO and International Search Requirements

SEO should be designed into the route structure and templates, not added as a last-minute plugin.

## Technical foundations
- Use Next.js metadata APIs or an equivalent server-rendered metadata system.
- Every indexable page needs a unique title, meta description, canonical URL, and one clear H1.
- Generate XML sitemap(s) for canonical, indexable URLs only.
- Configure `robots.txt` carefully; do not block required CSS/JS or important page content.
- Use descriptive, stable, lowercase, hyphenated slugs.
- Return real HTTP status codes: 200 for pages, 301/308 for permanent redirects, 404 for missing pages.
- Add Open Graph and social sharing metadata.
- Ensure important copy and links are present in server-rendered HTML.
- Optimize Core Web Vitals: LCP, INP, CLS.
- Use image dimensions, responsive formats, lazy loading below the fold, and priority loading only for the hero/LCP image.
- Add breadcrumbs and a logical internal-linking system.
- Avoid duplicate pages from filter/query combinations. Define canonical and indexing rules.
- Set up Search Console, analytics, and consent handling according to applicable privacy requirements.

## Page metadata templates
- Home: brand + main market/service proposition.
- Property detail: property type + community/location + key distinguishing fact + brand.
- Community detail: community/location guide + brand.
- Off-plan project: project name + location + project type + brand.
- Service page: service + target location + brand.
- Insight article: specific user question/topic + brand.

Titles and descriptions must be unique and truthful. Do not use the same generic description on every route.

## Structured data
Use JSON-LD only when the markup accurately describes visible page content. Consider:
- `Organization` or an appropriate business type for verified company details
- `WebSite` and `BreadcrumbList`
- `Article` for editorial articles with genuine author and publication data
- `RealEstateAgent` only if the business qualifies and details are accurate
- `Product`/`Offer` only if eligible and supported by the actual listing and current facts

Do not add fake review or aggregate-rating structured data. Do not mark up testimonials or prices that are not visible or verifiable. Validate JSON-LD with current official testing tools before launch.

## International SEO
- Use separate, indexable locale URLs, such as `/en/` and `/ar/`, if both languages are genuinely supported.
- Add reciprocal `hreflang` tags for translated equivalents, plus an appropriate `x-default` if useful.
- Use the correct language and direction attributes (`lang`, `dir`).
- Do not auto-redirect every visitor solely by IP in a way that blocks search engines or user choice.
- Translate page titles, descriptions, navigation, image alt text, and relevant structured data; do not translate only the visible body.
- Arabic RTL layouts need manual testing for navigation, forms, punctuation, maps, galleries, and mixed numbers/currency.

## Local SEO
- Publish only verified address, service area, contact details, opening hours, and license information.
- Keep business name/address/phone consistent across the site and reputable listings.
- Add useful community guides and property pages with genuinely unique local information.
- Never create thin doorway pages by swapping place names into identical content.

## Content SEO
- Write for user intent: listings, area guides, buying/renting advice, off-plan explanations, investment considerations, and practical FAQs.
- Use descriptive internal links, not “click here” for every link.
- Provide clear author/reviewer information for market advice and keep time-sensitive claims current.
- Use a sensible redirect plan if existing URLs change.
