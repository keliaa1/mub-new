import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const truckY = useTransform(scrollYProgress, [0, 1], [-50, 150]);

  const socialLinks = [
    {
      name: 'Facebook',
      href: "#",
      icon: (props: any) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: "#",
      icon: (props: any) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: "#",
      icon: (props: any) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      )
    },
    {
      name: 'Linkedin',
      href: "#",
      icon: (props: any) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    }
  ];

  const footerLinks = {
    Company: ['About Us', 'Contact', 'Reviews'],
    Services: ['LLC Formation', 'EIN Registration', 'Registered Agent'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Payment Policy']
  };

  return (
    <div className="bg-[#0B0D0F]">
      {/* Top Spacer Section */}
      <section className="h-[50vh] md:h-[30vh] bg-[#121417] flex items-center justify-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white/30 text-[10px] font-bold uppercase tracking-[0.5em]"
        >
          Your Global Partner
        </motion.span>
      </section>

      {/* Main Parallax Container */}
      <section
        ref={containerRef}
        className="h-screen relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        {/* The Top-Aligned Footer Card */}
        <div className="absolute top-0 w-full pt-12 md:pt-24 px-4 md:px-8 z-30">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-7xl mx-auto bg-[#0B0D0F]/90 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-white/5"
          >
            {/* Footer Content (Top Half) */}
            <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between gap-12">
              {/* Logo Area */}
              <div className="flex items-center gap-4">
                <img src="/logo.webp" alt="My USA Business" className="h-16 md:h-20 w-auto object-contain" />
              </div>

              {/* Links Area */}
              <div className="flex flex-wrap gap-8 md:gap-16">
                {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category} className="flex flex-col gap-4">
                    <h4 className="text-white text-xs font-bold uppercase tracking-widest">{category}</h4>
                    <div className="flex flex-col gap-2">
                      {links.map((link) => (
                        <a
                          key={link}
                          href="#"
                          className="text-gray-400 font-medium text-sm hover:text-[#3c3b6e] transition-colors"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Content (Bottom Bar) */}
            <div className="bg-[#0B0D0F] px-8 md:px-12 py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-sm text-gray-500 font-medium order-2 md:order-1">
                © 2026 My USA Business. All Rights Reserved
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 order-1 md:order-2">
                {socialLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#3c3b6e] hover:text-white hover:border-[#3c3b6e] transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background City Parallax Layer */}
        <motion.div
          style={{ y: truckY }}
          className="absolute inset-x-0 bottom-0 h-full pointer-events-none z-20"
        >
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="City Skyline"
            className="w-full h-full object-cover origin-bottom opacity-20 scale-125"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Footer;
