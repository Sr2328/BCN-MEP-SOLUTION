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
              +91 97170 84301
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










// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';
// import { supabase, type Service } from '@/lib/supabase';
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';

// export default function ServicesPage() {
//   const [services, setServices] = useState<Service[]>([]);
//   const [categories, setCategories] = useState<string[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>('All');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchServices() {
//       const { data } = await supabase
//         .from('services')
//         .select('*')
//         .order('order_index');

//       if (data) {
//         setServices(data);
//         const uniqueCategories = Array.from(new Set(data.map((s) => s.category)));
//         setCategories(['All', ...uniqueCategories]);
//       }
//       setLoading(false);
//     }

//     fetchServices();
//   }, []);

//   const filteredServices =
//     selectedCategory === 'All'
//       ? services
//       : services.filter((s) => s.category === selectedCategory);

//   return (
//     <div>
//       {/* ===== HERO SECTION START ===== */}
//       <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-100">
//   <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
//     {/* LEFT SIDE */}
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="text-center md:text-left"
//     >
//       <p className="text-blue-600 font-semibold mb-2">
//         Integrated MEP Engineering Excellence
//       </p>

//       <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
//         <span className="text-blue-700">Engineering Systems</span> <span className= "text-black-600">  that Power </span> <br />
//         <span className="text-black-600">Performance & Sustainability</span>
//       </h1>

//       <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0">
//         BCN MEP delivers innovative, efficient, and reliable Mechanical, Electrical, and Plumbing
//         solutions that transform spaces into high-performing environments.
//       </p>

//       <div className="flex flex-wrap justify-center md:justify-start gap-3">
//         {[
//           'HVAC & Ventilation',
//           'Electrical Installations',
//           'Fire Fighting Systems',
//           'Plumbing & Utilities',
//           'ELV Systems'
//         ].map((item) => (
//           <span
//             key={item}
//             className="bg-white border border-gray-200 text-gray-800 text-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
//           >
//             {item}
//           </span>
//         ))}
//       </div>
//     </motion.div>

//     {/* RIGHT SIDE */}
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: 0.2 }}
//       className="relative"
//     >
//        <motion.img
//     src="https://i.postimg.cc/zB7mMKjY/mep.png"
//     alt="BCN MEP Systems"
//     className="w-full md:w-[90%] h-72 md:h-[420px] object-contain rounded-2xl transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-1 hover:shadow-2xl"
//     whileHover={{
//       scale: 1.05,
//       rotate: 1,
//       transition: { duration: 0.4 },
//     }}
//   />

     
//     </motion.div>
//   </div>
// </section>

//       {/* ===== HERO SECTION END ===== */}

//       {/* ===== SERVICES SECTION START ===== */}
      
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
//                 <Card key={i} className="p-6 animate-pulse">
//                   <div className="h-48 bg-gray-200 rounded mb-4"></div>
//                   <div className="h-6 bg-gray-200 rounded mb-2"></div>
//                   <div className="h-4 bg-gray-200 rounded mb-4"></div>
//                   <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//                 </Card>
//               ))}
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredServices.map((service, index) => (
//                 <motion.div
//                   key={service.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                 >
//                   <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 group">
//                     <div className="relative h-48 overflow-hidden">
//                       <img
//                         src={service.image_url}
//                         alt={service.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                       <div className="absolute bottom-4 left-4">
//                         <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
//                           {service.category}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="p-6">
//                       <h3 className="text-xl font-bold text-gray-900 mb-2">
//                         {service.title}
//                       </h3>
//                       <p className="text-gray-600 mb-4 line-clamp-2">
//                         {service.description}
//                       </p>

//                       <div className="mb-4">
//                         <div className="flex flex-wrap gap-2">
//                           {service.features.slice(0, 3).map((feature: string) => (
//                             <span
//                               key={feature}
//                               className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
//                             >
//                               {feature}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="flex items-center justify-between pt-4 border-t">
//                         <div>
//                           <span className="text-2xl font-bold text-blue-600">
//                             ₹{service.price.toLocaleString('en-IN')}
//                           </span>
//                           <span className="text-sm text-gray-500 ml-2">
//                             {service.price_unit}
//                           </span>
//                         </div>
//                         <Button asChild size="sm">
//                           <Link href={`/services/${service.id}`}>
//                             Details
//                             <ArrowRight className="ml-2 w-4 h-4" />
//                           </Link>
//                         </Button>
//                       </div>
//                     </div>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           )}

//           {!loading && filteredServices.length === 0 && (
//             <div className="text-center py-12">
//               <p className="text-gray-600 text-lg">
//                 No services found in this category.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }