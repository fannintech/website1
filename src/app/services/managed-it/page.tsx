import type { Metadata } from "next";
import {
  ServicePage,
  generateServiceMetadata,
} from "@/components/services/service-page";

export const metadata: Metadata = generateServiceMetadata("managed-it");

export default function Page() {
  return <ServicePage serviceId="managed-it" />;
}
