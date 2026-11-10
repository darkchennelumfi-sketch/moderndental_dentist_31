import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Quote } from "lucide-react";
import { doctors, site } from "@/lib/content";
import { mailtoFor } from "@/lib/utils";
import { PageHero } from "@/components/page-hero";
import { Eyebrow } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet Dr. Christian Meland, Dr. Amber Wentz, and Dr. Eric Meland — the doctors behind Modern Dental in Minot, North Dakota.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title={
          <>
            Three doctors.
            <br />
            One shared{" "}
            <span className="italic text-clay">standard of care.</span>
          </>
        }
        description="A hometown team with a shared commitment to relationships, continuing education, and the kind of care that makes a dental visit feel personal."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Team" }]}
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {doctors.map((doctor) => (
            <a
              key={doctor.slug}
              href={`#${doctor.slug}`}
              className="rounded-full border border-ink/15 px-4 py-2 text-[0.68rem] font-bold tracking-[0.14em] text-ink/70 uppercase transition-colors hover:border-pine hover:bg-pine hover:text-cream"
            >
              {doctor.shortName}
            </a>
          ))}
        </div>
      </PageHero>

      <section className="px-4 pb-6 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] sm:aspect-[16/7]">
              <Image
                src="/images/team.webp"
                alt="The Modern Dental team in Minot, North Dakota"
                fill
                priority
                sizes="(min-width: 1024px) 90vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine/75 via-transparent to-transparent" />
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 text-cream sm:inset-x-9 sm:bottom-8">
                <div>
                  <p className="text-[0.58rem] font-bold tracking-[0.22em] text-cream/60 uppercase">
                    Modern Dental
                  </p>
                  <p className="mt-1 font-display text-[clamp(1.4rem,3vw,2.3rem)] leading-none">
                    The people behind your smile
                  </p>
                </div>
                <span className="hidden rounded-full border border-cream/30 bg-pine/25 px-4 py-2 text-[0.6rem] font-bold tracking-[0.18em] uppercase backdrop-blur-md sm:block">
                  Minot, ND
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {doctors.map((doctor, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={doctor.slug}
                id={doctor.slug}
                className="scroll-mt-32 border-t border-ink/12 py-14 first:border-t-0 first:pt-0 sm:py-20"
              >
                <div
                  className={`flex flex-col gap-10 lg:items-center lg:gap-16 ${
                    reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  <Reveal className="w-full lg:w-5/12">
                    <div className="relative">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] bg-sand">
                        <Image
                          src={doctor.image}
                          alt={doctor.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 38vw, 90vw"
                          className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-pine/45 via-transparent to-transparent" />
                        <span className="absolute top-4 left-4 grid size-10 place-items-center rounded-full border border-cream/40 bg-pine/20 text-[0.65rem] font-bold text-cream backdrop-blur-md">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="glass absolute -right-3 -bottom-4 hidden rounded-2xl border border-cream/60 px-5 py-4 shadow-lg sm:block">
                        <p className="text-[0.55rem] font-bold tracking-[0.2em] text-muted uppercase">
                          {doctor.credentials || "Dentist"}
                        </p>
                        <p className="mt-1 font-display text-lg leading-none text-ink">
                          {doctor.shortName}
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal className="w-full lg:w-7/12" delay={0.08}>
                    <Eyebrow>{doctor.role}</Eyebrow>
                    <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[0.95] tracking-[-0.04em] text-ink">
                      {doctor.name}
                      {doctor.credentials ? (
                        <span className="ml-2 align-top text-base tracking-normal text-clay">
                          {doctor.credentials}
                        </span>
                      ) : null}
                    </h2>

                    <div className="mt-6 space-y-4 text-[0.96rem] leading-relaxed text-muted">
                      {doctor.bio.slice(0, 2).map((paragraph) => (
                        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                      ))}
                    </div>

                    <dl className="mt-7 grid gap-4 border-t border-ink/10 pt-6 sm:grid-cols-3">
                      {doctor.facts.map((fact) => (
                        <div key={fact.label}>
                          <dt className="text-[0.55rem] font-bold tracking-[0.18em] text-muted/70 uppercase">
                            {fact.label}
                          </dt>
                          <dd className="mt-1.5 text-[0.82rem] leading-snug font-semibold text-ink">
                            {fact.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <Button asChild size="md">
                        <Link href={`/team/${doctor.slug}`}>
                          Read full profile
                          <ArrowUpRight className="size-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="md">
                        <a href={mailtoFor(doctor.mailSubject)}>
                          <Mail className="size-4" />
                          Contact {doctor.shortName}
                        </a>
                      </Button>
                    </div>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grain relative overflow-hidden rounded-[2.2rem] bg-bone p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <Quote className="size-8 text-clay/50" />
                <p className="mt-4 max-w-xl font-display text-[clamp(1.5rem,2.7vw,2.4rem)] leading-[1.15] tracking-[-0.03em] text-ink">
                  “Dentistry is the perfect occupation for me, as it allows me
                  not only to help people improve and maintain oral health, but
                  also to establish relationships with my patients and their
                  families over time.”
                </p>
                <p className="mt-5 text-[0.62rem] font-bold tracking-[0.18em] text-muted uppercase">
                  Dr. Amber Wentz, DDS
                </p>
              </div>
              <div className="lg:col-span-5 lg:pl-10">
                <p className="text-sm leading-relaxed text-muted">
                  Have a question for one of our doctors? Call the practice or
                  send us a message and our team will point you in the right
                  direction.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <Link href="/contact">Send a message</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={site.phoneHref}>{site.phone}</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
