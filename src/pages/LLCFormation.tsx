import PageLayout from '../components/PageLayout';
import { Shield, CheckCircle2 } from 'lucide-react';

const LLCFormation = () => {
  return (
    <PageLayout 
      title="LLC Formation" 
      subtitle="Establish your US business presence with a professional LLC structure designed for international entrepreneurs."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4">Why form a US LLC?</h2>
            <p className="dark:text-gray-400 text-slate-600 leading-relaxed mb-6">
              A Limited Liability Company (LLC) is the gold standard for international founders. It provides a robust legal shield for your personal assets while offering the flexibility of pass-through taxation.
            </p>
            <div className="space-y-4">
              {[
                "Personal Asset Protection",
                "Pass-through Taxation (for non-residents)",
                "Global Brand Credibility",
                "Access to US Markets & Banking"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 dark:text-gray-300 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#3c3b6e]" />
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 rounded-3xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-[#3c3b6e]" />
              Our security guarantee
            </h3>
            <p className="dark:text-gray-400 text-slate-600 text-sm leading-relaxed">
              Every formation is reviewed by our legal compliance team to ensure 100% adherence to state and federal laws. We handle the paperwork, you handle the growth.
            </p>
          </section>
        </div>

        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80" 
            alt="Business Documents" 
            className="rounded-[40px] shadow-2xl"
          />
          <div className="absolute -bottom-8 -left-8 p-8 rounded-3xl bg-[#3c3b6e] text-white shadow-xl max-w-xs">
            <p className="text-lg font-bold mb-2 tracking-tight">Ready in 24-48 hours</p>
            <p className="text-sm opacity-80 leading-relaxed">Our digital-first process ensures your articles are filed and returned in record time.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LLCFormation;
