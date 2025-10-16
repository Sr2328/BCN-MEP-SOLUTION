// 'use client';
// import { motion } from 'framer-motion';
// import { Star, Quote } from 'lucide-react';
// import { Card } from '@/components/ui/card';

// export function TestimonialsSection() {
//   const testimonials = [
//     {
//       id: 1,
//       name: 'Rahul Mehta',
//       position: 'Project Engineer',
//       company: 'BlueArc MEP Ltd.',
//       content: 'The MEP team delivered beyond expectations. Their coordination, design efficiency, and on-site execution made our project seamless.',
//       rating: 5,
//       avatar: 'https://i.postimg.cc/nhTtF8wH/7122c1ac1382dea3563d776c1f158654.jpg',
//       size: 'large',
//       layout: 'quote-top'
//     },
//     {
//       id: 2,
//       name: 'Sara Lopez',
//       position: 'Operations Head',
//       company: 'Vertex InfraTech',
//       content: 'Professional, responsive, and deeply knowledgeable. Working with MEP Solutions was a pleasure from start to finish.',
//       rating: 5,
//       avatar: '/avatars/avatar2.png',
//       size: 'medium',
//       layout: 'centered'
//     },
//     {
//       id: 3,
//       name: 'Mohammed Irfan',
//       position: 'Mechanical Consultant',
//       company: 'BuildPro Systems',
//       content: 'A highly skilled team that understands MEP integration at every level.',
//       rating: 5,
//       avatar: '/avatars/avatar3.png',
//       size: 'large',
//       layout: 'hero'
//     },
//     {
//       id: 4,
//       name: 'Emily Carter',
//       position: 'Facilities Manager',
//       company: 'GreenSquare Estates',
//       content: 'Top-tier quality and reliable communication throughout our project. Their proactive approach made a real difference.',
//       rating: 5,
//       avatar: '/avatars/avatar4.png',
//       size: 'small',
//       layout: 'compact'
//     },
//     {
//       id: 5,
//       name: 'Vikram Das',
//       position: 'Senior Engineer',
//       company: 'NovaBuild Tech',
//       content: 'Outstanding experience — their energy modeling and HVAC coordination exceeded expectations!',
//       rating: 4,
//       avatar: '/avatars/avatar5.png',
//       size: 'medium',
//       layout: 'quote-bottom'
//     },
//     {
//       id: 6,
//       name: 'Priya Singh',
//       position: 'Site Manager',
//       company: 'CoreBuild Solutions',
//       content: 'Even serious enterprises love modern, fun touches. Supports us again for medium flexibility.',
//       rating: 5,
//       avatar: '/avatars/avatar6.png',
//       size: 'medium',
//       layout: 'stars-top'
//     },
//     {
//       id: 7,
//       name: 'David Chen',
//       position: 'Technical Lead',
//       company: 'UrbanSpaces Inc.',
//       content: 'Attention to detail and commitment to quality that truly stands out.',
//       rating: 5,
//       avatar: '/avatars/avatar7.png',
//       size: 'small',
//       layout: 'minimal'
//     },
//   ];

//   return (
//     <section className="py-24 bg-gray-50 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
//             What Our Clients Say
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Trusted by leading developers and consultants across the MEP industry
//           </p>
//         </motion.div>

//         {/* Masonry Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-auto">
          
//           {/* Card 1 - Top Left Quote */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="col-span-1 md:col-span-3 lg:col-span-4 row-span-1"
//           >
//             <Card className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full border-0">
//               <Quote className="w-8 h-8 text-gray-300 mb-3" />
//               <p className="text-sm text-gray-700 mb-4 leading-relaxed">
//                 {testimonials[0].content}
//               </p>
//               <div className="flex items-center gap-3 mt-auto">
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
//                   {testimonials[0].name.split(' ').map(n => n[0]).join('')}
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-900 text-sm">{testimonials[0].name}</p>
//                   <p className="text-xs text-gray-500">{testimonials[0].position}</p>
//                 </div>
//               </div>
//             </Card>
//           </motion.div>

//           {/* Card 2 - Stars with centered layout */}
//           <motion.div
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="col-span-1 md:col-span-3 lg:col-span-3 row-span-1"
//           >
//             <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full border-0 text-center">
//               <div className="flex justify-center gap-1 mb-3">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                 ))}
//               </div>
//               <p className="font-bold text-gray-900 mb-2">I really appreciate!</p>
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 {testimonials[1].content}
//               </p>
//             </Card>
//           </motion.div>

