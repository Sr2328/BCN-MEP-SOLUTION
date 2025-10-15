'use client';

import { MessageCircle } from 'lucide-react';

export function FloatingCTA() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20services.', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-20 md:bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
