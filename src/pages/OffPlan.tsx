import { ArrowRight, Calendar, Building, CreditCard, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function OffPlan() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const benefits = [
    {
      icon: <CreditCard size={28} className="text-gold mb-4" strokeWidth={1.5} />,
      titleEn: "Flexible Payment Plans",
      titleAr: "خطط سداد مرنة وميسرة",
      descEn: "Post-handover payment schedules up to 5-7 years with low down payments.",
      descAr: "أقساط ميسرة بعد التسليم تصل إلى 5-7 سنوات مع دفعات أولى تبدأ من 5%."
    },
    {
      icon: <Building size={28} className="text-gold mb-4" strokeWidth={1.5} />,
      titleEn: "0% Agency Commission",
      titleAr: "0% عمولة وساطة",
      descEn: "Direct developer prices without any hidden brokerage fees.",
      descAr: "شراء مباشر بأسعار المطور الرسمية وبدون أي رسوم وساطة إضافية."
    },
    {
      icon: <Calendar size={28} className="text-gold mb-4" strokeWidth={1.5} />,
      titleEn: "Guaranteed Handover",
      titleAr: "تسليم موثق ومضمون",
      descEn: "Partnerships exclusively with top tier developers in Sharjah.",
      descAr: "شراكات حصرية مع كبار المطورين المعتمدين في الشارقة وحسابات ضمان بنكية."
    },
    {
      icon: <Sparkles size={28} className="text-gold mb-4" strokeWidth={1.5} />,
      titleEn: "UAE Golden Visa Eligible",
      titleAr: "مؤهل للإقامة الذهبية",
      descEn: "Investments of AED 2M+ qualify for 10-year UAE residency.",
      descAr: "العقارات بقيمة 2 مليون درهم فما فوق تؤهلك للحصول على الإقامة الذهبية لـ 10 سنوات."
    }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      {/* Page Header */}
      <div className="bg-paper py-20 px-6 lg:px-16 border-b border-stone/50">
        <div className="max-w-7xl mx-auto">
          <div className="w-12 h-[2px] bg-gold mb-8"></div>
          <h1 className="text-display text-ink mb-6">
            {isAr ? "مشاريع قيد الإنشاء" : "OFF-PLAN INVESTMENTS"}
          </h1>
          <p className="text-body text-ink-soft max-w-2xl leading-relaxed">
            {isAr
              ? "استفد من النمو الاقتصادي السريع في الشارقة مع إمكانية الوصول الحصري لأرقى المشاريع قيد الإنشاء بأسعار الإطلاق وخطط دفع طويلة الأجل."
              : "Capitalize on Sharjah's booming real estate market with exclusive access to premium off-plan developments and developer-backed payment plans."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-ink text-white p-10 lg:p-14 rounded-lg relative overflow-hidden group shadow-lg flex flex-col justify-between">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <img src="/hero.png" alt="Off-Plan" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <div className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                {isAr ? "لماذا الاستثمار قيد الإنشاء؟" : "Why Invest Off-Plan?"}
              </div>
              <h3 className="text-2xl lg:text-3xl font-heading mb-5">
                {isAr ? "أعلى عائد استثماري ونمو رأسمالي" : "Higher ROI & Proven Capital Appreciation"}
              </h3>
              <p className="text-white/80 mb-8 text-sm leading-relaxed">
                {isAr
                  ? "يتيح لك الحجز في مرحلة الإطلاق الاستفادة من أقل الأسعار الممكنة، مع تحقيق قفزة في القيمة السوقية للعقار عند اكتمال المشروع وبدء التأجير."
                  : "Securing property at initial launch rates locks in maximum equity appreciation by handover, alongside high initial rental yields in emerging Sharjah master-communities."}
              </p>
            </div>

            <div className="relative z-10">
              <Link 
                to="/contact" 
                className="bg-gold text-ink font-semibold px-6 py-3 rounded-md text-xs uppercase tracking-wider inline-flex items-center gap-2 hover:bg-gold/90 transition-colors"
              >
                <span>{isAr ? "طلب قائمة المشاريع والعروض" : "Request Off-Plan Portfolio"}</span>
                <ArrowRight size={14} className={isAr ? "rotate-180" : ""} />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="bg-paper p-6 border border-stone/40 rounded-lg">
                {b.icon}
                <h4 className="text-sm font-bold text-ink mb-2">
                  {isAr ? b.titleAr : b.titleEn}
                </h4>
                <p className="text-xs text-ink-soft leading-relaxed">
                  {isAr ? b.descAr : b.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-heading text-ink mb-8">
          {isAr ? "أبرز المشاريع قيد الإنشاء المميزة" : "Featured Off-Plan Projects"}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              titleEn: "Eagle Hills - Maryam Beach Residences",
              titleAr: "إيغل هيلز - مساكن شاطئ مريم",
              handoverEn: "Q4 2025 Handover",
              handoverAr: "التسليم: الربع الرابع 2025",
              descEn: "Exclusive beachfront apartments with a 60/40 payment plan and panoramic views of the Arabian Gulf.",
              descAr: "شقق شاطئية فاخرة بخطة سداد 60/40 وإطلالات بانورامية مفتوحة على الخليج العربي.",
              img: "/Golden-Hour Waterfront Skyline.png"
            },
            {
              titleEn: "Arada - Masaar Forest Villas",
              titleAr: "أرادَا - فلل غابة مسار الخضراء",
              handoverEn: "Q2 2026 Handover",
              handoverAr: "التسليم: الربع الثاني 2026",
              descEn: "Eco-friendly smart villas set in Sharjah’s most prestigious forested master-development.",
              descAr: "فلل ذكية صديقة للبيئة محاطة بآلاف الأشجار مع خطط سداد ميسرة حتى ما بعد التسليم.",
              img: "/Golden Hour Waterfront Promenade.png"
            }
          ].map((proj, i) => (
             <div key={i} className="flex flex-col sm:flex-row bg-paper border border-stone/40 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
               <div className="sm:w-2/5 h-56 sm:h-auto overflow-hidden">
                 <img src={proj.img} alt={proj.titleEn} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <div className="sm:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                 <div className="text-[10px] font-bold text-gold uppercase tracking-widest mb-2">
                   {isAr ? proj.handoverAr : proj.handoverEn}
                 </div>
                 <h3 className="text-lg md:text-xl font-heading text-ink mb-3 font-bold">
                   {isAr ? proj.titleAr : proj.titleEn}
                 </h3>
                 <p className="text-xs text-ink-soft mb-6 leading-relaxed">
                   {isAr ? proj.descAr : proj.descEn}
                 </p>
                 <Link 
                   to="/contact" 
                   className="text-xs font-bold text-ink flex items-center gap-1.5 hover:text-gold transition-colors w-fit uppercase tracking-wider"
                 >
                   <span>{isAr ? "احجز وحدتك الآن" : "Book A Unit"}</span>
                   <ArrowRight size={14} className={isAr ? "rotate-180" : ""} />
                 </Link>
               </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
