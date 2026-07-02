import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/landing/sections/HeroSection";
import { PainIntroSection } from "@/components/landing/sections/PainIntroSection";
import { NotBeginnerSection } from "@/components/landing/sections/NotBeginnerSection";
import { AttentionSection } from "@/components/landing/sections/AttentionSection";
import { ScheduleSection } from "@/components/landing/sections/ScheduleSection";
import { BuildSection } from "@/components/landing/sections/BuildSection";
import { ActionPlanSection } from "@/components/landing/sections/ActionPlanSection";
import { BonusSection } from "@/components/landing/sections/BonusSection";
import { ExpertsSection } from "@/components/landing/sections/ExpertsSection";
import { PurchaseFaqSection } from "@/components/landing/sections/PurchaseFaqSection";
import { ResultsTestimonialsSection } from "@/components/landing/sections/ResultsTestimonialsSection";
import { FooterSection } from "@/components/landing/sections/FooterSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aulão O Mecânico que Lucra | Rodrigo Saddock & Leonardo Gomes" },
      { name: "description", content: "Aulão ao vivo de 3 dias para donos de oficina mecânica e centros automotivos. Aprenda o passo a passo para fazer sua oficina lucrar mais. Apenas R$ 37,00." },
      { property: "og:title", content: "Aulão O Mecânico que Lucra — 3 Dias para Transformar sua Oficina" },
      { property: "og:description", content: "Aulão ao vivo de 3 dias para donos de oficina mecânica. Aprenda o passo a passo para fazer sua oficina lucrar mais. Apenas R$ 37,00." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <HeroSection />
      <PainIntroSection />
      <NotBeginnerSection />
      <AttentionSection />
      <ScheduleSection />
      <BuildSection />
      <ActionPlanSection />
      <ResultsTestimonialsSection />
      <BonusSection />
      <ExpertsSection />
      <PurchaseFaqSection />
      <FooterSection />
    </main>
  );
}
