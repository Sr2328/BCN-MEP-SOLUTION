// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Target, Eye, Users, TrendingUp, CheckCircle2, Zap, Award, Shield, Clock, HeartHandshake, Wrench } from 'lucide-react';
// import { Card } from '@/components/ui/card';

// const processSteps = [
//   {
//     number: '01',
//     title: 'Consultation & Planning',
//     description: 'We analyze your industrial requirements and design comprehensive MEP solutions tailored to your needs.',
//   },
//   {
//     number: '02',
//     title: 'Design & Engineering',
//     description: 'Our expert team creates detailed drawings and technical specifications for seamless execution.',
//   },
//   {
//     number: '03',
//     title: 'Installation',
//     description: 'Professional installation of electrical, mechanical, and fire fighting systems with precision.',
//   },
//   {
//     number: '04',
//     title: 'Commissioning',
//     description: 'Thorough testing and commissioning to ensure all systems operate at peak performance.',
//   },
//   {
//     number: '05',
//     title: 'Support & Maintenance',
//     description: 'Ongoing support to keep your MEP systems running efficiently and reliably.',
//   },
// ];

// export default function AboutPage() {
//   const [teamMembers, setTeamMembers] = useState([]);
//   const [count, setCount] = useState({ projects: 0, clients: 0, years: 0 });

//   useEffect(() => {
//     // Animated counter
//     const duration = 2000;
//     const steps = 50;
//     const projectTarget = 20;
//     const clientTarget = 50;
//     const yearsTarget = 5;

//     let currentStep = 0;
//     const interval = setInterval(() => {
//       currentStep++;
//       const progress = currentStep / steps;
      
//       setCount({
//         projects: Math.floor(progress * projectTarget),
//         clients: Math.floor(progress * clientTarget),
//         years: Math.floor(progress * yearsTarget)
//       });

//       if (currentStep >= steps) {
//         clearInterval(interval);
//         setCount({ projects: projectTarget, clients: clientTarget, years: yearsTarget });
//       }
//     }, duration / steps);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
//           <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1400ms' }}></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="inline-block mb-6"
//             >
//               <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold backdrop-blur-sm">
//                 Your Partner in Complete Industrial Solutions
//               </span>
//             </motion.div>
            
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
//               BCN MEP Solutions
//               <motion.span
//                 initial={{ width: 0 }}
//                 animate={{ width: "100%" }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//                 className="block h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mt-4 mx-auto max-w-md rounded-full"
//               ></motion.span>
//             </h1>
            
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//               className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8"
//             >
//               Leading the industry in Design, Installation & Commissioning of Turnkey MEP Solutions since 2020
//             </motion.p>
            
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               className="flex flex-wrap justify-center gap-6 text-white"
//             >
//               <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
//                 <CheckCircle2 className="w-5 h-5 text-green-400" />
//                 <span>5+ Years Excellence</span>
//               </div>
//               <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
//                 <CheckCircle2 className="w-5 h-5 text-green-400" />
//                 <span>20+ Major Projects</span>
//               </div>
//               <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
//                 <CheckCircle2 className="w-5 h-5 text-green-400" />
//                 <span>Gurgaon Based</span>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//             <motion.div
//               animate={{ y: [0, 12, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="w-1.5 h-1.5 bg-white rounded-full mt-2"
//             />
//           </div>
//         </motion.div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-white relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="text-center"
//             >
//               <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-2">
//                 {count.projects}+
//               </div>
//               <div className="text-gray-600 text-lg">Completed Projects</div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="text-center"
//             >
//               <div className="text-5xl md:text-6xl font-bold text-cyan-600 mb-2">
//                 {count.clients}+
//               </div>
//               <div className="text-gray-600 text-lg">Satisfied Clients</div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-center"
//             >
//               <div className="text-5xl md:text-6xl font-bold text-purple-600 mb-2">
//                 {count.years}+
//               </div>
//               <div className="text-gray-600 text-lg">Years of Excellence</div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-16 md:py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
//                 About BCN MEP Solutions
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                 Pioneering Industrial MEP Excellence Since 2020
//               </h2>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 BCN MEP Solutions Pvt. Ltd. was established in 2020 with a pioneering vision to revolutionize industrial MEP solutions. In just five years, we have grown into a respected name, achieving considerable milestones while setting ambitious targets for the future.
//               </p>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 Based in Gurgaon, we specialize in the complete design, drawing, installation, and commissioning of turnkey MEP/Electrical Contracting and Utility Projects. Our comprehensive services include Electrical/Mechanical infrastructure, industrial pipelines, all LV systems (Data/Server/Telephone/PA/FA), and complete fire fighting installations.
//               </p>
//               <p className="text-gray-700 leading-relaxed mb-6">
//                 We have a significant presence in MEPF - Mechanical, Piping, Fire Hydrant and Sprinkler Systems, HT, MV, LT, LV, Electrical Turn-key Projects, and Substation work. Our team of well-trained, experienced professionals ensures every project meets client expectations within budget and timeline.
//               </p>

