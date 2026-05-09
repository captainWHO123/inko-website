"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { MotionLayer } from "@/components/ui/motion-layer";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { trackEvent } from "@/lib/analytics/track";
import { cn } from "@/lib/utils/cn";
import type { ProofPreviewSectionContent, ProofSample } from "@/types/sections";
import type { PreorderState } from "@/types/state";

interface ProofPreviewSectionProps {
  content: ProofPreviewSectionContent;
  pageState: PreorderState;
}

type ModeTheme = {
  activeButton: string;
  inactiveButton: string;
  shell: string;
  workspaceGlow: string;
  header: string;
  meetingColumn: string;
  meetingCard: string;
  meetingCardInactive: string;
  meetingWave: string;
  panel: string;
  panelAlt: string;
  panelBorder: string;
  panelLabel: string;
  status: string;
  accentPill: string;
  railAccent: string;
  inspector: string;
  inspectorDark: string;
};

const summaryTheme: ModeTheme = {
  activeButton:
    "border-ink-950 bg-[linear-gradient(145deg,#172838_0%,#1a2c3d_56%,#203649_100%)] text-white shadow-[0_24px_50px_-30px_rgba(16,25,34,0.56)]",
  inactiveButton:
    "border-white/85 bg-white/90 text-ink-950 hover:border-ink-300 hover:bg-white",
  shell:
    "border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,248,245,0.92))]",
  workspaceGlow:
    "bg-[radial-gradient(circle_at_top_right,rgba(156,202,191,0.22),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(76,161,170,0.14),transparent_28%)]",
  header:
    "border-b border-teal-200/55 bg-[linear-gradient(180deg,rgba(236,245,241,0.9),rgba(255,255,255,0.96))]",
  meetingColumn:
    "bg-[radial-gradient(circle_at_top_left,rgba(94,176,190,0.18),transparent_20%),linear-gradient(180deg,#172838_0%,#203649_100%)]",
  meetingCard: "border-white/10 bg-white/10 text-white",
  meetingCardInactive: "border-white/8 bg-white/5 text-white/74",
  meetingWave: "bg-teal-100/90",
  panel: "border-white/80 bg-white/94",
  panelAlt: "border-white/80 bg-[linear-gradient(180deg,rgba(239,248,246,0.8),rgba(255,255,255,0.98))]",
  panelBorder: "border-ink-200/75",
  panelLabel: "text-teal-800",
  status: "border-teal-300/60 bg-white/90 text-teal-900",
  accentPill: "border-ink-950 bg-ink-950 text-white",
  railAccent: "bg-teal-300",
  inspector: "bg-teal-50/36",
  inspectorDark:
    "bg-[linear-gradient(145deg,#172838_0%,#1a2c3d_56%,#203649_100%)] text-white shadow-[0_28px_58px_-36px_rgba(16,25,34,0.62)]",
};

const followUpTheme: ModeTheme = {
  activeButton:
    "border-teal-950 bg-[linear-gradient(145deg,#102229_0%,#14343a_56%,#1d4a4e_100%)] text-white shadow-[0_24px_50px_-30px_rgba(16,25,34,0.56)]",
  inactiveButton:
    "border-white/85 bg-white/90 text-ink-950 hover:border-ink-300 hover:bg-white",
  shell:
    "border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,245,241,0.94))]",
  workspaceGlow:
    "bg-[radial-gradient(circle_at_top_right,rgba(94,176,190,0.22),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(46,109,114,0.16),transparent_30%)]",
  header:
    "border-b border-teal-200/55 bg-[linear-gradient(180deg,rgba(239,248,246,0.88),rgba(255,255,255,0.98))]",
  meetingColumn:
    "bg-[radial-gradient(circle_at_top_left,rgba(94,176,190,0.18),transparent_20%),linear-gradient(180deg,#102229_0%,#14343a_56%,#1d4a4e_100%)]",
  meetingCard: "border-white/10 bg-white/10 text-white",
  meetingCardInactive: "border-white/8 bg-white/5 text-white/74",
  meetingWave: "bg-teal-100/90",
  panel: "border-white/80 bg-white/94",
  panelAlt: "border-white/80 bg-[linear-gradient(180deg,rgba(239,248,246,0.75),rgba(255,255,255,0.98))]",
  panelBorder: "border-ink-200/75",
  panelLabel: "text-teal-800",
  status: "border-teal-300/60 bg-teal-50 text-teal-900",
  accentPill: "border-teal-950 bg-teal-950 text-white",
  railAccent: "bg-teal-700",
  inspector: "bg-surface-1/78",
  inspectorDark:
    "bg-[linear-gradient(145deg,#102229_0%,#14343a_56%,#1d4a4e_100%)] text-white shadow-[0_28px_58px_-36px_rgba(16,25,34,0.62)]",
};

