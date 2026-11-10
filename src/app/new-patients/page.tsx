import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MessageSquare, Phone } from "lucide-react";
import { doctors, site } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { FaqList } from "@/components/faq-list";
import { MapCard } from "@/components/map-card";

export const metadata: Metadata = {
  title: "New Patients",
  description:
    "New to Modern Dental in Minot, North Dakota? Learn how to get in touch, meet the doctors, and find answers to common questions.",
  alternates: { canonical: "/new-patients" },
};

const contactSteps = [
  {
    number: "01",
    title: "Call the practice",
    body: "Speak with our team directly and tell us what you need.",
    action: site.phone,
    href: site.phoneHref,
    icon: Phone,
    label: "Call",
  },
  {
    number: "02",
    title: "Send an email",
    body: "Prefer to write? Email us and we will follow up with you.",
    action: site.email,
    href: site.emailHref,
    icon: Mail,
    label: "Email",
  },
  {
    number: "03",
    title: "Send a message",
    body: "Use our contact form to share a few details about your visit.",
    action: "Open the contact form",
    href: "/contact",
    icon: MessageSquare,
    label: "Message",
  },
] as const;

export default function NewPatientsPage() {
  return (
    <>
      <PageHero
        eyebrow="New patients"
        title={
          <>
            New patients
            <br />
            <span className="italic text-clay">start here.</span>
          </>
        }
        description="Whether you are new to Minot or looking for a new dental home, getting in touch is the first step. Here is how to reach us and what to know before you do."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "New Patients" }]}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">
              Send a message
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={site.phoneHref}>
              <Phone className="size-4" />
              {site.phone}
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {contactSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.number} delay={index * 0.07}>
                  <Link
                    href={step.href}
                    className="group flex h-full flex-col rounded-[1.6rem] border border-ink/10 bg-bone/45 p-6 transition-colors hover:bg-bone/80"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-full bg-pine text-cream">
                        <Icon className="size-5" />
                      </span>
                      <span className="font-display text-lg text-clay">
                        {step.number}
                      </span>
                    </div>
                    <h2 className="mt-8 font-display text-2xl tracking-[-0.03em] text-ink">
                      {step.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {step.body}
                    </p>
                    <span className="mt-auto flex items-center justify-between gap-3 border-t border-ink/10 pt-5 text-[0.68rem] font-bold tracking-[0.12em] text-ink uppercase">
                      <span className="truncate normal-case">{step.action}</span>
                      <span className="grid size-8 shrink-0 place-items-center rounded-full border border-ink/15 transition-all duration-300 group-hover:rotate-45 group-hover:bg-pine group-hover:text-cream">
                        <ArrowUpRight className="size-3.5" />
                      </span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-bone py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Before you visit"
                title={
                  <>
                    Questions,
                    <br />
                    <span className="italic text-clay">answered.</span>
                  </>
                }
                description="A few things patients ask us most often. If your question is not here, call or send us a message."
              />
              <Button asChild variant="outline" size="md" className="mt-8">
                <Link href="/contact">
                  Ask us directly
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="lg:col-span-7">
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Who you will meet"
              title={
                <>
                  Your new
                  <br />
                  <span className="italic text-clay">dental team.</span>
                </>
              }
            />
            <Button asChild variant="outline" size="md" className="w-fit">
              <Link href="/team">
                Full team
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {doctors.map((doctor) => (
              <Reveal key={doctor.slug}>
                <Link
                  href={`/team/${doctor.slug}`}
                  className="group flex items-center gap-4 rounded-[1.4rem] border border-ink/10 bg-cream/60 p-3 transition-colors hover:border-pine/25 hover:bg-bone/70"
                >
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-[1rem] bg-sand">
                    <Image
                      src={doctor.image}
                      alt={doctor.imageAlt}
                      fill
                      sizes="80px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-xl leading-none text-ink">
                      {doctor.name}
                    </p>
                    <p className="mt-1.5 text-xs text-muted">
                      {doctor.role}
                      {doctor.credentials ? ` · ${doctor.credentials}` : ""}
                    </p>
                  </div>
                  <span className="ml-auto grid size-9 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-all duration-300 group-hover:rotate-45 group-hover:bg-pine group-hover:text-cream">
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Find us"
                title={
                  <>
                    Easy to reach
                    <br />
                    in <span className="italic text-clay">Minot.</span>
                  </>
                }
                description={`${site.address.street} ${site.address.suite}, ${site.address.city}, ${site.address.state} ${site.address.zip}.`}
              />
              <div className="mt-6 space-y-3">
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 text-sm font-semibold text-ink transition-colors hover:text-clay"
                >
                  <span className="grid size-9 place-items-center rounded-full border border-ink/15">
                    <Phone className="size-4" />
                  </span>
                  {site.phone}
                </a>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-3 text-sm font-semibold text-ink transition-colors hover:text-clay"
                >
                  <span className="grid size-9 place-items-center rounded-full border border-ink/15">
                    <Mail className="size-4" />
                  </span>
                  {site.email}
                </a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <MapCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
