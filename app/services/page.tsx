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




      {/* ===== SERVICES SECTION END ===== */}



      //  CONSTRUCTING THIS PAGE- THIS IS CONSTRUCTION PAGE COMPONENT 

      