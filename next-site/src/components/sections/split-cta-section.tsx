import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { SplitCtaContent } from "@/types/sections";
import type { PreorderState } from "@/types/state";

interface SplitCtaSectionProps {
  content: SplitCtaContent;
  pageState: PreorderState;
  entryPage: string;
}

export function SplitCtaSection({ content, pageState, entryPage }: SplitCtaSectionProps) {
  return (
    <section id={content.id} className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <Card className="relative overflow-hidden bg-[linear-gradient(145deg,#101820_0%,#162431_52%,#1d3440_100%)] text-white shadow-[0_42px_86px_-48px_rgba(16,24,32,0.62)]">
          <div className="pointer-events-none absolute -left-12 top-0 h-36 w-36 rounded-full bg-teal-300/18 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-36 w-40 rounded-full bg-blue-200/18 blur-3xl" />
          <div className="mx-auto max-w-3xl text-center">
            {content.eyebrow ? (
              <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal-100">
                {content.eyebrow}
              </p>
            ) : null}
            <h2 className="font-serif text-3xl leading-[1.06] tracking-[-0.03em] text-white sm:text-4xl">
              {content.title}
            </h2>
            {content.subtitle ? (
              <p className="mt-4 text-base leading-7 text-white/75">{content.subtitle}</p>
            ) : null}
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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
              className="border-white/25 bg-white/10 text-white hover:bg-white/15"
            >
              {content.secondaryCta.label}
            </SecondaryButton>
          </div>
          {content.tertiaryCta ? (
            <div className="mt-4 text-center">
              <SecondaryButton
                href={content.tertiaryCta.href}
                external={content.tertiaryCta.external}
                analyticsEvent={content.tertiaryCta.eventName}
                analyticsContext={{
                  page_state: pageState,
                  user_path_type: content.tertiaryCta.userPathType,
                  checkout_mode: content.tertiaryCta.checkoutMode,
                  entry_page: entryPage,
                  location: `${content.id}-tertiary`,
                }}
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                {content.tertiaryCta.label}
              </SecondaryButton>
            </div>
          ) : null}
        </Card>
      </div>
    </section>
  );
}
