"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";

import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { trackEvent } from "@/lib/analytics/track";
import type { AnalyticsEventName } from "@/types/analytics";
import type { DemoFormSectionContent } from "@/types/sections";
import type { PreorderState } from "@/types/state";

interface DemoRequestFormProps {
  content: DemoFormSectionContent;
  pageState: PreorderState;
  endpoint: "/api/demo" | "/api/waitlist";
  startEventName?: AnalyticsEventName;
  submitEventName: AnalyticsEventName;
  statusLabel?: string;
  footerNote?: string;
  hideSecondaryCta?: boolean;
  className?: string;
}

const fieldClassName =
  "border-black/8 bg-white/58 text-ink-950 placeholder:text-ink-500/70 shadow-none backdrop-blur-sm focus:border-teal-700 focus:ring-teal-200";

export function DemoRequestForm({
  content,
  pageState,
  endpoint,
  startEventName,
  submitEventName,
  statusLabel = "Active",
  footerNote = "We use your answers to keep the walkthrough useful and specific to your workflow.",
  hideSecondaryCta = false,
  className,
}: DemoRequestFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasTrackedStart, setHasTrackedStart] = useState(false);

  const defaultValues = useMemo(
    () =>
      Object.fromEntries(content.fields.map((field) => [field.name, formData[field.name] ?? ""])),
    [content.fields, formData],
  );

  function updateField(name: string, value: string) {
    if (!hasTrackedStart && startEventName) {
      trackEvent(startEventName, {
        page_state: pageState,
        location: `${content.id}-form`,
      });
      setHasTrackedStart(true);
    }

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(formEvent: FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(defaultValues),
      });

      if (!response.ok) {
        const body = (await response.json()) as { error?: string };
        throw new Error(body.error ?? "Something went wrong.");
      }

      trackEvent(submitEventName, {
        page_state: pageState,
        location: `${content.id}-submit`,
      });

      setStatus("success");
      setFormData({});
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[2rem] border border-teal-200/80 bg-white/72 p-8 shadow-[0_38px_88px_-60px_rgba(16,24,32,0.28)] backdrop-blur-sm md:p-10">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-teal-800/72">
          Request received
        </p>
        <h3 className="mt-4 font-serif text-4xl tracking-[-0.03em] text-ink-950">
          {content.successTitle}
        </h3>
        <p className="mt-4 text-sm leading-7 text-ink-700">{content.successMessage}</p>
        {content.secondaryCta && !hideSecondaryCta ? (
          <SecondaryButton href={content.secondaryCta.href} className="mt-6">
            {content.secondaryCta.label}
          </SecondaryButton>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={[
        "rounded-[2rem] border border-white/60 bg-white/66 p-8 shadow-[0_40px_94px_-62px_rgba(16,24,32,0.28)] backdrop-blur-2xl md:p-10",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-teal-800/72">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.03em] text-ink-950">
            {content.title}
          </h2>
          {content.subtitle ? (
            <p className="mt-3 max-w-xl text-sm leading-7 text-ink-700">{content.subtitle}</p>
          ) : null}
        </div>
        <span className="rounded-full bg-teal-800 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white">
          {statusLabel}
        </span>
      </div>

      {content.disabledMessage ? (
        <p className="mt-5 rounded-[1.35rem] border border-teal-200/70 bg-teal-50/85 px-4 py-3 text-sm leading-6 text-teal-950">
          {content.disabledMessage}
        </p>
      ) : null}

      <form className="mt-8 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
        {content.fields.map((field) => (
          <label
            key={field.name}
            className={field.type === "textarea" ? "md:col-span-2" : undefined}
          >
            <span className="mb-2 block pl-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink-600">
              {field.label}
            </span>
            {field.type === "textarea" ? (
              <Textarea
                required={field.required}
                placeholder={field.placeholder}
                value={defaultValues[field.name] ?? ""}
                onChange={(event) => updateField(field.name, event.target.value)}
                className={fieldClassName}
              />
            ) : field.type === "select" ? (
              <Select
                required={field.required}
                value={defaultValues[field.name] ?? ""}
                onChange={(event) => updateField(field.name, event.target.value)}
                className={fieldClassName}
              >
                <option value="">Select one</option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            ) : (
              <Input
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                value={defaultValues[field.name] ?? ""}
                onChange={(event) => updateField(field.name, event.target.value)}
                className={fieldClassName}
              />
            )}
          </label>
        ))}

        <div className="md:col-span-2">
          <PrimaryButton
            type="submit"
            disabled={status === "submitting"}
            fullWidth
            className="h-14 text-base"
          >
            {status === "submitting" ? "Sending..." : content.submitLabel}
          </PrimaryButton>
          <p className="mt-4 text-center text-xs leading-6 text-ink-600">
            {footerNote}
          </p>
          {status === "error" ? (
            <p className="mt-3 text-center text-sm text-red-950">{errorMessage}</p>
          ) : null}
          {content.secondaryCta && !hideSecondaryCta ? (
            <div className="mt-4 text-center">
              <SecondaryButton href={content.secondaryCta.href}>
                {content.secondaryCta.label}
              </SecondaryButton>
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
}
