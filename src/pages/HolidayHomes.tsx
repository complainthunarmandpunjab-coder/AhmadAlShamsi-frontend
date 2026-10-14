import { CheckCircle2, Clock, Phone, Sparkles, Percent } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function HolidayHomes() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const [submitted, setSubmitted] = useState(false);

  const perks = [
    {
      textEn: "Earn 25-30% more rental income than a long-term contract",
      textAr: "تحقيق عائد إيجاري أعلى بنسبة 25-30% مقارنة بالعقود السنوية التقليدية"
    },
    {
      textEn: "Hassle-free experience with full management of your property",
      textAr: "تجربة خالية من المتاعب مع إدارة كاملة ومباشرة لكافة تفاصيل العقار"
    },
    {
      textEn: "No long-term annual commitment with tenants",
      textAr: "عدم الالتزام السنوي الطويل مع مستأجر واحد وإمكانية تغيير الأسعار موسمياً"
    },
    {
      textEn: "Flexibility to stay in your own property whenever you visit",
      textAr: "مرونة كاملة لاستخدام والإقامة في عقارك الخاص وقتما ترغب"
    },
    {
      textEn: "No 12-month notice for tenants, making it easier to sell anytime",
      textAr: "لا حاجة لتقديم إنذار إخلاء لمدة 12 شهراً، مما يسهل بيع العقار في أي وقت"
    },
    {
      textEn: "Optimize revenue of the property based on real-time market fluctuations",
      textAr: "تعظيم دخل العقار استناداً إلى حركة المواسم السياحية والفعاليات في الشارقة"
    }
  ];

  const steps = [
    {
      step: "01",
      titleEn: "ASSESS & EVALUATE",
      titleAr: "التقييم والدراسة الميدانية",
      descEn: "Your agent will visit the property and provide you with market analysis based on recent vacation rental transactions.",
      descAr: "يقوم وكيلنا بزيارة العقار وإجراء دراسة للعائد السياحي المتوقع وأسعار الليلة استناداً للموقع والتجهيزات."
    },
    {
      step: "02",
      titleEn: "MARKET YOUR PROPERTY",
      titleAr: "التسويق الفندقي الاحترافي",
      descEn: "Our marketing team will create a professional advertisement with HD photo/video of your property and promote it on global platforms (Airbnb, Booking.com, etc.).",
      descAr: "إنتاج مواد تصوير عالية الجودة HD وإدراج الوحدة على المنصات العالمية المعتمدة مع تحسين الظهور والحجوزات."
    },
    {
      step: "03",
      titleEn: "OPERATIONS & HOSPITALITY",
      titleAr: "التشغيل والضيافة السويسرية",
      descEn: "Your agent conducts guest check-ins, key handover, 5-star hotel linen cleaning, and 24/7 guest communication until check-out.",
      descAr: "إدارة الحجوزات، تسليم واستلام المفاتيح، النظافة الفندقية الشاملة، وخدمة النزلاء على مدار الساعة."
    },
    {
      step: "04",
      titleEn: "PAYOUT & REPORTING",
      titleAr: "تحويل الأرباح والتقارير الشهرية",
      descEn: "Receive transparent monthly revenue payouts and performance statements directly into your bank account with complete peace of mind.",
      descAr: "تحويل عوائد الإيجار الشهرية مباشرة إلى حسابك البنكي مع تقرير أداء مالي شفاف ومفصل."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-ivory">
      {/* Header Banner */}
      <section className="relative bg-paper py-20 px-6 lg:px-16 border-b border-stone/50 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="w-12 h-[2px] bg-gold mb-6"></div>
          <span className="text-[11px] uppercase tracking-widest text-gold font-bold block mb-2">
            {isAr ? "بيوت العطلات والإيجار القصير" : "HOLIDAY HOMES IN SHARJAH"}
          </span>
          <h1 className="text-display text-ink mb-6">
            {isAr ? "بيوت العطلات في الشارقة" : "Holiday Homes in Sharjah"}
          </h1>
          <p className="text-body text-ink-soft max-w-3xl leading-relaxed">
            {isAr
              ? "شركة أحمد الشامسي للعقارات متخصصة في تأجير بيوت العطلات مع تجربة ضيافة استثنائية. سنزيد عائد استثمارك العقاري إلى أقصى حد من خلال حلول التأجير قصير الأجل بما في ذلك الإدارة الكاملة لعقارك."
              : "Ahmad Alshamsi Real Estate is a vacation home rental specialist combining real estate experience paired with Swiss hospitality excellence. We will maximize your property investment with our short-term rental solutions including full management of your property."}
          </p>
        </div>
      </section>

      {/* Hero Highlight Card */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="bg-ink text-white p-8 lg:p-14 rounded-lg relative overflow-hidden shadow-xl mb-16">
          <div className="absolute inset-0 opacity-15">
            <img src="/Golden Hour Waterfront Promenade.png" alt="Sharjah Promenade" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-gold/30">
              <Sparkles size={14} />
              <span>{isAr ? "إدارة كاملة خالية من المتاعب" : "Complete Hassle-Free Management"}</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-heading mb-4 text-paper">
              {isAr ? "استرخِ ودعنا ندير عقارك بالكامل، بكل راحة بال" : "Sit back and relax, while we manage the property for you, completely hassle-free."}
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
              {isAr
                ? "سواء كنت تملك شقة شاطئية في جزيرة مريم أو منزلاً أنيقاً في قلب الشارقة، نحن نعتني بكل تفصيل: من الترخيص السياحي، التصوير، وتحديد الأسعار ديناميكياً، وحتى خدمة الضيوف والتنظيف الفندقي."
                : "From licensing and professional staging to 24/7 guest concierge and dynamic pricing algorithms, we unlock the true earning potential of your property."}
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-bold">
              <a href="#fees" className="bg-gold text-ink px-6 py-3 rounded-md uppercase tracking-wider hover:bg-gold/90 transition-colors">
                {isAr ? "الرسوم والخدمات (20%)" : "Fees & Services (20%)"}
              </a>
              <a href="tel:+97165229330" className="border border-white/40 text-white px-6 py-3 rounded-md uppercase tracking-wider hover:bg-white hover:text-ink transition-colors flex items-center gap-2">
                <Phone size={14} className="text-gold" />
                <span>+971 6 522 9330</span>
              </a>
            </div>
          </div>
        </div>

        {/* Fees & Services + Why Short Term */}
        <div id="fees" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Fees & Services */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-paper p-8 lg:p-10 rounded-lg border border-stone/40 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-4">
                <Percent size={24} />
              </div>
              <h3 className="text-2xl font-heading text-ink mb-2">
                {isAr ? "الرسوم والخدمات" : "Fees & Services"}
              </h3>
              <div className="bg-ivory p-4 rounded-md border border-stone/30 mb-6">
                <div className="text-xs uppercase font-bold text-gold tracking-widest mb-1">{isAr ? "رسوم الإدارة الكاملة" : "Full Management Fee"}</div>
                <div className="text-3xl font-heading font-bold text-ink">20%</div>
                <p className="text-xs text-ink-soft mt-1">
                  {isAr ? "رسوم الإدارة لدينا هي 20% وتشمل حزمة الخدمات المتكاملة التالية:" : "Our management fee is 20% and it includes the following services:"}
                </p>
              </div>

              <ul className="space-y-3 text-xs text-ink-soft">
                {[
                  { en: "Property setup & interior styling advice", ar: "تجهيز وتنسيق ديكور العقار لاستقبال النزلاء" },
                  { en: "Sharjah Commerce & Tourism Development Authority (SCTDA) compliance", ar: "استخراج تصاريح هيئة الإنماء التجاري والسياحي بالشارقة" },
                  { en: "Professional photography & multi-channel listing", ar: "جلسات تصوير احترافية ونشر الحجوزات عالمياً" },
                  { en: "Dynamic pricing algorithm to maximize seasonal yield", ar: "تسعير يومي ذكي لتحقيق أعلى نسبة إشغال وعائد" },
                  { en: "24/7 guest support, check-in & check-out", ar: "استقبال النزلاء وخدمة عملاء على مدار الساعة" },
                  { en: "Hotel-grade housekeeping, toiletries & linen change", ar: "تنظيف فندقي معقم وتغيير البياضات والمستلزمات" },
                  { en: "Full routine maintenance coordination", ar: "إشراف وصيانة دورية فورية للعقار" }
                ].map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                    <span>{isAr ? s.ar : s.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours Box */}
            <div className="bg-paper p-6 rounded-lg border border-stone/40 shadow-sm flex items-start gap-4">
              <Clock className="text-gold shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-heading text-ink text-base font-bold mb-1">
                  {isAr ? "أوقات الدوام الرسمي" : "Opening Hours"}
                </h4>
                <div className="text-xs text-ink font-semibold">{isAr ? "السبت - الخميس" : "Saturday - Thursday"}</div>
                <div className="text-xs text-ink-soft font-mono">10:00AM to 8:00PM</div>
                <div className="text-xs text-error font-medium mt-1">{isAr ? "الجمعة - مغلق" : "Friday - Closed"}</div>
                <div className="text-xs text-ink-soft mt-2 pt-2 border-t border-stone/30">
                  <span className="font-bold">{isAr ? "الهاتف: " : "Phone: "}</span>+971 6 522 9330
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Why Short Term Rentals + Inquiry Form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-paper p-8 lg:p-10 rounded-lg border border-stone/40 shadow-sm">
              <div className="text-[10px] uppercase font-bold text-gold tracking-widest mb-2">
                {isAr ? "لماذا بيوت العطلات؟" : "WHY SHORT TERM RENTALS?"}
              </div>
              <h3 className="text-2xl font-heading text-ink mb-6">
                {isAr ? "مميزات التأجير قصير الأجل مع أحمد الشامسي" : "Why Short Term Rentals?"}
              </h3>

              <div className="space-y-4 mb-8">
                {perks.map((p, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 bg-ivory rounded-md border border-stone/30">
                    <span className="text-gold font-bold text-lg leading-none">›</span>
                    <p className="text-xs md:text-sm font-medium text-ink">
                      {isAr ? p.textAr : p.textEn}
                    </p>
                  </div>
                ))}
              </div>

              {/* Consultation CTA block */}
              <div className="bg-ink text-white p-6 rounded-lg border border-ink mb-8">
                <h4 className="font-heading text-lg text-gold mb-1">
                  {isAr ? "هل تبحث عن عقار في الشارقة؟" : "Are you looking for a property in Sharjah?"}
                </h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  {isAr
                    ? "احصل على نصيحة واستشارة مخصصة من أحد مستشارينا العقاريين المعتمدين اليوم."
                    : "Get personalized advice from one of our property consultants today."}
                </p>
              </div>

              {/* Inquiry Form */}
              <h4 className="text-base font-heading font-bold text-ink mb-4">
                {isAr ? "احجز استشارة لعقارك في بيوت العطلات" : "Inquire About Holiday Homes Management"}
              </h4>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-lg text-center">
                  <CheckCircle2 size={32} className="text-emerald-600 mx-auto mb-2" />
                  <div className="font-bold text-sm mb-1">{isAr ? "تم إرسال طلبك بنجاح!" : "Inquiry Sent Successfully!"}</div>
                  <div className="text-xs text-emerald-700">{isAr ? "سيتواصل معك خبير بيوت العطلات في أقرب وقت." : "Our holiday homes specialist will contact you shortly."}</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-ink tracking-wider mb-1 block">{isAr ? "الاسم *" : "Name *"}</label>
                      <input required type="text" className="w-full bg-white border border-stone/50 px-3.5 py-2.5 rounded-md text-xs outline-none focus:border-gold" placeholder="Your Name" />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-ink tracking-wider mb-1 block">{isAr ? "رقم الهاتف / الواتساب *" : "Phone *"}</label>
                      <input required type="tel" className="w-full bg-white border border-stone/50 px-3.5 py-2.5 rounded-md text-xs outline-none focus:border-gold" placeholder="+971 50 123 4567" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-bold text-ink tracking-wider mb-1 block">{isAr ? "موقع العقار أو نوعه *" : "Property Details / Location *"}</label>
                    <input required type="text" className="w-full bg-white border border-stone/50 px-3.5 py-2.5 rounded-md text-xs outline-none focus:border-gold" placeholder="e.g. 1BHK in Maryam Island, Studio in Al Khan" />
                  </div>
                  <button type="submit" className="w-full bg-ink text-white py-3 rounded-md font-semibold text-xs tracking-wider uppercase hover:bg-ink-soft transition-colors">
                    {isAr ? "طلب استشارة بيوت العطلات" : "Submit For Holiday Homes Management"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step section */}
      <section className="bg-paper py-20 px-6 lg:px-16 border-t border-b border-stone/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-[10px] uppercase font-bold text-gold tracking-widest mb-2">
              {isAr ? "خطوة بخطوة" : "STEP BY STEP"}
            </div>
            <h2 className="text-3xl md:text-4xl font-heading text-ink">
              {isAr ? "كيف ندير بيت عطلتك من البداية حتى استلام العوائد؟" : "How We Manage Your Vacation Home From Start to Finish"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((st, i) => (
              <div key={i} className="bg-ivory p-8 rounded-lg border border-stone/40 flex flex-col justify-between">
                <div>
                  <div className="font-heading text-3xl text-gold font-bold mb-4">{st.step}</div>
                  <h3 className="text-base font-heading font-bold text-ink mb-2">
                    {isAr ? st.titleAr : st.titleEn}
                  </h3>
                  <p className="text-xs text-ink-soft leading-relaxed">
                    {isAr ? st.descAr : st.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 lg:px-16 text-center">
        <div className="max-w-3xl mx-auto bg-ink text-white p-10 lg:p-14 rounded-lg shadow-xl">
          <h2 className="text-3xl md:text-4xl font-heading mb-4 text-gold">
            {isAr ? "مستعد لإيجاد منزلك المثالي بأفضل سعر؟" : "Ready to find your perfect home for the best price"}
          </h2>
          <p className="text-white/80 text-sm mb-8 max-w-xl mx-auto">
            {isAr
              ? "سواء كنت ترغب في استئجار بيت عطلات أو تعظيم دخل عقارك مع إدارة كاملة ومضمونة، فريقنا في خدمتك."
              : "Maximize your returns or find an exquisite holiday stay in Sharjah today."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/properties" className="bg-gold text-ink font-semibold px-8 py-3.5 rounded-md text-xs uppercase tracking-wider hover:bg-gold/90 transition-colors">
              {isAr ? "استكشف العقارات" : "Explore Properties"}
            </Link>
            <Link to="/contact" className="border border-white/40 text-white font-medium px-8 py-3.5 rounded-md text-xs uppercase tracking-wider hover:bg-white hover:text-ink transition-colors">
              {isAr ? "اتصل بنا" : "Contact Us"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
