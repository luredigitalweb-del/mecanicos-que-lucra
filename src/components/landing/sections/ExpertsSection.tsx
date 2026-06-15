import expertsPhoto from "@/assets/especialistas-rodrigo-leonardo-novo-v2.png";
import { motion } from "framer-motion";
import { Award, TrendingUp, Sparkles } from "lucide-react";

const experts = [
  {
    name: "Rodrigo Saddock",
    role: "Marketing para Oficinas",
    icon: Sparkles,
    bio: "Cresceu na graxa trabalhando com o pai e assumiu a oficina da família aos 21 anos. Fundador do canal @mktcheiodegraxa e sócio da oficina Selecta em SC, se consolidou como uma referência nacional em marketing para oficinas.",
  },
  {
    name: "Leonardo Gomes",
    role: "Gestão & Operações",
    icon: TrendingUp,
    bio: "Fundador da Blasch Detail e gestor comercial da Allyento Oficina Mecânica. Com mais de 15 anos de experiência no setor, foi de aprendiz em oficina a gestor responsável por operações que faturam acima de R$ 500 mil por mês.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function ExpertsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-5 py-20 sm:px-8 sm:py-28">
      <div className="experts-grid pointer-events-none absolute inset-0 opacity-20" />

      {/* Animated decorative blurs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-28 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-brand-yellow/15 blur-[130px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-brand-yellow/10 blur-[120px]"
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Rotating decorative rings */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full border border-brand-yellow/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full border border-brand-white/5"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12 lg:gap-16"
      >
        <motion.div variants={itemVariants} className="relative lg:col-span-5">
          {/* Animated glow behind image */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-brand-yellow/10 blur-[80px]"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Offset border frame - editorial effect */}
          <motion.div
            aria-hidden
            className="absolute -left-3 -top-3 z-0 h-full w-full rounded-[2rem] border-2 border-brand-yellow/40"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.4 }}
            className="group relative z-10 aspect-[3/4] overflow-hidden rounded-[2rem] border border-brand-white/10 bg-brand-dark-secondary shadow-[0_28px_80px_-32px_color-mix(in_oklab,var(--color-brand-dark)_90%,transparent)]"
          >
            <img
              src={expertsPhoto}
              alt="Rodrigo Saddock e Leonardo Gomes, especialistas em gestão de oficinas"
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />

            {/* Shimmer sweep overlay */}
            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-brand-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

            {/* Floating badge top-left */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-dark/85 px-3 py-2 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-yellow opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-yellow" />
              </span>
              <span className="font-sora text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-white">Ao vivo &amp; prático</span>
            </motion.div>

            {/* Floating badge bottom-right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
              className="absolute bottom-5 right-5 flex items-center gap-2 rounded-2xl border border-brand-yellow/40 bg-brand-dark/90 px-3 py-2 backdrop-blur-md shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--color-brand-yellow)_60%,transparent)]"
            >
              <Award className="h-4 w-4 text-brand-yellow" />
              <span className="font-sora text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-white">
                Especialistas
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-7">
          <motion.div variants={itemVariants} className="mb-5 flex items-center gap-4">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-px w-12 origin-left bg-brand-yellow"
            />
            <p className="font-sora text-xs font-extrabold uppercase tracking-[0.3em] text-brand-yellow">
              Quem vai te ensinar
            </p>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mb-10 max-w-4xl font-sora text-4xl font-extrabold uppercase leading-[0.94] tracking-[-0.045em] text-brand-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Referência nacional em{" "}
            <span className="relative inline-block lg:block">
              <motion.span
                aria-hidden
                className="absolute -inset-x-2 -inset-y-1 -z-10 rounded-lg bg-brand-yellow/10 blur-2xl"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-brand-yellow">oficina que lucra</span>
            </span>
          </motion.h2>

          <motion.div variants={itemVariants} className="grid gap-5 sm:grid-cols-2">
            {experts.map((expert, index) => {
              const Icon = expert.icon;
              return (
                <motion.article
                  key={expert.name}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative overflow-hidden rounded-2xl border border-brand-white/10 bg-brand-white/[0.035] p-6 transition-colors duration-500 hover:border-brand-yellow/40 hover:bg-brand-white/[0.06] sm:p-7"
                >
                  {/* Animated corner glow */}
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-yellow/0 blur-3xl transition-colors duration-500 group-hover:bg-brand-yellow/20"
                  />

                  {/* Top accent line */}
                  <motion.div
                    aria-hidden
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
                    className="absolute left-0 top-0 h-[2px] w-full origin-left bg-gradient-to-r from-brand-yellow via-brand-yellow/40 to-transparent"
                  />

                  <div className="relative flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-sora text-xl font-extrabold text-brand-white transition-colors duration-300 group-hover:text-brand-yellow sm:text-2xl">
                        {expert.name}
                      </h3>
                      <p className="mt-1 font-sora text-[11px] font-bold uppercase tracking-[0.18em] text-brand-yellow/80">
                        {expert.role}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                  </div>

                  <span className="mb-4 mt-3 block h-1 w-9 rounded-full bg-brand-yellow" />

                  <p className="text-sm font-medium leading-relaxed text-text-secondary sm:text-[15px]">
                    {expert.bio}
                  </p>

                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}