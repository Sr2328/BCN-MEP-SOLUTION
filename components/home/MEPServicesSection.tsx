'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, Droplet } from 'lucide-react';
import { supabase, type Service } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function MEPServicesSection() {
  const [electricalServices, setElectricalServices] = useState<Service[]>([]);
  const [plumbingServices, setPlumbingServices] = useState<Service[]>([]);

  useEffect(() => {
    async function fetchServices() {
      const { data } = await supabase
        .from('services')
        .select('*')
        .order('order_index');

      if (data) {
        setElectricalServices(data.filter((s) => s.service_category === 'Electrical'));
        setPlumbingServices(data.filter((s) => s.service_category === 'Plumbing'));
      }
    }
    fetchServices();
  }, []);

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our MEP Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Expert turnkey solutions for your Electrical, Mechanical & Plumbing systems
          </p>
        </motion.div>

        {/* Electrical */}
        <ServiceCategory
          icon={<Zap className="w-6 h-6 text-blue-600" />}
          title="Electrical Works"
          subtitle="Power, control & automation systems"
          color="blue"
          services={electricalServices}
        />

        {/* Plumbing */}
        <ServiceCategory
          icon={<Droplet className="w-6 h-6 text-cyan-600" />}
          title="Plumbing & Utilities"
          subtitle="Complete piping & water management solutions"
          color="cyan"
          services={plumbingServices}
        />
      </div>
    </section>
  );
}

function ServiceCategory({
  icon,
  title,
  subtitle,
  color,
  services,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  color: 'blue' | 'cyan';
  services: Service[];
}) {
  return (
    <div className="mb-14">
      {/* Category Title */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`w-10 h-10 bg-${color}-100 rounded-lg flex items-center justify-center`}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm">{subtitle}</p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Card className="group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white h-full flex flex-col">
              {/* Image */}
              {service.image_url ? (
                <div className="relative w-full h-40 sm:h-44 overflow-hidden">
                  <img
                    src={service.image_url}
                    alt={service.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent"></div>
                </div>
              ) : (
                <div className="w-full h-40 bg-gray-200" />
              )}

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 min-h-[3.5rem]">
                    {service.description}
                  </p>
                </div>

                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className={`mt-auto w-full text-${color}-600 border-${color}-300 hover:bg-${color}-50 transition`}
                >
                  <Link href={`/services/${service.id}`}>
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
