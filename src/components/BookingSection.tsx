
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    toast({
      title: "Quote Request Submitted!",
      description: "We'll call you back within 24 hours with your quote.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCalComBooking = () => {
    // Replace with your actual Cal.com link
    window.open('https://cal.com/your-calendar-link', '_blank');
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-white to-abcleanz-blue-50 border-t-4 border-abcleanz-blue-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-abcleanz-blue-800 mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready for crystal clear windows? Choose how you'd like to get started!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Book Service Card */}
          <Card className="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="text-center bg-gradient-to-r from-abcleanz-blue-600 to-abcleanz-blue-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold flex items-center justify-center">
                <Calendar className="mr-2" />
                Book Service
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-center">
              <p className="text-gray-600 mb-6 text-lg">
                Schedule your window cleaning service directly online. Choose your preferred date and time.
              </p>
              <Button
                onClick={handleCalComBooking}
                className="w-full bg-gradient-to-r from-abcleanz-blue-600 to-abcleanz-blue-700 hover:from-abcleanz-blue-700 hover:to-abcleanz-blue-800 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Now
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Instant booking • Online scheduling
              </p>
            </CardContent>
          </Card>

          {/* Get Quote Card */}
          <Card className="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="text-center bg-gradient-to-r from-abcleanz-blue-600 to-abcleanz-blue-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold flex items-center justify-center">
                <Phone className="mr-2" />
                Get a Quote
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-600 mb-6 text-lg text-center">
                Not sure about pricing? Leave your details and we'll call you back with a personalized quote.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-abcleanz-blue-800 font-semibold">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 border-abcleanz-blue-200 focus:border-abcleanz-blue-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-abcleanz-blue-800 font-semibold">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 border-abcleanz-blue-200 focus:border-abcleanz-blue-500"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-abcleanz-blue-800 font-semibold">
                    Tell us about your needs
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 w-full px-3 py-2 border border-abcleanz-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-abcleanz-blue-500 focus:border-transparent"
                    placeholder="Number of windows, house size, etc."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-abcleanz-blue-600 to-abcleanz-blue-700 hover:from-abcleanz-blue-700 hover:to-abcleanz-blue-800 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Request Quote
                </Button>

                <p className="text-center text-sm text-gray-600">
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
