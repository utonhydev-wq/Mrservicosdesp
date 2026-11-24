import { motion } from 'motion/react';
import {
  UserCheck,
  Clock,
  Headphones,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { DIFFERENTIALS, buildWhatsAppUrl } from '../data/business';
import { WhatsAppIcon } from './WhatsAppIcon';

const DIFFERENTIAL_ICONS = [
  UserCheck,
  Clock,
  Headphones,
  ShieldCheck,
  CheckCircle2,
];

export function AboutDifferentialsSection() {
  const aboutWhatsAppUrl = buildWhatsAppUrl(
    'Olá! Gostaria de receber orientação sobre meu processo de habilitação com a MR Serviços.'
  );

  return (
    <section
      id="sobre"
      className="bg-[#0B0B0D] text-neutral-100 py-20 sm:py-24 lg:py-28 scroll-mt-16 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Editorial Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <p className="text-sm font-semibold text-[#FACC15]">
              Sobre a MR Serviços · Por que nos escolher
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight [text-wrap:balance]">
              Orientação clara para você resolver sua documentação com segurança
            </h2>
            <p className="mt-5 text-base text-neutral-300 leading-relaxed tracking-[0.01em]">
              A MR Serviços – Despachante Veicular atua em Piedade, Jaboatão dos
              Guararapes, oferecendo suporte dedicado para quem busca agilidade
              e tranquilidade ao lidar com procedimentos de habilitação e
              DETRAN.
            </p>
            <p className="mt-4 text-base text-neutral-400 leading-relaxed tracking-[0.01em]">
              Nosso foco é simplificar cada etapa com atendimento direto,
              transparente e próximo, evitando erros na documentação e reduzindo
              o desgaste com burocracias.
            </p>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm text-neutral-300 mb-4">
                Precisa de orientação para o seu caso específico?
              </p>
              <a
                href={aboutWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 py-3 rounded-lg bg-[#C81E1E] hover:bg-[#A81616] text-white text-sm sm:text-base font-semibold transition-colors duration-150 whitespace-nowrap"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Falar com um atendente</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Structured 5 Differentials List */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-[#131317] border border-white/10 divide-y divide-white/10">
              {DIFFERENTIALS.map((item, idx) => {
                const IconComponent =
                  DIFFERENTIAL_ICONS[idx % DIFFERENTIAL_ICONS.length];
                return (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="p-6 sm:p-7 flex items-start gap-5"
                  >
                    <div className="w-11 h-11 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent
                        className="w-5 h-5 text-[#FACC15]"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2.5">
                        <span className="font-display text-xs font-bold text-[#C81E1E] tabular-nums">
                          {item.number}
                        </span>
                        <h3 className="font-display text-lg font-bold text-white tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-[15px] text-neutral-300 leading-relaxed tracking-[0.01em]">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
