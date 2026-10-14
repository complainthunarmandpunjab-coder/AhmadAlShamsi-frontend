import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, Check, ArrowLeft, ArrowRight, 
  Phone, Mail, Send, CheckCircle2 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { getPropertyById, propertiesData } from '../data/properties';

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Lookup property or fallback to id 28
  const property = getPropertyById(id || '28') || propertiesData[0];

  const gallery = property.images && property.images.length > 0 
    ? property.images 
    : [property.image, '/hero.png', '/Golden-Hour Waterfront Skyline.png', '/Golden Hour Waterfront Promenade.png'];

  const similarProperties = propertiesData
    .filter((p) => p.id !== property.id && p.forRent === property.forRent)
    .slice(0, 3);

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <div className="bg-ivory min-h-screen pb-20">
      {/* Top Breadcrumb & Controls */}
      <div className="bg-paper border-b border-stone/40 py-4 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            to="/properties" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink hover:text-gold transition-colors"
          >
            {isAr ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
            <span>{isAr ? "العودة إلى قائمة العقارات" : "Back to Properties"}</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm ${property.forRent ? 'bg-gold text-ink' : 'bg-ink text-white'}`}>
              {property.forRent ? (isAr ? "للإيجار" : "For Rent") : (isAr ? "للبيع" : "For Buy")}
            </span>
            {property.propertyId && (
              <span className="text-[10px] text-muted font-mono uppercase bg-stone/20 px-2 py-1 rounded">
                ID: {property.propertyId}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Property Hero Title Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-8 pb-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs text-gold font-bold uppercase tracking-wider mb-2">
              <MapPin size={15} />
              <span>{isAr ? property.locationAr : property.locationEn}</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-heading text-ink font-bold leading-tight mb-2">
              {isAr ? property.titleAr : property.titleEn}
            </h1>
            <p className="text-xs md:text-sm text-ink-soft">
              {property.addressEn || property.locationEn}
            </p>
          </div>

          <div className="bg-paper p-5 md:p-6 rounded-lg border border-stone/40 shadow-sm shrink-0">
            <div className="text-[10px] uppercase tracking-widest text-muted font-bold mb-1">
              {property.forRent ? (isAr ? "الإيجار السنوي" : "Rental Price") : (isAr ? "السعر المطلوب" : "Selling Price")}
            </div>
            <div className="text-2xl md:text-3xl font-heading font-bold text-ink">
              AED {property.price}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Gallery Slider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-12">
        <div className="bg-paper rounded-lg border border-stone/40 overflow-hidden shadow-sm p-3">
          <div className="relative h-[320px] sm:h-[450px] md:h-[540px] w-full rounded-md overflow-hidden bg-ink/5">
            <img 
              src={gallery[activeImgIdx]} 
              alt={isAr ? property.titleAr : property.titleEn} 
              className="w-full h-full object-cover transition-all duration-500" 
            />

            {/* Previous / Next buttons */}
            <button 
              onClick={() => setActiveImgIdx((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ink/70 hover:bg-ink text-white flex items-center justify-center transition-colors shadow-md"
              title="Previous Photo"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={() => setActiveImgIdx((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ink/70 hover:bg-ink text-white flex items-center justify-center transition-colors shadow-md"
              title="Next Photo"
            >
              <ArrowRight size={18} />
            </button>

            {/* Photo Counter */}
            <div className="absolute bottom-4 right-4 bg-ink/80 text-white text-[11px] font-mono px-3 py-1 rounded backdrop-blur-sm">
              Photos {activeImgIdx + 1} / {gallery.length}
            </div>
          </div>

          {/* Thumbnails row */}
          <div className="flex gap-2.5 mt-3 overflow-x-auto pb-1 scrollbar-hide">
            {gallery.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setActiveImgIdx(i)}
                className={`relative w-24 h-16 rounded overflow-hidden shrink-0 border-2 transition-all ${
                  activeImgIdx === i ? 'border-gold shadow' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid: Details + Sidebar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column (8 cols): Specifications, Description, Highlights, Features, Location */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Key Quick Stats Bar */}
          <div className="bg-paper p-6 rounded-lg border border-stone/40 shadow-sm grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            <div className="border-r border-stone/30 last:border-none p-1">
              <div className="text-[10px] uppercase font-bold text-muted mb-1">{isAr ? "المساحة" : "Area"}</div>
              <div className="text-sm font-bold text-ink">{property.sqft} sqft</div>
            </div>
            <div className="border-r border-stone/30 last:border-none p-1">
              <div className="text-[10px] uppercase font-bold text-muted mb-1">{isAr ? "الغرف" : "Beds"}</div>
              <div className="text-sm font-bold text-ink">{property.beds} {isAr ? "غرف نوم" : "Bedrooms"}</div>
            </div>
            <div className="border-r border-stone/30 last:border-none p-1">
              <div className="text-[10px] uppercase font-bold text-muted mb-1">{isAr ? "الحمامات" : "Baths"}</div>
              <div className="text-sm font-bold text-ink">{property.baths} {isAr ? "حمامات" : "Bathrooms"}</div>
            </div>
            <div className="border-r border-stone/30 last:border-none p-1">
              <div className="text-[10px] uppercase font-bold text-muted mb-1">{isAr ? "المجموع" : "Rooms"}</div>
              <div className="text-sm font-bold text-ink">{property.rooms || property.beds} {isAr ? "غرف" : "Rooms"}</div>
            </div>
            <div className="border-r border-stone/30 last:border-none p-1">
              <div className="text-[10px] uppercase font-bold text-muted mb-1">{isAr ? "الطوابق" : "Floors"}</div>
              <div className="text-sm font-bold text-ink">{property.floors !== undefined ? property.floors : 1} {isAr ? "طابق" : "Floors"}</div>
            </div>
            <div className="p-1">
              <div className="text-[10px] uppercase font-bold text-muted mb-1">{isAr ? "المواقف" : "Garage"}</div>
              <div className="text-sm font-bold text-ink">{property.garage !== undefined ? property.garage : 1} {isAr ? "موقف" : "Garages"}</div>
            </div>
          </div>

          {/* Description Section */}
          <div className="bg-paper p-8 rounded-lg border border-stone/40 shadow-sm">
            <h2 className="text-xl font-heading font-bold text-ink mb-4 pb-3 border-b border-stone/40">
              {isAr ? "الوصف والتفاصيل" : "Description"}
            </h2>
            <div className="text-xs md:text-sm text-ink-soft leading-relaxed whitespace-pre-line">
              {isAr ? property.descriptionAr || property.descriptionEn : property.descriptionEn}
            </div>
          </div>

          {/* Highlights Section */}
          {property.highlightsEn && property.highlightsEn.length > 0 && (
            <div className="bg-paper p-8 rounded-lg border border-stone/40 shadow-sm">
              <h2 className="text-xl font-heading font-bold text-ink mb-4 pb-3 border-b border-stone/40">
                {isAr ? "أبرز المميزات" : "Highlights"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(isAr ? property.highlightsAr || property.highlightsEn : property.highlightsEn).map((hl, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-ink font-medium bg-ivory p-3 rounded border border-stone/30">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Section */}
          <div className="bg-paper p-8 rounded-lg border border-stone/40 shadow-sm">
            <h2 className="text-xl font-heading font-bold text-ink mb-6 pb-3 border-b border-stone/40">
              {isAr ? "المرافق والخدمات المتوفرة" : "Features"}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {((isAr ? (property.featuresAr || property.featuresEn) : property.featuresEn) || ['Center Cooling', 'Modern Kitchen', 'Heating', 'Pet Friendly', 'Balcony', 'Covered Parking']).map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-ink font-medium bg-ivory/80 px-3 py-2.5 rounded border border-stone/30">
                  <Check size={14} className="text-gold shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location Section */}
          <div className="bg-paper p-8 rounded-lg border border-stone/40 shadow-sm">
            <h2 className="text-xl font-heading font-bold text-ink mb-4 pb-3 border-b border-stone/40">
              {isAr ? "الموقع الجغرافي" : "Location"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-ivory rounded border border-stone/30">
                <span className="text-muted block mb-0.5">{isAr ? "العنوان:" : "Address:"}</span>
                <span className="font-bold text-ink">{property.addressEn || property.locationEn}</span>
              </div>
              <div className="p-3 bg-ivory rounded border border-stone/30">
                <span className="text-muted block mb-0.5">{isAr ? "المدينة:" : "City:"}</span>
                <span className="font-bold text-ink">{property.city || "Sharjah"}</span>
              </div>
              <div className="p-3 bg-ivory rounded border border-stone/30">
                <span className="text-muted block mb-0.5">{isAr ? "الإمارة:" : "State:"}</span>
                <span className="font-bold text-ink">{property.state || "Sharjah"}</span>
              </div>
              <div className="p-3 bg-ivory rounded border border-stone/30">
                <span className="text-muted block mb-0.5">{isAr ? "الرمز البريدي:" : "Zip/Postal Code:"}</span>
                <span className="font-bold text-ink">{property.zipCode || "0000"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (4 cols): Agent Card + Request Showing Form */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* About Agent Card */}
          <div className="bg-paper p-6 lg:p-8 rounded-lg border border-stone/40 shadow-sm">
            <h3 className="text-lg font-heading text-ink font-bold mb-4 pb-3 border-b border-stone/30">
              {isAr ? "عن الوكيل المسؤول" : "About Agent"}
            </h3>

            <div className="flex items-center gap-4 mb-6">
              <img 
                src={property.agent?.image || "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"} 
                alt="Agent" 
                className="w-14 h-14 rounded-full object-cover border border-stone/50 shadow-sm"
              />
              <div>
                <div className="font-bold text-ink text-sm">{property.agent?.name || "Admin"}</div>
                <div className="text-xs text-gold font-semibold">{property.agent?.role || "Property Consultant"}</div>
                <div className="text-[11px] text-muted font-mono">{property.agent?.phone || "+971 6 522 9330"}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <a 
                href={`mailto:${property.agent?.email || "info@ahmadalshamsirealestate.ae"}`}
                className="bg-ivory border border-stone/40 text-ink py-2.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 hover:border-gold transition-colors"
              >
                <Mail size={13} className="text-gold" />
                <span>Email</span>
              </a>
              <a 
                href={`https://wa.me/${property.agent?.whatsapp || "+97165229330"}`}
                target="_blank"
                rel="noreferrer"
                className="bg-success text-white py-2.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-success/90 transition-colors"
              >
                <span>WhatsApp</span>
              </a>
            </div>

            <a 
              href={`tel:${property.agent?.phone || "+97165229330"}`}
              className="w-full bg-ink text-white py-2.5 rounded text-xs font-semibold flex items-center justify-center gap-2 hover:bg-ink-soft transition-colors"
            >
              <Phone size={14} className="text-gold" />
              <span>Call: {property.agent?.phone || "+971 6 522 9330"}</span>
            </a>
          </div>

          {/* Request a Showing Form */}
          <div className="bg-paper p-6 lg:p-8 rounded-lg border border-stone/40 shadow-sm">
            <h3 className="text-lg font-heading text-ink font-bold mb-2">
              {isAr ? "طلب معاينة العقار" : "Request a Showing"}
            </h3>
            <p className="text-xs text-ink-soft mb-6">
              {isAr ? "حدد موعداً مناسباً لمعاينة هذا العقار مع الوكيل المسؤول." : "Schedule an in-person or virtual tour with our dedicated consultant."}
            </p>

            {inquirySubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-5 rounded-md text-center">
                <CheckCircle2 size={32} className="text-emerald-600 mx-auto mb-2" />
                <div className="font-bold text-sm mb-1">{isAr ? "تم إرسال طلبك بنجاح!" : "Showing Request Sent!"}</div>
                <div className="text-xs text-emerald-700">{isAr ? "سنتواصل معك هاتفياً لتأكيد وقت الزيارة." : "We will call you to confirm your showing time."}</div>
              </div>
            ) : (
              <form onSubmit={handleInquiry} className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase font-bold text-ink tracking-wider mb-1 block">
                    {isAr ? "الاسم الكامل *" : "Your Name *"}
                  </label>
                  <input required type="text" className="w-full bg-white border border-stone/50 px-3.5 py-2.5 rounded-md text-xs outline-none focus:border-gold" placeholder="John Doe" />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-ink tracking-wider mb-1 block">
                    {isAr ? "البريد الإلكتروني *" : "Email Address *"}
                  </label>
                  <input required type="email" className="w-full bg-white border border-stone/50 px-3.5 py-2.5 rounded-md text-xs outline-none focus:border-gold" placeholder="name@domain.com" />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-ink tracking-wider mb-1 block">
                    {isAr ? "رقم الهاتف *" : "Phone Number *"}
                  </label>
                  <input required type="tel" className="w-full bg-white border border-stone/50 px-3.5 py-2.5 rounded-md text-xs outline-none focus:border-gold" placeholder="+971 50 123 4567" />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-ink tracking-wider mb-1 block">
                    {isAr ? "رسالتك أو الموعد المفضل *" : "Message *"}
                  </label>
                  <textarea required rows={3} className="w-full bg-white border border-stone/50 px-3.5 py-2.5 rounded-md text-xs outline-none focus:border-gold resize-none" defaultValue={`Hello, I am interested in [${property.titleEn}]. Please contact me to schedule a visit.`}></textarea>
                </div>

                <button type="submit" className="w-full bg-ink text-white py-3.5 rounded-md font-semibold text-xs tracking-wider uppercase hover:bg-ink-soft transition-colors flex items-center justify-center gap-2 shadow-sm">
                  <span>{isAr ? "إرسال طلب المعاينة" : "Submit Request"}</span>
                  <Send size={13} className={isAr ? "rotate-180" : ""} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Similar & Featured Properties */}
      {similarProperties.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-20 pt-16 border-t border-stone/40">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-[10px] uppercase font-bold text-gold tracking-widest mb-1">
                {isAr ? "عقارات ذات صلة" : "FEATURED PROPERTIES"}
              </div>
              <h2 className="text-2xl font-heading text-ink font-bold">
                {isAr ? "عقارات مشابهة قد تناسبك" : "Similar Properties"}
              </h2>
            </div>
            <Link to="/properties" className="text-xs font-bold text-gold hover:underline">
              {isAr ? "عرض كل العقارات ←" : "View All Properties →"}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarProperties.map((sim) => (
              <Link 
                key={sim.id} 
                to={`/properties-single-slider/${sim.id}`}
                className="bg-paper border border-stone/40 rounded-lg overflow-hidden group hover:shadow-lg transition-all"
              >
                <div className="h-44 relative overflow-hidden">
                  <img src={sim.image} alt={sim.titleEn} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className={`absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm ${sim.forRent ? 'bg-gold text-ink' : 'bg-ink text-white'}`}>
                    {sim.forRent ? "For Rent" : "For Buy"}
                  </span>
                </div>
                <div className="p-4">
                  <div className="text-[11px] text-gold font-bold uppercase tracking-wider mb-1 line-clamp-1">{sim.locationEn}</div>
                  <h4 className="text-sm font-heading font-bold text-ink mb-2 line-clamp-2 leading-snug group-hover:text-gold transition-colors">{sim.titleEn}</h4>
                  <div className="text-xs font-bold text-ink mb-2">AED {sim.price}</div>
                  <div className="flex gap-3 text-[11px] text-muted border-t border-stone/30 pt-2">
                    <span>{sim.sqft} sqft</span>
                    <span>•</span>
                    <span>{sim.beds} Beds</span>
                    <span>•</span>
                    <span>{sim.baths} Baths</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
