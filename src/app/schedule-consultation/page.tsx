import type { Metadata } from "next";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import {
  PageHero,
  PageSection,
  JsonLd,
} from "@/components/layout/page-shell";
import { LeadForm } from "@/components/forms/lead-form";

export const metadata: Metadata = createMetadata({
  title: "Schedule a Consultation",
  description:
    "Schedule a consultation with Fannin Technologies to discuss managed IT, cybersecurity, Microsoft 365, or technology planning.",
  path: "/schedule-consultation",
});

type Props = {
  searchParams?: Promise<{ interest?: string }>;
};

export default async function ScheduleConsultationPage({ searchParams }: Props) {
  const params = searchParams ? await searchParams : {};
  const interest = params.interest || "";

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Schedule a Consultation", path: "/schedule-consultation" },
        ])}
      />
      <PageHero
        eyebrow="Consultation"
        title="Schedule a Consultation"
        description="Share a few details about your business and we’ll follow up to schedule a conversation about your technology needs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Schedule a Consultation" },
        ]}
        primaryCta={{ href: "/contact", label: "Prefer the contact page?" }}
      />
      <PageSection className="bg-surface">
        <div className="mx-auto max-w-3xl rounded-lg border border-border bg-white p-6 shadow-[var(--shadow-sm)] md:p-8">
          {interest ? (
            <p className="mb-4 rounded-md bg-primary/10 px-3 py-2 text-sm text-primary-dark">
              Request focus: {interest.replace(/-/g, " ")}
            </p>
          ) : null}
          <LeadForm mode="consultation" defaultInterest={interest} />
        </div>
      </PageSection>
    </>
  );
}
