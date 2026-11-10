import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon } from "@/components/facebook-icon";
import { navigation, services, site } from "@/lib/content";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="grain grain-dark relative overflow-hidden bg-pine text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 size-[34rem] rounded-full bg-pine-soft blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 -left-32 size-[30rem] rounded-full bg-clay/20 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-8 sm:px-8 sm:pt-20">
        <div className="flex flex-col gap-10 border-b border-cream/12 pb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 flex items-center gap-3 text-[0.62rem] font-bold tracking-[0.24em] text-sage uppercase">
              <span className="inline-block size-1.5 rounded-full bg-clay" />
              Modern Dental · Minot
            </p>
            <h2 className="font-display text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.92] tracking-[-0.04em] text-cream">
              Ready when
              <br />
              <span className="text-sage italic">you are.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button asChild variant="light" size="lg">
              <a href={site.phoneHref}>
                <Phone className="size-4" />
                {site.phone}
              </a>
            </Button>
            <Button asChild size="lg" variant="clay">
              <Link href="/contact">
                Send a message
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Brand tone="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/60">
              A hometown dental practice built on relationships, modern
              education, and care that treats you like family.
            </p>
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-7 inline-flex size-11 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-cream hover:bg-cream hover:text-pine"
              aria-label="Modern Dental on Facebook"
            >
              <FacebookIcon className="size-4" />
            </a>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-[0.62rem] font-bold tracking-[0.24em] text-cream/60 uppercase">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-cream/75 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-5 text-[0.62rem] font-bold tracking-[0.24em] text-cream/60 uppercase">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href="/services"
                    className="link-underline text-cream/75 transition-colors hover:text-cream"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-5 text-[0.62rem] font-bold tracking-[0.24em] text-cream/60 uppercase">
              Visit
            </h3>
            <address className="space-y-4 text-sm not-italic">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-start gap-3 text-cream/75 transition-colors hover:text-cream"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-sage" />
                <span>
                  {site.address.street} {site.address.suite}
                  <br />
                  {site.address.city}, {site.address.stateShort}{" "}
                  {site.address.zip}
                </span>
              </a>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-cream/75 transition-colors hover:text-cream"
              >
                <Phone className="size-4 shrink-0 text-sage" />
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-3 break-all text-cream/75 transition-colors hover:text-cream"
              >
                <Mail className="size-4 shrink-0 text-sage" />
                {site.email}
              </a>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-cream/12 pt-6 text-[0.7rem] text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2017 by{" "}
            <a
              href={site.creditUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline text-cream/65"
            >
              SHEP Creative Firm
            </a>
          </p>
          <p className="tracking-[0.16em] uppercase">
            Modern Dental · Minot, North Dakota
          </p>
        </div>
      </div>
    </footer>
  );
}
