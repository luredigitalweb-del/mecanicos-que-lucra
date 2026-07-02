// Rastreamento de UTMs — captura na chegada e anexa na URL do checkout.

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

const PREFIX = "lure_";

/**
 * URL única do checkout. Quando o lote mudar, troque APENAS aqui.
 * Nunca coloque a URL do checkout direto nos botões — use appendUtms(CHECKOUT_URL).
 */
export const CHECKOUT_URL = "https://pay.assiny.com.br/QliEpy/node/dK9gWT";

/**
 * Lê os UTMs da query string da URL atual e salva no localStorage com o
 * prefixo "lure_". Só salva/sobrescreve os que existirem na URL.
 */
export function capturarUtms(): void {
  if (typeof window === "undefined") return;
  const qs = new URLSearchParams(window.location.search);
  UTM_KEYS.forEach((key) => {
    const value = qs.get(key);
    if (value) {
      try {
        localStorage.setItem(PREFIX + key, value);
      } catch {
        /* localStorage indisponível — ignora */
      }
    }
  });
}

/**
 * Recebe uma URL e anexa os UTMs salvos no localStorage (os que existirem)
 * como query params, retornando a URL final.
 */
export function appendUtms(baseUrl: string): string {
  if (typeof window === "undefined") return baseUrl;
  try {
    const url = new URL(baseUrl);
    UTM_KEYS.forEach((key) => {
      let value: string | null = null;
      try {
        value = localStorage.getItem(PREFIX + key);
      } catch {
        /* localStorage indisponível — ignora */
      }
      if (value) url.searchParams.set(key, value);
    });
    return url.toString();
  } catch {
    return baseUrl;
  }
}
