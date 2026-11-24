import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Copy, Check } from 'lucide-react';
import { BUSINESS, buildWhatsAppUrl } from '../data/business';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ResilientImage } from './ResilientImage';

export function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(BUSINESS.fullAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    } catch {
      // Fallback for restricted clipboard environments
      const textarea = document.createElement('textarea');
      textarea.value = BUSINESS.fullAddress;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    }
  };

  return (
    <section
      id="localizacao"
      className="bg-white text-neutral-900 py-20 sm:py-24 lg:py-28 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold text-[#C81E1E]">
            Localização · Atendimento Presencial
          </p>
          <h2 className="mt-2.5 font-display text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 [text-wrap:balance]">
            Visite nosso escritório em Piedade, Jaboatão dos Guararapes
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Contamos com estrutura física de fácil acesso na Av. Barreto de
            Menezes para receber você com conforto e atendimento presencial
            especializado.
          </p>
        </motion.div>

        {/* Balanced 2-column stretch split */}
        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Official Real Establishment Photograph (unaltered) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex"
          >
            <div className="w-full rounded-xl overflow-hidden border border-neutral-200 bg-[#0B0B0D] flex flex-col">
              <div className="relative flex-1 min-h-[300px] sm:min-h-[380px] bg-neutral-950 flex items-center justify-center">
                <ResilientImage
                  src={BUSINESS.assets.storefront}
                  alt={`Fachada oficial da ${BUSINESS.fullName} na ${BUSINESS.fullAddress}`}
                  className="w-full h-full object-cover"
                  fallbackTitle={BUSINESS.fullName}
                  fallbackSubtitle={BUSINESS.fullAddress}
                />
              </div>
              <div className="px-5 py-3.5 bg-[#121215] border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-300">
                <span className="font-medium text-white">
                  {BUSINESS.fullName}
                </span>
                <span className="text-neutral-400">
                  Fachada oficial · Piedade – PE
                </span>
              </div>
            </div>
          </motion.div>

          {/* Address & Directions Panel */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.45,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5 flex"
          >
            <div className="w-full rounded-xl bg-[#F8F8FA] border border-neutral-200 p-7 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0B0B0D] text-[#FACC15] flex items-center justify-center">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold text-neutral-950 tracking-tight">
                  Endereço do estabelecimento
                </h3>

                <address className="mt-4 not-italic text-base text-neutral-700 leading-relaxed">
                  <strong className="block font-semibold text-neutral-950 text-lg">
                    {BUSINESS.addressLine}
                  </strong>
                  <span className="block mt-1 text-neutral-600">
                    {BUSINESS.neighborhoodCity}
                  </span>
                </address>

                <div className="mt-6 pt-6 border-t border-neutral-200 space-y-2.5 text-sm text-neutral-600">
                  <p>
                    <span className="font-semibold text-neutral-900">
                      Região atendida:
                    </span>{' '}
                    Piedade, Jaboatão dos Guararapes e Região Metropolitana do
                    Recife.
                  </p>
                  <p>
                    <span className="font-semibold text-neutral-900">
                      Dica:
                    </span>{' '}
                    Antes de vir, confirme os documentos necessários para o seu
                    serviço pelo WhatsApp.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href={BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full min-h-[48px] px-5 py-3 rounded-lg bg-[#C81E1E] hover:bg-[#A81616] text-white text-sm sm:text-base font-semibold transition-colors duration-150 whitespace-nowrap"
                >
                  <Navigation className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Como chegar</span>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 text-sm font-semibold transition-colors duration-150 whitespace-nowrap"
                  >
                    {copied ? (
                      <>
                        <Check
                          className="w-4 h-4 text-emerald-700 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-emerald-800">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span>Copiar endereço</span>
                      </>
                    )}
                  </button>

                  <a
                    href={buildWhatsAppUrl(
                      'Olá! Gostaria de confirmar documentos e horário para ir até a MR Serviços em Piedade.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-lg border border-neutral-900 bg-neutral-950 hover:bg-neutral-800 text-white text-sm font-semibold transition-colors duration-150 whitespace-nowrap"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
