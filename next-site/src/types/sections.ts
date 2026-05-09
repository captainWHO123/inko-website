import type { AnalyticsEventName, UserPathType } from "@/types/analytics";

export interface SeoFields {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export interface BaseSectionContent {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body?: string;
}

export interface SectionMedia {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
}

export interface CtaLink {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
  checkoutMode?: "live" | "placeholder";
  eventName?: AnalyticsEventName;
  userPathType?: UserPathType;
}

export interface NoticeBannerContent {
  tone: "info" | "warning" | "danger" | "success";
  title: string;
  body: string;
}

export interface ContentCard {
  title: string;
  body: string;
  badge?: string;
  bullets?: string[];
  meta?: string;
  cta?: CtaLink;
}

export interface HeroSectionContent extends BaseSectionContent {
  badge?: string;
  highlights?: string[];
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  supportingNote?: string;
  aside?: {
    title: string;
    body: string;
    bullets?: string[];
    device?: {
      label: string;
      title: string;
      body?: string;
      pills?: string[];
      hotspots?: Array<{
        label: string;
        anchor: "button" | "microphone" | "body";
        side?: "left" | "right";
      }>;
      media?: {
        type: "figure" | "image" | "video";
        src?: string;
        alt?: string;
        poster?: string;
      };
      calloutLabel?: string;
    };
    tabs?: string[];
    stageLabel?: string;
    stageStatus?: string;
    stageTitle?: string;
    context?: {
      label: string;
      body: string;
    };
    actionChips?: string[];
    panels?: Array<{
      title: string;
      body: string;
      status?: string;
      pills?: string[];
    }>;
    footerChips?: string[];
    stageMedia?: SectionMedia;
  };
}

export interface AudienceQualifierSectionContent extends BaseSectionContent {
  items: Array<{
    title: string;
    body: string;
  }>;
  footnote?: string;
}

export interface ProblemSectionContent extends BaseSectionContent {
  points: Array<{
    title: string;
    body: string;
  }>;
  notice?: NoticeBannerContent;
}

export interface WorkflowStep {
  id: string;
  title: string;
  body: string;
  timing?: string;
  outcome?: string;
  bullets?: string[];
}

export interface WorkflowSectionContent extends BaseSectionContent {
  steps: WorkflowStep[];
  stageMedia?: SectionMedia;
}

export interface OutcomeCardsSectionContent extends BaseSectionContent {
  items: ContentCard[];
  columns?: 2 | 3 | 4;
}

export interface ReframeSectionContent extends BaseSectionContent {
  lead: string;
  comparisons?: ContentCard[];
  points?: string[];
  notice?: NoticeBannerContent;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
}

export interface PricingCardContent {
  eyebrow?: string;
  title: string;
  price: number;
  priceSuffix: string;
  description: string;
  badge?: string;
  hardwareMedia?: {
    type: "figure" | "image" | "video";
    src?: string;
    alt?: string;
    poster?: string;
  };
  included: string[];
  details?: string[];
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  note?: string;
}

export interface ProofField {
  label: string;
  value: string;
}

export interface ProofSample {
  id: string;
  label: string;
  title: string;
  preview: string;
  surfaceKind?: "summary" | "follow_up" | "client_memory" | "crm_handoff";
  workspaceTabs?: string[];
  statusLabel?: string;
  detail: string[];
  detailHeadings?: string[];
  tags: string[];
  structuredFields?: ProofField[];
  actionItems?: string[];
  inspectorTitle?: string;
  inspectorBody?: string;
  inspectorFields?: ProofField[];
  ctaLabel?: string;
}

export interface ProofPreviewSectionContent extends BaseSectionContent {
  items: ProofSample[];
  defaultActiveId?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  priority?: boolean;
  cta?: CtaLink;
}

export interface FaqCategory {
  id: string;
  title: string;
  description?: string;
  items: FaqItem[];
  cta?: CtaLink;
}

export interface FaqPreviewSectionContent extends BaseSectionContent {
  categories: FaqCategory[];
}

export interface SplitCtaContent extends BaseSectionContent {
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  tertiaryCta?: CtaLink;
}

export interface PolicyLink {
  title: string;
  href: string;
  description: string;
  highlight?: boolean;
}

export interface PolicyLinksSectionContent extends BaseSectionContent {
  items: PolicyLink[];
}

export interface DemoFieldOption {
  value: string;
  label: string;
}

export interface DemoFormField {
  name: string;
  label: string;
  type: "text" | "email" | "select" | "textarea";
  placeholder?: string;
  required?: boolean;
  options?: DemoFieldOption[];
  description?: string;
}

export interface DemoFormSectionContent extends BaseSectionContent {
  submitLabel: string;
  successTitle: string;
  successMessage: string;
  fields: DemoFormField[];
  secondaryCta?: CtaLink;
  disabledMessage?: string;
}

export interface LongformSection {
  title: string;
  body: string[];
  items?: string[];
}
