/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactSection } from './components/ImpactSection';
import { ServicesSection } from './components/ServicesSection';
import { EcosystemSection } from './components/EcosystemSection';
import { LocalBusinessSimulator } from './components/LocalBusinessSimulator';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090E1A] text-slate-100 flex flex-col selection:bg-[#16A34A]/30 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Impact Section: O que a GabeUp faz & visual ascendente */}
        <ImpactSection />

        {/* Soluções & Serviços Especializados */}
        <ServicesSection />

        {/* Ecossistema Conectado Interativo */}
        <EcosystemSection />

        {/* Simulador de Presença Digital por Segmento Local */}
        <LocalBusinessSimulator />

        {/* Como Funciona: 4 Etapas Ascendentes */}
        <HowItWorksSection />

        {/* Depoimentos de Clientes Locais */}
        <TestimonialsSection />

        {/* Sobre a GabeUp Digital */}
        <AboutSection />

        {/* Chamada Final de Alto Impacto */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
