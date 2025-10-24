// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { Phone, Mail, MapPin, Send, MessageCircle, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Label } from '@/components/ui/label';
// import { motion } from 'framer-motion';

// export default function ContactPage() {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleSubmit = () => {
//     if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
//       alert('Please fill in all required fields');
//       return;
//     }
    
//     setLoading(true);

//     // Simulate API call
//     setTimeout(() => {
//       console.log('Form submitted:', formData);
//       alert('Thank you for contacting us! We will get back to you soon.');
//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         message: '',
//       });
//       setLoading(false);
//     }, 1500);
//   };

//   const handleChange = (e: { target: { name: any; value: any; }; }) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleWhatsApp = () => {
//     window.open(
//       'https://wa.me/919717084301?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20services.',
//       '_blank'
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Header */}
    
// <section className="relative bg-white py-14 md:py-20 overflow-hidden mb-12">
//   <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
    
//     {/* LEFT SIDE — TEXT */}
//     <motion.div
//       initial={{ opacity: 0, x: -50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8 }}
//       className="text-center md:text-left space-y-5 md:w-1/2"
//     >
//       <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
//         Get in 
//           <span className="text-blue-600" > Touch</span> 
//       </h1>

//       <p className="text-gray-600 text-base md:text-lg leading-relaxed">
//         We’d love to hear from you! Whether you’re planning your next big project, 
//         looking for expert MEPF solutions, or simply have questions about our services — 
//         our team is here to help you every step of the way.
//       </p>

//       <p className="text-gray-500 text-sm md:text-base leading-relaxed">
//         Reach out to us via email or phone, and we’ll respond promptly to discuss 
//         how we can collaborate to achieve your goals efficiently and effectively.
//       </p>

//       <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
//         <motion.a
//           whileHover={{ scale: 1.05, y: -3 }}
//           whileTap={{ scale: 0.95 }}
//           href="#"
//           className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-lg hover:shadow-2xl transition-all text-sm"
//         >
//           <Mail className="w-4 h-4" /> Email Us
//         </motion.a>

//         <motion.a
//           whileHover={{ scale: 1.05, y: -3 }}
//           whileTap={{ scale: 0.95 }}
//           href="#"
//           className="flex items-center gap-2 border border-blue-500 text-blue-600 px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-all text-sm"
//         >
//           <Phone className="w-4 h-4" /> Call Now
//         </motion.a>
//       </div>
//     </motion.div>

//     {/* RIGHT SIDE — IMAGE */}
//     <motion.div
//       initial={{ opacity: 0, x: 50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8 }}
//       className="md:w-1/2 flex justify-center"
//     >
//       <motion.div
//         whileHover={{ scale: 1.03, rotate: 1 }}
//         transition={{ type: "spring", stiffness: 250 }}
//         className="drop-shadow-xl"
//       >
//         <Image
//           src="https://i.postimg.cc/VkW4nLPw/088c099c81191b734e0db14f0e253142-1.png"
//           alt="Contact Illustration"
//           width={430}
//           height={430}
//           className="object-contain pointer-events-none select-none"
//         />
//       </motion.div>
//     </motion.div>
//   </div>

//   {/* Decorative Gradient Blob */}
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 0.2 }}
//     transition={{ duration: 1 }}
//     className="absolute -top-16 -right-16 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full blur-3xl opacity-20 pointer-events-none"
//   ></motion.div>
// </section>



//       {/* Main Content */}
//       <section className="pb-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Left Column - Contact Form */}
//             <div className="animate-slide-in-left">
//               <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300">
//                 <div className="mb-8">
//                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//                     Send us a message
//                   </h2>
//                   <p className="text-gray-600 leading-relaxed">
//                     Do you have a business inquiry? Or need any help to choose the right products from our team. Feel free to contact us
//                   </p>
//                 </div>

//                 <div className="space-y-6">
//                   {/* Name Fields */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="group">
//                       <Label htmlFor="firstName" className="text-gray-700 font-medium mb-2 block">
//                         First Name
//                       </Label>
//                       <Input
//                         id="firstName"
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         placeholder="Enter your first name"
//                         className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 group-hover:border-gray-400"
//                       />
//                     </div>

