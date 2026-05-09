import Link from "next/link";

import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NoticeBar } from "@/components/ui/notice-bar";
import { PenDeviceFigure } from "@/components/ui/pen-device-figure";
import { Reveal } from "@/components/ui/reveal";
import { sharedPolicyLinks } from "@/lib/config/navigation";
import { siteConfig } from "@/lib/config/site-config";
import { formatPrice } from "@/lib/utils/format-price";
import type { PricingCardContent, NoticeBannerContent } from "@/types/sections";
import type { PreorderState } from "@/types/state";

interface PricingCardSectionProps {
  content: PricingCardContent;
  pageState: PreorderState;
  policyMessage: string;
  notice?: NoticeBannerContent;
}

export function PricingCardSection({
  content,
  pageState,
  policyMessage,
  notice,
}: PricingCardSectionProps) {
  const checkoutIsPlaceholder = siteConfig.checkoutMode === "placeholder";

  return (
    <section id="purchase-readiness" className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        {notice ? <NoticeBar notice={notice} className="mb-6" /> : null}
        <Reveal className="rounded-[36px] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(241,237,230,0.7))] p-3 shadow-[0_42px_88px_-56px_rgba(16,24,32,0.28)] ring-1 ring-ink-950/[0.03] md:p-4">
          <div className="mb-4 flex flex-wrap items-center gap-2 rounded-[24px] border border-white/82 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,245,241,0.9))] px-4 py-4">
            {["Single package", "Policies nearby", "Direct or demo path"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-ink-200/85 bg-white/92 px-3 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-ink-700"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.14fr_0.86fr]">
            <Card className="relative overflow-hidden border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(247,245,241,0.95))] p-0">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-300 via-teal-100 to-blue-200" />
              <div className="grid gap-0 lg:grid-cols-[1.12fr_0.88fr]">
                <div className="border-b border-ink-200/80 p-6 lg:border-b-0 lg:border-r lg:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    {content.eyebrow ? (
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal-800">
                        {content.eyebrow}
                      </p>
                    ) : null}
                    {content.badge ? (
                      <span className="rounded-full border border-ink-200/80 bg-white/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-700">
                        {content.badge}
                      </span>
                    ) : null}
                  </div>
                  <h2 className="mt-4 font-serif text-4xl tracking-[-0.03em] text-ink-950 md:text-5xl">
                    {content.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-8 text-ink-700">{content.description}</p>
                  <div className="inko-sheen relative mt-7 overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,#0d1720_0%,#13202c_50%,#1a2f3d_100%)] px-6 py-6 text-white shadow-[0_38px_76px_-34px_rgba(16,24,32,0.72)]">
                    <div className="pointer-events-none absolute inset-[-20%] bg-[radial-gradient(circle_at_18%_14%,rgba(94,176,190,0.18),transparent_20%),radial-gradient(circle_at_82%_16%,rgba(255,255,255,0.1),transparent_14%),linear-gradient(120deg,transparent_38%,rgba(255,255,255,0.06)_50%,transparent_64%)] blur-2xl" />
                    <div className="pointer-events-none absolute inset-x-10 top-0 h-32 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)] blur-3xl" />
                    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal-300/16 blur-3xl" />
                    <div className="pointer-events-none absolute bottom-0 left-12 h-24 w-32 rounded-full bg-blue-200/12 blur-3xl" />
                    {content.hardwareMedia ? (
                      <div className="absolute right-5 top-5 hidden md:block">
                        <div className="inko-glass-card rounded-[26px] px-3 py-3 shadow-[0_28px_60px_-32px_rgba(0,0,0,0.76)]">
                          <PenDeviceFigure
                            tone="dark"
                            compact
                            media={content.hardwareMedia}
                            calloutLabel="Starter hardware"
                            className="h-24 w-20 inko-stage-floating-device"
                          />
                        </div>
                      </div>
                    ) : null}
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal-100">
                      Visible phase-one price
                    </p>
                    <div className="mt-3 flex flex-wrap items-end gap-3">
                      <p className="font-serif text-5xl tracking-[-0.04em] text-white md:text-6xl">
                        {formatPrice(content.price)}
                      </p>
                      <p className="pb-2 text-lg text-white/72">{content.priceSuffix}</p>
                    </div>
                    <div className="mt-5 overflow-hidden rounded-[22px] border border-white/10 bg-white/6 md:pr-20">
                      <div className="grid gap-px bg-white/10 sm:grid-cols-3">
                        <div className="bg-transparent px-4 py-4">
                          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/58">
                            Offer
                          </p>
                          <p className="mt-2 text-sm leading-6 text-white/88">
                            One visible starter package.
                          </p>
                        </div>
                        <div className="bg-transparent px-4 py-4">
                          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/58">
                            Service-first
                          </p>
                          <p className="mt-2 text-sm leading-6 text-white/88">
                            Hardware and first-year service together.
                          </p>
                        </div>
                        <div className="bg-transparent px-4 py-4">
                          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/58">
                            Decision clarity
                          </p>
                          <p className="mt-2 text-sm leading-6 text-white/88">
                            Policies stay visible before commitment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {content.note ? (
                    <p className="mt-6 max-w-2xl text-sm leading-7 text-ink-600">{content.note}</p>
                  ) : null}
                </div>

                <div className="bg-surface-1/85 p-6 lg:p-8">
                  <div className="rounded-[26px] border border-white/85 bg-white/90 p-5 shadow-[0_18px_36px_-28px_rgba(16,24,32,0.28)]">
                    <div className="mb-5 flex items-center gap-4 rounded-[22px] border border-ink-200/80 bg-[linear-gradient(180deg,rgba(247,250,252,0.98),rgba(238,244,248,0.92))] px-4 py-4">
                      <PenDeviceFigure
                        tone="light"
                        compact
                        className="h-24 w-20 shrink-0"
                        media={content.hardwareMedia}
                        calloutLabel="Tap once to record"
                      />
                      <div>
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-teal-800">
                          Starter hardware
                        </p>
                        <p className="mt-2 text-sm leading-6 text-ink-800">
                          Pen-sized capture hardware is included with the first-year service.
                        </p>
                      </div>
                    </div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal-800">
                      Included in your first year
                    </p>
                    <ul className="mt-4 grid gap-3">
                      {content.included.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-ink-800">
                          <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-semibold text-teal-900 ring-1 ring-teal-300/60">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 flex flex-col gap-3">
                    {content.primaryCta ? (
                      <PrimaryButton
                        href={content.primaryCta.href}
                        external={content.primaryCta.external}
                        analyticsEvent={content.primaryCta.eventName}
                        analyticsContext={{
                          page_state: pageState,
                          user_path_type: content.primaryCta.userPathType,
                          checkout_mode: content.primaryCta.checkoutMode,
                          location: "pricing-card-primary",
                        }}
                        fullWidth
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
                          location: "pricing-card-secondary",
                        }}
                        fullWidth
                      >
                        {content.secondaryCta.label}
                      </SecondaryButton>
                    ) : null}
                  </div>

                  <div className="mt-5">
                    {checkoutIsPlaceholder ? (
                      <NoticeBar
                        notice={{
                          tone: "warning",
                          title: "Checkout is still review-mode in this build.",
                          body:
                            siteConfig.checkoutPlaceholderMessage ??
                            "Direct checkout is not connected yet. Wire NEXT_PUBLIC_CHECKOUT_URL before launch.",
                        }}
                      />
                    ) : (
                      <NoticeBar
                        notice={{
                          tone: "success",
                          title: "Direct purchase is connected.",
                          body: "Primary purchase CTAs route to the live external checkout destination.",
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </Card>

            <div className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <Card className="overflow-hidden bg-[linear-gradient(145deg,#101820_0%,#162431_52%,#1d3440_100%)] text-white shadow-[0_40px_82px_-52px_rgba(16,24,32,0.6)]">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal-100">Choose your path</p>
                <p className="mt-3 text-sm leading-7 text-white/76">
                  The pricing page keeps the decision simple: buy directly if the fit feels clear, or book a demo first if you want confirmation.
                </p>
                <div className="mt-5 grid gap-3">
                  <div className="rounded-[22px] border border-white/10 bg-white/8 px-4 py-4">
                    <p className="text-sm font-semibold text-white">Buy directly</p>
                    <p className="mt-2 text-sm leading-6 text-white/72">
                      Use the primary CTA if the workflow already feels right for your meeting style.
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-white/10 bg-white/6 px-4 py-4">
                    <p className="text-sm font-semibold text-white">Book a demo first</p>
                    <p className="mt-2 text-sm leading-6 text-white/72">
                      Use the assisted path if you want fit confirmation before purchasing.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,245,241,0.92))] p-0">
                <div className="px-6 py-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal-800">
                    Before you pay
                  </p>
                  <p className="mt-3 text-sm leading-7 text-ink-700">{policyMessage}</p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {sharedPolicyLinks.slice(0, 4).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-[18px] border border-ink-200/85 bg-white/92 px-3 py-3 text-sm font-medium text-ink-800 transition hover:border-ink-400 hover:bg-white"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                {content.details?.length ? (
                  <div className="border-t border-ink-200/70 px-6 py-5">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ink-600">
                      Why the page is this simple
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-ink-700">
                      {content.details.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-teal-700" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </Card>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