//           {/* Card 3 - Hero Card with Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="col-span-1 md:col-span-6 lg:col-span-5 row-span-2"
//           >
//             <Card className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-0 flex flex-col items-center text-center">
//               <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-pink-300 to-purple-400 mb-6 flex items-center justify-center overflow-hidden">
//                 <span className="text-4xl text-white font-bold">
//                   {testimonials[2].name.split(' ').map(n => n[0]).join('')}
//                 </span>
//               </div>
//               <p className="text-gray-700 mb-4 leading-relaxed max-w-sm">
//                 {testimonials[2].content}
//               </p>
//               <div className="mt-auto">
//                 <p className="font-bold text-gray-900 text-lg">{testimonials[2].name}</p>
//                 <p className="text-sm text-gray-600">{testimonials[2].position}</p>
//                 <p className="text-xs text-gray-500">{testimonials[2].company}</p>
//               </div>
//             </Card>
//           </motion.div>

//           {/* Card 4 - Small quote right */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="col-span-1 md:col-span-3 lg:col-span-4 row-span-1"
//           >
//             <Card className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full border-0">
//               <div className="flex items-start gap-3 mb-3">
//                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
//                   {testimonials[3].name.split(' ').map(n => n[0]).join('')}
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-900 text-sm">{testimonials[3].name}</p>
//                   <p className="text-xs text-gray-500">{testimonials[3].company}</p>
//                 </div>
//               </div>
//               <p className="text-sm text-gray-700 leading-relaxed">
//                 {testimonials[3].content}
//               </p>
//             </Card>
//           </motion.div>

//           {/* Card 5 - I was very impressed */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="col-span-1 md:col-span-3 lg:col-span-4 row-span-1"
//           >
//             <Card className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full border-0">
//               <p className="font-bold text-gray-900 mb-3">I was very impressed!</p>
//               <p className="text-sm text-gray-600 mb-4 leading-relaxed">
//                 {testimonials[4].content}
//               </p>
//               <div className="flex gap-2">
//                 {[...Array(3)].map((_, i) => (
//                   <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-300 to-indigo-400 flex items-center justify-center text-white text-xs font-semibold">
//                     {String.fromCharCode(65 + i)}
//                   </div>
//                 ))}
//               </div>
//             </Card>
//           </motion.div>


//           {/* Card 6 - Stars with content */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             className="col-span-1 md:col-span-3 lg:col-span-4 row-span-1"
//           >
//             <Card className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full border-0">
//               <div className="flex gap-1 mb-3">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                 ))}
//               </div>
//               <p className="text-sm text-gray-700 leading-relaxed mb-4">
//                 {testimonials[5].content}
//               </p>
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-xs font-bold">
//                   PS
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-900 text-xs">{testimonials[5].name}</p>
//                   <p className="text-xs text-gray-500">{testimonials[5].position}</p>
//                 </div>
//               </div>
//             </Card>
//           </motion.div>

//           {/* Card 7 - Compact quote */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//             className="col-span-1 md:col-span-6 lg:col-span-4 row-span-1"
//           >
//             <Card className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full border-0">
//               <p className="text-sm text-gray-700 mb-4 leading-relaxed">
//                 {testimonials[6].content}
//               </p>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-semibold">
//                     DC
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900 text-sm">{testimonials[6].name}</p>
//                     <p className="text-xs text-gray-500">{testimonials[6].company}</p>
//                   </div>
//                 </div>
//                 <Quote className="w-8 h-8 text-gray-200" />
//               </div>
//             </Card>
//           </motion.div>

//         </div>
//       </div>

     
//     </section>
//   );
// }




