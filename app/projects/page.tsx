// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, Calendar } from 'lucide-react';
// import { supabase, type Project } from '@/lib/supabase';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from '@/components/ui/dialog';

// export default function ProjectsPage() {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [categories, setCategories] = useState<string[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>('All');
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchProjects() {
//       const { data } = await supabase
//         .from('projects')
//         .select('*')
//         .order('order_index');

//       if (data) {
//         setProjects(data);
//         const uniqueCategories = Array.from(
//           new Set(data.map((p) => p.category))
//         );
//         setCategories(['All', ...uniqueCategories]);
//       }
//       setLoading(false);
//     }

//     fetchProjects();
//   }, []);

//   const filteredProjects =
//     selectedCategory === 'All'
//       ? projects
//       : projects.filter((p) => p.category === selectedCategory);

//   return (
//     <div>
//     <section className="relative bg-gradient-to-br from-gray-100 via-white to-blue-50 overflow-hidden">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-14">
//     <div className="grid md:grid-cols-12 items-center gap-10 md:gap-8">
      
//       {/* LEFT CONTENT */}
//       <motion.div
//         initial={{ opacity: 0, x: -30 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7 }}
//         className="md:col-span-6 space-y-4 text-center md:text-left"
//       >
//         <p className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
//           Award-Winning MEP Excellence
//         </p>

//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
//           Where Innovation Drives{' '}
//           <span className="text-blue-600">Structural Perfection</span>
//         </h1>

//         <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0">
//           Delivering end-to-end MEP solutions with precision, performance, and sustainability across industrial, commercial, and residential projects.
//         </p>

//         {/* SERVICES TAGS */}
//         <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-3 text-[12px] sm:text-[13px] font-medium text-gray-700">
//           {[
//             'Electrical Systems',
//             'HVAC & Firefighting',
//             'Plumbing & Utility',
//             'Design & Supervision',
//             'Maintenance',
//           ].map((item) => (
//             <span
//               key={item}
//               className="bg-gray-100 hover:bg-blue-100 px-3 py-1.5 rounded-full transition"
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//       </motion.div>

//       {/* RIGHT IMAGE + STATS */}
//       <motion.div
//         initial={{ opacity: 0, x: 30 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7, delay: 0.2 }}
//         className="md:col-span-6 flex flex-col sm:flex-row items-center md:items-stretch gap-6 relative"
//       >
//         {/* IMAGE */}
//         <div className="w-full sm:flex-1 rounded-lg overflow-hidden shadow-md">
//           <img
//             src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&auto=format&fit=crop"
//             alt="MEP Project Team"
//             className="w-full h-56 sm:h-64 md:h-72 object-cover"
//           />
//         </div>

//         {/* STATS BOX */}
//         <div className="bg-gradient-to-b from-blue-500 to-blue-600 text-white rounded-xl px-6 py-5 sm:py-6 w-full sm:w-44 md:w-48 flex flex-col justify-center items-center sm:items-stretch shadow-lg mt-4 sm:mt-0">
//           {[
//             { number: '000+', label: 'Projects Completed' },
//             { number: '000+', label: 'Years of Experience' },
//             { number: '000+', label: 'Happy Clients' },
//           ].map((stat, index) => (
//             <div key={index} className="text-center mb-4 last:mb-0">
//               <div className="text-xl sm:text-2xl font-bold">{stat.number}</div>
//               <p className="text-xs sm:text-sm text-orange-100 mt-1">{stat.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* DECORATIONS */}
//         <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 bg-blue-900 rounded-full opacity-80 -z-10"></div>
//         <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 w-10 sm:w-14 md:w-16 h-10 sm:h-14 md:h-16 border-4 border-white-00 rounded-full"></div>
//       </motion.div>
//     </div>
//   </div>

//   {/* STAR DECORATION */}
//   <div className="absolute bottom-8 left-8 text-blue-500 text-2xl hidden sm:block">✦</div>
// </section>

//       <section className="py-12 md:py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="flex flex-wrap gap-3 justify-center mb-12"
//           >
//             {categories.map((category) => (
//               <Button
//                 key={category}
//                 variant={selectedCategory === category ? 'default' : 'outline'}
//                 onClick={() => setSelectedCategory(category)}
//                 className="rounded-full"
//               >
//                 {category}
//               </Button>
//             ))}
//           </motion.div>

//           {loading ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[...Array(6)].map((_, i) => (
//                 <div key={i} className="animate-pulse">
//                   <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
//                   <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
//                   <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredProjects.map((project, index) => (
//                 <motion.div
//                   key={project.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   className="group cursor-pointer"
//                   onClick={() => setSelectedProject(project)}
//                 >
//                   <div className="relative overflow-hidden rounded-lg shadow-lg h-64 mb-4">
//                     <img
//                       src={project.image_url}
//                       alt={project.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                       <Button size="sm" variant="secondary">
//                         View Details
//                         <ExternalLink className="ml-2 w-4 h-4" />
//                       </Button>
//                     </div>
//                     <div className="absolute top-4 left-4">
//                       <Badge>{project.category}</Badge>
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
//                       {project.title}
//                     </h3>
//                     <p className="text-gray-600 mb-3 line-clamp-2">
//                       {project.description}
//                     </p>
//                     {project.client_name && (
//                       <p className="text-sm text-gray-500 mb-2">
//                         Client: {project.client_name}
//                       </p>
//                     )}
//                     <div className="flex flex-wrap gap-2">
//                       {project.technologies.slice(0, 3).map((tech: string) => (
//                         <span
//                           key={tech}
//                           className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}

//           {!loading && filteredProjects.length === 0 && (
//             <div className="text-center py-12">
//               <p className="text-gray-600 text-lg">
//                 No projects found in this category.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       <Dialog
//         open={!!selectedProject}
//         onOpenChange={() => setSelectedProject(null)}
//       >
//         <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//           {selectedProject && (
//             <>
//               <DialogHeader>
//                 <div className="flex items-center gap-2 mb-2">
//                   <Badge>{selectedProject.category}</Badge>
//                   {selectedProject.completion_date && (
//                     <span className="text-sm text-gray-500 flex items-center">
//                       <Calendar className="w-4 h-4 mr-1" />
//                       {new Date(
//                         selectedProject.completion_date
//                       ).toLocaleDateString('en-IN', {
//                         month: 'long',
//                         year: 'numeric',
//                       })}
//                     </span>
//                   )}
//                 </div>
//                 <DialogTitle className="text-2xl">
//                   {selectedProject.title}
//                 </DialogTitle>
//               </DialogHeader>

//               <div className="space-y-6">
//                 <img
//                   src={selectedProject.image_url}
//                   alt={selectedProject.title}
//                   className="w-full h-64 object-cover rounded-lg"
//                 />

//                 {selectedProject.gallery_images.length > 0 && (
//                   <div className="grid grid-cols-3 gap-4">
//                     {selectedProject.gallery_images.map(
//                       (img: string, i: number) => (
//                         <img
//                           key={i}
//                           src={img}
//                           alt={`Gallery ${i + 1}`}
//                           className="w-full h-32 object-cover rounded-lg"
//                         />
//                       )
//                     )}
//                   </div>
//                 )}

//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                     Project Description
//                   </h3>
//                   <p className="text-gray-700 leading-relaxed">
//                     {selectedProject.description}
//                   </p>
//                 </div>

//                 {selectedProject.client_name && (
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                       Client
//                     </h3>
//                     <p className="text-gray-700">{selectedProject.client_name}</p>
//                   </div>
//                 )}

//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                     Technologies Used
//                   </h3>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedProject.technologies.map((tech: string) => (
//                       <Badge key={tech} variant="secondary">
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }



