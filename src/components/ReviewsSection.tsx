import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';


const reviewsData = [
  {
    name: 'Justin Inwood',
    avatar: null,
    time: 'May 12, 2025',
    rating: 5,
    text: 'Amazing job, windows have never looked so clean. Handsome boys who know how to get things done!',
  },
  {
    name: 'Lorraine Boucher',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWdCBD6j-EWVDkBBrbXUz8WghvFbN2GSfoPvujYZcdMwO9Ely5z=w144-h144-p-rp-mo-br100',
    time: 'June 6, 2025',
    rating: 5,
    text: 'ABCleanz window cleaners did an excellent job on our windows, leaving them sparkling and streak-free without the use of chemicals. Their filtered water system is very effective. They also did an excellent job of cleaning the screens and tracks. Thank you Alex and Dominik for a most professional job. I highly recommend these entrepreneurs.',
  },
  {
    name: 'Ellisa Moller',
    avatar: null,
    time: 'June 9, 2025',
    rating: 5,
    text: "Alex and Dominik did a fantastic job on our windows! They did my parents' house and my mom raves about what a great job they did so I gave them a call. Alex was easy to communicate with through text and gave a fair quote. They were very professional and accommodating. I highly recommend giving them a call.",
  }
];

const overallRating = 5.0;
const totalReviews = 7;

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
                <img src="/google.webp" alt="Google logo" width={100} height={100} className="inline-block align-middle" />
                <span className="text-2xl font-semibold text-gray-800">Reviews</span>
              </div>
              <div className="flex items-center gap-2 text-xl font-bold text-gray-900">
                {renderStars(Math.round(overallRating))}
                <span className="text-lg font-semibold text-gray-900 ml-2">{overallRating.toFixed(1)}</span>
                <span className="text-base font-normal text-gray-500 ml-1">({totalReviews})</span>
              </div>
            </div>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md shadow-none border-0 text-base font-semibold"
              onClick={() => window.open('https://www.google.com/search?sca_esv=03718eb1fb0ed70c&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1zWhAbnOXPViOX0xFbU-8db9BFyQ0L1mRRT6qEIn4U2j9DnOOtUSj2ehCaaeR4NK4mno8KY-N6i6T7Cv-JO_PvgEk0n&q=ABCleanz+Reviews&sa=X&ved=2ahUKEwio4rL1lu-NAxUqM1kFHT26DCgQ0bkNegQIKhAC&biw=1502&bih=789&dpr=2', '_blank')}
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
