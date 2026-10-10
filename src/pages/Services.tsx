import { ArrowRight, Key, Shield, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    { icon: <Key size={32} />, title: "Property Buying", desc: "Expert guidance to find your dream home or next investment. We handle everything from viewings to negotiations and paperwork." },
    { icon: <TrendingUp size={32} />, title: "Property Selling", desc: "Strategic marketing and market analysis to ensure you get the best possible price for your property in the shortest timeframe." },
    { icon: <Shield size={32} />, title: "Property Management", desc: "Comprehensive management services including tenant screening, rent collection, and maintenance to ensure completely passive income." },
    { icon: <Users size={32} />, title: "Investment Advisory", desc: "Data-driven insights into the Sharjah real estate market to help you build a profitable, high-yielding portfolio." }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      {/* Page Header */}
      <div className="bg-paper py-20 px-6 lg:px-16 border-b border-stone/50">
        <div className="max-w-7xl mx-auto">
          <div className="w-12 h-[2px] bg-gold mb-8"></div>
          <h1 className="text-display text-ink mb-6">OUR SERVICES</h1>
          <p className="text-body text-ink-soft max-w-2xl">
            We provide end-to-end real estate solutions with a commitment to transparency, expertise, and personalized care.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-paper p-10 border border-stone/40 rounded-sm hover:border-gold/50 hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 bg-ivory rounded-full flex items-center justify-center text-gold border border-stone/50 mb-8 group-hover:bg-ink group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-heading text-ink mb-4">{service.title}</h3>
              <p className="text-ink-soft mb-8 leading-relaxed">
                {service.desc}
              </p>
              <button className="text-sm font-medium text-ink flex items-center gap-2 hover:text-gold transition-colors w-fit uppercase tracking-widest">
                Learn More <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-ink text-white p-12 lg:p-20 rounded-sm text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="/hero.png" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-heading mb-6">Need a tailored solution?</h2>
            <p className="text-white/70 mb-10">Speak directly with our senior advisors to discuss your specific real estate goals and requirements.</p>
            <button className="bg-white text-ink px-10 py-4 font-medium text-sm rounded-sm hover:bg-gold hover:text-white transition-colors mx-auto flex items-center gap-2">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
