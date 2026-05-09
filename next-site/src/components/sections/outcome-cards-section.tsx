import { SecondaryButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils/cn";
import type { OutcomeCardsSectionContent } from "@/types/sections";
import type { PreorderState } from "@/types/state";

interface OutcomeCardsSectionProps {
  content: OutcomeCardsSectionContent;
  pageState?: PreorderState;
  entryPage?: string;
}

export function OutcomeCardsSection({
  content,
  pageState,
  entryPage = "page",
}: OutcomeCardsSectionProps) {
  const isProductOutputSection = content.id === "outcomes";
  const gridClassName =
    content.columns === 4
      ? "lg:grid-cols-4"
      : content.columns === 3
        ? "lg:grid-cols-3"
        : "lg:grid-cols-2";

  return (
    <section id={content.id} className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} tone={isProductOutputSection ? "light" : "dark"} />
        <div className={`mt-10 grid gap-5 ${gridClassName}`}>
          {content.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <Card
              key={item.title}
              className={cn(
                "h-full border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,238,0.92))]",
                isProductOutputSection && "p-5",
              )}
            >
              {isProductOutputSection ? (
                <div
                  className="mb-6 overflow-hidden rounded-[24px] border border-ink-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(241,237,230,0.84))] shadow-[0_18px_36px_-26px_rgba(16,25,34,0.18)]"
                >
                  {item.badge === "Summary" ? (
                    <div className="space-y-0 p-4">
                      <div className="rounded-[18px] border border-white/84 bg-white/94 px-4 py-4">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
                            Review dashboard
                          </p>
                          <span className="rounded-full border border-teal-300/60 bg-teal-50 px-2.5 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-teal-900">
                            Priority high
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-ink-800">Meeting recap prepared with clear next actions.</p>
                      </div>
                      <div className="mt-3 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                        {(item.bullets ?? []).map((bullet) => (
                          <div
                            key={bullet}
                            className="rounded-[16px] border border-ink-200/80 bg-surface-1/88 px-3 py-3"
                          >
                            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink-600">
                              {bullet}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : item.badge === "Follow-up" ? (
                    <div className="p-4">
                      <div className="rounded-[18px] border border-ink-200/80 bg-white/94 px-4 py-4">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
                            Send-ready composer
                          </p>
                          <span className="rounded-full border border-teal-300/60 bg-teal-50 px-2.5 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-teal-900">
                            Sendable
                          </span>
                        </div>
                        <div className="mt-3 grid gap-2">
                          <div className="rounded-[14px] border border-ink-200/75 bg-surface-1/86 px-3 py-2">
                            <p className="text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-ink-600">To</p>
                            <p className="mt-1 text-xs leading-5 text-ink-800">Client + spouse</p>
                          </div>
                          <div className="rounded-[14px] border border-ink-200/75 bg-surface-1/86 px-3 py-2">
                            <p className="text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-ink-600">Subject</p>
                            <p className="mt-1 text-xs leading-5 text-ink-800">Next steps from today&apos;s review</p>
                          </div>
                        </div>
                        <div className="mt-3 rounded-[14px] border border-ink-200/75 bg-surface-1/86 px-3 py-3">
                          <p className="text-sm leading-6 text-ink-800">
                            Thank you again for the time today. Here are the next steps and options we discussed.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : item.badge === "Continuity" ? (
                    <div className="grid gap-2 p-4">
                      <div className="rounded-[18px] border border-ink-200/80 bg-[#132434] px-4 py-4 text-white">
                        <p className="text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-teal-100">Client</p>
                        <p className="mt-1 text-sm font-semibold">Alex R.</p>
                        <p className="mt-1 text-xs leading-5 text-white/72">Married, growing family, comparison-led decisions</p>
                      </div>
                      {(item.bullets ?? []).map((bullet, index) => (
                        <div
                          key={bullet}
                          className="rounded-[18px] border border-ink-200/80 bg-white/94 px-4 py-3"
                        >
                          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
                            {index === 0 ? "Preference" : index === 1 ? "Known concern" : "Decision cue"}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-ink-800">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="overflow-hidden rounded-[20px] border border-ink-200/80 bg-white/94">
                      <div className="flex items-center justify-between border-b border-ink-200/70 px-4 py-3">
                        <p className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-amber-950">
                          Structured export
                        </p>
                        <span className="rounded-full border border-amber-200/70 bg-amber-50/80 px-2.5 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-amber-950">
                          CRM ready
                        </span>
                      </div>
                      {(item.bullets ?? []).map((bullet, index) => (
                        <div
                          key={bullet}
                          className={index > 0 ? "border-t border-ink-200/70 px-4 py-4" : "px-4 py-4"}
                        >
                          <div className="grid grid-cols-[0.42fr_0.58fr] gap-3">
                            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
                              {index === 0 ? "Field" : index === 1 ? "Owner" : "Due"}
                            </p>
                            <p className="text-sm leading-6 text-ink-800">{bullet}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : null}
              {item.badge ? (
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal-800">
                  {item.badge}
                </p>
              ) : null}
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-ink-950">
                {item.title}
              </h3>
              <p className={cn("mt-3 text-sm leading-6 text-ink-700", isProductOutputSection && "max-w-sm")}>
                {item.body}
              </p>
              {item.bullets?.length && !isProductOutputSection ? (
                <ul className="mt-6 flex flex-wrap gap-2 text-sm leading-6 text-ink-700">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-full border border-ink-200/90 bg-white/92 px-3 py-2 shadow-[0_10px_22px_-18px_rgba(16,24,32,0.25)]"
                    >
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {item.cta ? (
                <div className="mt-6">
                  <SecondaryButton
                    href={item.cta.href}
                    external={item.cta.external}
                    analyticsEvent={item.cta.eventName}
                    analyticsContext={{
                      page_state: pageState,
                      user_path_type: item.cta.userPathType,
                      checkout_mode: item.cta.checkoutMode,
                      entry_page: entryPage,
                      location: `${content.id}-card-cta`,
                    }}
                  >
                    {item.cta.label}
                  </SecondaryButton>
                </div>
              ) : null}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
