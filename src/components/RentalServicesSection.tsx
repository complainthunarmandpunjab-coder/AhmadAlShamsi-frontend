import { ShieldCheck, FileCheck, Wrench, Users, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function RentalServicesSection() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const rentalFeatures = [
    {
      icon: <Users className="text-gold" size={24} />,
      titleEn: "Strict Tenant Screening",
      titleAr: "تدقيق واختيار المستأجرين",
      descEn: "Background and financial verification to ensure verified, responsible tenants for your investment.",
      descAr: "التحقق المالي والأمني لضمان اختيار مستأجرين موثوقين لحماية عقارك الاستثماري."
    },
    {
      icon: <FileCheck className="text-gold" size={24} />,
      titleEn: "Lease & Municipality Registration",
      titleAr: "عقود الإيجار والتصديق البلدي",
      descEn: "Full execution of standard tenancy contracts, Ejari/Sharjah Municipality compliance, and renewals.",
      descAr: "صياغة عقود الإيجار المعتمدة وتصديقها لدى بلدية الشارقة وتجديدها وفق القوانين الرسمية."
    },
    {
      icon: <ShieldCheck className="text-gold" size={24} />,
      titleEn: "Rent Collection & Financial Reports",
      titleAr: "تحصيل الإيجارات والتقارير المالية",
      descEn: "Timely cheque handling, direct deposit management, and regular clear financial statements.",
      descAr: "إدارة ومتابعة الشيكات والإيداعات البنكية مع كشوف حسابات دورية شفافة للملاك."
    },
    {
      icon: <Wrench className="text-gold" size={24} />,
      titleEn: "24/7 Property Maintenance",
      titleAr: "صيانة وإشراف على مدار الساعة",
      descEn: "Regular property inspections, move-in/out reports, and rapid response maintenance teams.",
      descAr: "معاينات دورية، تقارير استلام وتسليم، وفرق صيانة سريعة للاستجابة لحالات الطوارئ."
    }
  ];

  return (
    <section className="py-20 bg-stone/10 border-y border-stone/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-gold"></div>
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                {isAr ? "خدمات التأجیر وإدارة الأملاك" : "Rental Services & Asset Care"}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading text-ink">
              {isAr ? "إدارة تأجير احترافية ومربحة" : "WORRY-FREE RENTALS & PROPERTY MANAGEMENT"}
            </h2>
          </div>
          <p className="text-ink-soft text-sm max-w-md leading-relaxed">
            {isAr
              ? "نعتني بكل تفاصيل تأجير عقارك في الشارقة من تسويق العقار واختيار المستأجر وحتى تحصيل الشيكات والصيانة لتستمتع بعائد استثماري مضمون دون أي جهد."
              : "Maximize your rental yield without the operational headaches. From finding verified tenants to legal registration and day-to-day maintenance."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {rentalFeatures.map((item, idx) => (
            <div 
              key={idx}
              className="bg-paper p-6 rounded-lg border border-stone/40 hover:border-gold transition-all duration-300 hover:shadow-md"
            >
              <div className="w-12 h-12 bg-ivory rounded-md flex items-center justify-center border border-stone/30 mb-5">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-ink mb-2">
                {isAr ? item.titleAr : item.titleEn}
              </h3>
              <p className="text-xs text-ink-soft leading-relaxed">
                {isAr ? item.descAr : item.descEn}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-ink text-white rounded-lg p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-xl md:text-2xl font-heading mb-2">
              {isAr ? "هل لديك عقار ترغب في تأجيره أو إدارته؟" : "Have a property to rent or manage in Sharjah?"}
            </h3>
            <p className="text-white/70 text-xs md:text-sm">
              {isAr ? "تواصل مع خبراء التأجير لدينا اليوم للحصول على تقييم مجاني للإيجار." : "Connect with our rental specialists today for a free rental valuation & tenant matching."}
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 bg-gold hover:bg-gold/90 text-ink font-semibold px-6 py-3.5 rounded-md text-xs tracking-wider uppercase transition-colors flex items-center gap-2"
          >
            <span>{isAr ? "استشر خبير التأجير" : "Speak to Leasing Manager"}</span>
            <ArrowRight size={14} className={isAr ? "rotate-180" : ""} />
          </Link>
        </div>
      </div>
    </section>
  );
}
