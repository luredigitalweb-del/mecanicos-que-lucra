import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SalesProgressBarProps {
  /** Percentual de ingressos vendidos (0–100). */
  percent?: number;
  /** Preço antigo (riscado). */
  oldPrice?: string;
  /** Preço atual. */
  price?: string;
  /** "dark" para fundos escuros (padrão), "light" para o card claro. */
  variant?: "dark" | "light";
  className?: string;
}

/**
 * Barra fina de escassez exibida abaixo dos CTAs:
 * "85% dos ingressos vendidos de R$ 79,00 por R$ 47,00".
 * A barra preenche e o número conta de 0 até o valor ao entrar na tela.
 * Ajuste os valores padrão aqui quando o lote/percentual mudar.
 */
export function SalesProgressBar({
  percent = 85,
  oldPrice = "R$ 79,00",
  price = "R$ 47,00",
  variant = "dark",
  className = "",
}: SalesProgressBarProps) {
  const pct = Math.max(0, Math.min(100, percent));

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, pct, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, pct]);

  const trackClass =
    variant === "light" ? "bg-brand-dark/10 ring-black/5" : "bg-brand-dark-secondary ring-white/10";
  const textClass = variant === "light" ? "text-brand-gray-light" : "text-text-secondary";
  const pctClass = variant === "light" ? "text-brand-dark" : "text-brand-white";

  return (
    <div ref={ref} className={`mx-auto w-full max-w-sm ${className}`}>
      <div className={`relative h-2 w-full overflow-hidden rounded-full ring-1 ${trackClass}`}>
        <motion.div
          className="relative h-full rounded-full bg-gradient-to-r from-brand-yellow to-brand-yellow-light shadow-[0_0_10px_color-mix(in_oklab,var(--color-brand-yellow)_70%,transparent)]"
          initial={{ width: "0%" }}
          animate={inView ? { width: `${pct}%` } : { width: "0%" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          {/* brilho que percorre a barra */}
          <motion.span
            className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            animate={{ x: ["-100%", "400%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
          />
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className={`mt-2 text-center text-xs font-semibold sm:text-[13px] ${textClass}`}
      >
        <span className={`font-bold tabular-nums ${pctClass}`}>{count}%</span> dos ingressos vendidos de{" "}
        <span className="line-through">{oldPrice}</span> por{" "}
        <span className="font-extrabold text-brand-yellow">{price}</span>
      </motion.p>
    </div>
  );
}
