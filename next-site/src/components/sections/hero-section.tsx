import type { CSSProperties } from "react";

import { Badge } from "@/components/ui/badge";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MotionLayer } from "@/components/ui/motion-layer";
import { PenDeviceFigure } from "@/components/ui/pen-device-figure";
import { StageMediaPanel } from "@/components/ui/stage-media-panel";
import { cn } from "@/lib/utils/cn";
import type { HeroSectionContent } from "@/types/sections";
import type { PreorderState } from "@/types/state";

interface HeroSectionProps {
  content: HeroSectionContent;
  pageState: PreorderState;
  entryPage: string;
}

export function HeroSection({ content, pageState, entryPage }: HeroSectionProps) {
  const isHome = entryPage === "home";
  const isPricing = entryPage === "pricing";
  const isProof = entryPage === "proof";
  const hasAside = Boolean(content.aside);
  const highlightItems = content.highlights ?? [];
  const stageTabs = content.aside?.tabs ?? ["After meeting", "Summary", "Follow-up", "CRM"];
  const stageLabel = content.aside?.stageLabel ?? "Meeting summary ready";
  const stageStatus = content.aside?.stageStatus ?? "Reviewable";
  const stageTitle = content.aside?.stageTitle ?? "Turn the conversation into a usable next move.";
  const stageContext = content.aside?.context ?? {
    label: "Client context",
    body: "Coverage review, spouse copied on summary, follow-up due within 48 hours.",
  };
  const stageActionChips = content.aside?.actionChips ?? [
    "Draft follow-up",
    "Store memory",
    "Prepare CRM handoff",
  ];
  const stageFooterChips = content.aside?.footerChips ?? highlightItems;
  const stageDevice = content.aside?.device;
  const stageMedia = content.aside?.stageMedia;
  const entryStyle = (delay: number) =>
    ({
      animationDelay: `${delay}ms`,
      animationFillMode: "both",
    }) as CSSProperties;

  const actionRail = (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
            location: `${entryPage}-hero-primary`,
          }}
          className={
            isHome
              ? "bg-white text-ink-950 shadow-[0_24px_52px_-26px_rgba(12,18,25,0.72)] hover:bg-white"
              : undefined
          }
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
            location: `${entryPage}-hero-secondary`,
          }}
          className={
            isHome
              ? "border-white/16 bg-white/8 text-white hover:border-white/24 hover:bg-white/12"
              : undefined
          }
        >
          {content.secondaryCta.label}
        </SecondaryButton>
      ) : null}
    </div>
  );

  const introBlock = (
    <>
      <div className="flex flex-wrap items-center gap-3">
        {content.eyebrow ? (
          <p className={cn("text-[0.7rem] font-semibold uppercase tracking-[0.26em]", isHome ? "text-teal-100/92" : "text-teal-800")}>
            {content.eyebrow}
          </p>
        ) : null}
        {!isHome && content.badge ? <Badge>{content.badge}</Badge> : null}
      </div>
      <h1
        className={cn(
          "mt-5 max-w-4xl font-serif tracking-[-0.045em]",
          isHome ? "text-white" : "text-ink-950",
          isHome ? "text-4xl leading-[0.98] sm:text-5xl md:text-[4.45rem]" : "text-4xl leading-[1.02] sm:text-5xl md:text-[4rem]",
        )}
      >
        {content.title}
      </h1>
      {content.subtitle ? (
        <p
          className={cn(
            "mt-5 max-w-2xl",
            isHome ? "text-white/72" : "text-ink-700",
            isHome ? "text-lg leading-8 md:text-[1.18rem]" : "text-lg leading-8",
          )}
        >
          {content.subtitle}
        </p>
      ) : null}
      {actionRail}
    </>
  );

  return (
    <section className={cn("px-4", isHome ? "py-8 md:py-12" : "py-10 md:py-14")}>
      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            "relative overflow-hidden rounded-[44px] border border-white/80 ring-1 ring-ink-950/[0.03]",
            isHome
              ? "border-[#213746] px-5 py-7 shadow-[0_60px_130px_-62px_rgba(16,25,34,0.52),0_22px_40px_-24px_rgba(16,25,34,0.26)] md:px-10 md:py-10"
              : "bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,241,233,0.88))] px-5 py-7 shadow-[0_48px_98px_-60px_rgba(16,25,34,0.22),0_18px_34px_-22px_rgba(16,25,34,0.12)] md:px-10 md:py-10",
          )}
          style={
            isHome
              ? {
                  background:
                    "radial-gradient(circle at 15% 20%, rgba(46,88,92,0.28), transparent 26%), radial-gradient(circle at 82% 18%, rgba(255,255,255,0.08), transparent 18%), linear-gradient(145deg, #101922 0%, #13212d 38%, #193140 100%)",
                }
              : undefined
          }
        >
          <div className={cn("pointer-events-none absolute -left-12 top-2 h-48 w-48 rounded-full blur-3xl", isHome ? "bg-teal-200/18" : "bg-teal-100/70")} />
          <div className={cn("pointer-events-none absolute right-0 top-10 h-56 w-56 rounded-full blur-3xl", isHome ? "bg-blue-100/12" : "bg-blue-50/85")} />
          <div className={cn("pointer-events-none absolute inset-x-0 top-0 h-32", isHome ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" : "bg-[linear-gradient(180deg,rgba(255,255,255,0.7),transparent)]")} />

          {isHome ? (
            <div className="relative grid gap-10 lg:grid-cols-[0.44fr_1.56fr] lg:items-start xl:gap-14">
              <div className="relative z-10 max-w-xl lg:pt-5">
                <div className="flex flex-wrap items-center gap-3">
                  {content.eyebrow ? (
                    <p className="inko-rise-in text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-teal-100/92" style={entryStyle(60)}>
                      {content.eyebrow}
                    </p>
                  ) : null}
                </div>
                <h1 className="inko-rise-in mt-5 max-w-4xl font-serif text-4xl leading-[0.96] tracking-[-0.05em] text-white sm:text-5xl md:text-[4.85rem] xl:text-[5.35rem]" style={entryStyle(140)}>
                  {content.title}
                </h1>
                {content.subtitle ? (
                  <p className="inko-rise-in mt-5 max-w-xl text-base leading-7 text-white/70 md:text-[1.06rem] md:leading-8" style={entryStyle(220)}>
                    {content.subtitle}
                  </p>
                ) : null}
                {hasAside ? (
                  <div className="mt-6 overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-4 shadow-[0_22px_48px_-30px_rgba(9,16,24,0.52)] lg:hidden">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-teal-100">
                        Product stage
                      </p>
                      <span className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-white/70">
                        Live
                      </span>
                    </div>
                    <div className="relative mt-4">
                      {stageMedia ? (
                        <MotionLayer y={14} scale={0.01}>
                          <StageMediaPanel
                            media={stageMedia}
                            priority
                            sizes="100vw"
                            className="aspect-[0.95] rounded-[24px] border border-white/10 bg-[#0d1720]"
                            imageClassName="object-contain object-center"
                            overlayClassName="bg-[linear-gradient(180deg,rgba(10,18,25,0.02),rgba(10,18,25,0.08)_42%,rgba(10,18,25,0.22))]"
                          />
                        </MotionLayer>
                      ) : null}
                      {stageDevice ? (
                        <MotionLayer y={22} x={6} rotate={1.2} className="absolute -bottom-4 right-3 z-10 hidden min-[430px]:block">
                          <div className="inko-glass-card rounded-[24px] px-3 py-3">
                            <PenDeviceFigure
                              tone="dark"
                              compact
                              media={stageDevice.media}
                              hotspots={stageDevice.hotspots}
                              calloutLabel={stageDevice.calloutLabel}
                              className="h-24 w-20 inko-stage-floating-device"
                            />
                          </div>
                        </MotionLayer>
                      ) : null}
                      <div className="absolute inset-x-3 bottom-3 rounded-[22px] inko-stage-dock p-4">
                        <p className="text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-teal-100">{stageLabel}</p>
                        <p className="mt-2 text-base font-semibold tracking-[-0.03em] text-white">{stageTitle}</p>
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          {stageActionChips.slice(0, 3).map((item, index) => (
                            <div key={item} className="rounded-[16px] border border-white/10 bg-white/[0.05] px-3 py-3">
                              <p className="text-[0.5rem] font-semibold uppercase tracking-[0.14em] text-white/45">
                                {index === 0 ? "Capture" : index === 1 ? "Draft" : "Export"}
                              </p>
                              <p className="mt-1 text-xs leading-5 text-white/82">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {stageDevice?.pills?.length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {stageDevice.pills.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-white/72"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}
                <div className="inko-rise-in" style={entryStyle(300)}>
                  {actionRail}
                </div>
                {content.supportingNote ? (
                  <div className="inko-rise-in mt-6 flex flex-wrap items-center gap-3 text-sm text-white/62" style={entryStyle(360)}>
                    <span className="inline-flex h-2 w-2 rounded-full bg-teal-200/80" />
                    <span>{content.supportingNote}</span>
                  </div>
                ) : null}
              </div>

              {hasAside ? (
                <div className="inko-rise-in relative min-h-[32rem] sm:min-h-[36rem] lg:min-h-[37rem] xl:min-h-[39rem]" style={entryStyle(220)}>
                  <div className="absolute inset-0 rounded-[40px] border border-white/10 bg-[linear-gradient(145deg,#122232_0%,#132435_48%,#10202d_100%)] shadow-[0_56px_114px_-54px_rgba(9,16,24,0.72)]" />
                  <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_20%_18%,rgba(112,200,190,0.16),transparent_24%),radial-gradient(circle_at_84%_14%,rgba(255,255,255,0.14),transparent_18%),radial-gradient(circle_at_60%_82%,rgba(69,155,176,0.2),transparent_22%)]" />
                  <div className="pointer-events-none absolute inset-x-[18%] top-[8%] h-40 rounded-full bg-white/10 blur-3xl" />
                  <div className="absolute inset-x-7 top-6 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {stageTabs.slice(0, 4).map((tab, index) => (
                        <span
                          key={tab}
                          className={cn(
                            "inko-stage-label rounded-full border px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em]",
                            index === 0 ? "border-white/14 bg-white/10 text-white" : "border-white/8 bg-transparent text-white/50",
                          )}
                        >
                          {tab}
                        </span>
                      ))}
                    </div>
                    <span className="rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-white/68">
                      Product stage
                    </span>
                  </div>

                  <div className="absolute inset-x-4 bottom-4 top-20 sm:inset-x-6 sm:bottom-6 lg:inset-x-8 lg:bottom-8">
                    {stageMedia ? (
                      <MotionLayer y={22} scale={0.016}>
                        <StageMediaPanel
                          media={stageMedia}
                          priority
                          sizes="(max-width: 1024px) 100vw, 58vw"
                          className="h-full rounded-[34px] border border-white/10 bg-[#0c1520] shadow-[0_42px_88px_-48px_rgba(9,16,24,0.7)]"
                          imageClassName="object-contain object-center inko-stage-orbit"
                          overlayClassName="bg-[linear-gradient(180deg,rgba(8,14,18,0.01),rgba(8,14,18,0.08)_28%,rgba(8,14,18,0.24)_100%)]"
                        />
                      </MotionLayer>
                    ) : (
                      <div className="h-full rounded-[34px] border border-white/10 bg-[linear-gradient(145deg,#122232_0%,#132435_48%,#10202d_100%)]" />
                    )}

                    <div className="pointer-events-none absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_68%_44%,rgba(255,255,255,0.08),transparent_18%),linear-gradient(180deg,transparent_0%,rgba(12,21,32,0.16)_48%,rgba(12,21,32,0.42)_100%)]" />
                    {stageDevice ? (
                      <MotionLayer y={28} x={10} rotate={1.8} className="absolute -right-3 bottom-18 z-10 hidden xl:block">
                        <div className="inko-glass-card rounded-[28px] px-4 py-4">
                          <PenDeviceFigure
                            tone="dark"
                            media={stageDevice.media}
                            hotspots={stageDevice.hotspots}
                            calloutLabel={stageDevice.calloutLabel}
                            className="h-36 w-24 inko-stage-floating-device"
                          />
                        </div>
                      </MotionLayer>
                    ) : null}

                    <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-4">
                      {stageDevice?.pills?.length ? (
                        <div className="hidden flex-wrap gap-2 xl:flex">
                          {stageDevice.pills.slice(0, 3).map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/12 bg-[#112333]/84 px-3 py-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-white/76 backdrop-blur-sm"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <div />
                      )}
                      <span className="inko-stage-label rounded-full border border-white/12 bg-[#112333]/82 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/72 backdrop-blur-sm">
                        {stageStatus}
                      </span>
                    </div>

                    {stageDevice ? (
                      <div className="absolute left-5 top-16 hidden w-[13rem] rounded-[26px] inko-glass-card p-4 xl:block">
                        <p className="text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-teal-100">
                          {stageDevice.label}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/84">{stageDevice.title}</p>
                        {stageDevice.pills?.length ? (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {stageDevice.pills.slice(0, 3).map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-white/70"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ) : null}

                    <div className="absolute bottom-4 left-4 max-w-[22rem] rounded-[28px] inko-glass-card px-5 py-5 lg:bottom-5 lg:left-5">
                      <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-teal-100">
                        {stageLabel}
                      </p>
                      <p className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white lg:text-[1.72rem]">
                        {stageTitle}
                      </p>
                      <p className="mt-3 max-w-[18rem] text-sm leading-6 text-white/68">{stageContext.body}</p>
                    </div>

                    <div className="absolute bottom-4 right-4 w-[18rem] rounded-[28px] inko-glass-card p-4 lg:bottom-5 lg:right-5 lg:w-[19.5rem]">
                      <div className="grid gap-px overflow-hidden rounded-[20px] border border-white/8 bg-white/8 sm:grid-cols-3">
                        {stageActionChips.slice(0, 3).map((item, index) => (
                          <div key={item} className="bg-white/[0.03] px-4 py-4">
                            <p className="text-[0.52rem] font-semibold uppercase tracking-[0.16em] text-white/42">
                              {index === 0 ? "Capture" : index === 1 ? "Draft" : "Export"}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-white/82">{item}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {stageFooterChips.slice(0, 3).map((item, index) => (
                          <span
                            key={item}
                            className={cn(
                              "rounded-full border px-3 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.14em]",
                              index === 0 ? "border-white/14 bg-white/10 text-white" : "border-white/8 bg-transparent text-white/60",
                            )}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : isPricing ? (
            <div className="relative grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>
                {introBlock}
                {highlightItems.length ? (
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {highlightItems.map((item) => (
                      <div
                        key={item}
                        className="rounded-[22px] border border-white/84 bg-white/88 px-4 py-4 text-sm leading-6 text-ink-800 shadow-[0_14px_30px_-24px_rgba(16,25,34,0.18)]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              {hasAside ? (
                <div className="grid gap-4 md:grid-cols-[0.94fr_1.06fr]">
                  <div className="rounded-[30px] border border-[#31495C] bg-[linear-gradient(145deg,#172838_0%,#1a2c3d_56%,#203649_100%)] px-5 py-6 text-white shadow-[0_36px_78px_-40px_rgba(16,25,34,0.5)]">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal-100">
                      Purchase snapshot
                    </p>
                    <div className="relative mt-5">
                      {stageMedia ? (
                        <MotionLayer y={16} scale={0.01}>
                          <StageMediaPanel
                            media={stageMedia}
                            sizes="(max-width: 1024px) 100vw, 36vw"
                            className="aspect-[0.9] rounded-[22px] border border-white/10 bg-[#0d1720]"
                            imageClassName="object-contain object-center"
                            overlayClassName="bg-[linear-gradient(180deg,rgba(10,18,25,0.02),rgba(10,18,25,0.12)_48%,rgba(10,18,25,0.2))]"
                          />
                        </MotionLayer>
                      ) : null}
                      {stageDevice ? (
                        <MotionLayer y={20} x={8} rotate={1.4} className="absolute -bottom-4 right-4 z-10">
                          <div className="inko-glass-card rounded-[24px] px-3 py-3">
                            <PenDeviceFigure
                              tone="dark"
                              compact
                              media={stageDevice.media}
                              hotspots={stageDevice.hotspots}
                              calloutLabel={stageDevice.calloutLabel}
                              className="h-24 w-20 inko-stage-floating-device"
                            />
                          </div>
                        </MotionLayer>
                      ) : null}
                    </div>
                    {stageDevice ? (
                      <div className="mt-6 rounded-[22px] border border-white/10 bg-white/6 px-4 py-4">
                        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-teal-100">
                          {stageDevice.label}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/84">{stageDevice.title}</p>
                        {stageDevice.pills?.length ? (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {stageDevice.pills.slice(0, 3).map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-white/10 bg-[#203749] px-3 py-1.5 text-[0.54rem] font-semibold uppercase tracking-[0.14em] text-white/76"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                    <p className="mt-4 font-serif text-5xl tracking-[-0.05em] text-white">$400</p>
                    <p className="mt-1 text-sm text-white/68">first year</p>
                    <div className="mt-5 space-y-3 text-sm leading-6 text-white/84">
                      <p>Hardware included</p>
                      <p>First-year subscription included</p>
                      <p>Policy links remain visible before checkout</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {["Delivery timing treated as estimate", "Refund and replacement rules easy to review", "Demo path available before purchasing"].map((item) => (
                      <div
                        key={item}
                        className="rounded-[24px] border border-white/84 bg-white/88 px-4 py-4 text-sm leading-6 text-ink-800 shadow-[0_14px_30px_-24px_rgba(16,25,34,0.16)]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ) : isProof ? (
            <div className="relative grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  {content.eyebrow ? (
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-teal-800">
                      {content.eyebrow}
                    </p>
                  ) : null}
                  {content.badge ? <Badge>{content.badge}</Badge> : null}
                </div>
                <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.02] tracking-[-0.045em] text-ink-950 sm:text-5xl md:text-[4rem]">
                  {content.title}
                </h1>
                {content.subtitle ? (
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-700">
                    {content.subtitle}
                  </p>
                ) : null}
                {hasAside ? (
                  <div className="mt-6 overflow-hidden rounded-[28px] border border-ink-200/80 bg-[linear-gradient(180deg,rgba(20,33,46,0.96),rgba(29,48,63,0.98))] p-4 text-white shadow-[0_24px_54px_-34px_rgba(16,25,34,0.42)] lg:hidden">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-teal-100">Workspace preview</p>
                      <span className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-white/70">
                        4 states
                      </span>
                    </div>
                    {stageMedia ? (
                      <MotionLayer y={14} scale={0.01}>
                        <StageMediaPanel
                          media={stageMedia}
                          sizes="100vw"
                          className="mt-4 aspect-[1.02] rounded-[22px] border border-white/10 bg-[#0d1720]"
                          imageClassName="object-contain object-center"
                          overlayClassName="bg-[linear-gradient(180deg,rgba(10,18,25,0.02),rgba(10,18,25,0.16))]"
                        />
                      </MotionLayer>
                    ) : null}
                    <div className="mt-4 space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {["Summary", "Follow-up", "Memory", "CRM"].map((item, index) => (
                          <span
                            key={item}
                            className={cn(
                              "rounded-full border px-2.5 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.14em]",
                              index === 0 ? "border-white/12 bg-white/10 text-white" : "border-white/8 bg-transparent text-white/60",
                            )}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <div className="rounded-[20px] border border-white/10 bg-white/[0.05] px-4 py-4">
                        <p className="text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-teal-100">Active state</p>
                        <p className="mt-2 text-base font-semibold tracking-[-0.03em] text-white">{stageTitle}</p>
                      </div>
                    </div>
                  </div>
                ) : null}
                <div className="inko-rise-in" style={entryStyle(200)}>
                  {actionRail}
                </div>
              </div>

              {hasAside ? (
                <div className="inko-rise-in rounded-[36px] border border-[#31495C] bg-[linear-gradient(145deg,#172838_0%,#1a2c3d_56%,#203649_100%)] p-5 text-white shadow-[0_42px_84px_-40px_rgba(16,25,34,0.56)] md:p-6" style={entryStyle(180)}>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal-100">
                      Workspace preview
                    </p>
                    <span className="rounded-full border border-white/14 bg-white/8 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/72">
                      Inspectable states
                    </span>
                  </div>

                  {stageMedia ? (
                    <MotionLayer y={18} scale={0.012}>
                      <StageMediaPanel
                        media={stageMedia}
                        sizes="(max-width: 1024px) 100vw, 56vw"
                        className="mt-4 aspect-[1.08] rounded-[28px] border border-white/10 bg-[#0c1520] shadow-[0_34px_72px_-42px_rgba(16,25,34,0.58)]"
                        imageClassName="object-contain object-center"
                        overlayClassName="bg-[linear-gradient(180deg,rgba(10,18,25,0.02),rgba(10,18,25,0.12)_48%,rgba(10,18,25,0.24))]"
                      />
                    </MotionLayer>
                  ) : null}

                  <div className="mt-5 grid gap-4 md:grid-cols-[0.42fr_0.58fr]">
                    {stageDevice ? (
                      <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                        <div className="flex items-center gap-4">
                          <PenDeviceFigure
                            tone="dark"
                            media={stageDevice.media}
                            hotspots={stageDevice.hotspots}
                            calloutLabel={stageDevice.calloutLabel}
                          />
                          <div>
                            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-teal-100">
                              {stageDevice.label}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-white">{stageDevice.title}</p>
                          </div>
                        </div>
                        {stageDevice.pills?.length ? (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {stageDevice.pills.map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-white/10 bg-[#203749] px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/78"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ) : null}

                    <div className="rounded-[24px] border border-white/10 bg-white/6 p-4">
                      <div className="flex flex-wrap gap-2">
                        {["Summary", "Follow-up", "Client memory", "CRM handoff"].map((item, index) => (
                          <span
                            key={item}
                            className={cn(
                              "rounded-full border px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em]",
                              index === 0
                                ? "border-white/14 bg-white/10 text-white"
                                : "border-white/10 bg-transparent text-white/55",
                            )}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <p className="mt-4 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-teal-100">
                        {stageLabel}
                      </p>
                      <p className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">{stageTitle}</p>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {stageFooterChips.slice(0, 4).map((item) => (
                          <div
                            key={item}
                            className="rounded-[18px] border border-white/10 bg-[#203749] px-4 py-4"
                          >
                            <p className="text-sm leading-6 text-white/84">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            <div className={cn("relative grid gap-10", hasAside ? "lg:grid-cols-[1.08fr_0.92fr]" : "max-w-5xl")}>
              <div>
                {introBlock}
                {highlightItems.length ? (
                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {highlightItems.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/86 bg-white/88 px-3.5 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-ink-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              {hasAside ? (
                <Card className="border-white/84 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,244,238,0.9))]">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal-800">
                    {content.aside?.title}
                  </p>
                  <p className="mt-4 text-base leading-8 text-ink-800">{content.aside?.body}</p>
                  {content.aside?.bullets?.length ? (
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {content.aside.bullets.map((item) => (
                        <div
                          key={item}
                          className="rounded-[20px] border border-white/84 bg-white/88 px-4 py-4 text-sm leading-6 text-ink-700"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </Card>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
