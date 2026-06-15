export function BuildSection() {
  const items = [
    {
      num: "01",
      label: "Fundamento",
      title: "Mentalidade: Mecânico Rico vs Mecânico Pobre",
      desc: "Por que tem oficina que fatura igual você e tem mais sobra no fim do mês. A diferença não está na mão, está na cabeça do dono.",
    },
    {
      num: "02",
      label: "Posicionamento",
      title: "Marketing para Oficinas",
      desc: "Construa uma oficina que é lembrada e indicada sem depender de desconto, e pare de competir só por preço com a oficina da esquina.",
    },
    {
      num: "03",
      label: "Margem",
      title: "Precificação Lucrativa",
      desc: "Coloque a mão na massa e inicie sua planilha ao vivo com a gente. Custo real, margem real, quanto cobrar pra sobrar no fim do mês.",
    },
    {
      num: "04",
      label: "Crescimento",
      title: "Venda Técnica + Ticket Médio",
      desc: "Conheça os segredos do método que o Leonardo Gomes usa para dobrar o ticket médio de cada OS, sem precisar de mais clientes entrando.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-brand-dark px-5 py-16 text-brand-white sm:px-8 md:py-24">
      <div className="build-grid pointer-events-none absolute inset-0 opacity-[0.08]" />
      <div className="build-scan pointer-events-none absolute inset-x-0 top-0 h-px bg-brand-yellow/70" />
      <div className="build-orb pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-yellow/10 blur-3xl" />
      <div className="build-orb build-orb-delay pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-yellow/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="build-reveal mb-11 flex flex-col items-center text-center md:mb-16">
          <div className="mb-5 inline-flex items-center gap-3 border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-2 [clip-path:polygon(8px_0,100%_0,calc(100%_-_8px)_100%,0_100%)]">
            <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="font-sora text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">
              O que você vai construir
            </span>
          </div>
          <h2 className="max-w-4xl font-sora text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-brand-white sm:text-5xl md:text-7xl">
            Em 3 dias você vai<br className="hidden sm:block" /> <span className="text-brand-yellow">construir</span>
          </h2>
          <p className="mt-5 max-w-xl text-base text-text-secondary sm:text-lg">Quatro pilares conectados para transformar sua oficina em um negócio mais lucrativo.</p>
        </div>

        <div className="relative mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 sm:gap-5">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-yellow/25 to-transparent sm:block" />
          {items.map((item, i) => (
            <article
              key={i}
              className="build-card group relative overflow-hidden border border-brand-gray-light bg-brand-dark-secondary/75 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-yellow/60 hover:bg-brand-dark-secondary sm:p-8"
            >
              <div className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-brand-yellow transition-transform duration-500 group-hover:scale-y-100" />
              <div className="absolute -right-8 -top-10 font-sora text-9xl font-black leading-none text-brand-yellow/[0.035] transition-all duration-500 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:text-brand-yellow/[0.075]">
                {item.num}
              </div>

              <div className="relative mb-6 flex items-center gap-4">
                <span className="font-sora text-4xl font-extrabold text-brand-yellow transition-transform duration-500 group-hover:scale-110 sm:text-5xl">
                  {item.num}
                </span>
                <div className="h-px flex-1 overflow-hidden bg-brand-gray-light/70">
                  <div className="h-full w-0 bg-brand-yellow transition-all duration-700 group-hover:w-full" />
                </div>
                <span className="font-sora text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted transition-colors duration-300 group-hover:text-brand-yellow">
                  {item.label}
                </span>
              </div>

              <h3 className="relative mb-3 font-sora text-xl font-bold leading-snug text-brand-white sm:text-2xl">
                {item.title}
              </h3>

              <p className="relative text-sm leading-relaxed text-text-secondary transition-colors duration-300 group-hover:text-brand-white sm:text-base">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
