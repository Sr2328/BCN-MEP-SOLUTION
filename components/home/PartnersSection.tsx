'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase, type Partner } from '@/lib/supabase';

export function PartnersSection() {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    async function fetchPartners() {
      const { data } = await supabase
        .from('partners')
        .select('*')
        .order('order_index');

      if (data) {
        setPartners(data);
      }
    }

    fetchPartners();
  }, []);

  return (
    <section className="py-16 md:py-20 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-600">
            Proud partners with industry leaders
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-32 h-32 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
                <img
                  src={partner.logo_url}
                  alt={partner.name}
                  className="w-full h-full object-contain p-4 bg-white"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
