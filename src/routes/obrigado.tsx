import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";
import brandLogo from "@/assets/logo-mecanico-que-lucra-nova.png";
import { CtaButton } from "@/components/landing/ui/CtaButton";

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfgwr7JnZyuia6wpc7Y3825HIBZLN7Ka7498Ax29gvSyTxRqg/viewform";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Compra confirmada | Aulão O Mecânico que Lucra" },
      {
        name: "description",
        content:
          "Sua vaga no Aulão O Mecânico que Lucra está confirmada. Veja os próximos passos para garantir sua presença ao vivo.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Compra confirmada | Aulão O Mecânico que Lucra" },
      {
        property: "og:description",
        content: "Sua vaga está confirmada! Veja os próximos passos para participar do aulão ao vivo.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ObrigadoPage,
});

function ObrigadoPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Dispara a conversão de compra no Meta Pixel ao abrir a página de obrigado.
    if ((window as any).fbq) {
      (window as any).fbq("track", "Purchase", { value: 19.9, currency: "BRL" });
    }
    // Redireciona automaticamente para o formulario apos 10 segundos
    // (tempo para o Pixel registrar e a pessoa ver a confirmacao).
    const timer = window.setTimeout(() => {
      window.location.href = FORM_URL;
    }, 10000);
    return () => window.clearTimeout(timer);
  }, []);

  const ease = [0.22, 1, 0.36, 1] as const;

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.13, delayChildren: 0.55 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease } },
  };

  // Confete sutil — posições/atrasos deterministas por índice (sem aleatoriedade).
  const confetti = Array.from({ length: 16 }, (_, i) => ({
    left: `${(i * 6.25 + 4) % 100}%`,
    delay: 0.4 + (i % 8) * 0.12,
    duration: 2.6 + (i % 5) * 0.45,
    color: i % 3 === 0 ? "#F85A0B" : i % 3 === 1 ? "#FF7629" : "#FFFFFF",
    rotate: i % 2 === 0 ? 360 : -360,
    size: 7 + (i % 3) * 3,
  }));

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-brand-blackout md:bg-brand-dark">
      {/* Glows ambientes animados */}
      <motion.div
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-yellow/15 blur-[120px]"
        animate={{ opacity: [0.4, 0.75, 0.4], scale: [0.9, 1.08, 0.9] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-brand-yellow/10 blur-[120px]"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.12, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Confete caindo (uma vez) */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        {confetti.map((c, i) => (
          <motion.span
            key={i}
            className="absolute top-0 rounded-[2px]"
            style={{ left: c.left, width: c.size, height: c.size * 1.6, backgroundColor: c.color }}
            initial={{ y: -40, opacity: 0, rotate: 0 }}
            animate={{ y: "105vh", opacity: [0, 1, 1, 0], rotate: c.rotate }}
            transition={{ duration: c.duration, delay: c.delay, ease: "easeIn" }}
          />
        ))}
      </div>

      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-5 py-14 text-center sm:px-8 md:py-20"
      >
        {/* Logo */}
        <motion.img
          variants={item}
          src={brandLogo}
          alt="O Mecânico que Lucra"
          className="h-auto w-40 sm:w-48"
        />

        {/* Selo de sucesso com check desenhando + anel pulsante */}
        <motion.div
          className="relative mt-10 inline-flex h-24 w-24 items-center justify-center"
          initial={{ scale: 0, rotate: -25 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 13, delay: 0.15 }}
        >
          {/* Anel pulsante */}
          <motion.span
            className="absolute inset-0 rounded-full ring-2 ring-brand-yellow/50"
            animate={{ scale: [1, 1.35], opacity: [0.6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
          />
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-yellow/15 ring-1 ring-brand-yellow/40">
            <svg className="h-10 w-10 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <motion.path
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, ease, delay: 0.5 }}
              />
            </svg>
          </div>
        </motion.div>

        <motion.span
          variants={item}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1.5 font-sora text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow"
        >
          Compra confirmada
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-5 font-sora text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Sua vaga está <span className="gradient-text">garantida!</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg"
        >
          Parabéns por dar o primeiro passo para transformar sua oficina. Agora falta pouco para
          você participar do <strong className="text-white">Aulão O Mecânico que Lucra</strong> ao vivo.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex w-full max-w-md flex-col items-center gap-4">
          <CtaButton
            href={FORM_URL}
            size="xl"
            arrow={false}
            className="w-full"
          >
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Preencher formulário
          </CtaButton>
          <p className="text-xs text-gray-500">
            Você será redirecionado para o formulário automaticamente. Se não acontecer, clique no botão acima.
          </p>
          <a href="/" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
            Voltar para o início
          </a>
        </motion.div>

        {/* Lembrete das datas */}
        <motion.div
          variants={item}
          className="mt-12 w-full rounded-2xl border border-brand-yellow/20 bg-brand-yellow/[0.06] px-6 py-6 sm:px-8"
        >
          <p className="font-sora text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">
            Anote na agenda
          </p>
          <p className="mt-2 font-sora text-xl font-extrabold text-white sm:text-2xl">
            27, 28 e 29 de julho
          </p>
          <p className="mt-1 text-sm text-gray-300">Sempre das 19h às 22h, ao vivo.</p>
        </motion.div>
      </motion.section>

      <footer className="relative z-10 border-t border-[#2A2A2A] bg-[#0F0F0F] px-4 py-8 text-center">
        <p className="font-sora text-sm font-bold text-brand-yellow">Mkt Cheio de Graxa</p>
        <p className="mt-1 text-xs text-gray-500">Rodrigo Saddock &amp; Leonardo Gomes</p>
        <p className="mt-3 text-xs text-gray-600">
          © 2025 Mkt Cheio de Graxa. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
