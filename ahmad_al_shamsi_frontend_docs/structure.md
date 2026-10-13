# Project Structure

Recommended stack: Next.js App Router + TypeScript + CSS variables (or Tailwind CSS using the same tokens) + Framer Motion. Keep page content and property data separate from presentational components.

```text
src/
  app/
    [locale]/
      layout.tsx
      page.tsx
      properties/
        page.tsx
        [slug]/
          page.tsx
      communities/
        page.tsx
        [slug]/
          page.tsx
      off-plan/
        page.tsx
        [slug]/
          page.tsx
      services/
        page.tsx
        [slug]/
          page.tsx
      about/
        page.tsx
      insights/
        page.tsx
        [slug]/
          page.tsx
      contact/
        page.tsx
      privacy-policy/
        page.tsx
      terms/
        page.tsx
    api/
      inquiry/route.ts
      property-search/route.ts
  components/
    layout/
      SiteHeader.tsx
      SiteFooter.tsx
      MobileNavigation.tsx
      LanguageSwitcher.tsx
      WhatsAppLink.tsx
    home/
      Hero.tsx
      PropertySearchPanel.tsx
      CommunitiesSection.tsx
      FeaturedProperty.tsx
      TrustSection.tsx
      TestimonialsSection.tsx
      ClosingBanner.tsx
    property/
      PropertyCard.tsx
      PropertyGrid.tsx
      PropertyFilters.tsx
      PropertyGallery.tsx
      PropertyFacts.tsx
      InquiryForm.tsx
    community/
      CommunityCard.tsx
      CommunityMap.tsx
    ui/
      Button.tsx
      Container.tsx
      SectionHeading.tsx
      Breadcrumbs.tsx
      SelectField.tsx
      FormField.tsx
      Pagination.tsx
  content/
    navigation.ts
    properties/
    communities/
    services/
    insights/
  lib/
    seo/
      metadata.ts
      structured-data.ts
      hreflang.ts
    validation/
    analytics/
  styles/
    tokens.css
    globals.css
public/
  images/
    hero/
    properties/
    communities/
    team/
  fonts/
  icons/
```

## Architecture principles
1. **One route per meaningful page.** Property, community, service, and article detail pages need their own crawlable URLs.
2. **Data-driven pages.** Use shared templates with unique content and metadata for each property/community/service.
3. **Server-rendered by default.** Use server components for content pages and reserve client components for filters, menus, galleries, and motion.
4. **Clean separation.** Content data must not be hard-coded inside large page components.
5. **Reusable design system.** Header, footer, typography, buttons, cards, filters, and section spacing should use shared tokens.
6. **No fake integrations.** Search, language switching, contact forms, and WhatsApp links must work and have proper loading/error/success states.
7. **Keep dependencies lean.** Do not add a heavy animation, icon, or UI library when a small solution is enough.
