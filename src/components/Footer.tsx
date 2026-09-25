import React from 'react';
import { GabeUpLogo } from './Logo';
import { WHATSAPP_LINK, INSTAGRAM_LINK } from './Navbar';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#060911] text-slate-400 py-16 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <GabeUpLogo size="md" showSlogan={true} className="mb-4" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mt-3">
              Especialistas em soluções digitais completas para negócios locais: Biosite, Perfil do Google, Placas NFC, QR Code e Tráfego Pago.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-display">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#o-que-fazemos" className="hover:text-white transition-colors">
                  O que Fazemos
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  Soluções & Serviços
                </a>
              </li>
              <li>
                <a href="#ecossistema" className="hover:text-white transition-colors">
                  Ecossistema Conectado
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a GabeUp
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts & Socials */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-display">
              Canais Oficiais
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#16A34A]/50 text-slate-300 hover:text-white transition-colors"
              >
                <span>WhatsApp Comercial</span>
                <ArrowUpRight className="w-4 h-4 text-[#16A34A]" />
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#E1306C]/50 text-slate-300 hover:text-white transition-colors"
              >
                <span>Instagram @gabeupdigital</span>
                <ArrowUpRight className="w-4 h-4 text-[#E1306C]" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} GabeUp Digital. Todos os direitos reservados.</p>
          <p className="text-slate-400 font-medium">
            Elevando negócios no digital.
          </p>
        </div>
      </div>
    </footer>
  );
};
