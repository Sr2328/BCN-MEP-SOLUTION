import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BCN</span>
              </div>
              <span className="text-xl font-bold text-white">MEP</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Leading MEP contractor providing integrated MEPF solutions for industrial, commercial, and residential projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-500 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-500 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-500 transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-500 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-blue-500 transition-colors text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-500 transition-colors text-sm">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-500 transition-colors text-sm">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-500 transition-colors text-sm">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-500 transition-colors text-sm">
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  123 MEP Street, Tech Park, Mumbai, India 400001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-sm hover:text-blue-500 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="mailto:info@bcnmep.com" className="text-sm hover:text-blue-500 transition-colors">
                  info@bcnmep.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} MEP. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm hover:text-blue-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:text-blue-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
