import { services } from "@/lib/content";

export function Marquee() {
  const items = [...services.map((service) => service.name), ...services.map((service) => service.name)];

  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-bone/60 py-5">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap will-change-transform hover:[animation-play-state:paused]">
        {[0, 1].map((group) => (
          <div key={group} className="flex items-center gap-8" aria-hidden={group === 1}>
            {items.map((item, index) => (
              <span key={`${group}-${item}-${index}`} className="flex items-center gap-8">
                <span className="text-[0.72rem] font-bold tracking-[0.24em] text-ink/65 uppercase">
                  {item}
                </span>
                <span className="text-clay" aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
