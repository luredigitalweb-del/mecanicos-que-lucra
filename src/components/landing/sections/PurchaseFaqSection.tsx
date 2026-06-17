import { Check, ShieldCheck, Sparkles, Zap, Clock, Flame, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import brandLogo from "@/assets/logo-mecanico-que-lucra-nova.png";
import { CtaButton } from "@/components/landing/ui/CtaButton";
import { CHECKOUT_URL, appendUtms } from "@/lib/utm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Isso funciona para qualquer tipo de oficina?",
    answer: "Se você tem uma oficina mecânica funcionando e sente que o dinheiro não sobra no fim do mês, funciona. Não importa o tamanho, a cidade ou quantos funcionários você tem. O conteúdo foi pensado para a realidade da oficina brasileira.",
  },
  {
    question: "Já fiz curso antes e não mudou nada. Por que esse seria diferente?",
    answer: "Porque você não vai sair motivado. Vai sair com um plano de ação para aplicar na semana seguinte. A diferença entre esse aulão e a maioria dos cursos é que aqui você usa esse tempo a seu favor.",
  },
  {
    question: "Quando começo a ver resultado?",
    answer: "Depende de quando você aplicar. Quem sai do aulão e coloca o plano para rodar na semana seguinte vê diferença no mesmo mês.",
  },
  {
    question: "Paguei. E agora?",
    answer: "Você recebe as instruções de acesso por e-mail. Na data do aulão, chegue no horário, participe ao vivo e já venha com papel e caneta, porque o conteúdo é denso.",
  },
];

