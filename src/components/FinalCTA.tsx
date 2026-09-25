import React from 'react';
import { GabeUpLogo, WhatsApp3DIcon, Instagram3DIcon } from './Logo';
import { WHATSAPP_LINK, INSTAGRAM_LINK } from './Navbar';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#070C16] border-t border-slate-800/80 overflow-hidden text-center">
      {/* Intense Emerald Backlight & Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-b from-[#16A34A]/25 via-[#0B3D2E]/40 to-transparent rounded-full blur-[160px]" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#060A12] to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Large 3D GabeUp Digital Brand Logo */}
        <div className="p-5 sm:p-7 rounded-3xl bg-slate-900/90 border border-[#16A34A]/40 shadow-[0_20px_50px_rgba(22,163,74,0.35)] backdrop-blur-xl mb-8 transform transition-transform hover:scale-105 duration-300">
          <GabeUpLogo size="xl" showSlogan={false} />
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight mb-6 text-balance">
          Seu negócio está pronto para subir de nível?
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-10 text-balance">
          Vamos construir uma presença digital que represente o potencial da sua empresa.
        </p>

        {/* Big WhatsApp Action Button */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-4 px-10 py-5 text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-[#16A34A] via-[#22C55E] to-[#0EA58F] hover:brightness-110 rounded-2xl shadow-[0_15px_45px_-5px_rgba(22,163,74,0.6)] transition-all duration-300 active:scale-[0.98] border border-white/20 mb-4"
        >
          <WhatsApp3DIcon size={36} />
          <span className="tracking-wide">FALAR COM A GABEUP</span>
          <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
        </a>

        <p className="text-xs sm:text-sm text-slate-400 font-medium mb-12">
          Atendimento direto e personalizado pelo WhatsApp
        </p>

        {/* Official Channels Grid with 3D Icons */}
        <div className="pt-8 border-t border-slate-800/80 w-full max-w-xl flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#16A34A]/50 transition-all hover:-translate-y-1 w-full sm:w-auto"
          >
            <WhatsApp3DIcon size={36} />
            <div className="text-left">
              <span className="text-xs text-slate-400 block font-medium">Canal Oficial</span>
              <strong className="text-sm font-semibold text-white">WhatsApp Comercial</strong>
            </div>
          </a>

          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#E1306C]/50 transition-all hover:-translate-y-1 w-full sm:w-auto"
          >
            <Instagram3DIcon size={36} />
            <div className="text-left">
              <span className="text-xs text-slate-400 block font-medium">Siga no Instagram</span>
              <strong className="text-sm font-semibold text-white">@gabeupdigital</strong>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
