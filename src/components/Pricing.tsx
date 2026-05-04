import { motion } from 'motion/react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 dark:bg-[#0B0D0F] bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold dark:text-gray-400 text-slate-600 tracking-wider uppercase mb-3">Membership</h2>
          <h3 className="text-4xl md:text-5xl font-normal dark:text-white text-slate-900 tracking-tight">Simple Pricing</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="border dark:border-white/10 border-black/10 rounded-3xl p-10 transition-all dark:bg-white/5 bg-black/5 backdrop-blur-sm group cursor-default"
          >
            <h4 className="text-2xl font-medium dark:text-white text-slate-900 mb-2">Basic Formation</h4>
            <p className="dark:text-gray-400 text-slate-600 mb-6">Essential setup for non-residents</p>
            <div className="mb-8">
              <span className="text-5xl font-normal dark:text-white text-slate-900 tracking-tighter">$399</span>
              <span className="dark:text-gray-400 text-slate-600"> / one-time</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['LLC Articles of Organization', 'Operating Agreement', 'EIN Registration Support', 'Email Support'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 dark:text-gray-300 text-slate-700">
                  <svg className="w-5 h-5 text-[#3c3b6e]/60 group-hover:text-[#3c3b6e] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-full border dark:border-white/20 border-black/20 dark:text-white text-slate-900 font-medium hover:dark:bg-white/10 bg-black/10 transition-colors">
              Choose Basic
            </button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ delay: 0.2 }}
            className="border dark:border-white/20 border-black/20 rounded-3xl p-10 bg-white text-[#0B0D0F] shadow-2xl relative overflow-hidden cursor-default"
          >
            <div className="absolute top-0 right-0 bg-[#3c3b6e] text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              Recommended
            </div>
            <h4 className="text-2xl font-medium mb-2">Total Compliance</h4>
            <p className="text-gray-600 mb-6">Complete business management</p>
            <div className="mb-8">
              <span className="text-5xl font-normal tracking-tighter">$999</span>
              <span className="text-gray-600"> / year</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Everything in Basic', 'Registered Agent Service', 'Annual Report Filings', 'Priority 24/7 Support'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-800">
                  <svg className="w-5 h-5 text-[#3c3b6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-full dark:bg-[#0B0D0F] bg-slate-50 dark:text-white text-slate-900 font-medium hover:bg-[#1a1d21] transition-colors">
              Choose Compliance
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