export function PurchaseFaqSection() {
  return (
    <section id="oferta" className="relative overflow-hidden bg-gradient-to-b from-brand-offwhite via-brand-offwhite to-white py-20 sm:py-28">
      {/* animated decorative blurs */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-yellow/20 blur-[140px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -left-32 bottom-40 h-72 w-72 rounded-full bg-brand-yellow/10 blur-[120px]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="pointer-events-none absolute -right-32 top-40 h-72 w-72 rounded-full bg-brand-dark/5 blur-[120px]"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-24 max-w-[30rem]"
        >
          {/* floating badge above card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative z-10 mx-auto mb-[-18px] flex w-fit items-center gap-2 rounded-full bg-brand-yellow px-4 py-2 shadow-[0_10px_30px_-8px_color-mix(in_oklab,var(--color-brand-yellow)_70%,transparent)]"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Flame className="h-4 w-4 text-brand-dark" strokeWidth={3} />
            </motion.span>
            <span className="font-sora text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-dark">
              Oferta por tempo limitado
            </span>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative overflow-hidden rounded-[2rem] border border-brand-dark/10 bg-brand-white shadow-[0_40px_100px_-40px_color-mix(in_oklab,var(--color-brand-dark)_60%,transparent)]"
          >
            {/* animated gradient border glow */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-r from-brand-yellow/0 via-brand-yellow/40 to-brand-yellow/0"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ zIndex: 0 }}
            />
            <div className="relative overflow-hidden border-b-4 border-brand-yellow bg-brand-dark px-7 py-10 text-center sm:px-10">
              <div className="experts-grid pointer-events-none absolute inset-0 opacity-15" />
              <motion.div
                className="pointer-events-none absolute left-1/2 top-0 h-28 w-64 -translate-x-1/2 bg-brand-yellow/20 blur-[55px]"
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* sparkles */}
              <motion.div
                className="absolute left-6 top-6"
                animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="h-4 w-4 text-brand-yellow" />
              </motion.div>
              <motion.div
                className="absolute right-6 top-10"
                animate={{ y: [0, -8, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <Sparkles className="h-3 w-3 text-brand-yellow" />
              </motion.div>
              <img
                src={brandLogo}
                alt="Aulão O Mecânico que Lucra"
                className="relative mx-auto h-auto w-64 drop-shadow-2xl sm:w-72"
                loading="lazy"
              />
            </div>

            <div className="relative px-5 py-8 sm:px-8 sm:py-9">
              <p className="mb-2 flex items-center justify-center gap-2 text-center font-sora text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-yellow">
                <Zap className="h-3.5 w-3.5 fill-brand-yellow" /> Comprando agora você leva
              </p>
              <h2 className="mb-5 text-center font-sora text-2xl font-extrabold leading-tight text-brand-dark sm:text-3xl">
                01 ingresso para o Aulão<br />O Mecânico que Lucra
              </h2>

              {/* AO VIVO + data e hora — edite a data/horário abaixo */}
              <div className="mb-7 flex flex-col items-center gap-3">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                  className="flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1.5 font-sora text-[11px] font-extrabold uppercase tracking-[0.18em] text-red-600"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <motion.span
                      className="absolute inline-flex h-full w-full rounded-full bg-red-500"
                      animate={{ scale: [1, 2.2], opacity: [0.7, 0] }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                    />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                  </span>
                  Ao vivo
                </motion.span>
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-sm font-bold text-brand-dark">
                  <span className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-brand-yellow" />
                    27, 28 e 29 de julho de 2026
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-brand-yellow" />
                    a partir das 19h
                  </span>
                </div>
              </div>

              <div className="mb-8 space-y-3">
                {[
                  { label: "9 horas de conteúdo ao vivo", price: "R$ 497" },
                  { label: "Slides e materiais extras", price: "R$ 99" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    whileHover={{ x: 4 }}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-brand-dark/10 bg-brand-offwhite px-4 py-4 transition-colors duration-300 hover:border-brand-yellow/40"
                  >
                    <div className="flex min-w-0 items-center gap-3 text-brand-dark">
                      <motion.span
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.4 }}
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-yellow/15 group-hover:bg-brand-yellow"
                      >
                        <Check className="h-4 w-4 text-brand-yellow group-hover:text-brand-dark" strokeWidth={3} />
                      </motion.span>
                      <p className="text-sm font-bold sm:text-base">{item.label}</p>
                    </div>
                    <span className="shrink-0 text-xs font-semibold text-brand-gray-light line-through">{item.price}</span>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <p className="mb-2 text-sm font-semibold text-brand-gray-light">
                  Valor total: <span className="line-through">R$ 596,00</span>
                </p>
                <p className="font-sora text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-dark">
                  Seu ingresso hoje
                </p>
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
                  className="relative mb-3 flex items-baseline justify-center gap-1 text-brand-yellow"
                >
                  <motion.div
                    className="absolute inset-0 -z-10 rounded-full bg-brand-yellow/20 blur-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="font-sora text-3xl font-extrabold">R$</span>
                  <span className="font-sora text-7xl font-extrabold tracking-[-0.07em] sm:text-8xl">27,00</span>
                </motion.div>
                <p className="mx-auto mb-7 max-w-xs text-sm font-semibold italic leading-relaxed text-brand-gray-light">
                  O valor de uma marmita por um plano que vai mudar o fim do mês da sua oficina.
                </p>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="offer-shimmer rounded-xl"
                >
                  <CtaButton onClick={() => { window.location.href = appendUtms(CHECKOUT_URL); }} size="xl" pulse className="w-full rounded-xl shadow-[0_18px_45px_-12px_color-mix(in_oklab,var(--color-brand-yellow)_80%,transparent)]">
                    GARANTIR MEU INGRESSO
                  </CtaButton>
                </motion.div>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-bold uppercase tracking-wider text-brand-gray-light">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-brand-yellow" />
                    Pagamento 100% seguro
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-brand-yellow" />
                    Acesso imediato
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="mb-9 text-center sm:mb-10">
            <h2 className="font-sora text-3xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-5xl">
              Responda suas dúvidas aqui ↓
            </h2>
          </div>

          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="overflow-hidden rounded-2xl border border-brand-dark/10 bg-brand-white px-5 shadow-[0_12px_35px_-28px_color-mix(in_oklab,var(--color-brand-dark)_40%,transparent)] sm:px-8"
              >
                <AccordionTrigger className="py-5 text-left font-sora text-[15px] font-extrabold leading-snug text-brand-dark hover:text-brand-yellow hover:no-underline sm:py-6 sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[15px] leading-relaxed text-brand-gray-light sm:pb-6 sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-9 flex justify-center sm:mt-10">
            <CtaButton onClick={() => { window.location.href = appendUtms(CHECKOUT_URL); }} size="xl" pulse className="sm:w-auto">
              GARANTIR MEU INGRESSO
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}