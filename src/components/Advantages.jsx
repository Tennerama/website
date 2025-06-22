import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Truck, 
  Megaphone, 
  BarChart3, 
  Clock, 
  Target,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Advantages = () => {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: ShoppingCart,
      title: t('advantages.merchandising.title'),
      items: t('advantages.merchandising.items'),
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600',
      features: [
        { icon: BarChart3, label: 'AI Analytics' },
        { icon: Target, label: 'Predictive' },
        { icon: TrendingUp, label: 'Optimized' }
      ]
    },
    {
      icon: Truck,
      title: t('advantages.logistics.title'),
      items: t('advantages.logistics.items'),
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600',
      features: [
        { icon: Clock, label: '48h Guarantee' },
        { icon: Shield, label: '99.3% Accuracy' },
        { icon: Zap, label: 'Fast Delivery' }
      ]
    },
    {
      icon: Megaphone,
      title: t('advantages.marketing.title'),
      items: t('advantages.marketing.items'),
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600',
      features: [
        { icon: Target, label: 'Social Media' },
        { icon: TrendingUp, label: 'Conversion' },
        { icon: BarChart3, label: 'KOL Network' }
      ]
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('advantages.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support system designed to ensure your franchise success
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg group">
              <CardContent className="p-0">
                {/* Header with Icon */}
                <div className={`bg-gradient-to-r ${advantage.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm">
                        <advantage.icon className="h-8 w-8" />
                      </div>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        Core
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {advantage.title}
                    </h3>
                  </div>
                  
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Feature Icons */}
                  <div className="flex justify-center space-x-4 mb-6">
                    {advantage.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-center">
                        <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${advantage.color}/10 mb-2 group-hover:${advantage.color}/20 transition-colors`}>
                          <feature.icon className={`h-5 w-5 ${advantage.color.replace('bg-', 'text-')}`} />
                        </div>
                        <div className="text-xs text-gray-500 font-medium">
                          {feature.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-4">
                    {advantage.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full ${advantage.color} mt-2 flex-shrink-0`}></div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5.8x</div>
              <div className="text-gray-600 text-sm">Inventory Turnover</div>
              <div className="text-xs text-gray-500 mt-1">Per Year</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.3%</div>
              <div className="text-gray-600 text-sm">Shipment Accuracy</div>
              <div className="text-xs text-gray-500 mt-1">RFID Tracking</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">48h</div>
              <div className="text-gray-600 text-sm">Emergency Restock</div>
              <div className="text-xs text-gray-500 mt-1">Top 100 SKUs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">15%</div>
              <div className="text-gray-600 text-sm">Cost Reduction</div>
              <div className="text-xs text-gray-500 mt-1">Delivery Network</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;

