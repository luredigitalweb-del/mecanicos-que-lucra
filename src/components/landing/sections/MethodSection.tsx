import { Card } from "@/components/landing/ui/Card";
import { Highlight } from "@/components/landing/ui/Highlight";

export function MethodSection() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico da Oficina",
      desc: "Identificamos os 3 gargalos que estão matando seu lucro hoje.",
    },
    {
      number: "02",
      title: "Posicionamento de Autoridade",
      desc: "Como se tornar a oficina de referência na sua região sem depender de indicação.",
    },
    {
      number: "03",
      title: "Processo de Vendas",
      desc: "Do atendimento ao fechamento — o passo a passo que converte orçamentos em dinheiro.",
    },
    {
      number: "04",
      title: "Precificação Inteligente",
      desc: "Como cobrar mais sem perder cliente, e ainda fazer ele te indicar.",
    },
    {
      number: "05",
      title: "Escalonamento",
      desc: "Sair da operação e construir um negócio que funciona sem você presente.",
    },
  ];

  return (
    <section className="bg-brand-dark-secondary py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-sora mb-4">
            O Método <Highlight>Mecânico que Lucra</Highlight>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            5 passos que qualquer dono de oficina pode aplicar — mesmo começando do zero em marketing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} variant="dark" className="relative group">
              <div className="absolute -top-4 -left-2 text-5xl font-extrabold text-brand-yellow/20 font-sora group-hover:text-brand-yellow/30 transition-colors">
                {step.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white font-sora mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
