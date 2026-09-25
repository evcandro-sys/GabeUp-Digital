import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Store, Utensils, Scissors, Stethoscope, Briefcase } from 'lucide-react';
import { WHATSAPP_LINK } from './Navbar';

interface BusinessType {
  id: string;
  name: string;
  icon: React.ElementType;
  primaryNeed: string;
  recommended: string[];
  impact: string;
  whatsappMsg: string;
}

export const LocalBusinessSimulator: React.FC = () => {
  const businessTypes: BusinessType[] = [
    {
      id: 'alimentacao',
      name: 'Restaurante / Cafeteria / Bar',
      icon: Utensils,
      primaryNeed: 'Cardápio digital rápido, avaliações Google 5★ e reservas no WhatsApp',
      recommended: ['Placa NFC de Balcão e Mesas', 'Perfil do Google Otimizado', 'Biosite com Cardápio', 'Tour 360°'],
      impact: 'Fim dos cardápios em PDF pesados e aumento massivo de avaliações espontâneas.',
      whatsappMsg: 'Olá GabeUp! Tenho um Restaurante/Bar e gostaria de implantar Placas NFC para cardápio e avaliações no Google!',
    },
    {
      id: 'saude',
      name: 'Clínica / Consultório / Odonto',
      icon: Stethoscope,
      primaryNeed: 'Credibilidade profissional, agendamentos rápidos e avaliações de pacientes',
      recommended: ['Biosite Profissional com Especialidades', 'Ficha Google Verificada', 'Placa NFC na Recepção', 'Campanhas de Tráfego Local'],
      impact: 'Autoridade médica imediata ao ser pesquisado e facilidade no agendamento.',
      whatsappMsg: 'Olá GabeUp! Tenho uma Clínica/Consultório e quero elevar a presença digital e avaliações com vocês.',
    },
    {
      id: 'beleza',
      name: 'Salão de Beleza / Barbearia / Estética',
      icon: Scissors,
      primaryNeed: 'Agendamentos sem atrito, portfólio no Instagram e fidelização no balcão',
      recommended: ['Placa NFC no Espelho/Balcão', 'Biosite com Botão de Agendamento', 'Gestão de Reputação Google', 'Tráfego no Bairro'],
      impact: 'Preenchimento de horários vazios com anúncios no raio de 3 a 5 km da sua loja.',
      whatsappMsg: 'Olá GabeUp! Tenho uma Barbearia/Salão e quero o Biosite com agendamento e a Placa NFC!',
    },
    {
      id: 'varejo',
      name: 'Loja / Comércio / Boutique',
      icon: Store,
      primaryNeed: 'Catálogo de produtos acessível e atração de clientes físicos da cidade',
      recommended: ['Placa NFC no Caixa para Instagram/WhatsApp', 'Google Maps Otimizado com Fotos', 'Catálogo Digital Integrado'],
      impact: 'O cliente que comprou uma vez segue suas redes na hora e compra novamente.',
      whatsappMsg: 'Olá GabeUp! Tenho uma Loja/Comércio e quero a Placa NFC para balcão e perfil no Google.',
    },
    {
      id: 'servicos',
      name: 'Escritório / Autônomo / Serviços',
      icon: Briefcase,
      primaryNeed: 'Passar imagem de grande empresa e centralizar propostas em um link seguro',
      recommended: ['Biosite Corporativo Premium', 'Cartão NFC Digital', 'Tráfego Segmentado B2B / B2C'],
      impact: 'Apresentação impecável ao enviar link para novos clientes ou em reuniões.',
      whatsappMsg: 'Olá GabeUp! Sou profissional autônomo/prestador de serviços e quero um Biosite premium para minha marca.',
    },
  ];

  const [activeType, setActiveType] = useState<BusinessType>(businessTypes[0]);

  const getWhatsAppUrl = (msg: string) => {
    return `${WHATSAPP_LINK}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="relative py-20 sm:py-28 bg-[#090E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#16A34A] mb-2">
            Simulador de Presença
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white mb-3">
            Descubra a combinação ideal para o seu segmento.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Selecione a área do seu negócio e veja quais soluções geram o retorno mais rápido:
          </p>
        </div>

        {/* Business Segment Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {businessTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = activeType.id === type.id;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => setActiveType(type)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isSelected
                    ? 'bg-[#16A34A] text-white shadow-lg shadow-[#16A34A]/30 scale-[1.02]'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{type.name.split('/')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Diagnostic Output Box */}
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-semibold text-[#0EA58F] uppercase tracking-wider">
                Diagnóstico Personalizado
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                {activeType.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {activeType.primaryNeed}
              </p>
            </div>

            <a
              href={getWhatsAppUrl(activeType.whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#16A34A] to-[#0EA58F] hover:from-[#15803d] hover:to-[#0f766e] rounded-xl shadow-md transition-all active:scale-[0.98] shrink-0"
            >
              <span>Consultar Estratégia no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Soluções Recomendadas GabeUp:
              </h4>
              <div className="space-y-2.5">
                {activeType.recommended.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex flex-col justify-center">
              <span className="text-[11px] font-mono text-[#84CC16] uppercase font-bold mb-1">
                Impacto no Negócio:
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeType.impact}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
