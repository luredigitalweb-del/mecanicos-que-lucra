export function ScheduleSection() {
  const days = [
    {
      dayLabel: "Dia 1",
      date: "Seg, 27/jul",
      time: "a partir das 19h",
      theme: "Mentalidade + Marketing: como pensar como dono e atrair os clientes certos",
      who: "Rodrigo + Léo · Convidada: Lure Digital",
    },
    {
      dayLabel: "Dia 2",
      date: "Ter, 28/jul",
      time: "a partir das 19h",
      theme: "Precificação + Vendas: planilha ao vivo e método que pode dobrar o ticket médio",
      who: "Rodrigo + Léo",
    },
    {
      dayLabel: "Dia 3",
      date: "Qua, 29/jul",
      time: "a partir das 19h",
      theme: "Consolidação + Plano de Ação: tudo aplicado na sua oficina já na semana seguinte",
      who: "Rodrigo + Léo · Convidado especial a ser anunciado",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-14 sm:px-8 md:py-20">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center text-center md:mb-14">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[color-mix(in_oklab,var(--color-brand-yellow)_20%,black)] bg-[color-mix(in_oklab,var(--color-brand-yellow)_8%,white)] px-4 py-2">
            <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-sora text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">
              Cronograma do evento
            </span>
          </div>
          <h2 className="font-sora text-3xl font-extrabold uppercase leading-tight tracking-tight text-brand-dark sm:text-4xl md:text-5xl">
            O que acontece depois que<br className="hidden sm:block" /> você garantir sua vaga?
          </h2>
          <p className="mt-4 max-w-xl text-base text-brand-gray sm:text-lg">
            3 dias. 3 horas por noite. Tudo aplicado na sua oficina.
          </p>
        </div>

        <div
          className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 md:mx-auto md:grid md:max-w-5xl md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0"
          aria-label="Cronograma do evento — arraste para ver os próximos dias"
        >
          {days.map((item, i) => (
            <div
              key={i}
              className="group relative flex w-[84vw] max-w-[21rem] shrink-0 snap-start flex-col rounded-2xl border border-[color-mix(in_oklab,var(--color-brand-yellow)_15%,#e5e5e5)] bg-white p-6 shadow-[0_4px_24px_-12px_color-mix(in_oklab,var(--color-brand-yellow)_12%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_color-mix(in_oklab,var(--color-brand-yellow)_22%,transparent)] sm:p-7 md:w-auto md:max-w-none"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-yellow font-sora text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="font-sora text-sm font-bold uppercase tracking-wide text-brand-yellow">
                  {item.dayLabel}
                </span>
              </div>

              <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-brand-gray">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-[color-mix(in_oklab,var(--color-brand-yellow)_6%,white)] px-2.5 py-1 font-medium text-brand-dark">
                  <svg className="h-3.5 w-3.5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {item.date}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-[color-mix(in_oklab,var(--color-brand-yellow)_6%,white)] px-2.5 py-1 font-medium text-brand-dark">
                  <svg className="h-3.5 w-3.5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item.time}
                </span>
              </div>

              <h3 className="mb-3 font-sora text-lg font-bold leading-snug text-brand-dark sm:text-xl">
                {item.theme}
              </h3>

              <div className="mt-auto flex items-center gap-2 border-t border-[color-mix(in_oklab,var(--color-brand-yellow)_10%,#e5e5e5)] pt-4 text-sm text-brand-gray">
                <svg className="h-4 w-4 shrink-0 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium">{item.who}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
