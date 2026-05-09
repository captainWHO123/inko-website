import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NoticeBar } from "@/components/ui/notice-bar";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import type { ReframeSectionContent } from "@/types/sections";
import type { PreorderState } from "@/types/state";

interface ReframeSectionProps {
  content: ReframeSectionContent;
  pageState?: PreorderState;
  entryPage?: string;
}

export function ReframeSection({
  content,
  pageState,
  entryPage = "page",
}: ReframeSectionProps) {
  const isHomeReframe = content.id === "reframe";

  return (
    <section id={content.id} className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} tone={isHomeReframe ? "light" : "dark"} />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={20}>
            <Card className="overflow-hidden bg-[linear-gradient(145deg,#101820_0%,#162431_52%,#1d3440_100%)] text-white shadow-[0_42px_86px_-48px_rgba(16,24,32,0.62)]">
            <p className="text-lg leading-8 text-white/92">{content.lead}</p>
            {content.points?.length ? (
              isHomeReframe ? (
                <div className="mt-7 flex flex-wrap gap-2">
                  {content.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/78"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              ) : (
                <ul className="mt-7 space-y-3 text-sm leading-7 text-white/78">
                  {content.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-teal-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )
            ) : null}
            {content.notice ? <NoticeBar className="mt-6" notice={content.notice} /> : null}
            {(content.primaryCta || content.secondaryCta) ? (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {content.primaryCta ? (
                  <PrimaryButton
                    href={content.primaryCta.href}
                    external={content.primaryCta.external}
                    analyticsEvent={content.primaryCta.eventName}
                    analyticsContext={{
                      page_state: pageState,
                      user_path_type: content.primaryCta.userPathType,
                      checkout_mode: content.primaryCta.checkoutMode,
                      entry_page: entryPage,
                      location: `${content.id}-primary`,
                    }}
                  >
                    {content.primaryCta.label}
                  </PrimaryButton>
                ) : null}
                {content.secondaryCta ? (
                  <SecondaryButton
                    href={content.secondaryCta.href}
                    external={content.secondaryCta.external}
                    analyticsEvent={content.secondaryCta.eventName}
                    analyticsContext={{
                      page_state: pageState,
                      user_path_type: content.secondaryCta.userPathType,
                      checkout_mode: content.secondaryCta.checkoutMode,
                      entry_page: entryPage,
                      location: `${content.id}-secondary`,
                    }}
                    className="border-white/20 bg-white/10 text-white hover:bg-white/15"
                  >
                    {content.secondaryCta.label}
                  </SecondaryButton>
                ) : null}
              </div>
            ) : null}
            </Card>
          </Reveal>

          {content.comparisons?.length ? (
            <div className="space-y-5">
              {content.comparisons.map((comparison, index) => (
                <Reveal key={comparison.title} delay={70 + index * 80}>
                  <Card
                  key={comparison.title}
                  tone="outline"
                  className="border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,245,241,0.88))]"
                >
                  {isHomeReframe ? (
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-teal-800">
                      {comparison.title}
                    </p>
                  ) : (
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink-950">
                      {comparison.title}
                    </h3>
                  )}
                  <p className="mt-3 text-sm leading-7 text-ink-700">{comparison.body}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
