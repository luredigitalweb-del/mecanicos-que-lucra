import { CtaButton } from "@/components/landing/ui/CtaButton";
import { SalesProgressBar } from "@/components/landing/ui/SalesProgressBar";
import brandLogo from "@/assets/logo-mecanico-que-lucra.png";

export function ActionPlanSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 md:py-28">
      {/* Decorative blurred shapes */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-yellow/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-yellow/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="action-plan-reveal mx-auto overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_12px_50px_-12px_rgba(248,90,11,0.18)]">
          {/* Top accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-brand-yellow via-brand-yellow-light to-brand-yellow" />

          <div className="px-6 py-10 sm:px-12 sm:py-14 md:px-16 md:py-16">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <img
                src={brandLogo}
                alt="Aulão O Mecânico que Lucra"
                className="h-auto w-40 sm:w-52"
              />
            </div>

            {/* Headline */}
            <div className="mb-8 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-yellow/25 bg-brand-yellow/8 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-brand-yellow animate-pulse" />
                <span className="font-sora text-[10px] font-bold uppercase tracking-[0.2em] text-brand-yellow">
                  Plano de Ação
                </span>
              </div>
              <h2 className="font-sora text-3xl font-extrabold leading-[1.1] tracking-tight text-brand-dark sm:text-4xl md:text-5xl">
                Você sai do Dia 3 com um{" "}
                <span className="text-brand-yellow">checklist</span>{" "}
                do que aplicar já na semana seguinte
              </h2>
            </div>

            {/* Divider */}
            <div className="mx-auto mb-8 flex max-w-xs items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300" />
              <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300" />
            </div>

            {/* Body text */}
            <p className="mx-auto mb-6 max-w-2xl text-center text-lg leading-relaxed text-gray-600 sm:text-xl">
              Quem aplica vê resultado em{" "}
              <span className="font-bold text-brand-dark">30 dias</span>.
            </p>

            <p className="mx-auto mb-10 max-w-xl text-center text-base leading-relaxed text-gray-500">
              Com o plano de ação na mão você sabe por onde começar.
            </p>

            {/* Impact quote */}
            <div className="mx-auto mb-10 max-w-lg rounded-2xl border border-brand-yellow/15 bg-brand-yellow/[0.04] px-6 py-6 text-center sm:px-10 sm:py-8">
              <p className="font-sora text-xl font-extrabold leading-snug text-brand-dark sm:text-2xl">
                Você não vai sair motivado.{" "}
                <span className="text-brand-yellow">Vai sair preparado.</span>
              </p>
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <CtaButton href="#oferta" size="xl" pulse arrow>
                ENTRAR NA LISTA DE ESPERA
              </CtaButton>
            </div>

            <SalesProgressBar variant="light" className="mt-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
