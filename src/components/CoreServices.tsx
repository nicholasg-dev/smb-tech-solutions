
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Database, Users, Shield, BarChart, Megaphone } from 'lucide-react';

const CoreServices = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Implementation",
      description: "Automate processes and unlock business insights through practical artificial intelligence solutions tailored to your operations.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Database,
      title: "Data Automation",
      description: "Streamline workflows with intelligent data processing, reducing manual effort and improving accuracy across your business.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Users,
      title: "Workforce Optimization",
      description: "Enhance productivity with tailored digital tools that empower your team to work smarter, not harder.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your business assets with enterprise-grade security solutions designed for small and mid-sized businesses.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: BarChart,
      title: "Operational Efficiency",
      description: "Reduce costs and improve outcomes by streamlining processes and eliminating operational bottlenecks.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Megaphone,
      title: "Marketing Services",
      description: "Drive business growth and visibility through strategic digital marketing and customer engagement solutions.",
      color: "bg-pink-100 text-pink-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Technology Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI implementation to cybersecurity, we provide the full spectrum of technology solutions your business needs to thrive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border border-gray-200 hover:border-blue-300 transition-colors group cursor-pointer">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className={`w-14 h-14 rounded-lg ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
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

export default CoreServices;
