"use client";

import { useState, type CSSProperties } from "react";

import { cn } from "@/lib/utils/cn";
import type { ProofField, ProofSample } from "@/types/sections";

const modeMeta = {
  summary: {
    badge: "Meeting Summary",
    hint: "Post-meeting review",
    actionLabel: "Generate Follow-up",
  },
  follow_up: {
    badge: "Follow-up Email",
    hint: "Send-ready composer",
    actionLabel: "Send to CRM",
  },
  client_memory: {
    badge: "Customer Profile",
    hint: "Relationship memory",
    actionLabel: "Update profile",
  },
  crm_handoff: {
    badge: "CRM Mapping",
    hint: "Structured handoff",
    actionLabel: "View sync log",
  },
} as const;

function WorkspaceCard({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-[1.5rem] border border-white/6 bg-white/[0.035] p-5 shadow-[0_20px_45px_-35px_rgba(0,0,0,0.72)]",
        className,
      )}
    >
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/42">
        {title}
      </p>
      {children}
    </section>
  );
}

function FieldRows({
  items,
  compact = false,
}: {
  items: ProofField[];
  compact?: boolean;
}) {
  return (
    <div className={cn("space-y-3", compact && "space-y-2")}>
      {items.map((item) => (
        <div
          key={`${item.label}-${item.value}`}
          className={cn(
            "flex items-center justify-between gap-4 rounded-[1rem] border border-white/6 bg-black/14 px-3 py-3",
            compact && "px-3 py-2.5",
          )}
        >
          <span className="text-[0.72rem] uppercase tracking-[0.18em] text-white/38">
            {item.label}
          </span>
          <span className="text-right text-sm font-medium text-white/84">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

function SummarySurface({ sample }: { sample: ProofSample }) {
  const inspectorFields = sample.inspectorFields ?? [];
  const structuredFields = sample.structuredFields ?? [];
  const householdFields = [...inspectorFields, ...structuredFields].slice(0, 3);

  return (
    <div className="grid gap-6 xl:grid-cols-[1.45fr_0.78fr]">
      <div className="space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-[2rem] italic tracking-[-0.04em] text-white md:text-[2.35rem]">
              {sample.title}
            </h3>
            <p className="mt-2 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-white/36">
              {sample.preview}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/62"
            >
              Download PDF
            </button>
            <button
              type="button"
              className="rounded-full bg-white px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#111318]"
            >
              Generate Follow-up
            </button>
          </div>
        </div>

        <WorkspaceCard title="Key Insights">
          <ul className="mt-5 space-y-4">
            {sample.detail.map((detail) => (
              <li key={detail} className="flex items-start gap-3 text-sm leading-7 text-white/76">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#96d5dc]" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </WorkspaceCard>

        <WorkspaceCard title="Action Items">
          <div className="mt-5 space-y-3">
            {sample.actionItems?.map((item, index) => (
              <div
                key={item}
                className={cn(
                  "flex items-center gap-3 rounded-[1rem] border px-3 py-3",
                  index === 0
                    ? "border-[#2d746d]/40 bg-[#153029]"
                    : "border-white/6 bg-black/14",
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-5 w-5 items-center justify-center rounded-md border text-[0.7rem] font-bold",
                    index === 0
                      ? "border-[#96d5dc]/35 text-[#96d5dc]"
                      : "border-white/18 text-white/48",
                  )}
                >
                  {index === 0 ? "1" : ""}
                </span>
                <span className="text-sm text-white/78">{item}</span>
              </div>
            ))}
          </div>
        </WorkspaceCard>
      </div>

      <div className="space-y-6">
        <WorkspaceCard title={sample.inspectorTitle ?? "Household"}>
          <div className="mt-5">
            <FieldRows items={householdFields} />
          </div>
        </WorkspaceCard>
      </div>
    </div>
  );
}

function FollowUpSurface({ sample }: { sample: ProofSample }) {
  const subject = sample.title;
  const recipient = sample.structuredFields?.[0]?.value ?? "Client review queue";
  const body = [sample.preview, ...sample.detail.slice(0, 2)];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-[#96d5dc]/20 bg-[#96d5dc]/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#96d5dc]">
          AI-drafted follow-up
        </span>
        <h3 className="font-serif text-2xl italic tracking-[-0.04em] text-white md:text-3xl">
          {subject}
        </h3>
      </div>

      <div className="overflow-hidden rounded-[1.75rem] border border-white/7 bg-[#0a0c0f] shadow-[0_28px_72px_-42px_rgba(0,0,0,0.78)]">
        <div className="space-y-3 border-b border-white/6 bg-[#101318] p-6">
          <div className="flex gap-4 text-xs">
            <span className="w-16 font-semibold uppercase tracking-[0.18em] text-white/28">To</span>
            <span className="text-white/78">{recipient}</span>
          </div>
          <div className="flex gap-4 text-xs">
            <span className="w-16 font-semibold uppercase tracking-[0.18em] text-white/28">
              Subject
            </span>
            <span className="text-white">{subject}</span>
          </div>
        </div>

        <div className="space-y-5 p-7 text-sm leading-7 text-white/78">
          <p>Hi there,</p>
          {body.map((paragraph, index) => (
            <p key={`${paragraph}-${index}`}>{paragraph}</p>
          ))}
          <p>
            Please reply with the option you want to review first and I will prepare the
            next meeting around that path.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/6 bg-[#101318] px-6 py-4">
          <div className="flex gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-white/32">
            <span>Attachment ready</span>
            <span>Draft saved</span>
          </div>
          <button
            type="button"
            className="rounded-full bg-[linear-gradient(135deg,#184f53,#35586f)] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white"
          >
            Send to CRM
          </button>
        </div>
      </div>
    </div>
  );
}

function ClientMemorySurface({ sample }: { sample: ProofSample }) {
  const fields = sample.structuredFields ?? [];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 flex flex-wrap items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-[linear-gradient(135deg,#184f53,#38515f)] font-serif text-2xl italic text-white">
          AR
        </div>
        <div>
          <h3 className="font-serif text-[2rem] italic tracking-[-0.04em] text-white">
            {sample.title}
          </h3>
          <p className="mt-1 text-[0.72rem] uppercase tracking-[0.22em] text-white/34">
            Persistent relationship memory
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <WorkspaceCard title="Household Info" className="bg-white/[0.04]">
          <div className="mt-5">
            <FieldRows items={fields.slice(0, 3)} compact />
          </div>
        </WorkspaceCard>

        <WorkspaceCard title="Financial Focus">
          <div className="mt-5 flex flex-wrap gap-2">
            {sample.tags.map((tag, index) => (
              <span
                key={tag}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs",
                  index === 1
                    ? "border-[#96d5dc]/18 bg-[linear-gradient(135deg,#184f53,#35586f)] text-white"
                    : "border-white/8 bg-white/[0.04] text-white/74",
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </WorkspaceCard>

        <WorkspaceCard title="Communication Style" className="md:col-span-2">
          <p className="mt-5 text-sm italic leading-7 text-white/74">{sample.preview}</p>
        </WorkspaceCard>
      </div>
    </div>
  );
}

function CrmHandoffSurface({ sample }: { sample: ProofSample }) {
  const sourceFields = sample.structuredFields?.slice(0, 3) ?? [];
  const destinationFields =
    sample.inspectorFields?.slice(0, 3).map((field) => ({
      label: field.label,
      value: field.value,
    })) ?? [];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-emerald-300">
          Sync successful
        </div>
        <h3 className="mt-5 font-serif text-[2.35rem] italic tracking-[-0.04em] text-white">
          {sample.title}
        </h3>
      </div>

      <div className="grid items-start gap-4 md:grid-cols-[1fr_auto_1fr]">
        <div className="space-y-4">
          <p className="px-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/34">
            Inko source data
          </p>
          <FieldRows items={sourceFields} compact />
        </div>

        <div className="hidden h-full min-h-48 items-center justify-center md:flex">
          <div className="flex w-16 flex-col items-center gap-8 pt-10">
            {[0, 1, 2].map((item) => (
              <span
                key={item}
                className="block h-px w-full bg-[linear-gradient(90deg,rgba(150,213,220,0.28),rgba(58,187,124,0.55),rgba(150,213,220,0.28))]"
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="px-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/34">
            CRM destination fields
          </p>
          <FieldRows items={destinationFields} compact />
        </div>
      </div>

      <WorkspaceCard title="Activity Log Updated" className="mt-10">
        <p className="mt-5 text-sm leading-7 text-white/74">{sample.preview}</p>
      </WorkspaceCard>
    </div>
  );
}

function renderSurface(sample: ProofSample) {
  switch (sample.surfaceKind) {
    case "follow_up":
      return <FollowUpSurface sample={sample} />;
    case "client_memory":
      return <ClientMemorySurface sample={sample} />;
    case "crm_handoff":
      return <CrmHandoffSurface sample={sample} />;
    case "summary":
    default:
      return <SummarySurface sample={sample} />;
  }
}

function tabStyle(delay: string): CSSProperties {
  return { animationDelay: delay };
}

export function V4ProofWorkspaceShowcase({ samples }: { samples: ProofSample[] }) {
  const [activeId, setActiveId] = useState(samples[0]?.id ?? "");
  const activeSample = samples.find((sample) => sample.id === activeId) ?? samples[0];

  if (!activeSample) {
    return null;
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#22272f] bg-[#0c0e11] shadow-[0_34px_90px_-44px_rgba(16,24,32,0.64)] md:rounded-[2.25rem]">
      <div className="grid lg:grid-cols-[16rem_minmax(0,1fr)]">
        <aside className="flex flex-col gap-6 border-b border-white/6 bg-[#0a0c10] p-5 lg:border-b-0 lg:border-r lg:p-6">
          <div>
            <p className="px-2 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-white/34">
              Workspace modes
            </p>
            <div className="mt-5 grid gap-2">
              {samples.map((sample) => {
                const meta =
                  modeMeta[sample.surfaceKind ?? "summary"] ?? modeMeta.summary;
                const isActive = activeSample.id === sample.id;

                return (
                  <button
                    key={sample.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveId(sample.id)}
                    className={cn(
                      "rounded-[1rem] px-4 py-3 text-left transition-all",
                      isActive
                        ? "bg-[linear-gradient(135deg,#184f53,#304960)] text-white shadow-[0_18px_42px_-26px_rgba(24,79,83,0.56)]"
                        : "bg-transparent text-white/58 hover:bg-white/[0.05]",
                    )}
                  >
                    <span className="block text-sm font-semibold">{meta.badge}</span>
                    <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.18em] text-white/42">
                      {meta.hint}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-auto rounded-[1.25rem] border border-[#1f2f35] bg-[linear-gradient(180deg,rgba(13,29,32,0.94),rgba(8,18,22,0.94))] p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-white/34">
                App status
              </span>
              <div className="flex items-end gap-1">
                <span className="inko-wave-bar block h-4 w-1 rounded-full bg-[#96d5dc]" style={tabStyle("0.1s")} />
                <span className="inko-wave-bar block h-4 w-1 rounded-full bg-[#96d5dc]" style={tabStyle("0.3s")} />
                <span className="inko-wave-bar block h-4 w-1 rounded-full bg-[#96d5dc]" style={tabStyle("0.2s")} />
              </div>
            </div>
            <p className="text-xs font-medium text-[#96d5dc]">Ready to sync</p>
            <p className="mt-1 text-[0.68rem] leading-5 text-white/42">
              3 new meeting captures pending review.
            </p>
          </div>
        </aside>

        <div className="min-w-0 bg-[linear-gradient(180deg,#111418,#0d1014)] text-white">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/6 bg-white/[0.02] px-5 py-4 md:px-7">
            <div className="flex flex-wrap items-center gap-5 text-[0.68rem] uppercase tracking-[0.18em] text-white/36">
              <span>Oct 24, 2024</span>
              <span>2:45 PM</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/8 bg-white/8 text-[0.62rem] font-semibold text-white">
                  AR
                </span>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/8 bg-[#184f53] text-[0.62rem] font-semibold text-white">
                  IK
                </span>
              </div>
              <span className="text-[0.68rem] uppercase tracking-[0.18em] text-white/28">
                Live workspace
              </span>
            </div>
          </div>

          <div className="overflow-x-hidden p-5 md:p-7 xl:p-8">{renderSurface(activeSample)}</div>
        </div>
      </div>
    </div>
  );
}
