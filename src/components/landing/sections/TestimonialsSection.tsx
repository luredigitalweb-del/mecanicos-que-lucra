import { Card } from "@/components/landing/ui/Card";
import { Highlight } from "@/components/landing/ui/Highlight";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Henrique",
      role: "Oficina Carlos Mecânica — São Paulo/SP",
      quote: "Em 3 meses aplicando o método, minha oficina faturou o dobro do ano passado inteiro. O Rodrigo e o Leo entendem como ninguém o setor automotivo.",
      result: "Faturamento 2x em 3 meses",
    },
    {
      name: "Fernanda Oliveira",
      role: "Centro Automotivo Oliveira — Curitiba/PR",
      quote: "Eu não entendia nada de marketing. O passo a passo é tão claro que mesmo sem experiência consegui implementar tudo. Hoje tenho lista de espera.",
      result: "Lista de espera de clientes",
    },
    {
      name: "Marcos Vinícius",
      role: "Mecânica do Marcos — Belo Horizonte/MG",
      quote: "Antes eu cobrava muito barato por medo de perder cliente. Aprendi a vender valor e hoje meus clientes me indicam sem eu pedir.",
      result: "Ticket médio aumentou 80%",
    },
    {
      name: "Roberto Silva",
      role: "Auto Center Silva — Fortaleza/CE",
      quote: "Trabalhava de segunda a sábado, 14 horas por dia. Hoje a oficina funciona com processo e eu finalmente pude tirar férias com a família.",
      result: "Saiu da operação em 4 meses",
    },
  ];

  return (
    <section className="bg-brand-dark-secondary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-sora mb-4">
            Resultados de quem já aplicou o <Highlight>método</Highlight>
          </h2>
          <p className="text-gray-400 text-lg">
            Mais de 1.200 oficinas já transformaram seus negócios.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, index) => (
            <Card key={index} variant="dark" className="flex flex-col">
              <div className="mb-4 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-300 mb-6 flex-grow text-sm leading-relaxed">
                "{t.quote}"
              </blockquote>

              <div className="border-t border-[#2A2A2A] pt-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <p className="text-white font-sora font-bold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                  <span className="rounded-full bg-brand-yellow/10 px-3 py-1 text-xs font-bold text-brand-yellow">
                    {t.result}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
