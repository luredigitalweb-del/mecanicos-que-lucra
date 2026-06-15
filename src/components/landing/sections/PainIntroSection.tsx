import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function PainIntroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-5 py-20 text-brand-white sm:px-8 md:py-28">
      {/* Grid de fundo */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(var(--color-brand-yellow)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Círculos decorativos animados */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-brand-yellow/15"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -left-10 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full border border-brand-yellow/15"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rotate-12 border border-brand-yellow/15"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-5xl text-center"
      >
        {/* Label superior */}
        <motion.p
          variants={itemVariants}
          className="mb-3 font-sora text-lg font-medium sm:text-2xl"
        >
          Deixa eu adivinhar:
        </motion.p>

        {/* Título principal com efeito de destaque */}
        <motion.h2
          variants={itemVariants}
          className="mx-auto mb-12 max-w-4xl font-sora text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl"
        >
          seu problema não é o{" "}
          <span className="relative inline-block">
            faturamento
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="absolute -bottom-1 left-0 h-1.5 w-full origin-left bg-brand-yellow"
            />
          </span>
          .
        </motion.h2>

        {/* Grid com os 2 cards */}
        <motion.div
          variants={containerVariants}
          className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 md:gap-8"
        >
          {/* Card 1 */}
          <motion.div
            variants={scaleVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="relative border-y border-brand-white/15 py-6 md:text-left"
          >
            <motion.span
              variants={itemVariants}
              className="mb-4 block font-sora text-xs font-bold uppercase tracking-[0.2em] opacity-60"
            >
              A rotina está cheia
            </motion.span>
            <p className="font-sora text-xl font-medium leading-snug sm:text-2xl md:text-3xl">
              Todo mês o pátio enche, os carros saem, o WhatsApp não para.
            </p>
            {/* Ícone decorativo */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 top-4 text-4xl opacity-20"
            >
              🔧
            </motion.div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={scaleVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="relative border-y border-brand-white/15 py-6 md:text-left"
          >
            <motion.span
              variants={itemVariants}
              className="mb-4 block font-sora text-xs font-bold uppercase tracking-[0.2em] opacity-60"
            >
              Mas o caixa continua vazio
            </motion.span>
            <p className="font-sora text-xl font-medium leading-snug sm:text-2xl md:text-3xl">
              E mesmo assim, no fim do mês,{" "}
              <motion.strong
                animate={{
                  textShadow: [
                    "0 0 0px rgba(0,0,0,0)",
                    "0 0 10px rgba(0,0,0,0.2)",
                    "0 0 0px rgba(0,0,0,0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative inline-block font-extrabold text-brand-yellow"
              >
                o dinheiro não sobra.
                <motion.span
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-1 -z-10 rounded bg-brand-yellow/15"
                />
              </motion.strong>
            </p>
            {/* Ícone decorativo */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-2 top-4 text-4xl opacity-20"
            >
              💸
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bloco final */}
        <motion.div
          variants={containerVariants}
          className="mx-auto mt-12 max-w-4xl md:mt-16"
        >
          <motion.p
            variants={itemVariants}
            className="font-sora text-xl font-medium leading-snug text-brand-white/70 sm:text-2xl md:text-4xl"
          >
            Mas chegou num ponto onde
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-4 font-sora text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl"
          >
            <span className="relative inline-block">
              {/* Texto com shimmer */}
              <span
                className="relative bg-[linear-gradient(110deg,var(--color-brand-white)_45%,rgba(255,255,255,0.4)_55%,var(--color-brand-white)_65%)] bg-[length:250%_100%] bg-clip-text text-transparent"
                style={{
                  animation: "pain-shimmer 3.5s linear infinite",
                }}
              >
                trabalhar mais não resolve.
              </span>

              {/* Risco vermelho diagonal animado */}
              <motion.svg
                viewBox="0 0 400 40"
                preserveAspectRatio="none"
                className="pointer-events-none absolute left-0 top-1/2 h-[0.6em] w-full -translate-y-1/2"
                aria-hidden
              >
                <motion.path
                  d="M5 28 Q 100 8, 200 22 T 395 14"
                  fill="none"
                  stroke="#E63946"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.6, ease: "easeInOut" }}
                />
              </motion.svg>
            </span>
          </motion.p>

          {/* Selo flutuante */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="mt-5 flex items-center justify-center gap-2"
          >
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block h-2 w-2 rounded-full bg-[#E63946]"
            />
            <span className="font-sora text-xs font-bold uppercase tracking-[0.25em] text-brand-white/60 sm:text-sm">
              É hora de mudar o jogo
            </span>
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="inline-block h-2 w-2 rounded-full bg-[#E63946]"
            />
          </motion.div>

          {/* Barra inferior animada */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="mx-auto mt-8 h-1 w-20 origin-center bg-brand-yellow"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
