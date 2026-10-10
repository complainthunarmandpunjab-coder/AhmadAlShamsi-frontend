import { ArrowRight, Calendar, Building, CreditCard } from 'lucide-react';


export default function OffPlan() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Page Header */}
      <div className="bg-paper py-20 px-6 lg:px-16 border-b border-stone/50">
        <div className="max-w-7xl mx-auto">
          <div className="w-12 h-[2px] bg-gold mb-8"></div>
          <h1 className="text-display text-ink mb-6">OFF-PLAN INVESTMENTS</h1>
          <p className="text-body text-ink-soft max-w-2xl">
            Capitalize on Sharjah's booming real estate market with exclusive access to premium off-plan developments and flexible payment plans.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-ink text-white p-12 rounded-sm relative overflow-hidden group">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <img src="/hero.png" alt="Off-Plan" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <div className="text-gold text-xs font-medium uppercase tracking-widest mb-4">Why Invest Off-Plan?</div>
              <h3 className="text-3xl font-heading mb-6">Higher ROI & Capital Appreciation</h3>
              <p className="text-white/70 mb-8 line-clamp-3">Investing early in Sharjah's upcoming developments allows you to secure property at launch prices, guaranteeing significant capital appreciation by handover.</p>
              <button className="flex items-center gap-2 text-sm font-medium hover:text-gold transition-colors">
                Download Investment Guide <ArrowRight size={16} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-paper p-8 border border-stone/40 rounded-sm">
              <CreditCard size={32} className="text-gold mb-6" strokeWidth={1.5} />
              <h4 className="text-lg font-heading text-ink mb-3">Flexible Payments</h4>
              <p className="text-sm text-ink-soft">Post-handover payment plans up to 5 years.</p>
            </div>
            <div className="bg-paper p-8 border border-stone/40 rounded-sm">
              <Building size={32} className="text-gold mb-6" strokeWidth={1.5} />
              <h4 className="text-lg font-heading text-ink mb-3">0% Commission</h4>
              <p className="text-sm text-ink-soft">Buy directly with developer prices and absolutely zero agency fees.</p>
            </div>
            <div className="bg-paper p-8 border border-stone/40 rounded-sm">
              <Calendar size={32} className="text-gold mb-6" strokeWidth={1.5} />
              <h4 className="text-lg font-heading text-ink mb-3">Timely Handover</h4>
              <p className="text-sm text-ink-soft">We partner only with Sharjah's most trusted developers.</p>
            </div>
            <div className="bg-paper p-8 border border-stone/40 rounded-sm">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold mb-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <h4 className="text-lg font-heading text-ink mb-3">Golden Visa</h4>
              <p className="text-sm text-ink-soft">Eligible properties qualify for the UAE Golden Visa.</p>
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl font-heading text-ink mb-10">Featured Off-Plan Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
             <div key={i} className="flex flex-col sm:flex-row bg-paper border border-stone/40 rounded-sm overflow-hidden group hover:shadow-lg transition-shadow">
               <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                 <img src={i === 1 ? '/Golden-Hour Waterfront Skyline.png' : '/Golden Hour Waterfront Promenade.png'} alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <div className="sm:w-3/5 p-8 flex flex-col justify-center">
                 <div className="text-[10px] font-medium text-gold uppercase tracking-widest mb-3">Q4 2025 Handover</div>
                 <h3 className="text-2xl font-heading text-ink mb-4">Eagle Hills - Maryam Beach</h3>
                 <p className="text-sm text-ink-soft mb-6">Exclusive beachfront apartments with a 60/40 payment plan and stunning views of the Arabian Gulf.</p>
                 <div className="text-sm font-medium text-ink flex items-center gap-2 hover:text-gold cursor-pointer transition-colors w-fit">
                   View Project <ArrowRight size={16} />
                 </div>
               </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
