"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  consultationFormSchema,
  serviceOptions,
  type ContactFormValues,
  type ConsultationFormValues,
} from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

type Mode = "contact" | "consultation";

type Props = {
  mode?: Mode;
  defaultInterest?: string;
};

export function LeadForm({ mode = "contact", defaultInterest = "" }: Props) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const schema = mode === "consultation" ? consultationFormSchema : contactFormSchema;

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      employees: undefined,
      currentItProvider: "",
      servicesNeeded: [],
      message: "",
      preferredContactMethod: undefined,
      website: "",
      preferredTime: "",
      interest: defaultInterest,
    },
  });

  const selectedServices =
    useWatch({ control, name: "servicesNeeded" }) || [];

  const toggleService = (service: string) => {
    const next = selectedServices.includes(service)
      ? selectedServices.filter((s) => s !== service)
      : [...selectedServices, service];
    setValue("servicesNeeded", next, { shouldValidate: true });
  };

  const onSubmit = async (values: ContactFormValues | ConsultationFormValues) => {
    setStatus("idle");
    setServerMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, formType: mode }),
      });
      const data = (await res.json()) as { ok?: boolean; message?: string };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setServerMessage(
          data.message || "Unable to submit right now. Please try again shortly.",
        );
        return;
      }
      setStatus("success");
      setServerMessage(
        data.message ||
          "Thank you. We received your request and will follow up soon.",
      );
      reset();
    } catch {
      setStatus("error");
      setServerMessage("Unable to submit right now. Please try again shortly.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
      aria-describedby="form-status"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" autoComplete="given-name" className="mt-1.5" {...register("firstName")} />
          {errors.firstName ? (
            <p className="mt-1 text-xs text-error">{errors.firstName.message}</p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" autoComplete="family-name" className="mt-1.5" {...register("lastName")} />
          {errors.lastName ? (
            <p className="mt-1 text-xs text-error">{errors.lastName.message}</p>
          ) : null}
        </div>
      </div>

      <div>
        <Label htmlFor="company">Company</Label>
        <Input id="company" autoComplete="organization" className="mt-1.5" {...register("company")} />
        {errors.company ? (
          <p className="mt-1 text-xs text-error">{errors.company.message}</p>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" autoComplete="email" className="mt-1.5" {...register("email")} />
          {errors.email ? (
            <p className="mt-1 text-xs text-error">{errors.email.message}</p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" autoComplete="tel" className="mt-1.5" {...register("phone")} />
          {errors.phone ? (
            <p className="mt-1 text-xs text-error">{errors.phone.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="employees">Number of Employees</Label>
          <Select id="employees" className="mt-1.5" defaultValue="" {...register("employees")}>
            <option value="" disabled>
              Select range
            </option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201-500">201-500</option>
            <option value="500+">500+</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </Select>
          {errors.employees ? (
            <p className="mt-1 text-xs text-error">{errors.employees.message}</p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="currentItProvider">Current IT Provider</Label>
          <Input
            id="currentItProvider"
            className="mt-1.5"
            placeholder="Optional"
            {...register("currentItProvider")}
          />
        </div>
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-primary-dark">
          Services Needed
        </legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {serviceOptions.map((service) => (
            <label
              key={service}
              className="flex items-start gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm"
            >
              <input
                type="checkbox"
                className="mt-1"
                checked={selectedServices.includes(service)}
                onChange={() => toggleService(service)}
              />
              <span>{service}</span>
            </label>
          ))}
        </div>
        {errors.servicesNeeded ? (
          <p className="mt-1 text-xs text-error">{errors.servicesNeeded.message}</p>
        ) : null}
      </fieldset>

      <div>
        <Label htmlFor="preferredContactMethod">Preferred Contact Method</Label>
        <Select
          id="preferredContactMethod"
          className="mt-1.5"
          defaultValue=""
          {...register("preferredContactMethod")}
        >
          <option value="" disabled>
            Select method
          </option>
          <option value="Email">Email</option>
          <option value="Phone">Phone</option>
          <option value="Either">Either</option>
        </Select>
        {errors.preferredContactMethod ? (
          <p className="mt-1 text-xs text-error">
            {errors.preferredContactMethod.message}
          </p>
        ) : null}
      </div>

      {mode === "consultation" ? (
        <div>
          <Label htmlFor="preferredTime">Preferred Consultation Window</Label>
          <Input
            id="preferredTime"
            className="mt-1.5"
            placeholder="Example: Weekday mornings"
            {...register("preferredTime")}
          />
        </div>
      ) : null}

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          className="mt-1.5"
          placeholder="Tell us about your goals, challenges, or timeline."
          {...register("message")}
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-error">{errors.message.message}</p>
        ) : null}
      </div>

      {/* Honeypot field for basic spam protection */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <input type="hidden" {...register("interest")} />

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting
          ? "Submitting..."
          : mode === "consultation"
            ? "Schedule a Consultation"
            : "Request a Consultation"}
      </Button>

      <div id="form-status" role="status" aria-live="polite" className="min-h-6 text-sm">
        {status === "success" ? (
          <p className="text-success">{serverMessage}</p>
        ) : null}
        {status === "error" ? (
          <p className="text-error">{serverMessage}</p>
        ) : null}
      </div>
    </form>
  );
}
