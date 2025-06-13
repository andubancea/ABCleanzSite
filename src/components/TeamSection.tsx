import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Bancea",
      role: "Founder & Lead Sales Manager",
      bio: "",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEXcDOH8lJabw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703100155114?e=1755129600&v=beta&t=DM1EiDbuuqR7wawiGmyp32Li7m6wPMHXeU-k-tbuciI"
    },
    {
      name: "Dominik Parol",
      role: "Founder & Lead Cleaner",
      bio: "",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQFBd_1RHrR6DQ/profile-displayphoto-shrink_800_800/B4EZOyBJweH0Ak-/0/1733858467326?e=1755129600&v=beta&t=4Vi8_gyer87J5z2lV-u9pxdha4tGSMGmDmBwn2s3TZY"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-green-50 to-gray-50">
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
