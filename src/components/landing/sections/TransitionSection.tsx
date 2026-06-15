import { Card } from "@/components/landing/ui/Card";

export function TransitionSection() {
  const painPoints = [
    {
      icon: (
        <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "O faturamento mal cobre as contas do final do mês",
    },
    {
      icon: (
        <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      text: "Depende de indicação para ter cliente — nunca sabe de onde vem o próximo",
    },
    {
      icon: (
        <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Não tem um processo de vendas claro — cobra 'pelo jeito' e perde dinheiro",
    },
    {
      icon: (
        <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Trabalha 12+ horas por dia e não consegue tirar férias sem parar o negócio",
    },
    {
      icon: (
        <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      text: "Já tentou marketing digital e não funcionou — ou não sabe por onde começar",
    },
  ];

  return (
    <section className="bg-brand-dark-secondary py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sora mb-4">
            Se você se identificou com alguma dessas situações...
          </h2>
          <p className="text-gray-400 text-lg">
            Saiba que não é culpa sua. O sistema automotivo te ensinou a ser mecânico, não empresário.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {painPoints.map((point, index) => (
            <Card key={index} variant="dark" className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-0.5">{point.icon}</div>
              <p className="text-gray-300">{point.text}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-white font-sora font-bold">
            Essa aula foi feita <span className="text-brand-yellow">exatamente para você</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
