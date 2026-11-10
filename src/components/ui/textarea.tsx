import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-36 w-full resize-y rounded-2xl border border-ink/15 bg-cream/70 px-4 py-3.5 text-[0.95rem] leading-relaxed text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-muted/70 focus:border-pine/60 focus:bg-white/80 focus:shadow-[0_0_0_4px_rgba(11,43,35,0.08)] disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:border-clay aria-invalid:shadow-[0_0_0_4px_rgba(163,79,47,0.12)]",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
