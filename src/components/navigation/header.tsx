"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { CtaLink } from "@/components/ui/cta-link";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-white/90 backdrop-blur-md transition-all",
        scrolled && "border-border shadow-sm",
      )}
    >
      <div
        className={cn(
          "container-ft flex items-center justify-between transition-[height] duration-300",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Logo priority />

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-primary-dark hover:text-primary"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 opacity-70" aria-hidden />
                </button>
                <div className="invisible absolute left-0 top-full z-50 w-[320px] translate-y-2 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="mt-2 rounded-lg border border-border bg-white p-2 shadow-[var(--shadow-md)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-3 py-2.5 hover:bg-surface"
                      >
                        <span className="block text-sm font-semibold text-primary-dark">
                          {child.label}
                        </span>
                        {child.description ? (
                          <span className="mt-0.5 block text-xs text-muted-text">
                            {child.description}
                          </span>
                        ) : null}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="mt-1 block rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-surface"
                    >
                      View all services
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-primary-dark hover:text-primary"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <CtaLink href="/schedule-consultation" size="sm">
            Schedule a Consultation
          </CtaLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <CtaLink href="/schedule-consultation" size="sm" className="hidden xs:inline-flex sm:inline-flex">
            Get Started
          </CtaLink>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-primary-dark"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="container-ft flex max-h-[calc(100vh-5rem)] flex-col gap-1 overflow-y-auto py-4" aria-label="Mobile">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-semibold text-primary-dark"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition",
                        servicesOpen && "rotate-180",
                      )}
                    />
                  </button>
                  {servicesOpen ? (
                    <div className="mb-2 ml-2 space-y-1 border-l border-border pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm text-muted-text hover:text-primary"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-3 text-base font-semibold text-primary-dark"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="mt-3 px-3 pb-2">
              <CtaLink
                href="/schedule-consultation"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Schedule a Consultation
              </CtaLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
