import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Brand({
  className,
  tone = "dark",
  priority = false,
}: {
  className?: string;
  tone?: "dark" | "light";
  priority?: boolean;
}) {
  const light = tone === "light";

  return (
    <Link
      href="/"
      aria-label="Modern Dental — home"
      className={cn("group flex items-center gap-3", className)}
    >
      <span
        className={cn(
          "grid h-11 w-11 shrink-0 place-items-center rounded-[14px] transition-transform duration-500 ease-out group-hover:-rotate-3",
          light ? "bg-cream" : "bg-pine",
        )}
      >
        <Image
          src={light ? "/images/logo-pine-trim.png" : "/images/logo-trim.png"}
          alt=""
          width={480}
          height={165}
          className="h-4 w-auto"
          loading="eager"
          priority={priority}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.35rem] tracking-[-0.03em]",
            light ? "text-cream" : "text-ink",
          )}
        >
          Modern Dental
        </span>
        <span
          className={cn(
            "mt-1 text-[0.56rem] font-bold tracking-[0.24em] uppercase",
            light ? "text-cream/60" : "text-muted",
          )}
        >
          Minot · North Dakota
        </span>
      </span>
    </Link>
  );
}
