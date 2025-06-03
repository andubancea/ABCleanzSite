
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            ABCleanz
          </span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
          Crystal Clear Windows, Every Time
        </h2>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
          Professional residential window cleaning services. Sparkling results guaranteed.
        </p>
      </div>

      {/* Animated Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToReviews}
          className="text-white hover:text-blue-200 transition-colors duration-300 animate-bounce-slow"
          aria-label="Scroll to reviews"
        >
          <ChevronDown size={40} />
        </button>
      </div>

      {/* Sparkle Effects */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full animate-sparkle opacity-60"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-200 rounded-full animate-sparkle opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-white rounded-full animate-sparkle opacity-50" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default HeroSection;
