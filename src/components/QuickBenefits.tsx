import { motion } from 'motion/react';
import { Shield, Zap, Globe, Clock } from 'lucide-react';

const QuickBenefits = () => {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Secure Formation",
      description: "State-approved incorporation with full legal protection for your global assets."
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Lightning Fast",
      description: "Documents filed within 24 hours. Get your business up and running in days."
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Global Banking",
      description: "Assistance with remote US bank account setup through our partner networks."
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Always Online",
      description: "24/7 dashboard access to manage your compliance and legal documents."
    }
  ];

  return (
    <section className="py-24 bg-[#0B0D0F] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-[#3c3b6e]/5 border border-white/5 hover:border-[#3c3b6e]/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#3c3b6e] flex items-center justify-center mb-6 shadow-lg shadow-[#3c3b6e]/20 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{benefit.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickBenefits;
