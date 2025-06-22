import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Users, 
  DollarSign, 
  TrendingUp,
  Star,
  Quote
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import storeInterior from '../assets/WechatIMG340.jpg';
import storeLayout from '../assets/WechatIMG342.jpg';
import franchiseeImage from '../assets/0q766jJWkJYJtaNgnwJvx.png';

const Success = () => {
  const { t } = useLanguage();

  const successStories = [
    {
      title: t('success.vancouver.title'),
      description: t('success.vancouver.description'),
      image: storeInterior,
      location: 'Vancouver, BC',
      stats: [
        { icon: DollarSign, label: 'Monthly Revenue', value: '$85,000' },
        { icon: Users, label: 'Members', value: '8,000+' },
        { icon: TrendingUp, label: 'Growth Rate', value: '18%' }
      ],
      badge: 'Flagship Store',
      badgeColor: 'bg-purple-500'
    },
    {
      title: t('success.montreal.title'),
      description: t('success.montreal.description'),
      image: storeLayout,
      location: 'Montreal, QC',
      stats: [
        { icon: DollarSign, label: 'Peak Daily Revenue', value: '$12,000' },
        { icon: Users, label: 'Members (3 months)', value: '5,000+' },
        { icon: TrendingUp, label: 'Social Media Growth', value: '250%' }
      ],
      badge: 'Rising Star',
      badgeColor: 'bg-blue-500'
    }
  ];

  const metrics = [
    {
      value: '18%',
      label: 'Average Annual Growth',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      value: '85%',
      label: 'Customer Satisfaction',
      icon: Star,
      color: 'text-yellow-600'
    },
    {
      value: '12',
      label: 'Months to Break Even',
      icon: DollarSign,
      color: 'text-blue-600'
    },
    {
      value: '95%',
      label: 'Franchisee Retention',
      icon: Users,
      color: 'text-purple-600'
    }
  ];

  return (
    <section id="success" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('success.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from successful franchisees who have built thriving businesses with Tennerama
          </p>
        </div>

        {/* Success Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {successStories.map((story, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg">
              <CardContent className="p-0">
                {/* Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${story.badgeColor} text-white border-0`}>
                      {story.badge}
                    </Badge>
                  </div>
                  
                  {/* Location */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm font-medium">{story.location}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {story.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {story.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {story.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-center mb-2">
                          <stat.icon className="h-5 w-5 text-purple-600" />
                        </div>
                        <div className="text-lg font-bold text-gray-900 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Quote Icon */}
            <div className="lg:col-span-2">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Quote className="h-12 w-12 text-purple-600 opacity-50" />
                </div>
                <div>
                  <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 italic">
                    {t('success.testimonial')}
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      JL
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">John Liu</div>
                      <div className="text-sm text-gray-600">Vancouver Franchisee</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Franchisee Image */}
            <div className="lg:col-span-1">
              <div className="relative">
                <img 
                  src={franchiseeImage} 
                  alt="Successful Franchisee"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                  <Star className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-50 rounded-xl mb-4">
                  <metric.icon className={`h-6 w-6 ${metric.color}`} />
                </div>
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Your Success Story Starts Here
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join our growing network of successful franchisees across Canada
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                Proven Business Model
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                Comprehensive Support
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                Strong ROI
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;

