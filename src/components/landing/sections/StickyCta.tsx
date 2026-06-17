import { useState, useEffect } from "react";
import { CtaButton } from "@/components/landing/ui/CtaButton";
import { CHECKOUT_URL, appendUtms } from "@/lib/utm";

export function StickyCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[#0F0F0F]/95 backdrop-blur-md border-t border-[#2A2A2A] px-4 py-3">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <p className="text-white font-sora font-bold text-sm">
              Aulão O Mecânico que Lucra
            </p>
            <p className="text-brand-yellow text-xs font-bold">
              Apenas R$ 27,00 • Vagas limitadas
            </p>
          </div>
          <CtaButton onClick={() => { window.location.href = appendUtms(CHECKOUT_URL); }} size="default" className="w-full sm:w-auto">
            GARANTIR MINHA VAGA
          </CtaButton>
        </div>
      </div>
    </div>
  );
}
