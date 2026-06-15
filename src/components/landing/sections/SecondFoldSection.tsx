import { CtaButton } from "@/components/landing/ui/CtaButton";
import { Highlight } from "@/components/landing/ui/Highlight";

export function SecondFoldSection() {
  return (
    <section className="bg-brand-dark py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-sora mb-6">
            Em 3 dias, você vai aprender o que levaria{" "}
            <Highlight>anos descobrir sozinho</Highlight>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Não é teoria. É o passo a passo prático que usamos para escalar oficinas de qualquer tamanho.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {[
            {
              day: "DIA 1",
              title: "O Mapa do Mecânico que Lucra",
              desc: "Diagnóstico completo do seu negócio. Identifique os gargalos que estão sugando seu lucro e defina o plano de ação personalizado.",
            },
            {
              day: "DIA 2",
              title: "Máquina de Clientes",
              desc: "O sistema de atração e retenção de clientes que funciona no setor automotivo. Do zero ao fluxo constante de orçamentos aprovados.",
            },
            {
              day: "DIA 3",
              title: "Preço Justo, Lucro Garantido",
              desc: "Como precificar corretamente, vender valor ao invés de preço, e transformar cada orçamento em dinheiro no caixa.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] p-8 hover:border-brand-yellow/50 transition-colors"
            >
              <div className="mb-4 inline-block rounded bg-brand-yellow px-3 py-1 text-xs font-bold text-brand-dark font-sora">
                {item.day}
              </div>
              <h3 className="mb-3 text-xl font-bold text-white font-sora">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CtaButton href="#oferta" size="lg">
            QUERO APRENDER ESSE MÉTODO
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
