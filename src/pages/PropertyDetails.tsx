import { Link } from 'react-router-dom';
import { MapPin, Bed, Layers, Check, ArrowLeft, ArrowRight, Share2, Heart, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function PropertyDetails() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const amenitiesEn = [
    'Waterfront Views', 'Private Balcony', 'Swimming Pool', 
    'Fitness Center', '24/7 Security', 'Covered Parking', 
    'Built-in Wardrobes', 'Central A/C', 'Retail Outlets'
  ];

  const amenitiesAr = [
    'إطلالة مائية مباشرة', 'شرفة خاصة واسعة', 'حوض سباحة مشترك', 
    'مركز لياقة بدنية', 'أمن وحراسة 24/7', 'مواقف سيارات مغطاة', 
    'خزائن ملابس مدمجة', 'تكييف مركزي', 'متاجر ومطاعم قريبة'
  ];

  return (
    <div className="bg-ivory min-h-screen pb-20">
      {/* Property Hero */}
      <div className="w-full h-[50vh] md:h-[65vh] relative">
        <img src="/Golden-Hour Waterfront Skyline.png" alt="Property" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent"></div>
        
        <div className="absolute top-6 left-6 right-6 md:top-10 md:left-16 md:right-16 flex justify-between items-center z-10">
          <Link to="/properties" className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-ink transition-colors">
            {isAr ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
          </Link>
          <div className="flex gap-3">
            <button className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-ink transition-colors">
              <Share2 size={16} />
            </button>
            <button className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-ink transition-colors">
              <Heart size={16} />
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-white/90 text-sm mb-4 font-medium uppercase tracking-widest">
                <span className="bg-gold text-ink px-3 py-1 rounded-sm text-[10px] font-bold">
                  {isAr ? "للبيع / متاح" : "For Sale"}
                </span>
                <span className="flex items-center gap-1 text-xs">
                  <MapPin size={14} /> {isAr ? "جزيرة مريم، الشارقة" : "Maryam Island, Sharjah"}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-heading text-white mb-2 leading-tight">
                {isAr ? "مساكن جزيرة مريم الفاخرة" : "Maryam Island Residence"}
              </h1>
              <p className="text-white/80 text-sm md:text-base font-medium">
                {isAr ? "شقة سكنية عصرية مطلة على البحر والواجهة المائية" : "Luxury Waterfront Apartment with Panoramic Sea View"}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-lg text-white md:min-w-[280px]">
              <div className="text-[10px] uppercase tracking-widest text-white/70 mb-1 font-bold">
                {isAr ? "السعر المطلوب" : "Asking Price"}
              </div>
              <div className="text-3xl font-bold font-heading text-gold mb-4">AED 1,850,000</div>
              <div className="flex gap-4 text-xs font-medium border-t border-white/20 pt-4">
                <div className="flex items-center gap-1.5"><Bed size={16} className="text-gold" /> 2 {isAr ? "غرف" : "Bed"}</div>
                <div className="flex items-center gap-1.5"><Layers size={16} className="text-gold" /> 1,350 {isAr ? "قدم²" : "sqft"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-16 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img src="/Golden Hour Waterfront Promenade.png" className="w-full h-48 md:h-64 object-cover rounded-lg shadow-sm" alt="Interior" />
            <img src="/hero.png" className="w-full h-48 md:h-64 object-cover rounded-lg shadow-sm" alt="View" />
          </div>

          <section>
            <h2 className="text-2xl font-heading text-ink mb-6 pb-4 border-b border-stone/50">
              {isAr ? "نظرة عامة على العقار" : "Property Overview"}
            </h2>
            <div className="prose text-ink-soft text-sm md:text-base leading-relaxed">
              <p className="mb-4">
                {isAr
                  ? "عش تجربة الفخامة المطلقة في هذه الشقة الاستثنائية المكونة من غرفتي نوم في قلب جزيرة مريم بالشارقة. توفر الشقة إطلالات بحرية خلابة، وتجمع بين الهندسة المعمارية الحديثة والطابع الساحلي الهادئ."
                  : "Experience luxury living in this stunning 2-bedroom apartment located in the prestigious Maryam Island. Offering breathtaking waterfront views, this property represents the pinnacle of modern architecture blended with traditional charm."}
              </p>
              <p>
                {isAr
                  ? "تحتوي الشقة على صالة معيشة مفتوحة ومشرقة، مطبخ مجهز بأحدث الأجهزة الأوروبية، ونوافذ ممتدة من الأرض إلى السقف تسمح بدخول الضوء الطبيعي، بالإضافة إلى شرفة واسعة مثالية للاستمتاع بغروب الشمس."
                  : "The apartment features a spacious open-plan living area, a fully equipped modern kitchen with premium appliances, and floor-to-ceiling windows. The expansive balcony provides the perfect setting for sunset views."}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-ink mb-6 pb-4 border-b border-stone/50">
              {isAr ? "المرافق والخدمات" : "Amenities & Features"}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {(isAr ? amenitiesAr : amenitiesEn).map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-xs md:text-sm text-ink-soft font-medium">
                  <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Agent Card */}
        <div className="space-y-6">
          <div className="bg-paper p-6 lg:p-8 rounded-lg border border-stone/40 shadow-sm">
            <h3 className="text-lg font-heading text-ink mb-4 font-bold">
              {isAr ? "تواصل مع المستشار المسؤول" : "Contact Listing Agent"}
            </h3>
            
            <div className="flex items-center gap-4 mb-6">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" className="w-14 h-14 rounded-full object-cover" alt="Agent" />
              <div>
                <div className="font-bold text-ink text-sm">{isAr ? "أحمد الشامسي" : "Ahmad Al Shamsi"}</div>
                <div className="text-xs text-gold font-semibold">{isAr ? "مستشار عقاري معتمد" : "Senior Property Advisor"}</div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <a href="tel:+97165551234" className="w-full bg-ink text-white py-3 rounded-md text-xs font-semibold flex items-center justify-center gap-2 hover:bg-ink-soft transition-colors">
                <Phone size={14} /> {isAr ? "اتصال هاتفي" : "Call Agent"}
              </a>
              <Link to="/contact" className="w-full border border-ink bg-transparent text-ink py-3 rounded-md text-xs font-semibold flex items-center justify-center gap-2 hover:bg-ink hover:text-white transition-colors">
                <Mail size={14} /> {isAr ? "طلب معاينة العقار" : "Schedule Viewing"}
              </Link>
            </div>

            <div className="text-[11px] text-ink-soft text-center">
              {isAr ? "ترخيص دائرة التسجيل العقاري بالشارقة" : "Sharjah Real Estate Registration Dept Licensed"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
