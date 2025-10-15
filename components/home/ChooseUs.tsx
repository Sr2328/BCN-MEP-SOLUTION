'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Star, Clock, Users, ThumbsUp, Briefcase } from 'lucide-react';

const reasons = [
  {
    title: 'We Are Professional',
    icon: ShieldCheck,
    desc: 'Skilled experts committed to excellence in every project we undertake.',
  },
  {
    title: 'Quality Driven',
    icon: Star,
    desc: 'We focus on precision, performance, and premium outcomes every time.',
  },
  {
    title: 'Customer Satisfaction',
    icon: ThumbsUp,
    desc: 'Your happiness is our success — we build long-term trusted relations.',
  },
  {
    title: 'We Are Trusted',
    icon: CheckCircle2,
    desc: 'Clients rely on us for consistent, transparent, and ethical service.',
  },
  {
    title: 'Customer Focused',
    icon: Users,
    desc: 'We listen, adapt, and deliver tailored solutions for every client.',
  },
  {
    title: 'Manage Your Time',
    icon: Clock,
    desc: 'Efficient project planning ensures timely completion every time.',
  },
  {
    title: 'We Are Expert',
    icon: Briefcase,
    desc: 'Backed by years of industry experience and deep technical know-how.',
  },
  {
    title: 'Team Oriented & Cost-Effective',
    icon: Users,
    desc: 'Collaborative teamwork ensures efficient, budget-friendly delivery.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-b from-white via-[#f5f9ff] to-[#e9f2ff] overflow-hidden">
      {/* Decorative blurred glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-blue-300/20 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl bottom-0 right-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Why <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Choose Us</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Our commitment to quality, integrity, and innovation makes us the trusted choice for businesses and clients alike.
          </p>
        </motion.div>

        {/* Grid of Reason Cards */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group relative bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                {/* Soft blue glow hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-100 via-blue-50 to-transparent blur-xl"></div>

                <div className="relative z-10 p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-500 mb-3">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-snug max-w-[200px]">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
