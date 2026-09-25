import React from 'react';
import { Star, Quote, Building2, MapPin } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  business: string;
  segment: string;
  city: string;
  quote: string;
  solution: string;
  rating: number;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Dr. Rodrigo Menezes',
      role: 'Médico Proprietário',
      business: 'Clínica OdontoArt',
      segment: 'Saúde & Odontologia',
      city: 'São Paulo, SP',
      quote:
        'A placa NFC no balcão e a reestruturação da nossa ficha no Google mudaram completamente nossa rotina. Os pacientes elogiam a tecnologia moderna e nossas avaliações 5 estrelas dispararam de forma natural. O profissionalismo da GabeUp nos colocou em outro nível.',
      solution: 'Placa NFC + Otimização Google',
      rating: 5,
    },
    {
      name: 'Camila Fernandes',
      role: 'Fundadora & Chef',
      business: 'Bistrô & Café Alecrim',
      segment: 'Gastronomia Local',
      city: 'Curitiba, PR',
      quote:
        'Antes os clientes se perdiam procurando cardápio e nosso Instagram em redes desconexas. Com o biosite elegante e a experiência 360 do salão, quem pesquisa nosso restaurante já sente segurança imediata antes de reservar. Tecnologia prática que gera vendas.',
      solution: 'Biosite + Tour 360°',
      rating: 5,
    },
    {
      name: 'Lucas Barreto',
      role: 'Sócio-Diretor',
      business: 'Barbearia Vintage Club',
      segment: 'Beleza & Estética',
      city: 'Belo Horizonte, MG',
      quote:
        'O tráfego pago focado no nosso bairro combinado ao botão direto do WhatsApp aumentou a nossa taxa de agendamento em horários que ficavam ociosos. A GabeUp entendeu exatamente a dinâmica de negócio local sem promessas vazias.',
      solution: 'Tráfego Pago + Biosite',
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="relative py-24 sm:py-32 bg-[#0A1022] border-t border-slate-800/80">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#0B3D2E]/20 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#16A34A] mb-3">
            Confiança & Resultados
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Quem subiu de nível com a GabeUp.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Experiências reais de negócios locais que transformaram sua presença digital em autoridade e novos clientes.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.business}
              className="group relative p-7 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-[#16A34A]/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-700 group-hover:text-[#16A34A]/40 transition-colors" />
                </div>

                {/* Quote Content */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Client & Business Meta */}
              <div className="pt-6 border-t border-slate-800/80">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-base font-display font-bold text-white">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {item.role} · <strong className="text-slate-200 font-semibold">{item.business}</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-3 border-t border-slate-800/40">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#16A34A]" />
                    {item.city}
                  </span>
                  <span className="text-[#0EA58F] font-medium">
                    {item.solution}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
