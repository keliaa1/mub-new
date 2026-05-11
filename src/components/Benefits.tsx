import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const Benefits = () => {
  const { t } = useLanguage();

  return (
    <section id="benefits" className="py-24 dark:bg-[#121417] bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold dark:text-gray-400 text-slate-600 tracking-wider uppercase mb-3">{t('benefits.subtitle')}</h2>
            <h3 className="text-4xl md:text-5xl font-normal dark:text-white text-slate-900 tracking-tight mb-6">{t('benefits.title')}</h3>
            <p className="text-lg dark:text-gray-400 text-slate-600 mb-8 leading-relaxed">
              {t('benefits.desc')}
            </p>
            <ul className="space-y-4">
              {[
                t('benefits.list1'),
                t('benefits.list2'),
                t('benefits.list3'),
                t('benefits.list4')
              ].map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 dark:text-gray-300 text-slate-700"
                >
                  <div className="w-2 h-2 rounded-full bg-[#3c3b6e]" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-3xl overflow-hidden dark:bg-white/5 bg-black/5"
          >
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Modern Office Building"
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:scale-110 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
