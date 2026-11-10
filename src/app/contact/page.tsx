import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { MapCard } from "@/components/map-card";
import { FacebookIcon } from "@/components/facebook-icon";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Modern Dental in Minot, North Dakota. Call (701) 838-8399, email moderndentalminot@gmail.com, or send us a message.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Say hello to your
            <br />
            Minot <span className="italic text-clay">dental team.</span>
          </>
        }
        description="Questions, appointments, or just not sure where to start? Call, email, or send us a message. We will meet you where you are."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      >
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[0.78rem] font-semibold text-ink/70">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 transition-colors hover:text-clay"
          >
            <Phone className="size-3.5 text-clay" />
            {site.phone}
          </a>
          <a
            href={site.emailHref}
            className="flex items-center gap-2 transition-colors hover:text-clay"
          >
            <Mail className="size-3.5 text-clay" />
            {site.email}
          </a>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 transition-colors hover:text-clay"
          >
            <MapPin className="size-3.5 text-clay" />
            {site.address.street} {site.address.suite}, Minot
          </a>
        </div>
      </PageHero>

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-7">
              <ContactForm />
            </Reveal>

            <Reveal className="lg:col-span-5" delay={0.08}>
              <div className="flex h-full flex-col gap-3">
                <div className="grain relative overflow-hidden rounded-[1.6rem] bg-pine p-7 text-cream">
                  <div
                    aria-hidden="true"
                    className="absolute -top-16 -right-16 size-48 rounded-full bg-clay/20 blur-[60px]"
                  />
                  <p className="relative text-[0.58rem] font-bold tracking-[0.22em] text-cream/60 uppercase">
                    Call the practice
                  </p>
                  <a
                    href={site.phoneHref}
                    className="relative mt-3 block font-display text-[clamp(1.7rem,3vw,2.4rem)] leading-none text-cream transition-colors hover:text-sage"
                  >
                    {site.phone}
                  </a>
                  <p className="relative mt-3 text-xs leading-relaxed text-cream/55">
                    The quickest way to reach our Minot team.
                  </p>
                </div>

                <a
                  href={site.emailHref}
                  className="group flex items-center gap-4 rounded-[1.4rem] border border-ink/10 bg-bone/45 p-5 transition-colors hover:bg-bone/80"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-pine text-cream">
                    <Mail className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.55rem] font-bold tracking-[0.18em] text-muted uppercase">
                      Email
                    </p>
                    <p className="mt-1 truncate text-sm font-semibold text-ink">
                      {site.email}
                    </p>
                  </div>
                  <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay" />
                </a>

                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center gap-4 rounded-[1.4rem] border border-ink/10 bg-bone/45 p-5 transition-colors hover:bg-bone/80"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-clay text-cream">
                    <MapPin className="size-4" />
                  </span>
                  <div>
                    <p className="text-[0.55rem] font-bold tracking-[0.18em] text-muted uppercase">
                      Visit
                    </p>
                    <p className="mt-1 text-sm leading-snug font-semibold text-ink">
                      {site.address.street} {site.address.suite}
                      <br />
                      {site.address.city}, {site.address.stateShort}{" "}
                      {site.address.zip}
                    </p>
                  </div>
                  <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay" />
                </a>

                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center gap-4 rounded-[1.4rem] border border-ink/10 bg-bone/45 p-5 transition-colors hover:bg-bone/80"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-ink/15 bg-cream text-pine">
                    <FacebookIcon className="size-4" />
                  </span>
                  <div>
                    <p className="text-[0.55rem] font-bold tracking-[0.18em] text-muted uppercase">
                      Social
                    </p>
                    <p className="mt-1 text-sm font-semibold text-ink">
                      Modern Dental on Facebook
                    </p>
                  </div>
                  <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay" />
                </a>

                <div className="mt-auto rounded-[1.4rem] border border-ink/10 bg-cream/50 p-5 text-xs leading-relaxed text-muted">
                  <p>
                    Prefer to speak with someone right away? Call or email the
                    practice directly. For urgent needs, please call{" "}
                    <a
                      href={site.phoneHref}
                      className="font-semibold text-pine underline underline-offset-2"
                    >
                      {site.phone}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="grid gap-4 rounded-[2rem] border border-ink/10 bg-bone/40 p-4 sm:p-6 lg:grid-cols-12 lg:items-center">
              <div className="p-4 lg:col-span-5 lg:p-8">
                <p className="flex items-center gap-3 text-[0.62rem] font-bold tracking-[0.24em] text-muted uppercase">
                  <span className="inline-block size-1.5 rounded-full bg-clay" />
                  Find us
                </p>
                <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[0.95] tracking-[-0.04em] text-ink">
                  1600 2nd Ave SW
                  <br />
                  <span className="italic text-clay">Minot, ND.</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {site.address.street} {site.address.suite}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </p>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group mt-6 inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.16em] text-ink uppercase"
                >
                  Get directions
                  <span className="grid size-8 place-items-center rounded-full border border-ink/20 transition-all group-hover:rotate-45 group-hover:bg-pine group-hover:text-cream">
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </a>
              </div>
              <div className="lg:col-span-7">
                <MapCard />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
