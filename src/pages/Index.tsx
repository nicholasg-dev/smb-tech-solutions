
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicePillars from '../components/ServicePillars';
import CoreServices from '../components/CoreServices';
import ResultsSection from '../components/ResultsSection';
import ProcessAutomation from '../components/ProcessAutomation';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicePillars />
      <CoreServices />
      <ResultsSection />
      <ProcessAutomation />
      <Footer />
    </div>
  );
};

export default Index;
