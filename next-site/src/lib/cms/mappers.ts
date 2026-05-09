import { getPreorderStateExperience } from "@/lib/config/preorder-state";
import type { AnalyticsEventName } from "@/types/analytics";
import type { CmsDocument } from "@/types/cms";
import type {
  DemoFormSectionContent,
  HeroSectionContent,
  PolicyLinksSectionContent,
  PricingCardContent,
  SplitCtaContent,
} from "@/types/sections";

export function toFallbackDocument<T>(data: T): CmsDocument<T> {
  return {
    source: "fallback",
    data,
  };
}

export function createTrackedCta(
  cta: ReturnType<typeof getPreorderStateExperience>["heroPrimary"],
  eventName: AnalyticsEventName,
  source: string,
) {
  return {
    ...cta,
    eventName,
    source,
    cta_label: cta.label,
  };
}

export function resolveHeroContent(
  hero: HeroSectionContent,
  entryPage: string,
): HeroSectionContent {
  const experience = getPreorderStateExperience();

  return {
    ...hero,
    primaryCta: {
      ...experience.heroPrimary,
      eventName: "hero_primary_cta_click",
      description: `Triggered from ${entryPage}`,
    },
    secondaryCta: {
      ...experience.heroSecondary,
      eventName: "hero_secondary_cta_click",
      description: `Triggered from ${entryPage}`,
    },
  };
}

export function resolvePricingCardContent(
  pricingCard: PricingCardContent,
): PricingCardContent {
  const experience = getPreorderStateExperience();

  return {
    ...pricingCard,
    primaryCta: {
      ...experience.pricingPrimary,
      eventName: "pricing_cta_click",
    },
    secondaryCta: {
      ...experience.pricingSecondary,
      eventName: "demo_alt_cta_click",
    },
  };
}

export function resolveSplitCtaContent(splitCta: SplitCtaContent): SplitCtaContent {
  const experience = getPreorderStateExperience();

  return {
    ...splitCta,
    primaryCta: {
      ...experience.splitPrimary,
      eventName: "split_cta_click",
    },
    secondaryCta: {
      ...experience.splitSecondary,
      eventName: "split_cta_click",
    },
  };
}

export function resolvePolicyLinksSection(
  section: PolicyLinksSectionContent,
): PolicyLinksSectionContent {
  const experience = getPreorderStateExperience();

  return {
    ...section,
    items: section.items.map((item) => ({
      ...item,
      highlight: experience.highlightedPolicyHrefs.includes(item.href),
    })),
  };
}

export function resolveDemoFormContent(
  form: DemoFormSectionContent,
): DemoFormSectionContent {
  const experience = getPreorderStateExperience();

  return {
    ...form,
    disabledMessage: experience.supportMessage,
  };
}
