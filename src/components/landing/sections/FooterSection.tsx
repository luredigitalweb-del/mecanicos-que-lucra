export function FooterSection() {
  return (
    <footer className="bg-[#0F0F0F] border-t border-[#2A2A2A] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-brand-yellow font-sora font-bold text-lg mb-2">
            Mkt Cheio de Graxa
          </p>
          <p className="text-gray-500 text-sm">
            Rodrigo Saddock & Leonardo Gomes
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>

        <div className="text-center text-xs text-gray-600 space-y-2">
          <p>
            © 2025 Mkt Cheio de Graxa. Todos os direitos reservados.
          </p>
          <p>
            Este site não é afiliado ao Facebook, Instagram, Google ou TikTok. Os resultados apresentados são reais, mas não garantem resultados específicos para todos.
          </p>
          <p>
            Consulte sempre um contador e um advogado para decisões do seu negócio.
          </p>
        </div>
      </div>
    </footer>
  );
}
