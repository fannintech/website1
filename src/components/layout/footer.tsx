import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { footerNav } from "@/data/navigation";

const placeholderContact = {
  email: "[CONTACT_EMAIL_PLACEHOLDER]",
  phone: "[CONTACT_PHONE_PLACEHOLDER]",
  address: "[CONTACT_ADDRESS_PLACEHOLDER]",
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary-dark text-white">
      <div className="container-ft section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="rounded-md bg-white px-3 py-2 inline-block">
              <Logo />
            </div>
            <p className="text-sm text-white/75 max-w-sm">
              Fannin Technologies is a managed service provider helping small and
              medium-sized businesses stay secure, productive, and prepared for
              what’s next.
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-primary-light">
              Your Technology Partner
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h2>
            <ul className="space-y-2 text-sm text-white/75">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h2>
            <ul className="space-y-2 text-sm text-white/75">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h2>
            <ul className="space-y-2 text-sm text-white/75">
              {footerNav.resources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h2>
            <ul className="space-y-3 text-sm text-white/75">
              <li>
                <span className="block text-xs uppercase tracking-wide text-white/50">
                  Email
                </span>
                {placeholderContact.email}
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-white/50">
                  Phone
                </span>
                {placeholderContact.phone}
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-white/50">
                  Address
                </span>
                {placeholderContact.address}
              </li>
            </ul>
            <div className="mt-6">
              <p className="mb-2 text-xs uppercase tracking-wide text-white/50">
                Social
              </p>
              <ul className="flex flex-wrap gap-3 text-sm text-white/75">
                <li>[LinkedIn Placeholder]</li>
                <li>[Facebook Placeholder]</li>
                <li>[X Placeholder]</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Fannin Technologies. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
