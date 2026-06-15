import { Card } from "@/components/landing/ui/Card";

export function GuaranteeSection() {
  return (
    <section className="bg-brand-dark py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Card variant="yellow" className="text-center">
          <div className="mb-6 inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-dark">
            <svg className="h-8 w-8 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark font-sora mb-4">
            Garantia Incondicional de 7 Dias
          </h2>

          <p className="text-brand-dark/80 text-lg mb-4">
            Se você assistir o aulão completo e achar que não valeu o investimento de R$ 19,90, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
          </p>

          <p className="text-brand-dark/60 text-sm">
            Basta enviar um e-mail em até 7 dias após a compra.
          </p>
        </Card>
      </div>
    </section>
  );
}
