'use client';

import { useState, useEffect, SetStateAction } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: SetStateAction<string>) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xl py-2'
            : 'bg-white/90 backdrop-blur-sm shadow-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <a 
              href="/" 
              className="flex items-center space-x-3 group"
              onClick={() => handleLinkClick('/')}
            >
              {/* Logo Image Placeholder - Replace with your actual logo */}
              <div className="relative">
                <img 
                  src="https://via.placeholder.com/120x50/3B82F6/FFFFFF?text=Your+Logo" 
                  alt="Company Logo" 
                  className={`transition-all duration-300 ${
                    isScrolled ? 'h-10' : 'h-12'
                  } w-auto object-contain group-hover:scale-105`}
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
              <div className="relative w-6 h-6">
                <span
                  className={`absolute left-0 top-1 w-6 h-0.5 bg-gray-900 transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-3 w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-5 w-6 h-0.5 bg-gray-900 transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-xl">
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
                    animation: isOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
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
                    <p className="font-semibold">+91 98765 43210</p>
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

      {/* Spacer to prevent content from going under navbar */}
      <div className={`transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}></div>

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