import { Check, CalendarDays, Clock } from "lucide-react";
import { CtaButton } from "@/components/landing/ui/CtaButton";
import { SalesProgressBar } from "@/components/landing/ui/SalesProgressBar";
import heroBanner from "@/assets/hero-mecanico.jpg";
import heroBannerMobile from "@/assets/hero-mobile-banner-v5.jpg";
import brandLogo from "@/assets/logo-mecanico-que-lucra-nova.png";
import brandLogoDark from "@/assets/logo-mecanico-que-lucra.png";

interface HeroSectionProps {
  /** true = herói com fundo branco e texto escuro (usado só na /02). */
  light?: boolean;
}

export function HeroSection({ light = false }: HeroSectionProps) {
  const sectionBg = light ? "bg-white" : "bg-brand-blackout md:bg-brand-dark";
  const panelBg = light ? "bg-white" : "bg-brand-dark";
  const headingText = light ? "text-brand-dark" : "text-brand-white";
  const subText = light ? "text-brand-gray-light" : "text-text-secondary";
  const strongText = light ? "text-brand-dark" : "text-brand-white";

  // Overlay do desktop: some a imagem para branco (light) ou preto (dark) do lado esquerdo, onde fica o texto.
  const desktopOverlay =
    "bg-[linear-gradient(90deg,var(--color-brand-dark)_0%,color-mix(in_oklab,var(--color-brand-dark)_96%,transparent)_34%,color-mix(in_oklab,var(--color-brand-dark)_42%,transparent)_58%,transparent_78%)]";

  // Light: branco solido ate ~37% e dissolve totalmente ate 50% — os dois comecam depois disso.
  const lightOverlay =
    "bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_37%,rgba(255,255,255,0.92)_41%,rgba(255,255,255,0.55)_45%,rgba(255,255,255,0.18)_48%,transparent_52%)]";

  // Fades da imagem mobile — dissolvem a foto no painel (branco no light, escuro no dark).
  const mobileFadeBottom = light
    ? "bg-[linear-gradient(180deg,transparent_72%,rgba(0,0,0,0.3)_100%)]"
    : "bg-[linear-gradient(180deg,transparent_0%,color-mix(in_oklab,var(--color-brand-dark)_55%,transparent)_62%,var(--color-brand-dark)_100%)]";
  const mobileFadeLeft = light
    ? ""
    : "bg-[linear-gradient(90deg,var(--color-brand-dark)_0%,transparent_80%)]";
  const mobileFadeRight = light
    ? ""
    : "bg-[linear-gradient(270deg,var(--color-brand-dark)_0%,transparent_80%)]";

  // Emenda foto -> painel: no light o painel branco sobe com topo arredondado sobre a foto.
  const panelShape = light
    ? "-mt-10 rounded-t-[2rem] pt-8 shadow-[0_-16px_40px_-14px_rgba(0,0,0,0.35)]"
    : "-mt-6 pt-5";
  const logoPos = light ? "bottom-14" : "bottom-6";

  const chipClass = light
    ? "flex items-center gap-2 rounded-md border border-brand-dark/10 bg-brand-offwhite px-3 py-1.5"
    : "flex items-center gap-2 rounded-md border border-brand-gray bg-brand-dark-secondary px-3 py-1.5";

  return (
    <section className={`relative overflow-hidden ${sectionBg}`}>
      {/* Background image — desktop only */}
      <picture className="absolute inset-0 z-0 hidden md:block">
        <img
          src={heroBanner}
          alt="Rodrigo Saddock e Leonardo Gomes em uma oficina mecânica"
          className="hero-backdrop h-full w-full object-cover object-center"
          fetchPriority="high"
        />
      </picture>

      {/* Overlay — no light o branco termina antes dos dois, para nao lava-los */}
      <div className={`absolute inset-0 z-10 hidden md:block ${light ? lightOverlay : desktopOverlay}`} />
      {!light && (
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-1/2 bg-[radial-gradient(circle_at_30%_50%,color-mix(in_oklab,var(--color-brand-yellow)_10%,transparent),transparent_62%)] md:block" />
      )}

      {/* Mobile hero — full-bleed image followed by an integrated conversion panel */}
      <div className={`relative z-20 w-full md:hidden ${panelBg}`}>
        <div className={`relative h-[23rem] overflow-hidden ${panelBg}`}>
          <img
            src={heroBannerMobile}
            alt="Rodrigo Saddock e Leonardo Gomes em uma oficina mecânica"
            className="hero-mobile-banner h-full w-full object-cover object-[center_top]"
            fetchPriority="high"
          />
          {/* Side + bottom darkening like desktop — keeps image visible but readable */}
          <div className={`pointer-events-none absolute inset-0 ${mobileFadeBottom}`} />
          <div className={`pointer-events-none absolute inset-y-0 left-0 w-1/2 ${mobileFadeLeft}`} />
          <div className={`pointer-events-none absolute inset-y-0 right-0 w-1/3 ${mobileFadeRight}`} />
          {/* Centered logo above the conversion panel */}
          <div className={`pointer-events-none absolute inset-x-0 flex justify-center ${logoPos}`}>
            <img
              src={brandLogo}
              alt=""
              aria-hidden="true"
              className="h-auto w-28 opacity-90"
            />
          </div>
        </div>

        <div className={`relative z-10 flex flex-col items-center overflow-hidden px-6 pb-8 text-center ${panelShape} ${panelBg}`}>
          {/* Orange ambient glow behind the lower content */}
          <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--color-brand-yellow)_28%,transparent),transparent_65%)]" />


          <div className="relative z-10 w-full">
            <h1 className={`hero-reveal hero-reveal-2 mb-2.5 font-sora text-[1.4rem] font-extrabold leading-[1.08] tracking-[-0.035em] ${headingText}`}>
              Em 3 dias vamos construir um{" "}
              <span className="text-brand-yellow">plano de ação a prova de erros</span>{" "}
              para o lucro sobrar na sua oficina.
            </h1>
            <p className={`hero-reveal hero-reveal-3 mb-4 max-w-sm text-sm leading-snug ${subText}`}>
              Um passo a passo prático que já ajudou mais de{" "}
              <strong className={`font-bold underline decoration-brand-yellow decoration-2 underline-offset-4 ${strongText}`}>
                750 oficinas
              </strong>{" "}
              a saírem do vermelho.
            </p>
            <div className="hero-reveal hero-reveal-4 flex justify-center">
              <CtaButton
                href="#oferta"
                size="lg"
                pulse={false}
                className="rounded-xl bg-brand-yellow text-brand-dark shadow-[0_14px_38px_color-mix(in_oklab,var(--color-brand-yellow)_32%,transparent)] hover:bg-brand-yellow-light hover:shadow-[0_18px_46px_color-mix(in_oklab,var(--color-brand-yellow)_45%,transparent)]"
              >
                GARANTIR MEU INGRESSO
              </CtaButton>
            </div>
            <SalesProgressBar variant={light ? "light" : "dark"} className="hero-reveal hero-reveal-4 mt-3" />
            <div className={`hero-reveal hero-reveal-5 mt-4 flex flex-col items-center gap-2 text-sm font-bold ${headingText}`}>
              <span className="flex items-center gap-2 rounded-full border border-[#E63946]/40 bg-[#E63946]/15 px-3 py-1 font-sora text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#ff6b75]">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#E63946]" />
                Ao vivo
              </span>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4 text-brand-yellow" />
                  27, 28 e 29 de julho de 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-brand-yellow" />
                  a partir das 19h
                </span>
              </div>
            </div>
            <div className={`hero-reveal hero-reveal-6 mt-4 flex flex-wrap justify-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.12em] ${subText}`}>
              {["Materiais", "Planilhas", "IA treinada"].map((item) => (
                <span key={item} className={chipClass}>
                  <Check className="h-3 w-3 stroke-[3] text-brand-yellow drop-shadow-[0_0_6px_color-mix(in_oklab,var(--color-brand-yellow)_70%,transparent)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop content (image already fills the section as a background) */}
      <div className="relative z-20 mx-auto hidden w-full max-w-[1440px] flex-col items-center px-5 pb-6 pt-6 text-center sm:px-8 sm:pt-7 md:flex md:min-h-screen md:flex-row md:items-center md:py-12 md:text-left lg:px-12">
        <div className={`flex w-full flex-col items-center md:items-start ${light ? "md:w-[46%] md:max-w-[560px]" : "md:w-[52%] md:max-w-[650px]"}`}>
          {/* Logo */}
          <img
            src={light ? brandLogoDark : brandLogo}
            alt="Aulão O Mecânico que Lucra"
            className="hero-reveal hero-reveal-1 mb-4 h-auto w-28 sm:mb-5 sm:w-40 md:mb-7 md:w-40 lg:mb-9 lg:w-48"
          />

          {/* Headline */}
          <h1 className={`hero-reveal hero-reveal-3 mb-4 max-w-2xl font-sora text-[1.5rem] font-extrabold leading-[1.08] tracking-[-0.025em] sm:mb-5 sm:text-3xl md:order-2 md:mb-4 lg:text-[2.55rem] ${headingText}`}>
            Em 3 dias vamos construir um{" "}
            <span className="text-brand-yellow">plano de ação a prova de erros</span>{" "}
            para o lucro sobrar na sua oficina.
          </h1>

          {/* Subheadline */}
          <p className={`hero-reveal hero-reveal-4 mb-5 max-w-lg text-sm leading-relaxed sm:mb-6 sm:text-lg md:order-3 ${subText}`}>
            Um passo a passo prático que já ajudou mais de{" "}
            <strong className={`font-bold underline decoration-brand-yellow decoration-2 underline-offset-4 ${strongText}`}>
              750 oficinas
            </strong>{" "}
            a saírem do vermelho.
          </p>

          {/* Chips */}
          <div className={`hero-reveal hero-reveal-5 mb-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] sm:mb-7 sm:text-xs md:order-4 md:mb-8 md:justify-start ${subText}`}>
            {["Materiais", "Planilhas", "IA treinada"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-brand-yellow" />
                {item}
              </span>
            ))}
          </div>

          {/* Data e hora */}
          <div className={`hero-reveal hero-reveal-6 mb-6 flex flex-col items-center gap-2 text-sm font-bold sm:text-base md:order-[4.5] md:mb-7 md:items-start ${headingText}`}>
            <span className="flex items-center gap-2 rounded-full border border-[#E63946]/40 bg-[#E63946]/15 px-3 py-1 font-sora text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#ff6b75]">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#E63946]" />
              Ao vivo
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 md:justify-start">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-brand-yellow" />
                27, 28 e 29 de julho de 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-brand-yellow" />
                a partir das 19h
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="hero-reveal hero-reveal-6 mb-2 w-full sm:mb-2 md:order-5 md:mb-8 md:w-auto">
            <CtaButton
              href="#oferta"
              size="xl"
              pulse
              className="rounded-xl shadow-[0_14px_38px_color-mix(in_oklab,var(--color-brand-yellow)_28%,transparent)]"
            >
              GARANTIR MEU INGRESSO
            </CtaButton>
          </div>

          <SalesProgressBar variant={light ? "light" : "dark"} className="hero-reveal hero-reveal-6 mb-2 md:order-6 md:mx-0" />
        </div>
      </div>
    </section>
  );
}
