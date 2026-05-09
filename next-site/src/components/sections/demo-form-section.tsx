"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";

import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { NoticeBar } from "@/components/ui/notice-bar";
import { SectionHeader } from "@/components/ui/section-header";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { trackEvent } from "@/lib/analytics/track";
import type { AnalyticsEventName } from "@/types/analytics";
import type { DemoFormSectionContent } from "@/types/sections";
import type { PreorderState } from "@/types/state";

interface DemoFormSectionProps {
  content: DemoFormSectionContent;
  pageState: PreorderState;
  endpoint: "/api/demo" | "/api/waitlist";
  startEventName?: AnalyticsEventName;
  submitEventName: AnalyticsEventName;
}

export function DemoFormSection({
  content,
  pageState,
  endpoint,
  startEventName,
  submitEventName,
}: DemoFormSectionProps) {
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

  return (
    <section id={content.id} className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <Card>
          <SectionHeader eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
          {content.disabledMessage ? (
            <NoticeBar
              className="mt-6"
              notice={{
                tone: "info",
                title: "Support note",
                body: content.disabledMessage,
              }}
            />
          ) : null}
          {status === "success" ? (
            <div className="mt-8 rounded-[24px] border border-teal-200 bg-teal-50 p-6">
              <h3 className="text-xl font-semibold text-teal-950">{content.successTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-teal-900">{content.successMessage}</p>
              {content.secondaryCta ? (
                <div className="mt-5">
                  <SecondaryButton href={content.secondaryCta.href}>
                    {content.secondaryCta.label}
                  </SecondaryButton>
                </div>
              ) : null}
            </div>
          ) : (
            <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
              {content.fields.map((field) => (
                <label key={field.name} className="block">
                  <span className="mb-2 block text-sm font-medium text-ink-900">
                    {field.label}
                  </span>
                  {field.type === "textarea" ? (
                    <Textarea
                      required={field.required}
                      placeholder={field.placeholder}
                      value={defaultValues[field.name] ?? ""}
                      onChange={(event) => updateField(field.name, event.target.value)}
                    />
                  ) : field.type === "select" ? (
                    <Select
                      required={field.required}
                      value={defaultValues[field.name] ?? ""}
                      onChange={(event) => updateField(field.name, event.target.value)}
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
                    />
                  )}
                  {field.description ? (
                    <span className="mt-2 block text-xs leading-6 text-ink-600">
                      {field.description}
                    </span>
                  ) : null}
                </label>
              ))}

              {status === "error" ? (
                <NoticeBar
                  notice={{
                    tone: "danger",
                    title: "Submission failed",
                    body: errorMessage,
                  }}
                />
              ) : null}

              <div className="flex flex-col gap-3 sm:flex-row">
                <PrimaryButton type="submit" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending..." : content.submitLabel}
                </PrimaryButton>
                {content.secondaryCta ? (
                  <SecondaryButton href={content.secondaryCta.href}>
                    {content.secondaryCta.label}
                  </SecondaryButton>
                ) : null}
              </div>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}