'use client';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Rahul Mehta',
      position: 'Project Engineer',
      company: 'BlueArc MEP Ltd.',
      content: 'The MEP team delivered beyond expectations. Their coordination, design efficiency, and on-site execution made our project seamless.',
      rating: 5,
      avatar: 'https://i.postimg.cc/nhTtF8wH/7122c1ac1382dea3563d776c1f158654.jpg',
    },
    {
      id: 2,
      name: 'Sara Lopez',
      position: 'Operations Head',
      company: 'Vertex InfraTech',
      content: 'Professional, responsive, and deeply knowledgeable. Working with MEP Solutions was a pleasure from start to finish.',
      rating: 5,
      avatar: 'https://i.postimg.cc/3R6c9G0k/avatar2.jpg',
    },
    {
      id: 3,
      name: 'Mohammed Irfan',
      position: 'Mechanical Consultant',
      company: 'BuildPro Systems',
      content: 'A highly skilled team that understands MEP integration at every level, delivering precision, reliability, and innovation across every phase of a project — from concept to commissioning. Their proactive approach ensures seamless coordination and long-term system efficiency.',
      rating: 5,
      avatar: 'https://i.postimg.cc/gJKZ22R5/3d7d8d2bceb05603450e75812059aa79.jpg',
    },
    {
      id: 4,
      name: 'Emily Carter',
      position: 'Facilities Manager',
      company: 'GreenSquare Estates',
      content: 'Top-tier quality and reliable communication throughout our project. Their proactive approach made a real difference.',
      rating: 5,
      avatar: 'https://i.postimg.cc/zDCr3Ryr/555c69cf40ce8a3029de1f2e7f661b10.jpg',
    },
    {
      id: 5,
      name: 'Vikram Das',
      position: 'Senior Engineer',
      company: 'NovaBuild Tech',
      content: 'Outstanding experience — their energy modeling and HVAC coordination exceeded expectations!',
      rating: 4,
      avatar: 'https://i.postimg.cc/FHjc6kZr/avatar5.jpg',
    },
    {
      id: 6,
      name: 'Priya Singh',
      position: 'Site Manager',
      company: 'CoreBuild Solutions',
      content: 'Even serious enterprises love modern, fun touches. Supports us again for medium flexibility.',
      rating: 5,
      avatar: 'https://i.postimg.cc/Y09h2ftk/7b0551406cd7936252123558aacc9191.jpg',
    },
    {
      id: 7,
      name: 'David Chen',
      position: 'Technical Lead',
      company: 'UrbanSpaces Inc.',
      content: 'Attention to detail and commitment to quality that truly stands out.',
      rating: 5,
      avatar: 'https://i.postimg.cc/3N4YbLKD/e3a4471d3a02c7591c6f59e4bc171ac3.jpg',
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            Clients {''}
            </span>
              Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading developers and consultants across the MEP industry
          </p>
        </motion.div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-auto">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-3 lg:col-span-4"
          >
            <Card className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-0 h-full">
              <Quote className="w-8 h-8 text-gray-300 mb-3" />
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                {testimonials[0].content}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                  <Image
                    src={testimonials[0].avatar}
                    alt={testimonials[0].name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{testimonials[0].name}</p>
                  <p className="text-xs text-gray-500">{testimonials[0].position}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 md:col-span-3 lg:col-span-3"
          >
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full border-0 text-center">
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="font-bold text-gray-900 mb-2">I really appreciate!</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {testimonials[1].content}
              </p>
              <div className="mt-4 flex justify-center">
                <Image
                  src="https://i.postimg.cc/ZYC70WV9/a9c7cc023b446f3e14d084c9ae4def35.jpg"
                  alt={testimonials[1].name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                />
              </div>
            </Card>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1 md:col-span-6 lg:col-span-5 row-span-2"
          >
            <Card className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-0 flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-gray-100">
                <Image
                  src={testimonials[2].avatar}
                  alt={testimonials[2].name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed max-w-sm">
                {testimonials[2].content}
              </p>
              <div className="mt-auto">
                <p className="font-bold text-gray-900 text-lg">{testimonials[2].name}</p>
                <p className="text-sm text-gray-600">{testimonials[2].position}</p>
                <p className="text-xs text-gray-500">{testimonials[2].company}</p>
              </div>
            </Card>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-1 md:col-span-3 lg:col-span-4"
          >
            <Card className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full border-0">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-200">
                  <Image
                    src={testimonials[3].avatar}
                    alt={testimonials[3].name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{testimonials[3].name}</p>
                  <p className="text-xs text-gray-500">{testimonials[3].company}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {testimonials[3].content}
              </p>
            </Card>
          </motion.div>
 {/* Card 5 - I was very impressed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-1 md:col-span-3 lg:col-span-4 row-span-1"
          >
            <Card className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full border-0">
              <p className="font-bold text-gray-900 mb-3">I was very impressed!</p>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {testimonials[4].content}
              </p>
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-300 to-indigo-400 flex items-center justify-center text-white text-xs font-semibold">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>


          {/* Card 6 - Stars with content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="col-span-1 md:col-span-3 lg:col-span-4 row-span-1"
          >
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full border-0">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                {testimonials[5].content}
              </p>
              <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-200">
                  <Image
                    src={testimonials[5].avatar}
                    alt={testimonials[5].name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-xs">{testimonials[5].name}</p>
                  <p className="text-xs text-gray-500">{testimonials[5].position}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 7 - Compact quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="col-span-1 md:col-span-6 lg:col-span-4 row-span-1"
          >
            <Card className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full border-0">
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                {testimonials[6].content}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-200">
                  <Image
                    src={testimonials[6].avatar}
                    alt={testimonials[6].name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonials[6].name}</p>
                    <p className="text-xs text-gray-500">{testimonials[6].company}</p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-gray-200" />
              </div>
            </Card>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
