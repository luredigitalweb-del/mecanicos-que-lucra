import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import brandLogo from "@/assets/logo-mecanico-que-lucra-nova.png";
import { CtaButton } from "@/components/landing/ui/CtaButton";

// Troque pelo link real do seu grupo de WhatsApp / comunidade do aulão.
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/";

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
  // Dispara a conversão de compra no Meta Pixel ao abrir a página de obrigado.
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Purchase", { value: 19.9, currency: "BRL" });
    }
  }, []);

  const steps = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Confira seu e-mail",
      description:
        "Enviamos a confirmação da sua compra e o acesso ao evento. Olhe também a caixa de spam ou promoções.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.02h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.82c0 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
        </svg>
      ),
      title: "Entre no grupo de WhatsApp",
      description:
        "É lá que enviamos os lembretes, o link das aulas ao vivo e os materiais. Não fique de fora.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Reserve as datas",
      description:
        "27, 28 e 29 de julho, das 19h às 22h. Bloqueie na agenda e avise quem cuida da oficina com você.",
    },
  ];

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-brand-blackout md:bg-brand-dark">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-yellow/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-brand-yellow/10 blur-[120px]" />

      <section className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-5 py-14 text-center sm:px-8 md:py-20">
        <img src={brandLogo} alt="O Mecânico que Lucra" className="h-auto w-40 sm:w-48" />

        <div className="mt-10 inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand-yellow/15 ring-1 ring-brand-yellow/40">
          <svg className="h-10 w-10 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1.5 font-sora text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">
          Compra confirmada
        </span>

        <h1 className="mt-5 font-sora text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          Sua vaga está <span className="gradient-text">garantida!</span>
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
          Parabéns por dar o primeiro passo para transformar sua oficina. Agora falta pouco para
          você participar do <strong className="text-white">Aulão O Mecânico que Lucra</strong> ao vivo.
        </p>

        <div className="mt-9 w-full max-w-md">
          <CtaButton href={WHATSAPP_GROUP_URL} size="xl" arrow={false} className="w-full">
            Entrar no grupo de WhatsApp
          </CtaButton>
          <p className="mt-3 text-xs text-gray-500">
            Garanta o acesso às aulas ao vivo e aos avisos importantes.
          </p>
        </div>

        <div className="mt-14 w-full">
          <h2 className="mb-6 font-sora text-sm font-bold uppercase tracking-[0.2em] text-brand-yellow">
            Próximos passos
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center rounded-2xl border border-brand-gray-light/40 bg-brand-dark-secondary/80 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/40"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow/15 text-brand-yellow [&>svg]:h-6 [&>svg]:w-6">
                  {step.icon}
                </div>
                <h3 className="mb-2 font-sora text-base font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 w-full rounded-2xl border border-brand-yellow/20 bg-brand-yellow/[0.06] px-6 py-6 sm:px-8">
          <p className="font-sora text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">
            Anote na agenda
          </p>
          <p className="mt-2 font-sora text-xl font-extrabold text-white sm:text-2xl">
            27, 28 e 29 de julho
          </p>
          <p className="mt-1 text-sm text-gray-300">Sempre das 19h às 22h, ao vivo.</p>
        </div>

        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 transition-colors hover:text-white"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Voltar para a página inicial
        </Link>
      </section>

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
