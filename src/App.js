// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LeadCaptureSection from './components/LeadCaptureSection';
import ConcernedSection from './components/ConcernedSection';
import EmpowerSection from './components/EmpowerSection';
import SituationalAwarenessSection from './components/SituationalAwarenessSection';
import BeAwareStaySafeBanner from './components/BeAwareStaySafeBanner';
import StorySection from './components/StorySection';
import TestimonialsSection from './components/TestimonialsSection';
import GetStartedSection from './components/GetStartedSection';
import PrepareProtectSection from './components/PrepareProtectSection';
import CardsSection from './components/CardsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <LeadCaptureSection />
      <ConcernedSection />
      <EmpowerSection />
      <SituationalAwarenessSection />
      <BeAwareStaySafeBanner />
      <StorySection />
      <TestimonialsSection />
      <GetStartedSection />
      <PrepareProtectSection />
      <CardsSection />
      <Footer />
    </div>
  );
}

export default App;