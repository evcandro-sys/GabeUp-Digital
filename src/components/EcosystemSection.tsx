import React, { useState } from 'react';
import { GabeUpLogo } from './Logo';
import { 
  Smartphone, 
  MapPin, 
  Radio, 
  QrCode, 
  TrendingUp, 
  Compass, 
  MessageCircle, 
  Camera,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { WHATSAPP_LINK } from './Navbar';

export const EcosystemSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('nfc');

  const nodes = [
    {
      id: 'biosite',
      name: 'Biosite',
      icon: Smartphone,
      color: '#16A34A',
      connection: 'Hub Central',
      summary: 'Centraliza todos os links, serviços e canais da empresa em uma única página profissional.',
    },
    {
      id: 'google',
      name: 'Google',
      icon: MapPin,
      color: '#0EA58F',
      connection: 'Presença Local',
      summary: 'Posiciona o negócio no topo das pesquisas e no Google Maps quando o cliente mais precisa.',
    },
    {
      id: 'nfc',
      name: 'NFC',
      icon: Radio,
      color: '#84CC16',
      connection: 'Toque Físico',
      summary: 'Aproximação instantânea no balcão que direciona clientes para avaliações, cardápios ou contatos.',
    },
    {
      id: 'qrcode',
      name: 'QR Code',
      icon: QrCode,
      color: '#22C55E',
      connection: 'Acesso Rápido',
      summary: 'Compatibilidade com todos os smartphones através de leitura por câmera fotográfica.',
    },
    {
      id: 'trafego',
      name: 'Tráfego',
      icon: TrendingUp,
      color: '#16A34A',
      connection: 'Aquisição',
      summary: 'Leva a mensagem da sua empresa exatamente para quem mora ou trabalha no raio da sua loja.',
    },
    {
      id: '360',
      name: '360°',
      icon: Compass,
      color: '#0EA58F',
      connection: 'Imersão',
      summary: 'Gera confiança antecipada ao permitir que o cliente explore seu espaço virtualmente.',
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: MessageCircle,
      color: '#25D366',
      connection: 'Conversão',
      summary: 'O canal definitivo para tirar dúvidas rápidas, agendar serviços e fechar vendas no dia.',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: Camera,
      color: '#E1306C',
      connection: 'Relacionamento',
      summary: 'Vitrine contínua de conteúdo, novidades e engajamento visual com a sua comunidade local.',
    },
  ];

  const activeNodeData = nodes.find((n) => n.id === selectedNode) || nodes[0];

  return (
    <section id="ecossistema" className="relative py-24 sm:py-32 bg-[#0B1226] border-t border-slate-800/80 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#0B3D2E]/20 via-[#16A34A]/10 to-[#0EA58F]/20 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#16A34A] mb-3">
            Sinergia Total
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Tudo conectado para fortalecer a presença do seu negócio.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Cada canal alimenta o outro. Um ecossistema completo onde o cliente físico vira digital e o digital vira cliente presencial.
          </p>
        </div>

        {/* Desktop Interactive Constellation / Ecosystem Map */}
        <div className="hidden lg:block relative max-w-4xl mx-auto mb-16 h-[500px]">
          {/* Central Hub: GabeUp Digital */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative p-6 rounded-3xl bg-slate-900 border-2 border-[#16A34A] shadow-[0_0_50px_rgba(22,163,74,0.4)] flex flex-col items-center">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#16A34A] to-[#0EA58F] rounded-3xl blur-md opacity-30 animate-pulse" />
              <GabeUpLogo size="sm" showSlogan={false} />
              <span className="text-[11px] font-semibold text-slate-400 mt-2">
                Motor Central
              </span>
            </div>
          </div>

          {/* Surrounding Nodes positioned in a circle */}
          {nodes.map((node, index) => {
            const angle = (index * (360 / nodes.length) * Math.PI) / 180;
            const radius = 200; // px
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const Icon = node.icon;
            const isSelected = selectedNode === node.id;

            return (
              <React.Fragment key={node.id}>
                {/* SVG Connecting Ray */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  viewBox="-300 -250 600 500"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2={x}
                    y2={y}
                    stroke={isSelected ? '#16A34A' : '#1e293b'}
                    strokeWidth={isSelected ? '2.5' : '1.5'}
                    strokeDasharray={isSelected ? '4 2' : 'none'}
                    className={isSelected ? 'animate-pulse' : ''}
                  />
                </svg>

                {/* Satellite Node Button */}
                <div
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedNode(node.id)}
                    className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-2xl transition-all duration-300 ${
                      isSelected
                        ? 'bg-slate-800 border-2 border-[#16A34A] shadow-[0_0_25px_rgba(22,163,74,0.5)] scale-110'
                        : 'bg-slate-900/90 border border-slate-700/80 hover:border-slate-500 hover:scale-105'
                    }`}
                  >
                    <div
                      className="p-1.5 rounded-lg text-white"
                      style={{ backgroundColor: `${node.color}25` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: node.color }} />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-white whitespace-nowrap">
                        {node.name}
                      </div>
                      <div className="text-[10px] text-slate-400 whitespace-nowrap">
                        {node.connection}
                      </div>
                    </div>
                  </button>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Selected Node Details Box */}
        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-[#16A34A]/40 shadow-xl backdrop-blur-md mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="p-2.5 rounded-xl text-white"
              style={{ backgroundColor: `${activeNodeData.color}20` }}
            >
              {React.createElement(activeNodeData.icon, {
                className: 'w-6 h-6',
                style: { color: activeNodeData.color },
              })}
            </div>
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#16A34A]">
                Conexão: {activeNodeData.connection}
              </span>
              <h4 className="text-xl font-display font-bold text-white">
                Como o {activeNodeData.name} fortalece o seu negócio:
              </h4>
            </div>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
            {activeNodeData.summary}
          </p>
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
            <span>Integrado automaticamente ao ecossistema da GabeUp Digital</span>
          </div>
        </div>

        {/* Mobile / Tablet Friendly Grid View of the 8 Nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:hidden">
          {nodes.map((node) => {
            const Icon = node.icon;
            const isSelected = selectedNode === node.id;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setSelectedNode(node.id)}
                className={`p-3.5 rounded-xl text-left transition-all ${
                  isSelected
                    ? 'bg-slate-800 border-2 border-[#16A34A]'
                    : 'bg-slate-900/80 border border-slate-800'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4" style={{ color: node.color }} />
                  <span className="text-xs font-bold text-white">{node.name}</span>
                </div>
                <p className="text-[11px] text-slate-400 truncate">{node.connection}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
