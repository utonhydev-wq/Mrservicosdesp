import { MapPin } from 'lucide-react';
import { BUSINESS, NAV_ITEMS, buildWhatsAppUrl } from '../data/business';
import { WhatsAppIcon, InstagramIcon } from './WhatsAppIcon';
import { ResilientImage } from './ResilientImage';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070709] text-neutral-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a
              href="#inicio"
              className="inline-flex items-center gap-3.5 focus-visible:rounded-md"
            >
              <div className="h-16 w-16 rounded-full overflow-hidden bg-[#BF171E] flex items-center justify-center shrink-0 ring-1 ring-white/20 shadow-sm">
                <ResilientImage
                  src={BUSINESS.assets.logo}
                  alt={`Logo oficial ${BUSINESS.fullName}`}
                  className="h-full w-full object-cover"
                  fallbackTitle="MR"
                  fallbackSubtitle=""
                />
              </div>
              <div>
                <span className="block font-display text-lg font-bold text-white tracking-tight">
                  {BUSINESS.shortName}
                </span>
                <span className="block text-sm text-neutral-400">
                  Despachante Veicular
                </span>
              </div>
            </a>

            <p className="mt-5 text-sm text-neutral-400 leading-relaxed max-w-sm">
              Especializada em serviços relacionados ao DETRAN e documentação de
              habilitação em Piedade, Jaboatão dos Guararapes – PE.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-semibold text-white">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#localizacao"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Address Column */}
          <div className="md:col-span-4">
            <h3 className="font-display text-sm font-semibold text-white">
              Contato e Endereço
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li>
                <a
                  href={buildWhatsAppUrl(
                    'Olá! Gostaria de falar com a MR Serviços.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-neutral-300 hover:text-white transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#FACC15] shrink-0" />
                  <span className="tabular-nums">{BUSINESS.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-neutral-300 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#FACC15] shrink-0" />
                  <span>{BUSINESS.instagramHandle}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2.5 text-neutral-400 hover:text-white transition-colors"
                >
                  <MapPin
                    className="w-4 h-4 text-[#FACC15] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{BUSINESS.fullAddress}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-neutral-500">
          <p>
            © {currentYear} {BUSINESS.fullName}. Todos os direitos reservados.
          </p>
          <p>Piedade · Jaboatão dos Guararapes – PE</p>
        </div>
      </div>
    </footer>
  );
}
