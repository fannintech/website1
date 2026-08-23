import Link from "next/link";
import { CtaLink } from "@/components/ui/cta-link";

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-ft max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold">Page not found</h1>
        <p className="mt-3 text-muted-text">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CtaLink href="/">Back to Home</CtaLink>
          <CtaLink href="/contact" variant="outline">
            Contact Us
          </CtaLink>
        </div>
        <p className="mt-6 text-sm">
          <Link href="/services" className="text-primary hover:underline">
            Browse services
          </Link>
        </p>
      </div>
    </section>
  );
}
