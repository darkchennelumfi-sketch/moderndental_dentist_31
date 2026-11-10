import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { services, site, type ServiceCategory } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { ServicesExplorer } from "@/components/services-explorer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Modern Dental in Minot, North Dakota offers dental crowns, dentures, dental implants, Invisalign, root canals, and teeth whitening.",
  alternates: { canonical: "/services" },
};

const categories: { name: ServiceCategory; note: string }[] = [
  {
    name: "Restorative",
    note: "Care that helps protect, rebuild, and maintain your smile.",
  },
  {
    name: "Cosmetic",
    note: "A brighter, more confident smile — starting with a conversation.",
  },
  {
    name: "Orthodontics",
    note: "A straighter smile option available through our practice.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Care that starts
            <br />
            with a <span className="italic text-clay">conversation.</span>
          </>
        }
        description="Our practice highlights six services in Minot. Explore what we offer, then reach out and our team will help you decide on the right next step."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {services.map((service) => (
            <span
              key={service.slug}
              className="rounded-full border border-ink/15 px-4 py-2 text-[0.68rem] font-bold tracking-[0.12em] text-ink/70 uppercase"
            >
              {service.name}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {categories.map((category, index) => {
              const items = services.filter(
                (service) => service.category === category.name,
              );
              return (
                <Reveal key={category.name} delay={index * 0.07}>
                  <div className="group flex h-full flex-col rounded-[1.6rem] border border-ink/10 bg-bone/45 p-6 transition-colors hover:bg-bone/80">
                    <div className="flex items-start justify-between">
                      <p className="text-[0.6rem] font-bold tracking-[0.22em] text-clay uppercase">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <span className="rounded-full border border-ink/10 px-3 py-1 text-[0.55rem] font-bold tracking-[0.16em] text-muted uppercase">
                        {items.length} {items.length === 1 ? "service" : "services"}
                      </span>
                    </div>
                    <h2 className="mt-8 font-display text-3xl tracking-[-0.03em] text-ink">
                      {category.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {category.note}
                    </p>
                    <ul className="mt-6 space-y-2 border-t border-ink/10 pt-5">
                      {items.map((item) => (
                        <li
                          key={item.slug}
                          className="flex items-center gap-2 text-[0.82rem] font-semibold text-ink/75"
                        >
                          <span className="size-1 rounded-full bg-clay" />
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grain grain-dark relative overflow-hidden bg-pine py-20 text-cream sm:py-24">
        <div
          aria-hidden="true"
          className="absolute -top-32 left-1/2 size-[32rem] -translate-x-1/2 rounded-full bg-pine-soft blur-[120px]"
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            tone="light"
            eyebrow="Explore"
            title={
              <>
                Find the care
                <br />
                you are <span className="italic text-sage">looking for.</span>
              </>
            }
            description="Filter by category, then open any service to ask a question or reach the practice."
          />
          <div className="mt-12">
            <ServicesExplorer />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 rounded-[2rem] border border-ink/10 bg-bone/50 p-8 sm:p-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Not sure where to start?"
                title={
                  <>
                    Tell us what is on
                    <br />
                    your <span className="italic text-clay">mind.</span>
                  </>
                }
                description="You do not need to know the name of a service before you call. Describe what you are noticing and our team will help you take the next step."
              />
            </div>
            <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">
                  Send a message
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href={site.phoneHref}>
                  <Phone className="size-4" />
                  {site.phone}
                </a>
              </Button>
              <a
                href={site.emailHref}
                className="mt-1 inline-flex items-center gap-2 text-xs font-semibold text-muted transition-colors hover:text-clay"
              >
                <Mail className="size-3.5" />
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
