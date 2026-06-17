import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  useLocation,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { capturarUtms } from "@/lib/utm";
import { FloatingWhatsApp } from "@/components/landing/ui/FloatingWhatsApp";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-dark px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-white font-sora">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-white font-sora">Página não encontrada</h2>
        <p className="mt-2 text-sm text-gray-400">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-brand-yellow px-6 py-3 text-sm font-bold text-brand-dark transition-colors hover:bg-brand-yellow-light"
          >
            Voltar para home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).__lovableEvents?.captureException) {
      (window as any).__lovableEvents.captureException(error, { boundary: "tanstack_root_error_component" });
    }
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-dark px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-white font-sora">
          Algo deu errado
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Tente recarregar a página ou volte para a página inicial.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-brand-yellow px-4 py-2 text-sm font-bold text-brand-dark transition-colors hover:bg-brand-yellow-light"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-gray-600 bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Ir para home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aulão O Mecânico que Lucra | Rodrigo Saddock & Leonardo Gomes" },
      { name: "description", content: "Aulão ao vivo de 3 dias para donos de oficina mecânica e centros automotivos. Aprenda o passo a passo para fazer sua oficina lucrar mais. Apenas R$ 19,90." },
      { name: "author", content: "Mkt Cheio de Graxa" },
      { property: "og:title", content: "Aulão O Mecânico que Lucra | Rodrigo Saddock & Leonardo Gomes" },
      { property: "og:description", content: "Aulão ao vivo de 3 dias para donos de oficina mecânica e centros automotivos. Aprenda o passo a passo para fazer sua oficina lucrar mais. Apenas R$ 19,90." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1486262712438-f7c6a2d3e2c2?w=1200&h=630&fit=crop" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aulão O Mecânico que Lucra | Rodrigo Saddock & Leonardo Gomes" },
      { name: "twitter:description", content: "Aulão ao vivo de 3 dias para donos de oficina mecânica e centros automotivos. Aprenda o passo a passo para fazer sua oficina lucrar mais. Apenas R$ 19,90." },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1486262712438-f7c6a2d3e2c2?w=1200&h=630&fit=crop" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function MetaPixelTracker() {
  const location = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "PageView");
    }
  }, [location.pathname]);
  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  // Captura os UTMs da URL uma única vez ao carregar o app.
  useEffect(() => {
    capturarUtms();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      <MetaPixelTracker />
      <Outlet />
      <FloatingWhatsApp />
    </QueryClientProvider>
  );
}

