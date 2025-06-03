
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Jennifer Thompson",
      rating: 5,
      text: "ABCleanz did an amazing job on our home windows! They were professional, punctual, and the results were spotless. Highly recommend!"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "We use ABCleanz for our office building monthly. Their commercial service is top-notch and they work around our business hours perfectly."
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "After our home renovation, ABCleanz cleaned all the construction residue from our windows. They looked brand new when they finished!"
    },
    {
      name: "David Wilson",
      rating: 5,
      text: "Reliable, professional, and affordable. ABCleanz has been cleaning our windows for 2 years and they never disappoint."
    },
    {
      name: "Lisa Parker",
      rating: 5,
      text: "The team was courteous and efficient. They cleaned both inside and outside windows and even wiped down the sills. Excellent service!"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-abcleanz-blue-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center">
            {/* Left Arrow */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 z-10 bg-white hover:bg-abcleanz-blue-50 border-abcleanz-blue-200"
              onClick={prevReview}
            >
              <ChevronLeft className="w-6 h-6 text-abcleanz-blue-600" />
            </Button>

            {/* Reviews */}
            <div className="overflow-hidden mx-16">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <Card key={index} className="w-full flex-shrink-0 mx-4 shadow-lg border-0">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                        "{review.text}"
                      </p>
                      <p className="font-semibold text-abcleanz-blue-800 text-xl">
                        - {review.name}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 z-10 bg-white hover:bg-abcleanz-blue-50 border-abcleanz-blue-200"
              onClick={nextReview}
            >
              <ChevronRight className="w-6 h-6 text-abcleanz-blue-600" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentReview ? 'bg-abcleanz-blue-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentReview(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
