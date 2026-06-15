import danilloProof from "@/assets/depoimento-danillo.png";
import pamelaProof from "@/assets/depoimento-pamela.png";

const testimonials = [
  {
    number: "01",
    tag: "Resultado financeiro",
    quote:
      "Depois do aulão entendi onde estava perdendo dinheiro em cada serviço. No mês seguinte sobrou R$ X a mais sem atender um carro a mais.",
  },
  {
    number: "02",
    tag: "Resultado operacional",
    quote:
      "Criei um processo simples de recepção e, pela primeira vez, consegui sair da oficina antes das 19h.",
  },
  {
    number: "03",
    tag: "Impacto imediato",
    name: "Danillo Santos",
    quote:
      "Eu precisava acordar, estava direcionado à falência. Só agora percebi o tanto de coisa que estava fazendo errado.",
    image: danilloProof,
    imageAlt: "Mensagem de Danillo Santos sobre o impacto do treinamento",
  },
  {
    number: "04",
    tag: "Mudança de visão",
    name: "Pâmela Martins",
    quote:
      "Dois dias incríveis de muito conhecimento. Me sinto um avatar perto das oficinas da minha cidade; vejo que a maioria não trabalha dessa forma.",
    image: pamelaProof,
    imageAlt: "Mensagem de Pâmela Martins elogiando o treinamento",
  },
];

export function ResultsTestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-offwhite px-5 py-20 sm:px-8 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-yellow/25 bg-brand-yellow/[0.06] px-4 py-2 font-sora text-[10px] font-extrabold uppercase tracking-[0.22em] text-brand-yellow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            Resultados reais
          </span>
          <h2 className="font-sora text-3xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-4xl md:text-5xl">
            Veja o que quem já participou está falando
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            Donos de oficina que começaram a enxergar o negócio com outros olhos — e transformaram conhecimento em ação.
          </p>
        </header>

        <div
          className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0"
          aria-label="Depoimentos — arraste para ver os próximos resultados"
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.number}
              className="group relative w-[86vw] max-w-[23rem] shrink-0 snap-start overflow-hidden rounded-3xl border border-brand-dark/10 bg-brand-white p-6 shadow-[0_18px_60px_-38px_color-mix(in_oklab,var(--color-brand-dark)_45%,transparent)] transition duration-500 hover:-translate-y-1 hover:border-brand-yellow/35 sm:p-8 md:w-auto md:max-w-none"
            >
              <span className="absolute -right-2 -top-8 font-sora text-8xl font-black text-brand-yellow/[0.055] transition-transform duration-500 group-hover:translate-y-2">
                {testimonial.number}
              </span>

              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-yellow font-sora text-xs font-black text-brand-dark">
                    {testimonial.number}
                  </span>
                  <span className="font-sora text-xs font-extrabold uppercase tracking-[0.14em] text-brand-yellow">
                    {testimonial.tag}
                  </span>
                </div>

                <blockquote className="font-sora text-lg font-bold leading-relaxed text-brand-dark sm:text-xl">
                  “{testimonial.quote}”
                </blockquote>

                {testimonial.name && (
                  <p className="mt-5 text-sm font-bold text-text-muted">— {testimonial.name}</p>
                )}

                {testimonial.image && (
                  <div className="mt-6 overflow-hidden rounded-2xl border border-brand-dark/10 bg-brand-dark p-2 shadow-lg">
                    <img
                      src={testimonial.image}
                      alt={testimonial.imageAlt}
                      loading="lazy"
                      className="mx-auto max-h-44 w-auto rounded-xl object-contain"
                    />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}