//               <div className="grid grid-cols-2 gap-4">
//                 <div className="flex items-start gap-3">
//                   <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Award className="w-5 h-5 text-blue-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900">Certified</h4>
//                     <p className="text-sm text-gray-600">Quality Standards</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Shield className="w-5 h-5 text-cyan-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900">Safety First</h4>
//                     <p className="text-sm text-gray-600">Priority Always</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="relative"
//             >
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//                 <img
//                   src="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800"
//                   alt="BCN MEP Construction Site"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//               </div>
//               <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-2xl -z-10"></div>
//               <div className="absolute -top-6 -left-6 w-48 h-48 bg-cyan-500 rounded-2xl -z-10"></div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-16 md:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our Mission & Vision
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Driving excellence through clear purpose and ambitious goals
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="relative group"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//               <Card className="p-8 h-full border-2 hover:border-blue-300 transition-colors duration-300">
//                 <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
//                   <Target className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   Our Mission
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   To be the preferred integrated MEPF solution provider, delivering consistent quality, cost-effective solutions, and committed to achieving customer needs. We become 'Partners in Progress' with our customers by investing in world-class solutions that enable them to focus on their core business.
//                 </p>
//               </Card>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="relative group"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//               <Card className="p-8 h-full border-2 hover:border-cyan-300 transition-colors duration-300">
//                 <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
//                   <Eye className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   Our Vision
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   To establish ourselves as the leading partner for all MEP solution needs, recognized for our unwavering commitment to safety, quality, timely delivery, cost-effectiveness, reliability, sustainability, and consistency in every project we undertake.
//                 </p>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our Core Values
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               The principles that drive our success and client satisfaction
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//             {[
//               { name: 'Safety', icon: Shield, color: 'from-red-500 to-orange-500' },
//               { name: 'Quality', icon: Award, color: 'from-blue-500 to-cyan-500' },
//               { name: 'Delivery', icon: Clock, color: 'from-green-500 to-emerald-500' },
//               { name: 'Cost', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
//               { name: 'Reliability', icon: Wrench, color: 'from-yellow-500 to-orange-500' },
//               { name: 'Sustainability', icon: HeartHandshake, color: 'from-teal-500 to-green-500' },
//             ].map((value, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05, y: -5 }}
//               >
//                 <Card className="p-6 text-center h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300">
//                   <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
//                     <value.icon className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="font-bold text-gray-900">{value.name}</h3>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Expertise */}
//       <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-0 left-0 w-full h-full" style={{
//             backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
//             backgroundSize: '40px 40px'
//           }}></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Our Services Expertise
//             </h2>
//             <p className="text-lg text-slate-300 max-w-2xl mx-auto">
//               Comprehensive MEP solutions for industrial and commercial projects
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               whileHover={{ y: -10 }}
//             >
//               <Card className="p-8 bg-slate-800 border-slate-700 h-full hover:bg-slate-750 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
//                 <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
//                   <Zap className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-4">
//                   Electrical Systems
//                 </h3>
//                 <ul className="space-y-2 text-slate-300">
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
//                     <span>Power Distribution Systems</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
//                     <span>LT/HT Systems & Substations (33KV/11KV)</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
//                     <span>Cable Laying & Tray Infrastructure</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
//                     <span>Building Lighting & Control Systems</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
//                     <span>CCTV & Access Control Systems</span>
//                   </li>
//                 </ul>
//               </Card>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               whileHover={{ y: -10 }}
//             >
//               <Card className="p-8 bg-slate-800 border-slate-700 h-full hover:bg-slate-750 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
//                 <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
//                   <Wrench className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-4">
//                   Mechanical Systems
//                 </h3>
//                 <ul className="space-y-2 text-slate-300">
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
//                     <span>Hot & Cold Water Pipelines</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
//                     <span>Steam/Fluid/Air-line Systems</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
//                     <span>Water Treatment Plants (WTP)</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
//                     <span>STP & ETP Systems</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
//                     <span>Industrial Process Services</span>
//                   </li>
//                 </ul>
//               </Card>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               whileHover={{ y: -10 }}
//             >
//               <Card className="p-8 bg-slate-800 border-slate-700 h-full hover:bg-slate-750 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
//                 <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
//                   <Shield className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-4">
//                   Fire Fighting Systems
//                 </h3>
//                 <ul className="space-y-2 text-slate-300">
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
//                     <span>Fire Hydrant Systems</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
//                     <span>Sprinkler System Installation</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
//                     <span>Fire Detection & Alarm Systems</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
//                     <span>Pump Room Setup & Commissioning</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
//                     <span>Fire Suppression Systems</span>
//                   </li>
//                 </ul>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Our Process */}
//       <section className="py-16 md:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our Process
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               A proven methodology for delivering exceptional MEP solutions
//             </p>
//           </motion.div>

