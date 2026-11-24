import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS, NAV_ITEMS, buildWhatsAppUrl } from '../data/business';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ResilientImage } from './ResilientImage';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const whatsappUrl = buildWhatsAppUrl(
    'Olá! Vim pelo site da MR Serviços e gostaria de solicitar atendimento.'
  );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#0B0B0D]/95 backdrop-blur-md border-b border-white/10'
          : 'bg-[#0B0B0D]/75 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Brand lockup (single-line, zero extra badges/subtitles) */}
        <a
          href="#inicio"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus-visible:rounded-md"
        >
          <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full overflow-hidden bg-[#BF171E] flex items-center justify-center shrink-0 ring-1 ring-white/20 shadow-sm">
            <ResilientImage
              src={BUSINESS.assets.logo}
              alt={`Logo oficial ${BUSINESS.fullName}`}
              className="h-full w-full object-cover"
              fallbackTitle="MR"
              fallbackSubtitle=""
            />
          </div>
          <span className="font-display text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0">
            {BUSINESS.shortName}
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-8"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#EAB308] hover:after:w-full after:transition-all after:duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action + mobile drawer trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#C81E1E] hover:bg-[#A81616] text-white text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>Atendimento WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/15 text-neutral-100 hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-[#0B0B0D] border-t border-white/10 px-4 pt-3 pb-6"
        >
          <nav aria-label="Menu mobile" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[44px] px-3 rounded-lg text-base font-medium text-neutral-200 hover:text-white hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-white/10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full min-h-[48px] px-5 py-3 rounded-lg bg-[#C81E1E] hover:bg-[#A81616] text-white text-sm font-semibold transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>Solicitar atendimento pelo WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
