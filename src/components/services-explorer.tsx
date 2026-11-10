"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Activity,
  ArrowUpRight,
  Bone,
  Crown,
  Phone,
  ScanLine,
  Smile,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import {
  serviceCategories,
  services,
  site,
  type Service,
} from "@/lib/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const iconMap: Record<Service["icon"], LucideIcon> = {
  crown: Crown,
  smile: Smile,
  implant: Bone,
  align: ScanLine,
  root: Activity,
  sparkle: Sparkles,
};

export function ServicesExplorer({ compact = false }: { compact?: boolean }) {
  const [category, setCategory] = React.useState<(typeof serviceCategories)[number]>("All");
  const [selected, setSelected] = React.useState<Service | null>(null);
  const reduce = useReducedMotion();

  const filtered =
    category === "All"
      ? services
      : services.filter((service) => service.category === category);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter services by category"
        className="mb-8 flex flex-wrap gap-2"
      >
        {serviceCategories.map((item) => {
          const active = category === item;
          return (
            <button
              key={item}
              role="tab"
              aria-selected={active}
              onClick={() => setCategory(item)}
              className={cn(
                "rounded-full border px-4 py-2 text-[0.72rem] font-bold tracking-[0.12em] uppercase transition-all duration-300",
                active
                  ? "border-cream bg-cream text-pine"
                  : "border-cream/20 text-cream/60 hover:border-cream/45 hover:text-cream",
              )}
            >
              {item}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className={cn(
          "grid gap-3 sm:grid-cols-2",
          compact ? "lg:grid-cols-2" : "lg:grid-cols-3",
        )}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.button
                layout
                key={service.slug}
                type="button"
                onClick={() => setSelected(service)}
                initial={reduce ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex min-h-56 flex-col rounded-[1.4rem] border border-cream/12 bg-cream/[0.045] p-6 text-left transition-colors duration-500 hover:border-cream hover:bg-cream"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-full border border-cream/20 bg-pine-soft/50 text-cream transition-colors duration-500 group-hover:border-pine/15 group-hover:bg-pine group-hover:text-cream">
                    <Icon className="size-5" />
                  </span>
                  <span className="rounded-full border border-cream/15 px-3 py-1 text-[0.55rem] font-bold tracking-[0.18em] text-cream/60 uppercase transition-colors duration-500 group-hover:border-pine/15 group-hover:text-pine/60">
                    {service.category}
                  </span>
                </div>

                <h3 className="mt-8 font-display text-[1.7rem] leading-none tracking-[-0.03em] text-cream transition-colors duration-500 group-hover:text-pine">
                  {service.name}
                </h3>
                <p className="mt-3 max-w-[26ch] text-[0.86rem] leading-relaxed text-cream/55 transition-colors duration-500 group-hover:text-muted">
                  {service.prompt}
                </p>

                <span className="mt-auto flex items-center justify-between pt-6 text-[0.62rem] font-bold tracking-[0.18em] text-cream/60 uppercase transition-colors duration-500 group-hover:text-clay">
                  Ask about this
                  <span className="grid size-8 place-items-center rounded-full border border-cream/15 transition-all duration-500 group-hover:rotate-45 group-hover:border-clay group-hover:bg-clay group-hover:text-cream">
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </span>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent>
          {selected ? (
            <>
              <DialogHeader>
                <p className="flex items-center gap-3 text-[0.6rem] font-bold tracking-[0.22em] text-clay uppercase">
                  <span className="inline-block size-1.5 rounded-full bg-clay" />
                  {selected.category} dentistry
                </p>
                <DialogTitle>{selected.name}</DialogTitle>
                <DialogDescription>{selected.prompt}</DialogDescription>
              </DialogHeader>

              <div className="mt-7 rounded-2xl border border-ink/10 bg-bone/60 p-5 text-sm leading-relaxed text-muted">
                <p>
                  Tell us what you would like to know about{" "}
                  <span className="font-semibold text-ink">
                    {selected.name.toLowerCase()}
                  </span>
                  . Our team can talk it through with you and help you decide
                  on the next step.
                </p>
              </div>

              <DialogFooter>
                <Button asChild variant="outline" size="md" className="flex-1">
                  <a href={site.phoneHref}>
                    <Phone className="size-4" />
                    {site.phone}
                  </a>
                </Button>
                <DialogClose asChild>
                  <Button asChild size="md" className="flex-1">
                    <Link href="/contact">
                      Send a message
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                </DialogClose>
              </DialogFooter>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