//           <div className="relative">
//             <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 -translate-y-1/2 rounded-full"></div>

//             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
//               {processSteps.map((step, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   whileHover={{ y: -5 }}
//                   className="relative"
//                 >
//                   <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300 bg-white relative z-10">
//                     <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
//                       {step.number}
//                     </div>
//                     <h3 className="text-lg font-bold text-gray-900 mb-2">
//                       {step.title}
//                     </h3>
//                     <p className="text-sm text-gray-600">{step.description}</p>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Strengths */}
//       <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our Key Strengths
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               What sets us apart in the MEP solutions industry
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Clock,
//                 title: 'On-Time, On-Budget Delivery',
//                 description: 'Ensuring timely and budget-friendly project completion is a cornerstone of our commitment to delivering quality service.',
//                 color: 'from-blue-500 to-blue-600'
//               },
//               {
//                 icon: HeartHandshake,
//                 title: 'Strong Partnerships',
//                 description: 'Our collaborative process combines effective communication and cooperation, ensuring no detail is missed from start to finish.',
//                 color: 'from-cyan-500 to-cyan-600'
//               },
//               {
//                 icon: Award,
//                 title: 'Exceptional Customer Service',
//                 description: 'We eagerly attend to inquiries with utmost efficiency and care, delivering outstanding results consistently.',
//                 color: 'from-purple-500 to-purple-600'
//               },
//               {
//                 icon: Target,
//                 title: 'Local Expertise',
//                 description: 'Based in Gurgaon with deep knowledge of regional requirements and a comprehensive approach to each project.',
//                 color: 'from-green-500 to-green-600'
//               },
//               {
//                 icon: TrendingUp,
//                 title: 'Proven Track Record',
//                 description: 'Successfully completed 20+ major industrial projects for leading companies like Tata Steel, Uno Minda, and JBM.',
//                 color: 'from-orange-500 to-orange-600'
//               },
//               {
//                 icon: Wrench,
//                 title: 'Comprehensive Solutions',
//                 description: 'Complete MEP services from concept to commissioning, covering electrical, mechanical, and fire fighting systems.',
//                 color: 'from-red-500 to-red-600'
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300">
//                   <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
//                     <item.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-600">{item.description}</p>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Esteemed Clients */}
//       <section className="py-16 md:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our Esteemed Clients
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Trusted by leading industrial and manufacturing companies across India
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//             {[
//               { name: 'Tata Steel', location: 'Ludhiana' },
//               { name: 'Uno Minda (TG Minda)', location: 'Neemrana' },
//               { name: 'JBM Associates', location: 'Gujarat' },
//               { name: 'Yokohama India', location: 'Pan India' },
//               { name: 'Rosenberger', location: 'Manesar' },
//               { name: 'Avitech Nutrition', location: 'Jhajjar' },
//               { name: 'Anand Mando Mobility', location: 'Bhiwadi' },
//               { name: 'Sona Comstar', location: 'Gurgaon' },
//               { name: 'Webtech Corporation', location: 'Rohtak' },
//               { name: 'Bhagirath Heavy Transmission', location: 'Jhajjar' },
//             ].map((client, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center border-2 hover:border-blue-300 bg-gradient-to-br from-white to-gray-50">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-3 shadow-lg">
//                     <Users className="w-6 h-6 text-white" />
//                   </div>
//                   <p className="font-bold text-gray-900 text-sm mb-1">{client.name}</p>
//                   <p className="text-xs text-gray-500">{client.location}</p>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             className="text-center mt-12"
//           >
//             <p className="text-gray-600 italic">And many more leading companies...</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 md:py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Why Choose BCN MEP Solutions?
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               We reflect the values we hold - Knowledge, Leadership, Aptitude, and Honesty
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { title: 'Professional', icon: Award, description: 'Certified experts with industry experience' },
//               { title: 'Trusted', icon: Shield, description: 'Proven reliability across 20+ projects' },
//               { title: 'Expert', icon: Target, description: 'Specialized in complete MEP solutions' },
//               { title: 'Quality Driven', icon: CheckCircle2, description: 'Uncompromising standards in every project' },
//               { title: 'Customer Focused', icon: Users, description: 'Your satisfaction is our priority' },
//               { title: 'Team Oriented', icon: HeartHandshake, description: 'Collaborative approach to success' },
//               { title: 'Time Management', icon: Clock, description: 'Efficient delivery within deadlines' },
//               { title: 'Cost-Effective', icon: TrendingUp, description: 'Best value without compromising quality' },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//                 whileHover={{ scale: 1.03 }}
//               >
//                 <Card className="p-6 text-center h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-300">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md">
//                     <item.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900 mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-600">{item.description}</p>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Facilities & Resources */}
//       <section className="py-16 md:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our Facilities & Resources
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Equipped with modern infrastructure to deliver excellence
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <Card className="p-8 h-full border-2 hover:border-blue-300 transition-colors duration-300">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
//                   <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
//                     <Target className="w-5 h-5 text-white" />
//                   </div>
//                   Infrastructure
//                 </h3>
//                 <ul className="space-y-3 text-gray-700">
//                   <li className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                     <span>300+ sq.ft. modern office space with full facilities</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                     <span>2000 sq.ft. dedicated material storage facility</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                     <span>Advanced computers with specialized design software</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                     <span>Computerized accounting & material planning systems</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                     <span>Complete communication infrastructure</span>
//                   </li>
//                 </ul>
//               </Card>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <Card className="p-8 h-full border-2 hover:border-cyan-300 transition-colors duration-300">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
//                   <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
//                     <Users className="w-5 h-5 text-white" />
//                   </div>
//                   Human Resources
//                 </h3>
//                 <ul className="space-y-3 text-gray-700">
//                   <li className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                     <span>Competent team of managers and engineers</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                     <span>Skilled supervisors and technicians</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                     <span>Well-trained electricians and helpers</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                     <span>Professional tools and equipment for every team member</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                     <span>Committed to delivering high-quality service</span>
//                   </li>
//                 </ul>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Contact CTA */}
//       <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-full h-full" style={{
//             backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
//             backgroundSize: '50px 50px'
//           }}></div>
//         </div>
        
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Ready to Start Your Project?
//             </h2>
//             <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
//               Let us be your partner in delivering world-class MEP solutions. Contact us today for a consultation.
//             </p>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.1 }}
//                 className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
//               >
//                 <div className="text-3xl mb-3">📍</div>
//                 <h3 className="font-bold mb-2">Location</h3>
//                 <p className="text-sm text-blue-100">
//                   42.7 KM Delhi-Jaipur Highway<br />
//                   Near Namaskara Hotel<br />
//                   Sector 81, Gurgaon
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
//               >
//                 <div className="text-3xl mb-3">📧</div>
//                 <h3 className="font-bold mb-2">Email</h3>
//                 <p className="text-sm text-blue-100">
//                   bcnmepsolutions@gmail.com<br />
//                   bcnservices6@gmail.com
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
//               >
//                 <div className="text-3xl mb-3">📞</div>
//                 <h3 className="font-bold mb-2">Phone</h3>
//                 <p className="text-sm text-blue-100">
//                   +91-8930372989<br />
//                   +91-7988466243
//                 </p>
//               </motion.div>
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
//             >
//               Get In Touch
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }










