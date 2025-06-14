import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Phone } from 'lucide-react';
import { toast } from 'sonner';

const BookingSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCalComBooking = () => {
    window.open('https://cal.com/abcleanz/general-home-cleaning', '_blank');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/andu@abcleanz.com', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        toast.success('Thank you! We\'ll be in touch with you shortly.');
        form.reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-green-50 via-white to-green-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-abcleanz-blue-800 mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready for crystal clear windows? Choose how you'd like to get started!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Book Service Card */}
          <Card className="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="text-center bg-gradient-to-r from-abcleanz-blue-600 to-abcleanz-blue-700 text-white rounded-t-lg py-4">
              <CardTitle className="text-xl font-bold flex items-center justify-center">
                <Calendar className="mr-2" />
                Book Service
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center flex flex-col justify-between flex-grow">
              <p className="text-gray-600 mb-4 text-base">
                Schedule your window cleaning service directly online. Choose your preferred date and time.
              </p>
              <div>
                <Button
                  onClick={handleCalComBooking}
                  className="w-full bg-gradient-to-r from-abcleanz-blue-600 to-abcleanz-blue-700 hover:from-abcleanz-blue-700 hover:to-abcleanz-blue-800 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mb-3"
                >
                  Schedule Now
                </Button>
                <p className="text-sm text-gray-500">
                  Instant booking • Online scheduling
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Get Quote Card */}
          <Card className="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="text-center bg-gradient-to-r from-abcleanz-blue-600 to-abcleanz-blue-700 text-white rounded-t-lg py-4">
              <CardTitle className="text-xl font-bold flex items-center justify-center">
                <Phone className="mr-2" />
                Get a Quote
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex flex-col justify-between flex-grow">
              <p className="text-gray-600 mb-4 text-base text-center">
                Leave your details and we'll call you back with a personalized quote.
              </p>
              <form 
                onSubmit={handleSubmit}
                className="space-y-3"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="name" className="text-abcleanz-blue-800 font-semibold text-sm">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className="mt-1 border-abcleanz-blue-200 focus:border-abcleanz-blue-500 h-8 text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-abcleanz-blue-800 font-semibold text-sm">
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="mt-1 border-abcleanz-blue-200 focus:border-abcleanz-blue-500 h-8 text-sm"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-abcleanz-blue-600 to-abcleanz-blue-700 hover:from-abcleanz-blue-700 hover:to-abcleanz-blue-800 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Request Quote'}
                </Button>

                <p className="text-center text-sm text-gray-500">
                  We'll call you back within 24 hours
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
