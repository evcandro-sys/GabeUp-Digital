import React, { useState } from 'react';
import { WhatsApp3DIcon } from './Logo';
import { WHATSAPP_LINK } from './Navbar';

export const FloatingWhatsApp: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <aside aria-label="Atendimento Rápido" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip badge on hover or always subtle on desktop */}
      <div
        className={`hidden sm:flex items-center px-3.5 py-2 rounded-xl bg-slate-900/95 border border-[#16A34A]/40 text-xs font-semibold text-white shadow-xl shadow-black/50 transition-all duration-300 pointer-events-none backdrop-blur-md ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="flex h-2 w-2 relative mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16A34A]"></span>
        </span>
        Fale com a GabeUp
      </div>

      {/* Floating Action Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#1EBE5D] p-3 shadow-[0_10px_25px_rgba(22,163,74,0.5)] hover:shadow-[0_15px_35px_rgba(22,163,74,0.7)] transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/30"
        aria-label="Falar com a GabeUp no WhatsApp"
      >
        {/* Pulsing ring indicator */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        
        <WhatsApp3DIcon size={36} className="pointer-events-none" />
      </a>
    </aside>
  );
};
