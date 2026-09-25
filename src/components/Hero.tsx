import React from 'react';
import { GabeUpLogo, WhatsApp3DIcon } from './Logo';
import { WHATSAPP_LINK } from './Navbar';
import { ArrowDown, TrendingUp, ShieldCheck, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Decorative Tech Elements & Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Soft Radial Emerald & Teal Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#0B3D2E]/50 via-[#16A34A]/20 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[420px] h-[420px] bg-[#0EA58F]/15 rounded-full blur-[120px]" />
        <div className="absolute top-20 left-10 w-[380px] h-[380px] bg-[#16A34A]/10 rounded-full blur-[100px]" />

        {/* Subtle geometric perspective grid & digital connection lines */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(22, 163, 74, 0.7) 1px, transparent 1px), radial-gradient(rgba(14, 165, 143, 0.4) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            backgroundPosition: '0 0, 24px 24px'
          }}
        />

        {/* Ambient upward rising light beams */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#090E1A] via-transparent to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Kicker / Brand Statement */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner mb-8 backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16A34A]"></span>
          </span>
          <span className="text-xs font-medium text-slate-300 tracking-wide">
            Soluções Digitais para Negócios Locais
          </span>
          <span className="text-slate-600 text-xs">|</span>
          <span className="text-xs font-medium text-[#16A34A] flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            Crescimento Real
          </span>
        </div>

        {/* Centerpiece: Large 3D GabeUp Digital Brand Display */}
        <div className="relative mb-6 transform transition-all duration-500 hover:scale-[1.02]">
          <div className="p-4 sm:p-6 rounded-3xl bg-gradient-to-b from-slate-800/40 via-slate-900/60 to-slate-950/80 border border-white/10 shadow-[0_25px_60px_-15px_rgba(11,61,46,0.6)] backdrop-blur-xl">
            <GabeUpLogo size="xl" showSlogan={false} />
          </div>
        </div>

        {/* Official Slogan */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight mb-4 text-balance">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
            Elevando negócios
          </span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A34A] via-[#22C55E] to-[#84CC16]">
            no digital.
          </span>
        </h1>

        {/* Core Value Proposition Subheadline */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal mb-10 text-balance">
          Transformamos presença digital em visibilidade, confiança e novas oportunidades para o seu negócio.
        </p>

        {/* Dual Primary Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          {/* Main CTA: Falar pelo WhatsApp */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#16A34A] via-[#15803d] to-[#0EA58F] rounded-2xl shadow-[0_12px_32px_-6px_rgba(22,163,74,0.5)] hover:shadow-[0_18px_40px_-6px_rgba(22,163,74,0.7)] transition-all duration-300 active:scale-[0.98] border border-white/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <WhatsApp3DIcon size={30} />
            <span className="tracking-wide">Falar pelo WhatsApp</span>
          </a>

          {/* Secondary CTA: Conhecer Soluções */}
          <a
            href="#solucoes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white rounded-2xl border border-slate-700/80 transition-all duration-300 active:scale-[0.98] backdrop-blur-sm"
          >
            <span>Conhecer soluções</span>
            <ArrowDown className="w-4 h-4 text-[#16A34A] animate-bounce" />
          </a>
        </div>

        {/* Segment pill-free trust indicators for Brazilian Local Markets */}
        <div className="pt-6 border-t border-slate-800/60 max-w-3xl w-full flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
            Soluções Sob Medida Para:
          </span>
          <span>Restaurantes & Bares</span>
          <span className="text-slate-600">·</span>
          <span>Clínicas & Consultórios</span>
          <span className="text-slate-600">·</span>
          <span>Salões & Barbearias</span>
          <span className="text-slate-600">·</span>
          <span>Lojas & Varejo</span>
          <span className="text-slate-600">·</span>
          <span>Profissionais Autônomos</span>
        </div>
      </div>
    </section>
  );
};
