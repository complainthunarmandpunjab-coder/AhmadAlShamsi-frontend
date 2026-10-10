import { MapPin, Home as HomeIcon, Bed, Filter, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const properties = [
  { id: 1, title: 'Maryam Island Residence', location: 'Maryam Island', type: 'Apartment', beds: 2, baths: 2, sqft: '1,350', price: '1,850,000', image: '/Golden-Hour Waterfront Skyline.png' },
  { id: 2, title: 'Aljada Boulevard Villa', location: 'Aljada', type: 'Villa', beds: 4, baths: 5, sqft: '3,200', price: '4,200,000', image: '/Golden Hour Waterfront Promenade.png' },
  { id: 3, title: 'Masaar Green Community', location: 'Masaar', type: 'Townhouse', beds: 3, baths: 4, sqft: '2,100', price: '2,650,000', image: '/hero.png' },
  { id: 4, title: 'Al Mamzar Waterfront', location: 'Al Mamzar', type: 'Apartment', beds: 3, baths: 3, sqft: '1,850', price: '2,400,000', image: '/Golden-Hour Waterfront Skyline.png' },
  { id: 5, title: 'Al Khan Seaview', location: 'Al Khan', type: 'Apartment', beds: 1, baths: 1, sqft: '950', price: '1,100,000', image: '/Golden Hour Waterfront Promenade.png' },
  { id: 6, title: 'Sharjah Sustainable City', location: 'Al Rahmaniya', type: 'Villa', beds: 5, baths: 6, sqft: '4,500', price: '5,800,000', image: '/hero.png' },
];

export default function Properties() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Page Header */}
      <div className="bg-paper py-20 px-6 lg:px-16 border-b border-stone/50">
        <div className="max-w-7xl mx-auto">
          <div className="w-12 h-[2px] bg-gold mb-8"></div>
          <h1 className="text-display text-ink mb-6">ALL PROPERTIES</h1>
          <p className="text-body text-ink-soft max-w-2xl">
            Explore our curated collection of premium properties across Sharjah. Use the filters below to find exactly what you're looking for.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="px-6 lg:px-16 py-8 border-b border-stone/30 bg-ivory sticky top-[90px] z-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex w-full md:w-auto items-center gap-4 text-sm bg-white border border-stone/50 rounded-sm px-4 py-3">
            <Search size={18} className="text-muted" />
            <input type="text" placeholder="Search by name or keyword..." className="bg-transparent outline-none w-full md:w-64 text-ink" />
          </div>
          
          <div className="flex w-full md:w-auto overflow-x-auto pb-2 md:pb-0 gap-3">
            <select className="px-4 py-3 bg-white border border-stone/50 rounded-sm text-sm text-ink outline-none cursor-pointer">
              <option>All Areas</option>
              <option>Maryam Island</option>
              <option>Aljada</option>
              <option>Masaar</option>
            </select>
            <select className="px-4 py-3 bg-white border border-stone/50 rounded-sm text-sm text-ink outline-none cursor-pointer">
              <option>Property Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Townhouse</option>
            </select>
            <select className="px-4 py-3 bg-white border border-stone/50 rounded-sm text-sm text-ink outline-none cursor-pointer">
              <option>Price Range</option>
              <option>Under 1M</option>
              <option>1M - 3M</option>
              <option>3M - 5M</option>
              <option>5M+</option>
            </select>
            <button className="px-4 py-3 bg-ink text-white rounded-sm text-sm font-medium flex items-center gap-2 hover:bg-ink-soft transition-colors whitespace-nowrap">
              <Filter size={16} /> Filter Results
            </button>
          </div>
        </div>
      </div>

      {/* Property Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="flex items-center justify-between mb-8">
          <div className="text-sm font-medium text-ink-soft">{properties.length} Properties found</div>
          <div className="flex items-center gap-2 text-sm text-ink-soft">
            <span>Sort by:</span>
            <select className="bg-transparent outline-none text-ink font-medium cursor-pointer">
              <option>Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, idx) => (
            <motion.div 
              key={prop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-paper border border-stone/30 rounded-sm overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <Link to={`/property/${prop.id}`} className="block w-full h-full">
                <div className="relative h-[250px] overflow-hidden">
                  <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-ink/80 backdrop-blur-md text-white text-[10px] font-medium uppercase tracking-widest px-3 py-1 rounded-sm">
                    FOR SALE
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-ink-soft font-medium uppercase tracking-wider mb-3">
                    <MapPin size={14} className="text-gold" /> {prop.location}
                  </div>
                  <h3 className="text-xl font-heading text-ink mb-4">{prop.title}</h3>
                  
                  <div className="flex items-center justify-between text-sm text-ink-soft mb-6 pb-6 border-b border-stone/50">
                    <div className="flex items-center gap-1"><Bed size={16} /> {prop.beds}</div>
                    <div className="flex items-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><path d="M10 5h5.5c.83 0 1.5.67 1.5 1.5v4"/></svg> 
                      {prop.baths}
                    </div>
                    <div className="flex items-center gap-1">
                      <HomeIcon size={16} /> {prop.sqft} sqft
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-heading text-ink font-semibold">AED {prop.price}</div>
                    <div className="text-xs font-medium text-gold uppercase tracking-widest group-hover:text-ink transition-colors">View Details</div>
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
