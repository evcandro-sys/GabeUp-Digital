import React, { useState, useEffect } from 'react';
import { GabeUpLogo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const WHATSAPP_LINK = 'https://wa.link/velneo';
export const INSTAGRAM_LINK = 'https://www.instagram.com/gabeupdigital?stkn=a2NuOHY5aW1yMmk%3D&utm_source=qr';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O que Fazemos', href: '#o-que-fazemos' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Ecossistema', href: '#ecossistema' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Sobre', href: '#sobre' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090E1A]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single element brand link */}
          <a
            href="#"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-lg"
            aria-label="GabeUp Digital Home"
          >
            <GabeUpLogo size="sm" />
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#16A34A] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
              aria-label="Instagram da GabeUp Digital"
              title="Instagram @gabeupdigital"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-medium text-white bg-gradient-to-r from-[#16A34A] to-[#0EA58F] hover:from-[#15803d] hover:to-[#0f766e] rounded-xl shadow-md shadow-[#16A34A]/25 transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
            >
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-medium text-white bg-[#16A34A] rounded-lg shadow-sm whitespace-nowrap"
            >
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-800/80 bg-[#090E1A]/95 rounded-2xl p-4 shadow-xl">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-300 hover:text-white hover:bg-slate-800/50 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between">
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1.5 px-3 py-2"
                >
                  <span>@gabeupdigital</span>
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#16A34A] to-[#0EA58F] rounded-lg shadow-sm"
                >
                  <span>Falar com Especialista</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
