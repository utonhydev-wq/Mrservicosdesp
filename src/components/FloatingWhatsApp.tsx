import { buildWhatsAppUrl } from '../data/business';
import { WhatsAppIcon } from './WhatsAppIcon';

export function FloatingWhatsApp() {
  const url = buildWhatsAppUrl(
    'Olá! Gostaria de falar com a MR Serviços sobre serviços de habilitação.'
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a MR Serviços pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 h-13 px-4 sm:px-5 rounded-full bg-[#15803D] hover:bg-[#166534] text-white shadow-xl shadow-black/35 ring-1 ring-white/15 transition-transform duration-150 hover:scale-[1.03] active:scale-[0.98]"
    >
      <WhatsAppIcon className="w-6 h-6 shrink-0" />
      <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">
        WhatsApp
      </span>
    </a>
  );
}
