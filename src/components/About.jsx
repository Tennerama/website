import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Store, Truck, Smartphone } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import cosmeticsImage from '../assets/Image_by_Eco_Warrior_Princess.avif';
import householdImage from '../assets/VHUd5rpbz_m4ONCP9ngmr.avif';

const About = () => {
  const { t } = useLanguage();

  const subBrands = [
    {
      icon: Store,
      name: t('about.subBrands.expo.name'),
      description: t('about.subBrands.expo.description'),
      color: 'bg-purple-500',
      badge: 'Premium'
    },
    {
      icon: Store,
      name: t('about.subBrands.inc.name'),
      description: t('about.subBrands.inc.description'),
      color: 'bg-blue-500',
      badge: 'Core'
    },
    {
      icon: Truck,
      name: t('about.subBrands.popup.name'),
      description: t('about.subBrands.popup.description'),
      color: 'bg-green-500',
      badge: 'Mobile'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('about.story')}
          </p>
        </div>

        {/* Brand Story with Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={cosmeticsImage} 
                alt="Tennerama Beauty Products"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Beauty & Personal Care</h3>
                <p className="text-sm opacity-90">Quality products at $10</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={householdImage} 
                alt="Tennerama Household Products"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Household Essentials</h3>
                <p className="text-sm opacity-90">Everything you need daily</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Brands Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('about.subBrands.title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subBrands.map((brand, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${brand.color} text-white`}>
                      <brand.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {brand.badge}
                    </Badge>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {brand.name}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {brand.description}
                  </p>
                  
                  {/* Decorative gradient */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${brand.color.replace('bg-', 'bg-gradient-to-r from-')} to-transparent`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">2015</div>
              <div className="text-gray-600">Founded</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">300+</div>
              <div className="text-gray-600">New Products Quarterly</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">100%</div>
              <div className="text-gray-600">SGS Quality Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

