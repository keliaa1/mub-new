import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
  "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
  "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

const Hero = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsStateDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col dark:bg-[#050505] bg-white text-[#111] dark:text-[#eee]">
      <div className="relative z-30 border-b border-black/10 dark:border-white/10">
        <Navbar />
      </div>
      
      <section className="relative flex-1 flex flex-col z-20">
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none opacity-50 dark:opacity-60 grayscale brightness-110 dark:brightness-125">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/businesshero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex-1 max-w-7xl w-full mx-auto px-6 md:px-8 flex flex-col justify-center relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 bg-[#111] dark:bg-[#eee]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    {t('hero.badge')}
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-medium leading-[1.1] tracking-tight text-[#111] dark:text-[#eee] mb-2">
                  {t('hero.title1')}
                </h1>
                <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-medium leading-[1.1] tracking-tight text-gray-400 dark:text-gray-500">
                  {t('hero.title2')}
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mt-12 max-w-xl"
              >
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                  {t('hero.desc')}
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:col-span-4 flex flex-col gap-4 lg:mt-32 w-full max-w-sm"
            >
              <button className="w-full px-6 py-4 bg-[#111] dark:bg-[#eee] text-white dark:text-[#111] text-sm font-medium hover:bg-gray-800 dark:hover:bg-white transition-colors flex items-center justify-between group">
                <span>{t('hero.btn1')}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>

              <button className="w-full px-6 py-4 border border-black/10 dark:border-white/10 text-[#111] dark:text-[#eee] text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                {t('hero.btn2')}
              </button>

              <div className="relative w-full mt-4" ref={dropdownRef}>
                <button
                  onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
                  className="w-full flex items-center justify-between border-b border-black/20 dark:border-white/20 py-4 group transition-all"
                >
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <MapPin size={16} />
                    <span className="text-sm font-medium text-[#111] dark:text-[#eee]">
                      {selectedState ? `Formation in ${selectedState}` : "Select Formation State"}
                    </span>
                  </div>
                  {isStateDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                <AnimatePresence>
                  {isStateDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute top-full left-0 w-full mt-1 bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 shadow-2xl z-[100]"
                    >
                      <div className="overflow-y-auto max-h-64 custom-scrollbar">
                        {states.map((state) => (
                          <button
                            key={state}
                            onClick={() => {
                              setSelectedState(state);
                              setIsStateDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 text-sm transition-colors border-b border-black/5 dark:border-white/5 last:border-0 ${
                              selectedState === state
                                ? 'bg-gray-100 dark:bg-white/10 text-[#111] dark:text-[#eee] font-medium'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5'
                            }`}
                          >
                            {state}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
