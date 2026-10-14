import { MapPin, Search, Bed, Layers, Home as HomeIcon, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useMemo, useEffect } from 'react';
import { propertiesData, type Property } from '../data/properties';

export default function Properties() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Read params from search bar on homepage or direct links
  const getInitialFilter = () => {
    if (location.pathname.startsWith('/buy')) return 'SALE';
    if (location.pathname.startsWith('/rent')) return 'RENT';
    const statusParam = searchParams.get('status');
    if (statusParam === 'rent') return 'RENT';
    if (statusParam === 'buy') return 'SALE';
    return 'ALL';
  };

  const getInitialLocation = () => {
    return searchParams.get('location') || 'ALL';
  };

  const getInitialType = () => {
    const typeParam = searchParams.get('type');
    if (typeParam) {
      const upper = typeParam.toUpperCase();
      if (upper.includes('FLAT') || upper.includes('APARTMENT')) return 'FLAT';
      if (upper.includes('VILLA') || upper.includes('HOUSE')) return 'VILLA';
      if (upper.includes('COMMERCIAL') || upper.includes('OFFICE')) return 'COMMERCIAL';
    }
    return 'ALL';
  };

  const [filterType, setFilterType] = useState<string>(getInitialFilter);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedLocation, setSelectedLocation] = useState(getInitialLocation);
  const [selectedPropertyType, setSelectedPropertyType] = useState(getInitialType);

  useEffect(() => {
    setFilterType(getInitialFilter());
    if (searchParams.get('location')) {
      setSelectedLocation(searchParams.get('location')!);
    }
    if (searchParams.get('type')) {
      setSelectedPropertyType(getInitialType());
    }
  }, [location.pathname, searchParams]);

  const filteredProperties = useMemo(() => {
    return propertiesData.filter((p: Property) => {
      // Rent / Buy Filter
      if (filterType === 'RENT' && !p.forRent) return false;
      if (filterType === 'SALE' && p.forRent) return false;

      // Location filter
      if (selectedLocation !== 'ALL') {
        const locUpper = (p.locationEn + ' ' + (p.addressEn || '') + ' ' + p.locationAr).toUpperCase();
        if (!locUpper.includes(selectedLocation.toUpperCase())) return false;
      }

      // Property type filter
      if (selectedPropertyType !== 'ALL') {
        const typeUpper = (p.typeEn + ' ' + p.titleEn).toUpperCase();
        if (selectedPropertyType === 'FLAT' && !typeUpper.includes('FLAT') && !typeUpper.includes('STUDIO') && !typeUpper.includes('APARTMENT')) return false;
        if (selectedPropertyType === 'VILLA' && !typeUpper.includes('VILLA') && !typeUpper.includes('HOUSE') && !typeUpper.includes('PENTHOUSE')) return false;
        if (selectedPropertyType === 'COMMERCIAL' && p.category !== 'commercial') return false;
      }

      // Search keyword
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = (p.titleEn + ' ' + p.titleAr).toLowerCase().includes(q);
        const matchLoc = (p.locationEn + ' ' + p.locationAr).toLowerCase().includes(q);
        const matchId = (p.propertyId || '').toLowerCase().includes(q);
        if (!matchTitle && !matchLoc && !matchId) return false;
      }

      return true;
    });
  }, [filterType, searchQuery, selectedLocation, selectedPropertyType]);

  const buyProperties = useMemo(() => propertiesData.filter(p => !p.forRent), []);
  const rentProperties = useMemo(() => propertiesData.filter(p => p.forRent), []);

  return (
    <div className="min-h-screen bg-ivory">
      {/* Page Header Banner */}
      <div className="bg-paper py-20 px-6 lg:px-16 border-b border-stone/50">
        <div className="max-w-7xl mx-auto">
          <div className="w-12 h-[2px] bg-gold mb-8"></div>
          <span className="text-[11px] uppercase tracking-widest text-gold font-bold block mb-2">
            {isAr ? "عقارات الشارقة الحصرية" : "EXCLUSIVE PROPERTIES IN SHARJAH"}
          </span>
          <h1 className="text-display text-ink mb-6">
            {filterType === 'SALE' 
              ? (isAr ? "عقارات للبيع في الشارقة" : "Properties for sale in Sharjah")
              : filterType === 'RENT'
              ? (isAr ? "عقارات للإيجار في الشارقة" : "Properties for rent in Sharjah")
              : (isAr ? "عقارات مميزة في الشارقة" : "Featured Properties in Sharjah")}
          </h1>
          <p className="text-body text-ink-soft max-w-2xl leading-relaxed">
            {isAr
              ? "استكشف قائمتنا الواسعة من الفلل الفاخرة، الشقق المطلة على البحر في جزيرة مريم والخان، واستوديوهات الجادة ذات العوائد الاستثمارية العالية."
              : "Discover our premier listings across Maryam Island, Al Khan, Al Nahda, Hoshi and Waterfront City with verified title deeds and high ROI."}
          </p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="px-6 lg:px-16 py-6 border-b border-stone/30 bg-ivory sticky top-[70px] z-40 backdrop-blur-md bg-ivory/95">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <div className="flex w-full md:w-auto items-center gap-3 text-sm bg-paper border border-stone/50 rounded-md px-4 py-2.5">
            <Search size={16} className="text-muted shrink-0" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? "ابحث بالاسم، الموقع أو رقم المعرف..." : "Search by keyword, location, or ID..."} 
              className="bg-transparent outline-none w-full md:w-72 text-ink text-xs" 
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-xs text-muted hover:text-ink">✕</button>
            )}
          </div>
          
          {/* Filter Pills */}
          <div className="flex w-full md:w-auto overflow-x-auto pb-2 md:pb-0 gap-2 items-center">
            <button 
              onClick={() => setFilterType('ALL')}
              className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors shrink-0 ${
                filterType === 'ALL' ? 'bg-ink text-white' : 'bg-paper text-ink border border-stone/40 hover:bg-stone/20'
              }`}
            >
              {isAr ? "الكل" : "All"} ({propertiesData.length})
            </button>
            <button 
              onClick={() => setFilterType('SALE')}
              className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors shrink-0 ${
                filterType === 'SALE' ? 'bg-ink text-white shadow-sm' : 'bg-paper text-ink border border-stone/40 hover:bg-stone/20'
              }`}
            >
              {isAr ? "عقارات للبيع" : "For Buy"} ({buyProperties.length})
            </button>
            <button 
              onClick={() => setFilterType('RENT')}
              className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors shrink-0 ${
                filterType === 'RENT' ? 'bg-gold text-ink shadow-sm' : 'bg-paper text-ink border border-stone/40 hover:bg-stone/20'
              }`}
            >
              {isAr ? "عقارات للإيجار" : "For Rent"} ({rentProperties.length})
            </button>

            {/* Location selector */}
            <select 
              value={selectedLocation} 
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-3.5 py-2 bg-paper border border-stone/50 rounded-md text-xs text-ink outline-none cursor-pointer shrink-0"
            >
              <option value="ALL">{isAr ? "كل المناطق" : "All Locations"}</option>
              <option value="Maryam Island">Maryam Island (جزيرة مريم)</option>
              <option value="Al Khan">Al Khan (الخان)</option>
              <option value="Al Nahda">Al Nahda (النهدة)</option>
              <option value="Hoshi">Hoshi (حوشي)</option>
              <option value="Aljada">Aljada (الجادة)</option>
              <option value="Al Mamzar">Al Mamzar (الممزر)</option>
            </select>

            {/* Type selector */}
            <select 
              value={selectedPropertyType} 
              onChange={(e) => setSelectedPropertyType(e.target.value)}
              className="px-3.5 py-2 bg-paper border border-stone/50 rounded-md text-xs text-ink outline-none cursor-pointer shrink-0"
            >
              <option value="ALL">{isAr ? "جميع الأنواع" : "All Types"}</option>
              <option value="FLAT">{isAr ? "شقق واستوديوهات" : "Flats & Apartments"}</option>
              <option value="VILLA">{isAr ? "فلل وبنتهاوس" : "Villas & Penthouses"}</option>
              <option value="COMMERCIAL">{isAr ? "عقارات تجارية" : "Commercial Properties"}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Property Results Count */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-10 pb-4 flex items-center justify-between">
        <div className="text-xs font-bold text-ink uppercase tracking-wider">
          {isAr ? `تم العثور على ${filteredProperties.length} عقار موثق` : `Showing ${filteredProperties.length} Verified Properties`}
        </div>
        
        {/* Quick Links */}
        <div className="hidden sm:flex gap-3 text-xs font-bold">
          <button 
            onClick={() => setFilterType('SALE')} 
            className={`hover:underline ${filterType === 'SALE' ? 'text-gold underline' : 'text-ink-soft'}`}
          >
            {isAr ? "عقارات للبيع في الشارقة" : "Properties for sale in Sharjah"}
          </button>
          <span className="text-stone">|</span>
          <button 
            onClick={() => setFilterType('RENT')} 
            className={`hover:underline ${filterType === 'RENT' ? 'text-gold underline' : 'text-ink-soft'}`}
          >
            {isAr ? "عقارات للإيجار في الشارقة" : "Properties for rent in Sharjah"}
          </button>
        </div>
      </div>

      {/* Property Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pb-20">
        {filteredProperties.length === 0 ? (
          <div className="bg-paper p-12 rounded-lg border border-stone/40 text-center my-8">
            <h3 className="font-heading text-xl text-ink mb-2">{isAr ? "لا توجد نتائج مطابقة" : "No Properties Match Your Search"}</h3>
            <p className="text-xs text-muted mb-6">{isAr ? "جرّب تغيير خيارات البحث أو إعادة ضبط الفلاتر." : "Try adjusting your search criteria or resetting filters."}</p>
            <button 
              onClick={() => { setFilterType('ALL'); setSelectedLocation('ALL'); setSelectedPropertyType('ALL'); setSearchQuery(''); }}
              className="bg-ink text-white px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider"
            >
              {isAr ? "إعادة ضبط الفلاتر" : "Reset Filters"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop: Property, idx: number) => (
              <motion.div 
                key={prop.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 6) * 0.05 }}
                className="bg-paper border border-stone/30 rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <Link to={`/properties-single-slider/${prop.id}`} className="block relative h-[240px] overflow-hidden">
                    <img 
                      src={prop.image} 
                      alt={isAr ? prop.titleAr : prop.titleEn} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    
                    {/* Status Badge */}
                    <div className={`absolute top-4 ${isAr ? 'right-4' : 'left-4'} ${prop.forRent ? 'bg-gold text-ink font-bold' : 'bg-ink text-white font-bold'} text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-sm`}>
                      {prop.forRent ? (isAr ? "للإيجار" : "For Rent") : (isAr ? "للبيع" : "For Buy")}
                    </div>

                    {prop.propertyId && (
                      <div className={`absolute top-4 ${isAr ? 'left-4' : 'right-4'} bg-paper/90 backdrop-blur-sm text-ink text-[10px] font-mono px-2 py-1 rounded`}>
                        {prop.propertyId}
                      </div>
                    )}
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-gold font-bold uppercase tracking-wider mb-2">
                      <MapPin size={14} className="shrink-0" /> 
                      <span className="line-clamp-1">{isAr ? prop.locationAr : prop.locationEn}</span>
                    </div>

                    <Link to={`/properties-single-slider/${prop.id}`}>
                      <h3 className="text-base font-heading text-ink font-bold mb-4 line-clamp-2 hover:text-gold transition-colors leading-snug">
                        {isAr ? prop.titleAr : prop.titleEn}
                      </h3>
                    </Link>
                    
                    {/* Spec Row */}
                    <div className="grid grid-cols-3 gap-2 text-xs text-ink-soft mb-5 py-3 border-y border-stone/40">
                      <div className="flex items-center gap-1 font-medium">
                        <Bed size={15} className="text-ink shrink-0" /> 
                        <span>{prop.beds > 0 ? `${prop.beds} ${isAr ? 'غرف' : 'Beds'}` : (isAr ? 'استوديو' : 'Studio')}</span>
                      </div>
                      <div className="flex items-center gap-1 font-medium">
                        <HomeIcon size={15} className="text-ink shrink-0" /> 
                        <span className="truncate">{isAr ? prop.typeAr : prop.typeEn}</span>
                      </div>
                      <div className="flex items-center gap-1 font-medium justify-end">
                        <Layers size={15} className="text-ink shrink-0" /> 
                        <span>{prop.sqft} {isAr ? 'قدم²' : 'sqft'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-muted uppercase tracking-wider font-semibold">
                      {prop.forRent ? (isAr ? "الإيجار السنوي" : "Annual Rent") : (isAr ? "السعر" : "Price")}
                    </div>
                    <div className="text-base font-bold text-ink">
                      AED {prop.price}
                    </div>
                  </div>

                  <Link 
                    to={`/properties-single-slider/${prop.id}`}
                    className="text-xs font-bold text-ink bg-ivory px-3.5 py-2 rounded border border-stone/40 hover:border-gold hover:text-gold transition-colors inline-flex items-center gap-1"
                  >
                    <span>{isAr ? "التفاصيل" : "Details"}</span>
                    <ArrowRight size={13} className={isAr ? "rotate-180" : ""} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Explore Sales & Rentals Educational Section */}
      <section className="bg-paper border-t border-stone/40 py-16 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Explore Sales */}
          <div className="bg-ivory p-8 rounded-lg border border-stone/40">
            <h3 className="text-xl font-heading font-bold text-ink mb-4 pb-2 border-b border-stone/30">
              {isAr ? "خدمات مبيعات العقارات" : "Sales with Ahmad Alshamsi Real Estate"}
            </h3>
            <p className="text-xs text-ink-soft leading-relaxed mb-6">
              {isAr 
                ? "شركة أحمد الشامسي للعقارات هي وكالة رائدة تقدم خدمات شاملة في سوق العقارات الديناميكي في الشارقة، متخصصة في تأجير وبيع الشقق وشراء الفلل."
                : "Ahmad Al Shamsi Real Estate is a premier real estate agency providing comprehensive services in the dynamic property market. Our expertise lies in assisting clients with renting and selling apartments, as well as facilitating the purchase and sale of both apartments and villas."}
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <Link to="/buy" className="bg-paper px-3 py-1.5 rounded border border-stone/40 hover:border-gold hover:text-gold transition-colors">{isAr ? "عقارات سكنية" : "Residential Properties"}</Link>
              <Link to="/buy" className="bg-paper px-3 py-1.5 rounded border border-stone/40 hover:border-gold hover:text-gold transition-colors">{isAr ? "عقارات تجارية" : "Commercial Properties"}</Link>
              <Link to="/contact" className="bg-paper px-3 py-1.5 rounded border border-stone/40 hover:border-gold hover:text-gold transition-colors">{isAr ? "دليل المشتري" : "Buyer's Guide"}</Link>
              <Link to="/contact" className="bg-paper px-3 py-1.5 rounded border border-stone/40 hover:border-gold hover:text-gold transition-colors">{isAr ? "استشارات التمويل" : "Mortgage Advice"}</Link>
            </div>
          </div>

          {/* Explore Rental Services */}
          <div className="bg-ivory p-8 rounded-lg border border-stone/40">
            <h3 className="text-xl font-heading font-bold text-ink mb-4 pb-2 border-b border-stone/30">
              {isAr ? "خدمات الإيجارات وإدارة الأملاك" : "Explore Rental Services"}
            </h3>
            <p className="text-xs text-ink-soft leading-relaxed mb-6">
              {isAr
                ? "بفضل المعرفة المتعمقة بكل تفاصيل الشارقة والعلاقات الوطيدة مع كبار المطورين المحليين، يمكنك الاعتماد على فريقنا المرخص لإيجاد مسكنك المثالي أو إدارة محفظتك الاستثمارية."
                : "With inside out knowledge of Sharjah and connections with local developers, you can count on our team of RERA-qualified professionals to find the perfect rental home for you or a valuable investment to add to your portfolio."}
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <Link to="/rent" className="bg-paper px-3 py-1.5 rounded border border-stone/40 hover:border-gold hover:text-gold transition-colors">{isAr ? "إيجارات سكنية" : "Residential Rentals"}</Link>
              <Link to="/rent" className="bg-paper px-3 py-1.5 rounded border border-stone/40 hover:border-gold hover:text-gold transition-colors">{isAr ? "عقارات تجارية" : "Commercial Properties"}</Link>
              <Link to="/contact" className="bg-paper px-3 py-1.5 rounded border border-stone/40 hover:border-gold hover:text-gold transition-colors">{isAr ? "دليل المستأجر" : "Tenant's Guide"}</Link>
              <Link to="/services" className="bg-paper px-3 py-1.5 rounded border border-stone/40 hover:border-gold hover:text-gold transition-colors">{isAr ? "دليل المالك" : "Landlord's Guide"}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
