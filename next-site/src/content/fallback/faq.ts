import type { FaqPageDocument } from "@/types/content";
import type { FaqCategory } from "@/types/sections";

export const faqCategories: FaqCategory[] = [
  {
    id: "product-basics",
    title: "Product basics",
    description: "Start here if you want the short version of what Inko is and is not.",
    items: [
      {
        id: "is-this-just-a-recorder",
        question: "Is this just a recorder?",
        answer:
          "No. Recording hardware is the entry point, but the value proposition is the post-meeting workflow: summary generation, follow-up generation, client memory, and CRM-ready structured output.",
        priority: true,
      },
      {
        id: "what-do-i-actually-get",
        question: "What do I actually get from the workflow?",
        answer:
          "Phase one centers on turning a client conversation into a useful summary, a clear follow-up draft, persistent client memory, and structured output that can support your existing record-keeping process.",
      },
    ],
    cta: {
      label: "See sample output",
      href: "/proof",
    },
  },
  {
    id: "who-it-is-for",
    title: "Who it is for",
    description: "The strongest fit is narrow on purpose.",
    items: [
      {
        id: "who-is-inko-for",
        question: "Who is Inko for?",
        answer:
          "Phase one is built for U.S. insurance advisors and broker teams who meet clients often, especially offline or in person, and feel the pressure of follow-up and documentation after every meeting.",
        priority: true,
      },
      {
        id: "who-is-not-inko-for",
        question: "Who is not the focus for phase one?",
        answer:
          "Inko is not positioned for generic students, creators, general-purpose meeting note users, or people primarily shopping for consumer recording hardware.",
      },
    ],
    cta: {
      label: "Book a Demo",
      href: "/book-demo",
    },
  },
  {
    id: "pricing-and-purchase",
    title: "Pricing and purchase",
    description: "The purchase decision stays simple: one SKU, one visible price, and visible policies.",
    items: [
      {
        id: "what-is-included",
        question: "What is included in Inko Starter?",
        answer:
          "Inko Starter includes the hardware plus the first-year subscription. Phase one does not present a catalog or layered pricing matrix.",
        priority: true,
      },
      {
        id: "why-is-price-visible",
        question: "Why is the price shown directly?",
        answer:
          "Because the site is designed to reduce friction and uncertainty. Pricing is visible up front so qualified advisors can decide quickly without guessing or waiting for a sales call.",
      },
    ],
    cta: {
      label: "See pricing",
      href: "/pricing",
    },
  },
  {
    id: "preorder-and-delivery",
    title: "Pre-order and delivery",
    description: "Pre-order rules should be visible before someone decides to pay.",
    items: [
      {
        id: "when-will-preorders-ship",
        question: "When will pre-orders ship?",
        answer:
          "The website presents delivery timing as an estimate and explains that updates will be shared if timing changes. The exact timing language should always be reviewed on the Pre-order Policy and Shipping & Delivery pages before checkout.",
        priority: true,
      },
      {
        id: "what-if-timing-changes",
        question: "What happens if delivery timing changes?",
        answer:
          "The pre-order policy explains how buyers are updated if timing shifts. The goal is visibility and low surprise rather than hidden caveats after purchase.",
      },
    ],
    cta: {
      label: "Review pre-order policy",
      href: "/pre-order-policy",
    },
  },
  {
    id: "returns-and-refunds",
    title: "Returns and refunds",
    description: "Refund and replacement rules should be clear before checkout.",
    items: [
      {
        id: "what-if-i-want-a-refund",
        question: "What if I want a refund?",
        answer:
          "The Returns & Refunds page explains the refund window, what is refundable, how damaged or defective devices are handled, and who is responsible for return shipping.",
        priority: true,
      },
      {
        id: "what-if-device-arrives-damaged",
        question: "What if the device arrives damaged or defective?",
        answer:
          "That scenario is handled separately from ordinary returns. The policy page explains how replacement or resolution requests are reviewed and processed.",
      },
    ],
    cta: {
      label: "Review returns policy",
      href: "/returns-refunds",
    },
  },
  {
    id: "privacy-and-consent",
    title: "Privacy and consent",
    description: "The site makes it visible that recording responsibility stays with the user.",
    items: [
      {
        id: "recording-consent-responsibility",
        question: "What should I know about recording consent?",
        answer:
          "Users remain responsible for understanding and following local recording and consent laws. Inko does not replace that legal responsibility, which is why the site links directly to a dedicated Consent & Recording Notice.",
        priority: true,
      },
      {
        id: "does-inko-replace-legal-advice",
        question: "Does Inko replace legal advice or compliance review?",
        answer:
          "No. The product and website are not a substitute for legal advice. Advisors should confirm the rules that apply to their location, meeting context, and business process.",
      },
    ],
    cta: {
      label: "Read consent notice",
      href: "/consent-recording-notice",
    },
  },
  {
    id: "demo-and-support",
    title: "Demo and support",
    description: "The site supports buyers who want confirmation before they pay.",
    items: [
      {
        id: "can-i-talk-to-someone",
        question: "Can I talk to someone before buying?",
        answer:
          "Yes. The demo path is meant for qualified buyers who want to confirm fit, see the workflow, and ask questions before making a purchase decision.",
        priority: true,
      },
      {
        id: "is-there-obligation-after-demo",
        question: "Is there any obligation after booking a demo?",
        answer:
          "No. The demo page makes it clear that the conversation is lightweight, useful, and not a commitment to buy.",
      },
    ],
    cta: {
      label: "Book a Demo",
      href: "/book-demo",
    },
  },
];

export const faqPage: FaqPageDocument = {
  seo: {
    title: "FAQ | Inko",
    description:
      "Answer key objections about product fit, pricing, pre-order timing, refunds, privacy, recording consent, and demos.",
    path: "/faq",
    keywords: ["insurance advisor faq", "preorder faq", "recording consent faq"],
  },
  hero: {
    id: "faq-hero",
    eyebrow: "FAQ",
    badge: "Objection reduction",
    title: "Clear answers before the checkout decision.",
    subtitle:
      "The FAQ is designed to remove uncertainty around fit, price, delivery, refunds, privacy, and demo support.",
  },
  categories: {
    id: "faq-categories",
    eyebrow: "Common questions",
    title: "Start with the questions that shape purchase confidence",
    subtitle:
      "Priority questions are opened by default so the most important concerns are visible immediately.",
    categories: faqCategories,
  },
  finalCta: {
    id: "faq-final-cta",
    eyebrow: "Need a different path?",
    title: "Choose the route that fits your buying style.",
    subtitle: "Buy directly if you are ready, or book a demo if you want a quick walkthrough first.",
    primaryCta: {
      label: "Pre-order Inko Starter",
      href: "/pricing",
    },
    secondaryCta: {
      label: "Book a Demo",
      href: "/book-demo",
    },
    tertiaryCta: {
      label: "Join Waitlist",
      href: "/waitlist",
    },
  },
};
