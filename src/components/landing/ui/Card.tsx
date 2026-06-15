import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "dark" | "darker" | "yellow";
}

export function Card({ children, className, variant = "dark" }: CardProps) {
  const variants = {
    dark: "bg-[#1E1E1E] border border-[#2A2A2A]",
    darker: "bg-[#161616] border border-[#2A2A2A]",
    yellow: "bg-brand-yellow text-brand-dark",
  };

  return (
    <div className={cn("rounded-xl p-6 md:p-8", variants[variant], className)}>
      {children}
    </div>
  );
}
