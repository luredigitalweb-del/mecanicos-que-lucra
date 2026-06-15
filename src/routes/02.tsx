import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/landing/sections/HeroSection";
import { ScheduleSection } from "@/components/landing/sections/ScheduleSection";
import { BuildSection } from "@/components/landing/sections/BuildSection";
import { ResultsTestimonialsSection } from "@/components/landing/sections/ResultsTestimonialsSection";
import { ExpertsSection } from "@/components/landing/sections/ExpertsSection";
import { PurchaseFaqSection } from "@/components/landing/sections/PurchaseFaqSection";

export const Route = createFileRoute("/02")({
  head: () => ({
    meta: [
      { title: "Aulão O Mecânico que Lucra | Banner + Cronograma + Depoimentos" },
      { name: "description", content: "Página com o cronograma, o que você vai construir, depoimentos, sobre os especialistas e a oferta." },
    ],
  }),
  component: Page02,
});

function Page02() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <HeroSection />
      <ScheduleSection />
      <BuildSection />
      <ResultsTestimonialsSection />
      <ExpertsSection />
      <PurchaseFaqSection />
    </main>
  );
}
