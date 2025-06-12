
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ProcessAutomation = () => {
  const processes = [
    "Data entry and extraction",
    "Automated report generation", 
    "Customer onboarding",
    "Invoice processing",
    "Email marketing automation",
    "Inventory management",
    "Document management",
    "HR workflows"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Process Automation That Delivers
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your business operations with intelligent automation solutions. 
                Our clients typically see a 4-8x return on automation investments within the first year.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {processes.map((process, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{process}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white group">
                Automate Your Processes
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                View Case Studies
              </Button>
            </div>
          </div>

          {/* Right Content - ROI Card */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-50 to-white border border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Automation ROI Calculator
                </h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                      <div className="text-3xl font-bold text-blue-600">4-8x</div>
                      <div className="text-sm text-gray-600">First Year ROI</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                      <div className="text-3xl font-bold text-green-600">60%</div>
                      <div className="text-sm text-gray-600">Time Savings</div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-3xl font-bold text-purple-600">95%</div>
                    <div className="text-sm text-gray-600">Error Reduction</div>
                  </div>
                  <p className="text-gray-600 text-center">
                    *Based on average client results across 200+ automation projects
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessAutomation;
