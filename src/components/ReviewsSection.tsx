import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

// --- EASY TO UPDATE DATA ---
// Update this reviews array to change the reviews section content
const reviewsData = [
  {
    name: 'Jennifer Thompson',
    avatar: null, // Optionally add avatar URL
    time: '3 hours ago',
    rating: 5,
    text: 'ABCleanz did an amazing job on our home windows! They were professional, punctual, and the results were spotless. Highly recommend!',
    images: [] // Optionally add image URLs
  },
  {
    name: 'Michael Chen',
    avatar: null,
    time: '2 days ago',
    rating: 5,
    text: 'We use ABCleanz for our home monthly. Their residential service is top-notch and they work around our schedule perfectly.',
    images: []
  },
  {
    name: 'Emily Rodriguez',
    avatar: null,
    time: '1 week ago',
    rating: 5,
    text: 'After our home renovation, ABCleanz cleaned all the construction residue from our windows. They looked brand new when they finished!',
    images: []
  }
];

const overallRating = 4.8;
const totalReviews = 137;

const renderStars = (rating: number) => (
  <span className="flex items-center">
    {Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} fill={i < rating ? 'currentColor' : 'none'} />
    ))}
  </span>
);

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 mb-1">
                <img src="/google.webp" alt="Google logo" width={54} height={54} className="inline-block align-middle" />
                <span className="text-2xl font-semibold text-gray-800">Reviews</span>
              </div>
              <div className="flex items-center gap-2 text-xl font-bold text-gray-900">
                {renderStars(Math.round(overallRating))}
                <span className="text-lg font-semibold text-gray-900 ml-2">{overallRating}</span>
                <span className="text-base font-normal text-gray-500 ml-1">({totalReviews})</span>
              </div>
            </div>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md shadow-none border-0 text-base font-semibold"
              onClick={() => window.open('https://www.google.com/search?q=ABCleanz+reviews', '_blank')}
            >
              Write a Review
            </Button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.map((review, idx) => (
            <Card key={idx} className="rounded-2xl border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  {/* Avatar or Google icon */}
                  <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-abcleanz-blue-800">
                    {review.avatar ? (
                      <img src={review.avatar} alt={review.name} className="w-9 h-9 rounded-full object-cover" />
                    ) : (
                      review.name[0]
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 flex items-center gap-1">
                      {review.name}
                    </div>
                    <div className="text-xs text-gray-500">{review.time}</div>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700 text-base mb-2">
                  {review.text}
                </p>
                {/* Optional: images grid */}
                {review.images && review.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {review.images.slice(0, 4).map((img, i) => (
                      <img key={i} src={img} alt="review" className="rounded-lg object-cover w-full h-20" />
                    ))}
                    {review.images.length > 4 && (
                      <div className="flex items-center justify-center bg-gray-100 rounded-lg text-gray-600 text-sm font-semibold">
                        +{review.images.length - 4}
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
