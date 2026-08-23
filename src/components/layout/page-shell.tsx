import type { ReactNode } from "react";
import Link from "next/link";
import { CtaLink } from "@/components/ui/cta-link";

type Breadcrumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs?: Breadcrumb[];
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  primaryCta = { href: "/schedule-consultation", label: "Schedule a Consultation" },
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="border-b border-border bg-hero-wash">
      <div className="container-ft py-14 md:py-16">
        {breadcrumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-text">
              {breadcrumbs.map((item, index) => (
                <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
                  {item.href ? (
                    <Link href={item.href} className="hover:text-primary">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-primary-dark" aria-current="page">
                      {item.label}
                    </span>
                  )}
                  {index < breadcrumbs.length - 1 ? <span aria-hidden>/</span> : null}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-text">{description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaLink href={primaryCta.href}>{primaryCta.label}</CtaLink>
          {secondaryCta ? (
            <CtaLink href={secondaryCta.href} variant="outline">
              {secondaryCta.label}
            </CtaLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function PageSection({
  children,
  className = "bg-white",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`section-padding ${className}`}>
      <div className="container-ft">{children}</div>
    </section>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
