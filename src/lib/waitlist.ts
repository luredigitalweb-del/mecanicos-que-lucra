// Lista de espera — para onde vão os cadastros (nome + telefone).
//
// COMO FAZER OS CADASTROS CAÍREM NUMA PLANILHA (Google Sheets, sem banco):
// 1. Abra sheets.new (cria uma planilha em branco) — é o "docs" onde os
//    cadastros vão cair. Renomeie para "Lista de Espera".
// 2. No menu: Extensões > Apps Script.
// 3. Apague o conteúdo e cole o script que está em: docs/apps-script-lista-espera.gs
// 4. Clique em "Implantar" > "Nova implantação" > tipo "App da Web":
//    - Executar como: Eu
//    - Quem tem acesso: Qualquer pessoa
//    Clique Implantar, autorize e copie a URL (termina em /exec).
// 5. Cole essa URL na constante APPS_SCRIPT_URL abaixo. Pronto — cada cadastro
//    vira uma linha na planilha, com data/hora, nome e telefone.

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwM0bzwrKwpIp6bV4ELRpE6HUde05fMPu3Hx2reV5UgEYHGvh5wgxBQhTHrQoMzpwJA/exec";

// Fallback enquanto a planilha não está configurada: cada cadastro vira uma
// mensagem no WhatsApp do negócio.
const WHATSAPP_NUMBER = "554137950720";

export interface WaitlistLead {
  nome: string;
  email: string;
  telefone: string;
  perfil: string;
}

export const PERFIL_OPCOES = [
  "Dono/Sócio de oficina",
  "Mecânico CLT",
  "Mecânico autônomo",
  "Esposa/Sócia do Marido na oficina",
] as const;

const isSheetConfigured = () => Boolean(APPS_SCRIPT_URL);

const WAITLIST_THANKS_ROUTE = "/lista-confirmada";
const WAITLIST_STORAGE_KEY = "mecanico_waitlist_lead";

/** Link do WhatsApp confirmando que a pessoa está na lista de espera. */
export function buildWhatsappUrl(lead?: WaitlistLead | null): string {
  const base = "Olá! Confirmo que entrei na lista de espera do Aulão O Mecânico que Lucra.";
  const text = lead
    ? `${base}\n\nNome: ${lead.nome}\nE-mail: ${lead.email}\nWhatsApp: ${lead.telefone}\nPerfil: ${lead.perfil}`
    : base;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/** Lê o último cadastro salvo (usado na página de confirmação). */
export function getStoredLead(): WaitlistLead | null {
  try {
    const raw = sessionStorage.getItem(WAITLIST_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as WaitlistLead) : null;
  } catch {
    return null;
  }
}

export async function submitWaitlist(lead: WaitlistLead): Promise<void> {
  // 1. Grava o cadastro na planilha (se configurada).
  if (isSheetConfigured()) {
    try {
      // no-cors: o Apps Script grava a linha na planilha; não lemos a resposta.
      // O await garante que o POST foi enviado antes de navegar de página.
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          nome: lead.nome,
          email: lead.email,
          telefone: lead.telefone,
          perfil: lead.perfil,
        }),
      });
    } catch {
      /* falha ao gravar não deve impedir a confirmação */
    }
  }

  // 2. Guarda o lead e leva para a página de confirmação (que encaminha ao WhatsApp).
  try {
    sessionStorage.setItem(WAITLIST_STORAGE_KEY, JSON.stringify(lead));
  } catch {
    /* sessionStorage indisponível — segue sem os dados na página */
  }
  window.location.href = WAITLIST_THANKS_ROUTE;
}

/** true quando os cadastros já caem numa planilha (Apps Script configurado). */
export const waitlistUsesSheet = isSheetConfigured;
