import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, MapPin, Check } from 'lucide-react';

const usStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", 
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", 
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", 
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", 
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

const baseFeatures = [
  'State Filing Fees Included',
  'Registered Agent (1st Year)',
  'Operating Agreement',
  'EIN (Tax ID) Application',
  'Banking Introduction',
  'Digital Corporate Kit'
];

const stateData = usStates.map(stateName => {
  const id = stateName.toLowerCase().replace(/\s+/g, '_');
  
  if (id === 'wyoming') {
    return {
      id, name: stateName, price: '$499', period: '/ONE-TIME', tag: 'Most Popular',
      badge: 'Wyoming LLC', sub: 'Privacy & Low Fees. Ideal for Non-Residents.',
      features: baseFeatures
    };
  }
  if (id === 'delaware') {
    return {
      id, name: stateName, price: '$599', period: '/ONE-TIME', tag: 'Investor Friendly',
      badge: 'Delaware LLC', sub: 'Corporate Law Standard. Best for Startups.',
      features: [
        'State Filing Fees Included', 'Registered Agent (1st Year)', 'Operating Agreement',
        'EIN (Tax ID) Application', 'Corporate Resolution', 'Banking Introduction', 'Digital Corporate Kit'
      ]
    };
  }
  if (id === 'new_mexico') {
    return {
      id, name: stateName, price: '$399', period: '/ONE-TIME', tag: 'Best Value',
      badge: 'New Mexico LLC', sub: 'No Annual Fees. Maximum Privacy.',
      features: baseFeatures
    };
  }
  if (id === 'florida') {
    return {
      id, name: stateName, price: '$549', period: '/ONE-TIME', tag: 'Sunshine State',
      badge: 'Florida LLC', sub: 'Great for E-commerce & Local Business.',
      features: [
        'State Filing Fees Included', 'Registered Agent (1st Year)', 'Operating Agreement',
        'EIN (Tax ID) Application', 'Bank Account Resolution', 'Banking Introduction', 'Digital Corporate Kit'
      ]
    };
  }
  if (id === 'texas') {
    return {
      id, name: stateName, price: '$649', period: '/ONE-TIME', tag: 'Lone Star State',
      badge: 'Texas LLC', sub: 'No State Income Tax. Strong Economy.',
      features: baseFeatures
    };
  }
  
  return {
    id, name: stateName, price: '$549', period: '/ONE-TIME', tag: '',
    badge: `${stateName} LLC`, sub: `Professional LLC Formation in ${stateName}.`,
    features: baseFeatures
  };
});

// Sort stateData so the popular ones (Wyoming, Delaware, New Mexico, Florida, Texas) are at the top, followed by alphabetical
const popularStateIds = ['wyoming', 'delaware', 'new_mexico', 'florida', 'texas'];
const sortedStateData = [
  ...stateData.filter(s => popularStateIds.includes(s.id)).sort((a, b) => popularStateIds.indexOf(a.id) - popularStateIds.indexOf(b.id)),
  ...stateData.filter(s => !popularStateIds.includes(s.id))
];

const Pricing = () => {
  const { t } = useLanguage();
  const [selectedState, setSelectedState] = useState(sortedStateData[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section id="pricing" className="py-16 dark:bg-[#0B0D0F] bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-xs font-semibold dark:text-gray-400 text-slate-600 tracking-wider uppercase mb-2">{t('pricing.title')}</h2>
          <h3 className="text-3xl md:text-4xl font-normal dark:text-white text-slate-900 tracking-tight">{t('pricing.subtitle')}</h3>
        </motion.div>

        <div className="max-w-md mx-auto">
          {/* State Selector */}
          <div className="relative mb-10 z-20" ref={dropdownRef}>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between bg-white dark:bg-[#1a1d21] border border-gray-200 dark:border-white/10 px-6 py-4 rounded-2xl shadow-sm text-left transition-all hover:border-gray-300 dark:hover:border-white/20 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-black/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#3c3b6e] dark:text-blue-400" />
                </div>
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Select Formation State</span>
                  <span className="block text-xl font-bold text-gray-900 dark:text-white tracking-tight">{selectedState.name}</span>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-[#1a1d21] border border-gray-100 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden z-30"
                >
                  <div className="max-h-80 overflow-y-auto overscroll-contain">
                    {sortedStateData.map((state) => (
                      <button
                        key={state.id}
                        onClick={() => {
                          setSelectedState(state);
                          setIsOpen(false);
                        }}
                        className="w-full text-left px-6 py-4 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors border-b border-gray-100 dark:border-white/5 last:border-0 flex items-center justify-between group"
                      >
                        <div className="flex flex-col">
                          <span className={`font-bold text-lg tracking-tight transition-colors ${selectedState.id === state.id ? 'text-[#3c3b6e] dark:text-blue-400' : 'text-gray-900 dark:text-white group-hover:text-[#3c3b6e] dark:group-hover:text-blue-400'}`}>
                            {state.name}
                          </span>
                          <span className="text-xs text-gray-500 font-medium">{state.price}</span>
                        </div>
                        {selectedState.id === state.id && (
                          <Check className="w-5 h-5 text-[#3c3b6e] dark:text-blue-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pricing Card */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedState.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="border dark:border-white/20 border-black/20 rounded-3xl p-8 bg-white text-[#0B0D0F] shadow-2xl relative overflow-hidden cursor-default"
              >
                {selectedState.tag && (
                  <div className="absolute top-0 right-0 bg-[#3c3b6e] text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-widest">
                    {selectedState.tag}
                  </div>
                )}
                
                <div className="mb-8">
                  <span className="font-bold text-[10px] uppercase tracking-widest text-[#3c3b6e] block mb-2">{selectedState.badge}</span>
                  <h4 className="text-2xl md:text-3xl font-bold text-[#0B0D0F] tracking-tight">{selectedState.sub}</h4>
                </div>

                <div className="mb-10">
                  <span className="text-6xl font-bold text-[#0B0D0F] tracking-tighter">{selectedState.price}</span>
                  <span className="text-gray-500 font-bold text-xs uppercase tracking-widest ml-2">{selectedState.period}</span>
                </div>

                <ul className="space-y-4 mb-12">
                  {selectedState.features.map((feature, i) => (
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      key={i} 
                      className="flex items-start gap-3 text-gray-700 font-medium"
                    >
                      <div className="w-5 h-5 shrink-0 rounded-full bg-[#3c3b6e]/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-[#3c3b6e]" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <button className="w-full py-4 rounded-2xl bg-[#0B0D0F] text-white font-bold hover:bg-[#1a1d21] transition-all shadow-xl shadow-[#0B0D0F]/20 hover:scale-[1.02] active:scale-[0.98]">
                  {t('pricing.cta')}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
