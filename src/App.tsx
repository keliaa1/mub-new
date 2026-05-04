import Hero from './components/Hero'
import QuickBenefits from './components/QuickBenefits'
import WhyChooseUs from './components/WhyChooseUs'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import PaymentMarquee from './components/PaymentMarquee'
import Footer from './components/Footer'

import { SmoothCursor } from './components/SmoothCursor'

function App() {
  return (
    <main className="min-h-screen">
      <SmoothCursor />
      <Hero />
      <QuickBenefits />
      <WhyChooseUs />
      <Benefits />
      <Testimonials />
      <Pricing />
      <PaymentMarquee />
      <Footer />
    </main>
  )
}

export default App
