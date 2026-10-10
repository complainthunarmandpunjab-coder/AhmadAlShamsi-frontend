import { MapPin, Home as HomeIcon, Bed, Layers, ArrowRight, ArrowLeft, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const communitiesData = [
  { name: 'Maryam Island', img: '/Golden Hour Waterfront Promenade.png' },
  { name: 'Al Khan', img: '/Golden-Hour Waterfront Skyline.png' },
  { name: 'Al Khalidiya', img: '/hero.png' },
  { name: 'Al Mamzar', img: '/Golden Hour Waterfront Promenade.png' },
  { name: 'Al Nahda', img: '/Golden-Hour Waterfront Skyline.png' },
  { name: 'Aljada', img: '/hero.png' },
  { name: 'Masaar', img: '/Golden Hour Waterfront Promenade.png' },
];

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  
  const [activeCommIdx, setActiveCommIdx] = useState(0);
  const activeComm = communitiesData[activeCommIdx];

  const handleNextComm = () => setActiveCommIdx((prev) => (prev + 1) % communitiesData.length);
  const handlePrevComm = () => setActiveCommIdx((prev) => (prev === 0 ? communitiesData.length - 1 : prev - 1));

  return (
    <div className="bg-ivory overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/hero.png" alt="Sharjah Skyline" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/80 to-transparent w-full md:w-3/4"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ivory to-transparent"></div>
        </div>

        <div className="relative z-10 px-6 lg:px-16 pt-10">
          <div className="w-10 h-[3px] bg-gold mb-6"></div>
          <h1 
            className="text-[2.65rem] md:text-display leading-[1.05] font-heading text-ink mb-4 max-w-[350px] md:max-w-2xl" 
            dangerouslySetInnerHTML={{ __html: t('hero.title') }} 
          />
          <p className="text-body text-ink-soft mb-8 max-w-[300px] md:max-w-md leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col gap-3 w-full max-w-[320px]">
            <button className="w-full bg-ink text-white px-5 py-3.5 flex items-center justify-between hover:bg-ink-soft transition-colors font-medium text-sm rounded-md shadow-sm">
              <span>{t('hero.explore')}</span> <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
            </button>
            <button className="w-full border border-ink/40 bg-transparent text-ink px-5 py-3.5 flex items-center justify-between hover:bg-ink hover:text-white transition-colors font-medium text-sm rounded-md backdrop-blur-sm">
              <span>{t('hero.speak')}</span> <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
            </button>
          </div>
        </div>
      </section>

      {/* Search Box - Absolute on Desktop, Relative overlapping on Mobile */}
      <div className="relative z-20 px-4 md:px-16 -mt-8 md:-mt-20 max-w-6xl mx-auto">
        <div className="bg-paper rounded-lg shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-stone/30 overflow-hidden">
          <div className="flex border-b border-stone/50 px-2 md:px-6">
            <button className="px-4 py-4 text-xs font-bold uppercase tracking-widest border-b-[3px] border-gold text-ink">BUY</button>
            <button className="px-4 py-4 text-xs font-bold uppercase tracking-widest border-b-[3px] border-transparent text-muted hover:text-ink transition-colors">RENT</button>
            <button className="px-4 py-4 text-xs font-bold uppercase tracking-widest border-b-[3px] border-transparent text-muted hover:text-ink transition-colors">OFF-PLAN</button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-stone/50">
            <div className="p-4 md:p-6 flex items-start gap-3 border-b border-stone/50 md:border-b-0">
              <MapPin className="text-ink shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
              <div className="w-full">
                <label className="text-[10px] uppercase tracking-widest text-ink font-semibold mb-0.5 block">Location</label>
                <select className="w-full bg-transparent text-xs text-muted outline-none appearance-none cursor-pointer">
                  <option>Select Location</option>
                  <option>Maryam Island</option>
                  <option>Al Khan</option>
                </select>
              </div>
            </div>
            
            <div className="p-4 md:p-6 flex items-start gap-3 border-b border-stone/50 md:border-b-0">
              <HomeIcon className="text-ink shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
              <div className="w-full">
                <label className="text-[10px] uppercase tracking-widest text-ink font-semibold mb-0.5 block">Property Type</label>
                <select className="w-full bg-transparent text-xs text-muted outline-none appearance-none cursor-pointer">
                  <option>Select type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                </select>
              </div>
            </div>
            
            <div className="p-4 md:p-6 flex items-start gap-3">
              <Bed className="text-ink shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
              <div className="w-full">
                <label className="text-[10px] uppercase tracking-widest text-ink font-semibold mb-0.5 block">Bedrooms</label>
                <select className="w-full bg-transparent text-xs text-muted outline-none appearance-none cursor-pointer">
                  <option>Any</option>
                  <option>1 Bed</option>
                  <option>2 Beds</option>
                </select>
              </div>
            </div>
            
            <div className="p-4 md:p-6 flex items-start gap-3">
              <Layers className="text-ink shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
              <div className="w-full">
                <label className="text-[10px] uppercase tracking-widest text-ink font-semibold mb-0.5 block">Price</label>
                <select className="w-full bg-transparent text-xs text-muted outline-none appearance-none cursor-pointer">
                  <option>Any</option>
                  <option>Under 1M</option>
                  <option>1M - 3M</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-paper border-t border-stone/50 md:border-none md:pt-0">
            <button className="w-full bg-ink text-white py-3.5 flex items-center justify-center gap-3 hover:bg-ink-soft transition-colors font-medium text-sm rounded-md shadow-sm">
              Search Properties <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
            </button>
          </div>
        </div>
      </div>

      {/* Communities Section */}
      <section className="px-6 lg:px-16 pt-16 md:pt-24 pb-16 bg-ivory">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-[2px] bg-gold"></div>
              <div className="text-[9px] uppercase tracking-widest text-gold font-bold">The places we know</div>
            </div>
            <h2 className="text-[2rem] md:text-h2 leading-[1.1] font-heading text-ink mb-6">COMMUNITIES<br />WE CALL HOME.</h2>
            
            <div className="flex flex-col border-t border-stone/40">
              {communitiesData.map((comm, idx) => (
                <button 
                  key={comm.name}
                  onClick={() => setActiveCommIdx(idx)}
                  className={`w-full text-left py-3.5 border-b border-stone/40 font-medium transition-colors text-sm ${
                    activeCommIdx === idx 
                      ? 'border-l-4 border-l-gold pl-3 text-ink font-bold bg-stone/20' 
                      : 'pl-4 text-ink hover:text-gold'
                  }`}
                >
                  {comm.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:w-2/3 flex flex-col gap-3">
            <div className="relative h-[220px] md:h-[400px] w-full rounded-lg overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeComm.img}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={activeComm.img} 
                  alt={activeComm.name} 
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <MapPin size={18} />
                <span className="font-medium text-sm">{activeComm.name}</span>
              </div>
              <div className="absolute bottom-4 right-4 flex gap-4 text-white">
                <button onClick={handlePrevComm} className="hover:text-gold transition-colors"><ArrowLeft size={20} /></button>
                <button onClick={handleNextComm} className="hover:text-gold transition-colors"><ArrowRight size={20} /></button>
              </div>
            </div>
            
            <div className="relative h-[200px] md:h-[250px] w-full rounded-lg overflow-hidden border border-stone/40 bg-stone">
              <iframe
                title={`Map of ${activeComm.name}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(activeComm.name + ' Sharjah')}&t=m&z=14&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeComm.name + ' Sharjah')}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Open ${activeComm.name} in Google Maps`}
                className="absolute bottom-4 right-4 text-ink p-2 bg-white/90 backdrop-blur-md shadow-lg rounded-md hover:bg-white hover:scale-105 hover:text-gold transition-all z-10"
              >
                <Maximize2 size={18} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Property */}
      <section className="px-6 lg:px-16 pb-16 bg-ivory">
        <div className="max-w-6xl mx-auto bg-paper rounded-lg border border-stone/30 shadow-sm p-4 md:p-8 flex flex-col lg:flex-row gap-6 md:gap-12">
          <div className="w-full lg:w-1/2 h-[220px] md:h-[350px] rounded-lg overflow-hidden relative">
            <img src="/Golden-Hour Waterfront Skyline.png" className="w-full h-full object-cover" alt="Featured Property" />
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-[2px] bg-gold"></div>
              <div className="text-[9px] uppercase tracking-widest text-gold font-bold">Featured Property</div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-heading text-ink mb-4">Maryam Island Residence</h3>
            
            <div className="flex items-center gap-4 text-xs text-ink-soft mb-4">
              <div className="flex items-center gap-1.5"><MapPin size={14} className="text-ink" /> Maryam Island</div>
              <div className="w-px h-3 bg-stone"></div>
              <div className="flex items-center gap-1.5"><HomeIcon size={14} className="text-ink" /> Apartment</div>
            </div>
            
            <div className="flex items-center gap-5 text-xs text-ink-soft mb-6 pb-6 border-b border-stone/50">
              <div className="flex items-center gap-1.5"><Bed size={16} className="text-ink" /> 2 Bed</div>
              <div className="flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><path d="M10 5h5.5c.83 0 1.5.67 1.5 1.5v4"/><path d="M7 19v2"/><path d="M17 19v2"/></svg>
                2 Bath
              </div>
              <div className="flex items-center gap-1.5">
                <Layers size={16} className="text-ink" /> 1,350 sq ft
              </div>
            </div>
            
            <div className="text-xl md:text-2xl font-bold text-ink mb-6">AED 1,850,000</div>
            
            <Link to="/property/maryam-island-residence" className="w-full md:w-auto bg-ink text-white px-8 py-3.5 flex items-center justify-between md:justify-center gap-3 hover:bg-ink-soft transition-colors font-medium text-sm rounded-md shadow-sm text-center">
              <span>View Property</span> <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 lg:px-16 py-12 bg-ivory">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[2px] bg-gold"></div>
              <div className="text-[9px] uppercase tracking-widest text-ink font-bold">What our clients say</div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-ink hover:text-gold transition-colors"><ArrowLeft size={16} /></button>
              <button className="text-ink hover:text-gold transition-colors"><ArrowRight size={16} /></button>
            </div>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 -mx-6 px-6 md:mx-0 md:px-0">
            {[
              { name: "Sarah Khan", role: "Buyer", text: '"Professional, transparent and genuinely helpful. Ahmed Al Shamsi made the entire process smooth and stress-free."' },
              { name: "Ahmed Raza", role: "Investor", text: '"Excellent local knowledge and honest advice. We found the perfect home in Maryam Island with their guidance."' },
              { name: "Fatima Al Mansoori", role: "Owner", text: '"Their team truly understands Sharjah. We felt supported at every step."' }
            ].map((t, index) => (
              <div key={index} className="min-w-[280px] md:min-w-[320px] snap-center bg-paper p-6 border border-stone/30 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-stone rounded-full overflow-hidden shrink-0">
                    <img src={`https://ui-avatars.com/api/?name=${t.name.replace(' ', '+')}&background=102A38&color=fff`} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex gap-0.5 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                </div>
                <p className="text-ink-soft text-[13px] mb-6 leading-relaxed font-medium">{t.text}</p>
                <div>
                  <div className="text-xs font-bold text-ink">{t.name}</div>
                  <div className="text-[10px] text-muted">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Block */}
      <section className="relative h-[250px] w-full flex items-center justify-center lg:justify-start px-6 lg:px-16 mt-8">
        <div className="absolute inset-0 z-0">
          <img src="/footer.png" alt="Skyline" className="w-full h-full object-cover object-bottom" />
          <div className="absolute inset-0 bg-gradient-to-r from-ivory/95 via-ivory/80 to-transparent w-full md:w-2/3"></div>
        </div>
        
        <div className="relative z-10 max-w-xl text-center lg:text-left w-full">
          <h2 className="text-3xl md:text-display font-heading text-ink mb-2">MAKE SHARJAH HOME.</h2>
          <p className="text-body text-ink-soft mb-6 text-sm">Your next chapter starts with local knowledge.</p>
          <button className="mx-auto lg:mx-0 bg-ink text-white px-6 py-3.5 flex items-center justify-between w-full md:w-fit gap-4 hover:bg-ink-soft transition-colors font-medium text-sm rounded-md shadow-sm">
            <span>Speak With an Advisor</span> <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
