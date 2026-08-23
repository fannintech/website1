import type { Metadata } from "next";
import {
  ServicePage,
  generateServiceMetadata,
} from "@/components/services/service-page";

export const metadata: Metadata = generateServiceMetadata("cloud-microsoft-365");

export default function Page() {
  return <ServicePage serviceId="cloud-microsoft-365" />;
}
