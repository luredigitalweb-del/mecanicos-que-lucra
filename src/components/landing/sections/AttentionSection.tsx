export function AttentionSection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-5 py-14 text-brand-white sm:px-8 md:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(var(--color-brand-yellow)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-yellow/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-brand-yellow/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-9 flex flex-col items-center text-center md:mb-10">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-brand-yellow/20 bg-brand-yellow/10 px-4 py-2">
            <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="font-sora text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">
              Aviso crítico
            </span>
          </div>
          <h2 className="font-sora text-4xl font-extrabold uppercase leading-tight tracking-tight text-brand-white sm:text-5xl md:text-6xl">
            Atenção!
          </h2>
          <p className="mt-3 max-w-xl text-sm text-text-muted sm:text-base">
            Antes de continuar, veja se este aulão realmente é para você.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl items-stretch gap-5 md:grid-cols-2">
          <div className="group rounded-2xl border border-brand-gray-light bg-brand-dark-secondary/95 p-6 transition-colors duration-300 hover:border-destructive/50 sm:p-7">
            <div className="flex h-full items-start gap-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-brand-gray-light bg-brand-gray text-text-muted transition-colors duration-300 group-hover:text-destructive">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-left text-base font-medium leading-relaxed text-text-muted sm:text-lg">
                Se você está procurando milagre, fórmula mágica ou alguém que resolva por você, pode fechar essa página,
                <strong className="mt-2 block text-brand-white">seu lugar não é aqui.</strong>
              </p>
            </div>
          </div>

          <div className="group rounded-2xl border border-brand-yellow/60 bg-brand-yellow/5 p-6 shadow-[0_0_35px_-18px_color-mix(in_oklab,var(--color-brand-yellow)_35%,transparent)] sm:p-7">
            <div className="flex h-full items-start gap-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-brand-yellow/40 bg-brand-yellow/10 text-brand-yellow transition-colors duration-300 group-hover:bg-brand-yellow group-hover:text-brand-dark">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-left text-base font-medium leading-relaxed text-text-secondary sm:text-lg">
                Mas se você só precisa de um caminho claro para seguir e transformar o movimento da sua oficina em dinheiro no bolso,
                <strong className="mt-2 block text-brand-yellow">você está no lugar certo.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}