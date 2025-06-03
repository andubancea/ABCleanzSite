
import React from 'react';
import { Home, Calendar, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Window Cleaning",
      description: "Professional window cleaning for your home. We make your windows sparkle while you relax.",
      features: ["Interior & Exterior Cleaning", "Screen Cleaning", "Sill Wiping", "Fully Insured"]
    },
    {
      icon: Building,
      title: "Commercial Window Cleaning",
      description: "Keep your business looking professional with regular commercial window cleaning services.",
      features: ["Scheduled Service", "High-Rise Capable", "Flexible Timing", "Licensed & Bonded"]
    },
    {
      icon: Calendar,
      title: "Post-Construction Cleanup",
      description: "Specialized cleaning for new construction and renovation projects to remove all debris and buildup.",
      features: ["Construction Debris Removal", "Paint Splatter Removal", "Deep Cleaning", "Same-Day Service"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-abcleanz-blue-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional window cleaning services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-abcleanz-blue-500 to-abcleanz-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-abcleanz-blue-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-abcleanz-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