'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Award, Clock, TrendingUp, CheckCircle2, Users, Zap, Wrench, HeartHandshake, Lightbulb, ThumbsUp, Rocket, Star, Globe, Phone, Mail, MapPin, ArrowRight, Building2, HardHat, FileCheck, Settings, Briefcase, BadgeCheck, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import React from 'react';

const processSteps = [
  {
    number: '01',
    icon: Phone,
    title: 'Consultation',
    description: 'We analyze your industrial requirements and understand your specific needs.',
  },
  {
    number: '02',
    icon: FileCheck,
    title: 'Planning',
    description: 'Design comprehensive MEP solutions tailored to your project specifications.',
  },
  {
    number: '03',
    icon: Settings,
    title: 'Engineering',
    description: 'Our expert team creates detailed drawings and technical specifications.',
  },
  {
    number: '04',
    icon: Wrench,
    title: 'Installation',
    description: 'Professional installation of electrical, mechanical, and fire fighting systems.',
  },
  {
    number: '05',
    icon: CheckCircle2,
    title: 'Commissioning',
    description: 'Thorough testing and commissioning to ensure optimal performance.',
  },
  {
    number: '06',
    icon: HeartHandshake,
    title: 'Support',
    description: 'Ongoing maintenance and support to keep your systems running efficiently.',
  },
];

