import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Linkedin,
  ArrowUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'advantages', href: '#advantages' },
    { key: 'investment', href: '#investment' },
    { key: 'success', href: '#success' },
    { key: 'contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600"></div>

      {/* Floating Back to Top Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={scrollToTop}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                Tennerama
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Join the $10 boutique revolution. Partner with Tennerama and build a profitable retail business with our proven franchise model. Quality products, exceptional support, guaranteed success.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">1-800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">franchise@tennerama.ca</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5" />
                <div className="text-gray-300">
                  <div>2099 FX Sabourin, St Hubert</div>
                  <div className="text-sm text-gray-400">Flagship Store Location</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-left"
                  >
                    {t(`nav.${link.key}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Connect With Us
            </h4>
            
            {/* Business Hours */}
            <div className="mb-6">
              <h5 className="font-medium text-gray-200 mb-3">Business Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                <div>Saturday: 10:00 AM - 4:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="font-medium text-gray-200 mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Store Locations */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-6 text-white text-center">
            Our Locations
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="inline-flex items-center justify-center w-8 h-8 bg-green-500 rounded-full mb-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <h5 className="font-medium text-white mb-1">Open Now</h5>
              <p className="text-sm text-gray-300">2099 FX Sabourin, St Hubert</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full mb-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
              <h5 className="font-medium text-white mb-1">Coming Soon</h5>
              <p className="text-sm text-gray-300">3954 Autoroute 440, Laval</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full mb-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
              <h5 className="font-medium text-white mb-1">Coming Soon</h5>
              <p className="text-sm text-gray-300">835 Rue St Jacques, St-Jean-Sur-Richelieu</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Tennerama. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="text-sm text-gray-400">
              Built with ❤️ for franchise success
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

