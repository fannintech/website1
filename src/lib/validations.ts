import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required")
    .max(80, "First name is too long"),
  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required")
    .max(80, "Last name is too long"),
  company: z
    .string()
    .trim()
    .min(1, "Company is required")
    .max(120, "Company name is too long"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .max(160, "Email is too long"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(30, "Phone number is too long")
    .regex(/^[0-9+().\-\s]+$/, "Enter a valid phone number"),
  employees: z.enum(
    ["1-10", "11-50", "51-200", "201-500", "500+", "Prefer not to say"],
    { message: "Select number of employees" },
  ),
  currentItProvider: z
    .string()
    .trim()
    .max(160, "Response is too long")
    .optional()
    .or(z.literal("")),
  servicesNeeded: z
    .array(z.string())
    .min(1, "Select at least one service"),
  message: z
    .string()
    .trim()
    .min(10, "Please share a bit more detail")
    .max(4000, "Message is too long"),
  preferredContactMethod: z.enum(["Email", "Phone", "Either"], {
    message: "Select a preferred contact method",
  }),
  // Honeypot — bots fill this; humans should leave empty
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const consultationFormSchema = contactFormSchema.extend({
  preferredTime: z
    .string()
    .trim()
    .max(120, "Preferred time is too long")
    .optional()
    .or(z.literal("")),
  interest: z
    .string()
    .trim()
    .max(120)
    .optional()
    .or(z.literal("")),
});

export type ConsultationFormValues = z.infer<typeof consultationFormSchema>;

export const serviceOptions = [
  "Managed IT Services",
  "Co-Managed IT",
  "Cybersecurity",
  "Cloud & Microsoft 365",
  "Backup & Disaster Recovery",
  "Network & Infrastructure",
  "IT Projects",
  "AI Education and Consulting",
  "Not sure yet",
] as const;
