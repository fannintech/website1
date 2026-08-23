import type { Metadata } from "next";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import {
  PageHero,
  PageSection,
  JsonLd,
} from "@/components/layout/page-shell";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy placeholder for Fannin Technologies. Replace with legal counsel-approved policy before launch.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page is a structural placeholder. Replace with a counsel-reviewed privacy policy before collecting personal data in production."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <PageSection>
        <div className="prose-ft space-y-4 text-sm">
          <p>
            [PRIVACY POLICY PLACEHOLDER] Fannin Technologies respects the privacy
            of website visitors and prospective customers. This placeholder
            outlines the categories of information a final policy should address.
          </p>
          <h2 className="text-xl font-semibold text-primary-dark">
            Information we may collect
          </h2>
          <p>
            Contact form submissions may include name, company, email, phone,
            employee range, service interests, and message content.
          </p>
          <h2 className="text-xl font-semibold text-primary-dark">
            How information may be used
          </h2>
          <p>
            Information submitted through forms is intended for responding to
            inquiries, scheduling consultations, and improving related services.
          </p>
          <h2 className="text-xl font-semibold text-primary-dark">
            Cookies and analytics
          </h2>
          <p>
            Analytics and marketing pixels should remain disabled until
            configured through environment variables and reviewed for consent
            requirements.
          </p>
          <h2 className="text-xl font-semibold text-primary-dark">
            Contact for privacy questions
          </h2>
          <p>[CONTACT_EMAIL_PLACEHOLDER]</p>
          <p className="text-xs text-warning">
            Have legal counsel review and replace this content before public
            launch.
          </p>
        </div>
      </PageSection>
    </>
  );
}
