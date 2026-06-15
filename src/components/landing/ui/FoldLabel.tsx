import { cn } from "@/lib/utils";

interface FoldLabelProps {
  number: number;
  text: string;
  className?: string;
}

export function FoldLabel({ number, text, className }: FoldLabelProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow text-sm font-bold text-brand-dark font-sora">
        {number}
      </span>
      <span className="text-sm font-medium uppercase tracking-widest text-brand-yellow">
        {text}
      </span>
    </div>
  );
}
