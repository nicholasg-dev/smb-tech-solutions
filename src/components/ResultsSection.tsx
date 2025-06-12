
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, MessageSquare, FileText, Shield, Monitor, BarChart3 } from 'lucide-react';

const ResultsSection = () => {
  const results = [
    {
      icon: TrendingUp,
      title: "Social Media Auditing",
      metric: "72% engagement increase",
      description: "38% higher customer conversion rates through strategic content planning and analysis"
    },
    {
      icon: MessageSquare,
      title: "Customer Service AI",
      metric: "76% of inquiries automated",
      description: "42% cost reduction with improved response times using intelligent chatbots"
    },
    {
      icon: FileText,
      title: "Financial Reporting",
      metric: "68% faster monthly closing",
      description: "Improved data accuracy with custom dashboards and automated integration"
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      metric: "94% vulnerability reduction",
      description: "Comprehensive protection for websites and email systems"
    },
    {
      icon: Monitor,
      title: "Remote Work Infrastructure",
      metric: "23% productivity boost",
      description: "Secure, collaborative solutions enabling distributed teams"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      metric: "Significant annual savings",
      description: "Custom KPI visualization and predictive analytics uncovering opportunities"
    }
  ];

  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world success stories demonstrating measurable impact and ROI for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {result.title}
                    </h3>
                  </div>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {result.metric}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to see similar results for your business?
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Join hundreds of SMBs that have transformed their operations with Evolutis
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
