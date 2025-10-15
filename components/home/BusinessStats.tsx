'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { supabase, type BusinessStat } from '@/lib/supabase';

export function BusinessStats() {
  const [stats, setStats] = useState<BusinessStat[]>([]);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    async function fetchStats() {
      const { data } = await supabase
        .from('business_stats')
        .select('*')
        .order('order_index');

      if (data) setStats(data);
    }
    fetchStats();
  }, []);

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              label={stat.stat_label}
              value={stat.stat_value}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({
  label,
  value,
  delay,
}: {
  label: string;
  value: string;
  delay: number;
}) {
  const [count, setCount] = useState(0);

  // Extract numeric and text parts
  const numericPart = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffixPart = value.replace(/[0-9.\s]/g, '').trim();

  const hasNumber = !isNaN(numericPart);

  useEffect(() => {
    if (!hasNumber) return; // Skip if not numeric

    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = numericPart / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericPart) {
        start = numericPart;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [numericPart, hasNumber]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="text-center flex flex-col items-center justify-center"
    >
      <div className="text-4xl md:text-5xl font-extrabold mb-2">
        {hasNumber
          ? `${Math.floor(count).toLocaleString()}${suffixPart ? ' ' + suffixPart : '+'}`
          : value}
      </div>
      <div className="text-sm md:text-base text-blue-100 font-medium">
        {label}
      </div>
    </motion.div>
  );
}
