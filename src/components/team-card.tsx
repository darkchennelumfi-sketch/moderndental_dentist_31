import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Doctor } from "@/lib/content";
import { cn } from "@/lib/utils";

export function TeamCard({
  doctor,
  index,
  className,
}: {
  doctor: Doctor;
  index: number;
  className?: string;
}) {
  return (
    <Link
      href={`/team/${doctor.slug}`}
      className={cn("group block", className)}
      aria-label={`Read more about ${doctor.name}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-sand">
        <Image
          src={doctor.image}
          alt={doctor.imageAlt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine/55 via-pine/0 to-pine/0 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
        <span className="absolute top-4 left-4 grid size-9 place-items-center rounded-full border border-cream/40 bg-pine/20 text-[0.62rem] font-bold text-cream backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="absolute right-4 bottom-4 grid size-10 place-items-center rounded-full bg-cream text-pine transition-all duration-500 group-hover:rotate-45 group-hover:bg-clay group-hover:text-cream">
          <ArrowUpRight className="size-4" />
        </span>
        <div className="absolute bottom-4 left-4 max-w-[70%]">
          <p className="text-[0.6rem] font-bold tracking-[0.22em] text-cream/70 uppercase">
            {doctor.role}
            {doctor.credentials ? ` · ${doctor.credentials}` : ""}
          </p>
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl tracking-[-0.03em] text-ink">
            {doctor.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{doctor.role}</p>
        </div>
      </div>
    </Link>
  );
}
