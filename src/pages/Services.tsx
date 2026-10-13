import { ArrowRight, Key, Shield, TrendingUp, Users, CheckCircle, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Services() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const services = [
    { 
      icon: <Shield size={32} />, 
      titleEn: "Property Management & Leasing", 
      titleAr: "إدارة العقارات والتأجير المتكامل",
      descEn: "End-to-end leasing management for landlords: rigorous tenant background screening, official Sharjah Municipality & Ejari tenancy contracts, automated rent collection, and 24/7 dedicated property maintenance.",
      descAr: "إدارة شاملة لراحة الملاك: تدقيق واختيار المستأجرين، توثيق وتصديق عقود الإيجار لدى بلدية الشارقة، تحصيل الإيجارات ومتابعة الشيكات، وإشراف وصيانة دورية على مدار الساعة.",
      tagEn: "Core Focus",
      tagAr: "خدمتنا الأساسية"
    },
    { 
      icon: <Key size={32} />, 
      titleEn: "Property Buying & Advisory", 
      titleAr: "شراء العقارات والاستشارات الميدانية",
      descEn: "Guiding buyers to the best residential homes, luxury waterfront apartments, and freehold villas across Sharjah with transparent valuation and seamless title deed transfer.",
      descAr: "إرشاد المشترين نحو أفضل المنازل السكنية، الشقق الفاخرة، والفلل ذات التملك الحر في الشارقة مع تقييم دقيق ونقل ملكية سلس.",
      tagEn: "Sales",
      tagAr: "مبيعات"
    },
    { 
      icon: <TrendingUp size={32} />, 
      titleEn: "Property Selling & Strategic Marketing", 
      titleAr: "بيع العقارات والتسويق الاستراتيجي",
      descEn: "Targeted digital marketing and local investor networks to sell your property at peak market value within record timeframes.",
      descAr: "حملات تسويقية متخصصة وشبكة واسعة من المستثمرين لبيع عقارك بأعلى عائد وقيمة سوقية ممكنة في وقت قياسي.",
      tagEn: "Resale",
      tagAr: "إعادة بيع"
    },
    { 
      icon: <Users size={32} />, 
      titleEn: "Investment Advisory & Portfolio Growth", 
      titleAr: "استشارات الاستثمار وتنمية المحافظ",
      descEn: "Data-driven Sharjah market intelligence helping local and international investors achieve 8%+ net rental returns and long-term capital appreciation.",
      descAr: "دراسات جدوى مبنية على بيانات حقيقية لسوق الشارقة لمساعدة المستثمرين في تحقيق عوائد إيجارية تتجاوز 8% ونمو رأسمالي مستدام.",
      tagEn: "Investment",
      tagAr: "استثمار"
    }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      {/* Page Header */}
      <div className="bg-paper py-20 px-6 lg:px-16 border-b border-stone/50">
        <div className="max-w-7xl mx-auto">
          <div className="w-12 h-[2px] bg-gold mb-8"></div>
          <h1 className="text-display text-ink mb-6">
            {isAr ? "خدماتنا العقارية" : "OUR SERVICES"}
          </h1>
          <p className="text-body text-ink-soft max-w-2xl leading-relaxed">
            {isAr
              ? "نقدم منظومة خدمات عقارية متكاملة تركز بشكل خاص على حلول التأجير وإدارة الأملاك، مع التزام تام بالشفافية والاحترافية وحماية مصالح عملائنا."
              : "End-to-end real estate solutions with a specialized focus on property management, rental yields, and bespoke investment advisory across Sharjah."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-paper p-10 border border-stone/40 rounded-lg hover:border-gold/60 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 bg-ivory rounded-full flex items-center justify-center text-gold border border-stone/50 group-hover:bg-ink group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-gold/10 text-gold rounded-full">
                    {isAr ? service.tagAr : service.tagEn}
                  </span>
                </div>

                <h3 className="text-2xl font-heading text-ink mb-4">
                  {isAr ? service.titleAr : service.titleEn}
                </h3>
                <p className="text-ink-soft mb-8 leading-relaxed text-sm">
                  {isAr ? service.descAr : service.descEn}
                </p>
              </div>

              <Link 
                to="/contact" 
                className="text-xs font-bold text-ink flex items-center gap-2 hover:text-gold transition-colors w-fit uppercase tracking-widest pt-4 border-t border-stone/30"
              >
                <span>{isAr ? "طلب الخدمة والاستشارة" : "Inquire About This Service"}</span>
                <ArrowRight size={14} className={isAr ? "rotate-180" : ""} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Our Property Management Banner */}
        <div className="bg-paper border border-stone/40 rounded-lg p-8 lg:p-12 mb-20">
          <div className="max-w-3xl mb-8">
            <div className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">
              {isAr ? "لماذا إدارة أملاك أحمد الشامسي؟" : "Why Choose Our Property Management?"}
            </div>
            <h3 className="text-2xl lg:text-3xl font-heading text-ink">
              {isAr ? "راحة بال تامة وعائد إيجاري مضمون دون أي عناء" : "Complete Peace of Mind & Guaranteed Hassle-Free Returns"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-ivory rounded-md border border-stone/30">
              <CheckCircle className="text-gold mb-3" size={24} />
              <h4 className="font-bold text-sm text-ink mb-2">
                {isAr ? "صفر تأخير في الإيجار" : "Zero Rental Delay"}
              </h4>
              <p className="text-xs text-ink-soft leading-relaxed">
                {isAr ? "نظام متابعة بنكي آلي لتحصيل الشيكات وإيداعها في حسابك دون انقطاع." : "Systematic banking follow-up ensuring timely cheque deposits directly to your account."}
              </p>
            </div>

            <div className="p-5 bg-ivory rounded-md border border-stone/30">
              <CheckCircle className="text-gold mb-3" size={24} />
              <h4 className="font-bold text-sm text-ink mb-2">
                {isAr ? "عقود موثقة رسمياً" : "Official Legal Compliance"}
              </h4>
              <p className="text-xs text-ink-soft leading-relaxed">
                {isAr ? "كافة العقود مصدقة أصولاً ومطابقة لاشتراطات بلدية الشارقة وقوانين الإيجار." : "All agreements certified with Sharjah Municipality, safeguarding both landlord and tenant rights."}
              </p>
            </div>

            <div className="p-5 bg-ivory rounded-md border border-stone/30">
              <CheckCircle className="text-gold mb-3" size={24} />
              <h4 className="font-bold text-sm text-ink mb-2">
                {isAr ? "صيانة دورية فورية" : "Rapid Maintenance Teams"}
              </h4>
              <p className="text-xs text-ink-soft leading-relaxed">
                {isAr ? "فريق فني معتمد لحل أي طارئ فوراً للحفاظ على قيمة عقارك وسلامته." : "Certified on-call technicians resolving plumbing, electrical, and AC issues swiftly."}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-ink text-white p-10 lg:p-16 rounded-lg text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10">
            <img src="/hero.png" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading mb-4">
              {isAr ? "هل تبحث عن حل عقاري مخصص؟" : "Need a tailored real estate solution?"}
            </h2>
            <p className="text-white/70 mb-8 text-sm leading-relaxed">
              {isAr
                ? "تواصل مباشرة مع كبار مستشارينا لمناقشة أهدافك العقارية، سواء كان ذلك لتأجير عقارك أو بدء استثمار جديد في الشارقة."
                : "Speak directly with our senior advisors to discuss your leasing objectives or investment ambitions in Sharjah."}
            </p>
            <Link 
              to="/contact" 
              className="bg-gold hover:bg-gold/90 text-ink font-semibold px-8 py-3.5 text-xs uppercase tracking-wider rounded-md transition-colors inline-flex items-center gap-2"
            >
              <PhoneCall size={14} />
              <span>{isAr ? "احجز استشارة مجانية" : "Book a Consultation"}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
