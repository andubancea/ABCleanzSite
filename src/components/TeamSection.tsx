
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Bancea",
      role: "Founder & Lead Sales Manager",
      bio: "",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Dominik Parol",
      role: "Founder & Lead Cleaner",
      bio: "",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-abcleanz-blue-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional, experienced, and dedicated to delivering exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-abcleanz-blue-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-abcleanz-blue-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
