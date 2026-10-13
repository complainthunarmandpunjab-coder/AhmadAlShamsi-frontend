import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        properties: "Properties",
        communities: "Communities",
        offPlan: "Off-Plan",
        services: "Services",
        about: "About",
        contact: "Contact",
      },
      hero: {
        title: "PROPERTY EXPERTISE.<br />ROOTED IN SHARJAH.",
        subtitle: "Helping you buy, rent and manage property with confidence across Sharjah.",
        explore: "Explore Properties",
        speak: "Speak With an Advisor",
      },
      search: {
        buy: "BUY",
        rent: "RENT",
        offPlan: "OFF-PLAN",
        location: "Location",
        selectLocation: "Select Location",
        propertyType: "Property Type",
        selectType: "Select Type",
        bedrooms: "Bedrooms",
        price: "Price",
        searchBtn: "Search Properties"
      },
      featured: {
        tag: "Featured Property",
        viewProperty: "View Property",
        sqft: "sq ft"
      },
      communities: {
        tag: "The places we know",
        title: "COMMUNITIES<br />WE CALL HOME.",
        exploreIn: "Explore Properties in",
        family: "Family-friendly master development",
        location: "Prime accessibility to major UAE highways",
        amenities: "World-class leisure, shopping & parks"
      },
      rentals: {
        tag: "Rental & Property Care",
        title: "WORRY-FREE RENTALS & PROPERTY MANAGEMENT",
        subtitle: "Comprehensive tenant placement, legal Ejari registration, and rent collection."
      },
      team: {
        tag: "Our Experienced Advisors",
        title: "MEET OUR TEAM",
        subtitle: "Dedicated Sharjah specialists offering transparent guidance."
      },
      reviews: {
        tag: "Verified Google Reviews",
        title: "WHAT OUR CLIENTS SAY",
        basedOn: "Based on 120+ reviews on Google",
        viewAll: "View all reviews on our Google Business Profile"
      },
      footer: {
        realEstate: "Real Estate",
        terms: "Terms & Conditions",
        privacy: "Privacy Policy",
        rights: "© 2024 Ahmad Al Shamsi Real Estate. All rights reserved.",
        ctaTitle: "MAKE SHARJAH HOME.",
        ctaSub: "Your next chapter starts with local knowledge."
      },
      chat: "WhatsApp Chat Now"
    }
  },
  ar: {
    translation: {
      nav: {
        properties: "العقارات",
        communities: "المناطق والمجتمعات",
        offPlan: "قيد الإنشاء",
        services: "الخدمات",
        about: "من نحن",
        contact: "اتصل بنا",
      },
      hero: {
        title: "خبرة عقارية.<br />متأصلة في الشارقة.",
        subtitle: "نساعدك على الشراء والتأجير وإدارة عقاراتك بثقة في جميع أنحاء الشارقة.",
        explore: "استكشف العقارات",
        speak: "تحدث مع مستشار",
      },
      search: {
        buy: "شراء",
        rent: "إيجار",
        offPlan: "قيد الإنشاء",
        location: "الموقع",
        selectLocation: "اختر الموقع",
        propertyType: "نوع العقار",
        selectType: "اختر النوع",
        bedrooms: "غرف النوم",
        price: "السعر",
        searchBtn: "بحث في العقارات"
      },
      featured: {
        tag: "عقار مميز",
        viewProperty: "عرض تفاصيل العقار",
        sqft: "قدم مربع"
      },
      communities: {
        tag: "مناطق نعرفها بعمق",
        title: "مجتمعات<br />نعتبرها موطننا.",
        exploreIn: "استكشف العقارات في",
        family: "بيئة مثالية للعائلات بمواصفات عالمية",
        location: "موقع استراتيجي وسهولة وصول للطرق السريعة",
        amenities: "مرافق ترفيهية وخدمية ومساحات خضراء"
      },
      rentals: {
        tag: "خدمات التأجير والإدارة",
        title: "إدارة تأجير احترافية ومربحة",
        subtitle: "خدمات متكاملة تشمل تدقيق المستأجرين، توثيق العقود، وتحصيل الشيكات والصيانة."
      },
      team: {
        tag: "فريق عملنا المتخصص",
        title: "تعرف على فريقنا",
        subtitle: "مستشارون محليون بخبرة عقارية عميقة في الشارقة."
      },
      reviews: {
        tag: "تقييمات موثقة من جوجل",
        title: "آراء عملائنا الحقيقية",
        basedOn: "استناداً إلى أكثر من 120 تقييماً في جوجل",
        viewAll: "عرض كافة التقييمات على صفحتنا في جوجل"
      },
      footer: {
        realEstate: "للعقارات",
        terms: "الشروط والأحكام",
        privacy: "سياسة الخصوصية",
        rights: "© 2024 أحمد الشامسي للعقارات. جميع الحقوق محفوظة.",
        ctaTitle: "اجعل الشارقة موطنك.",
        ctaSub: "خطوتك العقارية القادمة تبدأ من خبرتنا المحلية الموثوقة."
      },
      chat: "تحدث عبر واتساب"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