const memoryTheme: ModeTheme = {
  activeButton:
    "border-blue-950 bg-[linear-gradient(145deg,#152433_0%,#193246_56%,#244864_100%)] text-white shadow-[0_24px_50px_-30px_rgba(16,25,34,0.56)]",
  inactiveButton:
    "border-white/85 bg-white/90 text-ink-950 hover:border-ink-300 hover:bg-white",
  shell:
    "border-white/85 bg-[linear-gradient(180deg,rgba(249,251,255,0.98),rgba(243,247,250,0.94))]",
  workspaceGlow:
    "bg-[radial-gradient(circle_at_top_right,rgba(74,119,171,0.2),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(120,172,214,0.16),transparent_28%)]",
  header:
    "border-b border-blue-200/55 bg-[linear-gradient(180deg,rgba(240,247,255,0.9),rgba(255,255,255,0.96))]",
  meetingColumn:
    "bg-[radial-gradient(circle_at_top_left,rgba(74,119,171,0.18),transparent_20%),linear-gradient(180deg,#152433_0%,#193246_56%,#244864_100%)]",
  meetingCard: "border-white/10 bg-white/10 text-white",
  meetingCardInactive: "border-white/8 bg-white/5 text-white/74",
  meetingWave: "bg-blue-200/92",
  panel: "border-white/80 bg-white/94",
  panelAlt: "border-white/80 bg-[linear-gradient(180deg,rgba(240,247,255,0.85),rgba(255,255,255,0.98))]",
  panelBorder: "border-ink-200/75",
  panelLabel: "text-blue-950",
  status: "border-blue-200/70 bg-blue-50 text-blue-950",
  accentPill: "border-blue-950 bg-blue-950 text-white",
  railAccent: "bg-blue-200",
  inspector: "bg-blue-50/40",
  inspectorDark:
    "bg-[linear-gradient(145deg,#152433_0%,#193246_56%,#244864_100%)] text-white shadow-[0_28px_58px_-36px_rgba(16,25,34,0.62)]",
};

const crmTheme: ModeTheme = {
  activeButton:
    "border-amber-950 bg-[linear-gradient(145deg,#2a2017_0%,#463224_56%,#654530_100%)] text-white shadow-[0_24px_50px_-30px_rgba(16,25,34,0.56)]",
  inactiveButton:
    "border-white/85 bg-white/90 text-ink-950 hover:border-ink-300 hover:bg-white",
  shell:
    "border-white/85 bg-[linear-gradient(180deg,rgba(255,251,245,0.98),rgba(247,242,235,0.95))]",
  workspaceGlow:
    "bg-[radial-gradient(circle_at_top_right,rgba(231,205,163,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(171,116,66,0.14),transparent_30%)]",
  header:
    "border-b border-amber-200/60 bg-[linear-gradient(180deg,rgba(255,246,233,0.92),rgba(255,255,255,0.96))]",
  meetingColumn:
    "bg-[radial-gradient(circle_at_top_left,rgba(231,205,163,0.16),transparent_20%),linear-gradient(180deg,#2a2017_0%,#463224_56%,#654530_100%)]",
  meetingCard: "border-white/10 bg-white/10 text-white",
  meetingCardInactive: "border-white/8 bg-white/5 text-white/74",
  meetingWave: "bg-amber-200/92",
  panel: "border-white/80 bg-white/94",
  panelAlt: "border-white/80 bg-[linear-gradient(180deg,rgba(255,247,236,0.86),rgba(255,255,255,0.98))]",
  panelBorder: "border-ink-200/75",
  panelLabel: "text-amber-950",
  status: "border-amber-200/80 bg-amber-50/72 text-amber-950",
  accentPill: "border-amber-950 bg-amber-950 text-white",
  railAccent: "bg-amber-200",
  inspector: "bg-amber-50/38",
  inspectorDark:
    "bg-[linear-gradient(145deg,#2a2017_0%,#463224_56%,#654530_100%)] text-white shadow-[0_28px_58px_-36px_rgba(16,25,34,0.62)]",
};

function getModeTheme(sampleId: string): ModeTheme {
  if (sampleId === "follow-up-sample") return followUpTheme;
  if (sampleId === "client-memory-sample") return memoryTheme;
  if (sampleId === "crm-output-sample") return crmTheme;
  return summaryTheme;
}

