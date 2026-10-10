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
        subtitle: "Helping you buy, rent and invest with confidence across Sharjah.",
        explore: "Explore Properties",
        speak: "Speak With an Advisor",
      },
      footer: {
        realEstate: "Real Estate",
        terms: "Terms & Conditions",
        privacy: "Privacy Policy",
        rights: "© 2024 Ahmad Al Shamsi Real Estate. All rights reserved.",
      },
      chat: "WhatsApp Chat Now"
    }
  },
  ar: {
    translation: {
      nav: {
        properties: "عقارات",
        communities: "المجتمعات",
        offPlan: "قيد الإنشاء",
        services: "خدمات",
        about: "معلومات عنا",
        contact: "اتصل بنا",
      },
      hero: {
        title: "خبرة عقارية.<br />متأصلة في الشارقة.",
        subtitle: "نساعدك على الشراء والتأجير والاستثمار بثقة في جميع أنحاء الشارقة.",
        explore: "استكشف العقارات",
        speak: "تحدث مع مستشار",
      },
      footer: {
        realEstate: "للعقارات",
        terms: "الشروط والأحكام",
        privacy: "سياسة الخصوصية",
        rights: "© 2024 أحمد الشامسي للعقارات. جميع الحقوق محفوظة.",
      },
      chat: "تحدث عبر واتساب"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
