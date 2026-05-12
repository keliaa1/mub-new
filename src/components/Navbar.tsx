import { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      if (!savedTheme) {
        localStorage.setItem('theme', 'light');
      }
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.whyChooseUs'), href: '/#why-choose-us' },
    { name: t('nav.benefits'), href: '/#benefits' },
    { name: t('nav.pricing'), href: '/#pricing' },
  ];

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
      className="w-full max-w-7xl mx-auto px-6 md:px-8 py-6 relative z-50 flex items-center justify-between"
    >
      <Link to="/" className="flex items-center gap-3 z-50 relative">
        <img src="/logo.webp" alt="My USA Business" className="h-10 md:h-12 w-auto object-contain" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <div className="flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.5 }}
            >
              <NavHashLink
                to={item.href}
                smooth
                className={({ isActive }: any) => 
                  `text-sm font-medium transition-colors ${isActive ? 'text-[#111] dark:text-white' : 'text-gray-500 hover:text-[#111] dark:hover:text-white'}`
                }
              >
                {item.name}
              </NavHashLink>
            </motion.div>
          ))}
        </div>

        <div className="w-px h-4 bg-black/10 dark:bg-white/10" />

        <div className="flex items-center gap-6">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#111] dark:hover:text-white transition-colors"
            >
              <Globe size={14} />
              <span>{language}</span>
              <ChevronDown size={12} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 shadow-xl overflow-hidden z-[100]"
                >
                  <button
                    className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors ${language === 'EN' ? 'bg-gray-50 dark:bg-white/10 text-[#111] dark:text-white' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5'}`}
                    onClick={() => { setLanguage('EN'); setIsLangOpen(false); }}
                  >
                    English
                  </button>
                  <button
                    className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors border-t border-black/5 dark:border-white/5 ${language === 'ES' ? 'bg-gray-50 dark:bg-white/10 text-[#111] dark:text-white' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5'}`}
                    onClick={() => { setLanguage('ES'); setIsLangOpen(false); }}
                  >
                    Español
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="text-gray-500 hover:text-[#111] dark:hover:text-white transition-colors"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-50 text-[#111] dark:text-[#eee]"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#050505] md:hidden flex flex-col p-8 pt-32"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavHashLink
                    to={item.href}
                    smooth
                    className="text-2xl font-medium text-[#111] dark:text-[#eee] tracking-tight block border-b border-black/5 dark:border-white/5 pb-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </NavHashLink>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pb-12 flex flex-col gap-8">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">{t('nav.language')}</p>
                <div className="flex gap-4">
                  <button
                    className={`flex-1 py-3 text-sm font-medium border transition-colors ${language === 'EN' ? 'border-[#111] dark:border-white text-[#111] dark:text-white' : 'border-black/10 dark:border-white/10 text-gray-500'}`}
                    onClick={() => { setLanguage('EN'); setIsMobileMenuOpen(false); }}
                  >
                    English
                  </button>
                  <button
                    className={`flex-1 py-3 text-sm font-medium border transition-colors ${language === 'ES' ? 'border-[#111] dark:border-white text-[#111] dark:text-white' : 'border-black/10 dark:border-white/10 text-gray-500'}`}
                    onClick={() => { setLanguage('ES'); setIsMobileMenuOpen(false); }}
                  >
                    Español
                  </button>
                </div>
              </div>
              <button 
                onClick={toggleTheme} 
                className="w-full py-4 border border-black/10 dark:border-white/10 text-[#111] dark:text-[#eee] text-sm font-medium flex items-center justify-center gap-2"
              >
                {isDark ? (
                  <>
                    <Sun size={16} />
                    <span>Switch to Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon size={16} />
                    <span>Switch to Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
