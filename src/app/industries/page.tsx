import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import {
  PageHero,
  PageSection,
  JsonLd,
} from "@/components/layout/page-shell";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { industries } from "@/data/industries";

export const metadata: Metadata = createMetadata({
  title: "Industries We Serve",
  description:
    "IT and cybersecurity support for professional services, healthcare, legal, accounting, manufacturing, construction, real estate, and nonprofits.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />
      <PageHero
        eyebrow="Industries"
        title="Technology Support Across Business Communities"
        description="We help organizations whose leaders need reliable IT, practical security, and clear recommendations—not a maze of technical jargon."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries" },
        ]}
      />
      <PageSection className="bg-surface">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              href={industry.href}
              className="rounded-lg border border-border bg-white p-5 transition hover:border-primary"
            >
              <h2 className="font-semibold text-primary-dark">
                {industry.title}
              </h2>
              <p className="mt-2 text-sm text-muted-text">
                {industry.description}
              </p>
            </Link>
          ))}
        </div>
      </PageSection>
      <FinalCtaSection />
    </>
  );
}
