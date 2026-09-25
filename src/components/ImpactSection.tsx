import React from 'react';
import { Eye, Award, Users, TrendingUp, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_LINK } from './Navbar';

export const ImpactSection: React.FC = () => {
  const growthPillars = [
    {
      step: '01',
      title: 'MAIS VISIBILIDADE',
      subtitle: 'Apareça onde seus clientes pesquisam',
      desc: 'Sua empresa no topo do Google Maps, pesquisas locais e canais diretos.',
      icon: Eye,
      accent: 'from-[#16A34A]/20 to-emerald-950/40',
      badgeColor: 'text-[#22C55E]',
      heightLevel: 'h-[160px] sm:h-[180px]',
    },
    {
      step: '02',
      title: 'MAIS CONFIANÇA',
      subtitle: 'Autoridade imediata e reputação sólida',
      desc: 'Biosite com acabamento profissional, fotos em alta resolução e avaliações 5 estrelas.',
      icon: Award,
      accent: 'from-[#0EA58F]/20 to-teal-950/40',
      badgeColor: 'text-[#14B8A6]',
      heightLevel: 'h-[180px] sm:h-[210px]',
    },
    {
      step: '03',
      title: 'MAIS CLIENTES',
      subtitle: 'Sem atrito, do toque ao contato',
      desc: 'Placas NFC instantâneas, QR Codes estratégicos e um clique direto para o WhatsApp.',
      icon: Users,
      accent: 'from-[#16A34A]/25 to-emerald-900/40',
      badgeColor: 'text-[#22C55E]',
      heightLevel: 'h-[200px] sm:h-[240px]',
    },
    {
      step: '04',
      title: 'MAIS RESULTADOS',
      subtitle: 'Crescimento constante e escalável',
      desc: 'Tráfego direcionado para sua região e clientes prontos para fechar negócio.',
      icon: TrendingUp,
      accent: 'from-[#84CC16]/25 to-lime-950/40',
      badgeColor: 'text-[#84CC16]',
      heightLevel: 'h-[220px] sm:h-[270px]',
    },
  ];

  return (
    <section id="o-que-fazemos" className="relative py-24 sm:py-32 bg-[#0A1020] border-y border-slate-800/60 overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#16A34A]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0EA58F]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#22C55E] mb-3">
            O que a GabeUp faz
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight mb-6">
            Seu negócio precisa ser encontrado.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4">
            Estar no digital não é apenas ter uma rede social. É estar presente no momento em que o cliente procura, compara, avalia e decide comprar.
          </p>
          <p className="text-sm sm:text-base font-semibold text-[#14B8A6]">
            A GabeUp Digital cria soluções que conectam negócios locais a novos clientes.
          </p>
        </div>

        {/* Upward Growth Composition (Escada Ascendente de Crescimento) */}
        <div className="relative pt-8 pb-4">
          {/* Ascending Trend Line Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-[#16A34A]/15 text-[#22C55E] border border-[#16A34A]/30">
                <TrendingUp className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-white font-display">
                  Evolução Digital do Seu Negócio
                </h3>
                <p className="text-xs text-slate-300">
                  Cada etapa potencializa a próxima em movimento ascendente contínuo
                </p>
              </div>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#16A34A] hover:text-[#22c55e] transition-colors"
            >
              <span>Subir de nível agora</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Ascending Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            {growthPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group relative flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-[#16A34A]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_-10px_rgba(11,61,46,0.5)]"
                >
                  {/* Subtle top indicator bar */}
                  <div className="absolute -top-px left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#16A34A]/60 to-transparent group-hover:via-[#84CC16] transition-all" />

                  <div>
                    {/* Step Index & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-slate-300 transition-colors">
                        Fase {pillar.step}
                      </span>
                      <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:bg-[#16A34A]/20 group-hover:border-[#16A34A]/40 transition-colors">
                        <Icon className={`w-5 h-5 ${pillar.badgeColor}`} />
                      </div>
                    </div>

                    {/* Pillar Title */}
                    <h4 className={`text-lg font-display font-black tracking-tight mb-1.5 ${pillar.badgeColor}`}>
                      {pillar.title}
                    </h4>

                    {/* Subtitle */}
                    <p className="text-xs font-medium text-slate-300 mb-3">
                      {pillar.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Growth Chevron Accent */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-medium group-hover:text-slate-300">
                    <span>Evolução contínua</span>
                    <span className="text-[#16A34A] font-bold">▲ +{25 * (idx + 1)}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
