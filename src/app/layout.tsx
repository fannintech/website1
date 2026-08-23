import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/layout/footer";
import {
  createMetadata,
  localBusinessSchema,
  organizationSchema,
} from "@/lib/seo";
import { JsonLd } from "@/components/layout/page-shell";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: "Managed IT & Cybersecurity Partner | Fannin Technologies",
  description:
    "Fannin Technologies provides managed IT services, cybersecurity, Microsoft 365, and cloud solutions for small and medium-sized businesses across North Texas.",
  path: "/",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd data={[organizationSchema, localBusinessSchema()]} />
      </body>
    </html>
  );
}
