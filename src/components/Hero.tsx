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
    <div className="min-h-screen dark:bg-[#0B0D0F] bg-slate-50">
      <section className="relative h-screen z-20 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={(e) => console.error("Hero video failed to load. Check if /businesshero.mp4 exists in public/", e)}
            className="w-full h-full object-cover dark:opacity-40 opacity-50 dark:brightness-[0.9] brightness-[0.9] pointer-events-none transition-all duration-1000 bg-slate-900"
          >
            <source src="/businesshero.mp4" type="video/mp4" />
          </video>
          {/* Enhanced Overlays */}
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 dark:from-black/80 dark:to-[#0B0D0F]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </motion.div>

        <div className="relative h-full flex flex-col z-30">
          <Navbar />

          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center text-center -mt-20 px-4">
              <div className="flex flex-col items-center mb-8">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-xs font-semibold text-white tracking-wider uppercase px-5 py-1.5 bg-[#3c3b6e]/80 backdrop-blur-md rounded-full border border-white/20 shadow-xl shadow-black/20"
                >
                  {t('hero.badge')}
                </motion.span>
              </div>

              <div className="flex flex-col items-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl md:text-6xl lg:text-[5.5rem] font-normal dark:text-white/70 text-slate-100/80 leading-none tracking-tighter drop-shadow-2xl"
                >
                  {t('hero.title1')}
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white leading-none tracking-tighter -mt-[12px] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  {t('hero.title2')}
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-sm md:text-lg text-white/80 mt-6 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-md"
              >
                {t('hero.desc')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-col lg:flex-row items-center gap-6"
              >
                <button className="w-full lg:w-auto px-10 py-4 rounded-full text-white bg-[#3c3b6e] hover:bg-[#4c4b8e] transition-all font-bold shadow-[0_20px_50px_rgba(60,59,110,0.3)] hover:shadow-[0_20px_60px_rgba(60,59,110,0.5)] hover:scale-105 active:scale-95 shrink-0 text-base">
                  {t('hero.btn1')}
                </button>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                  <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/30 text-white font-bold backdrop-blur-md hover:bg-white/10 transition-all shrink-0 text-base">
                    {t('hero.btn2')}
                  </button>

                  {/* State Dropdown */}
                  <div className="relative w-full sm:w-auto" ref={dropdownRef}>
                    <button
                      onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
                      className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 dark:bg-white/5 backdrop-blur-md px-5 py-3.5 rounded-full border border-black/10 dark:border-white/10 group transition-all hover:bg-white/20 dark:hover:bg-white/10"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#3c3b6e]/20 flex items-center justify-center text-[#3c3b6e] dark:text-blue-400">
                        <MapPin size={14} />
                      </div>
                      <span className="text-sm font-bold dark:text-white text-slate-900 whitespace-nowrap">
                        {selectedState ? `In ${selectedState}` : "Incorporate In..."}
                      </span>
                      {isStateDropdownOpen ? <ChevronUp size={16} className="dark:text-gray-400 text-slate-500" /> : <ChevronDown size={16} className="dark:text-gray-400 text-slate-500" />}
                    </button>

                    <AnimatePresence>
                      {isStateDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          className="absolute top-full left-0 lg:left-auto lg:right-0 mt-3 w-64 max-h-80 bg-white/95 dark:bg-[#0B0D0F]/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-black/5 dark:border-white/10 overflow-hidden z-[100]"
                        >
                          <div className="overflow-y-auto max-h-80 py-3 px-2 custom-scrollbar">
                            {states.map((state) => (
                              <button
                                key={state}
                                onClick={() => {
                                  setSelectedState(state);
                                  setIsStateDropdownOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                                  selectedState === state
                                    ? 'bg-[#3c3b6e] text-white shadow-lg'
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5'
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
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
