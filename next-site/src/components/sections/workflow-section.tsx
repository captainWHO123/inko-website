import { Card } from "@/components/ui/card";
import { MotionLayer } from "@/components/ui/motion-layer";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { StageMediaPanel } from "@/components/ui/stage-media-panel";
import { cn } from "@/lib/utils/cn";
import type { WorkflowSectionContent } from "@/types/sections";

interface WorkflowSectionProps {
  content: WorkflowSectionContent;
}

export function WorkflowSection({ content }: WorkflowSectionProps) {
  const isHomeWorkflow = content.id === "home-workflow";

  const stepTheme = (stepId: string) => {
    if (stepId === "capture") {
      return {
        line: "from-teal-300/70 via-blue-200/50 to-transparent",
        frame: "bg-[linear-gradient(180deg,rgba(241,248,247,0.98),rgba(232,242,240,0.92))]",
        label: "text-teal-900",
        chip: "border-teal-300/70 bg-teal-50 text-teal-900",
      };
    }

    if (stepId === "review") {
      return {
        line: "from-teal-300/70 via-teal-100/50 to-transparent",
        frame: "bg-[linear-gradient(180deg,rgba(244,248,246,0.98),rgba(236,244,241,0.92))]",
        label: "text-teal-900",
        chip: "border-teal-300/70 bg-teal-50 text-teal-900",
      };
    }

    if (stepId === "follow-up") {
      return {
        line: "from-blue-200/70 via-teal-200/45 to-transparent",
        frame: "bg-[linear-gradient(180deg,rgba(243,247,251,0.98),rgba(234,241,246,0.92))]",
        label: "text-blue-950",
        chip: "border-blue-200/70 bg-blue-50 text-blue-950",
      };
    }

    return {
      line: "from-amber-200/80 via-amber-50/42 to-transparent",
      frame: "bg-[linear-gradient(180deg,rgba(252,248,241,0.98),rgba(247,241,233,0.92))]",
      label: "text-amber-950",
      chip: "border-amber-200/70 bg-amber-50 text-amber-950",
    };
  };

  return (
    <section id={content.id} className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} tone={isHomeWorkflow ? "light" : "dark"} />
        {isHomeWorkflow ? (
          <div className="mt-10 overflow-hidden rounded-[36px] border border-white/84 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,245,241,0.9))] p-5 shadow-[0_30px_60px_-40px_rgba(16,24,32,0.18)] md:p-6">
            <div className="mb-5 grid gap-4 xl:grid-cols-[1.12fr_0.88fr] xl:items-stretch">
              {content.stageMedia ? (
                <Reveal delay={30}>
                  <MotionLayer y={18} scale={0.012}>
                    <div className="overflow-hidden rounded-[28px] border border-ink-200/80 bg-white shadow-[0_24px_48px_-32px_rgba(16,24,32,0.16)]">
                      <StageMediaPanel
                        media={content.stageMedia}
                        priority
                        sizes="(max-width: 1280px) 100vw, 58vw"
                        className="min-h-[20rem] bg-white md:min-h-[24rem]"
                        imageClassName="object-contain object-center"
                        overlayClassName="bg-transparent"
                      />
                    </div>
                  </MotionLayer>
                </Reveal>
              ) : null}
              <Reveal delay={110}>
                <div className="rounded-[26px] border border-ink-200/80 bg-[linear-gradient(180deg,rgba(248,250,252,0.96),rgba(239,245,241,0.92))] px-5 py-5 shadow-[0_24px_48px_-34px_rgba(8,14,18,0.32)]">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-teal-800">Workflow loop</p>
                <h3 className="mt-3 text-[2rem] font-serif leading-[1.02] tracking-[-0.04em] text-ink-950">
                  Record. Understand. Act.
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink-700">
                  One click starts capture. The system turns the meeting into summary, follow-up, client memory, and CRM-ready output.
                </p>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {["Record", "Summarise", "Follow up", "CRM ready"].map((item) => (
                    <div
                      key={item}
                      className="rounded-[18px] border border-ink-200/80 bg-white/92 px-4 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink-700 shadow-[0_12px_24px_-22px_rgba(16,24,32,0.16)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                </div>
              </Reveal>
            </div>
            <div className="relative md:pt-10">
              <div className="inko-flow-rail pointer-events-none hidden md:block" />
              <div className="grid gap-3 md:grid-cols-4">
              {content.steps.map((step, index) => (
                <Reveal
                  key={step.id}
                  delay={index * 80}
                  className="relative"
                >
                  <MotionLayer
                    y={12 + index * 3}
                    x={index % 2 === 0 ? -8 : 8}
                    scale={0.008}
                    className="rounded-[28px] border border-white/85 bg-white/92 px-4 py-5 shadow-[0_18px_32px_-26px_rgba(16,24,32,0.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_42px_-24px_rgba(16,24,32,0.18)]"
                  >
                  <div className={cn("mb-5 overflow-hidden rounded-[20px] border border-ink-200/80 shadow-[0_16px_34px_-28px_rgba(16,25,34,0.16)]", stepTheme(step.id).frame)}>
                    <div className={cn("h-1 w-full bg-gradient-to-r", stepTheme(step.id).line)} />
                    {step.id === "capture" ? (
                      <div className="relative flex items-center gap-3 px-4 py-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-[16px] border border-ink-200/80 bg-[#162734] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-red-400 inko-pulse" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <div className="h-2 w-20 rounded-full bg-teal-200/80 inko-write-line" />
                            <span className="rounded-full border border-ink-200/70 bg-white/80 px-2 py-1 text-[0.5rem] font-semibold uppercase tracking-[0.14em] text-ink-600">
                              live
                            </span>
                          </div>
                          <div className="grid grid-cols-5 gap-1">
                            {Array.from({ length: 5 }).map((_, barIndex) => (
                              <div
                                key={barIndex}
                                className="inko-wave-bar rounded-full bg-ink-950/82"
                                style={{
                                  height: `${12 + ((barIndex % 3) + 1) * 5}px`,
                                  animationDelay: `${barIndex * 90}ms`,
                                  width: "100%",
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="absolute inset-x-4 bottom-2 h-px bg-gradient-to-r from-transparent via-teal-300/80 to-transparent" />
                      </div>
                    ) : step.id === "review" ? (
                      <div className="space-y-3 px-4 py-4">
                        <div className="rounded-[14px] border border-ink-200/75 bg-white/94 px-3 py-3">
                          <div className="flex items-center justify-between gap-2">
                            <div className="h-2 w-24 rounded-full bg-ink-950/85" />
                            <span className={cn("rounded-full border px-2 py-1 text-[0.5rem] font-semibold uppercase tracking-[0.14em]", stepTheme(step.id).chip)}>
                              summary
                            </span>
                          </div>
                          <div className="mt-3 space-y-2">
                            <div className="h-2 rounded-full bg-ink-200/85 inko-write-line" />
                            <div className="h-2 rounded-full bg-ink-200/60 inko-write-line" style={{ animationDelay: "160ms" }} />
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {Array.from({ length: 3 }).map((_, blockIndex) => (
                            <div key={blockIndex} className="rounded-[14px] border border-ink-200/75 bg-surface-1/88 px-3 py-3">
                              <div className="h-2 rounded-full bg-teal-200/85 inko-breathe" style={{ animationDelay: `${blockIndex * 120}ms` }} />
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : step.id === "follow-up" ? (
                      <div className="space-y-2 px-4 py-4">
                        <div className="rounded-[14px] border border-ink-200/75 bg-white/94 px-3 py-2">
                          <div className="h-2 w-10 rounded-full bg-ink-200/85" />
                          <div className="mt-2 h-2 w-28 rounded-full bg-ink-950/84 inko-write-line" />
                        </div>
                        <div className="rounded-[14px] border border-ink-200/75 bg-white/94 px-3 py-3">
                          <div className="space-y-2">
                            <div className="h-2 rounded-full bg-ink-200/85 inko-write-line" />
                            <div className="h-2 rounded-full bg-ink-200/65 inko-write-line" style={{ animationDelay: "140ms" }} />
                            <div className="h-2 w-3/4 rounded-full bg-ink-200/65 inko-write-line" style={{ animationDelay: "260ms" }} />
                          </div>
                          <div className="mt-3 flex items-center justify-between gap-2">
                            <span className="text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-ink-500">ready to send</span>
                            <span className="text-sm text-teal-800 inko-caret">Reply path visible</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="inko-scan-panel space-y-2 px-4 py-4">
                        <div className="grid grid-cols-[0.42fr_0.58fr_auto] gap-2 text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
                          <span>Field</span>
                          <span>Value</span>
                          <span>Status</span>
                        </div>
                        {Array.from({ length: 3 }).map((_, rowIndex) => (
                          <div key={rowIndex} className="grid grid-cols-[0.42fr_0.58fr_auto] gap-2 rounded-[14px] border border-ink-200/75 bg-white/94 px-3 py-2">
                            <div className="h-2 rounded-full bg-ink-200/85" />
                            <div className="h-2 rounded-full bg-ink-950/75" />
                            <div className="h-2 rounded-full bg-amber-200/85" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-teal-300/70 bg-teal-50 text-sm font-semibold text-teal-900">
                      {index + 1}
                    </span>
                    {step.timing ? (
                      <span className={cn("rounded-full border px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em]", stepTheme(step.id).chip)}>
                        {step.timing}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-ink-200/90 to-transparent" />
                  <h3 className="mt-5 text-[1.55rem] font-semibold tracking-[-0.03em] text-ink-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink-700">{step.body}</p>
                  {step.bullets?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {step.bullets.map((bullet) => (
                        <span
                          key={bullet}
                          className="rounded-full border border-ink-200/85 bg-white/94 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink-600"
                        >
                          {bullet}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {step.outcome ? (
                    <div className="mt-5 flex items-center justify-between gap-3 rounded-[18px] border border-ink-200/75 bg-surface-1/88 px-4 py-3">
                      <p className="text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
                        Result
                      </p>
                      <p className="text-right text-sm font-medium leading-6 text-ink-800">{step.outcome}</p>
                    </div>
                  ) : null}
                  </MotionLayer>
                </Reveal>
              ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative mt-10">
            <div className="absolute left-[12%] right-[12%] top-11 hidden h-px bg-gradient-to-r from-transparent via-ink-200/90 to-transparent lg:block" />
            <div className="grid gap-5 lg:grid-cols-3">
              {content.steps.map((step, index) => (
                <Card
                  key={step.id}
                  className="relative overflow-hidden border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,245,241,0.92))]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-300 via-teal-100 to-blue-200" />
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal-300/70 bg-teal-50 text-sm font-semibold text-teal-900">
                        {index + 1}
                      </span>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal-800">
                        Step {index + 1}
                      </p>
                    </div>
                    {step.timing ? (
                      <span className="rounded-full border border-ink-200/80 bg-white/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-700">
                        {step.timing}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-ink-950">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-ink-700">{step.body}</p>
                  {step.bullets?.length ? (
                    <div className="mt-6">
                      <ul className="flex flex-wrap gap-2 text-sm leading-6 text-ink-700">
                        {step.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="rounded-full border border-ink-200/90 bg-white/92 px-3 py-2 shadow-[0_10px_22px_-18px_rgba(16,24,32,0.2)]"
                          >
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {step.outcome ? (
                    <div className="mt-6 flex items-center justify-between gap-3 rounded-[22px] border border-ink-200/80 bg-surface-1 px-4 py-4 text-sm text-ink-800">
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink-600">
                        Outcome
                      </span>
                      <span className="font-semibold text-ink-950">{step.outcome}</span>
                    </div>
                  ) : null}
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
