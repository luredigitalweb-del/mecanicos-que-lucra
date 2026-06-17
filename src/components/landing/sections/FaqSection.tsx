import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Preciso entender de marketing digital para acompanhar?",
    answer: "Não. O aulão foi construído do zero para mecânicos que nunca venderam nada online. O passo a passo é tão simples que qualquer um consegue seguir, independente da idade ou experiência com tecnologia.",
  },
  {
    question: "Quando acontecem as aulas ao vivo?",
    answer: "Os 3 dias de aulão acontecem nos dias 27, 28 e 29 de julho, sempre a partir das 19h (horário de Brasília). Todas as aulas ficam gravadas por 30 dias para você assistir quantas vezes quiser.",
  },
  {
    question: "E se eu não puder assistir ao vivo?",
    answer: "As gravações ficam disponíveis por 30 dias na área de membros. Você pode assistir no seu tempo e quantas vezes quiser. O certificado é emitido mesmo assistindo gravado.",
  },
  {
    question: "O certificado tem valor?",
    answer: "Sim. O certificado é válido e pode ser usado para comprovar capacitação profissional, credibilidade com clientes e parceiros, e em processos de licitação.",
  },
  {
    question: "Como funciona a garantia?",
    answer: "Você tem 7 dias de garantia incondicional. Se assistir o aulão e achar que não valeu os R$ 27,00, devolvemos 100% do seu dinheiro. Basta enviar um e-mail — sem perguntas, sem burocracia.",
  },
  {
    question: "Para que tipo de oficina serve?",
    answer: "Funciona para oficinas mecânicas, centros automotivos, auto centers, borracharias com serviços, e qualquer negócio do setor automotivo que atenda clientes finais.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-brand-dark py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sora mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-400">
            Ainda tem dúvidas? Aqui estão as respostas mais comuns.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] overflow-hidden transition-colors",
                openIndex === index && "border-brand-yellow/30"
              )}
            >
              <button
                className="flex w-full items-center justify-between p-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-sora font-semibold text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <svg
                  className={cn(
                    "h-5 w-5 flex-shrink-0 text-brand-yellow transition-transform",
                    openIndex === index && "rotate-180"
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
