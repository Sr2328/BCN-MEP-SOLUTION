import Link from 'next/link'
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-gray-900/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg shadow-blue-800/30">
                <span className="text-white font-bold text-sm">BCN</span>
              </div>
              <span className="text-xl font-bold text-white">MEP Solutions</span>
            </div>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              BCN MEP Solutions Pvt. Ltd. specializes in Mechanical, Electrical, Plumbing, and Fire Fighting
              systems — delivering end-to-end MEPF services for industrial, commercial, and institutional projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 border-b border-blue-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((link, i) => (
                <li key={i}>
                  <Link
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-blue-500 transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 border-b border-blue-700 pb-2 inline-block">Our Expertise</h3>
            <ul className="space-y-2">
              {[
                'HVAC Systems',
                'Electrical Works',
                'Plumbing Solutions',
                'Fire Fighting Systems',
                'Building Management Systems',
              ].map((service, i) => (
                <li key={i}>
                  <Link
                    href="/services"
                    className="hover:text-blue-500 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 border-b border-blue-700 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  BCN MEP Solutions Pvt. Ltd. <br />
                  Plot No. 42, Sector 45, Gurugram, Delhi NCR, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="tel:+918930372989" className="text-sm hover:text-blue-500 transition-colors">
                  +91 89303 72989
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="mailto:info@bcnmep.com" className="text-sm hover:text-blue-500 transition-colors">
                  info@bcnmep.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm">Mon - Sat: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} BCN MEP Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-blue-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-500 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
