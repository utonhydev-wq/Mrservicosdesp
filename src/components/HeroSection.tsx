import { ArrowDownRight, ChevronRight } from 'lucide-react';
import { BUSINESS, SERVICES, buildWhatsAppUrl } from '../data/business';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ResilientImage } from './ResilientImage';

export function HeroSection() {
  const heroWhatsAppUrl = buildWhatsAppUrl(
    'Olá! Gostaria de solicitar atendimento para serviços de habilitação na MR Serviços.'
  );

  return (
    <section
      id="inicio"
      className="relative bg-[#0B0B0D] text-white pt-16 md:pt-[72px] overflow-hidden"
    >
      {/* Background photographic composition with measured readability scrim */}
      <div className="relative min-h-[620px] lg:min-h-[680px] flex flex-col justify-between">
        <div className="absolute inset-0 z-0">
          <ResilientImage
            src={BUSINESS.assets.heroBackdrop}
            alt="Motorista ao volante em avenida iluminada ao entardecer representando mobilidade e habilitação segura"
            className="w-full h-full object-cover object-center"
            fallbackTitle={BUSINESS.fullName}
            fallbackSubtitle={BUSINESS.neighborhoodCity}
          />
          {/* Directional contrast scrim ensuring > 7:1 text legibility */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/95 via-[#0B0B0D]/80 to-[#0B0B0D]/40"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-[#0B0B0D]/55"
          />
        </div>

        {/* Main Hero Copy Container — immediately available with zero reveal latency */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-16 pb-14 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
          <div className="max-w-2xl">
            {/* Unboxed metadata line with typographic separators */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-medium text-neutral-300 tracking-[0.01em] mb-6">
              <span className="text-[#FACC15] font-semibold">
                Despachante Veicular
              </span>
              <span aria-hidden="true" className="text-neutral-500">
                ·
              </span>
              <span>Piedade, Jaboatão dos Guararapes – PE</span>
            </div>

            <h1
              className="font-display font-bold tracking-tight text-white leading-[1.12] [text-wrap:balance]"
              style={{ fontSize: 'clamp(2.25rem, 4.1vw, 3.65rem)' }}
            >
              Resolva seus serviços de habilitação com praticidade e segurança!
            </h1>

            <p className="mt-6 text-base sm:text-lg text-neutral-200 leading-relaxed max-w-xl tracking-[0.01em]">
              Cuidamos dos processos para você ter mais tranquilidade e menos
              burocracia.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4">
              <a
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 min-h-[50px] px-6 py-3.5 rounded-lg bg-[#C81E1E] hover:bg-[#A81616] text-white font-semibold text-sm sm:text-base transition-all duration-150 shadow-lg shadow-black/30 whitespace-nowrap shrink-0"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Solicitar atendimento pelo WhatsApp</span>
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 min-h-[50px] px-6 py-3.5 rounded-lg border border-white/25 bg-white/5 hover:bg-white/12 text-white font-semibold text-sm sm:text-base transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <span>Conhecer nossos serviços</span>
                <ArrowDownRight className="w-4 h-4 text-[#FACC15] shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Full-width bottom quick-index bar (4 core services, hairline dividers) */}
        <div className="relative z-10 border-t border-white/10 bg-[#0B0B0D]/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {SERVICES.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="group flex items-center justify-between gap-3 py-4 sm:px-5 first:sm:pl-0 last:sm:pr-0 text-left hover:text-white transition-colors"
                >
                  <div className="min-w-0">
                    <span className="block text-xs font-semibold text-[#FACC15] tabular-nums">
                      {service.number}
                    </span>
                    <span className="block mt-0.5 text-sm font-semibold text-neutral-100 group-hover:text-white truncate">
                      {service.title}
                    </span>
                  </div>
                  <ChevronRight
                    className="w-4 h-4 text-neutral-500 group-hover:text-[#FACC15] group-hover:translate-x-0.5 transition-all shrink-0"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
