import { Link, Outlet, useLocation } from 'react-router-dom';
import { Phone, X, Menu, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function Layout() {
  const { t, i18n } = useTranslation();
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
  }, [location.pathname]);

  const isAr = i18n.language === 'ar';

  return (
    <div className={`min-h-screen bg-ivory flex flex-col ${isAr ? 'font-arabic' : 'font-body'} overflow-x-hidden`}>
      {/* Navigation */}
      <nav className="flex items-center justify-between px-5 lg:px-16 py-4 lg:py-6 bg-ivory/95 backdrop-blur-md sticky top-0 z-50 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border-b border-stone/30">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 z-50 relative">
          <div className="text-gold font-heading text-3xl lg:text-4xl leading-none">A</div>
          <div>
            <div className="font-heading text-ink text-[15px] lg:text-xl uppercase tracking-widest leading-none mb-0.5">Ahmad Al Shamsi</div>
            <div className="text-muted text-[8px] lg:text-[10px] uppercase tracking-[0.2em] font-medium leading-none">{t('footer.realEstate')}</div>
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
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10 text-xs font-medium text-ink-soft uppercase tracking-wider">
          <Link to="/properties" className="hover:text-gold transition-colors">{t('nav.properties')}</Link>
          <Link to="/communities" className="hover:text-gold transition-colors">{t('nav.communities')}</Link>
          <Link to="/off-plan" className="hover:text-gold transition-colors">{t('nav.offPlan')}</Link>
          <Link to="/services" className="hover:text-gold transition-colors">{t('nav.services')}</Link>
          <Link to="/about" className="hover:text-gold transition-colors">{t('nav.about')}</Link>
          <Link to="/contact" className="hover:text-gold transition-colors">{t('nav.contact')}</Link>
        </div>
        
        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-6">
          <div className={`flex items-center gap-4 text-xs font-medium text-ink-soft ${isAr ? 'border-l pl-6' : 'border-r pr-6'} border-stone uppercase tracking-wider`}>
            <button onClick={() => toggleLanguage('en')} className={`${!isAr ? 'text-gold' : 'hover:text-gold'} transition-colors font-body`}>EN</button>
            <span className="text-stone">|</span>
            <button onClick={() => toggleLanguage('ar')} className={`${isAr ? 'text-gold' : 'hover:text-gold'} transition-colors font-arabic`}>العربية</button>
          </div>
          <button className="text-ink-soft hover:text-gold transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
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
            className="lg:hidden absolute top-[70px] left-0 w-full bg-ivory border-b border-stone/30 shadow-2xl z-40 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 font-heading text-lg text-ink uppercase tracking-widest gap-1">
              <Link to="/properties" className="py-3 border-b border-stone/20 hover:text-gold transition-colors">{t('nav.properties')}</Link>
              <Link to="/communities" className="py-3 border-b border-stone/20 hover:text-gold transition-colors">{t('nav.communities')}</Link>
              <Link to="/off-plan" className="py-3 border-b border-stone/20 hover:text-gold transition-colors">{t('nav.offPlan')}</Link>
              <Link to="/services" className="py-3 border-b border-stone/20 hover:text-gold transition-colors">{t('nav.services')}</Link>
              <Link to="/about" className="py-3 border-b border-stone/20 hover:text-gold transition-colors">{t('nav.about')}</Link>
              <Link to="/contact" className="py-3 hover:text-gold transition-colors">{t('nav.contact')}</Link>
            </div>
            <div className="bg-paper px-6 py-5 border-t border-stone/20 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-muted font-medium">Get in touch</span>
              <div className="flex items-center gap-2 text-ink text-sm font-medium">
                <Phone size={14} className="text-gold" /> +971 50 123 4567
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-ink text-white px-6 lg:px-16 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12 border-b border-white/10 pb-12">
          <Link to="/" className="flex items-center gap-3">
            <div className="text-gold font-heading text-4xl leading-none">A</div>
            <div>
              <div className="font-heading text-white text-xl uppercase tracking-widest leading-none mb-1">Ahmad Al Shamsi</div>
              <div className="text-white/50 text-[10px] uppercase tracking-widest font-medium">{t('footer.realEstate')}</div>
            </div>
          </Link>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-medium text-white/70 uppercase tracking-wider">
            <Link to="/properties" className="hover:text-gold transition-colors">{t('nav.properties')}</Link>
            <Link to="/communities" className="hover:text-gold transition-colors">{t('nav.communities')}</Link>
            <Link to="/off-plan" className="hover:text-gold transition-colors">{t('nav.offPlan')}</Link>
            <Link to="/services" className="hover:text-gold transition-colors">{t('nav.services')}</Link>
            <Link to="/about" className="hover:text-gold transition-colors">{t('nav.about')}</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">{t('nav.contact')}</Link>
          </div>
          
          <div className="flex items-center gap-6">
            <div className={`flex items-center gap-4 text-[10px] font-medium text-white/70 ${isAr ? 'border-l pl-6' : 'border-r pr-6'} border-white/10 uppercase tracking-wider`}>
              <button onClick={() => toggleLanguage('en')} className={`${!isAr ? 'text-white' : 'hover:text-white'} transition-colors font-body`}>EN</button>
              <span className="text-white/30">|</span>
              <button onClick={() => toggleLanguage('ar')} className={`${isAr ? 'text-white' : 'hover:text-white'} transition-colors font-arabic`}>العربية</button>
            </div>
            <div className="flex gap-4 text-white/70">
              <a href="#" className="hover:text-white transition-colors font-medium text-sm">IN</a>
              <a href="#" className="hover:text-white transition-colors font-medium text-sm">LI</a>
              <a href="#" className="hover:text-white transition-colors"><X size={18} /></a>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-[11px] font-medium tracking-widest">
              <Phone size={14} />
              <span className="font-body">+971 50 123 4567</span>
            </div>
          </div>
        </div>
        
        <div className={`flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/40 uppercase tracking-widest pt-6 ${isAr ? 'flex-row-reverse' : ''}`}>
          <div>{t('footer.rights')}</div>
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
          </div>
        </div>
      </footer>
      
      {/* WhatsApp FAB */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        href="#" 
        className={`fixed bottom-6 ${isAr ? 'left-6' : 'right-6'} bg-success text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(40,122,87,0.4)] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(40,122,87,0.6)] transition-all z-50`}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </div>
  );
}
