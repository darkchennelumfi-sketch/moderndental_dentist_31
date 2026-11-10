"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "motion/react";
import { Phone } from "lucide-react";
import { navigation, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Brand } from "@/components/brand";
import { MobileMenu } from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-clay"
      />
      <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
        <div className="mx-auto max-w-7xl">
          <div
            className={cn(
              "flex items-center justify-between gap-4 rounded-full border px-3 py-2 transition-all duration-500 ease-out sm:px-4",
              scrolled
                ? "glass border-ink/10 shadow-[0_20px_60px_-30px_rgba(11,43,35,0.55)]"
                : "border-transparent bg-cream/45 backdrop-blur-md",
            )}
          >
            <Brand priority />

            <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[0.8rem] font-semibold tracking-[0.02em] transition-colors duration-300",
                    isActive(item.href)
                      ? "text-pine"
                      : "text-ink/65 hover:text-ink",
                  )}
                >
                  {item.label}
                  {isActive(item.href) ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-4 -bottom-0.5 h-px bg-clay"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 rounded-full px-3 py-2 text-[0.78rem] font-semibold text-ink/70 transition-colors hover:text-clay"
              >
                <Phone className="size-3.5" />
                {site.phone}
              </a>
              <Button asChild size="sm" className="pr-5 pl-5">
                <Link href="/contact">Book a visit</Link>
              </Button>
            </div>

            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
