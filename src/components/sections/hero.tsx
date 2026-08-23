import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-wash">
      <div className="absolute inset-0 bg-grid-soft opacity-60" aria-hidden />
      <div className="container-ft relative grid min-h-[78vh] items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Fannin Technologies
          </p>
          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-primary-dark sm:text-5xl lg:text-[3.4rem]">
            IT That Keeps Your Business Moving.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-text">
            Fannin Technologies provides proactive IT management, cybersecurity,
            cloud solutions, and technology support designed to keep your
            business secure, productive, and prepared for what’s next.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href="/schedule-consultation" size="lg">
              Schedule a Consultation
            </CtaLink>
            <CtaLink href="/services" variant="outline" size="lg">
              Explore Our Services
            </CtaLink>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-primary-dark shadow-[var(--shadow-md)]"
            role="img"
            aria-label="Placeholder for professional technology and business imagery"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(57_126_219_/_0.45),transparent_45%),linear-gradient(135deg,#112133,#1a334d_55%,#397edb)]" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                [IMAGE PLACEHOLDER]
              </p>
              <p className="mt-2 max-w-sm text-lg font-semibold">
                Modern business technology, cybersecurity, and cloud operations.
              </p>
              <p className="mt-1 text-sm text-white/75">
                Replace with approved photography of teams, offices, or
                infrastructure.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
