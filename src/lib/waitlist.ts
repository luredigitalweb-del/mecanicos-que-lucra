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
  telefone: string;
}

const isSheetConfigured = () => Boolean(APPS_SCRIPT_URL);

function whatsappUrl({ nome, telefone }: WaitlistLead): string {
  const text = `Olá! Acabei de entrar na lista de espera do Aulão O Mecânico que Lucra.\n\nNome: ${nome}\nTelefone: ${telefone}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export async function submitWaitlist(lead: WaitlistLead): Promise<void> {
  // 1. Grava o cadastro na planilha (se configurada).
  if (isSheetConfigured()) {
    try {
      // no-cors: o Apps Script grava a linha na planilha; não lemos a resposta.
      // O await garante que o POST foi enviado antes de encaminhar ao WhatsApp.
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ nome: lead.nome, telefone: lead.telefone }),
      });
    } catch {
      /* falha ao gravar não deve impedir o encaminhamento ao WhatsApp */
    }
  }

  // 2. Encaminha o visitante para o WhatsApp com os dados preenchidos.
  window.location.href = whatsappUrl(lead);
}

/** true quando os cadastros já caem numa planilha (Apps Script configurado). */
export const waitlistUsesSheet = isSheetConfigured;
