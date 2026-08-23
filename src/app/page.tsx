import { HeroSection } from "@/components/sections/hero";
import { TrustSection } from "@/components/sections/trust";
import { ServicesSection } from "@/components/sections/services-grid";
import { WhySection } from "@/components/sections/why";
import { CyberSection } from "@/components/sections/cyber";
import { Microsoft365Section } from "@/components/sections/microsoft365";
import { IndustriesSection } from "@/components/sections/industries";
import { ProcessSection } from "@/components/sections/process";
import { TestimonialsSection } from "@/components/testimonials/carousel";
import { LeadMagnetsSection } from "@/components/sections/lead-magnets";
import { FinalCtaSection } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <WhySection />
      <CyberSection />
      <Microsoft365Section />
      <IndustriesSection />
      <ProcessSection />
      <TestimonialsSection />
      <LeadMagnetsSection />
      <FinalCtaSection />
    </>
  );
}
