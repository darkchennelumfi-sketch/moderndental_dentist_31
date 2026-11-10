import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { navigation } from "@/lib/content";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div
        aria-hidden="true"
        className="absolute -top-20 right-0 size-[28rem] rounded-full bg-sage/30 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <p className="font-display text-[clamp(6rem,18vw,15rem)] leading-none tracking-[-0.06em] text-clay/20">
          404
        </p>
        <h1 className="-mt-6 max-w-2xl font-display text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[0.94] tracking-[-0.045em] text-ink sm:-mt-10">
          This page slipped
          <br />
          past the <span className="italic text-clay">dentist chair.</span>
        </h1>
        <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-muted">
          The page you were looking for is not here. Head back home or use one
          of the links below to find your way.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-ink/15 px-4 py-2 text-[0.68rem] font-bold tracking-[0.12em] text-ink/70 uppercase transition-colors hover:border-pine hover:bg-pine hover:text-cream"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/">
              <ArrowLeft className="size-4" />
              Back home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              Contact us
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
