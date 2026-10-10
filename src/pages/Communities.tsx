import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const communities = [
  { name: 'Maryam Island', desc: 'Sharjah’s premier waterfront destination offering a unique lifestyle with pristine beaches.', img: '/Golden Hour Waterfront Promenade.png' },
  { name: 'Aljada', desc: 'The largest mixed-use destination in Sharjah with everything you need within walking distance.', img: '/hero.png' },
  { name: 'Masaar', desc: 'A forested master community designed to offer a peaceful, active and healthy lifestyle.', img: '/Golden-Hour Waterfront Skyline.png' },
  { name: 'Al Mamzar', desc: 'Situated on the border of Dubai and Sharjah, offering spectacular sea views and easy access.', img: '/Golden Hour Waterfront Promenade.png' },
];

export default function Communities() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Page Header */}
      <div className="bg-paper py-20 px-6 lg:px-16 border-b border-stone/50">
        <div className="max-w-7xl mx-auto">
          <div className="w-12 h-[2px] bg-gold mb-8"></div>
          <h1 className="text-display text-ink mb-6">COMMUNITIES</h1>
          <p className="text-body text-ink-soft max-w-2xl">
            Discover the most sought-after neighborhoods in Sharjah. From beachfront living to lush green forests, find the perfect place to call home.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 space-y-24">
        {communities.map((comm, idx) => (
          <motion.div 
            key={comm.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
          >
            <div className="lg:w-1/2 h-[450px] w-full overflow-hidden rounded-sm relative group">
              <img src={comm.img} alt={comm.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest mb-2">
                  <MapPin size={16} className="text-gold" /> Sharjah
                </div>
                <div className="text-3xl font-heading">{comm.name}</div>
              </div>
            </div>
            
            <div className="lg:w-1/2 lg:px-12">
              <div className="w-10 h-[2px] bg-gold mb-6"></div>
              <h2 className="text-4xl font-heading text-ink mb-6">Living in {comm.name}</h2>
              <p className="text-ink-soft mb-10 leading-relaxed text-lg">
                {comm.desc}
              </p>
              <ul className="space-y-4 mb-10 text-ink-soft">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full"></div> Family-friendly environment
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full"></div> Strategic central location
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full"></div> World-class amenities
                </li>
              </ul>
              <button className="border border-ink bg-transparent text-ink px-8 py-4 flex items-center justify-center gap-3 hover:bg-ink hover:text-white transition-colors font-medium text-sm rounded-sm">
                Explore Properties in {comm.name} <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
