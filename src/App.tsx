import { MotionConfig } from 'motion/react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutDifferentialsSection } from './components/AboutDifferentialsSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#0B0B0D] text-neutral-100">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#EAB308] focus:text-black focus:font-semibold"
        >
          Ir para o conteúdo principal
        </a>

        <Header />

        <main id="conteudo-principal" className="flex-1">
          <HeroSection />
          <ServicesSection />
          <AboutDifferentialsSection />
          <LocationSection />
          <ContactSection />
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </MotionConfig>
  );
}
