import { useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-7xl mx-auto px-8 py-6 relative z-20"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src="/logo.webp" alt="My USA Business" className="h-10 md:h-12 w-auto object-contain" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.5 }}
              className="text-gray-300 hover:text-white transition-colors font-medium relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3c3b6e] transition-all group-hover:w-full" />
            </motion.a>
          ))}

          {/* Language Selector Desktop */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors font-medium"
            >
              <Globe size={18} />
              <span>{selectedLang}</span>
              <ChevronDown size={16} />
            </button>

            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-gray-900/90 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-white/10">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-white/10 text-gray-100 transition-colors"
                  onClick={() => { setSelectedLang('EN'); setIsLangOpen(false); }}
                >
                  English
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-white/10 text-gray-100 transition-colors"
                  onClick={() => { setSelectedLang('ES'); setIsLangOpen(false); }}
                >
                  Español
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl md:hidden overflow-hidden border border-white/10">
          <div className="flex flex-col py-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-6 py-3 text-gray-100 hover:bg-white/10 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <div className="px-6 py-3 border-t border-white/10 mt-2">
              <p className="text-sm text-gray-400 mb-2">Language</p>
              <div className="flex gap-4">
                <button
                  className={`font-medium ${selectedLang === 'EN' ? 'text-blue-400' : 'text-gray-100'}`}
                  onClick={() => { setSelectedLang('EN'); setIsMobileMenuOpen(false); }}
                >
                  English
                </button>
                <button
                  className={`font-medium ${selectedLang === 'ES' ? 'text-blue-400' : 'text-gray-100'}`}
                  onClick={() => { setSelectedLang('ES'); setIsMobileMenuOpen(false); }}
                >
                  Español
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
