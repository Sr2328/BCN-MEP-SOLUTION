'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function IntroductionSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About BCN MEP
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Established in 2020, BCN MEP has rapidly emerged as a leading provider of integrated
              Mechanical, Electrical, Plumbing & Fire-fighting (MEPF) solutions across India. We
              specialize in turnkey MEP design and execution for diverse sectors including industrial,
              commercial, residential, and infrastructure projects.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our team of experienced engineers and technicians brings technical excellence and
              innovative solutions to every project. We are committed to delivering quality work on
              time while maintaining the highest safety and compliance standards.
            </p>
            <div className="space-y-3">
              {[
                'ISO 9001:2015 Certified Company',
                'Licensed Electrical & Plumbing Contractors',
                '200+ Successfully Completed Projects',
                'Experienced Team of MEP Specialists',
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Electrical systems"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Plumbing systems"
                className="rounded-lg shadow-lg w-full h-48 object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/236093/pexels-photo-236093.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Industrial installation"
                className="rounded-lg shadow-lg w-full h-48 object-cover -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="HVAC systems"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
