'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-gray-950 text-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-950/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center">
        <div className="max-w-3xl text-left">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            BCN MEP Solutions —{' '}
            <span className="text-blue-400">Your Partner for Complete Industrial MEP</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            Turnkey MEP design, installation and commissioning — on time, on budget, world-class execution.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <Button asChild size="lg" className="text-base px-8">
              <Link href="/contact">
                Get a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base px-8 bg-white/10 hover:bg-white/20 text-white border-white/30"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 text-base"
          >
            <p>
              Call:{' '}
              <a
                href="tel:+918930372989"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                +91-8930372989
              </a>{' '}
              • Email:{' '}
              <a
                href="mailto:bcnmepsolutions@gmail.com"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                bcnmepsolutions@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
