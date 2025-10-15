'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const activities = [
  {
    title: 'Mechanical & Fire Fighting Systems',
    desc: 'Comprehensive MEP services including mechanical installations, fire fighting systems, and utility piping for industrial and institutional projects.',
    details: `BCN MEP specializes in complete MEP works — from design to execution — for large industrial buildings, institutions, hotels, hospitals, and high-value infrastructure installations.`,
    image: 'https://i.postimg.cc/3JGcK7Mx/e8b9e2b879bc4b44878beb83752eb529.jpg',
  },
  {
    title: 'Electrical Installations (LT/HT/LV)',
    desc: 'Complete electrical systems — from concept to commissioning — ensuring reliability and safety across industrial and commercial sites.',
    details: `We handle the full electrical scope including planning, design, installation, commissioning, and coordination for LT, HT, and LV systems.`,
    image: 'https://i.postimg.cc/YCcTg0Nm/e5d3b477f4c7e108c63e321257b8f69b.jpg',
  },
  {
    title: 'Power Sanction & Approvals',
    desc: 'Expert handling of power sanctioning and servicing power approvals from local electrical authorities.',
    details: `BCN MEP ensures smooth liaisoning and documentation to obtain power sanctions and connections from relevant authorities after proper compliance.`,
    image: 'https://i.postimg.cc/GmqNfKwF/d725455fb78532399254acbc18dd6b36.jpg',
  },
  {
    title: 'Building Management Systems',
    desc: 'Integrated systems for access control, climate control, fire alarms, and security automation.',
    details: `We design and install Building Management Systems (BMS) including HVAC automation, fire safety, access control, and centralized monitoring.`,
    image: 'https://i.postimg.cc/sxzCz2nn/Using-a-BMS-in-Healthcare-Guide-to-Cybersecurity-Solutions.png',
  },
  {
    title: 'Fabrication & Structural Work',
    desc: 'High-quality fabrication including steel structures, DG exhausts, diesel tanks, and pipelines.',
    details: `Our fabrication division handles precision work for steel structures, DG exhausts, diesel tanks, firefighting assemblies, and industrial pipelines.`,
    image: '/images/fabrication.jpg',
  },
  {
    title: 'Utility & Piping Services',
    desc: 'End-to-end solutions for utility piping and industrial distribution systems.',
    details: `BCN MEP executes reliable piping and utility service networks for industrial and commercial facilities with long-term durability and compliance.`,
    image: '/images/piping.jpg',
  },
];

export default function AreaOfActivity() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50" id="activities">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Our{' '}
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            Areas of Activity
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          BCN MEP delivers integrated MEP, Electrical, and Fabrication solutions for complex infrastructure across multiple sectors.
        </p>

        {/* Grid of Activities */}
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((act, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              onClick={() => setActive(index)}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg cursor-pointer overflow-hidden transition"
            >
              {/* Image */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Title + Description */}
              <div className="p-5 text-left">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{act.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{act.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-3xl w-full relative shadow-2xl overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              {/* Blurred Gray Close Button */}
              <button
                onClick={() => setActive(null)}
                className="absolute top-5 right-5 bg-gray-200/60 backdrop-blur-md hover:bg-gray-300/80 text-gray-700 rounded-full p-2 shadow-md transition"
              >
                <X size={20} />
              </button>

              {/* Image */}
              <img
                src={activities[active].image}
                alt={activities[active].title}
                className="w-full h-80 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {activities[active].title}
                </h3>
                <p className="text-gray-700 text-base mb-2">
                  {activities[active].desc}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {activities[active].details}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
