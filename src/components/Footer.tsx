import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    Features: ['LLC Formation', 'EIN Registration', 'Registered Agent', 'Banking Support'],
    Support: ['Help Center', 'FAQ', 'Contact Us', 'Reviews'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookies', 'Payment Policy']
  };

  const slugify = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, '-');
  };

  const FacebookIcon = (props: any) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );

  const InstagramIcon = (props: any) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );

  const [selectedBranch, setSelectedBranch] = useState<'usa' | 'panama'>('usa');

  const locations = {
    usa: {
      name: "USA Branch",
      address: "1000 Brickell Ave, Miami, FL 33131, USA",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.8317765104686!2d-80.19169602381283!3d25.772095677342894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69998818817%3A0xc34a6e8f4955f3a0!2s1000%20Brickell%20Ave%2C%20Miami%2C%20FL%2033131%2C%20USA!5e0!3m2!1sen!2sus!4v1715012345678!5m2!1sen!2sus",
      description: "Centrally located in the heart of Miami's financial district. Our team is ready to help you navigate your US business journey."
    },
    panama: {
      name: "Panama Branch",
      address: "Oceania Business Plaza, Panama City, Panama",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.906354395893!2d-79.51226892543506!3d8.9807246399427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca91c7834c9bb%3A0xc95b7089e324a79a!2sOceania%20Business%20Center!5e0!3m2!1sen!2srw!4v1715018694000!5m2!1sen!2srw",
      description: "Our Panama hub in the Oceania Business Plaza serves as our strategic bridge for Latin American founders expanding globally."
    }
  };

  const currentOffice = locations[selectedBranch];

  const socialLinks = [
    { name: 'Instagram', icon: InstagramIcon, href: '#' },
    { name: 'Facebook', icon: FacebookIcon, href: '#' },
  ];

  return (
    <footer className="dark:bg-[#0B0D0F] bg-slate-50 pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Main Office Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#3c3b6e] rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 mb-24 relative overflow-hidden"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 dark:bg-white/20 bg-black/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          </div>

          <div className="flex-1 text-center lg:text-left z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Visit our <br />
              corporate office
            </h2>
            <div className="flex flex-col gap-6 text-white/80">
              <div className="flex gap-2 p-1 bg-white/10 rounded-2xl w-fit mb-2">
                {(Object.keys(locations) as Array<keyof typeof locations>).map((branch) => (
                  <button
                    key={branch}
                    onClick={() => setSelectedBranch(branch)}
                    className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                      selectedBranch === branch 
                        ? 'bg-white text-[#3c3b6e] shadow-lg' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {locations[branch].name}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedBranch}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <MapPin className="w-5 h-5 text-white" />
                    <p className="text-lg font-medium">{currentOffice.address}</p>
                  </div>
                  <p className="text-sm max-w-md opacity-70">
                    {currentOffice.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="w-full lg:w-[450px] h-[300px] rounded-3xl overflow-hidden shadow-2xl z-10 border-4 dark:border-white/10 border-black/10 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedBranch}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <iframe
                  src={currentOffice.map}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link to="/" className="text-2xl font-bold dark:text-white text-slate-900 tracking-tighter">My USA Business</Link>
            <p className="dark:text-gray-400 text-slate-600 max-w-sm leading-relaxed">
              Empowering international entrepreneurs to launch and manage successful businesses in the United States. Your global partner in corporate formation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 flex items-center justify-center dark:text-gray-400 text-slate-600 hover:bg-[#3c3b6e] hover:dark:text-white text-slate-900 hover:border-[#3c3b6e] transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-6">
              <h4 className="dark:text-white text-slate-900 font-bold text-lg">{category}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link to={`/${slugify(link)}`} className="dark:text-gray-400 text-slate-600 hover:text-[#3c3b6e] transition-colors font-medium">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t dark:border-white/5 border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="dark:text-gray-500 text-slate-500 text-sm">
            © 2026 My USA Business. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm dark:text-gray-500 text-slate-500">
            <Link to="/security" className="hover:dark:text-white text-slate-900 transition-colors">Security</Link>
            <Link to="/sitemap" className="hover:dark:text-white text-slate-900 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
