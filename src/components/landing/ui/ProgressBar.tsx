import { cn } from "@/lib/utils";
import { type CSSProperties, useEffect, useRef, useState } from "react";

interface ProgressBarProps {
  label: string;
  percentage: number;
  className?: string;
}

export function ProgressBar({ label, percentage, className }: ProgressBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("w-full", className)}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-gray-400">{label}</span>
        <span className="text-sm font-bold text-brand-yellow font-sora">{percentage}%</span>
      </div>
      <div className="progress-track h-3 w-full overflow-hidden rounded-full bg-brand-gray">
        <div
          className={cn("progress-fill h-full rounded-full bg-brand-yellow", isVisible && "animate")}
          style={{ "--progress-width": `${percentage}%` } as CSSProperties}
        />
      </div>
    </div>
  );
}
