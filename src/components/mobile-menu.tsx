"use client";

import * as React from "react";
import Link from "next/link";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { navigation, site } from "@/lib/content";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";

export function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="grid size-11 place-items-center rounded-full border border-ink/15 bg-cream/60 text-ink transition-colors hover:bg-pine hover:text-cream lg:hidden"
        >
          <Menu className="size-5" />
        </button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-pine/50 backdrop-blur-sm data-[state=open]:animate-overlay-in data-[state=closed]:animate-overlay-out" />
        <DialogPrimitive.Content className="fixed inset-y-0 right-0 z-50 flex h-dvh w-full max-w-[26rem] flex-col overflow-y-auto bg-pine p-6 text-cream shadow-2xl outline-none data-[state=open]:animate-menu-in data-[state=closed]:animate-menu-out sm:p-8">
          <DialogPrimitive.Title className="sr-only">
            Modern Dental navigation
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            Browse the pages of the Modern Dental website.
          </DialogPrimitive.Description>

          <div className="flex items-center justify-between">
            <Brand tone="light" />
            <DialogPrimitive.Close
              aria-label="Close menu"
              className="grid size-11 place-items-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-cream hover:text-pine"
            >
              <X className="size-5" />
            </DialogPrimitive.Close>
          </div>

          <nav aria-label="Mobile" className="mt-14 flex flex-col">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline justify-between border-b border-cream/12 py-5"
              >
                <span className="font-display text-4xl tracking-[-0.04em] transition-colors group-hover:text-sage">
                  {item.label}
                </span>
                <span className="flex items-center gap-3 text-[0.62rem] font-bold tracking-[0.2em] text-cream/60 uppercase">
                  {String(index + 1).padStart(2, "0")}
                  <ArrowUpRight className="size-4 text-cream/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sage" />
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-5 pt-12">
            <Button asChild variant="light" size="lg" className="w-full">
              <a href={site.phoneHref}>
                <Phone className="size-4" />
                {site.phone}
              </a>
            </Button>
            <p className="text-xs leading-relaxed text-cream/55">
              {site.address.street} {site.address.suite}
              <br />
              {site.address.city}, {site.address.stateShort} {site.address.zip}
            </p>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
