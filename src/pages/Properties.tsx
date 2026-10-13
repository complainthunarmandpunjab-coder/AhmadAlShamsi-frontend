import { MapPin, Search, Bed, Layers, Home as HomeIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const properties = [
  { 
    id: 1, 
    titleEn: 'Maryam Island Waterfront Residence', 
    titleAr: 'شقة فاخرة على الواجهة المائية بجزيرة مريم',
    locationEn: 'Maryam Island', 
    locationAr: 'جزيرة مريم',
    typeEn: 'Apartment', 
    typeAr: 'شقة',
    beds: 2, 
    baths: 2, 
    sqft: '1,350', 
    price: '1,850,000', 
    forRent: false,
    image: '/Golden-Hour Waterfront Skyline.png' 
  },
  { 
    id: 2, 
    titleEn: 'Aljada Boulevard Family Villa', 
    titleAr: 'فيلا عائلية راقية في بوليفارد الجادة',
    locationEn: 'Aljada', 
    locationAr: 'الجادة',
    typeEn: 'Villa', 
    typeAr: 'فيلا',
    beds: 4, 
    baths: 5, 
    sqft: '3,200', 
    price: '4,200,000', 
    forRent: false,
    image: '/Golden Hour Waterfront Promenade.png' 
  },
  { 
    id: 3, 
    titleEn: 'Masaar Green Luxury Townhouse', 
    titleAr: 'تاون هاوس عصري بين أحضان طبيعة مسار',
    locationEn: 'Masaar', 
    locationAr: 'مسار',
    typeEn: 'Townhouse', 
    typeAr: 'تاون هاوس',
    beds: 3, 
    baths: 4, 
    sqft: '2,100', 
    price: '2,650,000', 
    forRent: false,
    image: '/hero.png' 
  },
  { 
    id: 4, 
    titleEn: 'Al Mamzar Panoramic Seaview Apartment', 
    titleAr: 'شقة سنوية للإيجار بإطلالة بانورامية في الممزر',
    locationEn: 'Al Mamzar', 
    locationAr: 'الممزر',
    typeEn: 'Apartment', 
    typeAr: 'شقة',
    beds: 3, 
    baths: 3, 
    sqft: '1,850', 
    price: '85,000 / yr', 
    forRent: true,
    image: '/Golden-Hour Waterfront Skyline.png' 
  },
  { 
    id: 5, 
    titleEn: 'Al Khan Waterfront Rental Unit', 
    titleAr: 'شقة غرفة وصالة للإيجار السنوي في الخان',
    locationEn: 'Al Khan', 
    locationAr: 'الخان',
    typeEn: 'Apartment', 
    typeAr: 'شقة',
    beds: 1, 
    baths: 2, 
    sqft: '950', 
    price: '48,000 / yr', 
    forRent: true,
    image: '/Golden Hour Waterfront Promenade.png' 
  },
  { 
    id: 6, 
    titleEn: 'Sharjah Sustainable City Solar Villa', 
    titleAr: 'فيلا مستدامة صديقة للبيئة في مدينة الشارقة المستدامة',
    locationEn: 'Al Rahmaniya', 
    locationAr: 'الرحمانية',
    typeEn: 'Villa', 
    typeAr: 'فيلا',
    beds: 5, 
    baths: 6, 
    sqft: '4,500', 
    price: '5,800,000', 
    forRent: false,
    image: '/hero.png' 
  },
];

export default function Properties() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const [filterType, setFilterType] = useState('ALL');

  const filteredProperties = properties.filter((p) => {
    if (filterType === 'RENT') return p.forRent;
    if (filterType === 'SALE') return !p.forRent;
    return true;
  });

  return (
    <div className="min-h-screen bg-ivory">
      {/* Page Header */}
      <div className="bg-paper py-20 px-6 lg:px-16 border-b border-stone/50">
        <div className="max-w-7xl mx-auto">
          <div className="w-12 h-[2px] bg-gold mb-8"></div>
          <h1 className="text-display text-ink mb-6">
            {isAr ? "جميع العقارات المتاحة" : "ALL PROPERTIES"}
          </h1>
          <p className="text-body text-ink-soft max-w-2xl leading-relaxed">
            {isAr
              ? "استكشف مجموعتنا المختارة من أفضل العقارات للبيع والإيجار في جميع أنحاء الشارقة، مع خيارات سكنية وتجارية وإدارة أملاك متكاملة."
              : "Explore our curated collection of premium properties across Sharjah. Whether you are looking to purchase or find your next rental home."}
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="px-6 lg:px-16 py-6 border-b border-stone/30 bg-ivory sticky top-[70px] z-40 backdrop-blur-md bg-ivory/95">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex w-full md:w-auto items-center gap-3 text-sm bg-paper border border-stone/50 rounded-md px-4 py-2.5">
            <Search size={16} className="text-muted" />
            <input 
              type="text" 
              placeholder={isAr ? "ابحث بالاسم أو الموقع..." : "Search by name or keyword..."} 
              className="bg-transparent outline-none w-full md:w-64 text-ink text-xs" 
            />
          </div>
          
          <div className="flex w-full md:w-auto overflow-x-auto pb-2 md:pb-0 gap-2 items-center">
            {/* Quick Rent / Buy toggle buttons */}
            <button 
              onClick={() => setFilterType('ALL')}
              className={`px-3.5 py-2 rounded-md text-xs font-bold transition-colors ${
                filterType === 'ALL' ? 'bg-ink text-white' : 'bg-paper text-ink border border-stone/40 hover:bg-stone/20'
              }`}
            >
              {isAr ? "الكل" : "All"}
            </button>
            <button 
              onClick={() => setFilterType('RENT')}
              className={`px-3.5 py-2 rounded-md text-xs font-bold transition-colors ${
                filterType === 'RENT' ? 'bg-gold text-ink' : 'bg-paper text-ink border border-stone/40 hover:bg-stone/20'
              }`}
            >
              {isAr ? "للإيجار" : "For Rent"}
            </button>
            <button 
              onClick={() => setFilterType('SALE')}
              className={`px-3.5 py-2 rounded-md text-xs font-bold transition-colors ${
                filterType === 'SALE' ? 'bg-ink text-white' : 'bg-paper text-ink border border-stone/40 hover:bg-stone/20'
              }`}
            >
              {isAr ? "للبيع" : "For Sale"}
            </button>

            <select className="px-3.5 py-2 bg-paper border border-stone/50 rounded-md text-xs text-ink outline-none cursor-pointer">
              <option>{isAr ? "كل المناطق" : "All Areas"}</option>
              <option>Maryam Island</option>
              <option>Aljada</option>
              <option>Masaar</option>
              <option>Al Khan</option>
            </select>
          </div>
        </div>
      </div>

      {/* Property Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="flex items-center justify-between mb-8">
          <div className="text-xs font-bold text-ink uppercase tracking-wider">
            {isAr ? `تم العثور على ${filteredProperties.length} عقار` : `${filteredProperties.length} Properties found`}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop, idx) => (
            <motion.div 
              key={prop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-paper border border-stone/30 rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <Link to={`/property/${prop.id}`} className="block w-full h-full">
                <div className="relative h-[250px] overflow-hidden">
                  <img src={prop.image} alt={isAr ? prop.titleAr : prop.titleEn} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className={`absolute top-4 ${isAr ? 'right-4' : 'left-4'} ${prop.forRent ? 'bg-gold text-ink' : 'bg-ink text-white'} text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-sm`}>
                    {prop.forRent ? (isAr ? "للإيجار" : "FOR RENT") : (isAr ? "للبيع" : "FOR SALE")}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gold font-bold uppercase tracking-wider mb-2">
                    <MapPin size={14} /> {isAr ? prop.locationAr : prop.locationEn}
                  </div>
                  <h3 className="text-lg font-heading text-ink mb-4 font-bold line-clamp-1">
                    {isAr ? prop.titleAr : prop.titleEn}
                  </h3>
                  
                  <div className="flex items-center justify-between text-xs text-ink-soft mb-5 pb-5 border-b border-stone/40">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Bed size={15} className="text-ink" /> {prop.beds} {isAr ? "غرف" : "Bed"}
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <HomeIcon size={15} className="text-ink" /> {isAr ? prop.typeAr : prop.typeEn}
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <Layers size={15} className="text-ink" /> {prop.sqft} {isAr ? "قدم²" : "sqft"}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-muted uppercase tracking-wider">{isAr ? "السعر" : "Price"}</div>
                      <div className="text-base font-bold text-ink">AED {prop.price}</div>
                    </div>
                    <span className="text-xs font-semibold text-gold group-hover:underline">
                      {isAr ? "التفاصيل ←" : "View Details →"}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
