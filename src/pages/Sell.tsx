import { CheckCircle2, ShieldCheck, Camera, FileCheck, Building2, Phone, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Sell() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    {
      num: "01",
      icon: <Award className="text-gold" size={28} />,
      titleEn: "Property Valuation",
      titleAr: "التقييم العقاري الدقيق",
      descEn: "Your agent will visit the property and provide you with market analysis based on recent transactions and RERA guidelines.",
      descAr: "يقوم مستشارنا بزيارة العقار وإجراء دراسة مقارنة للسوق استناداً إلى أحدث الصفقات المسجلة ومعايير دائرة التسجيل العقاري."
    },
    {
      num: "02",
      icon: <Camera className="text-gold" size={28} />,
      titleEn: "Marketing",
      titleAr: "التسويق الاحترافي المتقدم",
      descEn: "Our marketing team will create a professional advertisement with HD photo/video of your property and promote it across verified channels.",
      descAr: "يقوم فريق التسويق لدينا بإنتاج مواد إعلانية احترافية مع تصوير عالي الدقة HD وفيديو ترويجي والترويج على كافة المنصات العقارية."
    },
    {
      num: "03",
      icon: <ShieldCheck className="text-gold" size={28} />,
      titleEn: "Offer Agreed",
      titleAr: "إجراء المعاينات والتفاوض",
      descEn: "Your agent will conduct viewings at the property with prospective buyers until the best qualified offer is agreed upon.",
      descAr: "يتولى وكيلك تنظيم وتنسيق معاينات العقار مع المشترين الجادين حتى التوصل إلى أفضل عرض سعر يرضيك."
    },
    {
      num: "04",
      icon: <FileCheck className="text-gold" size={28} />,
      titleEn: "Transfer of Ownership",
      titleAr: "نقل الملكية وإفراغ الصك",
      descEn: "Your agent will take care of all related paperwork and the final transfer of the property at Sharjah Land Department.",
      descAr: "يتكفل وكيلك بإتمام جميع المعاملات الورقية واستخراج شهادات عدم الممانعة والإشراف على نقل الملكية لدى دائرة التسجيل العقاري بالشارقة."
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
            {isAr ? "بيع عقارك مع الخبراء" : "SELL YOUR PROPERTY WITH US"}
          </span>
          <h1 className="text-display text-ink mb-6">
            {isAr ? "بيع عقارك بأعلى عائد وقيمة سوقية" : "SELL YOUR PROPERTY WITH US"}
          </h1>
          <p className="text-body text-ink-soft max-w-2xl leading-relaxed">
            {isAr
              ? "يجمع فريقنا بين المعرفة المحلية العميقة والخبرة الميدانية لتقديم تقييم دقيق لعقارك، وفق أعلى معايير RICS و IVS وممارسات دائرة التسجيل العقاري بالشارقة."
              : "Our team combines their local knowledge and expertise to provide an accurate assessment of your property, all following RICS, IVS and RERA practices and guidelines."}
          </p>
        </div>
      </section>

      {/* Main Form & Intro */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Content & Specialization */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-paper p-8 lg:p-10 rounded-lg border border-stone/40 shadow-sm">
              <div className="text-[10px] uppercase font-bold text-gold tracking-widest mb-2">
                {isAr ? "تقييم مجاني مباشر" : "Face-to-Face Valuation"}
              </div>
              <h2 className="text-2xl lg:text-3xl font-heading text-ink mb-4">
                {isAr ? "تواصل مع خبراء المبيعات لدينا لحجز موعد تقييم مباشر لعقارك" : "Contact our Sales Specialists to arrange a face-to-face valuation for your property."}
              </h2>
              <p className="text-ink-soft text-sm leading-relaxed mb-6">
                {isAr
                  ? "سواء كنت تملك فيلا فاخرة أو شقة سكنية في الشارقة، نحن نضمن لك وصول إعلانك إلى قاعدة المستثمرين والمشترين الجاهزين بأسرع وقت وأعلى سعر ممكن."
                  : "Whether selling a luxury beachfront apartment or a spacious family villa, our dedicated advisors ensure maximum exposure to qualified buyers with total transparency."}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4 border-t border-stone/30 text-xs">
                <a 
                  href="tel:+97165229330" 
                  className="bg-ink text-white px-5 py-3 rounded-md font-medium inline-flex items-center gap-2 hover:bg-ink-soft transition-colors"
                >
                  <Phone size={14} className="text-gold" />
                  <span>+971 6 522 9330</span>
                </a>
                <a 
                  href="https://wa.me/+97165229330" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-success text-white px-5 py-3 rounded-md font-medium inline-flex items-center gap-2 hover:bg-success/90 transition-colors"
                >
                  <span>WhatsApp Valuation</span>
                </a>
              </div>
            </div>

            {/* About Card as mentioned in requirement */}
            <div className="bg-paper p-8 lg:p-10 rounded-lg border border-stone/40 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <Building2 size={24} className="text-gold" />
                <h3 className="text-xl font-heading text-ink font-bold">
                  {isAr ? "نبذة عن أحمد الشامسي للعقارات" : "About Us"}
                </h3>
              </div>
              <p className="text-ink-soft text-sm leading-relaxed mb-4">
                {isAr
                  ? "في شركة أحمد الشامسي للعقارات، نحن أكثر من مجرد وكالة عقارية — نحن شريكك الموثوق في سوق الشارقة العقاري الدائم التطور. متخصصون في تأجير وبيع الشقق وشراء وبيع الفلل."
                  : "At Ahmad Al Shamsi Real Estate, we are more than just a property agency — we are your trusted partner in Sharjah’s ever-evolving real estate market. Specializing in apartment rentals, sales, and the purchase and sale of villas, we offer a full suite of services to help clients navigate every step of their property journey with confidence."}
              </p>
              <p className="text-ink-soft text-sm leading-relaxed">
                {isAr
                  ? "نحن ندرك أنه لا يوجد عميلان متطابقان؛ لهذا نتبع نهجاً شخصياً مخصصاً يلائم أهدافك الاستثمارية أو السكنية بدقة وشفافية متناهية."
                  : "We know that no two clients are alike. That’s why we take a personalized, hands-on approach, tailoring every experience to meet your specific goals. With Ahmad Al Shamsi Real Estate, you are part of a relationship built on trust, transparency, and results."}
              </p>
            </div>
          </div>

          {/* Right: Valuation Request Form */}
          <div className="lg:col-span-5 bg-paper p-8 lg:p-10 rounded-lg border border-stone/40 shadow-sm">
            <h3 className="text-xl font-heading text-ink mb-2">
              {isAr ? "طلب تقييم وعرض عقارك للبيع" : "Request Property Valuation"}
            </h3>
            <p className="text-xs text-ink-soft mb-6">
              {isAr ? "املأ البيانات أدناه وسيتواصل معك وكيلنا المختص خلال ساعات." : "Submit your property info and our valuation specialist will get back to you shortly."}
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-lg text-center">
                <CheckCircle2 size={36} className="text-emerald-600 mx-auto mb-2" />
                <h4 className="font-bold text-sm mb-1">{isAr ? "تم إرسال طلبك بنجاح!" : "Valuation Request Received!"}</h4>
                <p className="text-xs text-emerald-700">{isAr ? "سيتصل بك مستشارنا لتحديد موعد المعاينة الميدانية." : "Our sales specialist will reach out to arrange a property assessment."}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase font-bold text-ink tracking-wider mb-1 block">
                    {isAr ? "الاسم الكامل *" : "Your Name *"}
                  </label>
                  <input required type="text" className="w-full bg-white border border-stone/50 px-3.5 py-2.5 rounded-md text-xs outline-none focus:border-gold" placeholder="John Doe" />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-ink tracking-wider mb-1 block">
                    {isAr ? "رقم الهاتف / الواتساب *" : "Phone Number *"}
                  </label>
                  <input required type="tel" className="w-full bg-white border border-stone/50 px-3.5 py-2.5 rounded-md text-xs outline-none focus:border-gold" placeholder="+971 50 123 4567" />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-ink tracking-wider mb-1 block">
                    {isAr ? "البريد الإلكتروني *" : "Email Address *"}
                  </label>
                  <input required type="email" className="w-full bg-white border border-stone/50 px-3.5 py-2.5 rounded-md text-xs outline-none focus:border-gold" placeholder="name@domain.com" />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-ink tracking-wider mb-1 block">
                    {isAr ? "نوع العقار *" : "Property Type *"}
                  </label>
                  <select className="w-full bg-white border border-stone/50 px-3.5 py-2.5 rounded-md text-xs outline-none focus:border-gold cursor-pointer">
                    <option>Apartment (شقة)</option>
                    <option>Villa (فيلا)</option>
                    <option>Townhouse (تاون هاوس)</option>
                    <option>Land / Plot (أرض)</option>
                    <option>Commercial / Office (تجاري / مكتب)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-ink tracking-wider mb-1 block">
                    {isAr ? "موقع العقار بالشارقة *" : "Location in Sharjah *"}
                  </label>
                  <input required type="text" className="w-full bg-white border border-stone/50 px-3.5 py-2.5 rounded-md text-xs outline-none focus:border-gold" placeholder="e.g. Al Khan, Maryam Island, Hoshi, Aljada" />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-ink tracking-wider mb-1 block">
                    {isAr ? "تفاصيل إضافية أو السعر المتوقع" : "Additional Notes or Expected Price"}
                  </label>
                  <textarea rows={3} className="w-full bg-white border border-stone/50 px-3.5 py-2.5 rounded-md text-xs outline-none focus:border-gold resize-none" placeholder="Bedrooms, floor, views, parking..."></textarea>
                </div>

                <button type="submit" className="w-full bg-ink text-white py-3.5 rounded-md font-semibold text-xs tracking-wider uppercase hover:bg-ink-soft transition-colors shadow-sm">
                  {isAr ? "إرسال طلب التقييم" : "Submit For Face-to-Face Valuation"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Step by step section */}
      <section className="bg-paper py-20 px-6 lg:px-16 border-t border-b border-stone/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-[10px] uppercase font-bold text-gold tracking-widest mb-2">
              {isAr ? "خطوة بخطوة" : "STEP BY STEP PROCESS"}
            </div>
            <h2 className="text-3xl md:text-4xl font-heading text-ink">
              {isAr ? "كيف نبيع عقارك بأفضل سعر وبدون عناء؟" : "How We Sell Your Property With Maximum Value"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((st, i) => (
              <div key={i} className="bg-ivory p-8 rounded-lg border border-stone/40 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-paper flex items-center justify-center border border-stone/40 shadow-sm">
                      {st.icon}
                    </div>
                    <span className="font-heading text-3xl text-gold/60 font-bold">{st.num}</span>
                  </div>
                  <h3 className="text-lg font-heading text-ink mb-3 font-bold">
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

      {/* Ready to find CTA */}
      <section className="py-20 px-6 lg:px-16 text-center">
        <div className="max-w-3xl mx-auto bg-ink text-white p-10 lg:p-14 rounded-lg shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading mb-4 text-gold">
              {isAr ? "مستعد لإيجاد مسكن أحلامك بأفضل سعر؟" : "Ready to find your perfect home for the best price"}
            </h2>
            <p className="text-white/80 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
              {isAr
                ? "تواصل مع خبراء أحمد الشامسي للعقارات اليوم واحصل على استشارة مهنية تلبي طموحاتك العقارية في الشارقة."
                : "Whether selling, buying or leasing, our licensed Sharjah advisors are ready to deliver outstanding results."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/properties" className="bg-gold text-ink font-semibold px-8 py-3.5 rounded-md text-xs uppercase tracking-wider hover:bg-gold/90 transition-colors">
                {isAr ? "استكشف العقارات المتاحة" : "Explore Properties"}
              </Link>
              <Link to="/contact" className="border border-white/40 text-white font-medium px-8 py-3.5 rounded-md text-xs uppercase tracking-wider hover:bg-white hover:text-ink transition-colors">
                {isAr ? "تحدث مع مستشار" : "Contact Sales Specialists"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
