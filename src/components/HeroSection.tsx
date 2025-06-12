import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';
const HeroSection = () => {
  return <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Enterprise-Grade
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  {" "}Technology
                </span>
                <br />
                for SMBs
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your business challenges into competitive advantages with our expert network of technology specialists. 
                Get enterprise-level solutions without the enterprise-level costs.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">4-8x</div>
                <div className="text-sm text-gray-600">ROI in Year 1</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">94%</div>
                <div className="text-sm text-gray-600">Security Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">68%</div>
                <div className="text-sm text-gray-600">Time Reduction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white group">
                Start Your Transformation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <Zap className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900">AI Automation</h3>
                  <p className="text-sm text-gray-600">Streamline workflows with intelligent automation</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow mt-8">
                  <TrendingUp className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="font-semibold text-gray-900">Growth Metrics</h3>
                  <p className="text-sm text-gray-600">Track and optimize business performance</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <Shield className="h-8 w-8 text-red-600 mb-3" />
                  <h3 className="font-semibold text-gray-900">Cybersecurity</h3>
                  <p className="text-sm text-gray-600">Enterprise-grade protection for your business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;