import type { Metadata } from "next";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import {
  PageHero,
  PageSection,
  JsonLd,
} from "@/components/layout/page-shell";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service placeholder for Fannin Technologies. Replace with legal counsel-approved terms before launch.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms-of-service" },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="This page is a structural placeholder. Replace with counsel-reviewed website terms before launch."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Service" },
        ]}
      />
      <PageSection>
        <div className="prose-ft space-y-4 text-sm">
          <p>
            [TERMS OF SERVICE PLACEHOLDER] These terms are provided as a website
            framework only and are not legal advice.
          </p>
          <h2 className="text-xl font-semibold text-primary-dark">
            Use of the website
          </h2>
          <p>
            Visitors may use this website to learn about Fannin Technologies
            services and submit consultation requests.
          </p>
          <h2 className="text-xl font-semibold text-primary-dark">
            No professional engagement by browsing
          </h2>
          <p>
            Visiting this website or submitting a form does not create a service
            contract. Engagement terms are established separately in writing.
          </p>
          <h2 className="text-xl font-semibold text-primary-dark">
            Accuracy of information
          </h2>
          <p>
            We work to keep website content accurate, but service descriptions
            may change as offerings evolve.
          </p>
          <p className="text-xs text-warning">
            Have legal counsel review and replace this content before public
            launch.
          </p>
        </div>
      </PageSection>
    </>
  );
}
