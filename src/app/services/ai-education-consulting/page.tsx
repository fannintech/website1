import type { Metadata } from "next";
import {
  ServicePage,
  generateServiceMetadata,
} from "@/components/services/service-page";

export const metadata: Metadata = generateServiceMetadata("ai-education-consulting");

export default function Page() {
  return <ServicePage serviceId="ai-education-consulting" />;
}
