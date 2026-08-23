import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";

const cyberItems = [
  "Endpoint security",
  "Managed detection",
  "Email security",
  "Identity protection",
  "Multi-factor authentication",
  "Security monitoring",
  "Employee awareness",
  "Backup and recovery",
];

export function CyberSection() {
  return (
    <section className="section-padding bg-cyber text-white">
      <div className="container-ft grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Your Business Is a Target. Your IT Should Be Ready.
          </h2>
          <p className="mt-4 max-w-xl text-white/75">
            Attackers look for easy openings—weak passwords, unprotected email,
            unpatched devices, and untested backups. We help you put practical
            defenses in place and keep them working.
          </p>
          <div className="mt-8">
            <CtaLink href="/services/cybersecurity" variant="default" size="lg">
              Protect Your Business
            </CtaLink>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {cyberItems.map((item) => (
              <li
                key={item}
                className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/90"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
