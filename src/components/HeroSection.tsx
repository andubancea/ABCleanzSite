import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToReviews = () => {
    const reviewsSection = document.getElementById('reviews');
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-green-900 via-green-800 to-green-700">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-abcleanz-blue-900/80 to-abcleanz-blue-800/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto -mt-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
            ABCleanz
          </span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
          Crystal Clear Windows, Every Time
        </h2>
      </div>
      {/* Animated Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToReviews}
          className="text-white hover:text-blue-200 transition-colors duration-1000 animate-bounce-slow"
          aria-label="Scroll to reviews"
        >
          <ChevronDown size={40} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
