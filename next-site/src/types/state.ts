import type { NoticeBannerContent } from "@/types/sections";
import type { UserPathType } from "@/types/analytics";

export type PreorderState =
  | "open"
  | "closing_soon"
  | "closed"
  | "waitlist"
  | "demo_priority"
  | "delayed";

export interface ResolvedCta {
  label: string;
  href: string;
  external?: boolean;
  checkoutMode?: "live" | "placeholder";
  userPathType: UserPathType;
}

export interface PreorderStateExperience {
  state: PreorderState;
  banner: NoticeBannerContent;
  heroPrimary: ResolvedCta;
  heroSecondary: ResolvedCta;
  navPrimary: ResolvedCta;
  pricingPrimary: ResolvedCta;
  pricingSecondary: ResolvedCta;
  splitPrimary: ResolvedCta;
  splitSecondary: ResolvedCta;
  stickyPrimary: ResolvedCta;
  stickySecondary?: ResolvedCta;
  footerNote: string;
  supportMessage: string;
  policyMessage: string;
  highlightedPolicyHrefs: string[];
  pricingNotice?: NoticeBannerContent;
  demoFormEnabled: boolean;
}
