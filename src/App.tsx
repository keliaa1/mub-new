import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LLCFormation from './pages/LLCFormation';
import BankingSupport from './pages/BankingSupport';
import EINRegistration from './pages/EINRegistration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/llc-formation" element={<LLCFormation />} />
        <Route path="/banking-support" element={<BankingSupport />} />
        <Route path="/ein-registration" element={<EINRegistration />} />
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
