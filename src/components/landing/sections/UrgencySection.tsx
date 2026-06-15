import { CtaButton } from "@/components/landing/ui/CtaButton";
import { Card } from "@/components/landing/ui/Card";
import { Highlight } from "@/components/landing/ui/Highlight";

export function UrgencySection() {
  const bonuses = [
    {
      title: "Planilha de Precificação Automotiva",
      value: "R$ 97",
      desc: "Calcule o preço justo de qualquer serviço em segundos",
    },
    {
      title: "Script de Atendimento WhatsApp",
      value: "R$ 67",
      desc: "As frases exatas para converter orçamentos em vendas",
    },
    {
      title: "Checklist de Diagnóstico da Oficina",
      value: "R$ 47",
      desc: "Identifique os gargalos do seu negócio em 15 minutos",
    },
  ];

  return (
    <section id="oferta-final" className="bg-brand-dark-secondary py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-sora mb-4">
            Oferta <Highlight>Por Tempo Limitado</Highlight>
          </h2>
          <p className="text-gray-400 text-lg">
            Última chance de garantir sua vaga com bônus exclusivos.
          </p>
        </div>

        {/* Price Card */}
        <Card variant="dark" className="mb-10 border-brand-yellow/30">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">Investimento único</p>
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-gray-500 line-through text-lg">R$ 197,00</span>
            </div>
            <p className="text-5xl md:text-6xl font-extrabold text-brand-yellow font-sora mb-2">
              R$ 19,90
            </p>
            <p className="text-gray-400 text-sm mb-6">ou 1x no cartão • Acesso vitalício</p>

            <CtaButton href="#checkout" size="xl" pulse className="mb-4">
              QUERO GARANTIR MINHA VAGA
            </CtaButton>

            <p className="text-gray-500 text-xs">
              Pagamento 100% seguro via Hotmart
            </p>
          </div>
        </Card>

        {/* Bonuses */}
        <div className="mb-12">
          <h3 className="text-center text-xl font-bold text-white font-sora mb-6">
            + Bônus exclusivos (por tempo limitado)
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {bonuses.map((bonus, index) => (
              <Card key={index} variant="dark" className="text-center">
                <div className="text-brand-yellow font-extrabold text-2xl font-sora mb-2">
                  {bonus.value}
                </div>
                <h4 className="text-white font-sora font-bold text-sm mb-2">
                  {bonus.title}
                </h4>
                <p className="text-gray-400 text-xs">{bonus.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Total Value */}
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm">
            Valor total do pacote: <span className="line-through">R$ 408,00</span>
          </p>
          <p className="text-2xl font-bold text-brand-yellow font-sora">
            Hoje: R$ 19,90
          </p>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Pagamento Seguro
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Garantia 7 Dias
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Acesso Vitalício
          </div>
        </div>
      </div>
    </section>
  );
}
