import { motion } from 'motion/react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-[#121417]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-3">Your Advantages</h2>
            <h3 className="text-4xl md:text-5xl font-normal text-white tracking-tight mb-6">Expand Your Reach</h3>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Unlock the world's largest economy with ease. We handle the paperwork so you can focus on growing your global brand.
            </p>
            <ul className="space-y-4">
              {[
                'Opening a Bank Account',
                'Create or expand your business into the international market.',
                'Receive payments directly into your account in dollars',
                'Handle deposits, transfers, and withdrawals with ease'
              ].map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-gray-300"
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
            className="relative h-[500px] rounded-3xl overflow-hidden bg-white/5"
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
