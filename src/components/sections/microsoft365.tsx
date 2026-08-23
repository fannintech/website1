import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";

const m365Items = [
  "Microsoft 365",
  "Microsoft Teams",
  "Exchange Online",
  "SharePoint",
  "OneDrive",
  "Microsoft Defender",
  "Cloud security",
  "Migration & management",
];

export function Microsoft365Section() {
  return (
    <section className="section-padding bg-white">
      <div className="container-ft grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div
            className="aspect-[5/4] rounded-lg border border-border bg-surface p-8"
            role="img"
            aria-label="Placeholder visual representing Microsoft 365 collaboration tools"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-muted-text">
              [IMAGE PLACEHOLDER]
            </p>
            <h3 className="mt-6 text-2xl font-bold text-primary-dark">
              Cloud productivity that works for your team
            </h3>
            <p className="mt-3 text-muted-text">
              Replace with approved imagery of modern workplace collaboration,
              Microsoft 365 apps, or business teams using cloud tools.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Get More From Microsoft 365
          </h2>
          <p className="mt-4 text-muted-text">
            Licensing alone does not create a productive or secure workplace. We
            help configure, migrate, secure, and manage Microsoft 365 so your
            people can collaborate with less friction and less risk.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {m365Items.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-primary-dark"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CtaLink href="/services/cloud-microsoft-365" size="lg">
              Optimize Microsoft 365
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
