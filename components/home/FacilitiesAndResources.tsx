'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const facilities = [
  {
    img: '/icons/workspace.png',
    title: 'Office & Storage Space',
    desc: '300 sq.ft of workspace and 2000 sq.ft of dedicated storage for efficient project operations.',
  },
  {
    img: '/icons/computer.png',
    title: 'Technology Infrastructure',
    desc: 'High-performance systems for accounting, planning, and long-term project execution.',
  },
  {
    img: '/icons/network.png',
    title: 'Communication Facilities',
    desc: 'Integrated email, mobile, and telecommunication systems ensuring seamless coordination.',
  },
  {
    img: '/icons/tools.png',
    title: 'Tools & Equipment',
    desc: 'Every technician and engineer is equipped with essential professional-grade tools.',
  },
];

export default function FacilitiesAndResources() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Facilities &{' '}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Resources
            </span>
          </motion.h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base">
            Designed to support precision, reliability, and productivity across all MEP operations.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {facilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 text-center border border-gray-100"
            >
              <div className="w-14 h-14 mx-auto mb-4 relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Human Resources Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Human <span className="text-blue-600">Resources</span>
            </h3>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Our dedicated team of managers, engineers, supervisors, and technicians
              form the backbone of our success — combining expertise, precision, and
              commitment to deliver outstanding results every time.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Managers & Engineers',
                'Supervisors & Technicians',
                'Training & Development',
                'Commitment to Quality',
              ].map((text, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <p className="text-gray-800 font-medium text-sm">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Floating Image (No BG, Animated) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center order-first md:order-last"
          >
            <Image
              src="https://i.postimg.cc/L63cM2Fq/1230e87db1700c97c683d5d7a39e4999.png" // Replace with transparent PNG of your team
              alt="Human Resources"
              width={400}
              height={400}
              className="object-contain drop-shadow-lg transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
