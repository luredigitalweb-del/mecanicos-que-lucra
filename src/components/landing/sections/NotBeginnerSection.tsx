import { motion } from "framer-motion";
import { CtaButton } from "@/components/landing/ui/CtaButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function NotBeginnerSection() {
  return (
    <section className="relative overflow-hidden bg-brand-offwhite px-5 py-20 text-brand-dark sm:px-8 md:py-28">
      {/* Barra superior amarela */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-none absolute left-0 top-0 h-1 w-full origin-left bg-brand-yellow"
      />

      {/* Círculos decorativos rotacionando */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -left-24 top-24 h-56 w-56 rounded-full border border-brand-yellow/30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full border border-brand-yellow/30"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-5xl text-center"
      >
        {/* Label superior com linhas */}
        <motion.div
          variants={itemVariants}
          className="mb-7 flex items-center justify-center gap-4 sm:gap-6"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="h-px w-10 origin-right bg-brand-yellow sm:w-20"
          />
          <p className="font-sora text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow-dark sm:text-sm">
            Aulão O Mecânico que Lucra
          </p>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="h-px w-10 origin-left bg-brand-yellow sm:w-20"
          />
        </motion.div>

        {/* Título principal */}
        <motion.h2
          variants={itemVariants}
          className="font-sora text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-6xl md:text-7xl"
        >
          Você não é{" "}
          <span className="relative inline-block">
            iniciante
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="absolute -bottom-1 left-0 h-1.5 w-full origin-left bg-brand-yellow"
            />
          </span>
          .
        </motion.h2>

        {/* Corpo do texto */}
        <motion.div
          variants={containerVariants}
          className="mx-auto mt-10 max-w-3xl sm:mt-12"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg leading-relaxed text-brand-gray-light sm:text-xl md:text-2xl"
          >
            Sua oficina já tem movimento,
            <br className="hidden sm:block" /> tem funcionário, já passou por fases difíceis.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-9 text-lg text-brand-gray-light sm:text-xl md:text-2xl"
          >
            Mas chegou num ponto onde
          </motion.p>

          <motion.p
            variants={scaleVariants}
            className="mt-2 font-sora text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl"
          >
            <motion.span
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative inline-block bg-brand-yellow/25 px-2 py-1"
            >
              trabalhar mais não resolve.
              {/* Brilho sutil ao redor */}
              <motion.span
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-1 -z-10 rounded bg-brand-yellow/20"
              />
            </motion.span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-10 text-lg text-brand-gray-light sm:text-xl md:text-2xl"
          >
            O que falta não é esforço.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-3 max-w-3xl text-xl font-medium leading-snug sm:text-2xl md:text-3xl"
          >
            É saber que{" "}
            <motion.strong
              animate={{
                textShadow: [
                  "0 0 0px rgba(234, 179, 8, 0)",
                  "0 0 12px rgba(234, 179, 8, 0.25)",
                  "0 0 0px rgba(234, 179, 8, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative inline-block text-brand-yellow-dark"
            >
              poderia estar ganhando muito mais
              <motion.span
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-1 -z-10 rounded bg-brand-yellow/10"
              />
            </motion.strong>{" "}
            com o que já tem.
          </motion.p>
        </motion.div>

        {/* Divisória animada */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="mx-auto my-10 h-px w-24 origin-center bg-brand-yellow/60"
        />

        {/* Seta com animação */}
        <motion.p
          variants={itemVariants}
          className="mb-8 font-sora text-lg font-bold sm:text-xl"
        >
          E nisso nós concordamos.{" "}
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
            aria-hidden="true"
          >
            ↓
          </motion.span>
        </motion.p>

        {/* Botão CTA com animação */}
        <motion.div
          variants={scaleVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <CtaButton href="#oferta" size="xl">
            Garantir meu ingresso
          </CtaButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
