import { ArrowUpRight, MapPin } from "lucide-react";
import { fullAddress, site } from "@/lib/content";
import { cn } from "@/lib/utils";

export function MapCard({ className }: { className?: string }) {
  return (
    <a
      href={site.mapsUrl}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        "group relative block aspect-[4/3] overflow-hidden rounded-[1.8rem] border border-ink/10 bg-pine-mist",
        className,
      )}
      aria-label={`Open ${fullAddress} in Google Maps`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,43,35,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(11,43,35,0.08) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(250,245,234,0.9),transparent_55%)]"
      />
      <span
        aria-hidden="true"
        className="absolute top-[18%] -left-10 h-3 w-[120%] -rotate-12 rounded-full bg-cream/80"
      />
      <span
        aria-hidden="true"
        className="absolute top-[58%] -left-10 h-2 w-[120%] rotate-6 rounded-full bg-cream/70"
      />
      <span
        aria-hidden="true"
        className="absolute top-0 left-[32%] h-full w-2 -rotate-6 rounded-full bg-cream/75"
      />

      <div className="absolute inset-0 grid place-items-center">
        <span className="relative grid place-items-center">
          <span className="absolute size-24 animate-ping rounded-full bg-clay/20 [animation-duration:3s]" />
          <span className="relative grid size-14 place-items-center rounded-full bg-pine text-cream shadow-[0_16px_40px_-12px_rgba(11,43,35,0.8)] transition-transform duration-500 group-hover:-translate-y-1">
            <MapPin className="size-6" />
          </span>
        </span>
      </div>

      <div className="glass absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-2xl border border-cream/50 p-4">
        <div>
          <p className="text-[0.58rem] font-bold tracking-[0.2em] text-muted uppercase">
            Find us
          </p>
          <p className="mt-1 text-xs leading-snug font-semibold text-ink">
            {site.address.street} {site.address.suite}
            <br />
            {site.address.city}, {site.address.stateShort} {site.address.zip}
          </p>
        </div>
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-pine text-cream transition-transform duration-500 group-hover:rotate-45">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </a>
  );
}
