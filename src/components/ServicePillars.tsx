
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Network, Target, Lightbulb } from 'lucide-react';

const ServicePillars = () => {
  const pillars = [
    {
      icon: Users,
      title: "Proactive Partnership",
      description: "We anticipate your technology needs and implement solutions before they become critical business challenges."
    },
    {
      icon: Network,
      title: "Expert Network",
      description: "Access to deeply specialized technology professionals delivering enterprise-level expertise without overhead."
    },
    {
      icon: Target,
      title: "Measurable Impact",
      description: "Solutions focused on tangible results: cost reduction, efficiency gains, enhanced security, and sustainable growth."
    },
    {
      icon: Lightbulb,
      title: "Adaptive Innovation",
      description: "Continuously evolving services to keep your business ahead of technological change and market demands."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Service Pillars
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four foundational principles that guide every technology solution we deliver to your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-200 transition-colors">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicePillars;