'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, Bell, CheckCircle, Code2, Zap, Shield, Smartphone, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

export default function UnderConstruction() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [countdown, setCountdown] = useState({ days: 15, hours: 12, minutes: 30, seconds: 45 });
  const [progress, setProgress] = useState(0);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 75 ? 75 : prev + 1));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const handleNotify = () => {
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Modern Design",
      description: "Clean and professional user interface with latest design trends",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized performance for the best user experience",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Built with security best practices and enterprise-grade protection",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Fully Responsive",
      description: "Perfect experience across all devices and screen sizes",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        .stagger-1 {
          animation-delay: 0.1s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .stagger-2 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .stagger-3 {
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .stagger-4 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-6xl">
          {/* Construction Icon */}
          <div className="flex justify-center mb-8 animate-fade-in-up">
            <div className="w-28 h-28 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300">
              <span className="text-6xl">🚧</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 text-center mb-4 animate-fade-in-up stagger-1">
            Website Under Construction
          </h1>

          {/* Subtitle */}
          <p className="text-center text-gray-600 text-lg md:text-xl mb-12 max-w-3xl mx-auto animate-fade-in-up stagger-2">
            We're working hard to bring you an amazing experience. Our new website will be launching soon!
          </p>

          {/* Countdown Timer */}
          <div className="mb-12 animate-fade-in-up stagger-3">
            <h3 className="text-center text-gray-500 text-sm mb-6 uppercase tracking-widest font-semibold">Launching In</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              {[
                { label: 'Days', value: countdown.days },
                { label: 'Hours', value: countdown.hours },
                { label: 'Minutes', value: countdown.minutes },
                { label: 'Seconds', value: countdown.seconds }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-12 max-w-4xl mx-auto animate-fade-in-up stagger-4">
            <div className="flex justify-between text-sm text-gray-600 mb-3 px-1">
              <span className="font-medium">Development Progress</span>
              <span className="font-bold text-blue-600 text-lg">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300 shadow-lg"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-in-up stagger-4">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h4 className="font-bold text-gray-800 mb-2 text-lg">{feature.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Email Notification Card */}
          <div className="bg-white rounded-2xl p-8 md:p-10 mb-10 shadow-xl border border-gray-100 max-w-3xl mx-auto animate-fade-in-up stagger-4">
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <Bell className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Get Notified When We Launch
              </h3>
              <p className="text-gray-600">
                Be the first to know when our website goes live
              </p>
            </div>
            
            {!isSubscribed ? (
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleNotify()}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-800"
                  />
                </div>
                <button
                  onClick={handleNotify}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 hover:scale-105 transform duration-300"
                >
                  <Bell className="w-5 h-5" />
                  Notify Me
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3 text-green-600 font-semibold text-lg py-4">
                <CheckCircle className="w-6 h-6" />
                <span>Thank you! We'll notify you soon! 🎉</span>
              </div>
            )}
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up stagger-4">
            <a
              href="tel:+919717084301"
              className="group bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 hover:scale-105 transform duration-300"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              +91 9717084301
            </a>
            <a
              href="mailto:info@mepsolutions.com"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 hover:scale-105 transform duration-300"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Contact Us
            </a>
          </div>

          {/* Expected Launch */}
          <div className="text-center mb-10 animate-fade-in-up stagger-4">
            <p className="text-gray-600">
              Expected Launch: <span className="font-bold text-blue-600 text-lg">December 2025</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer - Developer Information */}
      <footer className="border-t border-gray-200 bg-white/80 backdrop-blur-sm py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Developer Info */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Designed & Developed by</p>
                <p className="text-xl font-bold text-gray-800">SRDEV <span className="text-blue-600">(Sachin Yadav)</span></p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-11 h-11 rounded-full bg-gray-100 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110 transform duration-300 group shadow-md"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 rounded-full bg-gray-100 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110 transform duration-300 group shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 rounded-full bg-gray-100 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110 transform duration-300 group shadow-md"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-600 text-center md:text-right">
              <p>© 2025 MEP Solutions</p>
              <p>All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}