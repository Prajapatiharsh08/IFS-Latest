import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import FAQs from './components/pages/FAQs';
import InvestmentPlans from './components/pages/InvestmentPlans';
import Header from './components/Header';
import Footer from './components/Footer';
import Calculator from './components/pages/Calculator';
import AboutUs from './components/pages/AboutUs';
import HowItWorks from './components/pages/HowItWorks';

function App() {
  return (
    <div>
      {/* Routing logic */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/plans" element={<InvestmentPlans />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
