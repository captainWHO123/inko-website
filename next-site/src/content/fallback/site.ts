import type {
  NavigationSettingsDocument,
  PreorderStateSettingsDocument,
  SiteSettingsDocument,
} from "@/types/content";
import type { PolicyLink, PolicyLinksSectionContent } from "@/types/sections";

export const siteSettings: SiteSettingsDocument = {
  brandName: "Inko",
  siteTitle: "Inko | Post-meeting execution for insurance advisors",
  tagline: "Turn every client conversation into follow-up, notes, and CRM-ready output.",
  description:
    "Inko helps U.S. insurance advisors turn offline client meetings into summaries, follow-up, client memory, and CRM-ready structured output.",
  supportEmail: "hello@get-inko.com",
  checkoutUrl: "/pricing#purchase-readiness",
  checkoutMode: "placeholder",
  checkoutPlaceholderMessage:
    "Direct checkout is not connected in this preview build yet. Replace NEXT_PUBLIC_CHECKOUT_URL to activate the live purchase path.",
  defaultPreorderState: "open",
  demoUrl: "/book-demo",
  primaryCtaLabel: "Pre-order Inko Starter",
  secondaryCtaLabel: "Book a Demo",
};

export const navigationSettings: NavigationSettingsDocument = {
  primary: [
    { title: "How It Works", href: "/" },
    { title: "Pricing", href: "/pricing" },
    { title: "Proof", href: "/proof" },
    { title: "FAQ", href: "/faq" },
    { title: "Book a Demo", href: "/book-demo" },
  ],
  footer: [
    {
      title: "Product",
      items: [
        { title: "Home", href: "/" },
        { title: "How It Works", href: "/how-it-works" },
        { title: "Pricing", href: "/pricing" },
        { title: "Proof", href: "/proof" },
        { title: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Support",
      items: [
        { title: "Book a Demo", href: "/book-demo" },
        { title: "Contact", href: "/contact" },
        { title: "Pre-order Policy", href: "/pre-order-policy" },
        { title: "Returns & Refunds", href: "/returns-refunds" },
        { title: "Shipping & Delivery", href: "/shipping-delivery" },
      ],
    },
    {
      title: "Legal",
      items: [
        { title: "Privacy Policy", href: "/privacy-policy" },
        { title: "Terms", href: "/terms" },
        { title: "Consent & Recording Notice", href: "/consent-recording-notice" },
      ],
    },
    {
      title: "Future",
      items: [
        { title: "Updates", href: "/updates" },
        { title: "Waitlist", href: "/waitlist" },
        { title: "Referral", href: "/referral" },
        { title: "Team Plan Interest", href: "/team-plan-interest" },
      ],
    },
  ],
};

export const preorderStateSettings: PreorderStateSettingsDocument = {
  state: siteSettings.defaultPreorderState,
};

export const policyLinks: PolicyLink[] = [
  {
    title: "Pre-order Policy",
    href: "/pre-order-policy",
    description: "See exactly what happens after payment, what timing is estimated, and how updates are shared.",
  },
  {
    title: "Returns & Refunds",
    href: "/returns-refunds",
    description: "Review refund windows, damaged-device handling, and who covers return shipping.",
  },
  {
    title: "Shipping & Delivery",
    href: "/shipping-delivery",
    description: "Understand supported regions, estimated delivery timing, tracking, and delay notifications.",
  },
  {
    title: "Consent & Recording Notice",
    href: "/consent-recording-notice",
    description: "Know what legal responsibility remains with the user before recording any meeting.",
  },
];

export const policyLinksSection: PolicyLinksSectionContent = {
  id: "policy-links",
  eyebrow: "Risk clarity",
  title: "See the rules before you decide",
  subtitle:
    "The site keeps the decision transparent by surfacing pre-order, delivery, refund, and recording-consent guidance before checkout.",
  items: policyLinks,
};
