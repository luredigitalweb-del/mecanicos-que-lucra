import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle2, Loader2, ChevronDown } from "lucide-react";
import { submitWaitlist, PERFIL_OPCOES } from "@/lib/waitlist";

interface WaitlistContextValue {
  open: () => void;
}

const WaitlistContext = createContext<WaitlistContextValue>({ open: () => {} });

export const useWaitlist = () => useContext(WaitlistContext);

/** Máscara simples de telefone: (99) 99999-9999 */
function maskPhone(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.replace(/(\d{0,2})/, "($1");
  if (d.length <= 6) return d.replace(/(\d{2})(\d{0,4})/, "($1) $2");
  if (d.length <= 10) return d.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  return d.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [perfil, setPerfil] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  const open = useCallback(() => {
    setStatus("idle");
    setError(null);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nomeTrim = nome.trim();
    const emailTrim = email.trim();
    const digits = telefone.replace(/\D/g, "");
    if (nomeTrim.length < 2) {
      setError("Digite seu nome completo.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim)) {
      setError("Digite um e-mail válido.");
      return;
    }
    if (digits.length < 10) {
      setError("Digite um WhatsApp válido com DDD.");
      return;
    }
    if (!perfil) {
      setError("Selecione quem é você.");
      return;
    }
    setError(null);
    setStatus("sending");
    try {
      await submitWaitlist({ nome: nomeTrim, email: emailTrim, telefone, perfil });
      setStatus("done");
      setNome("");
      setEmail("");
      setTelefone("");
      setPerfil("");
    } catch {
      setStatus("idle");
      setError("Não foi possível enviar. Tente novamente.");
    }
  };

  return (
    <WaitlistContext.Provider value={{ open }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* backdrop */}
            <div
              className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
              onClick={close}
            />

            {/* card */}
            <motion.div
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-brand-dark/10 bg-white shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6)]"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-brand-yellow via-brand-yellow-light to-brand-yellow" />

              <button
                onClick={close}
                aria-label="Fechar"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-brand-gray-light transition-colors hover:bg-brand-offwhite hover:text-brand-dark"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="px-6 py-8 sm:px-8">
                {status === "done" ? (
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 220, damping: 14 }}
                    >
                      <CheckCircle2 className="h-16 w-16 text-brand-yellow" strokeWidth={2} />
                    </motion.div>
                    <h3 className="mt-4 font-sora text-2xl font-extrabold text-brand-dark">
                      Você está na lista!
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-gray-light">
                      Assim que abrirem novas vagas, entramos em contato pelo telefone
                      informado. Fica de olho no seu WhatsApp.
                    </p>
                    <button
                      onClick={close}
                      className="mt-6 w-full rounded-xl bg-brand-yellow px-6 py-3 font-sora text-sm font-extrabold uppercase tracking-wide text-brand-dark transition-colors hover:bg-brand-yellow-light"
                    >
                      Fechar
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="flex w-fit items-center gap-2 rounded-full border border-[#E63946]/30 bg-[#E63946]/10 px-3 py-1 font-sora text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#E63946]">
                      Vagas esgotadas
                    </span>
                    <h3 className="mt-3 font-sora text-2xl font-extrabold leading-tight text-brand-dark">
                      Entre na lista de espera
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-gray-light">
                      Deixe seu nome e telefone. Se abrir uma vaga, você é o primeiro a
                      saber.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div>
                        <label className="mb-1.5 block font-sora text-xs font-bold uppercase tracking-wide text-brand-dark">
                          Nome completo
                        </label>
                        <input
                          type="text"
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                          placeholder="Seu nome"
                          autoComplete="name"
                          className="w-full rounded-xl border border-brand-dark/15 bg-brand-offwhite px-4 py-3 text-brand-dark outline-none transition-colors placeholder:text-brand-gray-light/70 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/30"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block font-sora text-xs font-bold uppercase tracking-wide text-brand-dark">
                          E-mail
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="seu@email.com"
                          autoComplete="email"
                          className="w-full rounded-xl border border-brand-dark/15 bg-brand-offwhite px-4 py-3 text-brand-dark outline-none transition-colors placeholder:text-brand-gray-light/70 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/30"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block font-sora text-xs font-bold uppercase tracking-wide text-brand-dark">
                          WhatsApp com DDD
                        </label>
                        <input
                          type="tel"
                          inputMode="numeric"
                          value={telefone}
                          onChange={(e) => setTelefone(maskPhone(e.target.value))}
                          placeholder="(00) 00000-0000"
                          autoComplete="tel"
                          className="w-full rounded-xl border border-brand-dark/15 bg-brand-offwhite px-4 py-3 text-brand-dark outline-none transition-colors placeholder:text-brand-gray-light/70 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/30"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block font-sora text-xs font-bold uppercase tracking-wide text-brand-dark">
                          Quem é você?
                        </label>
                        <div className="relative">
                          <select
                            value={perfil}
                            onChange={(e) => setPerfil(e.target.value)}
                            className={`w-full appearance-none rounded-xl border border-brand-dark/15 bg-brand-offwhite px-4 py-3 pr-10 outline-none transition-colors focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/30 ${perfil ? "text-brand-dark" : "text-brand-gray-light/70"}`}
                          >
                            <option value="" disabled>
                              Selecione uma opção
                            </option>
                            {PERFIL_OPCOES.map((opcao) => (
                              <option key={opcao} value={opcao} className="text-brand-dark">
                                {opcao}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-gray-light" />
                        </div>
                      </div>

                      {error && (
                        <p className="text-sm font-semibold text-[#E63946]">{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-yellow px-6 py-4 font-sora text-sm font-extrabold uppercase tracking-wide text-brand-dark shadow-[0_14px_38px_-12px_color-mix(in_oklab,var(--color-brand-yellow)_80%,transparent)] transition-all hover:bg-brand-yellow-light disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {status === "sending" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
                          </>
                        ) : (
                          "Quero entrar na lista"
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </WaitlistContext.Provider>
  );
}
