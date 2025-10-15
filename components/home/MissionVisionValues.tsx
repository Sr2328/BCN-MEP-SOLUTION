'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const content = [
  {
    id: 1,
    title: 'Our Mission',
    text: 'To be preferred as an integrated MEPF solution provider with consistent quality, cost-effective solutions, and a strong commitment to fulfilling customer needs.',
    image: 'https://i.postimg.cc/bwMX6R7s/7ac3c4ea08e746b213a15cfca2c407b6.jpg',
    reverse: false,
  },
  {
    id: 2,
    title: 'Our Vision',
    text: 'To become a trusted “Partner in Progress” with our customers by delivering world-class solutions that empower them to focus on their core business goals.',
    image: 'https://i.postimg.cc/05JCm0nk/7f56b82d4a30dbbe671442218a2d6fce.jpg',
    reverse: true,
  },
  {
    id: 3,
    title: 'Our Values',
    text: 'Safety, Quality, Delivery, Cost, Reliability, Sustainability, and Consistency — these principles form the foundation of everything we do.',
    image: 'https://i.postimg.cc/XvmC7tT8/489777edb64174f9ee75020e2c73ac01.jpg',
    reverse: false,
  },
];

export function MissionVisionValues() {
  return (
    <section className="py-10 sm:py-14 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h3 className="text-sm sm:text-base tracking-wide text-blue-600 font-medium uppercase">
            Partner for All Your MEP Needs
          </h3>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            Mission • Vision • Values
          </h2>
          <div className="h-1 w-14 bg-blue-600 mx-auto rounded-full mt-3"></div>
        </motion.div>

        {/* Cards */}
        <div className="space-y-10 sm:space-y-12 md:space-y-16">
          {content.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col ${
                item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-4 sm:gap-8 md:gap-10`}
            >
              {/* Image */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-sm border border-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 30vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="max-w-sm text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
