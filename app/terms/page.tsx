'use client';

import { motion } from 'framer-motion';
import { Shield, FileCheck, Gavel, Building2, Phone, Mail, MapPin } from 'lucide-react';

export default function TermsPage() {
  const termsSections = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: '1. Acceptance of Terms',
      text: `By using BCN MEP Solutions’ website and services, you agree to comply with and be bound by these Terms. If you disagree with any part of these terms, you must refrain from accessing or using our platform or services.`,
    },
    {
      icon: <FileCheck className="w-6 h-6 text-blue-600" />,
      title: '2. Scope of Services',
      text: `Our offerings include Mechanical, Electrical, and Plumbing (MEP) system design, execution, maintenance, and consulting for industrial, commercial, and institutional projects. BCN MEP reserves the right to modify, suspend, or discontinue any part of its services at any time.`,
    },
    {
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      title: '3. Project & Service Agreements',
      text: `All projects undertaken by BCN MEP Solutions are governed by mutually signed contracts or work orders. These agreements outline project scope, timelines, deliverables, warranties, and payment schedules.`,
    },
    {
      icon: <Gavel className="w-6 h-6 text-blue-600" />,
      title: '4. Intellectual Property & Documentation',
      text: `All drawings, design documents, 3D models, and related intellectual property created during any engagement remain the property of BCN MEP Solutions unless otherwise stated in writing.`,
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: '5. Safety, Compliance & Liability',
      text: `BCN MEP adheres to the highest safety and compliance standards under Indian and international codes. However, liability is limited to the extent outlined in the respective client contract. We are not liable for delays caused by unforeseen site conditions or third-party dependencies.`,
    },
    {
      icon: <FileCheck className="w-6 h-6 text-blue-600" />,
      title: '6. Payment & Commercial Terms',
      text: `All financial transactions are governed by mutually agreed milestones and schedules. Payments must be made in Indian Rupees (₹) via accepted digital or banking channels. Late payments may incur penalties or project suspension.`,
    },
    {
      icon: <Gavel className="w-6 h-6 text-blue-600" />,
      title: '7. Revisions & Policy Updates',
      text: `BCN MEP Solutions may update or amend these Terms from time to time. Changes will be reflected on this page, and significant updates will be communicated to clients via official channels.`,
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            BCN MEP Solutions – Terms & Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Last updated: {new Date().toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
          </motion.p>
        </div>
      </section>

      {/* ===== MAIN TERMS SECTION ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {termsSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 rounded-lg">{section.icon}</div>
                <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{section.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Have Questions About Our Terms?
          </motion.h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
            We believe in transparency and clear communication. If you have any questions about our service policies, agreements, or legal terms — we’re here to help.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-blue-50">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-300" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-300" />
              <span>legal@bcnmep.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-300" />
              <span>BCN MEP HQ, Gurgaon, Haryana, India</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
