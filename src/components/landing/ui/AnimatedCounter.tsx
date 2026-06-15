import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({
  value,
  duration = 2000,
  className,
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.floor(easeOut * value));
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {displayValue.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

interface TicketCounterProps {
  sold: number;
  total: number;
  className?: string;
}

export function TicketCounter({ sold, total, className }: TicketCounterProps) {
  const percentage = Math.min((sold / total) * 100, 100);
  const [barVisible, setBarVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={cn("w-full", className)}>
      <div className="mb-3 flex items-end justify-between">
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-text-muted sm:text-xs">Status das vagas</span>
        <div className="flex items-center gap-1.5">
          <span className="font-sora text-sm font-bold text-brand-yellow sm:text-base">
            {Math.round(percentage)}%
          </span>
          <span className="text-xs text-text-muted">/ {total.toLocaleString("pt-BR")}</span>
        </div>
      </div>

      {/* Progress bar com efeito de animação ao entrar na viewport */}
      <div ref={barRef} className="progress-track h-2.5 w-full overflow-hidden rounded-full border border-brand-gray bg-brand-dark-secondary p-px">
        <div
          className={cn("progress-fill h-full rounded-full bg-brand-yellow", barVisible && "animate")}
          style={{ "--progress-width": `${percentage}%` } as React.CSSProperties}
        />
      </div>

      {/* Badge de urgência */}
      <div className="mt-2 flex items-center gap-1.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="ticket-ping absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-yellow opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-yellow" />
        </span>
        <span className="text-[0.65rem] font-bold uppercase tracking-wide text-brand-yellow sm:text-xs">
          Apenas {(total - sold).toLocaleString("pt-BR")} vagas restantes
        </span>
      </div>
    </div>
  );
}
