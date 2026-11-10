import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Breadcrumb({
  items,
}: {
  items: readonly { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-[0.62rem] font-bold tracking-[0.16em] text-muted uppercase">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-clay">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink" aria-current="page">
                {item.label}
              </span>
            )}
            {index < items.length - 1 ? (
              <ChevronRight className="size-3 text-muted/50" aria-hidden="true" />
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  breadcrumb: readonly { label: string; href?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-20">
      <div
        aria-hidden="true"
        className="absolute -top-28 -right-40 size-[32rem] rounded-full bg-sage/30 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 -left-40 size-[26rem] rounded-full bg-clay/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Breadcrumb items={breadcrumb} />
        </Reveal>
        <Reveal delay={0.06}>
          <Eyebrow className="mt-8">{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.12}>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.9] tracking-[-0.05em] text-ink">
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-[1rem] leading-relaxed text-muted">
              {description}
            </p>
          </Reveal>
        ) : null}
        {children ? <Reveal delay={0.26}>{children}</Reveal> : null}
      </div>
    </section>
  );
}
