import { useParams, Link } from 'react-router-dom';
import { MapPin, Bed, Layers, Home as HomeIcon, Check, ArrowLeft, ArrowRight, Share2, Heart, Phone, Mail, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function PropertyDetails() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <div className="bg-ivory min-h-screen pb-20">
      {/* Property Hero */}
      <div className="w-full h-[50vh] md:h-[70vh] relative">
        <img src="/Golden-Hour Waterfront Skyline.png" alt="Property" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent"></div>
        
        <div className="absolute top-6 left-6 right-6 md:top-10 md:left-16 md:right-16 flex justify-between items-center z-10">
          <Link to="/" className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-ink transition-colors">
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
                <span className="bg-gold text-ink px-3 py-1.5 rounded-sm text-[10px] font-bold">For Sale</span>
                <span className="flex items-center gap-1"><MapPin size={14} /> Maryam Island, Sharjah</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-heading text-white mb-2 leading-tight">Maryam Island Residence</h1>
              <p className="text-white/80 text-lg font-medium">Luxury Waterfront Apartment</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-lg text-white md:min-w-[280px]">
              <div className="text-[10px] uppercase tracking-widest text-white/70 mb-1 font-bold">Asking Price</div>
              <div className="text-3xl md:text-4xl font-bold font-heading text-gold mb-5">AED 1,850,000</div>
              <div className="flex gap-5 text-sm font-medium border-t border-white/20 pt-4">
                <div className="flex items-center gap-1.5"><Bed size={16} className="text-gold" /> 2 Bed</div>
                <div className="flex items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><path d="M10 5h5.5c.83 0 1.5.67 1.5 1.5v4"/><path d="M7 19v2"/><path d="M17 19v2"/></svg>
                  2 Bath
                </div>
                <div className="flex items-center gap-1.5"><Layers size={16} className="text-gold" /> 1,350 sqft</div>
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
            <h2 className="text-2xl font-heading text-ink mb-6 pb-4 border-b border-stone/50">Property Overview</h2>
            <div className="prose text-ink-soft text-sm md:text-base leading-relaxed">
              <p className="mb-4">
                Experience unparalleled luxury living in this stunning 2-bedroom apartment located in the prestigious Maryam Island. Offering breathtaking waterfront views, this property represents the pinnacle of modern architecture blended with traditional charm.
              </p>
              <p>
                The apartment features a spacious open-plan living area, a fully equipped modern kitchen with premium appliances, and floor-to-ceiling windows that bathe the interior in natural light. Both bedrooms come with en-suite bathrooms and built-in wardrobes, while the expansive balcony provides the perfect setting for sunset views.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-ink mb-6 pb-4 border-b border-stone/50">Amenities & Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Waterfront Views', 'Private Balcony', 'Swimming Pool', 'Fitness Center', '24/7 Security', 'Covered Parking', 'Built-in Wardrobes', 'Central A/C', 'Retail Outlets'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-ink-soft font-medium">
                  <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-paper border border-stone/40 p-6 md:p-8 rounded-lg shadow-sm sticky top-28">
            <h3 className="text-lg font-heading text-ink mb-6 uppercase tracking-widest text-center">Interested in this property?</h3>
            
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-stone/30">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-stone border-2 border-ivory shadow-sm">
                <img src={`https://ui-avatars.com/api/?name=Ahmad+Agent&background=102A38&color=fff`} alt="Agent" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-ink">Ahmad Al Shamsi</div>
                <div className="text-xs text-muted font-medium uppercase tracking-widest">Senior Advisor</div>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-ink text-white py-3.5 rounded-md flex items-center justify-center gap-3 hover:bg-ink-soft transition-colors text-sm font-medium shadow-sm">
                <Phone size={16} /> Show Phone Number
              </button>
              <button className="w-full border-2 border-ink text-ink py-3.5 rounded-md flex items-center justify-center gap-3 hover:bg-ink hover:text-white transition-colors text-sm font-medium">
                <Mail size={16} /> Send Email
              </button>
              <button className="w-full bg-success text-white py-3.5 rounded-md flex items-center justify-center gap-3 hover:opacity-90 transition-opacity text-sm font-medium shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg> 
                WhatsApp
              </button>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted cursor-pointer hover:text-ink transition-colors">
              <Calendar size={14} /> Schedule a viewing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
