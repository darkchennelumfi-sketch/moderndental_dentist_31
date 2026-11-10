import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Quote,
  Star,
} from "lucide-react";
import { doctors, site, values } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { Eyebrow, SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/marquee";
import { TeamCard } from "@/components/team-card";
import { ServicesExplorer } from "@/components/services-explorer";
import { CountUp } from "@/components/count-up";
import { RotatingSeal } from "@/components/rotating-seal";
import { MapCard } from "@/components/map-card";

export const metadata: Metadata = {
  title: "Dentist in Minot, North Dakota",
  description:
    "Modern Dental is a hometown dental practice in Minot, North Dakota, with Dr. Christian Meland, Dr. Amber Wentz, and Dr. Eric Meland.",
  alternates: { canonical: "/" },
};

const stats = [
  { value: 3, label: "Doctors", detail: "Christian · Amber · Eric" },
  { value: 6, label: "Services", detail: "Crowns to whitening" },
  { value: 1, label: "Minot practice", detail: "1600 2nd Ave SW" },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-14 sm:pt-36 lg:pt-40 lg:pb-20">
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-40 size-[34rem] rounded-full bg-sage/35 blur-[130px]"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/3 -right-32 size-[30rem] rounded-full bg-clay/15 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-24 left-1/2 hidden -translate-x-1/2 font-display text-[26rem] leading-none text-ink/[0.025] select-none lg:block"
        >
          MD
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6 xl:col-span-5">
              <Reveal>
                <Eyebrow>Modern Dental · Minot, North Dakota</Eyebrow>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="mt-6 font-display text-[clamp(3.2rem,8vw,6.7rem)] leading-[0.87] tracking-[-0.055em] text-ink">
                  Modern
                  <br />
                  dentistry,{" "}
                  <span className="relative inline-block italic text-clay">
                    rooted
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 300 20"
                      fill="none"
                      className="absolute -bottom-2 left-0 w-full text-clay/45"
                    >
                      <path
                        d="M3 14C55 5 135 3 297 9"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <br />
                  in Minot.
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-7 max-w-md text-[1.02rem] leading-relaxed text-muted">
                  Three doctors, one hometown team, and a practice built on
                  relationships — from your first visit to the smile you keep
                  for life.
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Book a visit
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/team">Meet the doctors</Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.32}>
                <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-ink/10 pt-6 text-[0.78rem] font-semibold text-ink/70">
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 transition-colors hover:text-clay"
                  >
                    <MapPin className="size-3.5 text-clay" />
                    {site.address.street} {site.address.suite}, Minot
                  </a>
                  <a
                    href={site.phoneHref}
                    className="flex items-center gap-2 transition-colors hover:text-clay"
                  >
                    <Phone className="size-3.5 text-clay" />
                    {site.phone}
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 xl:col-span-7">
              <Reveal delay={0.18} y={40}>
                <div className="relative mx-auto w-full max-w-[35rem] lg:ml-auto">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-8 top-10 bottom-10 rounded-full bg-pine/10 blur-3xl"
                  />

                  <div className="relative ml-auto aspect-[4/5] w-[82%] overflow-hidden rounded-[999px_999px_2rem_2rem] border border-cream/70 bg-sand shadow-[0_45px_100px_-40px_rgba(11,43,35,0.55)]">
                    <Image
                      src="/images/dr-christian-meland.webp"
                      alt="Dr. Christian Meland, DDS"
                      fill
                      priority
                      sizes="(min-width: 1024px) 38vw, 82vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pine/55 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-cream">
                      <p className="text-[0.58rem] font-bold tracking-[0.22em] text-cream/65 uppercase">
                        DDS · Modern Dental
                      </p>
                      <p className="mt-1 font-display text-xl">
                        Dr. Christian Meland
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-20 -left-1 hidden aspect-[4/5] w-[36%] overflow-hidden rounded-[999px_999px_1.2rem_1.2rem] border-[5px] border-cream shadow-[0_30px_60px_-30px_rgba(11,43,35,0.5)] sm:block">
                    <Image
                      src="/images/dr-amber-wentz.webp"
                      alt="Dr. Amber Wentz, DDS"
                      fill
                      sizes="20vw"
                      className="object-cover object-top"
                    />
                  </div>

                  <RotatingSeal className="absolute -top-5 left-3 size-24 rounded-full border border-ink/10 bg-cream/85 backdrop-blur-sm sm:-left-3 sm:size-28" />

                  <div className="glass mt-4 w-full rounded-[1.4rem] border border-cream/60 p-5 shadow-[0_30px_70px_-30px_rgba(11,43,35,0.55)] sm:absolute sm:right-2 sm:-bottom-6 sm:mt-0 sm:w-[15.5rem]">
                    <p className="flex items-center gap-2 text-[0.58rem] font-bold tracking-[0.18em] text-pine uppercase">
                      <span className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-clay/70" />
                        <span className="relative inline-flex size-2 rounded-full bg-clay" />
                      </span>
                      Welcoming patients
                    </p>
                    <a
                      href={site.phoneHref}
                      className="mt-3 block font-display text-[1.55rem] leading-none text-ink transition-colors hover:text-clay"
                    >
                      {site.phone}
                    </a>
                    <p className="mt-2 text-[0.72rem] text-muted">
                      Call our Minot team to get started.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="grain relative overflow-hidden bg-bone py-20 sm:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Our approach</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(2.2rem,4.4vw,3.9rem)] leading-[0.95] tracking-[-0.04em] text-ink">
                Care that starts
                <br />
                with <span className="italic text-clay">listening.</span>
              </h2>
              <p className="mt-6 max-w-sm text-[0.98rem] leading-relaxed text-muted">
                We want to understand the person behind the appointment. That
                is why our patients come back — and why their families do too.
              </p>
              <Link
                href="/team"
                className="group mt-8 inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.18em] text-ink uppercase"
              >
                Meet the team
                <span className="grid size-8 place-items-center rounded-full border border-ink/20 transition-all duration-300 group-hover:rotate-45 group-hover:bg-pine group-hover:text-cream">
                  <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            </Reveal>

            <Reveal className="lg:col-span-7 lg:pl-10" delay={0.1}>
              <div className="relative rounded-[2rem] border border-ink/10 bg-cream/60 p-7 sm:p-10">
                <Quote className="size-8 text-clay/50" aria-hidden="true" />
                <blockquote className="mt-5 font-display text-[clamp(1.45rem,2.6vw,2.35rem)] leading-[1.18] tracking-[-0.03em] text-ink">
                  “Everyday I have the privilege of doing what I love, which is
                  building relationships with patients and playing a part in
                  their happiness.”
                </blockquote>
                <footer className="mt-6 flex items-center gap-3 text-[0.7rem] font-bold tracking-[0.16em] text-muted uppercase">
                  <span className="h-px w-8 bg-clay" />
                  Dr. Christian Meland, DDS
                </footer>
              </div>
            </Reveal>
          </div>

          <Reveal className="relative mt-16" delay={0.08}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] sm:aspect-[16/8] lg:aspect-[16/7]">
              <Image
                src="/images/team.webp"
                alt="The Modern Dental team"
                fill
                sizes="(min-width: 1024px) 90vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine/80 via-pine/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex flex-col gap-4 text-cream sm:inset-x-8 sm:bottom-7 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[0.58rem] font-bold tracking-[0.22em] text-cream/60 uppercase">
                    The Modern Dental team
                  </p>
                  <p className="mt-1 font-display text-[clamp(1.4rem,3vw,2.4rem)] leading-none">
                    Christian · Amber · Eric
                  </p>
                </div>
                <span className="flex w-fit items-center gap-2 rounded-full border border-cream/30 bg-pine/25 px-4 py-2 text-[0.6rem] font-bold tracking-[0.18em] uppercase backdrop-blur-md">
                  <Star className="size-3 text-gold" />
                  Minot, North Dakota
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-ink/10 px-5 sm:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-9 first:pl-0 sm:px-8 sm:py-12">
              <p className="font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-none tracking-[-0.05em] text-pine">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-3 text-[0.62rem] font-bold tracking-[0.18em] text-ink uppercase">
                {stat.label}
              </p>
              <p className="mt-1 hidden text-xs text-muted sm:block">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="The doctors"
              title={
                <>
                  The people behind
                  <br />
                  your <span className="italic text-clay">smile.</span>
                </>
              }
              description="Get to know the doctors who make Modern Dental feel like home."
            />
            <Button asChild variant="outline" size="md" className="w-fit">
              <Link href="/team">
                Meet everyone
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {doctors.map((doctor, index) => (
              <Reveal key={doctor.slug} delay={index * 0.08}>
                <TeamCard doctor={doctor} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grain grain-dark relative overflow-hidden bg-pine py-20 text-cream sm:py-28">
        <div
          aria-hidden="true"
          className="absolute -top-32 left-1/3 size-[32rem] rounded-full bg-pine-soft blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-32 -bottom-40 size-[28rem] rounded-full bg-clay/15 blur-[110px]"
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              tone="light"
              eyebrow="Services"
              title={
                <>
                  Care for every stage
                  <br />
                  of your <span className="italic text-sage">smile.</span>
                </>
              }
              description="From restorative care to a brighter smile, start with a conversation. Our team can help you find the right next step."
            />
            <p className="max-w-[15rem] text-[0.7rem] leading-relaxed tracking-[0.12em] text-cream/60 uppercase lg:text-right">
              Dental crowns · Dentures · Implants
              <br />
              Invisalign · Root canal · Whitening
            </p>
          </div>

          <div className="mt-12">
            <ServicesExplorer />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Why Modern Dental"
                title={
                  <>
                    Hometown care,
                    <br />
                    modern <span className="italic text-clay">standards.</span>
                  </>
                }
                description="A practice shaped by North Dakota roots, continuing education, and relationships that last."
              />
              <Button asChild variant="primary" size="md" className="mt-8">
                <Link href="/new-patients">
                  For new patients
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-ink/15">
                {values.map((value) => (
                  <Reveal key={value.number}>
                    <div className="group grid gap-4 border-b border-ink/15 py-7 sm:grid-cols-12 sm:items-start">
                      <p className="font-display text-lg text-clay sm:col-span-2">
                        {value.number}
                      </p>
                      <h3 className="font-display text-2xl tracking-[-0.03em] text-ink sm:col-span-4">
                        {value.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted sm:col-span-6">
                        {value.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grain relative overflow-hidden rounded-[2.2rem] bg-pine p-6 text-cream sm:p-10 lg:p-14">
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 size-[26rem] rounded-full bg-clay/20 blur-[100px]"
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Eyebrow tone="light">Visit us</Eyebrow>
                <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.93] tracking-[-0.045em]">
                  Come say
                  <br />
                  <span className="italic text-sage">hello.</span>
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
                  At {site.address.street} {site.address.suite} in Minot. Call,
                  email, or send a message and our team will take it from
                  there.
                </p>

                <div className="mt-8 space-y-3">
                  <a
                    href={site.phoneHref}
                    className="flex items-center gap-3 text-sm font-semibold text-cream/80 transition-colors hover:text-cream"
                  >
                    <span className="grid size-9 place-items-center rounded-full border border-cream/20">
                      <Phone className="size-4" />
                    </span>
                    {site.phone}
                  </a>
                  <a
                    href={site.emailHref}
                    className="flex items-center gap-3 text-sm font-semibold text-cream/80 transition-colors hover:text-cream"
                  >
                    <span className="grid size-9 place-items-center rounded-full border border-cream/20">
                      <Mail className="size-4" />
                    </span>
                    {site.email}
                  </a>
                </div>

                <Button asChild variant="clay" size="lg" className="mt-8">
                  <Link href="/contact">
                    Send a message
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </div>
              <div className="lg:col-span-6">
                <MapCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
