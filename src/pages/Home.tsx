import Hero from '../components/Hero'
import QuickBenefits from '../components/QuickBenefits'
import WhyChooseUs from '../components/WhyChooseUs'
import Benefits from '../components/Benefits'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PaymentMarquee from '../components/PaymentMarquee'
import Footer from '../components/Footer'
import { SmoothCursor } from '../components/SmoothCursor'
import { useEffect, useState } from 'react'

const Home = () => {
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen dark:bg-[#0B0D0F] bg-slate-50 transition-colors duration-300">
      <SmoothCursor />
      <Hero selectedState={selectedState} setSelectedState={setSelectedState} />
      <QuickBenefits />
      <WhyChooseUs />
      <Benefits />
      <Testimonials />
      <Pricing heroSelectedState={selectedState} />
      <PaymentMarquee />
      <Footer />
    </main>
  );
};

export default Home;
