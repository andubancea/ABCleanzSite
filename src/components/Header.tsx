
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
      <div className="w-full px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-abcleanz-blue-500 to-abcleanz-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
            A
          </div>
          <span className="text-2xl font-bold text-abcleanz-blue-800">ABCleanz</span>
        </div>

        {/* Book Now Button */}
        <Button 
          className="bg-abcleanz-blue-600 hover:bg-abcleanz-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={scrollToBooking}
        >
          Book Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
