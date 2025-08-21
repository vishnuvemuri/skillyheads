import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LearnSection from './components/LearnSection';
import FeaturesSection from './components/FeaturesSection';
import CoursesSection from './components/CoursesSection';
import MetricsSection from './components/MetricsSection';
import Footer from './components/Footer';
import { initializeScrollAnimations } from './utils/scrollAnimations';

function App() {
  useEffect(() => {
    initializeScrollAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Navigation />
      <Hero />
      <LearnSection />
      <FeaturesSection />
      <CoursesSection />
      <MetricsSection />
      <Footer />
    </div>
  );
}

export default App;