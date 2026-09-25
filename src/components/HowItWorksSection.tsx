import React from 'react';
import { MessageSquare, Target, Wrench, Rocket, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_LINK } from './Navbar';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Você fala com a gente',
      desc: 'Entendemos seu negócio e sua necessidade atual sem complicação.',
      icon: MessageSquare,
      highlight: 'Primeiro contato rápido via WhatsApp',
    },
    {
      num: '02',
      title: 'Criamos a estratégia',
      desc: 'Escolhemos as soluções mais adequadas para o seu tipo de cliente e localidade.',
      icon: Target,
      highlight: 'Plano sob medida para o seu orçamento',
    },
    {
      num: '03',
      title: 'Colocamos em prática',
      desc: 'Configuramos, criamos, produzimos e implementamos cada canal e produto.',
      icon: Wrench,
      highlight: 'Execução ágil e suporte dedicado',
    },
    {
      num: '04',
      title: 'Seu negócio sobe de nível',
      desc: 'Você passa a ter uma presença digital mais profissional e preparada para gerar oportunidades.',
      icon: Rocket,
      highlight: 'Mais clientes e autoridade consolidada',
    },
  ];

  return (
    <section id="como-funciona" className="relative py-24 sm:py-32 bg-[#090E1A] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#16A34A]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#16A34A] mb-3">
            Passo a Passo
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Como funciona nossa parceria.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Processo transparente, direto e sem burocracia para transformar a presença do seu estabelecimento.
          </p>
        </div>

        {/* 4 Steps Connected with Ascending Path */}
        <div className="relative">
          {/* Desktop Ascending Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 -translate-y-8 bg-gradient-to-r from-slate-800 via-[#16A34A]/60 to-[#84CC16] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-[#16A34A]/50 shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
                >
                  {/* Step Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/80 group-hover:bg-[#16A34A]/20 group-hover:border-[#16A34A]/40 flex items-center justify-center transition-colors">
                        <Icon className="w-6 h-6 text-[#16A34A]" />
                      </div>
                      <span className="font-mono text-2xl font-black text-slate-600 group-hover:text-[#16A34A] transition-colors">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 text-[11px] font-medium text-[#0EA58F]">
                    ✓ {step.highlight}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-14 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#16A34A] to-[#0EA58F] hover:from-[#15803d] hover:to-[#0f766e] rounded-xl shadow-lg shadow-[#16A34A]/20 transition-all duration-200 active:scale-[0.98]"
          >
            <span>Iniciar no Passo 01 pelo WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
