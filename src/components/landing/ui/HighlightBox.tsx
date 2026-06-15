import { cn } from "@/lib/utils";

interface HighlightBoxProps {
  children: React.ReactNode;
  className?: string;
}

export function HighlightBox({ children, className }: HighlightBoxProps) {
  return (
    <span
      className={cn(
        "inline-block bg-[#F5C7A3] px-2 py-1 text-brand-dark",
        className
      )}
    >
      {children}
    </span>
  );
}