function getModeMetaLabel(sampleId: string) {
  if (sampleId === "follow-up-sample") return "Sendable";
  if (sampleId === "client-memory-sample") return "Persistent";
  if (sampleId === "crm-output-sample") return "Operational";
  return "Reviewable";
}

function getModeStatusLabel(sampleId: string) {
  if (sampleId === "follow-up-sample") return "Draft prepared";
  if (sampleId === "client-memory-sample") return "Profile preserved";
  if (sampleId === "crm-output-sample") return "Queue ready";
  return "Summary ready";
}

function getModeWorkspaceTags(sampleId: string) {
  if (sampleId === "follow-up-sample") return ["Compose", "Preview", "Send"];
  if (sampleId === "client-memory-sample") return ["Profile", "Preferences", "Continuity"];
  if (sampleId === "crm-output-sample") return ["Fields", "Owner", "Deadline"];
  return ["Summary", "Open items", "Actions"];
}

function getModeDescriptor(sampleId: string) {
  if (sampleId === "follow-up-sample") return "Draft, refine, and send without leaving the same workspace.";
  if (sampleId === "client-memory-sample") return "Carry context, preferences, and continuity into the next meeting.";
  if (sampleId === "crm-output-sample") return "Map the meeting into structured fields the rest of the workflow can use.";
  return "Review the meeting, priorities, and next actions in one advisor-ready state.";
}

function getFieldValue(sample: ProofSample, label: string) {
  return sample.structuredFields?.find((field) => field.label === label)?.value;
}

