'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, TrendingUp, CheckCircle2, Zap, Award, Shield, Clock, HeartHandshake, Wrench } from 'lucide-react';
import { Card } from '@/components/ui/card';

const processSteps = [
  {
    number: '01',
    title: 'Consultation & Planning',
    description: 'We analyze your industrial requirements and design comprehensive MEP solutions tailored to your needs.',
  },
  {
    number: '02',
    title: 'Design & Engineering',
    description: 'Our expert team creates detailed drawings and technical specifications for seamless execution.',
  },
  {
    number: '03',
    title: 'Installation',
    description: 'Professional installation of electrical, mechanical, and fire fighting systems with precision.',
  },
  {
    number: '04',
    title: 'Commissioning',
    description: 'Thorough testing and commissioning to ensure all systems operate at peak performance.',
  },
  {
    number: '05',
    title: 'Support & Maintenance',
    description: 'Ongoing support to keep your MEP systems running efficiently and reliably.',
  },
];

export default function AboutPage() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [count, setCount] = useState({ projects: 0, clients: 0, years: 0 });

  useEffect(() => {
    // Animated counter
    const duration = 2000;
    const steps = 50;
    const projectTarget = 20;
    const clientTarget = 50;
    const yearsTarget = 5;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCount({
        projects: Math.floor(progress * projectTarget),
        clients: Math.floor(progress * clientTarget),
        years: Math.floor(progress * yearsTarget)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCount({ projects: projectTarget, clients: clientTarget, years: yearsTarget });
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1400ms' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold backdrop-blur-sm">
                Your Partner in Complete Industrial Solutions
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              BCN MEP Solutions
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mt-4 mx-auto max-w-md rounded-full"
              ></motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8"
            >
              Leading the industry in Design, Installation & Commissioning of Turnkey MEP Solutions since 2020
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-6 text-white"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>5+ Years Excellence</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>20+ Major Projects</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Gurgaon Based</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-2">
                {count.projects}+
              </div>
              <div className="text-gray-600 text-lg">Completed Projects</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-cyan-600 mb-2">
                {count.clients}+
              </div>
              <div className="text-gray-600 text-lg">Satisfied Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-purple-600 mb-2">
                {count.years}+
              </div>
              <div className="text-gray-600 text-lg">Years of Excellence</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                About BCN MEP Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pioneering Industrial MEP Excellence Since 2020
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                BCN MEP Solutions Pvt. Ltd. was established in 2020 with a pioneering vision to revolutionize industrial MEP solutions. In just five years, we have grown into a respected name, achieving considerable milestones while setting ambitious targets for the future.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Based in Gurgaon, we specialize in the complete design, drawing, installation, and commissioning of turnkey MEP/Electrical Contracting and Utility Projects. Our comprehensive services include Electrical/Mechanical infrastructure, industrial pipelines, all LV systems (Data/Server/Telephone/PA/FA), and complete fire fighting installations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We have a significant presence in MEPF - Mechanical, Piping, Fire Hydrant and Sprinkler Systems, HT, MV, LT, LV, Electrical Turn-key Projects, and Substation work. Our team of well-trained, experienced professionals ensures every project meets client expectations within budget and timeline.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Certified</h4>
                    <p className="text-sm text-gray-600">Quality Standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Safety First</h4>
                    <p className="text-sm text-gray-600">Priority Always</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="BCN MEP Construction Site"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-cyan-500 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Driving excellence through clear purpose and ambitious goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <Card className="p-8 h-full border-2 hover:border-blue-300 transition-colors duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the preferred integrated MEPF solution provider, delivering consistent quality, cost-effective solutions, and committed to achieving customer needs. We become 'Partners in Progress' with our customers by investing in world-class solutions that enable them to focus on their core business.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <Card className="p-8 h-full border-2 hover:border-cyan-300 transition-colors duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To establish ourselves as the leading partner for all MEP solution needs, recognized for our unwavering commitment to safety, quality, timely delivery, cost-effectiveness, reliability, sustainability, and consistency in every project we undertake.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that drive our success and client satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Safety', icon: Shield, color: 'from-red-500 to-orange-500' },
              { name: 'Quality', icon: Award, color: 'from-blue-500 to-cyan-500' },
              { name: 'Delivery', icon: Clock, color: 'from-green-500 to-emerald-500' },
              { name: 'Cost', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
              { name: 'Reliability', icon: Wrench, color: 'from-yellow-500 to-orange-500' },
              { name: 'Sustainability', icon: HeartHandshake, color: 'from-teal-500 to-green-500' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">{value.name}</h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Expertise */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services Expertise
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Comprehensive MEP solutions for industrial and commercial projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-8 bg-slate-800 border-slate-700 h-full hover:bg-slate-750 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Electrical Systems
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span>Power Distribution Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span>LT/HT Systems & Substations (33KV/11KV)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span>Cable Laying & Tray Infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span>Building Lighting & Control Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span>CCTV & Access Control Systems</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-8 bg-slate-800 border-slate-700 h-full hover:bg-slate-750 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Mechanical Systems
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                    <span>Hot & Cold Water Pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                    <span>Steam/Fluid/Air-line Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                    <span>Water Treatment Plants (WTP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                    <span>STP & ETP Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                    <span>Industrial Process Services</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-8 bg-slate-800 border-slate-700 h-full hover:bg-slate-750 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Fire Fighting Systems
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                    <span>Fire Hydrant Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                    <span>Sprinkler System Installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                    <span>Fire Detection & Alarm Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                    <span>Pump Room Setup & Commissioning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                    <span>Fire Suppression Systems</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology for delivering exceptional MEP solutions
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 -translate-y-1/2 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative"
                >
                  <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300 bg-white relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Key Strengths
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What sets us apart in the MEP solutions industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'On-Time, On-Budget Delivery',
                description: 'Ensuring timely and budget-friendly project completion is a cornerstone of our commitment to delivering quality service.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: HeartHandshake,
                title: 'Strong Partnerships',
                description: 'Our collaborative process combines effective communication and cooperation, ensuring no detail is missed from start to finish.',
                color: 'from-cyan-500 to-cyan-600'
              },
              {
                icon: Award,
                title: 'Exceptional Customer Service',
                description: 'We eagerly attend to inquiries with utmost efficiency and care, delivering outstanding results consistently.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Target,
                title: 'Local Expertise',
                description: 'Based in Gurgaon with deep knowledge of regional requirements and a comprehensive approach to each project.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: TrendingUp,
                title: 'Proven Track Record',
                description: 'Successfully completed 20+ major industrial projects for leading companies like Tata Steel, Uno Minda, and JBM.',
                color: 'from-orange-500 to-orange-600'
              },
              {
                icon: Wrench,
                title: 'Comprehensive Solutions',
                description: 'Complete MEP services from concept to commissioning, covering electrical, mechanical, and fire fighting systems.',
                color: 'from-red-500 to-red-600'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Esteemed Clients */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Esteemed Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by leading industrial and manufacturing companies across India
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'Tata Steel', location: 'Ludhiana' },
              { name: 'Uno Minda (TG Minda)', location: 'Neemrana' },
              { name: 'JBM Associates', location: 'Gujarat' },
              { name: 'Yokohama India', location: 'Pan India' },
              { name: 'Rosenberger', location: 'Manesar' },
              { name: 'Avitech Nutrition', location: 'Jhajjar' },
              { name: 'Anand Mando Mobility', location: 'Bhiwadi' },
              { name: 'Sona Comstar', location: 'Gurgaon' },
              { name: 'Webtech Corporation', location: 'Rohtak' },
              { name: 'Bhagirath Heavy Transmission', location: 'Jhajjar' },
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center border-2 hover:border-blue-300 bg-gradient-to-br from-white to-gray-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{client.name}</p>
                  <p className="text-xs text-gray-500">{client.location}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 italic">And many more leading companies...</p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BCN MEP Solutions?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We reflect the values we hold - Knowledge, Leadership, Aptitude, and Honesty
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Professional', icon: Award, description: 'Certified experts with industry experience' },
              { title: 'Trusted', icon: Shield, description: 'Proven reliability across 20+ projects' },
              { title: 'Expert', icon: Target, description: 'Specialized in complete MEP solutions' },
              { title: 'Quality Driven', icon: CheckCircle2, description: 'Uncompromising standards in every project' },
              { title: 'Customer Focused', icon: Users, description: 'Your satisfaction is our priority' },
              { title: 'Team Oriented', icon: HeartHandshake, description: 'Collaborative approach to success' },
              { title: 'Time Management', icon: Clock, description: 'Efficient delivery within deadlines' },
              { title: 'Cost-Effective', icon: TrendingUp, description: 'Best value without compromising quality' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Resources */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Facilities & Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Equipped with modern infrastructure to deliver excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full border-2 hover:border-blue-300 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  Infrastructure
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>300+ sq.ft. modern office space with full facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>2000 sq.ft. dedicated material storage facility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Advanced computers with specialized design software</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Computerized accounting & material planning systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Complete communication infrastructure</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full border-2 hover:border-cyan-300 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  Human Resources
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Competent team of managers and engineers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Skilled supervisors and technicians</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Well-trained electricians and helpers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Professional tools and equipment for every team member</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Committed to delivering high-quality service</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
              Let us be your partner in delivering world-class MEP solutions. Contact us today for a consultation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
              >
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-bold mb-2">Location</h3>
                <p className="text-sm text-blue-100">
                  42.7 KM Delhi-Jaipur Highway<br />
                  Near Namaskara Hotel<br />
                  Sector 81, Gurgaon
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
              >
                <div className="text-3xl mb-3">📧</div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-sm text-blue-100">
                  bcnmepsolutions@gmail.com<br />
                  bcnservices6@gmail.com
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
              >
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-sm text-blue-100">
                  +91-8930372989<br />
                  +91-7988466243
                </p>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}