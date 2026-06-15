import { Check } from "lucide-react";
import { CtaButton } from "@/components/landing/ui/CtaButton";
import { TicketCounter } from "@/components/landing/ui/AnimatedCounter";
import heroBanner from "@/assets/hero-mecanico.png.asset.json";
import heroBannerMobile from "@/assets/hero-mobile-banner-v5.png.asset.json";
import brandLogo from "@/assets/logo-mecanico-que-lucra-nova.png.asset.json";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-blackout md:bg-brand-dark">
      {/* Background image — desktop only */}
      <picture className="absolute inset-0 z-0 hidden md:block">
        <img
          src={heroBanner.url}
          alt="Rodrigo Saddock e Leonardo Gomes em uma oficina mecânica"
          className="hero-backdrop h-full w-full object-cover object-center"
          fetchPriority="high"
        />
      </picture>

      {/* Gradient overlay — desktop only */}
      <div className="absolute inset-0 z-10 hidden bg-[linear-gradient(90deg,var(--color-brand-dark)_0%,color-mix(in_oklab,var(--color-brand-dark)_96%,transparent)_34%,color-mix(in_oklab,var(--color-brand-dark)_42%,transparent)_58%,transparent_78%)] md:block" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-1/2 bg-[radial-gradient(circle_at_30%_50%,color-mix(in_oklab,var(--color-brand-yellow)_10%,transparent),transparent_62%)] md:block" />

      {/* Mobile hero — full-bleed image followed by an integrated conversion panel */}
      <div className="relative z-20 w-full bg-brand-dark md:hidden">
        <div className="relative h-[25rem] overflow-hidden bg-brand-dark">
          <img
            src={heroBannerMobile.url}
            alt="Rodrigo Saddock e Leonardo Gomes em uma oficina mecânica"
            className="hero-mobile-banner h-full w-full object-cover object-top"
            fetchPriority="high"
          />
          {/* Side + bottom darkening like desktop — keeps image visible but readable */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,color-mix(in_oklab,var(--color-brand-dark)_55%,transparent)_62%,var(--color-brand-dark)_100%)]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(90deg,var(--color-brand-dark)_0%,transparent_80%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(270deg,var(--color-brand-dark)_0%,transparent_80%)]" />
          {/* Centered logo above the conversion panel */}
          <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
            <img
              src={brandLogo.url}
              alt=""
              aria-hidden="true"
              className="h-auto w-28 opacity-90"
            />
          </div>
        </div>

        <div className="relative -mt-6 flex flex-col items-center overflow-hidden bg-brand-dark px-6 pb-8 text-center">
          {/* Orange ambient glow behind the lower content */}
          <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--color-brand-yellow)_28%,transparent),transparent_65%)]" />


          <div className="relative z-10 w-full">
            <div className="hero-reveal hero-reveal-1 mb-4">
              <TicketCounter sold={847} total={1000} />
            </div>
            <h1 className="hero-reveal hero-reveal-2 mb-3 font-sora text-[1.5rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-white">
              Em 3 dias vamos construir um{" "}
              <span className="text-brand-yellow">plano de ação a prova de erros</span>{" "}
              para o lucro sobrar na sua oficina.
            </h1>
            <p className="hero-reveal hero-reveal-3 mb-4 max-w-sm text-sm leading-relaxed text-text-secondary">
              Um passo a passo prático que já ajudou mais de{" "}
              <strong className="font-bold text-brand-white underline decoration-brand-yellow decoration-2 underline-offset-4">
                750 oficinas
              </strong>{" "}
              a saírem do vermelho.
            </p>
            <div className="hero-reveal hero-reveal-4 mb-5 flex flex-wrap justify-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-text-secondary">
              {["Materiais", "Planilhas", "IA treinada"].map((item) => (
                <span key={item} className="flex items-center gap-2 rounded-md border border-brand-gray bg-brand-dark-secondary px-3 py-1.5">
                  <Check className="h-3 w-3 stroke-[3] text-brand-yellow drop-shadow-[0_0_6px_color-mix(in_oklab,var(--color-brand-yellow)_70%,transparent)]" />
                  {item}
                </span>
              ))}
            </div>
            <div className="hero-reveal hero-reveal-5">
              <CtaButton
                href="https://pay.assiny.com.br/033c16/node/bkMCuu"
                size="xl"
                pulse={false}
                className="min-h-[3rem] rounded-xl bg-brand-yellow text-brand-dark shadow-[0_14px_38px_color-mix(in_oklab,var(--color-brand-yellow)_32%,transparent)] hover:bg-brand-yellow-light hover:shadow-[0_18px_46px_color-mix(in_oklab,var(--color-brand-yellow)_45%,transparent)]"
              >
                GARANTIR MEU INGRESSO
              </CtaButton>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop content (image already fills the section as a background) */}
      <div className="relative z-20 mx-auto hidden w-full max-w-[1440px] flex-col items-center px-5 pb-6 pt-6 text-center sm:px-8 sm:pt-7 md:flex md:min-h-screen md:flex-row md:items-center md:py-12 md:text-left lg:px-12">
        <div className="flex w-full flex-col items-center md:w-[52%] md:max-w-[650px] md:items-start">
          {/* Logo */}
          <img
            src={brandLogo.url}
            alt="Aulão O Mecânico que Lucra"
            className="hero-reveal hero-reveal-1 mb-4 h-auto w-28 sm:mb-5 sm:w-40 md:mb-7 md:w-40 lg:mb-9 lg:w-48"
          />

          {/* Counter — desktop: last */}
          <div className="hero-reveal hero-reveal-2 mb-5 w-full max-w-md sm:mb-6 md:order-7 md:mb-0 md:max-w-lg">
            <TicketCounter sold={847} total={1000} />
          </div>

          {/* Headline */}
          <h1 className="hero-reveal hero-reveal-3 mb-4 max-w-2xl font-sora text-[1.5rem] font-extrabold leading-[1.08] tracking-[-0.025em] text-brand-white sm:mb-5 sm:text-3xl md:order-2 md:mb-4 lg:text-[2.55rem]">
            Em 3 dias vamos construir um{" "}
            <span className="text-brand-yellow">plano de ação a prova de erros</span>{" "}
            para o lucro sobrar na sua oficina.
          </h1>

          {/* Subheadline */}
          <p className="hero-reveal hero-reveal-4 mb-5 max-w-lg text-sm leading-relaxed text-text-secondary sm:mb-6 sm:text-lg md:order-3">
            Um passo a passo prático que já ajudou mais de{" "}
            <strong className="font-bold text-brand-white underline decoration-brand-yellow decoration-2 underline-offset-4">
              750 oficinas
            </strong>{" "}
            a saírem do vermelho.
          </p>

          {/* Chips */}
          <div className="hero-reveal hero-reveal-5 mb-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-text-secondary sm:mb-7 sm:text-xs md:order-4 md:mb-8 md:justify-start">
            {["Materiais", "Planilhas", "IA treinada"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-brand-yellow" />
                {item}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="hero-reveal hero-reveal-6 mb-2 w-full sm:mb-2 md:order-5 md:mb-8 md:w-auto">
            <CtaButton
              href="https://pay.assiny.com.br/033c16/node/bkMCuu"
              size="xl"
              pulse
              className="rounded-xl shadow-[0_14px_38px_color-mix(in_oklab,var(--color-brand-yellow)_28%,transparent)]"
            >
              GARANTIR MEU INGRESSO
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
