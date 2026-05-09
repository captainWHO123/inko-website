import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import type { PreorderStateExperience } from "@/types/state";

interface StickyMobileCtaProps {
  experience: PreorderStateExperience;
}

export function StickyMobileCta({ experience }: StickyMobileCtaProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/6 bg-white/88 p-4 shadow-[0_-18px_48px_-28px_rgba(16,24,32,0.3)] backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-xl flex-col gap-3">
        <PrimaryButton
          href={experience.stickyPrimary.href}
          external={experience.stickyPrimary.external}
          fullWidth
          analyticsEvent="sticky_cta_click"
          analyticsContext={{
            page_state: experience.state,
            user_path_type: experience.stickyPrimary.userPathType,
            checkout_mode: experience.stickyPrimary.checkoutMode,
            location: "sticky-mobile-primary",
          }}
        >
          {experience.stickyPrimary.label}
        </PrimaryButton>
        {experience.stickySecondary ? (
          <SecondaryButton
            href={experience.stickySecondary.href}
            external={experience.stickySecondary.external}
            fullWidth
            analyticsEvent="sticky_cta_click"
            analyticsContext={{
              page_state: experience.state,
              user_path_type: experience.stickySecondary.userPathType,
              checkout_mode: experience.stickySecondary.checkoutMode,
              location: "sticky-mobile-secondary",
            }}
          >
            {experience.stickySecondary.label}
          </SecondaryButton>
        ) : null}
      </div>
    </div>
  );
}
