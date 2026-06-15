import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/landing/sections/HeroSection";
import { PurchaseFaqSection } from "@/components/landing/sections/PurchaseFaqSection";

export const Route = createFileRoute("/01")({
  head: () => ({
    meta: [
      { title: "Aulão O Mecânico que Lucra | Banner + Plano" },
      { name: "description", content: "Página simplificada com o banner e o plano de ação para compra." },
    ],
  }),
  component: Page01,
});

function Page01() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <HeroSection />
      <PurchaseFaqSection />
    </main>
  );
}
