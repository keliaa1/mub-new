import PageLayout from '../components/PageLayout';
import { FileText, Clock, CheckCircle2 } from 'lucide-react';

const EINRegistration = () => {
  return (
    <PageLayout 
      title="EIN Registration" 
      subtitle="Obtain your Employer Identification Number (EIN) directly from the IRS. The essential tax ID for your US business."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4">What is an EIN?</h2>
            <p className="dark:text-gray-400 text-slate-600 leading-relaxed mb-6">
              An EIN is a nine-digit number assigned by the IRS. It is required to open a US bank account, hire employees, and file taxes. Think of it as a Social Security Number for your business.
            </p>
            <div className="space-y-4">
              {[
                "Required for US Banking",
                "Necessary for Stripe & PayPal",
                "Essential for Federal Tax Filings",
                "Builds Business Credit"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 dark:text-gray-300 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#3c3b6e]" />
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 rounded-3xl dark:bg-[#3c3b6e]/10 bg-[#3c3b6e]/5 border border-[#3c3b6e]/20">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-[#3c3b6e]" />
              Express processing
            </h3>
            <p className="dark:text-gray-400 text-slate-600 text-sm leading-relaxed">
              For non-residents without an SSN, the process can take weeks. We utilize our direct channels to expedite your filing and get your EIN in record time.
            </p>
          </section>
        </div>

        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80" 
            alt="Tax Documents" 
            className="rounded-[40px] shadow-2xl"
          />
          <div className="absolute -bottom-8 -right-8 p-8 rounded-3xl bg-white dark:bg-white/10 backdrop-blur-xl text-slate-900 dark:text-white shadow-xl border border-black/5 dark:border-white/10">
            <FileText className="w-8 h-8 mb-4 text-[#3c3b6e]" />
            <p className="text-lg font-bold mb-2 tracking-tight">100% Digital</p>
            <p className="text-sm opacity-80 leading-relaxed">No paper forms or physical mail required from your side.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default EINRegistration;
