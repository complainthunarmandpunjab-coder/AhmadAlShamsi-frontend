import { MapPin, Home as HomeIcon, Bed, Layers, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import RentalServicesSection from '../components/RentalServicesSection';
import TeamSection from '../components/TeamSection';
import GoogleTestimonials from '../components/GoogleTestimonials';

const communitiesData = [
  { 
    name: 'Maryam Island', 
    nameAr: 'جزيرة مريم', 
    img: '/Golden Hour Waterfront Promenade.png',
    highlightEn: 'Waterfront promenade living with boutique dining and pristine beachfront views.',
    highlightAr: 'إطلالة مائية ساحرة مع ممشى للتنزه، مقاهي ومطاعم شاطئية راقية.'
  },
  { 
    name: 'Aljada', 
    nameAr: 'الجادة', 
    img: '/hero.png',
    highlightEn: 'Sharjah’s largest progressive lifestyle city featuring modern architecture & parks.',
    highlightAr: 'أكبر مدينة عصرية متكاملة في الشارقة تضم مراكز ترفيهية، مدارس وحدائق.'
  },
  { 
    name: 'Masaar', 
    nameAr: 'مسار', 
    img: '/Golden-Hour Waterfront Skyline.png',
    highlightEn: 'Lush forested master community with 50,000+ trees and dedicated cycling tracks.',
    highlightAr: 'مجتمع سكني محاط بأكثر من 50 ألف شجرة ومسارات رياضية هادئة لعشاق الطبيعة.'
  },
  { 
    name: 'Al Khan', 
    nameAr: 'الخان', 
    img: '/Golden-Hour Waterfront Skyline.png',
    highlightEn: 'Historic lagoons, maritime heritage, and premium residential waterfront towers.',
    highlightAr: 'موقع حيوي يجمع بين التراث البحري وأبراج سكنية بإطلالات بحرية خلابة.'
  },
  { 
    name: 'Al Mamzar', 
    nameAr: 'الممزر', 
    img: '/Golden Hour Waterfront Promenade.png',
    highlightEn: 'Bordering Dubai with immediate highway access and serene lagoon shorelines.',
    highlightAr: 'موقع استراتيجي على حدود دبي مع إطلالات بحرية هادئة وسهولة تنقل فائقة.'
  },
];

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  
  const [activeCommIdx, setActiveCommIdx] = useState(0);
  const [searchTab, setSearchTab] = useState<'BUY' | 'RENT' | 'OFF-PLAN'>('BUY');
  const activeComm = communitiesData[activeCommIdx];

  return (
    <div className="bg-ivory overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/hero.png" alt="Sharjah Skyline" className="w-full h-full object-cover object-center" />
          <div className={`absolute inset-0 ${isAr ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-ivory via-ivory/80 to-transparent w-full md:w-3/4`}></div>
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
          
          {/* Functional Buttons with Router Links */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[400px]">
            <Link 
              to="/properties" 
              className="w-full bg-ink text-white px-5 py-3.5 flex items-center justify-between hover:bg-ink-soft transition-colors font-medium text-sm rounded-md shadow-sm"
            >
              <span>{t('hero.explore')}</span> 
              <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
            </Link>
            <Link 
              to="/contact" 
              className="w-full border border-ink/40 bg-paper/60 backdrop-blur-md text-ink px-5 py-3.5 flex items-center justify-between hover:bg-ink hover:text-white transition-colors font-medium text-sm rounded-md"
            >
              <span>{t('hero.speak')}</span> 
              <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
            </Link>
          </div>
        </div>
      </section>

      {/* Search Box */}
      <div className="relative z-20 px-4 md:px-16 -mt-8 md:-mt-20 max-w-6xl mx-auto">
        <div className="bg-paper rounded-lg shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-stone/30 overflow-hidden">
          <div className="flex border-b border-stone/50 px-2 md:px-6">
            <button 
              onClick={() => setSearchTab('BUY')}
              className={`px-4 py-4 text-xs font-bold uppercase tracking-widest border-b-[3px] transition-colors ${
                searchTab === 'BUY' ? 'border-gold text-ink' : 'border-transparent text-muted hover:text-ink'
              }`}
            >
              {t('search.buy')}
            </button>
            <button 
              onClick={() => setSearchTab('RENT')}
              className={`px-4 py-4 text-xs font-bold uppercase tracking-widest border-b-[3px] transition-colors ${
                searchTab === 'RENT' ? 'border-gold text-ink' : 'border-transparent text-muted hover:text-ink'
              }`}
            >
              {t('search.rent')}
            </button>
            <button 
              onClick={() => setSearchTab('OFF-PLAN')}
              className={`px-4 py-4 text-xs font-bold uppercase tracking-widest border-b-[3px] transition-colors ${
                searchTab === 'OFF-PLAN' ? 'border-gold text-ink' : 'border-transparent text-muted hover:text-ink'
              }`}
            >
              {t('search.offPlan')}
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-stone/50">
            <div className="p-4 md:p-6 flex items-start gap-3 border-b border-stone/50 md:border-b-0">
              <MapPin className="text-ink shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
              <div className="w-full">
                <label className="text-[10px] uppercase tracking-widest text-ink font-semibold mb-0.5 block">{t('search.location')}</label>
                <select className="w-full bg-transparent text-xs text-muted outline-none appearance-none cursor-pointer">
                  <option>{t('search.selectLocation')}</option>
                  <option>Maryam Island</option>
                  <option>Aljada</option>
                  <option>Masaar</option>
                  <option>Al Khan</option>
                </select>
              </div>
            </div>
            
            <div className="p-4 md:p-6 flex items-start gap-3 border-b border-stone/50 md:border-b-0">
              <HomeIcon className="text-ink shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
              <div className="w-full">
                <label className="text-[10px] uppercase tracking-widest text-ink font-semibold mb-0.5 block">{t('search.propertyType')}</label>
                <select className="w-full bg-transparent text-xs text-muted outline-none appearance-none cursor-pointer">
                  <option>{t('search.selectType')}</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Townhouse</option>
                </select>
              </div>
            </div>
            
            <div className="p-4 md:p-6 flex items-start gap-3">
              <Bed className="text-ink shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
              <div className="w-full">
                <label className="text-[10px] uppercase tracking-widest text-ink font-semibold mb-0.5 block">{t('search.bedrooms')}</label>
                <select className="w-full bg-transparent text-xs text-muted outline-none appearance-none cursor-pointer">
                  <option>Any</option>
                  <option>1 Bed</option>
                  <option>2 Beds</option>
                  <option>3+ Beds</option>
                </select>
              </div>
            </div>
            
            <div className="p-4 md:p-6 flex items-start gap-3">
              <Layers className="text-ink shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
              <div className="w-full">
                <label className="text-[10px] uppercase tracking-widest text-ink font-semibold mb-0.5 block">{t('search.price')}</label>
                <select className="w-full bg-transparent text-xs text-muted outline-none appearance-none cursor-pointer">
                  <option>Any</option>
                  <option>{searchTab === 'RENT' ? 'AED 35k - 60k/yr' : 'Under 1M AED'}</option>
                  <option>{searchTab === 'RENT' ? 'AED 60k - 100k/yr' : '1M - 2.5M AED'}</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-paper border-t border-stone/50 md:border-none md:pt-0">
            <Link 
              to="/properties" 
              className="w-full bg-ink text-white py-3.5 flex items-center justify-center gap-3 hover:bg-ink-soft transition-colors font-medium text-sm rounded-md shadow-sm"
            >
              <span>{t('search.searchBtn')}</span> 
              <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
            </Link>
          </div>
        </div>
      </div>

      {/* Rental Services Highlight Section (Requirement #1) */}
      <RentalServicesSection />

      {/* Communities Section (Requirement #5 with unique highlights) */}
      <section className="px-6 lg:px-16 pt-16 md:pt-24 pb-16 bg-ivory">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-[2px] bg-gold"></div>
              <div className="text-[9px] uppercase tracking-widest text-gold font-bold">{t('communities.tag')}</div>
            </div>
            <h2 
              className="text-[2rem] md:text-h2 leading-[1.1] font-heading text-ink mb-6"
              dangerouslySetInnerHTML={{ __html: t('communities.title') }}
            />
            
            <div className="flex flex-col border-t border-stone/40">
              {communitiesData.map((comm, idx) => (
                <button 
                  key={comm.name}
                  onClick={() => setActiveCommIdx(idx)}
                  className={`w-full ${isAr ? 'text-right' : 'text-left'} py-3.5 border-b border-stone/40 font-medium transition-colors text-sm ${
                    activeCommIdx === idx 
                      ? `${isAr ? 'border-r-4 border-r-gold pr-3' : 'border-l-4 border-l-gold pl-3'} text-ink font-bold bg-stone/20` 
                      : `${isAr ? 'pr-4' : 'pl-4'} text-ink hover:text-gold`
                  }`}
                >
                  {isAr ? comm.nameAr : comm.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:w-2/3 flex flex-col gap-3">
            <div className="relative h-[240px] md:h-[400px] w-full rounded-lg overflow-hidden group shadow-md">
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
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="text-2xl font-heading mb-1">{isAr ? activeComm.nameAr : activeComm.name}</div>
                <p className="text-xs text-white/90 max-w-md">{isAr ? activeComm.highlightAr : activeComm.highlightEn}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <Link to="/communities" className="text-xs font-semibold text-ink hover:text-gold flex items-center gap-1.5 transition-colors">
                <span>{t('communities.exploreIn')} {isAr ? activeComm.nameAr : activeComm.name}</span>
                <ArrowRight size={14} className={isAr ? 'rotate-180' : ''} />
              </Link>
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
              <div className="text-[9px] uppercase tracking-widest text-gold font-bold">{t('featured.tag')}</div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-heading text-ink mb-4">
              {isAr ? "شقة سكنية بإطلالة بحرية في جزيرة مريم" : "Maryam Island Residence"}
            </h3>
            
            <div className="flex items-center gap-4 text-xs text-ink-soft mb-4">
              <div className="flex items-center gap-1.5"><MapPin size={14} className="text-ink" /> {isAr ? "جزيرة مريم" : "Maryam Island"}</div>
              <div className="w-px h-3 bg-stone"></div>
              <div className="flex items-center gap-1.5"><HomeIcon size={14} className="text-ink" /> {isAr ? "شقة" : "Apartment"}</div>
            </div>
            
            <div className="flex items-center gap-5 text-xs text-ink-soft mb-6 pb-6 border-b border-stone/50">
              <div className="flex items-center gap-1.5"><Bed size={16} className="text-ink" /> 2 {isAr ? "غرف" : "Bed"}</div>
              <div className="flex items-center gap-1.5"><Layers size={16} className="text-ink" /> 1,350 {t('featured.sqft')}</div>
            </div>
            
            <div className="text-xl md:text-2xl font-bold text-ink mb-6">AED 1,850,000</div>
            
            <Link to="/properties" className="w-full md:w-auto bg-ink text-white px-8 py-3.5 flex items-center justify-between md:justify-center gap-3 hover:bg-ink-soft transition-colors font-medium text-sm rounded-md shadow-sm text-center">
              <span>{t('featured.viewProperty')}</span> <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
            </Link>
          </div>
        </div>
      </section>

      {/* Meet The Team Section (Requirement #2) */}
      <TeamSection />

      {/* Google Testimonials (Requirement #3) */}
      <GoogleTestimonials />

      {/* CTA Footer Block with Working Link (Requirement #6) */}
      <section className="relative h-[260px] w-full flex items-center justify-center lg:justify-start px-6 lg:px-16 mt-8">
        <div className="absolute inset-0 z-0">
          <img src="/footer.png" alt="Skyline" className="w-full h-full object-cover object-bottom" />
          <div className={`absolute inset-0 ${isAr ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-ivory/95 via-ivory/80 to-transparent w-full md:w-2/3`}></div>
        </div>
        
        <div className="relative z-10 max-w-xl text-center lg:text-left w-full">
          <h2 className="text-3xl md:text-display font-heading text-ink mb-2">{t('footer.ctaTitle')}</h2>
          <p className="text-body text-ink-soft mb-6 text-sm">{t('footer.ctaSub')}</p>
          <Link 
            to="/contact" 
            className="mx-auto lg:mx-0 bg-ink text-white px-6 py-3.5 flex items-center justify-between w-full md:w-fit gap-4 hover:bg-ink-soft transition-colors font-medium text-sm rounded-md shadow-sm"
          >
            <span>{t('hero.speak')}</span> 
            <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
          </Link>
        </div>
      </section>
    </div>
  );
}
