import { NoticeBar } from "@/components/ui/notice-bar";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import type { ProblemSectionContent } from "@/types/sections";

interface ProblemSectionProps {
  content: ProblemSectionContent;
}

export function ProblemSection({ content }: ProblemSectionProps) {
  const isHomeProblem = content.id === "post-meeting-work";

  return (
    <section id={content.id} className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
        {content.notice ? <NoticeBar notice={content.notice} className="mt-8" /> : null}
        {isHomeProblem ? (
          <div className="mt-10 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal className="h-full" delay={20}>
              <div className="h-full rounded-[32px] border border-[#31495C] bg-[linear-gradient(145deg,#172838_0%,#1a2c3d_56%,#203649_100%)] p-6 text-white shadow-[0_34px_72px_-38px_rgba(16,25,34,0.48)] md:p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal-100">
                Why this creates drag
              </p>
              <p className="mt-5 font-serif text-3xl leading-[1.02] tracking-[-0.04em] text-white md:text-[2.7rem]">
                The meeting is usually fine. The second job is not.
              </p>
              <p className="mt-5 max-w-lg text-sm leading-7 text-white/74">
                The real friction shows up when recall, follow-up, and record cleanup all compete for attention after the client leaves.
              </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="overflow-hidden rounded-[32px] border border-white/84 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,238,0.92))] shadow-[0_22px_42px_-30px_rgba(16,25,34,0.18)]">
              {content.points.map((point, index) => (
                <Reveal
                  key={point.title}
                  delay={index * 70}
                  className="px-5 py-5 md:px-6 md:py-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-teal-300/70 bg-teal-50 text-sm font-semibold text-teal-900">
                      {index + 1}
                    </span>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal-800">
                      After the meeting
                    </p>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-ink-950">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink-700">{point.body}</p>
                  {index < content.points.length - 1 ? (
                    <div className="mt-5 h-px bg-gradient-to-r from-transparent via-ink-200/80 to-transparent" />
                  ) : null}
                </Reveal>
              ))}
              </div>
            </Reveal>
          </div>
        ) : (
          <div className="mt-10 overflow-hidden rounded-[32px] border border-white/84 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,245,241,0.9))] shadow-[0_28px_56px_-38px_rgba(16,24,32,0.2)]">
            {content.points.map((point, index) => (
              <div
                key={point.title}
                className="grid gap-4 px-5 py-5 md:grid-cols-[0.32fr_0.68fr] md:px-6 md:py-6"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-teal-300/70 bg-teal-50 text-sm font-semibold text-teal-900">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal-800">
                      Decision point
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-ink-950">
                      {point.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-7 text-ink-700 md:pt-9">{point.body}</p>
                {index < content.points.length - 1 ? (
                  <div className="md:col-span-2">
                    <div className="h-px bg-gradient-to-r from-transparent via-ink-200/80 to-transparent" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
