
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ReviewsSection from '@/components/ReviewsSection';
import TeamSection from '@/components/TeamSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ReviewsSection />
      <TeamSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
