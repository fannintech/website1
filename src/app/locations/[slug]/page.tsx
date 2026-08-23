import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import {
  PageHero,
  PageSection,
  JsonLd,
} from "@/components/layout/page-shell";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { locationStubs } from "@/data/industries";
import { CtaLink } from "@/components/ui/cta-link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return locationStubs.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locationStubs.find((item) => item.slug === slug);
  if (!location) return createMetadata({ title: "Location", path: "/locations" });
  return createMetadata({
    title: `Managed IT Services in ${location.name}`,
    description: `Placeholder local landing page for managed IT and cybersecurity support in ${location.name}, ${location.region}.`,
    path: `/locations/${location.slug}`,
  });
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locationStubs.find((item) => item.slug === slug);
  if (!location) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: location.name, path: `/locations/${location.slug}` },
        ])}
      />
      <PageHero
        eyebrow={`${location.region} · Placeholder`}
        title={`Managed IT Services in ${location.name}`}
        description={`This reusable location template is ready for verified local SEO content about serving businesses in ${location.name}. Do not publish invented addresses, phone numbers, or office claims.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: location.name },
        ]}
      />
      <PageSection>
        <div className="max-w-3xl space-y-4 text-muted-text">
          <p>
            [LOCAL CONTENT PLACEHOLDER] Add city-specific business context,
            service emphasis, and verified NAP details when available.
          </p>
          <p>
            Suggested future sections: local industries served, common
            technology challenges in {location.name}, and links to core service
            pages.
          </p>
          <CtaLink href="/schedule-consultation">
            Schedule a Consultation
          </CtaLink>
        </div>
      </PageSection>
      <FinalCtaSection />
    </>
  );
}
