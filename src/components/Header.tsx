
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b border-abcleanz-blue-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-abcleanz-blue-500 to-abcleanz-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
            A
          </div>
          <span className="text-2xl font-bold text-abcleanz-blue-800">ABCleanz</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            className="border-abcleanz-blue-500 text-abcleanz-blue-600 hover:bg-abcleanz-blue-50 hidden sm:inline-flex"
            onClick={scrollToBooking}
          >
            Get a Quote
          </Button>
          <Button 
            className="bg-abcleanz-blue-600 hover:bg-abcleanz-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={scrollToBooking}
          >
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
