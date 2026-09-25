import React, { useState } from 'react';
import { 
  Smartphone, 
  MapPin, 
  Radio, 
  Star, 
  Target, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  QrCode, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { WHATSAPP_LINK } from './Navbar';

// Direct ES imports for bundled asset hashing in production and preview
import biositeMockupImg from '../assets/images/biosite_smartphone_mockup_1790314074873.jpg';
import googleBusinessMockupImg from '../assets/images/google_business_mockup_1790314064170.jpg';
import nfcPlacaMockupImg from '../assets/images/nfc_placa_mockup_1790314052823.jpg';
import marketingDashboardImg from '../assets/images/marketing_growth_dashboard_1790314093352.jpg';
import virtualTour360Img from '../assets/images/virtual_tour_360_mockup_1790314084027.jpg';

export const ServicesSection: React.FC = () => {
  // Interactive NFC Simulation State
  const [nfcTapped, setNfcTapped] = useState(false);
  const [activeNfcTarget, setActiveNfcTarget] = useState<'google' | 'cardapio' | 'whatsapp' | 'instagram'>('google');

  const nfcDestinations = [
    { id: 'google', label: 'Avaliação Google 5★', desc: 'Abre direto na tela de estrelas do Maps' },
    { id: 'whatsapp', label: 'WhatsApp da Loja', desc: 'Inicia conversa com mensagem pronta' },
    { id: 'instagram', label: 'Instagram Oficial', desc: 'Abre perfil para novo seguidor' },
    { id: 'cardapio', label: 'Cardápio / Catálogo', desc: 'Carrega produtos e preços sem app' },
  ];

  const getWhatsAppMessageUrl = (serviceName: string) => {
    const encoded = encodeURIComponent(`Olá, GabeUp Digital! Gostaria de saber mais sobre a solução de: ${serviceName}. Como podemos implementar no meu negócio?`);
    return `${WHATSAPP_LINK}?text=${encoded}`;
  };

  return (
    <section id="solucoes" className="relative py-24 sm:py-32 bg-[#090E1A]">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#0B3D2E]/25 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 left-0 w-[450px] h-[450px] bg-[#0EA58F]/15 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#16A34A] mb-3">
            Serviços Especializados
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight mb-6">
            Soluções para colocar seu negócio em evidência.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Ferramentas modernas projetadas para transformar visitantes casuais em clientes recorrentes e construir autoridade local.
          </p>
        </div>

        {/* ---------------- 01: BIOSITE PROFISSIONAL ---------------- */}
        <div className="mb-20 lg:mb-28 p-6 sm:p-10 lg:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#16A34A] uppercase tracking-wider mb-3">
                <Smartphone className="w-4 h-4" />
                <span>01 — Biosite Profissional</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                Sua marca e serviços em uma única página de alto impacto.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Tenha uma presença digital profissional em uma única página, reunindo sua marca, serviços, contatos, redes sociais e principais informações.
              </p>

              {/* Benefícios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'Presença profissional imediata',
                  'Facilidade de contato para o cliente',
                  'Todos os links em um só lugar',
                  'Excelente para link da bio do Instagram e WhatsApp',
                ].map((beneficio) => (
                  <div key={beneficio} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>{beneficio}</span>
                  </div>
                ))}
              </div>

              <a
                href={getWhatsAppMessageUrl('Biosite Profissional')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#16A34A] to-[#0EA58F] hover:from-[#15803d] hover:to-[#0f766e] rounded-xl shadow-lg shadow-[#16A34A]/25 transition-all duration-200 active:scale-[0.98]"
              >
                <span>Quero meu biosite</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group">
                <img
                  src={biositeMockupImg}
                  alt="Mockup de Smartphone com Biosite Profissional da GabeUp Digital"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-medium bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-sm border border-slate-700/60">
                    Mobile First
                  </span>
                  <span className="text-[#16A34A] font-semibold">Carregamento Ultra-Rápido</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- 02: PERFIL DA EMPRESA NO GOOGLE ---------------- */}
        <div className="mb-20 lg:mb-28 p-6 sm:p-10 lg:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group">
                <img
                  src={googleBusinessMockupImg}
                  alt="Perfil da Empresa no Google Maps com avaliações 5 estrelas"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-medium bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-sm border border-slate-700/60">
                    Google Maps & Busca
                  </span>
                  <span className="text-amber-400 font-semibold flex items-center gap-1">
                    ★★★★★ 5.0
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0EA58F] uppercase tracking-wider mb-3">
                <MapPin className="w-4 h-4" />
                <span>02 — Perfil da Empresa no Google</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-2">
                Seja encontrado exatamente quando o cliente estiver procurando.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Criação, configuração e otimização do Perfil da Empresa no Google para aumentar a presença do negócio nas pesquisas e no Google Maps.
              </p>

              {/* Benefícios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'Maior presença e destaque nas buscas locais',
                  'Informações comerciais e horários profissionais',
                  'Contato facilitado por ligação e rota',
                  'Reputação fortalecida com avaliações reais',
                  'Direcionamento de clientes para seu balcão',
                  'Fotos e produtos em alta definição',
                ].map((beneficio) => (
                  <div key={beneficio} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#0EA58F] shrink-0 mt-0.5" />
                    <span>{beneficio}</span>
                  </div>
                ))}
              </div>

              <a
                href={getWhatsAppMessageUrl('Perfil da Empresa no Google')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all duration-200 active:scale-[0.98]"
              >
                <span>Quero melhorar minha presença no Google</span>
                <ArrowRight className="w-4 h-4 text-[#0EA58F]" />
              </a>
            </div>
          </div>
        </div>

        {/* ---------------- 03: PLACAS NFC + QR CODE (DESTAQUE FÍSICO) ---------------- */}
        <div className="mb-20 lg:mb-28 p-6 sm:p-10 lg:p-14 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0B251D] to-slate-950 border-2 border-[#16A34A]/40 shadow-[0_20px_50px_-10px_rgba(11,61,46,0.6)] relative overflow-hidden">
          {/* Spotlight Badge */}
          <div className="absolute top-0 right-0">
            <div className="bg-gradient-to-l from-[#16A34A] to-[#0EA58F] text-white text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-bl-2xl shadow-md">
              Produto Físico Exclusivo
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#84CC16] uppercase tracking-wider mb-3">
                <Radio className="w-4 h-4 animate-pulse" />
                <span>03 — Placas Inteligentes NFC + QR Code</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white mb-4">
                Transforme um simples toque em uma ação.
              </h3>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-4">
                Com a tecnologia NFC, o cliente aproxima o celular e acessa instantaneamente o conteúdo configurado.
              </p>
              <p className="text-sm font-medium text-[#A7F3D0] mb-6">
                Sem precisar digitar. Sem precisar procurar. Apenas aproximar.
              </p>

              {/* Aplicações práticas */}
              <div className="mb-8 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                  Ideal para balcões, recepções, mesas e caixas:
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Avaliação no Google</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">WhatsApp Comercial</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Instagram da Empresa</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Cardápio Digital</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Chave PIX / Pagamento</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Site & Catálogo</span>
                </div>
              </div>

              {/* Interactive NFC Touch Demo */}
              <div className="mb-8 p-4 rounded-xl bg-[#0F172A]/90 border border-[#16A34A]/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#16A34A]" />
                    Simulador Interativo de Toque NFC:
                  </span>
                  <span className="text-[11px] text-slate-400">Clique para testar</span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                  {nfcDestinations.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => {
                        setActiveNfcTarget(d.id as any);
                        setNfcTapped(true);
                      }}
                      className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${
                        activeNfcTarget === d.id
                          ? 'bg-[#16A34A] text-white shadow-md'
                          : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>

                {nfcTapped && (
                  <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-200 flex items-center justify-between animate-fadeIn">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      <span><strong>NFC Ativado:</strong> {nfcDestinations.find(d => d.id === activeNfcTarget)?.desc}</span>
                    </div>
                    <span className="text-[10px] text-emerald-300 font-mono">0.2s</span>
                  </div>
                )}
              </div>

              <a
                href={getWhatsAppMessageUrl('Placa NFC + QR Code')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#16A34A] via-[#22C55E] to-[#84CC16] hover:brightness-110 rounded-xl shadow-xl shadow-[#16A34A]/30 transition-all duration-200 active:scale-[0.98]"
              >
                <span>Quero uma placa NFC</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </a>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl group">
                <img
                  src={nfcPlacaMockupImg}
                  alt="Placa NFC e QR Code GabeUp Digital instalada no balcão"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-200 bg-slate-900/90 p-3 rounded-xl border border-slate-700/80 backdrop-blur-md">
                  <div className="font-semibold text-white flex items-center gap-1.5 mb-1">
                    <Radio className="w-4 h-4 text-[#84CC16]" />
                    Acrílico Premium com Chip NFC & QR Code Laser
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Durável, higienizável e configurado sob medida para o seu estabelecimento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- 04: AVALIAÇÕES NO GOOGLE ---------------- */}
        <div className="mb-20 lg:mb-28 p-6 sm:p-10 lg:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-md">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="flex items-center justify-center gap-1 text-amber-400 text-2xl mb-2">
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
              04 — Avaliações no Google
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              Facilite o caminho para uma boa avaliação.
            </h3>
            <p className="text-base text-slate-300 leading-relaxed mb-2">
              Reduza as etapas entre uma boa experiência e a avaliação do seu cliente.
            </p>
            <p className="text-xs text-slate-400">
              *Nossa solução facilita o acesso direto à página oficial de avaliações, sem prometer avaliações positivas ou manipulação de reputação.
            </p>
          </div>

          {/* Fluxo Visual: Placa NFC -> Smartphone -> Página de Avaliação Google */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#0B3D2E] text-[#16A34A] flex items-center justify-center mb-4 border border-[#16A34A]/30">
                <Radio className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono text-slate-500 mb-1">Passo 1</span>
              <h4 className="text-base font-semibold text-white mb-2">Placa NFC no Balcão</h4>
              <p className="text-xs text-slate-400">
                O cliente finaliza o atendimento satisfeito e vê o convite amigável na placa.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-[#16A34A]/40 text-center flex flex-col items-center relative">
              <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 text-slate-600">
                <ArrowRight className="w-6 h-6 text-[#16A34A]" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#16A34A]/20 text-[#22C55E] flex items-center justify-center mb-4 border border-[#16A34A]/40">
                <Smartphone className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono text-slate-500 mb-1">Passo 2</span>
              <h4 className="text-base font-semibold text-white mb-2">Toque do Smartphone</h4>
              <p className="text-xs text-slate-400">
                Aproximou o celular: zero digitação, zero busca manual ou frustração.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 text-center flex flex-col items-center relative">
              <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 text-slate-600">
                <ArrowRight className="w-6 h-6 text-[#16A34A]" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-amber-950/40 text-amber-400 flex items-center justify-center mb-4 border border-amber-500/30">
                <Star className="w-7 h-7 fill-amber-400" />
              </div>
              <span className="text-xs font-mono text-slate-500 mb-1">Passo 3</span>
              <h4 className="text-base font-semibold text-white mb-2">Avaliação no Google</h4>
              <p className="text-xs text-slate-400">
                A tela de avaliação abre na hora com 5 estrelas prontas para envio.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href={getWhatsAppMessageUrl('Avaliações no Google')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors"
            >
              <span>Otimizar avaliações do meu negócio</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </div>

        {/* ---------------- 05: TRÁFEGO PAGO ---------------- */}
        <div className="mb-20 lg:mb-28 p-6 sm:p-10 lg:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#16A34A] uppercase tracking-wider mb-3">
                <Target className="w-4 h-4" />
                <span>05 — Tráfego Pago</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                Não espere o cliente encontrar você por acaso.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Campanhas digitais estruturadas para levar sua empresa até as pessoas certas e aumentar suas oportunidades de negócio.
              </p>

              {/* Benefícios & Métricas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'Anúncios segmentados por raio de km do seu bairro',
                  'Público qualificado com real interesse de compra',
                  'Mensuração clara de cliques, contatos e conversões',
                  'Investimento sob controle e previsibilidade de retorno',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={getWhatsAppMessageUrl('Tráfego Pago')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#16A34A] to-[#0EA58F] hover:from-[#15803d] hover:to-[#0f766e] rounded-xl shadow-lg shadow-[#16A34A]/25 transition-all duration-200 active:scale-[0.98]"
              >
                <span>Quero anunciar meu negócio</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group">
                <img
                  src={marketingDashboardImg}
                  alt="Dashboard profissional de métricas e anúncios de tráfego pago"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-medium bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-sm border border-slate-700/60">
                    Campanhas Meta & Google
                  </span>
                  <span className="text-[#16A34A] font-semibold">Leads Qualificados</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- 06: EXPERIÊNCIAS 360° ---------------- */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group">
                <img
                  src={virtualTour360Img}
                  alt="Tour virtual e experiência imersiva 360 graus para espaço comercial"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-medium bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-sm border border-slate-700/60">
                    Visão Panorâmica
                  </span>
                  <span className="text-[#0EA58F] font-semibold flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5" />
                    360° Imersivo
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0EA58F] uppercase tracking-wider mb-3">
                <Compass className="w-4 h-4" />
                <span>06 — Experiências 360°</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                Mostre seu espaço antes mesmo da visita.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Experiências visuais 360° ajudam o cliente a conhecer melhor seu estabelecimento e aumentam a percepção de profissionalismo e confiança.
              </p>

              {/* Benefícios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'O cliente conhece seu espaço antes de sair de casa',
                  'Destaque no Google Maps com Street View interno',
                  'Aumento substancial do tempo de permanência no seu perfil',
                  'Ideal para clínicas, restaurantes, lojas e estúdios',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#0EA58F] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={getWhatsAppMessageUrl('Experiências 360')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all duration-200 active:scale-[0.98]"
              >
                <span>Quero saber mais</span>
                <ArrowRight className="w-4 h-4 text-[#0EA58F]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
