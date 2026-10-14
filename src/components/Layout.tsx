import { Link, Outlet, useLocation } from 'react-router-dom';
import { Phone, X, Menu, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function Layout() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isAr = i18n.language === 'ar';

  return (
    <div className={`min-h-screen bg-ivory flex flex-col ${isAr ? 'font-arabic' : 'font-body'} overflow-x-hidden`}>
      
      {/* Top Notification / Contact Bar */}
      <div className="bg-ink text-white/80 text-[11px] px-6 lg:px-16 py-2 border-b border-white/10 hidden sm:flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={13} className="text-gold" />
            <a href="tel:+97165229330" className="hover:text-gold transition-colors font-mono">+971 6 522 9330</a>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={13} className="text-gold" />
            <span>Saturday - Thursday: 10:00AM - 8:00PM (Friday: Closed)</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/sell-my-property" className="hover:text-gold transition-colors text-white font-medium">
            List Your Property
          </Link>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-2">
            <button onClick={() => toggleLanguage('en')} className={`${!isAr ? 'text-gold font-bold' : 'text-white/60 hover:text-white'}`}>EN</button>
            <span className="text-white/20">|</span>
            <button onClick={() => toggleLanguage('ar')} className={`${isAr ? 'text-gold font-bold' : 'text-white/60 hover:text-white'} font-arabic`}>العربية</button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar
          Includes requested links: Buy, Rent, Sell, Off Plan, Holiday Homes, etc.
      */}
      <nav className="flex items-center justify-between px-5 lg:px-16 py-4 lg:py-5 bg-ivory/95 backdrop-blur-md sticky top-0 z-50 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border-b border-stone/30">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 z-50 relative">
          <div className="text-gold font-heading text-3xl lg:text-4xl leading-none font-bold">A</div>
          <div>
            <div className="font-heading text-ink text-[16px] lg:text-xl uppercase tracking-widest leading-none mb-0.5 font-bold">Ahmad Al Shamsi</div>
            <div className="text-muted text-[8px] lg:text-[9px] uppercase tracking-[0.25em] font-medium leading-none">Real Estate Sharjah</div>
          </div>
        </Link>
        
        {/* Mobile Header Right */}
        <div className="flex lg:hidden items-center gap-3 z-50 relative">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider bg-stone/20 px-2 py-1 rounded-sm">
            <button onClick={() => toggleLanguage('en')} className={`${!isAr ? 'text-ink' : 'text-muted hover:text-ink'} transition-colors`}>EN</button>
            <span className="text-stone/80 font-light">|</span>
            <button onClick={() => toggleLanguage('ar')} className={`${isAr ? 'text-ink' : 'text-muted hover:text-ink'} transition-colors font-arabic text-xs`}>عربي</button>
          </div>
          
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-ink ml-1 p-1">
            {isMobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>
        
        {/* Desktop Links (Buy, Rent, Sell, Off Plan, Holiday Homes, Communities, Services, About, Contact) */}
        <div className="hidden lg:flex items-center gap-7 text-xs font-semibold text-ink uppercase tracking-wider">
          <Link to="/buy" className="hover:text-gold transition-colors py-1 border-b-2 border-transparent hover:border-gold">
            {isAr ? "شراء" : "Buy"}
          </Link>
          <Link to="/rent" className="hover:text-gold transition-colors py-1 border-b-2 border-transparent hover:border-gold">
            {isAr ? "إيجار" : "Rent"}
          </Link>
          <Link to="/sell-my-property" className="hover:text-gold transition-colors py-1 border-b-2 border-transparent hover:border-gold">
            {isAr ? "بيع" : "Sell"}
          </Link>
          <Link to="/offplan" className="hover:text-gold transition-colors py-1 border-b-2 border-transparent hover:border-gold">
            {isAr ? "قيد الإنشاء" : "Off Plan"}
          </Link>
          <Link to="/holiday-homes" className="hover:text-gold transition-colors py-1 border-b-2 border-transparent hover:border-gold">
            {isAr ? "بيوت العطلات" : "Holiday Homes"}
          </Link>
          <Link to="/communities" className="hover:text-gold transition-colors py-1 border-b-2 border-transparent hover:border-gold">
            {isAr ? "المجتمعات" : "Communities"}
          </Link>
          <Link to="/services" className="hover:text-gold transition-colors py-1 border-b-2 border-transparent hover:border-gold">
            {isAr ? "الخدمات" : "Services"}
          </Link>
          <Link to="/about-us" className="hover:text-gold transition-colors py-1 border-b-2 border-transparent hover:border-gold">
            {isAr ? "من نحن" : "About Us"}
          </Link>
          <Link to="/contact" className="hover:text-gold transition-colors py-1 border-b-2 border-transparent hover:border-gold">
            {isAr ? "اتصل بنا" : "Contact"}
          </Link>
        </div>
        
        {/* Desktop Call CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="tel:+97165229330" 
            className="flex items-center gap-2 bg-ink text-white px-4 py-2 rounded text-xs font-medium tracking-wider uppercase hover:bg-ink-soft transition-colors shadow-sm"
          >
            <Phone size={13} className="text-gold" />
            <span className="font-mono">+971 6 522 9330</span>
          </a>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-[66px] left-0 w-full bg-ivory border-b border-stone/30 shadow-2xl z-40 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 font-heading text-base text-ink uppercase tracking-widest gap-0">
              <Link to="/buy" className="py-2.5 border-b border-stone/20 hover:text-gold transition-colors">{isAr ? "شراء" : "Buy"}</Link>
              <Link to="/rent" className="py-2.5 border-b border-stone/20 hover:text-gold transition-colors">{isAr ? "إيجار" : "Rent"}</Link>
              <Link to="/sell-my-property" className="py-2.5 border-b border-stone/20 hover:text-gold transition-colors">{isAr ? "بيع" : "Sell"}</Link>
              <Link to="/offplan" className="py-2.5 border-b border-stone/20 hover:text-gold transition-colors">{isAr ? "قيد الإنشاء" : "Off Plan"}</Link>
              <Link to="/holiday-homes" className="py-2.5 border-b border-stone/20 hover:text-gold transition-colors">{isAr ? "بيوت العطلات" : "Holiday Homes"}</Link>
              <Link to="/communities" className="py-2.5 border-b border-stone/20 hover:text-gold transition-colors">{isAr ? "المجتمعات" : "Communities"}</Link>
              <Link to="/services" className="py-2.5 border-b border-stone/20 hover:text-gold transition-colors">{isAr ? "الخدمات" : "Services"}</Link>
              <Link to="/about-us" className="py-2.5 border-b border-stone/20 hover:text-gold transition-colors">{isAr ? "من نحن" : "About Us"}</Link>
              <Link to="/contact" className="py-2.5 hover:text-gold transition-colors">{isAr ? "اتصل بنا" : "Contact"}</Link>
            </div>
            <div className="bg-paper px-6 py-4 border-t border-stone/20 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-muted font-medium">Sharjah Office</span>
              <a href="tel:+97165229330" className="flex items-center gap-1.5 text-ink text-xs font-bold font-mono">
                <Phone size={13} className="text-gold" /> +971 6 522 9330
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Content */}
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>

      {/* Footer matching exactly requested footer structure:
          Sell, Buy, Rent, Other, Privacy Policy, Copyright, Phone, Opening Hours
      */}
      <footer className="bg-ink text-white px-6 lg:px-16 pt-16 pb-12 relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Brand & Contact Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 pb-10 border-b border-white/10">
            <Link to="/" className="flex items-center gap-3">
              <div className="text-gold font-heading text-4xl leading-none font-bold">A</div>
              <div>
                <div className="font-heading text-white text-xl uppercase tracking-widest leading-none mb-1 font-bold">Ahmad Al Shamsi</div>
                <div className="text-white/60 text-[10px] uppercase tracking-widest font-medium">Real Estate Sharjah</div>
              </div>
            </Link>

            {/* Direct Phone & Working Hours */}
            <div className="flex flex-wrap items-center gap-8 text-xs text-white/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <Phone size={14} />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-white/50">Call Directly</div>
                  <a href="tel:+97165229330" className="text-sm font-bold font-mono text-white hover:text-gold transition-colors">+971 6 522 9330</a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <Clock size={14} />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-white/50">Opening Hours</div>
                  <div className="text-xs font-medium text-white">10:00AM to 8:00PM (Sat - Thu)</div>
                  <div className="text-[10px] text-white/50">Friday - Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Multi-column Footer Links as requested:
              1. Sell
              2. Buy
              3. Rent
              4. Other & Info
          */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-xs">
            
            {/* Sell Column */}
            <div>
              <h4 className="font-heading text-gold text-base uppercase tracking-widest mb-4 font-bold">Sell</h4>
              <ul className="space-y-2.5 text-white/70">
                <li><Link to="/sell-my-property" className="hover:text-white transition-colors">Sell Your Property</Link></li>
                <li><Link to="/sell-my-property/sellers-guide" className="hover:text-white transition-colors">Seller's Guide</Link></li>
                <li><Link to="/sell-my-property" className="hover:text-white transition-colors">Free Property Valuation</Link></li>
                <li><Link to="/holiday-homes" className="hover:text-white transition-colors">Holiday Homes (Short-Term)</Link></li>
              </ul>
            </div>

            {/* Buy Column */}
            <div>
              <h4 className="font-heading text-gold text-base uppercase tracking-widest mb-4 font-bold">Buy</h4>
              <ul className="space-y-2.5 text-white/70">
                <li><Link to="/buy" className="hover:text-white transition-colors">Property for Sale</Link></li>
                <li><Link to="/buy/commercial-properties" className="hover:text-white transition-colors">Commercial Property</Link></li>
                <li><Link to="/buy/buyers-guide" className="hover:text-white transition-colors">Buyer's Guide</Link></li>
                <li><Link to="/offplan" className="hover:text-white transition-colors">Off Plan Property</Link></li>
              </ul>
            </div>

            {/* Rent Column */}
            <div>
              <h4 className="font-heading text-gold text-base uppercase tracking-widest mb-4 font-bold">Rent</h4>
              <ul className="space-y-2.5 text-white/70">
                <li><Link to="/rent" className="hover:text-white transition-colors">Property for Rent</Link></li>
                <li><Link to="/rent/residential-properties" className="hover:text-white transition-colors">Residential Property</Link></li>
                <li><Link to="/rent/tenants-guide" className="hover:text-white transition-colors">Tenant's Guide</Link></li>
                <li><Link to="/rent/landlord-guide" className="hover:text-white transition-colors">Landlord's Guide</Link></li>
              </ul>
            </div>

            {/* Other Column */}
            <div>
              <h4 className="font-heading text-gold text-base uppercase tracking-widest mb-4 font-bold">Other</h4>
              <ul className="space-y-2.5 text-white/70">
                <li><Link to="/our-story" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/our-team" className="hover:text-white transition-colors">Our Team</Link></li>
                <li><Link to="/about-us/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright Strip */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/50 tracking-wider">
            <div>Copyright © 2023 Ahmad Alshamsi Real Estate. All rights reserved.</div>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <a href="tel:+97165229330" className="hover:text-white transition-colors font-mono">+971 6 522 9330</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* WhatsApp Floating Action Button */}
      <a 
        href="https://wa.me/+97165229330" 
        target="_blank" 
        rel="noreferrer"
        className={`fixed bottom-6 ${isAr ? 'left-6' : 'right-6'} bg-success text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(40,122,87,0.4)] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(40,122,87,0.6)] transition-all z-50`}
        title="WhatsApp Us"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
