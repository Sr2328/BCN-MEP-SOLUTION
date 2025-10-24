'use client';

import { useState, SetStateAction } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'SERVICES', href: '/services' },
  { name: 'PROJECTS', href: '/projects' },
  { name: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (href: SetStateAction<string>) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo Section */}
            <a 
              href="/" 
              className="flex items-center space-x-3 group"
              onClick={() => handleLinkClick('/')}
            >
              <div className="relative flex items-center">
                <img
                  src="https://i.postimg.cc/wxsJBKyx/Blue-Black-Simple-Modern-Construction-Company-Logo-1.png"
                  alt="Company Logo"
                  className="block h-12 w-25 object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 group ${
                    activeLink === link.href
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transform transition-all duration-300 ${
                      activeLink === link.href
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>
                </a>
              ))}
            </div>

            {/* Desktop CTA Section */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+919876543210"
                className="group flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-medium">+91 98765 43210</span>
              </a>
              
              <Button 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => handleLinkClick('/contact')}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-all duration-300 active:scale-95"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white border-t border-gray-200 shadow-md">
            <div className="px-4 py-6 space-y-1 max-w-7xl mx-auto">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`block py-3 px-4 text-base font-semibold rounded-lg transition-all duration-300 transform ${
                    activeLink === link.href
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:translate-x-2'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isOpen ? 'slideInRight 0.3s ease-out forwards' : 'none',
                  }}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-gray-200 space-y-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-3 py-3 px-4 text-gray-700 hover:bg-blue-50 rounded-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors">Call Us</p>
                    <p className="font-semibold">+91 89303 72989</p>
                  </div>
                </a>
                
                <a
                  href="mailto:info@business.com"
                  className="flex items-center space-x-3 py-3 px-4 text-gray-700 hover:bg-blue-50 rounded-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors">Email Us</p>
                    <p className="font-semibold">info@business.com</p>
                  </div>
                </a>
                
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleLinkClick('/contact')}
                >
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Fixed spacer for navbar height */}
  

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
