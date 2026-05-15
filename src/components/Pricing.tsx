import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, Check } from 'lucide-react';

const usStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", 
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", 
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", 
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", 
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

const popularStateIds = ['wyoming', 'florida', 'new_mexico'];

const Pricing = ({ heroSelectedState }: { heroSelectedState: string }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const sortedStateData = useMemo(() => {
    const baseFeatures = [
      t('pricing.feature.filing_fees'),
      t('pricing.feature.registered_agent'),
      t('pricing.feature.operating_agreement'),
      t('pricing.feature.ein'),
      t('pricing.feature.banking')
    ];

    const stateData = usStates.map(stateName => {
      const id = stateName.toLowerCase().replace(/\s+/g, '_');
      const isPopular = popularStateIds.includes(id);
      const finalName = isPopular ? `${stateName} 🔥` : stateName;
      
      if (id === 'wyoming') {
        return {
          id, name: finalName, price: '$600', period: 'YEAR', tag: t('pricing.tag.popular'),
          badge: 'Wyoming LLC', sub: t('pricing.sub.wyoming'),
          features: baseFeatures
        };
      }
      if (id === 'delaware') {
        return {
          id, name: finalName, price: '$600', period: 'YEAR', tag: t('pricing.tag.investor'),
          badge: 'Delaware LLC', sub: t('pricing.sub.delaware'),
          features: [
            t('pricing.feature.filing_fees'), t('pricing.feature.registered_agent'), t('pricing.feature.operating_agreement'),
            t('pricing.feature.ein'), t('pricing.feature.resolution'), t('pricing.feature.banking')
          ]
        };
      }
      if (id === 'new_mexico') {
        return {
          id, name: finalName, price: '$500', period: 'YEAR', tag: t('pricing.tag.value'),
          badge: 'New Mexico LLC', sub: t('pricing.sub.new_mexico'),
          features: baseFeatures
        };
      }
      if (id === 'florida') {
        return {
          id, name: finalName, price: '$600', period: 'YEAR', tag: t('pricing.tag.sunshine'),
          badge: 'Florida LLC', sub: t('pricing.sub.florida'),
          features: [
            t('pricing.feature.filing_fees'), t('pricing.feature.registered_agent'), t('pricing.feature.operating_agreement'),
            t('pricing.feature.ein'), t('pricing.feature.bank_resolution'), t('pricing.feature.banking')
          ]
        };
      }
      if (id === 'texas') {
        return {
          id, name: finalName, price: '$700', period: 'YEAR', tag: t('pricing.tag.lonestar'),
          badge: 'Texas LLC', sub: t('pricing.sub.texas'),
          features: baseFeatures
        };
      }
      
      return {
        id, name: finalName, price: '$600', period: 'YEAR', tag: '',
        badge: `${stateName} LLC`, sub: `${t('pricing.sub.default')} ${stateName}.`,
        features: baseFeatures
      };
    });

    return [
      ...stateData.filter(s => popularStateIds.includes(s.id)).sort((a, b) => popularStateIds.indexOf(a.id) - popularStateIds.indexOf(b.id)),
      ...stateData.filter(s => !popularStateIds.includes(s.id)).sort((a, b) => a.name.localeCompare(b.name))
    ];
  }, [t]);

  const [selectedState, setSelectedState] = useState(sortedStateData[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedState((prev) => sortedStateData.find(s => s.id === prev.id) || sortedStateData[0]);
  }, [sortedStateData]);

  useEffect(() => {
    if (heroSelectedState) {
      const stateObj = sortedStateData.find(s => s.name === heroSelectedState);
      if (stateObj) {
        setSelectedState(stateObj);
      }
    }
  }, [heroSelectedState, sortedStateData]);

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
    <section id="pricing" className="py-24 dark:bg-[#050505] bg-white relative border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-[#111] dark:bg-[#eee]" />
                <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  {t('pricing.title')}
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-medium text-[#111] dark:text-[#eee] tracking-tight leading-[1.2] mb-6">
                {t('pricing.title_main')}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-light text-lg">
                {t('pricing.desc')}
              </p>
            </motion.div>

            <div className="relative mt-12 z-20" ref={dropdownRef}>
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3 block">{t('pricing.state_selector')}</span>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between border-b border-black/20 dark:border-white/20 py-4 group transition-all"
              >
                <span className="text-xl font-medium text-[#111] dark:text-[#eee] tracking-tight">{selectedState.name}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-full mt-1 bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 shadow-2xl z-[100]"
                  >
                    <div className="max-h-80 overflow-y-auto overscroll-contain custom-scrollbar">
                      {sortedStateData.map((state) => (
                        <button
                          key={state.id}
                          onClick={() => {
                            setSelectedState(state);
                            setIsOpen(false);
                          }}
                          className={`w-full text-left px-5 py-4 text-sm transition-colors border-b border-black/5 dark:border-white/5 last:border-0 flex justify-between items-center ${
                            selectedState.id === state.id
                              ? 'bg-gray-100 dark:bg-white/10 text-[#111] dark:text-[#eee] font-medium'
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5'
                          }`}
                        >
                          <span>{state.name}</span>
                          <span className="font-mono text-xs text-gray-400">{state.price}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:col-span-7 w-full relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedState.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 dark:bg-[#0a0a0a] p-8 md:p-12 border border-black/10 dark:border-white/10"
              >
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 dark:border-white/10 pb-8 mb-8 gap-6">
                  <div>
                    {selectedState.tag && (
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#111] dark:text-[#eee] border border-black/20 dark:border-white/20 px-3 py-1 rounded-sm mb-4 inline-block">
                        {selectedState.tag}
                      </span>
                    )}
                    <h4 className="text-3xl font-medium text-[#111] dark:text-[#eee] tracking-tight">{selectedState.badge}</h4>
                    <p className="text-gray-500 mt-2 font-light">{selectedState.sub}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="text-5xl font-medium text-[#111] dark:text-[#eee] tracking-tighter block">{selectedState.price}</span>
                    <span className="text-gray-400 font-mono text-[10px] uppercase tracking-widest mt-1 block">/{selectedState.period}</span>
                  </div>
                </div>

                <div className="mb-10">
                  <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6 block">{t('pricing.features_title')}</span>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    {selectedState.features.map((feature, i) => (
                      <motion.li 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        key={i} 
                        className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <Check className="w-4 h-4 text-[#111] dark:text-[#eee] shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-light">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => navigate(`/payment?state=${selectedState.id}`)}
                  className="w-full py-5 bg-[#111] dark:bg-[#eee] text-white dark:text-[#111] text-sm font-medium hover:bg-gray-800 dark:hover:bg-white transition-colors flex justify-center items-center gap-2 group"
                >
                  <span>{t('pricing.proceed')} {selectedState.name}</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
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
