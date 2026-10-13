import { MapPin, Phone, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import TeamSection from '../components/TeamSection';

export default function About() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <div className="relative w-full h-[55vh] flex items-center px-6 lg:px-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src="/Golden-Hour Waterfront Skyline.png" alt="Sharjah Skyline" className="w-full h-full object-cover" />
          <div className={`absolute inset-0 ${isAr ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-ink/95 via-ink/80 to-transparent w-full md:w-3/4`}></div>
        </div>

        <div className="relative z-10 max-w-2xl pt-16">
          <div className="w-12 h-[2px] bg-gold mb-6"></div>
          <h1 className="text-display text-white mb-4">
            {isAr ? "من نحن" : "ABOUT US"}
          </h1>
          <p className="text-body text-white/80 max-w-md">
            {isAr
              ? "عقود من الخبرة المحلية والنزاهة الراسخة في سوق الشارقة العقاري، متخصصون في البيع والتأجير وإدارة الأملاك."
              : "Decades of local expertise, building lasting relationships across Sharjah's sales, rentals, and asset management markets."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-28">
          <div className="lg:w-1/2">
            <div className="text-[10px] uppercase tracking-widest text-gold font-bold mb-3">
              {isAr ? "قصتنا وخبرتنا" : "Our Story & Foundations"}
            </div>
            <h2 className="text-3xl md:text-4xl font-heading text-ink mb-6">
              {isAr ? "متأصلون في الشارقة، وملتزمون بالتميز." : "Rooted in Sharjah, Driven by Excellence."}
            </h2>
            <div className="space-y-4 text-ink-soft leading-relaxed text-sm md:text-base">
              <p>
                {isAr
                  ? "تأسست شركة أحمد الشامسي للعقارات على ركائز الشفافية والأمانة والمعرفة الميدانية الدقيقة بكل أحياء ومشاريع إمارة الشارقة."
                  : "Founded on the principles of integrity, transparency, and deep local insight, Ahmad Al Shamsi Real Estate has been a leading beacon in Sharjah’s property market for over 15+ years."}
              </p>
              <p>
                {isAr
                  ? "نركز بشكل خاص على خدمات التأجير وإدارة العقارات المتكاملة، حيث نوفر للملاك عوائد إيجارية مجزية وراحة بال مطلقة، ونساعد المستأجرين في إيجاد المسكن المثالي بعقود رسمية موثقة."
                  : "We place a dedicated emphasis on long-term leasing and full-cycle property management, ensuring property owners achieve optimum rental yields with zero hassle, while providing tenants with seamless, municipality-certified contracts."}
              </p>
            </div>
            
            {/* Real Stats Structure */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-stone/50">
              <div>
                <div className="text-3xl lg:text-4xl font-heading text-gold mb-1 font-bold">15+</div>
                <div className="text-[11px] uppercase tracking-wider text-ink font-bold">
                  {isAr ? "سنوات خبرة" : "Years Experience"}
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-heading text-gold mb-1 font-bold">1,200+</div>
                <div className="text-[11px] uppercase tracking-wider text-ink font-bold">
                  {isAr ? "وحدة مؤجرة ومدارة" : "Units Managed"}
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-heading text-gold mb-1 font-bold">3,500+</div>
                <div className="text-[11px] uppercase tracking-wider text-ink font-bold">
                  {isAr ? "عميل راضٍ" : "Happy Clients"}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-md relative z-10 shadow-lg">
              <img src="/Golden Hour Waterfront Promenade.png" alt="Office" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/40 z-0 rounded-md"></div>
          </div>
        </div>

        {/* Official Contact & Office Details Card */}
        <div className="bg-paper p-8 lg:p-12 border border-stone/40 rounded-lg shadow-sm mb-20">
          <div className="max-w-3xl mb-8">
            <div className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">
              {isAr ? "المقر الرسمي وبيانات التواصل" : "Official Headquarters & Reach"}
            </div>
            <h3 className="text-2xl font-heading text-ink">
              {isAr ? "تفضل بزيارتنا في مكتبنا بالشارقة" : "Visit Our Sharjah Main Office"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs uppercase font-bold text-ink tracking-wider mb-1">
                  {isAr ? "العنوان الرسمي" : "Office Address"}
                </div>
                <p className="text-xs text-ink-soft leading-relaxed">
                  {isAr ? "شارع الخان، بالقرب من بحيرة الخان، الشارقة، الإمارات العربية المتحدة" : "Al Khan Street, Waterfront District, Sharjah, United Arab Emirates"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-xs uppercase font-bold text-ink tracking-wider mb-1">
                  {isAr ? "الهاتف والواتساب" : "Direct Contact"}
                </div>
                <p className="text-xs text-ink-soft">
                  +971 6 555 1234<br />
                  info@alshamsirealestate.ae
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-xs uppercase font-bold text-ink tracking-wider mb-1">
                  {isAr ? "أوقات الدوام" : "Working Hours"}
                </div>
                <p className="text-xs text-ink-soft">
                  {isAr ? "السبت - الخميس: 9:00 ص - 7:00 م" : "Mon - Sat: 9:00 AM - 7:00 PM"}<br />
                  {isAr ? "الجمعة: مغلق" : "Sunday: Closed"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-paper p-8 lg:p-10 border border-stone/30 rounded-lg">
            <div className="w-8 h-[2px] bg-gold mb-4"></div>
            <h3 className="text-xl font-heading text-ink mb-3">{isAr ? "رسالتنا" : "Our Mission"}</h3>
            <p className="text-ink-soft text-sm leading-relaxed">
              {isAr
                ? "تقديم أعلى معايير الشفافية والاحتراف في الوساطة العقارية وإدارة الأملاك في الشارقة، وحماية مصالح الملاك والمستأجرين عبر حلول عملية موثوقة."
                : "To elevate real estate services in Sharjah through transparent advisory, rigorous property management, and dedicated tenancy care."}
            </p>
          </div>
          <div className="bg-paper p-8 lg:p-10 border border-stone/30 rounded-lg">
            <div className="w-8 h-[2px] bg-gold mb-4"></div>
            <h3 className="text-xl font-heading text-ink mb-3">{isAr ? "رؤيتنا" : "Our Vision"}</h3>
            <p className="text-ink-soft text-sm leading-relaxed">
              {isAr
                ? "أن نكون الوجهة العقارية الأولى والأكثر موثوقية في الشارقة لكل من يبحث عن مسكن للإيجار أو إدارة احترافية لأصوله العقارية."
                : "To remain the most trusted advisory and rental management firm in Sharjah, known for lasting client relationships and proven asset yields."}
            </p>
          </div>
        </div>
      </div>

      {/* Team Section Component inside About Us */}
      <TeamSection />
    </div>
  );
}
