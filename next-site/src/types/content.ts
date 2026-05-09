import type {
  AudienceQualifierSectionContent,
  DemoFormSectionContent,
  FaqPreviewSectionContent,
  HeroSectionContent,
  LongformSection,
  OutcomeCardsSectionContent,
  PolicyLinksSectionContent,
  PricingCardContent,
  ProblemSectionContent,
  ProofPreviewSectionContent,
  ReframeSectionContent,
  SeoFields,
  SplitCtaContent,
  WorkflowSectionContent,
} from "@/types/sections";
import type { PreorderState } from "@/types/state";

export interface BasePageDocument {
  seo: SeoFields;
  hero: HeroSectionContent;
}

export interface HomePageDocument extends BasePageDocument {
  audienceQualifier: AudienceQualifierSectionContent;
  problemSection: ProblemSectionContent;
  workflowSection: WorkflowSectionContent;
  outcomeSection: OutcomeCardsSectionContent;
  reframeSection: ReframeSectionContent;
  skuSection: PricingCardContent;
  riskSection: ProblemSectionContent;
  proofPreview: ProofPreviewSectionContent;
  faqPreview: FaqPreviewSectionContent;
  finalCta: SplitCtaContent;
}

export interface HowItWorksPageDocument extends BasePageDocument {
  overview: ProblemSectionContent;
  beforeMeeting: WorkflowSectionContent;
  duringMeeting: WorkflowSectionContent;
  afterMeeting: WorkflowSectionContent;
  outputGallery: ProofPreviewSectionContent;
  valueSection: ReframeSectionContent;
  finalCta: SplitCtaContent;
}

export interface PricingPageDocument extends BasePageDocument {
  pricingCard: PricingCardContent;
  includedSection: OutcomeCardsSectionContent;
  servicePricingSection: ReframeSectionContent;
  preorderDetails: ProblemSectionContent;
  policyLinksSection: PolicyLinksSectionContent;
  finalDecisionSupport: SplitCtaContent;
}

export interface ProofPageDocument extends BasePageDocument {
  proofSamples: ProofPreviewSectionContent;
  workflowFit: ReframeSectionContent;
  supportReassurance: ProblemSectionContent;
  finalCta: SplitCtaContent;
}

export interface FaqPageDocument extends BasePageDocument {
  categories: FaqPreviewSectionContent;
  finalCta: SplitCtaContent;
}

export interface DemoPageDocument extends BasePageDocument {
  whatYouWillSee: OutcomeCardsSectionContent;
  whoItsFor: AudienceQualifierSectionContent;
  form: DemoFormSectionContent;
  reassurance: ReframeSectionContent;
  alternateCta: SplitCtaContent;
}

export interface WaitlistPageDocument extends BasePageDocument {
  benefitsSection: OutcomeCardsSectionContent;
  form: DemoFormSectionContent;
  reassurance: ReframeSectionContent;
  finalCta: SplitCtaContent;
}

export interface PolicyPageDocument extends BasePageDocument {
  notice?: ReframeSectionContent["notice"];
  sections: LongformSection[];
  policyLinksSection?: PolicyLinksSectionContent;
  finalCta?: SplitCtaContent;
}

export interface SimpleMarketingPageDocument extends BasePageDocument {
  contentSection: OutcomeCardsSectionContent;
  supportSection?: ReframeSectionContent;
  finalCta?: SplitCtaContent;
}

export interface SiteSettingsDocument {
  brandName: string;
  siteTitle: string;
  tagline: string;
  description: string;
  supportEmail: string;
  checkoutUrl: string;
  checkoutMode: "live" | "placeholder";
  checkoutPlaceholderMessage?: string;
  defaultPreorderState: PreorderState;
  demoUrl: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
}

export interface NavigationItem {
  title: string;
  href: string;
  description?: string;
}

export interface NavigationGroup {
  title: string;
  items: NavigationItem[];
}

export interface NavigationSettingsDocument {
  primary: NavigationItem[];
  footer: NavigationGroup[];
}

export interface PreorderStateSettingsDocument {
  state: PreorderState;
}
