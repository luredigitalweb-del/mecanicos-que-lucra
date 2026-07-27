import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import brandLogo from "@/assets/logo-mecanico-que-lucra-nova.png";
import { buildWhatsappUrl, getStoredLead } from "@/lib/waitlist";

export const Route = createFileRoute("/lista-confirmada")({
  head: () => ({
    meta: [
      { title: "Você está na lista de espera | Aulão O Mecânico que Lucra" },
      {
        name: "description",
        content:
          "Seu cadastro na lista de espera foi confirmado. Fale com a gente no WhatsApp.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ListaConfirmadaPage,
});

function ListaConfirmadaPage() {
  const lead = useMemo(() => getStoredLead(), []);
  const whatsappUrl = useMemo(() => buildWhatsappUrl(lead), [lead]);
  const [redirecting, setRedirecting] = useState(true);

  // Encaminha automaticamente para o WhatsApp após alguns segundos.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const timer = window.setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [whatsappUrl]);

  const ease = [0.22, 1, 0.36, 1] as const;
  const firstName = lead?.nome?.trim().split(" ")[0];

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-blackout px-5 py-16 text-center md:bg-brand-dark">
      {/* glows */}
      <motion.div
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-yellow/15 blur-[120px]"
        animate={{ opacity: [0.4, 0.75, 0.4], scale: [0.9, 1.08, 0.9] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#25D366]/10 blur-[120px]"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.12, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease }}
        className="relative z-10 mx-auto flex w-full max-w-lg flex-col items-center"
      >
        <img src={brandLogo} alt="Aulão O Mecânico que Lucra" className="h-auto w-40 sm:w-48" />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 14 }}
          className="mt-8"
        >
          <CheckCircle2 className="h-20 w-20 text-brand-yellow" strokeWidth={2} />
        </motion.div>

        <h1 className="mt-6 font-sora text-3xl font-extrabold leading-tight text-brand-white sm:text-4xl">
          {firstName ? `${firstName}, você` : "Você"} está na{" "}
          <span className="text-brand-yellow">lista de espera!</span>
        </h1>

        <p className="mt-4 max-w-md text-base leading-relaxed text-text-secondary">
          Seu cadastro foi confirmado. Assim que abrirem novas vagas, você é avisado
          primeiro. Toque no botão abaixo para falar com a gente no WhatsApp e não
          perder nenhum aviso.
        </p>

        <a
          href={whatsappUrl}
          onClick={() => setRedirecting(false)}
          className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 font-sora text-base font-extrabold uppercase tracking-wide text-white shadow-[0_16px_40px_-12px_rgba(37,211,102,0.7)] transition-transform hover:scale-[1.03] sm:w-auto"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Falar no WhatsApp
        </a>

        {redirecting && (
          <p className="mt-4 text-xs text-text-secondary/70">
            Você será encaminhado para o WhatsApp em instantes...
          </p>
        )}
      </motion.div>
    </main>
  );
}
