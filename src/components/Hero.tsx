import { motion } from 'motion/react';
import Navbar from './Navbar';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0B0D0F]">
      <section className="relative h-screen overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4" type="video/mp4" />
        </video>

        <div className="relative h-full flex flex-col">
          <Navbar />

          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center text-center -mt-20 px-4">
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-sm font-semibold text-white tracking-wider uppercase mb-4 px-4 py-1 bg-[#3c3b6e] rounded-full border border-white/10"
              >
                {t('hero.badge')}
              </motion.span>
              
              <div className="flex flex-col items-center">
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-6xl md:text-7xl lg:text-8xl font-normal text-gray-400 leading-none tracking-tighter"
                >
                  {t('hero.title1')}
                </motion.h1>
                <motion.h1 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-none tracking-tighter -mt-[12px]"
                >
                  {t('hero.title2')}
                </motion.h1>
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-lg md:text-xl text-gray-400 mt-6 mb-10 max-w-2xl"
              >
                {t('hero.desc')}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <button className="w-full sm:w-auto px-10 py-4 rounded-full text-white bg-[#3c3b6e] hover:bg-[#4c4b8e] transition-all font-bold shadow-lg shadow-[#3c3b6e]/20 hover:scale-105 active:scale-95">
                  {t('hero.btn1')}
                </button>
                <button className="w-full sm:w-auto px-10 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all">
                  {t('hero.btn2')}
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
