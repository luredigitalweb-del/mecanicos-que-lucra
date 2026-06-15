import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
  className?: string;
}

export function Highlight({ children, className }: HighlightProps) {
  return (
    <span className={cn("highlight-box inline", className)}>
      {children}
    </span>
  );
}
