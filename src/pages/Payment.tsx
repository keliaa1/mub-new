import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Shield, ArrowRight, CreditCard, Lock, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import { useLanguage } from '../context/LanguageContext';
import { useMemo } from 'react';

const usStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", 
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", 
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", 
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", 
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

const Payment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const stateId = searchParams.get('state');

  const selectedState = useMemo(() => {
    const baseFeatures = [
      t('pricing.feature.filing_fees'),
      t('pricing.feature.registered_agent'),
      t('pricing.feature.operating_agreement'),
      t('pricing.feature.ein'),
      t('pricing.feature.banking')
    ];

    if (!stateId) return null;

    const stateName = usStates.find(s => s.toLowerCase().replace(/\s+/g, '_') === stateId) || "Wyoming";
    const id = stateId;

    if (id === 'wyoming') {
      return {
        id, name: stateName, price: '$600', badge: 'Wyoming LLC',
        features: baseFeatures
      };
    }
    if (id === 'delaware') {
      return {
        id, name: stateName, price: '$600', badge: 'Delaware LLC',
        features: [
          t('pricing.feature.filing_fees'), t('pricing.feature.registered_agent'), t('pricing.feature.operating_agreement'),
          t('pricing.feature.ein'), t('pricing.feature.resolution'), t('pricing.feature.banking')
        ]
      };
    }
    if (id === 'new_mexico') {
      return {
        id, name: stateName, price: '$500', badge: 'New Mexico LLC',
        features: baseFeatures
      };
    }
    if (id === 'florida') {
      return {
        id, name: stateName, price: '$600', badge: 'Florida LLC',
        features: [
          t('pricing.feature.filing_fees'), t('pricing.feature.registered_agent'), t('pricing.feature.operating_agreement'),
          t('pricing.feature.ein'), t('pricing.feature.bank_resolution'), t('pricing.feature.banking')
        ]
      };
    }
    if (id === 'texas') {
      return {
        id, name: stateName, price: '$700', badge: 'Texas LLC',
        features: baseFeatures
      };
    }
    
    return {
      id, name: stateName, price: '$600', badge: `${stateName} LLC`,
      features: baseFeatures
    };
  }, [stateId, t]);

  const handlePay = () => {
    navigate('/register');
  };

  if (!selectedState) {
    return (
      <div className="min-h-screen flex flex-col dark:bg-[#050505] bg-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <button onClick={() => navigate('/')} className="text-[#111] dark:text-[#eee] flex items-center gap-2">
            <ArrowLeft size={16} /> Volver al inicio para seleccionar un estado
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col dark:bg-[#050505] bg-white text-[#111] dark:text-[#eee]">
      <div className="relative z-30 border-b border-black/10 dark:border-white/10">
        <Navbar />
      </div>

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 md:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6">
            <div className="w-2 h-2 bg-[#111] dark:bg-[#eee]" />
            Checkout
          </span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
            Finaliza tu registro <br />
            <span className="text-gray-400 dark:text-gray-500">en {selectedState.name}</span>
          </h1>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-50 dark:bg-[#0a0a0a] p-8 md:p-10 border border-black/10 dark:border-white/10 rounded-3xl mb-10"
          >
            <div className="flex justify-between items-start border-b border-black/10 dark:border-white/10 pb-8 mb-8">
              <div>
                <h4 className="text-2xl font-medium tracking-tight">{selectedState.badge}</h4>
                <p className="text-gray-500 mt-1 text-sm font-light">Service package</p>
              </div>
              <div className="text-right">
                <span className="text-4xl font-medium tracking-tighter">{selectedState.price}</span>
                <span className="text-gray-400 font-mono text-[10px] uppercase tracking-widest mt-1 block">/YEAR</span>
              </div>
            </div>

            <div className="mb-10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-6 block">INCLUDED FEATURES</span>
              <ul className="space-y-4">
                {selectedState.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#111] dark:text-[#eee] shrink-0 mt-0.5" />
                    <span className="font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handlePay}
              className="w-full flex items-center justify-between px-6 py-5 bg-[#111] dark:bg-[#eee] text-white dark:text-[#111] text-sm font-medium hover:bg-gray-800 dark:hover:bg-white transition-colors group rounded-xl"
            >
              <span className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Proceder al pago
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <div className="flex flex-col items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
            <div className="flex items-center gap-2">
              <Lock className="w-3 h-3" />
              <span>Pago 100% seguro y encriptado</span>
              <Shield className="w-3 h-3 ml-2" />
              <span>Garantía de satisfacción</span>
            </div>
            <button onClick={() => navigate(-1)} className="hover:text-[#111] dark:hover:text-[#eee] transition-colors">
              Cambiar selección de estado
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payment;
