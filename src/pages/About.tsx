

export default function About() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center px-6 lg:px-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src="/Golden-Hour Waterfront Skyline.png" alt="Sharjah Skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-transparent w-full md:w-2/3"></div>
        </div>

        <div className="relative z-10 max-w-2xl pt-20">
          <div className="w-12 h-[2px] bg-gold mb-8"></div>
          <h1 className="text-display text-white mb-6">ABOUT US</h1>
          <p className="text-body text-white/80 max-w-md">
            Decades of local expertise, building lasting relationships in Sharjah's dynamic real estate market.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <div className="lg:w-1/2">
            <div className="text-[10px] uppercase tracking-widest text-gold font-medium mb-4">Our Story</div>
            <h2 className="text-4xl font-heading text-ink mb-8">Rooted in Sharjah, Driven by Excellence.</h2>
            <div className="space-y-6 text-ink-soft leading-relaxed">
              <p>
                Founded on the principles of integrity, transparency, and deep local knowledge, Ahmad Al Shamsi Real Estate has been a cornerstone of Sharjah's property market for over two decades.
              </p>
              <p>
                We understand that buying or selling a property is more than just a transaction; it's a life-changing decision. That's why our approach is fundamentally different. We prioritize long-term relationships over short-term gains, ensuring that every client receives honest advice tailored to their unique circumstances.
              </p>
              <p>
                Our team comprises Sharjah locals and seasoned expats who possess an unparalleled understanding of the emirate's neighborhoods, regulations, and future developments.
              </p>
            </div>
            
            <div className="flex gap-12 mt-12 pt-12 border-t border-stone/50">
              <div>
                <div className="text-4xl font-heading text-gold mb-2">20+</div>
                <div className="text-xs uppercase tracking-widest text-ink font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-heading text-gold mb-2">2B+</div>
                <div className="text-xs uppercase tracking-widest text-ink font-medium">AED in Sales</div>
              </div>
              <div>
                <div className="text-4xl font-heading text-gold mb-2">5k+</div>
                <div className="text-xs uppercase tracking-widest text-ink font-medium">Happy Clients</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10">
              <img src="/Golden Hour Waterfront Promenade.png" alt="Office" className="w-full h-full object-cover" />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold/30 z-0 rounded-sm"></div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-paper p-12 lg:p-20 border border-stone/40 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="w-10 h-[2px] bg-gold mb-6"></div>
              <h3 className="text-2xl font-heading text-ink mb-6">Our Mission</h3>
              <p className="text-ink-soft leading-relaxed">
                To elevate the standard of real estate services in Sharjah by providing ethical, transparent, and highly personalized guidance that empowers our clients to make profitable and secure property decisions.
              </p>
            </div>
            <div>
              <div className="w-10 h-[2px] bg-gold mb-6"></div>
              <h3 className="text-2xl font-heading text-ink mb-6">Our Vision</h3>
              <p className="text-ink-soft leading-relaxed">
                To be the most trusted and respected real estate advisory firm in the UAE, known for our unyielding commitment to client success and our profound contribution to Sharjah's architectural and residential evolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
