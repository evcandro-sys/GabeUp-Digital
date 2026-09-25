/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LazySection } from './components/LazySection';

// Below-the-fold sections loaded dynamically via code-splitting to minimize initial mobile bundle
const ImpactSection = lazy(() =>
  import('./components/ImpactSection').then((m) => ({ default: m.ImpactSection }))
);
const ServicesSection = lazy(() =>
  import('./components/ServicesSection').then((m) => ({ default: m.ServicesSection }))
);
const EcosystemSection = lazy(() =>
  import('./components/EcosystemSection').then((m) => ({ default: m.EcosystemSection }))
);
const LocalBusinessSimulator = lazy(() =>
  import('./components/LocalBusinessSimulator').then((m) => ({
    default: m.LocalBusinessSimulator,
  }))
);
const HowItWorksSection = lazy(() =>
  import('./components/HowItWorksSection').then((m) => ({ default: m.HowItWorksSection }))
);
const TestimonialsSection = lazy(() =>
  import('./components/TestimonialsSection').then((m) => ({ default: m.TestimonialsSection }))
);
const AboutSection = lazy(() =>
  import('./components/AboutSection').then((m) => ({ default: m.AboutSection }))
);
const FinalCTA = lazy(() =>
  import('./components/FinalCTA').then((m) => ({ default: m.FinalCTA }))
);
const Footer = lazy(() =>
  import('./components/Footer').then((m) => ({ default: m.Footer }))
);
const FloatingWhatsApp = lazy(() =>
  import('./components/FloatingWhatsApp').then((m) => ({ default: m.FloatingWhatsApp }))
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#090E1A] text-slate-100 flex flex-col selection:bg-[#16A34A]/30 selection:text-white">
      {/* Critical Above-The-Fold: Rendered Immediately */}
      <Navbar />

      <main className="flex-1">
        {/* Critical First Viewport Hero */}
        <Hero />

        {/* Deferred Below-The-Fold Sections */}
        <LazySection id="o-que-fazemos" minHeight="500px">
          <Suspense fallback={<div className="h-[500px]" />}>
            <ImpactSection />
          </Suspense>
        </LazySection>

        <LazySection id="solucoes" minHeight="800px">
          <Suspense fallback={<div className="h-[800px]" />}>
            <ServicesSection />
          </Suspense>
        </LazySection>

        <LazySection id="ecossistema" minHeight="600px">
          <Suspense fallback={<div className="h-[600px]" />}>
            <EcosystemSection />
          </Suspense>
        </LazySection>

        <LazySection minHeight="500px">
          <Suspense fallback={<div className="h-[500px]" />}>
            <LocalBusinessSimulator />
          </Suspense>
        </LazySection>

        <LazySection id="como-funciona" minHeight="500px">
          <Suspense fallback={<div className="h-[500px]" />}>
            <HowItWorksSection />
          </Suspense>
        </LazySection>

        <LazySection id="depoimentos" minHeight="500px">
          <Suspense fallback={<div className="h-[500px]" />}>
            <TestimonialsSection />
          </Suspense>
        </LazySection>

        <LazySection id="sobre" minHeight="450px">
          <Suspense fallback={<div className="h-[450px]" />}>
            <AboutSection />
          </Suspense>
        </LazySection>

        <LazySection minHeight="450px">
          <Suspense fallback={<div className="h-[450px]" />}>
            <FinalCTA />
          </Suspense>
        </LazySection>
      </main>

      <LazySection minHeight="250px">
        <Suspense fallback={<div className="h-[250px]" />}>
          <Footer />
        </Suspense>
      </LazySection>

      {/* Floating Action Button (Deferred) */}
      <Suspense fallback={null}>
        <FloatingWhatsApp />
      </Suspense>
    </div>
  );
}
