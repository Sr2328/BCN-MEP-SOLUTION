'use client';

import { motion } from 'framer-motion';
import { MessageSquare, FileText, PieChart, Target, Handshake, Lightbulb } from 'lucide-react';

const missionItems = [
  {
    id: 1,
    title: 'Our Vision',
    description:
      'To become a trusted "Partner in Progress" with our customers by delivering world-class solutions that empower them to focus on their core business goals.',
    icon: Lightbulb,
    bgColor: 'bg-white',
    textColor: 'text-gray-900',
  },
  {
    id: 2,
    title: 'Our Mission',
    description:
      'To be preferred as an integrated MEPF solution provider with consistent quality, cost-effective solutions, and a strong commitment to fulfilling customer needs.',
    icon: Target,
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
  },
  {
    id: 3,
    title: 'Our Values',
    description:
      'Safety, Quality, Delivery, Cost, Reliability, Sustainability, and Consistency — these principles form the foundation of everything we do.',
    icon: Handshake,
    bgColor: 'bg-white',
    textColor: 'text-gray-900',
  },
];

export function MissionVisionValues() {
  return (
    <section className="relative py-8 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          {/* Left Panel - Dark Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 rounded-3xl p-8 sm:p-10 md:p-12 text-white min-h-[520px] flex flex-col justify-center overflow-visible"
          >
            {/* Decorative blurs */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10 max-w-[90%] sm:max-w-[80%]">
              <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4 font-medium">
           BCN MEP SOLUTIONS PVT. LTD              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Our
                <br />
                <span className="text-blue-600">V</span>
                <span className="text-blue-600">M</span>
                <span className="text-blue-600">V</span>
              </h2>
              <div className="space-y-2 text-gray-300 text-sm leading-relaxed">
                <p>
                  We are driven by a vision to redefine excellence in integrated MEPF solutions through innovation, precision, and partnership. Our mission
                  is to consistently deliver projects that exemplify quality, reliability,
                  and efficiency — ensuring every client receives measurable value and
                  sustainable performance. 
                </p>
                <p>
                  As a multidisciplinary team of engineers and professionals, we align
                  our expertise with the unique goals of each client, enabling smarter,
                  safer, and more efficient environments. Through continuous improvement,
                  transparency, and technology-driven practices, we ensure long-term
                  collaboration and growth.
                </p>
                
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Mission Cards */}
          <div className="space-y-4 sm:space-y-5 order-2 lg:order-2">
            {missionItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`${item.bgColor} rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 ${
                        item.bgColor === 'bg-blue-600'
                          ? 'bg-white/20'
                          : 'bg-gray-100'
                      } rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon
                        className={`w-6 h-6 sm:w-7 sm:h-7 ${
                          item.textColor
                        }`}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-base sm:text-lg font-semibold ${item.textColor} mb-2 sm:mb-3`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base ${item.textColor} opacity-75 leading-relaxed`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Icons */}
        <div className="hidden lg:flex absolute bottom-6 right-6 xl:bottom-8 xl:right-8 gap-3 z-40">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-11 h-11 xl:w-12 xl:h-12 bg-white rounded-xl shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow"
          >
            <svg
              className="w-5 h-5 xl:w-6 xl:h-6 text-gray-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="w-11 h-11 xl:w-12 xl:h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 xl:w-6 xl:h-6 text-gray-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