function SummarySurface({
  sample,
  theme,
}: {
  sample: ProofSample;
  theme: ModeTheme;
}) {
  const priority = getFieldValue(sample, "Priority");

  return (
    <div className={cn("rounded-[30px] border p-5 shadow-[0_22px_44px_-30px_rgba(16,25,34,0.2)] sm:p-6", theme.panelAlt, theme.panelBorder)}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-200/70 pb-4">
        <div>
          <p className={cn("text-[0.68rem] font-semibold uppercase tracking-[0.2em]", theme.panelLabel)}>
            Review dashboard
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink-950">{sample.title}</h3>
        </div>
        <span className={cn("rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em]", theme.status)}>
          Ready to review
        </span>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
        <div className={cn("rounded-[24px] border p-5", theme.panel, theme.panelBorder)}>
          <div className="flex items-center justify-between gap-3">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-600">Summary statement</p>
            {priority ? (
              <span className="rounded-full border border-teal-300/60 bg-teal-50 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-teal-900">
                Priority {priority}
              </span>
            ) : null}
          </div>
          <p className="mt-3 text-base leading-8 text-ink-800 sm:text-lg">{sample.preview}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Capture", value: "Complete" },
              { label: "Tasks", value: `${sample.actionItems?.length ?? 0} queued` },
              { label: "Review", value: "Advisor-ready" },
            ].map((item) => (
              <div key={item.label} className="rounded-[18px] border border-ink-200/75 bg-surface-1/82 px-4 py-3">
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-ink-600">{item.label}</p>
                <p className="mt-1 text-sm text-ink-800">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {(sample.structuredFields ?? []).map((field) => (
            <div key={field.label} className={cn("rounded-[20px] border p-4", theme.panel, theme.panelBorder)}>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-600">{field.label}</p>
              <p className="mt-2 text-sm leading-6 text-ink-800">{field.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
        <div className={cn("overflow-hidden rounded-[24px] border", theme.panel, theme.panelBorder)}>
          {sample.detail.map((detail, index) => (
            <div
              key={`${sample.id}-${index}`}
              className={cn("px-5 py-4", index > 0 && "border-t border-ink-200/75")}
            >
              <p className={cn("text-[0.68rem] font-semibold uppercase tracking-[0.18em]", theme.panelLabel)}>
                {sample.detailHeadings?.[index] ?? `Block ${index + 1}`}
              </p>
              <p className="mt-2 text-sm leading-7 text-ink-700">{detail}</p>
            </div>
          ))}
        </div>
        <div className={cn("rounded-[24px] border p-5", theme.panel, theme.panelBorder)}>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-600">Action queue</p>
          <div className="mt-4 space-y-3">
            {(sample.actionItems ?? []).map((item, index) => (
              <div key={item} className="flex gap-3 rounded-[18px] border border-ink-200/75 bg-surface-1/72 px-4 py-4">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-semibold text-teal-900 ring-1 ring-teal-300/60">
                  {index + 1}
                </span>
                <span className="text-sm leading-6 text-ink-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FollowUpSurface({
  sample,
  theme,
}: {
  sample: ProofSample;
  theme: ModeTheme;
}) {
  const recipient = getFieldValue(sample, "Recipient") ?? "Client follow-up recipient";
  const delivery = getFieldValue(sample, "Delivery") ?? "Advisor review then send";

  return (
      <div className={cn("rounded-[30px] border shadow-[0_22px_44px_-30px_rgba(16,25,34,0.2)]", theme.panel, theme.panelBorder)}>
      <div className={cn("border-b px-5 py-4 sm:px-6", theme.header)}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {["Compose", "Preview", "Send"].map((item, index) => (
              <span
                key={item}
                className={cn(
                  "rounded-full border px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em]",
                  index === 0 ? theme.accentPill : "border-ink-200/80 bg-white/88 text-ink-600",
                )}
              >
                {item}
              </span>
            ))}
          </div>
          <span className={cn("rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em]", theme.status)}>
            Ready to send
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Insert recap", "Tone check", "Preview on mobile"].map((item, index) => (
            <span
              key={item}
              className={cn(
                "rounded-full border px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em]",
                index === 0 ? theme.accentPill : "border-ink-200/80 bg-white/88 text-ink-600",
              )}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-4 px-5 py-5 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[18px] border border-ink-200/75 bg-surface-1 px-4 py-3">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-600">To</p>
                <p className="mt-2 text-sm text-ink-800">{recipient}</p>
              </div>
              <div className="rounded-[18px] border border-ink-200/75 bg-surface-1 px-4 py-3">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-600">Delivery</p>
                <p className="mt-2 text-sm text-ink-800">{delivery}</p>
              </div>
            </div>
            <div className="rounded-[18px] border border-ink-200/75 bg-white/94 px-4 py-3">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-600">Subject</p>
              <p className="mt-2 text-sm text-ink-800">Next steps from today&apos;s coverage review</p>
            </div>

            <div className={cn("rounded-[24px] border px-5 py-5", theme.panelAlt, theme.panelBorder)}>
              <div className="flex items-center justify-between gap-3">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-600">Email body</p>
                <span className="rounded-full border border-ink-200/80 bg-white/92 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-ink-600">
                  editor open
                </span>
              </div>
              <p className="mt-3 text-sm leading-8 text-ink-800 sm:text-[1.02rem]">{sample.preview}<span className="text-teal-800 inko-caret" /></p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Client-ready language", "Concrete next step", "Reply path visible"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-ink-200/80 bg-white/92 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className={cn("rounded-[24px] border p-5", theme.panel, theme.panelBorder)}>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-600">Send checklist</p>
              <div className="mt-4 space-y-3">
                {(sample.actionItems ?? []).map((item, index) => (
                  <div key={item} className="flex gap-3 rounded-[18px] border border-ink-200/75 bg-surface-1/72 px-4 py-4">
                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-semibold text-teal-900 ring-1 ring-teal-300/60">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-6 text-ink-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {(sample.structuredFields ?? []).map((field) => (
                <div key={field.label} className={cn("rounded-[18px] border p-4", theme.panel, theme.panelBorder)}>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-600">{field.label}</p>
                  <p className="mt-2 text-sm leading-6 text-ink-800">{field.value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-[18px] border border-ink-200/75 bg-white/92 px-4 py-3">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink-600">Advisor final review</span>
              <span className={cn("rounded-full border px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em]", theme.accentPill)}>
                Send next
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MemorySurface({
  sample,
  theme,
}: {
  sample: ProofSample;
  theme: ModeTheme;
}) {
  const client = getFieldValue(sample, "Client") ?? "Client profile";
  const household = getFieldValue(sample, "Household") ?? "Household context";

  return (
    <div className={cn("rounded-[30px] border shadow-[0_22px_44px_-30px_rgba(16,25,34,0.2)]", theme.panel, theme.panelBorder)}>
      <div className="border-b border-ink-200/70 px-5 py-5 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-teal-300/60 bg-teal-50 text-sm font-semibold text-teal-900">
              CM
            </span>
            <div>
              <p className={cn("text-[0.68rem] font-semibold uppercase tracking-[0.2em]", theme.panelLabel)}>
                Persistent client profile
              </p>
              <p className="mt-1 text-sm text-ink-700">Continuity carried into the next meeting</p>
            </div>
          </div>
          <span className={cn("rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em]", theme.status)}>
            Carried forward
          </span>
        </div>
      </div>

      <div className="grid gap-4 px-5 py-5 sm:px-6 lg:grid-cols-[0.74fr_1.26fr]">
        <div className={cn("rounded-[24px] px-5 py-5 text-white shadow-[0_24px_48px_-30px_rgba(16,25,34,0.58)]", theme.inspectorDark)}>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-teal-100">Relationship profile</p>
          <h4 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">{client}</h4>
          <p className="mt-1 text-sm leading-6 text-white/68">{household}</p>
          <p className="mt-3 text-base leading-7 text-white/88">{sample.preview}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {(sample.actionItems ?? []).map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white/78"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          <div className="grid gap-3 sm:grid-cols-3">
            {(sample.structuredFields ?? []).map((field) => (
              <div key={field.label} className={cn("rounded-[20px] border p-4", theme.panelAlt, theme.panelBorder)}>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-600">{field.label}</p>
                <p className="mt-2 text-sm leading-6 text-ink-800">{field.value}</p>
              </div>
            ))}
          </div>
          {sample.detail.map((detail, index) => (
            <div
              key={`${sample.id}-${index}`}
              className="relative rounded-[22px] border border-ink-200/75 bg-white/94 px-5 py-5 pl-8"
            >
              <div className="absolute bottom-4 left-4 top-4 w-[2px] rounded-full bg-gradient-to-b from-teal-300 via-teal-700 to-blue-200" />
              <p className={cn("text-[0.68rem] font-semibold uppercase tracking-[0.18em]", theme.panelLabel)}>
                {sample.detailHeadings?.[index] ?? `Profile block ${index + 1}`}
              </p>
              <p className="mt-3 text-sm leading-7 text-ink-700">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CrmSurface({
  sample,
  theme,
}: {
  sample: ProofSample;
  theme: ModeTheme;
}) {
  return (
    <div className={cn("rounded-[30px] border shadow-[0_22px_44px_-30px_rgba(16,25,34,0.2)]", theme.panel, theme.panelBorder)}>
      <div className="border-b border-ink-200/70 px-5 py-5 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className={cn("text-[0.68rem] font-semibold uppercase tracking-[0.2em]", theme.panelLabel)}>
              Structured handoff
            </p>
            <p className="mt-1 text-sm text-ink-700">Record-ready fields, owner, and follow-up timing in one place.</p>
          </div>
          <span className={cn("rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em]", theme.status)}>
            CRM-ready
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Fields mapped", "Owner assigned", "Deadline visible"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-amber-200/70 bg-amber-50/70 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-amber-950"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="px-5 py-5 sm:px-6">
        <div className="inko-scan-panel overflow-hidden rounded-[24px] border border-ink-200/75 bg-white/94">
          <div className="grid gap-3 border-b border-ink-200/70 bg-surface-1/88 px-4 py-3 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ink-600 sm:grid-cols-[0.38fr_0.42fr_auto]">
            <span>Field</span>
            <span>Value</span>
            <span>Status</span>
          </div>
          {(sample.structuredFields ?? []).map((field, index) => (
            <div
              key={field.label}
              className={cn(
                "grid gap-3 px-4 py-4 sm:grid-cols-[0.38fr_0.42fr_auto]",
                index > 0 && "border-t border-ink-200/70",
              )}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-600">{field.label}</p>
              <p className="text-sm leading-6 text-ink-800">{field.value}</p>
              <span className="self-start rounded-full border border-amber-200/70 bg-amber-50/70 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-amber-950">
                {index === 0 ? "Mapped" : index === 1 ? "Ops" : index === 2 ? "Assigned" : "Due"}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-[1.04fr_0.96fr]">
          <div className={cn("rounded-[22px] border px-5 py-5", theme.panelAlt, theme.panelBorder)}>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-600">Handoff note</p>
            <p className="mt-3 text-sm leading-8 text-ink-800">{sample.preview}</p>
          </div>
          <div className="space-y-3">
          {(sample.detail ?? []).map((detail, index) => (
            <div key={`${sample.id}-${index}`} className="rounded-[20px] border border-ink-200/75 bg-white/94 px-4 py-4">
                <p className={cn("text-[0.68rem] font-semibold uppercase tracking-[0.18em]", theme.panelLabel)}>
                  {sample.detailHeadings?.[index] ?? `Transfer block ${index + 1}`}
                </p>
                <p className="mt-2 text-sm leading-7 text-ink-700">{detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-end">
          <span className={cn("rounded-full border px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em]", theme.accentPill)}>
            Sync to CRM
          </span>
        </div>
      </div>
    </div>
  );
}

function renderMainSurface(sample: ProofSample, theme: ModeTheme) {
  if (sample.id === "follow-up-sample") {
    return <FollowUpSurface sample={sample} theme={theme} />;
  }

  if (sample.id === "client-memory-sample") {
    return <MemorySurface sample={sample} theme={theme} />;
  }

  if (sample.id === "crm-output-sample") {
    return <CrmSurface sample={sample} theme={theme} />;
  }

  return <SummarySurface sample={sample} theme={theme} />;
}

function renderInspector(sample: ProofSample, theme: ModeTheme) {
  if (sample.id === "client-memory-sample") {
    return (
      <>
        <div className={cn("rounded-[28px] p-5", theme.inspectorDark)}>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal-100">
            {sample.inspectorTitle ?? "Persistent cues"}
          </p>
          <p className="mt-3 text-sm leading-7 text-white/78">{sample.inspectorBody ?? sample.preview}</p>
          <div className="mt-4 space-y-3">
            {(sample.actionItems ?? []).map((item, index) => (
              <div key={item} className="rounded-[20px] border border-white/10 bg-white/6 px-4 py-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/55">Cue {index + 1}</p>
                <p className="mt-2 text-sm leading-6 text-white/92">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 overflow-hidden rounded-[24px] border border-white/84 bg-white/92">
          {(sample.inspectorFields ?? sample.structuredFields ?? []).map((field, index) => (
            <div key={field.label} className={cn("px-4 py-4", index > 0 && "border-t border-ink-200/70")}>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-blue-950">{field.label}</p>
              <p className="mt-2 text-sm leading-6 text-ink-700">{field.value}</p>
            </div>
          ))}
        </div>
      </>
    );
  }

  if (sample.id === "crm-output-sample") {
    return (
      <>
        <div className={cn("rounded-[28px] p-5", theme.inspectorDark)}>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal-100">
            {sample.inspectorTitle ?? "Handoff queue"}
          </p>
          <p className="mt-3 text-sm leading-7 text-white/78">{sample.inspectorBody ?? sample.preview}</p>
          <div className="mt-4 divide-y divide-white/10 rounded-[22px] border border-white/10 bg-white/5">
            {(sample.actionItems ?? []).map((item, index) => (
              <div key={item} className="flex gap-3 px-4 py-4">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/10 text-[0.68rem] font-semibold text-white">
                  {index + 1}
                </span>
                <span className="text-sm leading-6 text-white/92">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-3">
          {(sample.inspectorFields ?? []).map((field) => (
            <div key={field.label} className="rounded-[20px] border border-white/84 bg-white/92 px-4 py-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-amber-950">{field.label}</p>
              <p className="mt-2 text-sm leading-6 text-ink-700">{field.value}</p>
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div className={cn("rounded-[28px] p-5", theme.inspectorDark)}>
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal-100">
          {sample.inspectorTitle ?? (sample.id === "follow-up-sample" ? "Send settings" : "Meeting snapshot")}
        </p>
        <p className="mt-3 text-sm leading-7 text-white/74">
          {getModeDescriptor(sample.id)}
        </p>
        <div className="mt-4 divide-y divide-white/10 rounded-[22px] border border-white/10 bg-white/5">
          {(sample.inspectorFields ?? sample.structuredFields ?? []).map((field) => (
            <div key={field.label} className="flex items-start justify-between gap-4 px-4 py-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/55">{field.label}</p>
              <p className="max-w-[13rem] text-right text-sm leading-6 text-white">{field.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-[24px] border border-white/84 bg-white/92 p-5">
        <p className={cn("text-[0.68rem] font-semibold uppercase tracking-[0.18em]", theme.panelLabel)}>
          {sample.id === "follow-up-sample" ? "Send checklist" : "Ready next actions"}
        </p>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-ink-700">
          {(sample.actionItems ?? []).map((item, index) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-semibold text-teal-900 ring-1 ring-teal-300/60">
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function ProofPreviewSection({
  content,
  pageState,
}: ProofPreviewSectionProps) {
  const isFullProofPage = content.id === "proof-samples";
  const initialSampleId = content.defaultActiveId ?? content.items[0]?.id ?? "";
  const [activeId, setActiveId] = useState(initialSampleId);

  const activeSample = useMemo(
    () => content.items.find((sample) => sample.id === activeId) ?? content.items[0],
    [activeId, content.items],
  );

  const theme = getModeTheme(activeSample?.id ?? "");
  const workspaceTabs = activeSample?.workspaceTabs ?? getModeWorkspaceTags(activeSample?.id ?? "");
  const workspaceStatusLabel = activeSample?.statusLabel ?? getModeStatusLabel(activeSample?.id ?? "");

  function openSample(sampleId: string) {
    if (sampleId === activeSample?.id) {
      return;
    }

    trackEvent("proof_sample_open", {
      sample_id: sampleId,
      page_state: pageState,
      section_id: content.id,
    });

    setActiveId(sampleId);
  }

  return (
    <section id={content.id} className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
        <Reveal delay={60} className="mt-10">
          <MotionLayer y={18} scale={0.012}>
          <Card className="overflow-hidden border-[#223443] inko-app-shell p-3 shadow-[0_42px_88px_-48px_rgba(16,25,34,0.58)]">
            <div className={cn("grid gap-3", isFullProofPage ? "xl:grid-cols-[0.28fr_0.72fr]" : "xl:grid-cols-[0.31fr_0.69fr]")}>
              <aside className="rounded-[30px] border border-white/10 inko-app-rail p-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal-100">
                    Workspace views
                  </p>
                  <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/72">
                    4 states
                  </span>
                </div>

                <div className="mt-4 rounded-[22px] border border-white/10 bg-white/[0.05] px-4 py-4">
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-teal-100">
                    Product shell
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/72">
                    Move across the same application instead of opening a new sample each time.
                  </p>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                  {content.items.map((sample, index) => {
                    const isActive = sample.id === activeSample?.id;
                    const sampleTheme = getModeTheme(sample.id);

                    return (
                      <button
                        key={sample.id}
                        type="button"
                        onClick={() => openSample(sample.id)}
                        className={cn(
                          "relative w-full overflow-hidden rounded-[24px] border px-5 py-5 text-left transition duration-300 hover:-translate-y-0.5",
                          isActive ? sampleTheme.activeButton : sampleTheme.inactiveButton,
                        )}
                      >
                        <span className={cn("absolute inset-y-3 left-0 w-1 rounded-full opacity-90", sampleTheme.railAccent, isActive ? "opacity-100" : "opacity-40")} />
                        <div className="flex items-center justify-between gap-3">
                          <span
                            className={cn(
                              "inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold",
                              isActive
                                ? "border border-white/12 bg-white/8 text-white"
                                : "border border-white/10 bg-white/6 text-white/78",
                            )}
                          >
                            {index + 1}
                          </span>
                          <span className={cn("rounded-full border px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em]", isActive ? "border-white/14 bg-white/10 text-white/82" : "border-ink-200/80 bg-white/88 text-ink-600")}>
                            {getModeMetaLabel(sample.id)}
                          </span>
                        </div>
                        <h3 className={cn("mt-4 text-xl font-semibold tracking-[-0.02em]", isActive ? "text-white" : "text-ink-950")}>
                          {sample.label}
                        </h3>
                        <p className={cn("mt-2 text-sm leading-6", isActive ? "text-white/74" : "text-ink-700")}>
                          {sample.title}
                        </p>
                        <div className="mt-4 flex items-center justify-between gap-3">
                          <div className="h-px flex-1 rounded-full bg-white/10" />
                          <span className={cn("text-[0.58rem] font-semibold uppercase tracking-[0.16em]", isActive ? "text-white/64" : "text-ink-500")}>
                            {isActive ? "Active view" : "Open view"}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {activeSample ? (
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={`${activeSample.id}-rail`}
                      initial={{ opacity: 0, y: 18, scale: 0.985, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -10, scale: 0.985, filter: "blur(10px)" }}
                      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-4 rounded-[24px] border border-white/10 bg-white/[0.05] p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-teal-100">
                          Active state
                        </p>
                        <span className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-white/74">
                          {workspaceStatusLabel}
                        </span>
                      </div>
                      <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-white">{activeSample.title}</p>
                      <p className="mt-2 text-sm leading-6 text-white/68">{getModeDescriptor(activeSample.id)}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {workspaceTabs.map((tag, index) => (
                          <span
                            key={tag}
                            className={cn(
                              "rounded-full border px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.14em]",
                              index === 0 ? "border-white/14 bg-white/10 text-white" : "border-white/8 bg-transparent text-white/60",
                            )}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                ) : null}
              </aside>

              {activeSample ? (
                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03]">
                  <div className={cn("relative overflow-hidden rounded-[30px] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]", theme.shell, isFullProofPage && "xl:min-h-[58rem]")}>
                    <div className={cn("pointer-events-none absolute inset-0", theme.workspaceGlow)} />
                    <div className={cn("px-5 py-4 sm:px-6", theme.header)}>
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#ff7b72]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#f3c96b]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#4bc27a]" />
                        </div>
                        <div className="flex flex-1 items-center justify-end gap-3">
                          <div className="hidden items-center rounded-full border border-ink-200/75 bg-white/90 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink-600 md:flex">
                            Inko Workspace
                          </div>
                          <div className="hidden min-w-[15rem] items-center rounded-full border border-ink-200/75 bg-white/78 px-4 py-2 text-xs text-ink-500 lg:flex">
                            Search client, meeting, or record
                          </div>
                          <div className="rounded-full border border-ink-200/75 bg-white/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink-600">
                            Live state
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className={cn("text-[0.68rem] font-semibold uppercase tracking-[0.2em]", theme.panelLabel)}>
                            Active state
                          </p>
                          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-ink-950 md:text-[2rem]">
                            {activeSample.title}
                          </h3>
                        </div>
                        <span className={cn("rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em]", theme.status)}>
                          {workspaceStatusLabel}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2 border-t border-ink-200/70 pt-4">
                        {workspaceTabs.map((tag, index) => (
                          <span
                            key={tag}
                            className={cn(
                              "rounded-full border px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em]",
                              index === 0 ? theme.accentPill : "border-ink-200/80 bg-white/88 text-ink-600",
                            )}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-0 xl:grid-cols-[0.22fr_0.5fr_0.28fr]">
                      <div className={cn("border-b border-ink-200/75 p-4 text-white xl:border-b-0 xl:border-r xl:border-white/10 xl:p-5", theme.meetingColumn)}>
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal-100">Meetings</p>
                        <div className="mt-4 max-h-[34rem] space-y-3 overflow-y-auto pr-1">
                          {[
                            { date: "Today", title: "Coverage review", meta: "38m capture" },
                            { date: "Yesterday", title: "Beneficiary update", meta: "14m capture" },
                            { date: "Apr 2", title: "Retirement planning", meta: "51m capture" },
                            { date: "Mar 29", title: "Renewal review", meta: "22m capture" },
                          ].map((item, index) => (
                            <div
                              key={`${item.date}-${item.title}`}
                              className={cn(
                                "rounded-[20px] border px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
                                index === 0 ? theme.meetingCard : theme.meetingCardInactive,
                              )}
                            >
                              <div className="flex items-center justify-between gap-3">
                                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/55">{item.date}</p>
                                <span className="rounded-full border border-white/10 bg-white/8 px-2 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-white/72">
                                  {item.meta}
                                </span>
                              </div>
                              <p className="mt-2 text-sm leading-6 text-white">{item.title}</p>
                              {index === 0 ? (
                                <div className="mt-3 h-8 overflow-hidden rounded-full border border-white/10 bg-white/6 px-3">
                                  <div className="flex h-full items-center gap-1">
                                    {Array.from({ length: 16 }).map((_, waveIndex) => (
                                      <span
                                        key={waveIndex}
                                        className={cn("inko-wave-bar w-1 rounded-full", theme.meetingWave)}
                                        style={{
                                          height: `${10 + ((waveIndex % 4) + 1) * 4}px`,
                                          animationDelay: `${waveIndex * 90}ms`,
                                        }}
                                      />
                                    ))}
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-b border-ink-200/75 p-5 sm:p-6 xl:border-b-0 xl:border-r xl:p-8">
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.div
                            key={`${activeSample.id}-main`}
                            initial={{ opacity: 0, x: 24, scale: 0.992, filter: "blur(10px)" }}
                            animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, x: -18, scale: 0.988, filter: "blur(10px)" }}
                            transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
                          >
                            {renderMainSurface(activeSample, theme)}
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      <div className={cn("p-5 sm:p-6 xl:p-8", theme.inspector)}>
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.div
                            key={`${activeSample.id}-inspector`}
                            initial={{ opacity: 0, x: 18, scale: 0.992, filter: "blur(10px)" }}
                            animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, x: -12, scale: 0.988, filter: "blur(10px)" }}
                            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                          >
                            {renderInspector(activeSample, theme)}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </Card>
          </MotionLayer>
        </Reveal>
      </div>
    </section>
  );
}
