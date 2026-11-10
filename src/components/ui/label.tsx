"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "mb-2 flex items-center gap-1.5 text-[0.7rem] font-bold tracking-[0.18em] text-muted uppercase",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
