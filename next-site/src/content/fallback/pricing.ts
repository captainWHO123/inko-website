import { policyLinksSection } from "@/content/fallback/site";
import type { PricingPageDocument } from "@/types/content";

export const pricingPage: PricingPageDocument = {
  seo: {
    title: "Pricing | Inko",
    description:
      "See the single phase-one SKU, what is included in Inko Starter, and the policy links that reduce purchase risk.",
    path: "/pricing",
    keywords: ["inko pricing", "preorder pricing", "insurance advisor pricing"],
  },
  hero: {
    id: "pricing-hero",
    eyebrow: "Pricing",
    badge: "Simple and visible",
    title: "One starter package. One visible price.",
    subtitle:
      "Hardware and first-year service stay together in one low-surprise buying decision.",
    highlights: [
      "One visible starter package for phase one",
      "Hardware and first-year subscription sold together",
      "Direct purchase stays available for confident buyers",
      "Demo-assisted purchase stays available for fit confirmation",
    ],
    aside: {
      title: "What you can decide here",
      body: "See the full phase-one offer, review the policy links, and choose the path that matches your confidence level.",
      stageMedia: {
        type: "image",
        src: "/reference/hero-introducing-pen-app.webp",
        alt: "Inko Note Pen and app introduction board with pen hardware, app screen, and product value blocks",
      },
      device: {
        label: "Included hardware",
        title: "Pen-sized capture hardware is part of Inko Starter.",
        body: "The device is included because the workflow starts in the room and continues in software after the meeting.",
        pills: ["Pen-sized", "One-click capture", "Noise-tuned audio"],
        hotspots: [
          {
            label: "One-click capture",
            anchor: "button",
            side: "left",
          },
          {
            label: "Noise-tuned mic",
            anchor: "microphone",
            side: "right",
          },
        ],
        media: {
          type: "image",
          src: "/reference/inko-pen-hardware.webp",
          alt: "Inko pen-sized capture hardware render",
        },
        calloutLabel: "Tap once to record",
      },
      bullets: [
        "$400 first year",
        "Hardware + first-year subscription",
        "Pre-order rules shown before checkout",
        "Direct purchase path",
        "Book a demo first if needed",
      ],
    },
  },
  pricingCard: {
    eyebrow: "Inko Starter",
    title: "Inko Starter",
    price: 400,
    priceSuffix: "first year",
    badge: "Hardware + first-year subscription",
    hardwareMedia: {
      type: "image",
      src: "/reference/inko-pen-hardware.webp",
      alt: "Inko pen-sized capture hardware render",
    },
    description:
      "A single phase-one offer for advisors who want stronger post-meeting execution without pricing complexity.",
    included: [
      "Inko hardware included",
      "First-year subscription included",
      "Meeting summary generation",
      "Follow-up generation",
      "Client memory support",
      "CRM-ready structured output",
    ],
    details: [
      "Early-batch messaging is controlled by the shared preorder state.",
      "Direct purchase remains primary, but demo-assisted purchase stays available.",
      "Price remains visible even if the site shifts into waitlist or demo-priority mode.",
    ],
    note: "Policy and delivery expectations stay close to the price so the purchase decision can happen with less uncertainty.",
  },
  includedSection: {
    id: "pricing-included",
    eyebrow: "What is included",
    title: "Buy a workflow entry point, not a box of specs.",
    subtitle:
      "Phase one keeps the offer focused on the outcome the advisor actually cares about after a meeting.",
    columns: 2,
    items: [
      {
        badge: "Hardware",
        title: "Hardware included",
        body: "The hardware is part of the starter offer because it supports the workflow entry point.",
      },
      {
        badge: "Subscription",
        title: "First-year subscription included",
        body: "The service value is part of the package from day one instead of being hidden behind a later reveal.",
      },
      {
        badge: "Output",
        title: "Output built for advisor follow-through",
        body: "Summary, follow-up, memory, and CRM-ready structure are part of what makes the purchase valuable.",
        bullets: ["Summary", "Follow-up", "Client memory", "Structured record"],
      },
      {
        badge: "Support",
        title: "Decision support stays available",
        body: "If you want to confirm fit before buying, the demo path remains available from the same page.",
        bullets: ["Book a demo", "Review policies", "Stay on waitlist if timing is not right"],
      },
    ],
  },
  servicePricingSection: {
    id: "service-pricing",
    eyebrow: "Why this is priced as a service",
    title: "The value is in what happens after the meeting.",
    subtitle:
      "The pricing page explains why the offer should be understood as workflow support instead of gadget ownership.",
    lead:
      "The site sells a service-first workflow system for advisors who want cleaner execution after client meetings. The hardware is important, but it is not the center of the story.",
    points: [
      "Outcome-led positioning beats hardware-spec positioning",
      "A single visible SKU keeps the phase-one decision low-friction",
      "The pricing page is meant to reduce uncertainty before the buyer ever reaches checkout",
    ],
  },
  preorderDetails: {
    id: "preorder-details",
    eyebrow: "Pre-order details",
    title: "Know what pre-order means before paying.",
    subtitle:
      "The site should help qualified buyers understand what happens next instead of pushing them into checkout blind.",
    points: [
      {
        title: "Payment leads into a visible update path",
        body: "The Pre-order Policy explains what happens after payment and how timing updates are communicated.",
      },
      {
        title: "Delivery timing is treated as an estimate",
        body: "The Shipping & Delivery page explains delivery expectations, support flow, and what happens if timing shifts.",
      },
      {
        title: "Returns and refunds are linked directly",
        body: "The buyer should be able to review refund and replacement handling without hunting for buried terms.",
      },
    ],
  },
  policyLinksSection,
  finalDecisionSupport: {
    id: "pricing-final-cta",
    eyebrow: "Decision support",
    title: "Ready to buy directly, or would you rather confirm fit first?",
    subtitle:
      "The page supports both confident buyers and people who want a lightweight demo before deciding.",
    primaryCta: {
      label: "Pre-order Inko Starter",
      href: "/pricing",
    },
    secondaryCta: {
      label: "Book a Demo",
      href: "/book-demo",
    },
  },
};
