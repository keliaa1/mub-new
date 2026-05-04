import { motion } from 'motion/react';
import { CreditCard, Wallet, Landmark, Bitcoin } from 'lucide-react';

const PaymentMarquee = () => {
  const payments = [
    { name: "Google Pay", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" },
    { name: "Apple Pay", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" },
    { name: "MasterCard", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" },
    { name: "Visa", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg" },
    { name: "American Express", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" },
    { name: "Diners Club", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dinersclub.svg" },
    { name: "UnionPay", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/UnionPay_logo.svg" },
    { name: "Chinese/Russian Cards", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Mir_logo.svg" },
    { name: "US Bank Transfer", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zelle.svg" },
    { name: "Panama Bank Transfer", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/bankofamerica.svg" },
    { name: "USDT", logo: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=032" },
    { name: "USDC", logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=032" },
    { name: "BTC", logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=032" },
    { name: "ETH", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=032" },
  ];

  // Double the list for seamless loop
  const marqueeItems = [...payments, ...payments];

  return (
    <section className="py-12 bg-[#0B0D0F] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Accepted Payment Methods</p>
      </div>
      
      <div className="relative flex">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, -1500] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {marqueeItems.map((item, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#3c3b6e]/50 transition-all group shrink-0"
            >
              <img 
                src={item.logo} 
                alt={item.name} 
                className="w-7 h-7 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
              <span className="text-gray-400 font-semibold text-sm group-hover:text-white transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentMarquee;
