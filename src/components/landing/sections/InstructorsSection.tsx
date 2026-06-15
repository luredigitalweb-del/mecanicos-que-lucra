import { Card } from "@/components/landing/ui/Card";
import { Highlight } from "@/components/landing/ui/Highlight";

export function InstructorsSection() {
  const instructors = [
    {
      name: "Rodrigo Saddock",
      role: "Fundador, Mkt Cheio de Graxa",
      bio: "Especialista em marketing para o setor automotivo. Já gerou mais de R$ 2 milhões em vendas para oficinas mecânicas em todo o Brasil. Criou o método que transforma mecânicos em empresários.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Leonardo Gomes",
      role: "Especialista em Vendas B2B",
      bio: "Especialista em processos comerciais para o setor automotivo. Desenvolveu técnicas de precificação e vendas que aumentam o ticket médio em até 80% sem perder clientes.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
  ];

  return (
    <section className="bg-brand-dark py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-sora mb-4">
            Quem vai te ensinar o <Highlight>método</Highlight>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Dois especialistas que vivem e respiram o setor automotivo todos os dias.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {instructors.map((instructor, index) => (
            <Card key={index} variant="dark" className="text-center">
              <div className="mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full border-2 border-brand-yellow">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-white font-sora mb-1">
                {instructor.name}
              </h3>
              <p className="text-brand-yellow text-sm font-medium mb-4">
                {instructor.role}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {instructor.bio}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
