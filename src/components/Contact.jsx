import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Globe,
  MapPin,
  Send,
  CheckCircle,
  Calendar,
  X
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  // 预约表单状态
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredTime: '',
    location: '',
    message: ''
  });
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call us for immediate assistance',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@tennerama.com',
      description: 'Send us an email anytime',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Fri: 9AM-6PM',
      description: 'EST Time Zone',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const locations = [
    {
      title: 'Headquarters',
      address: '123 Business Ave, Suite 100, Toronto, ON M5V 2H1',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Regional Offices',
      addresses: [
        '456 Commerce St, Vancouver, BC V6B 1A1',
        '789 Market Blvd, Montreal, QC H2Y 1C6'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // 构建邮件内容
      const subject = 'Tennerama Franchise Inquiry';
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Location: ${formData.location || 'Not provided'}

Message:
${formData.message || 'No message provided'}

---
This inquiry was submitted from the Tennerama franchise website.
      `.trim();

      // 使用mailto链接发送邮件
      const mailtoLink = `mailto:info@tennerama.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // 打开用户的默认邮件客户端
      window.open(mailtoLink, '_blank');
      
      console.log('Email client opened with form data');
      setIsSubmitted(true);
      
      // 清空表单
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        message: ''
      });

      // 3秒后重置提交状态
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);

    } catch (error) {
      console.error('Failed to open email client:', error);
      setSubmitError('Failed to open email client. Please contact us directly at info@tennerama.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookingInputChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setIsBookingSubmitted(true);
    
    try {
      const subject = 'Schedule Franchise Consultation - Tennerama';
      const body = `
Dear Tennerama Team,

I would like to schedule a consultation call to discuss franchising opportunities with Tennerama.

Contact Information:
Name: ${bookingData.name}
Email: ${bookingData.email}
Phone: ${bookingData.phone || 'Not provided'}

Preferred Consultation Time: ${bookingData.preferredTime}
Location of Interest: ${bookingData.location || 'Not specified'}

Additional Message:
${bookingData.message || 'No additional message'}

Please contact me to confirm the consultation time.

Thank you for your time.

Best regards,
${bookingData.name}

---
This consultation request was submitted from the Tennerama franchise website.
      `.trim();
      
      const mailtoLink = `mailto:info@tennerama.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, '_blank');
      
      // 清空表单
      setBookingData({
        name: '',
        email: '',
        phone: '',
        preferredTime: '',
        location: '',
        message: ''
      });
      
      // 3秒后关闭弹窗
      setTimeout(() => {
        setShowBookingForm(false);
        setIsBookingSubmitted(false);
      }, 3000);
      
    } catch (error) {
      console.error('Failed to open email client:', error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your franchise journey? Get in touch with our team for personalized consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h3>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Location
                        </label>
                        <Input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="City or region of interest"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full"
                        placeholder="Tell us about your interest in franchising with Tennerama..."
                      />
                    </div>

                    {submitError && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-700 text-sm">{submitError}</p>
                      </div>
                    )}
                    
                    <Button 
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-gray-600">
                      Thank you for your interest. Our team will contact you within 24 hours.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${method.bgColor}`}>
                        <method.icon className={`h-5 w-5 ${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {method.title}
                        </h4>
                        <p className={`font-medium ${method.color} mb-1`}>
                          {method.value}
                        </p>
                        <p className="text-sm text-gray-600">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Store Locations */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {t('contact.locations.title')}
                </h3>
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <div key={index} className={`p-4 rounded-lg ${location.bgColor}`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin className={`h-4 w-4 ${location.color}`} />
                        <h4 className={`font-semibold ${location.color}`}>
                          {location.title}
                        </h4>
                      </div>
                      {location.address ? (
                        <p className="text-sm text-gray-700">
                          {location.address}
                        </p>
                      ) : (
                        <div className="space-y-1">
                          {location.addresses.map((address, addrIndex) => (
                            <p key={addrIndex} className="text-sm text-gray-700">
                              {address}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Schedule a Call */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
              <CardContent className="p-6">
                <div className="text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-white" />
                  <h3 className="text-xl font-bold mb-2">
                    Schedule a Call
                  </h3>
                  <p className="text-purple-100 mb-4">
                    Book a personalized consultation with our franchise experts
                  </p>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="w-full bg-white text-purple-600 hover:bg-gray-100 font-semibold"
                    onClick={() => setShowBookingForm(true)}
                  >
                    Book Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Schedule a Consultation
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowBookingForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {!isBookingSubmitted ? (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={bookingData.name}
                      onChange={handleBookingInputChange}
                      required
                      className="w-full"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleBookingInputChange}
                      required
                      className="w-full"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleBookingInputChange}
                      className="w-full"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Consultation Time
                    </label>
                    <Input
                      type="text"
                      name="preferredTime"
                      value={bookingData.preferredTime}
                      onChange={handleBookingInputChange}
                      className="w-full"
                      placeholder="e.g., Weekdays 2-4 PM, Weekends anytime"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location of Interest
                    </label>
                    <Input
                      type="text"
                      name="location"
                      value={bookingData.location}
                      onChange={handleBookingInputChange}
                      className="w-full"
                      placeholder="City or region of interest"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <Textarea
                      name="message"
                      value={bookingData.message}
                      onChange={handleBookingInputChange}
                      rows={3}
                      className="w-full"
                      placeholder="Tell us about your interest in franchising with Tennerama..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    disabled={isBookingSubmitted}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isBookingSubmitted ? 'Sending...' : 'Schedule Consultation'}
                    <Calendar className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Consultation Request Sent!
                  </h4>
                  <p className="text-gray-600">
                    Thank you for your interest. Our team will contact you to confirm your consultation time.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
};

export default Contact;

