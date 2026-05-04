import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-16 dark:bg-[#0B0D0F] bg-slate-50">
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
          {/* Executive Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="border dark:border-white/20 border-black/20 rounded-3xl p-8 bg-white text-[#0B0D0F] shadow-2xl relative overflow-hidden cursor-default"
          >
            <div className="absolute top-0 right-0 bg-[#3c3b6e] text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-widest">
              {t('pricing.tag')}
            </div>
            
            <div className="mb-8">
              <span className="font-bold text-[10px] uppercase tracking-widest text-[#3c3b6e] block mb-2">{t('pricing.badge')}</span>
              <h4 className="text-2xl md:text-3xl font-bold text-[#0B0D0F] tracking-tight">{t('pricing.sub')}</h4>
            </div>

            <div className="mb-10">
              <span className="text-6xl font-bold text-[#0B0D0F] tracking-tighter">{t('pricing.price')}</span>
              <span className="text-gray-500 font-bold text-xs uppercase tracking-widest ml-2">{t('pricing.period')}</span>
            </div>

            <ul className="space-y-4 mb-12">
              {[
                t('pricing.feature1'),
                t('pricing.feature2'),
                t('pricing.feature3'),
                t('pricing.feature4')
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3c3b6e]" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-2xl bg-[#0B0D0F] text-white font-bold hover:bg-[#1a1d21] transition-all shadow-xl shadow-[#0B0D0F]/20 hover:scale-[1.02] active:scale-[0.98]">
              {t('pricing.cta')}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
