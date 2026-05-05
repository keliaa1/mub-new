import { useParams, Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { ChevronRight, Shield, FileText, Cookie, CreditCard, ArrowLeft } from 'lucide-react';

const Legal = () => {
  const { type } = useParams<{ type: string }>();

  const getContent = () => {
    switch (type) {
      case 'privacy-policy':
        return {
          title: 'Privacy Policy',
          subtitle: 'Your privacy is our priority. Learn how we handle your data.',
          icon: <Shield className="w-8 h-8 text-[#3c3b6e]" />,
          sections: [
            {
              title: '1. Information We Collect',
              content: 'We collect information that you provide directly to us, including when you create an account, make a purchase, or contact our support team. This information may include your name, email address, physical address, phone number, and payment details.'
            },
            {
              title: '2. How We Use Your Information',
              content: 'We use the information we collect to provide and maintain our services, process transactions, send technical notices, and communicate with you about products, services, and promotions.'
            },
            {
              title: '3. Data Retention',
              content: 'We store the information we collect for as long as is necessary for the purpose for which we originally collected it, or for other legitimate business purposes, including to meet our legal, regulatory, or other compliance obligations.'
            },
            {
              title: '4. Your Privacy Rights',
              content: 'Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete the data we hold about you.'
            }
          ]
        };
      case 'terms-of-service':
        return {
          title: 'Terms of Service',
          subtitle: 'The legal agreement between you and My USA Business.',
          icon: <FileText className="w-8 h-8 text-[#3c3b6e]" />,
          sections: [
            {
              title: '1. Agreement to Terms',
              content: 'By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use our platform.'
            },
            {
              title: '2. Description of Service',
              content: 'My USA Business provides tools and services to assist international entrepreneurs in forming and managing business entities in the United States.'
            },
            {
              title: '3. User Responsibilities',
              content: 'You are responsible for providing accurate and complete information and for maintaining the confidentiality of your account credentials.'
            },
            {
              title: '4. Limitation of Liability',
              content: 'To the maximum extent permitted by law, My USA Business shall not be liable for any indirect, incidental, or consequential damages arising out of your use of our services.'
            }
          ]
        };
      case 'cookies':
        return {
          title: 'Cookies Policy',
          subtitle: 'How we use cookies to improve your experience.',
          icon: <Cookie className="w-8 h-8 text-[#3c3b6e]" />,
          sections: [
            {
              title: '1. What are Cookies?',
              content: 'Cookies are small text files placed on your device to collect standard internet log information and visitor behavior information.'
            },
            {
              title: '2. Why We Use Cookies',
              content: 'We use cookies for various reasons, including keeping you signed in, understanding how you use our site, and providing personalized content.'
            },
            {
              title: '3. Types of Cookies We Use',
              content: 'We use essential cookies for site functionality, analytical cookies to understand site performance, and marketing cookies to show relevant advertisements.'
            },
            {
              title: '4. Managing Your Cookies',
              content: 'You can set your browser not to accept cookies, and the above website tells you how to remove cookies from your browser. However, some of our website features may not function as a result.'
            }
          ]
        };
      case 'payment-policy':
        return {
          title: 'Payment Policy',
          subtitle: 'Transparent information about billing and refunds.',
          icon: <CreditCard className="w-8 h-8 text-[#3c3b6e]" />,
          sections: [
            {
              title: '1. Payment Methods',
              content: 'We accept major credit cards, debit cards, and other secure electronic payment methods as displayed on our checkout page.'
            },
            {
              title: '2. Billing and Currency',
              content: 'All transactions are processed in US Dollars (USD). You are responsible for any currency conversion fees charged by your bank or card issuer.'
            },
            {
              title: '3. Refund Policy',
              content: 'Given the nature of corporate formation services, many fees are non-refundable once the filing process has begun. Please contact our billing team for specific inquiries.'
            },
            {
              title: '4. Subscription Services',
              content: 'Some services, such as Registered Agent representation, may involve recurring annual fees. You will be notified prior to any renewal charges.'
            }
          ]
        };
      default:
        return {
          title: 'Information',
          subtitle: 'The page you are looking for might be under construction.',
          icon: <FileText className="w-8 h-8 text-[#3c3b6e]" />,
          sections: [
            {
              title: 'Coming Soon',
              content: 'We are currently updating this section of our website to provide you with the most accurate and up-to-date information. Please check back soon or contact our support team if you have immediate questions.'
            }
          ]
        };
    }
  };

  const { title, subtitle, icon, sections } = getContent();

  return (
    <PageLayout title={title} subtitle={subtitle}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 flex items-center gap-4 p-6 rounded-3xl bg-[#3c3b6e]/5 border border-[#3c3b6e]/10">
          <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center shadow-sm">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold dark:text-white text-slate-900">Legal Document</h3>
            <p className="dark:text-gray-400 text-slate-600">Last updated: May 2026</p>
          </div>
        </div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#3c3b6e] text-white text-sm flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                {section.title}
              </h2>
              <div className="pl-11">
                <p className="text-lg dark:text-gray-400 text-slate-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </motion.section>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-[32px] bg-slate-900 dark:bg-white/5 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
          <div>
            <h3 className="text-2xl font-bold mb-2">Have questions?</h3>
            <p className="text-white/60">Our legal and support teams are here to help you.</p>
          </div>
          <Link
            to="/contact-us"
            className="px-8 py-4 bg-[#3c3b6e] hover:bg-[#4c4b8e] text-white rounded-2xl font-bold transition-all flex items-center gap-2 group"
          >
            Contact Support
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <button
          onClick={() => window.history.back()}
          className="mt-12 flex items-center gap-2 text-slate-500 hover:text-[#3c3b6e] transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Go back
        </button>
      </div>
    </PageLayout>
  );
};

export default Legal;

