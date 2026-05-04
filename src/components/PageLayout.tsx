import { type ReactNode, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';
import { SmoothCursor } from './SmoothCursor';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const PageLayout = ({ children, title, subtitle }: PageLayoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen dark:bg-[#0B0D0F] bg-slate-50 transition-colors duration-300">
      <SmoothCursor />
      <Navbar />
      
      {/* Header Section */}
      <div className="pt-32 pb-20 px-6 border-b dark:border-white/5 border-black/5 bg-[#3c3b6e]/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#3c3b6e] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-normal dark:text-white text-slate-900 tracking-tighter mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl dark:text-gray-400 text-slate-600 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>

      <Footer />
    </main>
  );
};

export default PageLayout;