//                     <div className="group">
//                       <Label htmlFor="lastName" className="text-gray-700 font-medium mb-2 block">
//                         Last Name
//                       </Label>
//                       <Input
//                         id="lastName"
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         placeholder="Enter your Last name"
//                         className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 group-hover:border-gray-400"
//                       />
//                     </div>
//                   </div>

//                   {/* Email */}
//                   <div className="group">
//                     <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
//                       Email
//                     </Label>
//                     <Input
//                       id="email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="Enter your email"
//                       className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 group-hover:border-gray-400"
//                     />
//                   </div>

//                   {/* Contact Details */}
//                   <div className="group">
//                     <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
//                       Contact Details
//                     </Label>
//                     <div className="flex gap-2">
//                       <select className="h-12 px-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-white transition-all duration-200">
//                         <option>+91</option>
//                         <option>+1</option>
//                         <option>+44</option>
//                       </select>
//                       <Input
//                         id="phone"
//                         name="phone"
//                         type="tel"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="Enter your contact number"
//                         className="h-12 flex-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 group-hover:border-gray-400"
//                       />
//                     </div>
//                   </div>

//                   {/* Message */}
//                   <div className="group">
//                     <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
//                       Message
//                     </Label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows={5}
//                       placeholder="Enter your message"
//                       className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 group-hover:border-gray-400 resize-none"
//                     />
//                   </div>

//                   <Button 
//                     onClick={handleSubmit}
//                     disabled={loading} 
//                     className="w-full h-12 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
//                   >
//                     {loading ? 'Sending...' : 'Send a Message'}
//                     <Send className="ml-2 w-5 h-5" />
//                   </Button>
//                 </div>
//               </div>

//               {/* Company Logo & Newsletter Section */}
//             <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 mt-8 w-full max-w-[600px] mx-auto">
//   {/* Company Logo */}
//   <div className="text-center mb-3 pb-4 border-b border-gray-200">
//     <div className="inline-flex items-center justify-center mb-3">
//       <img
//         src="https://i.postimg.cc/GhYcx6ps/Blue-Black-Simple-Modern-Construction-Company-Logo.png" // replace with your actual logo path
//         alt="Company Logo"
//         className="w-16 h-16 object-contain rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
//       />
//     </div>
//     <h3 className="text-lg font-semibold text-gray-900 mb-1">BCN MEP SOLUTION PVT. LTD</h3>
//     <p className="text-gray-600 text-sm">Building the future together</p>
//   </div>

//   {/* Newsletter Signup */}
//   <div>
//     <div className="text-center mb-3">
//       <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mb-2 transition-colors duration-300">
//         <Mail className="w-5 h-5 text-blue-600" />
//       </div>
//       <h4 className="text-lg font-semibold text-gray-900 mb-1">
//         Subscribe to Newsletter
//       </h4>
//       <p className="text-gray-600 text-xs">
//         Get latest updates, news and exclusive offers
//       </p>
//     </div>
    
//     <div className="space-y-2">
//       <Input
//         type="email"
//         placeholder="Enter your email"
//         className="h-10 text-sm bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//       />
//       <Button className="w-full h-10 text-sm bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold transition-all duration-300 shadow-sm hover:shadow-md">
//         Subscribe
//         <Send className="ml-1 w-4 h-4" />
//       </Button>
//     </div>
    
//     <p className="text-[10px] text-gray-500 text-center mt-2">
//       We respect your privacy. Unsubscribe anytime.
//     </p>
//   </div>
// </div>
//     </div>

//             {/* Right Column - Contact Info, Map, Logo & Newsletter */}
//             <div className="space-y-6 animate-slide-in-right">
//               {/* Contact Card */}
//               <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-2xl shadow-xl p-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
//                 <h3 className="text-2xl font-bold mb-8">
//                   Hi! We are always here to help you.
//                 </h3>

//                 {/* Contact Items */}
//                 <div className="space-y-6">
//                   {/* Hotline */}
//                   <div className="flex items-start space-x-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
//                     <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
//                       <Phone className="w-6 h-6" />
//                     </div>
//                     <div>
//                       <p className="text-blue-200 text-sm mb-1">Hotline</p>
//                       <a href="tel:+919717084301" className="font-semibold text-lg hover:text-blue-200 transition-colors">
//                         +91 98765 43210
//                       </a>
//                     </div>
//                   </div>

