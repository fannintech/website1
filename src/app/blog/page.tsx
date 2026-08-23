import type { Metadata } from "next";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import {
  PageHero,
  PageSection,
  JsonLd,
} from "@/components/layout/page-shell";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = createMetadata({
  title: "IT & Cybersecurity Blog",
  description:
    "Business-friendly articles on managed IT, cybersecurity, Microsoft 365, and technology planning from Fannin Technologies.",
  path: "/blog",
});

const placeholderPosts = [
  {
    title: "[PLACEHOLDER] What Proactive IT Support Means for Business Owners",
    excerpt:
      "[PLACEHOLDER] A plain-language look at monitoring, patching, and why waiting for tickets is costly.",
  },
  {
    title: "[PLACEHOLDER] Five Practical Cybersecurity Steps for SMBs",
    excerpt:
      "[PLACEHOLDER] MFA, email protection, backups, patching, and awareness training explained for non-technical leaders.",
  },
  {
    title: "[PLACEHOLDER] Microsoft 365 Security Basics Worth Reviewing",
    excerpt:
      "[PLACEHOLDER] Access controls, sharing settings, and email protections that reduce everyday risk.",
  },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <PageHero
        eyebrow="Blog"
        title="Insights for Business Leaders"
        description="Future articles will explain technology decisions in clear business language. Placeholder posts are shown below until content is published."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <PageSection className="bg-surface">
        <div className="grid gap-4 md:grid-cols-3">
          {placeholderPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-lg border border-border bg-white p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-warning">
                Placeholder post
              </p>
              <h2 className="mt-2 text-lg font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm text-muted-text">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </PageSection>
      <FinalCtaSection />
    </>
  );
}
