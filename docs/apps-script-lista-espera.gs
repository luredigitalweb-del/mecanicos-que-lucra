/**
 * Lista de Espera — Aulão O Mecânico que Lucra
 * -------------------------------------------------------------
 * Recebe os cadastros do site (nome + telefone) e grava cada um
 * numa linha da planilha vinculada, com data/hora.
 *
 * COMO USAR:
 * 1. Abra sheets.new (planilha em branco) e renomeie para "Lista de Espera".
 * 2. Menu: Extensões > Apps Script.
 * 3. Apague tudo e cole este arquivo inteiro.
 * 4. Implantar > Nova implantação > "App da Web":
 *      - Executar como: Eu
 *      - Quem tem acesso: Qualquer pessoa
 *    Implantar > autorizar > copie a URL que termina em /exec.
 * 5. Cole essa URL em src/lib/waitlist.ts na constante APPS_SCRIPT_URL.
 */

function doPost(e) {
  try {
    var dados = JSON.parse(e.postData.contents);
    var nome = (dados.nome || "").toString().trim();
    var email = (dados.email || "").toString().trim();
    var telefone = (dados.telefone || "").toString().trim();
    var perfil = (dados.perfil || "").toString().trim();

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Cria o cabeçalho na primeira vez (planilha vazia).
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Data/Hora", "Nome", "E-mail", "WhatsApp", "Quem é você?"]);
    }

    var agora = Utilities.formatDate(
      new Date(),
      "America/Sao_Paulo",
      "dd/MM/yyyy HH:mm:ss"
    );
    sheet.appendRow([agora, nome, email, telefone, perfil]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, erro: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Permite testar a implantação abrindo a URL no navegador.
function doGet() {
  return ContentService.createTextOutput("Lista de espera ativa.");
}
