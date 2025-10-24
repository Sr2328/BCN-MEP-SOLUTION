'use client';

import { motion } from 'framer-motion';
import { Lock, Database, ShieldCheck, Link2, Globe2, Phone, Mail, MapPin } from 'lucide-react';

export default function PrivacyPage() {
  const privacySections = [
    {
      icon: <Lock className="w-6 h-6 text-blue-600" />,
      title: '1. Introduction',
      text: `At BCN MEP Solutions, we are deeply committed to protecting the privacy of our clients, employees, and partners. This policy outlines how we collect, use, and safeguard information across our digital platforms and project operations.`,
    },
    {
      icon: <Database className="w-6 h-6 text-blue-600" />,
      title: '2. Information We Collect',
      text: `We may collect personal and business information necessary for project coordination, design collaboration, and communication purposes — including name, contact details, company data, and relevant technical information.`,
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: '3. How We Use Data',
      text: `Collected data helps us execute MEP projects efficiently, maintain communication, improve our services, and ensure compliance with contractual and regulatory obligations. We never sell or share personal data with third parties for marketing purposes.`,
    },
    {
      icon: <Globe2 className="w-6 h-6 text-blue-600" />,
      title: '4. Data Security & Confidentiality',
      text: `All project-related and client data is securely stored and protected by modern encryption and controlled access systems. Only authorized BCN MEP personnel have access to sensitive data, following NDAs and internal compliance guidelines.`,
    },
    {
      icon: <Link2 className="w-6 h-6 text-blue-600" />,
      title: '5. Third-Party Tools & Integrations',
      text: `We may use trusted third-party tools for communication, analytics, or project tracking (e.g., Google Workspace, project dashboards). These platforms comply with global data security standards and are used strictly for professional collaboration.`,
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: '6. Cookies & Analytics',
      text: `Our website uses cookies to improve user experience, analyze performance, and secure sessions. You can manage or disable cookies via your browser settings at any time.`,
    },
    {
      icon: <Database className="w-6 h-6 text-blue-600" />,
      title: '7. Data Retention',
      text: `We retain project, client, and communication data only as long as required to fulfill the contractual and legal obligations, after which it is securely deleted from our systems.`,
    },
    {
      icon: <Lock className="w-6 h-6 text-blue-600" />,
      title: '8. Your Rights',
      text: `You can request to view, correct, or delete your personal data held by BCN MEP Solutions. Please contact our legal department for any data-related requests.`,
    },
    {
      icon: <Globe2 className="w-6 h-6 text-blue-600" />,
      title: '9. Policy Updates',
      text: `This Privacy Policy may be revised periodically to align with evolving laws and practices. The latest version will always be available on our website.`,
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
            BCN MEP Solutions – Privacy Policy
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

      {/* ===== MAIN PRIVACY CONTENT ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {privacySections.map((section, index) => (
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
            Have Concerns About Your Data Privacy?
          </motion.h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
            BCN MEP Solutions maintains strict confidentiality of all project and client data.  
            Reach out to our data protection team for any clarifications, requests, or complaints.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-blue-50">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-300" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-300" />
              <span>privacy@bcnmep.com</span>
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
