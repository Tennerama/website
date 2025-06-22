import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  DollarSign, 
  TrendingUp, 
  Clock, 
  Target,
  CheckCircle,
  ArrowRight,
  Calculator,
  PieChart
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Investment = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: DollarSign,
      title: 'Starting Investment',
      value: '$258,000',
      description: t('investment.highlights.starting'),
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: PieChart,
      title: 'Initial Inventory',
      value: '$180,000',
      description: t('investment.highlights.inventory'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Clock,
      title: 'Payback Period',
      value: '12 Months',
      description: t('investment.highlights.payback'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: TrendingUp,
      title: 'Gross Margin',
      value: '40%',
      description: t('investment.highlights.margin'),
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const processSteps = t('investment.process.steps').map((step, index) => ({
    step: index + 1,
    title: step,
    icon: [Target, CheckCircle, Calculator, Clock, TrendingUp][index]
  }));

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="investment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('investment.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent investment structure with proven returns and comprehensive support
          </p>
        </div>

        {/* Investment Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${highlight.bgColor} mb-4`}>
                  <highlight.icon className={`h-6 w-6 ${highlight.color}`} />
                </div>
                
                <div className={`text-3xl font-bold ${highlight.color} mb-2`}>
                  {highlight.value}
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                
                <p className="text-sm text-gray-600">
                  {highlight.description}
                </p>
                
                {/* Decorative element */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${highlight.color.replace('text-', 'from-')} to-transparent`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ROI Breakdown */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Investment Breakdown
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm">
                  <span className="font-medium text-gray-700">Initial Inventory</span>
                  <span className="font-bold text-blue-600">$180,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm">
                  <span className="font-medium text-gray-700">Brand Usage Fee (3 years)</span>
                  <span className="font-bold text-purple-600">$45,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm">
                  <span className="font-medium text-gray-700">Smart POS System</span>
                  <span className="font-bold text-green-600">$15,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm">
                  <span className="font-medium text-gray-700">Training & Setup</span>
                  <span className="font-bold text-yellow-600">$18,000</span>
                </div>
                <div className="border-t-2 border-gray-200 pt-4">
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl">
                    <span className="font-bold text-lg">Total Investment</span>
                    <span className="font-bold text-2xl">$258,000</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Expected Returns
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-4xl font-bold text-green-600 mb-2">$50,000</div>
                    <div className="text-gray-600">First Month Target</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">$85,000</div>
                    <div className="text-gray-600">Average Monthly Revenue</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-600 mb-2">35-40%</div>
                    <div className="text-gray-600">Gross Margin Range</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Franchise Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('investment.process.title')}
          </h3>
          
          <div className="relative">
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="relative">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-xl font-bold mb-4 shadow-lg">
                        {step.step}
                      </div>
                      <div className="absolute -top-2 -right-2">
                        <step.icon className="h-6 w-6 text-yellow-500" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
                      {step.title}
                    </h4>
                  </div>
                  
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 transform -translate-y-0.5"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Franchise Journey?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join successful franchisees and build your profitable retail business today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;

