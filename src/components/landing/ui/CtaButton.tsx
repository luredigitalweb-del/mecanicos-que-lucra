import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface CtaButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg" | "xl";
  className?: string;
  pulse?: boolean;
  arrow?: boolean;
}

export function CtaButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "lg",
  className,
  pulse = true,
  arrow = true,
}: CtaButtonProps) {
  const baseStyles = "group relative isolate inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg font-bold font-sora transition-all duration-300 tracking-wide uppercase text-center";

  const variants = {
    primary: "cta-shimmer bg-brand-yellow text-brand-dark hover:bg-brand-yellow-light hover:-translate-y-0.5 hover:scale-[1.025] active:translate-y-0 active:scale-[0.98]",
    secondary: "bg-white text-brand-dark hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98]",
    outline: "border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-dark",
  };

  const sizes = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base md:text-lg",
    xl: "px-10 py-5 text-lg md:text-xl w-full md:w-auto min-w-[280px]",
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    pulse && variant === "primary" && "cta-pulse",
    className
  );

  const ArrowIcon = () => (
    <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );

  const content = (
    <>
      {children}
      {arrow && <ArrowIcon />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
