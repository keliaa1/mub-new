import PageLayout from '../components/PageLayout';
import { CreditCard, Globe, Zap, CheckCircle2 } from 'lucide-react';

const BankingSupport = () => {
  return (
    <PageLayout 
      title="Global Banking Support" 
      subtitle="Remote banking setup for non-resident founders. Open a US business bank account without traveling."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 md:order-1">
          <img 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" 
            alt="Mobile Banking" 
            className="rounded-[40px] shadow-2xl"
          />
          <div className="absolute -top-8 -right-8 p-6 rounded-3xl dark:bg-white bg-[#0B0D0F] dark:text-[#0B0D0F] text-white shadow-xl">
             <Zap className="w-8 h-8 mb-3" />
             <p className="font-bold">Fast approval</p>
             <p className="text-xs opacity-70">Usually within 3-5 days</p>
          </div>
        </div>

        <div className="space-y-8 order-1 md:order-2">
          <section>
            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4">Remote account opening</h2>
            <p className="dark:text-gray-400 text-slate-600 leading-relaxed mb-6">
              Accessing the US financial system is critical for international growth. We partner with leading fintech and traditional banks to help non-residents open accounts remotely.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="p-6 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10">
                  <CreditCard className="w-8 h-8 text-[#3c3b6e] mb-4" />
                  <h3 className="font-bold dark:text-white text-slate-900 mb-2">Virtual cards</h3>
                  <p className="text-xs dark:text-gray-400 text-slate-600">Issue unlimited cards for your team.</p>
               </div>
               <div className="p-6 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10">
                  <Globe className="w-8 h-8 text-[#3c3b6e] mb-4" />
                  <h3 className="font-bold dark:text-white text-slate-900 mb-2">SWIFT/ACH</h3>
                  <p className="text-xs dark:text-gray-400 text-slate-600">Full international transfer capabilities.</p>
               </div>
            </div>
          </section>

          <section>
             <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-4">What you'll get</h3>
             <ul className="space-y-3">
               {[
                 "Dedicated Account Manager",
                 "Integration with Stripe/PayPal",
                 "Multi-currency accounts",
                 "No US Social Security required"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-2 text-sm dark:text-gray-300 text-slate-700">
                   <CheckCircle2 className="w-4 h-4 text-green-500" />
                   {item}
                 </li>
               ))}
             </ul>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default BankingSupport;
