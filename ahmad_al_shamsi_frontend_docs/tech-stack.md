# Recommended Technology Stack

## Core
- **Next.js App Router** for server rendering, routing, metadata, sitemap, and internationalized route organization.
- **TypeScript** for safer data models and component contracts.
- **CSS Modules, global CSS variables, or Tailwind CSS** — choose one main styling approach and keep the design tokens centralized.
- **Framer Motion** for restrained motion on selected client components.
- **Zod** or a similar schema validator for inquiry/search inputs.
- **React Hook Form** only if the inquiry forms become complex; simple forms can use native validation.

## Data and integrations
- Start with a typed local content/data layer if listings are manually maintained.
- For a larger inventory, connect to a real CRM/property feed/API and define caching/revalidation rules.
- Use a validated server route or server action for form submission; protect against spam and validate on the server.
- Store secrets only in environment variables, never in client-side code.
- Use a real map provider only when location data and licensing are available.
- Add analytics and consent controls based on the target market's legal requirements.

## Performance
- Use the framework's image component and responsive image sizing.
- Self-host fonts where licensing permits; preload only critical font files.
- Keep client components small and avoid importing the whole UI library into the homepage.
- Lazy-load below-the-fold media; prioritize the main hero image.
- Use caching and revalidation for property and community content where appropriate.

## Engineering quality
- ESLint and formatting configured from the start.
- Add automated checks for build, lint, type errors, and broken routes.
- Validate forms and API inputs on the server.
- Include loading, error, empty, and success states for every dynamic feature.
- Avoid fake placeholder interactions. If a feature is not implemented, label it as a development task rather than presenting it as working.
