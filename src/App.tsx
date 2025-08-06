import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ValueSection from './components/ValueSection';
import HowItWorks from './components/HowItWorks';
import PreLaunchSection from './components/PlansSection';
import SocialProof from './components/SocialProof';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProblemSection />
      <ValueSection />
      <HowItWorks />
      <PreLaunchSection />
      <SocialProof />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;