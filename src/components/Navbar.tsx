import { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, Home, Info, Shield, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t('nav.home'), href: '#', icon: <Home size={18} /> },
    { name: t('nav.whyChooseUs'), href: '#why-choose-us', icon: <Info size={18} /> },
    { name: t('nav.benefits'), href: '#benefits', icon: <Shield size={18} /> },
    { name: t('nav.pricing'), href: '#pricing', icon: <CreditCard size={18} /> },
  ];

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-7xl mx-auto px-6 md:px-8 py-6 relative z-50"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 z-50">
          <img src="/logo.webp" alt="My USA Business" className="h-10 md:h-12 w-auto object-contain" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur-xl px-8 py-3 rounded-full border border-white/10 shadow-2xl">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.5 }}
              className="text-gray-300 hover:text-white transition-colors font-medium relative group text-sm"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3c3b6e] transition-all group-hover:w-full" />
            </motion.a>
          ))}

          <div className="w-px h-4 bg-white/10 mx-2" />

          {/* Language Selector Desktop */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium text-sm"
            >
              <Globe size={16} />
              <span>{language}</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-4 w-40 bg-[#0B0D0F]/95 backdrop-blur-2xl rounded-2xl shadow-3xl overflow-hidden border border-white/10 p-2"
                >
                  <button
                    className={`w-full text-left px-4 py-2.5 rounded-xl transition-all ${language === 'EN' ? 'bg-[#3c3b6e] text-white' : 'hover:bg-white/5 text-gray-400'}`}
                    onClick={() => { setLanguage('EN'); setIsLangOpen(false); }}
                  >
                    English
                  </button>
                  <button
                    className={`w-full text-left px-4 py-2.5 rounded-xl transition-all ${language === 'ES' ? 'bg-[#3c3b6e] text-white' : 'hover:bg-white/5 text-gray-400'}`}
                    onClick={() => { setLanguage('ES'); setIsLangOpen(false); }}
                  >
                    Español
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 active:scale-95"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#0B0D0F] md:hidden flex flex-col p-8 pt-32"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-xl font-semibold text-white hover:bg-[#3c3b6e]/20 hover:border-[#3c3b6e]/50 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="p-3 rounded-xl bg-white/5 text-[#3c3b6e] group-hover:bg-[#3c3b6e] group-hover:text-white transition-all">
                    {item.icon}
                  </span>
                  {item.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pb-12">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">{t('nav.language')}</p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${language === 'EN' ? 'bg-[#3c3b6e]/20 border-[#3c3b6e] text-white shadow-[0_0_20px_rgba(60,59,110,0.3)]' : 'bg-white/5 border-white/10 text-gray-400'}`}
                  onClick={() => { setLanguage('EN'); setIsMobileMenuOpen(false); }}
                >
                  <span className="text-2xl">🇺🇸</span>
                  <span className="font-semibold">English</span>
                </button>
                <button
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${language === 'ES' ? 'bg-[#3c3b6e]/20 border-[#3c3b6e] text-white shadow-[0_0_20px_rgba(60,59,110,0.3)]' : 'bg-white/5 border-white/10 text-gray-400'}`}
                  onClick={() => { setLanguage('ES'); setIsMobileMenuOpen(false); }}
                >
                  <span className="text-2xl">🇪🇸</span>
                  <span className="font-semibold">Español</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
