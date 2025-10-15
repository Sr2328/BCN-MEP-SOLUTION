'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase, type Partner } from '@/lib/supabase';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-20 bg-white" id="partners">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
  Trusted by{' '}
  <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
    Top Companies
  </span>
</h2>
<p className="text-gray-600 max-w-md mb-8">
  From industry leaders like Yokohama and Bharti Airtel to innovators across sectors, we 
  empower companies with reliable MEP solutions and seamless project execution.
</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
          >
            More Customers
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.button>
        </motion.div>

        {/* Right grid of partner logos */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="w-24 h-16 flex items-center justify-center"
            >
              <img
                src={partner.logo_url}
                alt={partner.name}
                className="max-h-12 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
