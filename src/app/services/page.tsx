import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import {
  PageHero,
  PageSection,
  JsonLd,
} from "@/components/layout/page-shell";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { services } from "@/data/services";
import { Icon } from "@/components/ui/icon";

export const metadata: Metadata = createMetadata({
  title: "IT Services for Growing Businesses",
  description:
    "Explore managed IT, cybersecurity, Microsoft 365, backup, network, and IT project services from Fannin Technologies.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Services"
        title="Technology Services That Support Real Work"
        description="Choose full managed IT, co-managed support, cybersecurity, cloud services, or focused projects—based on how your business operates today."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <PageSection className="bg-surface">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="rounded-lg border border-border bg-white p-6 transition hover:border-primary hover:shadow-[var(--shadow-sm)]"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon name={service.icon} className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="mt-2 text-sm text-muted-text">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </PageSection>
      <FinalCtaSection />
    </>
  );
}
