import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustryBySlug } from "@/data/industries";
import {
  IndustryPage,
  generateIndustryMetadata,
} from "@/components/industries/industry-page";

const industry = getIndustryBySlug("accounting");

export const metadata: Metadata = industry
  ? generateIndustryMetadata(industry)
  : { title: "Industry" };

export default function Page() {
  if (!industry) notFound();
  return <IndustryPage industry={industry} />;
}
