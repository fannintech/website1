import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";

export function FinalCtaSection() {
  return (
    <section className="section-padding bg-primary-dark text-white">
      <div className="container-ft">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Let’s Make Technology Work for Your Business.
            </h2>
            <p className="mt-4 text-white/75">
              Whether you need a complete IT partner or support for your
              existing IT team, Fannin Technologies can help.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <CtaLink href="/schedule-consultation" size="lg">
                Schedule a Consultation
              </CtaLink>
              <CtaLink href="/contact" variant="outline" size="lg" className="border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white">
                Talk to an IT Expert
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
