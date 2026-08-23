import type { Metadata } from "next";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import {
  PageHero,
  PageSection,
  JsonLd,
} from "@/components/layout/page-shell";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { pricingPlans } from "@/data/industries";
import { CtaLink } from "@/components/ui/cta-link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Pricing & IT Service Plans",
  description:
    "Explore managed IT, co-managed, and essentials support models from Fannin Technologies. Final pricing is tailored after a consultation.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <PageHero
        eyebrow="Pricing / Plans"
        title="Plans Built Around How You Work"
        description="Every business has a different mix of users, risk, and internal IT capacity. We recommend a support model after understanding your environment—not a one-size quote."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pricing" },
        ]}
      />
      <PageSection className="bg-surface">
        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.id}
              className={cn(
                "flex h-full flex-col rounded-lg border bg-white p-6",
                plan.featured
                  ? "border-primary shadow-[var(--shadow-md)]"
                  : "border-border",
              )}
            >
              {plan.featured ? (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Most popular starting point
                </p>
              ) : null}
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <p className="mt-3 text-sm text-muted-text">{plan.description}</p>
              <ul className="mt-6 flex-1 space-y-2">
                {plan.highlights.map((item) => (
                  <li key={item} className="text-sm text-primary-dark">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted-text">
                Pricing provided after consultation based on scope and
                environment. No invented package prices are shown here.
              </p>
              <div className="mt-4">
                <CtaLink href={plan.href} className="w-full">
                  {plan.cta}
                </CtaLink>
              </div>
            </article>
          ))}
        </div>
      </PageSection>
      <FinalCtaSection />
    </>
  );
}
