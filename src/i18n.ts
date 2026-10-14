import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        buy: "Buy",
        rent: "Rent",
        sell: "Sell",
        offPlan: "Off Plan",
        holidayHomes: "Holiday Homes",
        properties: "Properties",
        communities: "Communities",
        services: "Services",
        about: "About Us",
        contact: "Contact",
      },
      topbar: {
        workingHours: "Saturday - Thursday: 10:00AM - 8:00PM (Friday: Closed)",
        listProperty: "List Your Property"
      },
      searchBox: {
        chooseProperty: "Choose Property:",
        residential: "Residential",
        commercial: "Commercial",
        selectStatus: "Select Status:",
        rent: "Rent",
        buy: "Buy",
        locationEmirate: "Location / Emirate",
        sharjah: "Sharjah",
        maryamIsland: "Maryam Island, Sharjah",
        alKhan: "Al Khan, Sharjah",
        aljada: "Aljada, Sharjah",
        hoshi: "Hoshi, Sharjah",
        alNahda: "Al Nahda, Sharjah",
        selectType: "Select Type",
        flat: "Flat / Apartment",
        house: "House",
        villa: "Villa",
        landPlot: "Land Plot",
        commercialType: "Commercial",
        office: "Office",
        searchBtn: "Search Properties"
      },
      hero: {
        title1: "Uncover the best offers on the real estate",
        sub1: "Let us find your dream home in Sharjah",
        title2: "Luxury Waterfront & Urban Living",
        sub2: "From Maryam Island to Al Khan & Aljada",
        title3: "Hassle-Free Rentals & Property Care",
        sub3: "Professional brokerage with certified local specialists",
        exploreSale: "Properties for sale in Sharjah",
        exploreRent: "Properties for rent in Sharjah",
        previous: "Previous",
        next: "Next"
      },
      featured: {
        badge: "DISCOVER SHARJAH",
        title: "Featured Properties in Sharjah",
        saleTab: "Properties for sale in Sharjah",
        rentTab: "Properties for rent in Sharjah",
        forBuy: "For Buy",
        forRent: "For Rent",
        beds: "Beds",
        baths: "Baths",
        sqft: "sqft",
        viewDetails: "View",
        exploreAllSale: "Explore All Properties For Sale",
        exploreAllRent: "Explore All Rental Properties"
      },
      aboutUs: {
        tag: "ABOUT US",
        title: "Ahmad Al Shamsi Real Estate",
        p1: "At Ahmad Al Shamsi Real Estate, we are more than just a property agency — we are your trusted partner in Sharjah’s ever-evolving real estate market. Specializing in apartment rentals, sales, and the purchase and sale of villas, we offer a full suite of services to help clients navigate every step of their property journey with confidence.",
        p2: "We know that no two clients are alike. That’s why we take a personalized, hands-on approach, tailoring every experience to meet your specific goals. Whether you're searching for your next home, looking to rent out your property, or planning to invest, our experienced team is here to guide you with integrity, care, and deep market knowledge. With Ahmad Al Shamsi Real Estate, you are not just a client — you are part of a relationship built on trust, transparency, and results that speak for themselves.",
        ourStory: "Our Story",
        contactAdvisors: "Contact Advisors",
        yearsBadge: "15+ Years",
        yearsSub: "Trusted Real Estate Authority in Sharjah"
      },
      testimonials: {
        tag: "TESTIMONIALS",
        title: "What Our Clients Say",
        quote: "“Shakeel assisted me in getting a beautiful apartment. He helped me in a way that no one has ever helped me out. He went out of his way to make sure all my requirements were met. He also showed me around since I was not familiar with the area. Highly recommend and a trustworthy real estate agent.”",
        author: "Eshan De Silva",
        role: "Client"
      },
      cta: {
        title: "Ready to find your perfect home for the best price",
        subtitle: "Contact Ahmad Al Shamsi Real Estate today for personalized real estate guidance across Sharjah.",
        speakAdvisor: "Speak With an Advisor",
        sellProperty: "Sell Your Property"
      },
      footer: {
        callDirectly: "Call Directly",
        openingHours: "Opening Hours",
        hoursTiming: "10:00AM to 8:00PM (Sat - Thu)",
        fridayClosed: "Friday - Closed",
        sell: "Sell",
        sellYourProperty: "Sell Your Property",
        sellersGuide: "Seller's Guide",
        freeValuation: "Free Property Valuation",
        holidayHomesShort: "Holiday Homes (Short-Term)",
        buy: "Buy",
        propertyForSale: "Property for Sale",
        commercialProperty: "Commercial Property",
        buyersGuide: "Buyer's Guide",
        offPlanProperty: "Off Plan Property",
        rent: "Rent",
        propertyForRent: "Property for Rent",
        residentialProperty: "Residential Property",
        tenantsGuide: "Tenant's Guide",
        landlordsGuide: "Landlord's Guide",
        other: "Other",
        ourStory: "Our Story",
        ourTeam: "Our Team",
        careers: "Careers",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        copyright: "Copyright © 2023 Ahmad Alshamsi Real Estate. All rights reserved."
      }
    }
  },
  ar: {
    translation: {
      nav: {
        buy: "شراء",
        rent: "إيجار",
        sell: "بيع",
        offPlan: "قيد الإنشاء",
        holidayHomes: "بيوت العطلات",
        properties: "العقارات",
        communities: "المجتمعات",
        services: "الخدمات",
        about: "من نحن",
        contact: "اتصل بنا",
      },
      topbar: {
        workingHours: "السبت - الخميس: 10:00 صباحاً - 8:00 مساءً (الجمعة: مغلق)",
        listProperty: "اعرض عقارك معنا"
      },
      searchBox: {
        chooseProperty: "نوع الملكية:",
        residential: "سكني",
        commercial: "تجاري",
        selectStatus: "الحالة:",
        rent: "إيجار",
        buy: "شراء",
        locationEmirate: "الموقع / الإمارة",
        sharjah: "الشارقة",
        maryamIsland: "جزيرة مريم، الشارقة",
        alKhan: "الخان، الشارقة",
        aljada: "الجادة، الشارقة",
        hoshi: "حوشي، الشارقة",
        alNahda: "النهدة، الشارقة",
        selectType: "اختر نوع العقار",
        flat: "شقة / استوديو",
        house: "منزل",
        villa: "فيلا",
        landPlot: "قطعة أرض",
        commercialType: "عقار تجاري",
        office: "مكتب",
        searchBtn: "بحث في العقارات"
      },
      hero: {
        title1: "اكتشف أفضل العروض في سوق العقارات",
        sub1: "دعنا نجد لك منزل أحلامك في إمارة الشارقة",
        title2: "حياة شاطئية فاخرة وواجهات مائية عصرية",
        sub2: "من جزيرة مريم إلى الخان ومدينة الجادة",
        title3: "حلول تأجير وإدارة أملاك موثوقة ومضمونة",
        sub3: "وساطة واستشارات عقارية موثوقة بإشراف خبراء معتمدين",
        exploreSale: "عقارات للبيع في الشارقة",
        exploreRent: "عقارات للإيجار في الشارقة",
        previous: "السابق",
        next: "التالي"
      },
      featured: {
        badge: "استكشف الشارقة",
        title: "عقارات مميزة في الشارقة",
        saleTab: "عقارات للبيع في الشارقة",
        rentTab: "عقارات للإيجار في الشارقة",
        forBuy: "للبيع",
        forRent: "للإيجار",
        beds: "غرف",
        baths: "حمامات",
        sqft: "قدم²",
        viewDetails: "التفاصيل",
        exploreAllSale: "استكشف جميع العقارات للبيع",
        exploreAllRent: "استكشف جميع عقارات الإيجار"
      },
      aboutUs: {
        tag: "من نحن",
        title: "شركة أحمد الشامسي للعقارات",
        p1: "في شركة أحمد الشامسي للعقارات، نحن أكثر من مجرد وكالة عقارية — نحن شريكك الموثوق في سوق الشارقة العقاري الدائم التطور. متخصصون في تأجير وبيع الشقق وشراء وبيع الفلل، ونقدم مجموعة شاملة من الخدمات لمساعدة العملاء في كل مرحلة من رحلتهم العقارية بكل ثقة.",
        p2: "نحن ندرك أنه لا يوجد عميلان متطابقان؛ ولهذا نتبع نهجاً شخصياً مخصصاً يلائم أهدافك الاستثمارية أو السكنية بدقة. سواء كنت تبحث عن منزلك القادم، أو ترغب في تأجير عقارك، أو تخطط للاستثمار، فإن فريقنا ذو الخبرة العالية مستعد لإرشادك بنزاهة واهتمام ومعرفة سوقية عميقة. مع أحمد الشامسي للعقارات، أنت لست مجرد عميل — أنت جزء من شراكة مبنية على الثقة والشفافية والنتائج الحقيقية.",
        ourStory: "قصتنا",
        contactAdvisors: "تواصل مع المستشارين",
        yearsBadge: "+15 سنة",
        yearsSub: "مرجع عقاري موثوق في إمارة الشارقة"
      },
      testimonials: {
        tag: "آراء العملاء",
        title: "ماذا يقول عملاؤنا",
        quote: "“ساعدني شكيل في الحصول على شقة رائعة وجميلة. لقد قدّم لي مساعدة لم يسبق لأحد أن قدّمها لي من قبل، وبذل جهداً استثنائياً للتأكد من تلبية جميع متطلباتي. كما أخذني في جولة بالمنطقة لأنني لم أكن أعرفها. أنصح به بشدة فهو وكيل عقاري جدير بالثقة.”",
        author: "إيشان دي سيلفا",
        role: "عميل موثق"
      },
      cta: {
        title: "مستعد لإيجاد منزلك المثالي بأفضل سعر؟",
        subtitle: "تواصل مع شركة أحمد الشامسي للعقارات اليوم للحصول على استشارة عقارية مخصصة في الشارقة.",
        speakAdvisor: "تحدث مع مستشار",
        sellProperty: "اعرض عقارك للبيع"
      },
      footer: {
        callDirectly: "اتصال مباشر",
        openingHours: "أوقات الدوام الرسمي",
        hoursTiming: "10:00 صباحاً إلى 8:00 مساءً (السبت - الخميس)",
        fridayClosed: "الجمعة - مغلق",
        sell: "البيع",
        sellYourProperty: "بيع عقارك معنا",
        sellersGuide: "دليل البائع",
        freeValuation: "تقييم عقاري مجاني",
        holidayHomesShort: "بيوت العطلات (قصير الأجل)",
        buy: "الشراء",
        propertyForSale: "عقارات للبيع",
        commercialProperty: "عقارات تجارية",
        buyersGuide: "دليل المشتري",
        offPlanProperty: "عقارات قيد الإنشاء",
        rent: "الإيجار",
        propertyForRent: "عقارات للإيجار",
        residentialProperty: "عقارات سكنية",
        tenantsGuide: "دليل المستأجر",
        landlordsGuide: "دليل المالك",
        other: "روابط أخرى",
        ourStory: "قصتنا",
        ourTeam: "فريقنا",
        careers: "الوظائف",
        privacyPolicy: "سياسة الخصوصية",
        termsOfService: "شروط الخدمة",
        copyright: "حقوق النشر © 2023 أحمد الشامسي للعقارات. جميع الحقوق محفوظة."
      }
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
