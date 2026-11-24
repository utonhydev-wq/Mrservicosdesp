import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS, SERVICES, buildWhatsAppUrl } from '../data/business';
import { WhatsAppIcon, InstagramIcon } from './WhatsAppIcon';

export function ContactSection() {
  const [selectedService, setSelectedService] = useState<string>(
    SERVICES[0].title
  );
  const [clientName, setClientName] = useState('');
  const [clientDetails, setClientDetails] = useState('');
  const [submittedNotice, setSubmittedNotice] = useState(false);

  const composedMessage = useMemo(() => {
    const trimmedName = clientName.trim();
    const trimmedDetails = clientDetails.trim();
    const greeting = trimmedName
      ? `Olá! Meu nome é ${trimmedName}.`
      : 'Olá!';
    const base = `${greeting} Gostaria de atendimento para: ${selectedService}.`;
    return trimmedDetails ? `${base} Detalhes: ${trimmedDetails}` : base;
  }, [clientName, clientDetails, selectedService]);

  const directComposerUrl = useMemo(
    () => buildWhatsAppUrl(composedMessage),
    [composedMessage]
  );

  return (
    <section
      id="contato"
      className="bg-[#0E0E11] text-neutral-100 py-20 sm:py-24 lg:py-28 scroll-mt-16 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct Channels */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-sm font-semibold text-[#FACC15]">
              Contato · Atendimento Direto
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight [text-wrap:balance]">
              Fale agora com a MR Serviços pelo WhatsApp
            </h2>
            <p className="mt-4 text-base text-neutral-300 leading-relaxed tracking-[0.01em]">
              Tire suas dúvidas sobre documentação, prazos e etapas do seu
              processo de habilitação diretamente com nossa equipe.
            </p>

            {/* Primary Highlighted WhatsApp CTA */}
            <div className="mt-8">
              <a
                href={buildWhatsAppUrl(
                  'Olá! Vim pelo site da MR Serviços e gostaria de atendimento.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 w-full p-5 rounded-xl bg-[#C81E1E] hover:bg-[#A81616] text-white transition-colors duration-150"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-lg bg-black/20 flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-medium text-red-100">
                      WhatsApp Oficial
                    </span>
                    <span className="block font-display text-lg sm:text-xl font-bold tabular-nums tracking-tight truncate">
                      {BUSINESS.whatsappDisplay}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className="w-5 h-5 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Secondary Contact Rows (Instagram + Address) */}
            <div className="mt-6 rounded-xl bg-[#15151A] border border-white/10 divide-y divide-white/10">
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 p-5 hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#FACC15] shrink-0">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs text-neutral-400">
                      Instagram
                    </span>
                    <span className="block text-sm sm:text-base font-semibold text-white truncate">
                      {BUSINESS.instagramHandle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-neutral-400 group-hover:text-[#FACC15] transition-colors shrink-0"
                  aria-hidden="true"
                />
              </a>

              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 p-5 hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex items-start gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#FACC15] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs text-neutral-400">
                      Endereço
                    </span>
                    <span className="block text-sm sm:text-base font-semibold text-white">
                      {BUSINESS.addressLine}
                    </span>
                    <span className="block text-xs sm:text-sm text-neutral-400 mt-0.5">
                      {BUSINESS.neighborhoodCity}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-neutral-400 group-hover:text-[#FACC15] transition-colors shrink-0"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Quick WhatsApp Message Builder */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.45,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7"
          >
            <div className="rounded-xl bg-[#15151A] border border-white/10 p-6 sm:p-8 lg:p-9">
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                Inicie seu atendimento personalizado
              </h3>
              <p className="mt-2 text-sm sm:text-base text-neutral-400">
                Selecione o serviço desejado e envie sua mensagem pronta
                diretamente para o nosso WhatsApp.
              </p>

              {/* Service Selector */}
              <div className="mt-7">
                <span className="block text-sm font-medium text-neutral-200 mb-3">
                  Qual serviço você precisa?
                </span>
                <div
                  role="radiogroup"
                  aria-label="Selecione o serviço desejado"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
                >
                  {SERVICES.map((service) => {
                    const isSelected = selectedService === service.title;
                    return (
                      <button
                        key={service.id}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => {
                          setSelectedService(service.title);
                          setSubmittedNotice(false);
                        }}
                        className={`min-h-[46px] px-4 py-2.5 rounded-lg text-left text-sm font-medium border transition-colors duration-150 ${
                          isSelected
                            ? 'bg-[#C81E1E]/15 border-[#C81E1E] text-white'
                            : 'bg-[#0E0E11] border-white/10 text-neutral-300 hover:border-white/25 hover:text-white'
                        }`}
                      >
                        <span className="text-xs font-semibold text-[#FACC15] mr-2 tabular-nums">
                          {service.number}
                        </span>
                        <span>{service.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Optional Name & Details Inputs */}
              <div className="mt-6 grid grid-cols-1 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-neutral-200 mb-2"
                  >
                    Seu nome <span className="text-neutral-500">(opcional)</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={clientName}
                    onChange={(e) => {
                      setClientName(e.target.value);
                      setSubmittedNotice(false);
                    }}
                    placeholder="Como podemos chamar você?"
                    maxLength={80}
                    className="w-full min-h-[46px] px-4 py-2.5 rounded-lg bg-[#0B0B0D] border border-white/15 text-white placeholder:text-neutral-500 text-sm focus:border-[#EAB308] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-details"
                    className="block text-sm font-medium text-neutral-200 mb-2"
                  >
                    Observação ou dúvida{' '}
                    <span className="text-neutral-500">(opcional)</span>
                  </label>
                  <textarea
                    id="contact-details"
                    rows={3}
                    value={clientDetails}
                    onChange={(e) => {
                      setClientDetails(e.target.value);
                      setSubmittedNotice(false);
                    }}
                    placeholder="Ex.: Gostaria de saber os documentos necessários para renovação da CNH..."
                    maxLength={280}
                    className="w-full px-4 py-3 rounded-lg bg-[#0B0B0D] border border-white/15 text-white placeholder:text-neutral-500 text-sm focus:border-[#EAB308] focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Live Message Preview */}
              <div className="mt-6 p-4 rounded-lg bg-[#0B0B0D] border border-white/10">
                <span className="block text-xs font-medium text-neutral-400 mb-1.5">
                  Prévia da mensagem para o WhatsApp
                </span>
                <p className="text-sm text-neutral-200 leading-relaxed break-words">
                  “{composedMessage}”
                </p>
              </div>

              {/* Direct Anchor Submit Action (never blocked by iframe window.open restrictions) */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <a
                  href={directComposerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSubmittedNotice(true)}
                  className="inline-flex items-center justify-center gap-2.5 min-h-[50px] px-6 py-3 rounded-lg bg-[#C81E1E] hover:bg-[#A81616] text-white text-sm sm:text-base font-semibold transition-colors duration-150 whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Enviar mensagem pelo WhatsApp</span>
                </a>

                {submittedNotice && (
                  <div
                    role="status"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-400 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Conversa aberta no WhatsApp</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
