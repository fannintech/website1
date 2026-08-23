import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import {
  PageHero,
  PageSection,
  JsonLd,
} from "@/components/layout/page-shell";
import { locationStubs } from "@/data/industries";

export const metadata: Metadata = createMetadata({
  title: "Service Areas | North Texas",
  description:
    "Fannin Technologies is prepared to support businesses across North Texas communities. Location pages are ready for verified local details.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ])}
      />
      <PageHero
        eyebrow="Local SEO Foundation"
        title="North Texas Service Area Architecture"
        description="These location pages are intentionally placeholders. Add verified office, service-area, and local details only when confirmed—no invented addresses."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations" },
        ]}
      />
      <PageSection className="bg-surface">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {locationStubs.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-primary-dark transition hover:border-primary"
            >
              {location.name}
              <span className="mt-1 block text-xs font-normal text-warning">
                Placeholder page
              </span>
            </Link>
          ))}
        </div>
      </PageSection>
    </>
  );
}
