'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2, Sparkles } from 'lucide-react';

const values = [
  'SUPERVISION',
  'ACCEPTABILITY',
  'NOVELTY',
  'KNOWLEDGE',
  'HONESTY',
  'LEADERSHIP',
  'AGILITY',
];

export function BCNValuesModernLight() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-white via-[#f5f9ff] to-[#ebf3ff] text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-blue-500 w-5 h-5" />
            <span className="text-sm uppercase tracking-wide text-blue-600 font-semibold">
              Our Core Values
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6 text-gray-900">
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              BCN MEP
            </span>{' '}
            reflects the values we hold
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {values.map((value, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center font-medium text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                {value}
              </motion.li>
            ))}
          </ul>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-700 text-sm sm:text-base leading-relaxed"
          >
            <strong className="text-blue-600">Knowledge</strong>,{' '}
            <strong className="text-blue-600">Leadership</strong>, and an aptitude for{' '}
            <strong className="text-blue-600">Novel Supervision</strong> and{' '}
            <strong className="text-blue-600">Acceptability</strong> — combined with{' '}
            <strong className="text-blue-600">Honesty</strong> and{' '}
            <strong className="text-blue-600">Agility</strong> — define our approach to
            excellence and business ethics.
          </motion.p>
        </motion.div>

        {/* Floating Transparent Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative flex justify-center md:justify-end"
        >
          <Image
            src="https://i.postimg.cc/V6W5bF4P/30cad08456e192a7b1aad563d7c66e68-1.png"
            alt="BCN MEP Values"
            width={480}
            height={480}
            priority
            className="object-contain pointer-events-none select-none drop-shadow-[0_0_35px_rgba(59,130,246,0.25)]"
          />

          {/* Soft blue glow */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.15, 0.3] }}
            transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
            className="absolute -z-10 blur-3xl bg-blue-400/20 w-72 h-72 rounded-full top-12 right-10"
          />
        </motion.div>
      </div>

      {/* Soft section glow bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-200/20 via-transparent to-transparent blur-2xl pointer-events-none"></div>
    </section>
  );
}