//                   {/* WhatsApp */}
//                   <div 
//                     onClick={handleWhatsApp}
//                     className="flex items-start space-x-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300"
//                   >
//                     <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
//                       <MessageCircle className="w-6 h-6" />
//                     </div>
//                     <div>
//                       <p className="text-blue-200 text-sm mb-1">SMS / Whatsapp</p>
//                       <p className="font-semibold text-lg hover:text-blue-200 transition-colors">
//                         +91 98765 43210
//                       </p>
//                     </div>
//                   </div>

//                   {/* Email */}
//                   <div className="flex items-start space-x-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
//                     <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
//                       <Mail className="w-6 h-6" />
//                     </div>
//                     <div>
//                       <p className="text-blue-200 text-sm mb-1">Email</p>
//                       <a href="mailto:info@business.com" className="font-semibold text-lg hover:text-blue-200 transition-colors break-all">
//                         info@business.com
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Social Media */}
//                 <div className="mt-8 pt-8 border-t border-white/20">
//                   <p className="text-blue-200 text-sm mb-4">Connect with us</p>
//                   <div className="flex space-x-3">
//                     {[
//                       { Icon: Facebook, link: '#' },
//                       { Icon: Instagram, link: '#' },
//                       { Icon: Twitter, link: '#' },
//                       { Icon: MessageCircle, link: '#' }
//                     ].map(({ Icon, link }, idx) => (
//                       <a
//                         key={idx}
//                         href={link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
//                       >
//                         <Icon className="w-5 h-5" />
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Map & Office Hours Card */}
//               <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
//                 {/* Map */}
//                 <div className="aspect-video w-full overflow-hidden">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571618614!2d72.71637343457658!3d19.082197840726888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1634561234567!5m2!1sen!2sin"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen
//                     loading="lazy"
//                     title="Office location"
//                     className="hover:scale-105 transition-transform duration-500"
//                   ></iframe>
//                 </div>

//                 {/* Office Info */}
//                 <div className="p-6">
//                   {/* Address */}
//                   <div className="flex items-start space-x-3 mb-6 group">
//                     <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
//                       <MapPin className="w-5 h-5 text-blue-600" />
//                     </div>
//                     <div>
//                       <p className="text-gray-600 text-sm mb-1">Address</p>
//                       <p className="text-gray-900 font-medium leading-relaxed">
//                         123 Business Street<br />
//                         Tech Park, Mumbai<br />
//                         India 400001
//                       </p>
//                     </div>
//                   </div>

//                   {/* Office Hours */}
//                   <div className="flex items-start space-x-3 group">
//                     <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
//                       <Clock className="w-5 h-5 text-blue-600" />
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-gray-600 text-sm mb-3">Office Hours</p>
//                       <div className="space-y-2 text-sm">
//                         <div className="flex justify-between items-center">
//                           <span className="text-gray-600">Monday - Friday</span>
//                           <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
//                         </div>
//                         <div className="flex justify-between items-center">
//                           <span className="text-gray-600">Saturday</span>
//                           <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM</span>
//                         </div>
//                         <div className="flex justify-between items-center">
//                           <span className="text-gray-600">Sunday</span>
//                           <span className="font-semibold text-gray-900">Closed</span>
//                         </div>
//                       </div>
                      
//                       {/* Available Status */}
//                       <div className="mt-4 pt-4 border-t border-gray-100">
//                         <div className="flex items-center space-x-2">
//                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                           <span className="text-sm text-gray-600">Available now - Quick response within 24 hours</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes fade-in-down {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slide-in-left {
//           from {
//             opacity: 0;
//             transform: translateX(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slide-in-right {
//           from {
//             opacity: 0;
//             transform: translateX(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         .animate-fade-in-down {
//           animation: fade-in-down 0.8s ease-out;
//         }

//         .animate-slide-in-left {
//           animation: slide-in-left 0.8s ease-out;
//         }

//         .animate-slide-in-right {
//           animation: slide-in-right 0.8s ease-out 0.2s both;
//         }
//       `}</style>
//     </div>
//   );
// }






// MAINTAINCE CODE - FOR CLIENT PAGE

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