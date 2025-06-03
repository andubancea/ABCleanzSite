
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking form submitted:', formData);
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-white to-abcleanz-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-abcleanz-blue-800 mb-4">
            Book Your Service
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready for crystal clear windows? Get your free quote today!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center bg-gradient-to-r from-abcleanz-blue-600 to-abcleanz-blue-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold flex items-center justify-center">
                <Calendar className="mr-2" />
                Schedule Your Cleaning
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
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
                    <Label htmlFor="email" className="text-abcleanz-blue-800 font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 border-abcleanz-blue-200 focus:border-abcleanz-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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
                    <Label htmlFor="service" className="text-abcleanz-blue-800 font-semibold">
                      Service Type *
                    </Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full px-3 py-2 border border-abcleanz-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-abcleanz-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Window Cleaning</option>
                      <option value="commercial">Commercial Window Cleaning</option>
                      <option value="post-construction">Post-Construction Cleanup</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-abcleanz-blue-800 font-semibold">
                    Additional Details
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 w-full px-3 py-2 border border-abcleanz-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-abcleanz-blue-500 focus:border-transparent"
                    placeholder="Tell us about your specific needs, number of windows, preferred schedule, etc."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-abcleanz-blue-600 to-abcleanz-blue-700 hover:from-abcleanz-blue-700 hover:to-abcleanz-blue-800 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Your Free Quote
                </Button>

                <p className="text-center text-sm text-gray-600">
                  We'll contact you within 24 hours to schedule your service and provide a detailed quote.
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
