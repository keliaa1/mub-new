import { motion } from 'motion/react';

import { Shield, Zap, Globe, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Notification = ({ name, description, icon, color, time }: any) => {
  return (
    <div className="flex w-full items-center gap-4 rounded-2xl border dark:border-white/10 border-black/10 dark:bg-white/5 bg-black/5 p-4 backdrop-blur-sm hover:dark:bg-white/10 bg-black/10 transition-colors">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl shadow-lg"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <div className="flex flex-col overflow-hidden">
        <div className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white text-slate-900">
          <span className="text-sm sm:text-base">{name}</span>
          <span className="mx-1">·</span>
          <span className="text-xs dark:text-gray-500 text-slate-500">{time}</span>
        </div>
        <p className="text-xs sm:text-sm dark:text-gray-400 text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const notifications = [
    {
      name: t('why.guidance'),
      description: t('why.guidance_desc'),
      time: t('why.time1'),
      icon: <Shield className="w-4 h-4 text-white" />,
      color: "#3c3b6e",
    },
    {
      name: t('why.remote'),
      description: t('why.remote_desc'),
      time: t('why.time2'),
      icon: <Globe className="w-4 h-4 text-white" />,
      color: "#3c3b6e",
    },
    {
      name: t('why.ein'),
      description: t('why.ein_desc'),
      time: t('why.time3'),
      icon: <Zap className="w-4 h-4 text-white" />,
      color: "#3c3b6e",
    },
    {
      name: t('why.compliance'),
      description: t('why.compliance_desc'),
      time: t('why.time4'),
      icon: <CheckCircle2 className="w-4 h-4 text-white" />,
      color: "#3c3b6e",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 dark:bg-[#0B0D0F] bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden border dark:border-white/5 border-black/5 group"
          >
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Business partners shaking hands"
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent opacity-60" />

            <div className="absolute bottom-8 left-8">
              <h4 className="text-2xl font-bold dark:text-white text-slate-900 mb-2">{t('why.trust_title')}</h4>
              <p className="dark:text-gray-400 text-white max-w-sm">{t('why.trust_desc')}</p>
            </div>
          </motion.div>

          {/* Right Side: Animated List */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-sm font-semibold text-[#3c3b6e] tracking-wider uppercase mb-3">{t('why.expertise')}</h2>
              <h3 className="text-4xl md:text-5xl font-normal dark:text-white text-slate-900 tracking-tight leading-tight">
                {t('why.title1')} <br />
                <span className="dark:text-white text-slate-900 font-bold">{t('why.title2')}</span>
              </h3>
            </motion.div>

            <div className="relative w-full max-w-[500px]">
              <div className="flex flex-col gap-4">
                {notifications.map((item, idx) => (
                  <Notification {...item} key={idx} />
                ))}
              </div>

              {/* Subtle background glow */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#3c3b6e]/10 blur-[100px] rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
