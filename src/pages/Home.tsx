import { 
  MapPin, Home as HomeIcon, ArrowRight, 
  ChevronLeft, ChevronRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RentalServicesSection from '../components/RentalServicesSection';
import TeamSection from '../components/TeamSection';
import GoogleTestimonials from '../components/GoogleTestimonials';
// import { propertiesData, type Property } from '../data/properties';

const communitiesData = [
  { 
    name: 'Maryam Island', 
    nameAr: 'جزيرة مريم', 
    img: '/Golden Hour Waterfront Promenade.png',
    mapQuery: 'https://maps.google.com/maps?q=Maryam+Island+Sharjah&t=&z=15&ie=UTF8&iwloc=&output=embed',
    highlightEn: 'Waterfront promenade living with boutique dining and pristine beachfront views.',
    highlightAr: 'إطلالة مائية ساحرة مع ممشى للتنزه، مقاهي ومطاعم شاطئية راقية.'
  },
  { 
    name: 'Aljada', 
    nameAr: 'الجادة', 
    img: '/hero.png',
    mapQuery: 'https://maps.google.com/maps?q=Aljada+Sharjah&t=&z=14&ie=UTF8&iwloc=&output=embed',
    highlightEn: 'Sharjah’s largest progressive lifestyle city featuring modern architecture & parks.',
    highlightAr: 'أكبر مدينة عصرية متكاملة في الشارقة تضم مراكز ترفيهية، مدارس وحدائق.'
  },
  { 
    name: 'Masaar', 
    nameAr: 'مسار', 
    img: '/Golden-Hour Waterfront Skyline.png',
    mapQuery: 'https://maps.google.com/maps?q=Masaar+Sharjah&t=&z=14&ie=UTF8&iwloc=&output=embed',
    highlightEn: 'Lush forested master community with 50,000+ trees and dedicated cycling tracks.',
    highlightAr: 'مجتمع سكني محاط بأكثر من 50 ألف شجرة ومسارات رياضية هادئة لعشاق الطبيعة.'
  },
  { 
    name: 'Al Khan', 
    nameAr: 'الخان', 
    img: '/Golden-Hour Waterfront Skyline.png',
    mapQuery: 'https://maps.google.com/maps?q=Al+Khan+Sharjah&t=&z=14&ie=UTF8&iwloc=&output=embed',
    highlightEn: 'Historic lagoons, maritime heritage, and premium residential waterfront towers.',
    highlightAr: 'موقع حيوي يجمع بين التراث البحري وأبراج سكنية بإطلالات بحرية خلابة.'
  },
  { 
    name: 'Al Mamzar', 
    nameAr: 'الممزر', 
    img: '/Golden Hour Waterfront Promenade.png',
    mapQuery: 'https://maps.google.com/maps?q=Al+Mamzar+Sharjah&t=&z=14&ie=UTF8&iwloc=&output=embed',
    highlightEn: 'Bordering Dubai with immediate highway access and serene lagoon shorelines.',
    highlightAr: 'موقع استراتيجي على حدود دبي مع إطلالات بحرية هادئة وسهولة تنقل فائقة.'
  },
];

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const navigate = useNavigate();
  
  const [activeCommIdx, setActiveCommIdx] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);

  // Search filter form states requested by user
  const [propertyCategory, setPropertyCategory] = useState<'Residential' | 'Commercial'>('Residential');
  const [propertyStatus, setPropertyStatus] = useState<'Buy' | 'Rent'>('Buy');
  const [propertyCity, setPropertyCity] = useState('Sharjah');
  const [propertyType, setPropertyType] = useState('Flat');

  // Featured Properties tab (commented out section support)
  // const [featuredTab, setFeaturedTab] = useState<'BUY' | 'RENT'>('BUY');

  const activeComm = communitiesData[activeCommIdx];

  // Dynamic hero slides translated
  const heroSlides = [
    {
      img: '/hero.png',
      title: t('hero.title1'),
      sub: t('hero.sub1')
    },
    {
      img: '/Golden-Hour Waterfront Skyline.png',
      title: t('hero.title2'),
      sub: t('hero.sub2')
    },
    {
      img: '/Golden Hour Waterfront Promenade.png',
      title: t('hero.title3'),
      sub: t('hero.sub3')
    }
  ];

  // Real Search Submit with all query parameters
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set('status', propertyStatus.toLowerCase());
    params.set('category', propertyCategory.toLowerCase());
    if (propertyCity !== 'Sharjah') {
      params.set('location', propertyCity);
    }
    if (propertyType !== 'ALL') {
      params.set('type', propertyType);
    }
    navigate(`/properties?${params.toString()}`);
  };

  // const featuredBuyList = propertiesData.filter(p => !p.forRent).slice(0, 6);
  // const featuredRentList = propertiesData.filter(p => p.forRent).slice(0, 6);
  // const currentFeaturedList = featuredTab === 'BUY' ? featuredBuyList : featuredRentList;

  return (
    <div className="bg-ivory overflow-x-hidden">
      
      {/* Hero Section with Slider (Previous / Next) */}
      <section id="siteslider" className="relative w-full min-h-[580px] md:min-h-[680px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div 
            key={slideIdx}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={heroSlides[slideIdx].img} 
              alt="Sharjah Skyline" 
              className="w-full h-full object-cover object-center" 
            />
            <div className={`absolute inset-0 ${isAr ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-ivory/95 via-ivory/80 to-transparent w-full md:w-3/4`}></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ivory to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        {/* Hero Slider Text Content */}
        <div className="relative z-10 px-6 lg:px-16 w-full max-w-7xl mx-auto py-16">
          <div className="max-w-2xl">
            <div className="w-10 h-[3px] bg-gold mb-6"></div>
            
            <h1 className="text-3xl sm:text-4xl md:text-display font-heading text-ink mb-3 leading-[1.05]">
              {heroSlides[slideIdx].title}
            </h1>
            
            <p className="text-sm md:text-lg text-ink-soft mb-8 leading-relaxed font-medium">
              {heroSlides[slideIdx].sub}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[440px]">
              <Link 
                to="/buy" 
                className="w-full bg-ink text-white px-5 py-3.5 flex items-center justify-between hover:bg-ink-soft transition-colors font-medium text-xs uppercase tracking-wider rounded-md shadow-sm"
              >
                <span>{t('hero.exploreSale')}</span> 
                <ArrowRight size={15} className={isAr ? 'rotate-180' : ''} />
              </Link>
              <Link 
                to="/rent" 
                className="w-full border border-ink/40 bg-paper/70 backdrop-blur-md text-ink px-5 py-3.5 flex items-center justify-between hover:bg-ink hover:text-white transition-colors font-medium text-xs uppercase tracking-wider rounded-md"
              >
                <span>{t('hero.exploreRent')}</span> 
                <ArrowRight size={15} className={isAr ? 'rotate-180' : ''} />
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Controls: [Previous] [Next] */}
        <div className={`absolute bottom-16 ${isAr ? 'left-6 lg:left-16' : 'right-6 lg:right-16'} z-20 flex items-center gap-3`}>
          <button 
            onClick={() => setSlideIdx((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
            className="bg-paper/80 backdrop-blur-md border border-stone/50 hover:bg-ink hover:text-white text-ink px-4 py-2 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
          >
            <ChevronLeft size={16} className={isAr ? 'rotate-180' : ''} />
            <span>{t('hero.previous')}</span>
          </button>
          <button 
            onClick={() => setSlideIdx((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))}
            className="bg-paper/80 backdrop-blur-md border border-stone/50 hover:bg-ink hover:text-white text-ink px-4 py-2 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
          >
            <span>{t('hero.next')}</span>
            <ChevronRight size={16} className={isAr ? 'rotate-180' : ''} />
          </button>
        </div>
      </section>

      {/* Structured Search Box fully functional & bilingual */}
      <div className="relative z-20 px-4 md:px-16 -mt-10 md:-mt-16 max-w-6xl mx-auto">
        <form onSubmit={handleSearchSubmit} className="bg-paper rounded-lg shadow-xl border border-stone/40 overflow-hidden">
          
          {/* Top Selection Strip: Choose Property & Status */}
          <div className="flex flex-wrap items-center justify-between border-b border-stone/40 px-4 md:px-8 py-3 bg-stone/10 gap-3">
            
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold text-muted tracking-widest">{t('searchBox.chooseProperty')}</span>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => setPropertyCategory('Residential')}
                  className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
                    propertyCategory === 'Residential' ? 'bg-ink text-white' : 'bg-paper text-ink hover:bg-stone/30'
                  }`}
                >
                  {t('searchBox.residential')}
                </button>
                <button
                  type="button"
                  onClick={() => setPropertyCategory('Commercial')}
                  className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
                    propertyCategory === 'Commercial' ? 'bg-ink text-white' : 'bg-paper text-ink hover:bg-stone/30'
                  }`}
                >
                  {t('searchBox.commercial')}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold text-muted tracking-widest">{t('searchBox.selectStatus')}</span>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => setPropertyStatus('Rent')}
                  className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
                    propertyStatus === 'Rent' ? 'bg-gold text-ink' : 'bg-paper text-ink hover:bg-stone/30'
                  }`}
                >
                  {t('searchBox.rent')}
                </button>
                <button
                  type="button"
                  onClick={() => setPropertyStatus('Buy')}
                  className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
                    propertyStatus === 'Buy' ? 'bg-ink text-white' : 'bg-paper text-ink hover:bg-stone/30'
                  }`}
                >
                  {t('searchBox.buy')}
                </button>
              </div>
            </div>
          </div>
          
          {/* 3 Input Columns: City (Sharjah) + Type + Submit Button */}
          <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-stone/40">
            
            {/* City (Sharjah) */}
            <div className="p-4 md:p-6 md:col-span-4 flex items-start gap-3">
              <MapPin className="text-gold shrink-0 mt-0.5" size={18} />
              <div className="w-full">
                <label className="text-[10px] uppercase tracking-widest text-ink font-bold mb-1 block">
                  {t('searchBox.locationEmirate')}
                </label>
                <select 
                  value={propertyCity}
                  onChange={(e) => setPropertyCity(e.target.value)}
                  className="w-full bg-transparent text-xs text-ink font-bold outline-none cursor-pointer"
                >
                  <option value="Sharjah">{t('searchBox.sharjah')}</option>
                  <option value="Maryam Island">{t('searchBox.maryamIsland')}</option>
                  <option value="Al Khan">{t('searchBox.alKhan')}</option>
                  <option value="Aljada">{t('searchBox.aljada')}</option>
                  <option value="Hoshi">{t('searchBox.hoshi')}</option>
                  <option value="Al Nahda">{t('searchBox.alNahda')}</option>
                </select>
              </div>
            </div>
            
            {/* Select Type: Flat / House / Villa / Land Plot / Commercial / Office */}
            <div className="p-4 md:p-6 md:col-span-5 flex items-start gap-3">
              <HomeIcon className="text-gold shrink-0 mt-0.5" size={18} />
              <div className="w-full">
                <label className="text-[10px] uppercase tracking-widest text-ink font-bold mb-1 block">
                  {t('searchBox.selectType')}
                </label>
                <select 
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-transparent text-xs text-ink font-semibold outline-none cursor-pointer"
                >
                  <option value="Flat">{t('searchBox.flat')}</option>
                  <option value="House">{t('searchBox.house')}</option>
                  <option value="Villa">{t('searchBox.villa')}</option>
                  <option value="Land Plot">{t('searchBox.landPlot')}</option>
                  <option value="Commercial">{t('searchBox.commercialType')}</option>
                  <option value="Office">{t('searchBox.office')}</option>
                </select>
              </div>
            </div>

            {/* Search Submit Button */}
            <div className="p-4 md:p-6 md:col-span-3 flex items-center justify-center bg-stone/5">
              <button 
                type="submit"
                className="w-full bg-ink text-white py-3 px-5 flex items-center justify-center gap-2 hover:bg-ink-soft transition-colors font-semibold text-xs uppercase tracking-wider rounded-md shadow"
              >
                <span>{t('searchBox.searchBtn')}</span>
                <ArrowRight size={14} className={isAr ? 'rotate-180' : ''} />
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Featured Properties in Sharjah Section - Commented out as requested */}
      {/* 
      <section className="px-6 lg:px-16 pt-20 pb-16 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-[2px] bg-gold"></div>
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                  {t('featured.badge')}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading text-ink font-bold">
                {t('featured.title')}
              </h2>
            </div>

            <div className="flex items-center gap-2 bg-paper p-1.5 rounded-lg border border-stone/40 shadow-sm">
              <button
                onClick={() => setFeaturedTab('BUY')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
                  featuredTab === 'BUY' ? 'bg-ink text-white' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {t('featured.saleTab')}
              </button>
              <button
                onClick={() => setFeaturedTab('RENT')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
                  featuredTab === 'RENT' ? 'bg-gold text-ink' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {t('featured.rentTab')}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentFeaturedList.map((prop: Property) => (
              <div 
                key={prop.id}
                className="bg-paper border border-stone/40 rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <Link to={`/properties-single-slider/${prop.id}`} className="block relative h-56 overflow-hidden">
                    <img 
                      src={prop.image} 
                      alt={isAr ? prop.titleAr : prop.titleEn} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className={`absolute top-3 ${isAr ? 'right-3' : 'left-3'} text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-sm ${prop.forRent ? 'bg-gold text-ink' : 'bg-ink text-white'}`}>
                      {prop.forRent ? t('featured.forRent') : t('featured.forBuy')}
                    </div>
                    {prop.propertyId && (
                      <div className={`absolute top-3 ${isAr ? 'left-3' : 'right-3'} bg-paper/90 backdrop-blur-sm text-ink text-[10px] font-mono px-2 py-0.5 rounded`}>
                        {prop.propertyId}
                      </div>
                    )}
                  </Link>

                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-xs text-gold font-bold uppercase tracking-wider mb-2">
                      <MapPin size={13} className="shrink-0" />
                      <span className="line-clamp-1">{isAr ? prop.locationAr : prop.locationEn}</span>
                    </div>

                    <Link to={`/properties-single-slider/${prop.id}`}>
                      <h3 className="text-sm md:text-base font-heading text-ink font-bold mb-3 line-clamp-2 hover:text-gold transition-colors leading-snug">
                        {isAr ? prop.titleAr : prop.titleEn}
                      </h3>
                    </Link>

                    <div className="flex items-center gap-4 text-xs text-ink-soft mb-4 py-2.5 border-y border-stone/30">
                      <div className="flex items-center gap-1"><Bed size={14} className="text-ink" /> {prop.beds} {t('featured.beds')}</div>
                      <div className="flex items-center gap-1"><Layers size={14} className="text-ink" /> {prop.sqft} {t('featured.sqft')}</div>
                      {prop.baths && <div className="text-muted">{prop.baths} {t('featured.baths')}</div>}
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-muted uppercase font-bold tracking-wider">AED</div>
                    <div className="text-base font-bold text-ink">{prop.price}</div>
                  </div>
                  <Link 
                    to={`/properties-single-slider/${prop.id}`}
                    className="text-xs font-bold text-ink bg-ivory px-3 py-1.5 rounded border border-stone/40 hover:border-gold hover:text-gold transition-colors inline-flex items-center gap-1"
                  >
                    <span>{t('featured.viewDetails')}</span>
                    <ArrowRight size={13} className={isAr ? 'rotate-180' : ''} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              to={featuredTab === 'BUY' ? "/buy" : "/rent"} 
              className="inline-flex items-center gap-2 bg-ink text-white px-8 py-3.5 rounded-md text-xs font-bold uppercase tracking-wider hover:bg-ink-soft transition-colors shadow-sm"
            >
              <span>{featuredTab === 'BUY' ? t('featured.exploreAllSale') : t('featured.exploreAllRent')}</span>
              <ArrowRight size={14} className={isAr ? 'rotate-180' : ''} />
            </Link>
          </div>
        </div>
      </section>
      */}

      {/* About Us Card as detailed in user prompt */}
      <section className="px-6 lg:px-16 py-16 bg-paper border-t border-b border-stone/40">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-[2px] bg-gold"></div>
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                {t('aboutUs.tag')}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading text-ink font-bold mb-6">
              {t('aboutUs.title')}
            </h2>
            <div className="space-y-4 text-xs md:text-sm text-ink-soft leading-relaxed">
              <p>{t('aboutUs.p1')}</p>
              <p>{t('aboutUs.p2')}</p>
            </div>
            <div className="mt-8 flex gap-4">
              <Link to="/about" className="bg-ink text-white px-6 py-3 rounded text-xs font-bold uppercase tracking-wider hover:bg-ink-soft transition-colors">
                {t('aboutUs.ourStory')}
              </Link>
              <Link to="/contact" className="border border-stone/60 text-ink px-6 py-3 rounded text-xs font-bold uppercase tracking-wider hover:bg-stone/20 transition-colors">
                {t('aboutUs.contactAdvisors')}
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
              <img src="/Golden Hour Waterfront Promenade.png" alt="Ahmad Al Shamsi Real Estate" className="w-full h-full object-cover" />
            </div>
            <div className={`absolute -bottom-6 ${isAr ? '-right-6' : '-left-6'} bg-gold text-ink p-5 rounded-lg shadow-lg hidden sm:block max-w-[200px]`}>
              <div className="font-heading text-2xl font-bold">{t('aboutUs.yearsBadge')}</div>
              <div className="text-[10px] uppercase font-bold tracking-wider">{t('aboutUs.yearsSub')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (What Our Clients Say) - Commented out as requested */}
      {/* 
      <section className="px-6 lg:px-16 py-16 bg-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[10px] uppercase font-bold text-gold tracking-widest mb-2">
            {t('testimonials.tag')}
          </div>
          <h2 className="text-3xl font-heading text-ink font-bold mb-10">
            {t('testimonials.title')}
          </h2>

          <div className="bg-paper p-8 md:p-12 rounded-lg border border-stone/40 shadow-sm relative">
            <div className="flex justify-center text-gold mb-6 gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            
            <blockquote className="text-sm md:text-base text-ink-soft leading-relaxed italic mb-8 max-w-2xl mx-auto">
              {t('testimonials.quote')}
            </blockquote>
            
            <div>
              <div className="font-heading font-bold text-ink text-base">{t('testimonials.author')}</div>
              <div className="text-xs text-gold uppercase tracking-widest font-semibold">{t('testimonials.role')}</div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Communities Section (COMMUNITIES WE CALL HOME) with Map under Image */}
      <section className="px-6 lg:px-16 py-16 bg-paper border-t border-stone/40">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-[2px] bg-gold"></div>
              <div className="text-[9px] uppercase tracking-widest text-gold font-bold">{isAr ? "مجتمعات الشارقة" : "Sharjah Communities"}</div>
            </div>
            <h2 className="text-[2rem] md:text-h2 leading-[1.1] font-heading text-ink mb-6">
              {isAr ? "مجتمعات نعتبرها موطننا" : "COMMUNITIES WE CALL HOME"}
            </h2>
            
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
          
          {/* Right column: Image + Map directly under image with equal width */}
          <div className="lg:w-2/3 flex flex-col gap-4">
            <div className="relative h-[240px] md:h-[340px] w-full rounded-lg overflow-hidden group shadow-md">
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
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="text-2xl font-heading mb-1">{isAr ? activeComm.nameAr : activeComm.name}</div>
                <p className="text-xs text-white/90 max-w-md">{isAr ? activeComm.highlightAr : activeComm.highlightEn}</p>
              </div>
            </div>

            {/* Map directly underneath the image matching its width */}
            <div className="w-full bg-paper p-3 rounded-lg border border-stone/40 shadow-sm">
              <div className="flex items-center justify-between mb-2 px-1">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-ink">
                  <MapPin size={14} className="text-gold" />
                  <span>{isAr ? `خريطة: ${activeComm.nameAr}` : `Location Map: ${activeComm.name}`}</span>
                </div>
                <Link to="/communities" className="text-[11px] font-semibold text-gold hover:underline flex items-center gap-1">
                  <span>{isAr ? "استكشف العقارات" : "Explore Properties"}</span>
                  <ArrowRight size={12} className={isAr ? 'rotate-180' : ''} />
                </Link>
              </div>
              
              <div className="w-full h-[180px] md:h-[220px] rounded-md overflow-hidden border border-stone/30">
                <iframe
                  title={`Map of ${activeComm.name}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={activeComm.mapQuery}
                ></iframe>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-1">
              <Link to="/communities" className="text-xs font-semibold text-ink hover:text-gold flex items-center gap-1.5 transition-colors">
                <span>{isAr ? "استكشف جميع المجتمعات" : "Explore All Communities"}</span>
                <ArrowRight size={14} className={isAr ? 'rotate-180' : ''} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Services Highlight Section */}
      <RentalServicesSection />

      {/* Meet The Team Section */}
      <TeamSection />

      {/* Google Testimonials */}
      <GoogleTestimonials />

      {/* CTA Footer Block */}
      <section className="relative h-[280px] w-full flex items-center justify-center lg:justify-start px-6 lg:px-16 mt-8">
        <div className="absolute inset-0 z-0">
          <img src="/footer.png" alt="Skyline" className="w-full h-full object-cover object-bottom" />
          <div className={`absolute inset-0 ${isAr ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-ivory/95 via-ivory/80 to-transparent w-full md:w-2/3`}></div>
        </div>
        
        <div className="relative z-10 max-w-xl text-center lg:text-left w-full">
          <h2 className="text-2xl md:text-3xl font-heading text-ink mb-2">
            {t('cta.title')}
          </h2>
          <p className="text-body text-ink-soft mb-6 text-xs md:text-sm">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <Link 
              to="/contact" 
              className="bg-ink text-white px-6 py-3 flex items-center gap-3 hover:bg-ink-soft transition-colors font-medium text-xs uppercase tracking-wider rounded-md shadow-sm"
            >
              <span>{t('cta.speakAdvisor')}</span> 
              <ArrowRight size={14} className={isAr ? 'rotate-180' : ''} />
            </Link>
            <Link 
              to="/sell-my-property" 
              className="border border-ink/40 bg-paper/60 backdrop-blur-md text-ink px-6 py-3 flex items-center gap-3 hover:bg-ink hover:text-white transition-colors font-medium text-xs uppercase tracking-wider rounded-md"
            >
              <span>{t('cta.sellProperty')}</span> 
              <ArrowRight size={14} className={isAr ? 'rotate-180' : ''} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
