import { Check, FileText, Gift, Sparkles } from "lucide-react";
import { CtaButton } from "@/components/landing/ui/CtaButton";
import { SalesProgressBar } from "@/components/landing/ui/SalesProgressBar";

export function BonusSection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-80 -translate-y-1/2 bg-brand-yellow/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-brand-yellow/20 bg-brand-offwhite shadow-[0_28px_90px_-35px_color-mix(in_oklab,var(--color-brand-yellow)_45%,transparent)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-brand-yellow" />
          <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-brand-yellow/25 bg-brand-yellow/10 text-brand-yellow sm:right-8 sm:top-8">
            <Gift className="h-6 w-6" />
          </div>

          <div className="grid items-center gap-10 p-6 pt-20 sm:p-10 sm:pt-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:p-12">
            <div className="group relative rounded-3xl border border-brand-yellow/20 bg-brand-yellow/10 px-6 py-9 shadow-[0_18px_45px_-25px_color-mix(in_oklab,var(--color-brand-dark)_35%,transparent)] sm:px-10 sm:py-12">
              <p className="mb-8 text-center font-sora text-lg font-extrabold uppercase tracking-wide text-brand-dark sm:text-xl">
                PDFs • Slides • Planilhas
              </p>

              <div className="flex items-end justify-center gap-3 sm:gap-5">
                <div className="-rotate-6 rounded-xl border-2 border-brand-dark bg-brand-white p-4 shadow-lg transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-3 sm:p-5">
                  <div className="mb-4 h-3 w-24 rounded-full bg-brand-yellow sm:w-28" />
                  <div className="space-y-2">
                    <div className="h-2 w-28 rounded-full bg-brand-gray-light/50 sm:w-32" />
                    <div className="h-2 w-24 rounded-full bg-brand-gray-light/40 sm:w-28" />
                    <div className="h-2 w-16 rounded-full bg-brand-gray-light/30 sm:w-20" />
                  </div>
                </div>
                <div className="rotate-6 rounded-xl border-2 border-brand-dark bg-brand-white p-4 shadow-lg transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-3 sm:p-5">
                  <div className="mb-4 h-3 w-24 rounded-full bg-brand-dark sm:w-28" />
                  <div className="space-y-2">
                    <div className="h-2 w-28 rounded-full bg-brand-gray-light/50 sm:w-32" />
                    <div className="h-2 w-24 rounded-full bg-brand-gray-light/40 sm:w-28" />
                    <div className="h-2 w-16 rounded-full bg-brand-gray-light/30 sm:w-20" />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-brand-gray-light">
                <FileText className="h-4 w-4 text-brand-yellow" />
                Materiais prontos para aplicar
              </div>
            </div>

            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-yellow/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-brand-yellow">
                <Sparkles className="h-4 w-4" />
                Bônus exclusivo
              </div>

              <h2 className="mb-5 max-w-xl font-sora text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Materiais complementares
              </h2>

              <p className="mb-7 max-w-xl text-base leading-relaxed text-brand-gray-light sm:text-lg">
                Tudo que for ensinado nos 3 dias vem acompanhado de material de apoio para você não depender só da memória. PDFs, slides e planilhas. É pegar, levar para a oficina e aplicar.
              </p>

              <div className="mb-8 flex items-center gap-4 rounded-xl border-l-4 border-brand-yellow bg-brand-dark px-5 py-4 text-brand-white shadow-lg sm:px-6">
                <Check className="h-6 w-6 shrink-0 text-brand-yellow" strokeWidth={3} />
                <p className="font-sora text-base font-extrabold sm:text-lg">
                  Gratuito para quem garantir o ingresso.
                </p>
              </div>

              <CtaButton href="#oferta" size="xl" pulse arrow className="w-full sm:w-auto">
                GARANTIR MEU INGRESSO
              </CtaButton>

              <SalesProgressBar variant="dark" className="mt-5 md:mx-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
