import React from 'react';
import { GabeUpLogo } from './Logo';
import { ShieldCheck, Compass, Sparkles, TrendingUp } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="relative py-24 sm:py-32 bg-[#0A1020] border-t border-slate-800/80">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#0B3D2E]/25 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Brand Column */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-center">
              <GabeUpLogo size="lg" showSlogan={false} className="mb-4" />
              <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-[#16A34A] to-transparent my-3" />
              <p className="text-xs text-slate-400 font-medium tracking-wider">
                GabeUp Digital
              </p>
              <p className="text-[11px] text-[#16A34A] font-semibold mt-0.5">
                Elevando negócios no digital.
              </p>
            </div>

            {/* Authentic Brand Text Column */}
            <div className="lg:col-span-8">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#16A34A] mb-3">
                Sobre a GabeUp
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight mb-6">
                Tecnologia para aproximar negócios e pessoas.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                <p>
                  A GabeUp Digital nasceu para tornar soluções digitais mais simples e acessíveis aos negócios locais.
                </p>
                <p>
                  Nossa missão é ajudar empresas a utilizarem tecnologia, presença digital e ferramentas inteligentes para se tornarem mais visíveis, profissionais e conectadas aos seus clientes.
                </p>
                <p className="text-slate-200 font-medium">
                  A palavra <span className="text-[#16A34A] font-bold">GabeUp</span> representa crescimento, evolução e movimento contínuo: cada ação é pensada para fazer o seu negócio subir de patamar no mercado da sua cidade.
                </p>
              </div>

              {/* Guiding Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <span>Confiança & Transparência</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <TrendingUp className="w-4 h-4 text-[#0EA58F] shrink-0" />
                  <span>Foco em Crescimento</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Compass className="w-4 h-4 text-[#84CC16] shrink-0" />
                  <span>Tecnologia Prática</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
