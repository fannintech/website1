import type { Metadata } from "next";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import {
  PageHero,
  PageSection,
  JsonLd,
} from "@/components/layout/page-shell";
import { LeadForm } from "@/components/forms/lead-form";

export const metadata: Metadata = createMetadata({
  title: "Contact Fannin Technologies",
  description:
    "Request a consultation with Fannin Technologies for managed IT, cybersecurity, Microsoft 365, or IT project support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title="Talk With an IT Expert"
        description="Tell us about your business and technology goals. We’ll follow up to discuss the right next step."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        primaryCta={{
          href: "/schedule-consultation",
          label: "Schedule a Consultation",
        }}
      />
      <PageSection>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-4">
            <h2 className="text-2xl font-bold">How to reach us</h2>
            <p className="text-sm text-muted-text">
              Contact details below are placeholders until verified company
              information is provided.
            </p>
            <dl className="space-y-4 rounded-lg border border-border bg-surface p-5 text-sm">
              <div>
                <dt className="font-semibold text-primary-dark">Email</dt>
                <dd className="text-muted-text">[CONTACT_EMAIL_PLACEHOLDER]</dd>
              </div>
              <div>
                <dt className="font-semibold text-primary-dark">Phone</dt>
                <dd className="text-muted-text">[CONTACT_PHONE_PLACEHOLDER]</dd>
              </div>
              <div>
                <dt className="font-semibold text-primary-dark">Address</dt>
                <dd className="text-muted-text">
                  [CONTACT_ADDRESS_PLACEHOLDER]
                </dd>
              </div>
            </dl>
          </aside>
          <div className="rounded-lg border border-border bg-white p-6 shadow-[var(--shadow-sm)]">
            <h2 className="text-xl font-bold">Request a Consultation</h2>
            <p className="mt-2 text-sm text-muted-text">
              Required fields are validated on the client and server. Do not
              include passwords or sensitive credentials in your message.
            </p>
            <div className="mt-6">
              <LeadForm mode="contact" />
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
