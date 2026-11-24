import { motion } from 'motion/react';
import {
  IdCard,
  FlaskConical,
  ClipboardCheck,
  ArrowUpRight,
} from 'lucide-react';
import {
  SERVICES,
  ServiceItem,
  buildWhatsAppUrl,
} from '../data/business';
import { WhatsAppIcon } from './WhatsAppIcon';

function SteeringWheelIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.5" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 14.2v7.3" />
      <path d="M9.9 11.3 2.8 9.2" />
      <path d="M14.1 11.3 21.2 9.2" />
    </svg>
  );
}

function ServiceIcon({ iconKey }: { iconKey: ServiceItem['iconKey'] }) {
  const iconClass = 'w-6 h-6 transition-colors duration-200';
  switch (iconKey) {
    case 'first-license':
      return <IdCard className={iconClass} aria-hidden="true" />;
    case 'add-category':
      return <SteeringWheelIcon className={iconClass} />;
    case 'toxicology':
      return <FlaskConical className={iconClass} aria-hidden="true" />;
    case 'general-services':
      return <ClipboardCheck className={iconClass} aria-hidden="true" />;
  }
}

export function ServicesSection() {
  const generalInquiryUrl = buildWhatsAppUrl(
    'Olá! Vim pelo site da MR Serviços e gostaria de consultar sobre outro serviço de habilitação.'
  );

  return (
    <section
      id="servicos"
      className="bg-[#F7F7F9] text-neutral-900 py-20 sm:py-24 lg:py-28 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-10 sm:pb-12 border-b border-neutral-200"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#C81E1E]">
              Atendimento especializado em DETRAN e CNH
            </p>
            <h2 className="mt-2.5 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
              NOSSOS SERVIÇOS
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Encontre a solução que você precisa. Nossa equipe está pronta para
              ajudar!
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-sm text-neutral-500 pb-1">
            <span className="h-1 w-8 rounded-full bg-[#C81E1E]" aria-hidden="true" />
            <span className="h-1 w-4 rounded-full bg-[#EAB308]" aria-hidden="true" />
            <span className="font-medium text-neutral-700 whitespace-nowrap">
              Atendimento presencial e via WhatsApp
            </span>
          </div>
        </motion.div>

        {/* 4 Individual Code-Driven Service Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.42,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col justify-between bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 shadow-sm shadow-neutral-950/[0.03] hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-950/[0.07] hover:border-neutral-300 transition-all duration-200 scroll-mt-24 overflow-hidden"
            >
              {/* Subtle top brand bar revealed cleanly on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#C81E1E] via-[#C81E1E] to-[#EAB308] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />

              <div>
                {/* Top row: Vector Icon + Subtle Accent Line */}
                <div className="flex items-center justify-between gap-4">
                  <div className="w-13 h-13 rounded-xl bg-[#0B0B0D] text-[#FACC15] group-hover:bg-[#C81E1E] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-200 shadow-xs">
                    <ServiceIcon iconKey={service.iconKey} />
                  </div>

                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-1 w-6 rounded-full bg-neutral-200 group-hover:bg-[#C81E1E] transition-colors duration-200" />
                    <span className="h-1 w-2.5 rounded-full bg-neutral-200 group-hover:bg-[#EAB308] transition-colors duration-200" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="mt-6 font-display text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight leading-snug">
                  <span className="text-[#C81E1E] mr-2 tabular-nums">
                    {service.number}
                  </span>
                  {service.title}
                </h3>

                <p className="mt-3 text-[15px] sm:text-base text-neutral-700 leading-relaxed">
                  {service.description}
                </p>

                <p className="mt-2.5 text-sm text-neutral-500 leading-relaxed">
                  {service.details}
                </p>
              </div>

              {/* Action Footer */}
              <div className="mt-7 pt-6 border-t border-neutral-100">
                <a
                  href={buildWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full min-h-[48px] px-5 py-3 rounded-xl bg-[#0B0B0D] hover:bg-[#C81E1E] text-white text-sm font-semibold tracking-wide transition-colors duration-150 whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>CONSULTAR PELO WHATSAPP</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Clean Unboxed Direct Inquiry Row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-12 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <p className="text-sm sm:text-base text-neutral-600">
            Precisa de orientação sobre documentação ou outro serviço do DETRAN?
          </p>
          <a
            href={generalInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#C81E1E] hover:text-[#A81616] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Falar com nossa equipe pelo WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