const teamMembers = [
  {
    name: 'Engineering Team',
    role: 'Design & Planning',
    icon: HardHat,
    description: 'Expert engineers with decades of combined experience',
  },
  {
    name: 'Project Managers',
    role: 'Execution & Delivery',
    icon: Briefcase,
    description: 'Ensuring projects are completed on time and within budget',
  },
  {
    name: 'Technical Staff',
    role: 'Installation & Testing',
    icon: Settings,
    description: 'Skilled technicians for precise implementation',
  },
  {
    name: 'Quality Assurance',
    role: 'Standards & Safety',
    icon: BadgeCheck,
    description: 'Maintaining highest quality and safety standards',
  },
];

export default function AboutPage() {
  const [count, setCount] = useState({ projects: 0, clients: 0, years: 0, team: 0 });
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const targets = { projects: 20, clients: 50, years: 5, team: 50 };
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCount({
        projects: Math.floor(progress * targets.projects),
        clients: Math.floor(progress * targets.clients),
        years: Math.floor(progress * targets.years),
        team: Math.floor(progress * targets.team)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCount(targets);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  const values = [
    {
      name: 'Integrity',
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      description: 'We operate with transparency and honesty in every interaction',
      bgGlow: 'group-hover:shadow-blue-500/50'
    },
    {
      name: 'Collaboration',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      description: 'Working together to achieve extraordinary results',
      bgGlow: 'group-hover:shadow-purple-500/50'
    },
    {
      name: 'Innovation',
      icon: Zap,
      color: 'from-amber-500 to-orange-500',
      description: 'Pushing boundaries with creative solutions',
      bgGlow: 'group-hover:shadow-amber-500/50'
    },
    {
      name: 'Excellence',
      icon: Target,
      color: 'from-rose-500 to-pink-600',
      description: 'Committed to delivering outstanding quality',
      bgGlow: 'group-hover:shadow-rose-500/50'
    },
    {
      name: 'Recognition',
      icon: Award,
      color: 'from-emerald-500 to-teal-600',
      description: 'Celebrating achievements and fostering growth',
      bgGlow: 'group-hover:shadow-emerald-500/50'
    },
    {
      name: 'Compassion',
      icon: Heart,
      color: 'from-red-500 to-rose-600',
      description: 'Leading with empathy and understanding',
      bgGlow: 'group-hover:shadow-red-500/50'
    }
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <p className="text-blue-600 font-semibold mb-3">
              Integrated MEP Engineering Excellence
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              <span className="text-blue-700">Engineering Systems</span> that Power
              <br />
              <span className="text-gray-800">Performance & Sustainability</span>
            </h1>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              BCN MEP delivers innovative, efficient, and reliable Mechanical,
              Electrical, and Plumbing solutions that transform spaces into
              high-performing, sustainable environments.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 text-sm shadow-md">
                Get Started
              </button>
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 text-sm">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.img
            src="https://i.postimg.cc/VNF22FPZ/Blue-Smartphone-Promo-Poster-3-1.png"
            alt="BCN MEP Systems"
            className="w-full md:w-[105%] h-80 md:h-[460px] object-contain transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-1 select-none"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{
              scale: 1.1,
              rotate: 1,
              transition: { duration: 0.4 },
            }}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-bl from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {(() => {
              const status = [
                { color: 'from-blue-500 to-blue-600', icon: Target, value: count.projects, suffix: '+', label: 'Completed Projects' },
                { color: 'from-cyan-500 to-cyan-600', icon: Users, value: count.clients, suffix: '+', label: 'Satisfied Clients' },
                { color: 'from-purple-500 to-purple-600', icon: Clock, value: count.years, suffix: '+', label: 'Years of Excellence' },
                { color: 'from-green-500 to-emerald-500', icon: Award, value: count.team, suffix: '+', label: 'Team Members' },
              ];
              return status.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                >
                  <Card className="p-6 md:p-8 bg-white/70 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl rounded-2xl transition-all duration-300 text-center">
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-tr ${stat.color} flex items-center justify-center shadow-inner`}>
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-1">
                      {stat.value}{stat.suffix}
                    </h3>
                    <p className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</p>
                  </Card>
                </motion.div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold mb-4 shadow-sm">
                About BCN MEP Solutions
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                Pioneering Industrial 
                <br />
                <span className="text-blue-600">
                  MEP Excellence Since 2020
                </span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                Founded in 2020, BCN MEP Solutions Pvt. Ltd. has rapidly become a trusted name in the industrial MEP domain — delivering innovative, efficient, and high-quality solutions for diverse projects across sectors.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                Headquartered in Gurgaon, we provide end-to-end MEP, Electrical Contracting, and Utility Services — including industrial pipelines, LV systems, and complete firefighting installations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Certified Excellence</h4>
                    <p className="text-xs text-gray-600">Quality Standards & Recognition</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Safety First</h4>
                    <p className="text-xs text-gray-600">Uncompromising Priority</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="BCN MEP Construction"
                  className="w-full h-[350px] md:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-600 rounded-2xl -z-10 opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-400 rounded-2xl -z-10 opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Our
              <span className="text-blue-600 ml-2">
                Mission & Vision
              </span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
              Driving excellence through purpose and innovation
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[{
              icon: Target,
              title: 'Our Mission',
              text: 'To be the preferred integrated MEPF solution provider delivering consistent quality, cost-effective solutions, and building strong partnerships with our clients.'
            },
            {
              icon: Eye,
              title: 'Our Vision',
              text: 'To become a trusted industry leader in MEP services, known for safety, quality, reliability, and sustainable innovation across every project we deliver.'
            }].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="p-6 md:p-8 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:border-blue-400 text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <card.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {card.text}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-14 md:py-20  bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
  {/* Soft Animated Gradient Blobs */}


  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Heading */}
    <div className="text-center mb-10 md:mb-14">
      <div className="inline-block mb-3">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          What Drives Us
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Our Core <span className="text-blue-600">Values</span>
      </h2>
      <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
        The principles that drive our success and client satisfaction.
      </p>
    </div>

    {/* Values Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-10">
      {values.map((value, i) => {
        const Icon = value.icon;
        const isActive = activeValue === i;

        return (
          <div
            key={i}
            className="flex flex-col items-center group cursor-pointer"
            onClick={() => setActiveValue(i)}
          >
            <div className="relative mb-3 transition-all duration-500 ease-out">
              <div className={`absolute inset-0 bg-gradient-to-tr ${value.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${isActive ? 'opacity-30' : ''}`}></div>

              <div className={`relative w-16 h-16 md:w-20 md:h-20 transition-all duration-500 ${isActive ? 'scale-105' : 'scale-100 group-hover:scale-105'}`}>
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${value.color} rounded-2xl transition-all duration-700 ${isActive ? 'rotate-6' : 'rotate-2 group-hover:rotate-3'}`}
                  style={{
                    animation: isActive ? 'float 3s ease-in-out infinite' : 'none'
                  }}
                ></div>

                <div className={`relative w-full h-full bg-gradient-to-tr ${value.color} rounded-2xl flex items-center justify-center shadow-md transition-all duration-500 ${isActive ? `shadow-lg ${value.bgGlow}` : 'group-hover:shadow-lg'}`}>
                  <Icon className="w-8 h-8 md:w-9 md:h-9 text-white" strokeWidth={2} />
                </div>
              </div>
            </div>

            <h3 className={`text-xs md:text-sm font-bold text-center transition-all duration-300 ${isActive ? 'text-gray-900 scale-105' : 'text-gray-700 group-hover:text-gray-900'}`}>
              {value.name}
            </h3>
          </div>
        );
      })}
    </div>

    {/* Active Value Description Card */}
    <div className="max-w-3xl mx-auto">
      <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg p-6 md:p-8 border border-white/20 transition-all duration-500">
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-tr ${values[activeValue].color} rounded-xl flex items-center justify-center shadow-lg`}>
            {React.createElement(values[activeValue].icon, { className: "w-7 h-7 md:w-8 md:h-8 text-white", strokeWidth: 2 })}
          </div>
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              {values[activeValue].name}
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {values[activeValue].description}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {values.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveValue(i)}
              className={`transition-all duration-300 rounded-full ${activeValue === i ? 'w-6 h-2 bg-gradient-to-r from-blue-600 to-purple-600' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`View ${values[i].name}`}
            ></button>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-10 text-center">
      <button className="group relative inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 overflow-hidden text-sm md:text-base">
        <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <span className="relative">Discover More About Us</span>
        <svg className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </div>

  <style jsx>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0px) rotate(6deg);
      }
      50% {
        transform: translateY(-8px) rotate(6deg);
      }
    }
  `}</style>
</section>


      {/* Work Process Section */}
     <section className="py-14 md:py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 md:mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Our Work Process
      </h2>
      <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
        A refined approach to deliver reliable, efficient, and innovative MEP solutions.
      </p>
    </motion.div>

    {/* Process Steps */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {processSteps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -6 }}
          className="group"
        >
          <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col items-center text-center relative">
            {/* Step Number */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-sm font-bold shadow-md">
              {step.number}
            </div>

            {/* Icon */}
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mt-4 group-hover:scale-110 transition-transform duration-300">
              <step.icon className="w-7 h-7 text-blue-600" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white relative overflow-hidden">
  {/* Patterned Overlay */}
  <div className="absolute inset-0 opacity-10">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }}
    ></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 md:mb-16"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
        Why Choose <span className="text-blue-200">BCN MEP Solutions?</span>
      </h2>
      <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto">
        We reflect the values we hold — <span className="font-semibold">Knowledge, Leadership, Aptitude, and Honesty.</span>
      </p>
    </motion.div>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: 'On-Time Delivery',
          icon: Clock,
          description:
            'Ensuring timely and budget-friendly project completion is our cornerstone commitment.',
        },
        {
          title: 'Strong Partnerships',
          icon: HeartHandshake,
          description:
            'Collaborative processes with effective communication from start to finish.',
        },
        {
          title: 'Customer Service',
          icon: ThumbsUp,
          description:
            'We eagerly attend to inquiries with efficiency and care, delivering outstanding results.',
        },
        {
          title: 'Local Expertise',
          icon: MapPin,
          description:
            'Based in Gurgaon with deep knowledge of regional requirements and standards.',
        },
        {
          title: 'Proven Track Record',
          icon: Star,
          description:
            'Successfully completed 20+ major industrial projects for leading organizations.',
        },
        {
          title: 'Innovation',
          icon: Lightbulb,
          description:
            'Cutting-edge solutions using the latest technology and sustainable practices.',
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -6 }}
          className="h-full"
        >
          <Card className="p-6 md:p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl h-full flex flex-col items-center text-center">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-lg transition-transform duration-500 group-hover:rotate-6">
              <item.icon className="w-7 h-7 md:w-8 md:h-8 text-blue-600" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm md:text-base text-blue-100 leading-relaxed">
              {item.description}
            </p>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Services Expertise */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <Card className="p-10 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-400">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Electrical Systems
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-lg">STP & ETP Systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-lg">Process Services</span>
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
              <Card className="p-10 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-400">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Fire Fighting Systems
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-lg">Fire Hydrant Systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-lg">Sprinkler Installation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-lg">Fire Detection & Alarms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-lg">Pump Room Setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-lg">Suppression Systems</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to delivering excellence in every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-8 text-center h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-400">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <member.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Card className="p-10 max-w-4xl mx-auto shadow-xl border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Growing Team
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                We're always looking for talented professionals who share our passion for excellence. If you're ready to make an impact in the MEP industry, we'd love to hear from you.
              </p>
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300">
                View Opportunities
              </button>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by <span className="text-blue-600">Top Companies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From industry leaders like Yokohama and Tata Steel to innovators across sectors, we empower companies with reliable MEP solutions and seamless project execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'Tata Steel', location: 'Ludhiana' },
              { name: 'Uno Minda', location: 'Neemrana' },
              { name: 'JBM Associates', location: 'Gujarat' },
              { name: 'Yokohama India', location: 'Pan India' },
              { name: 'Rosenberger', location: 'Manesar' },
              { name: 'Avitech Nutrition', location: 'Jhajjar' },
              { name: 'Anand Mando', location: 'Bhiwadi' },
              { name: 'Sona Comstar', location: 'Gurgaon' },
              { name: 'Webtech Corp', location: 'Rohtak' },
              { name: 'Bhagirath Heavy', location: 'Jhajjar' },
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center justify-center border-2 hover:border-blue-400 bg-white">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="font-bold text-gray-900 text-base mb-2">{client.name}</p>
                  <p className="text-sm text-gray-500">{client.location}</p>
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
            <p className="text-gray-600 text-lg font-medium italic">...and many more leading companies across India</p>
          </motion.div>
        </div>
      </section>

      {/* Facilities & Resources */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Facilities & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Equipped with modern infrastructure and skilled workforce to deliver excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-10 h-full border-2 hover:border-blue-400 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Infrastructure</h3>
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">300+ sq.ft. modern office space with full facilities</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">2000 sq.ft. dedicated material storage facility</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">Advanced computers with specialized design software</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">Computerized accounting & material planning systems</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">Complete communication infrastructure</span>
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
              <Card className="p-10 h-full border-2 hover:border-blue-400 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Human Resources</h3>
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">Competent team of managers and engineers</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">Skilled supervisors and technicians</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">Well-trained electricians and helpers</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">Professional tools and equipment for every team member</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">Committed to delivering high-quality service</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Achievements & Milestones
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Celebrating excellence and continuous growth in the MEP industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: 'Rapid Growth',
                description: 'From startup to industry leader in just 5 years with consistent year-over-year growth'
              },
              {
                icon: Star,
                title: 'Client Satisfaction',
                description: '95%+ client satisfaction rate with repeat business from major corporations'
              },
              {
                icon: Award,
                title: 'Industry Recognition',
                description: 'Recognized for quality work and timely delivery across industrial sectors'
              },
              {
                icon: Globe,
                title: 'Pan-India Presence',
                description: 'Successfully completed projects across multiple states in India'
              },
              {
                icon: Shield,
                title: 'Zero Accidents',
                description: 'Maintained exemplary safety record with zero major accidents'
              },
              {
                icon: TrendingUp,
                title: 'Project Success',
                description: '100% project completion rate within agreed timelines and budgets'
              },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-8 h-full bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <achievement.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{achievement.title}</h3>
                  <p className="text-blue-100 text-lg leading-relaxed">{achievement.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let us be your partner in delivering world-class MEP solutions. Contact us today for a consultation and discover how we can transform your project.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 shadow-xl"
              >
                <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                <h3 className="font-bold text-xl mb-3">Location</h3>
                <p className="text-blue-100">
                  42.7 KM Delhi-Jaipur Highway<br />
                  Sector 81, Gurgaon
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 shadow-xl"
              >
                <Mail className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                <h3 className="font-bold text-xl mb-3">Email</h3>
                <p className="text-blue-100">
                  bcnmepsolutions@gmail.com<br />
                  bcnservices6@gmail.com
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 shadow-xl"
              >
                <Phone className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                <h3 className="font-bold text-xl mb-3">Phone</h3>
                <p className="text-blue-100">
                  +91-8930372989<br />
                  +91-7988466243
                </p>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              Get In Touch <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}