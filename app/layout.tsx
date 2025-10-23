import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';

import { FloatingCTA } from '@/components/FloatingCTA';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BCN MEP - Turnkey MEP Solutions | Electrical & Plumbing Contractors',
  description: 'Leading MEP contractor providing complete electrical, plumbing, HVAC, and fire-fighting solutions. Turnkey MEPF design and execution for industrial, commercial & residential projects since 2020.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      
        <FloatingCTA />
        <Toaster />
      </body>
    </html>
  );
}
