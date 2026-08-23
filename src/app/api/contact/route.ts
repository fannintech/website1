import { NextResponse } from "next/server";
import { consultationFormSchema } from "@/lib/validations";

type RateBucket = { count: number; resetAt: number };

const globalStore = globalThis as typeof globalThis & {
  __ftRateLimit?: Map<string, RateBucket>;
};

function getStore() {
  if (!globalStore.__ftRateLimit) {
    globalStore.__ftRateLimit = new Map();
  }
  return globalStore.__ftRateLimit;
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function sanitize(value: string) {
  return value.replace(/[<>]/g, "").trim();
}

export async function POST(request: Request) {
  try {
    const windowMs = Number(process.env.RATE_LIMIT_WINDOW_MS || 60000);
    const max = Number(process.env.RATE_LIMIT_MAX_REQUESTS || 5);
    const ip = getClientIp(request);
    const store = getStore();
    const now = Date.now();
    const bucket = store.get(ip);

    if (!bucket || bucket.resetAt < now) {
      store.set(ip, { count: 1, resetAt: now + windowMs });
    } else {
      bucket.count += 1;
      store.set(ip, bucket);
      if (bucket.count > max) {
        return NextResponse.json(
          {
            ok: false,
            message: "Too many requests. Please wait a moment and try again.",
          },
          { status: 429 },
        );
      }
    }

    const body = await request.json();
    const parsed = consultationFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please check the form fields and try again.",
        },
        { status: 400 },
      );
    }

    // Honeypot triggered
    if (parsed.data.website) {
      return NextResponse.json({
        ok: true,
        message: "Thank you. We received your request and will follow up soon.",
      });
    }

    const payload = {
      ...parsed.data,
      firstName: sanitize(parsed.data.firstName),
      lastName: sanitize(parsed.data.lastName),
      company: sanitize(parsed.data.company),
      message: sanitize(parsed.data.message),
      currentItProvider: sanitize(parsed.data.currentItProvider || ""),
      receivedAt: new Date().toISOString(),
      formType: body.formType || "contact",
    };

    // Email / CRM integration placeholder
    const webhook = process.env.CONTACT_FORM_WEBHOOK_URL;
    if (webhook) {
      const webhookRes = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!webhookRes.ok) {
        return NextResponse.json(
          {
            ok: false,
            message: "Unable to submit right now. Please try again shortly.",
          },
          { status: 502 },
        );
      }
    } else if (process.env.NODE_ENV === "development") {
      console.info("[contact-form-placeholder]", {
        email: payload.email,
        company: payload.company,
        formType: payload.formType,
      });
    }

    return NextResponse.json({
      ok: true,
      message: "Thank you. We received your request and will follow up soon.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Unable to submit right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
