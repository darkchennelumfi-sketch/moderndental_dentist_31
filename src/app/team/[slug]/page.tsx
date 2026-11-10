import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Mail, Phone } from "lucide-react";
import { doctors, site } from "@/lib/content";
import { mailtoFor } from "@/lib/utils";
import { Breadcrumb } from "@/components/page-hero";
import { Eyebrow } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);

  if (!doctor) {
    return { title: "Doctor not found" };
  }

  return {
    title: doctor.credentials
      ? `${doctor.name}, ${doctor.credentials}`
      : doctor.name,
    description: doctor.intro,
    alternates: { canonical: `/team/${doctor.slug}` },
  };
}

export default async function DoctorPage({ params }: PageProps) {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);

  if (!doctor) {
    notFound();
  }

  const others = doctors.filter((item) => item.slug !== doctor.slug);

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-32 size-[30rem] rounded-full bg-sage/30 blur-[120px]"
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Team", href: "/team" },
                { label: doctor.shortName },
              ]}
            />
          </Reveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand">
                  <Image
                    src={doctor.image}
                    alt={doctor.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pine/45 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 text-cream">
                    <p className="text-[0.58rem] font-bold tracking-[0.22em] text-cream/65 uppercase">
                      {doctor.role}
                    </p>
                    <p className="mt-1 font-display text-xl">{doctor.name}</p>
                  </div>
                </div>

                <div className="mt-4 rounded-[1.5rem] border border-ink/10 bg-bone/60 p-6">
                  <p className="text-[0.58rem] font-bold tracking-[0.2em] text-muted uppercase">
                    At a glance
                  </p>
                  <dl className="mt-4 space-y-4">
                    {doctor.facts.map((fact) => (
                      <div key={fact.label} className="border-t border-ink/10 pt-3 first:border-t-0 first:pt-0">
                        <dt className="text-[0.55rem] font-bold tracking-[0.16em] text-muted/70 uppercase">
                          {fact.label}
                        </dt>
                        <dd className="mt-1 text-[0.84rem] leading-snug font-semibold text-ink">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.08}>
              <Eyebrow>
                {doctor.role}
                {doctor.credentials ? ` · ${doctor.credentials}` : ""}
              </Eyebrow>
              <h1 className="mt-4 font-display text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.9] tracking-[-0.05em] text-ink">
                {doctor.name}
              </h1>

              <blockquote className="mt-7 border-l-2 border-clay pl-5 font-display text-[clamp(1.3rem,2.2vw,1.9rem)] leading-[1.25] tracking-[-0.02em] text-ink/85">
                {doctor.intro}
              </blockquote>

              <div className="mt-8 space-y-5 text-[1rem] leading-relaxed text-muted">
                {doctor.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3 border-t border-ink/10 pt-8">
                <Button asChild size="lg">
                  <a href={mailtoFor(doctor.mailSubject)}>
                    <Mail className="size-4" />
                    Contact {doctor.shortName}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={site.phoneHref}>
                    <Phone className="size-4" />
                    {site.phone}
                  </a>
                </Button>
              </div>

              <Link
                href="/team"
                className="group mt-8 inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.16em] text-muted uppercase transition-colors hover:text-clay"
              >
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                Back to the team
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="border-t border-ink/12 pt-12">
            <p className="text-[0.62rem] font-bold tracking-[0.22em] text-muted uppercase">
              More doctors
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/team/${other.slug}`}
                  className="group flex items-center gap-4 rounded-[1.4rem] border border-ink/10 bg-cream/60 p-3 transition-colors hover:border-pine/25 hover:bg-bone/70"
                >
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-[1rem] bg-sand">
                    <Image
                      src={other.image}
                      alt={other.imageAlt}
                      fill
                      sizes="80px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-xl leading-none text-ink">
                      {other.name}
                    </p>
                    <p className="mt-1.5 text-xs text-muted">
                      {other.role}
                      {other.credentials ? ` · ${other.credentials}` : ""}
                    </p>
                  </div>
                  <span className="ml-auto grid size-9 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-all duration-300 group-hover:rotate-45 group-hover:bg-pine group-hover:text-cream">
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
