// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { Home, Briefcase, FolderKanban, Phone, Info } from 'lucide-react';

// const navItems = [
//   { name: 'Home', href: '/', icon: Home },
//   { name: 'Services', href: '/services', icon: Briefcase },
//   { name: 'Projects', href: '/projects', icon: FolderKanban },
//   { name: 'About', href: '/about', icon: Info },
//   { name: 'Contact', href: '/contact', icon: Phone },
// ];

// export function BottomNav() {
//   const pathname = usePathname();

//   return (
//     <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
//       <div className="grid grid-cols-5 h-16">
//         {navItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = pathname === item.href;

//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
//                 isActive
//                   ? 'text-blue-600'
//                   : 'text-gray-500 hover:text-blue-600'
//               }`}
//             >
//               <Icon className="w-5 h-5" />
//               <span className="text-xs font-medium">{item.name}</span>
//             </Link>
//           );
//         })}
//       </div>
//     </nav>
//   );
// }
