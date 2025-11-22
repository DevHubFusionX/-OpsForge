import React from 'react';
import HeroSection from './sections/HeroSection';
import TrustSection from './sections/TrustSection';
import FeaturesSection from './sections/FeaturesSection';
import PricingSection from './sections/PricingSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';
import Footer from '../../components/landing/Footer';

export const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
