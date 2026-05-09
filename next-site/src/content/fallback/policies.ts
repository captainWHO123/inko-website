import { policyLinksSection } from "@/content/fallback/site";
import type { PolicyPageDocument } from "@/types/content";

const legalFinalCta = {
  id: "legal-final-cta",
  eyebrow: "Need more help?",
  title: "Review the offer with the rules in view.",
  subtitle:
    "If you still want context before deciding, compare pricing or book a quick demo with a person.",
  primaryCta: {
    label: "See pricing",
    href: "/pricing",
  },
  secondaryCta: {
    label: "Book a Demo",
    href: "/book-demo",
  },
};

export const preorderPolicyPage: PolicyPageDocument = {
  seo: {
    title: "Pre-order Policy | Inko",
    description:
      "Understand what pre-order means, what happens after payment, delivery timing expectations, and how updates are communicated.",
    path: "/pre-order-policy",
  },
  hero: {
    id: "preorder-policy-hero",
    eyebrow: "Pre-order Policy",
    badge: "Read before checkout",
    title: "What pre-order means for Inko Starter.",
    subtitle:
      "This page explains what happens after payment, how delivery timing is presented, and how we communicate if timing changes.",
  },
  notice: {
    tone: "warning",
    title: "Delivery timing is estimated until shipment confirmation unless the site explicitly says otherwise.",
    body: "Pre-order is designed to keep timing expectations visible before checkout, especially during early-batch fulfillment.",
  },
  sections: [
    {
      title: "What you are buying",
      body: [
        "A pre-order reserves an upcoming fulfillment unit rather than shipping a device immediately.",
        "In phase one, the purchase should be understood as the Inko Starter package: hardware plus the first-year subscription.",
      ],
      items: [
        "The order is a reservation against a future batch",
        "The offer is the starter package, not a hardware-only menu",
        "Delivery language should be read together with the shipping page",
      ],
    },
    {
      title: "What happens after payment",
      body: [
        "After payment, the order is recorded and the buyer receives confirmation through the email address provided at checkout.",
        "That confirmation becomes the reference point for future order support, timing updates, and any operational follow-up.",
      ],
      items: [
        "Order confirmation follows successful payment",
        "Support questions should reference the confirmation details",
        "Future timing or fulfillment updates use the same order contact path",
      ],
    },
    {
      title: "How delivery timing should be read",
      body: [
        "Any delivery window shown before shipment confirmation should be treated as an estimate unless the site explicitly says otherwise.",
        "Early-batch production, fulfillment, and shipping constraints can move expected timing even when the order itself is confirmed.",
      ],
      items: [
        "Estimate language should stay visible near checkout",
        "Shipment timing is not the same as a guaranteed arrival date",
        "The shipping page should stay aligned with the current operating state",
      ],
    },
    {
      title: "If timing changes materially",
      body: [
        "If expected timing changes materially, buyers are updated through the contact information tied to the order.",
        "The website should also surface the change in banner or policy messaging so visitors are not relying on silence.",
      ],
      items: [
        "Use order contact details for timing updates",
        "Reflect material changes in site messaging when appropriate",
        "Keep support instructions visible if the update changes buyer confidence",
      ],
    },
    {
      title: "Support and update path",
      body: [
        "The support process should make it clear how buyers ask pre-order questions before and after payment.",
        "If delivery timing or fulfillment readiness changes, the support path and policy pages should stay aligned rather than sending mixed signals.",
      ],
      items: [
        "Use hello@get-inko.com or the contact path shown on the site",
        "Reference the order confirmation when asking for help",
        "Review the shipping and refund pages alongside this policy",
      ],
    },
  ],
  policyLinksSection,
  finalCta: legalFinalCta,
};

export const returnsRefundsPage: PolicyPageDocument = {
  seo: {
    title: "Returns & Refunds | Inko",
    description:
      "Review refund eligibility, time windows, damaged-device handling, and return shipping responsibilities.",
    path: "/returns-refunds",
  },
  hero: {
    id: "returns-hero",
    eyebrow: "Returns & Refunds",
    badge: "Low-surprise purchasing",
    title: "Clear expectations for refunds, returns, and replacements.",
    subtitle:
      "This page is meant to reduce purchase risk by explaining what is refundable, what is not, and how damaged-device handling works.",
  },
  sections: [
    {
      title: "How refund review should work",
      body: [
        "Refund review should depend on the order stage, the condition of the item, and the published return terms in effect at the time of purchase.",
        "The site should never imply that every situation is automatically refundable without reference to those rules.",
      ],
      items: [
        "Check order stage before assuming eligibility",
        "Use the published return terms, not guesswork",
        "Keep replacement handling separate from preference-based returns",
      ],
    },
    {
      title: "Before shipment and after delivery",
      body: [
        "Buyers should be able to see whether they are asking for help before shipment or after delivery, because those scenarios are not the same.",
        "The website should make that distinction visible instead of collapsing every support request into a generic refund question.",
      ],
      items: [
        "Before-shipment questions should route through order support",
        "After-delivery requests should be reviewed against the published return terms",
        "If policy language changes, update it centrally before scaling paid traffic",
      ],
    },
    {
      title: "Damaged or defective devices",
      body: [
        "Damaged or defective devices should be handled separately from standard preference-based returns.",
        "Buyers should know how to report the issue, what order information or evidence may be needed, and how replacement requests are reviewed.",
      ],
      items: [
        "Ask for the order reference and a short description of the issue",
        "Request photos or other evidence when needed",
        "Route damaged or defective items through replacement review first",
      ],
    },
    {
      title: "Replacement path and shipping responsibility",
      body: [
        "The policy should explain how replacement requests are handled and whether outbound or return shipping costs are covered, conditionally covered, or buyer-paid.",
        "That responsibility should not be left ambiguous at checkout or hidden in unrelated terms.",
      ],
      items: [
        "State who covers return shipping when applicable",
        "Separate replacement handling from standard buyer preference returns",
        "Keep the refund and shipping pages aligned",
      ],
    },
    {
      title: "How buyers should get help",
      body: [
        "The support path should be easy to find and should tell the buyer what information makes a refund or replacement request easier to review.",
        "That usually means pointing them to the order confirmation details and the support contact shown on the site.",
      ],
      items: [
        "Use hello@get-inko.com or the visible contact path",
        "Reference the order confirmation",
        "Explain whether the request is about timing, return, damage, or replacement",
      ],
    },
  ],
  policyLinksSection,
  finalCta: legalFinalCta,
};

export const shippingDeliveryPage: PolicyPageDocument = {
  seo: {
    title: "Shipping & Delivery | Inko",
    description:
      "Learn about supported delivery regions, estimated timing, tracking, and how delivery delays are communicated.",
    path: "/shipping-delivery",
  },
  hero: {
    id: "shipping-hero",
    eyebrow: "Shipping & Delivery",
    badge: "Delivery clarity",
    title: "How shipping updates and delivery expectations should be handled.",
    subtitle:
      "The website should make region coverage, estimated timing, and delay communications easy to understand before purchase.",
  },
  sections: [
    {
      title: "Region and availability clarity",
      body: [
        "Supported delivery regions should be stated clearly in the live shipping policy before paid traffic is scaled.",
        "If some regions are not supported in phase one, the site should say so plainly instead of letting buyers discover that after checkout.",
      ],
      items: [
        "Show region limits before purchase when they exist",
        "Keep pricing visible even if delivery availability is limited",
        "Use support and demo paths when a buyer needs clarification first",
      ],
    },
    {
      title: "Estimated timing language",
      body: [
        "Delivery estimates should be framed carefully, especially during the pre-order phase.",
        "The site should avoid implying guaranteed arrival dates unless that commitment is operationally supportable.",
      ],
      items: [
        "Treat pre-shipment timing as an estimate",
        "Do not blur estimated windows into guaranteed delivery",
        "Keep pre-order and shipping wording aligned",
      ],
    },
    {
      title: "Tracking and shipment updates",
      body: [
        "When tracking becomes available, buyers should receive a clear update flow that explains where to look and what each status means.",
        "Operational updates should stay visible through order communication and support channels.",
      ],
      items: [
        "Use the order contact path for tracking updates",
        "Make support easy to find if tracking is delayed or unclear",
        "Keep shipment status separate from marketing copy",
      ],
    },
    {
      title: "If timing slips or delivery is delayed",
      body: [
        "If a shipment is delayed materially, the site and support process should make that visible rather than relying on silence.",
        "The preorder-state system is designed to help surface those messages consistently across the website.",
      ],
      items: [
        "Use site messaging for visible timing updates",
        "Use buyer contact details for order-specific notifications",
        "Keep the support path visible when confidence changes",
      ],
    },
    {
      title: "Support process for shipping questions",
      body: [
        "The shipping page should make it clear how buyers ask questions about timing, tracking, and delivery status.",
        "That support process should point back to the order confirmation and current policy pages rather than sending the buyer in circles.",
      ],
      items: [
        "Use hello@get-inko.com or the contact path listed on the site",
        "Reference order confirmation details when available",
        "Check the pre-order page for the current timing language",
      ],
    },
  ],
  policyLinksSection,
  finalCta: legalFinalCta,
};

export const consentNoticePage: PolicyPageDocument = {
  seo: {
    title: "Consent & Recording Notice | Inko",
    description:
      "Understand the user's responsibility to comply with recording and consent laws before using Inko.",
    path: "/consent-recording-notice",
  },
  hero: {
    id: "consent-hero",
    eyebrow: "Consent & Recording Notice",
    badge: "User responsibility remains",
    title: "Recording law responsibility stays with the user.",
    subtitle:
      "This notice explains the boundary clearly: Inko does not replace the user’s duty to understand and follow applicable recording and consent laws.",
  },
  notice: {
    tone: "danger",
    title: "Inko is not legal advice and does not determine whether a specific recording is lawful.",
    body: "Users should confirm the rules that apply to their location, meeting participants, and business context before recording.",
  },
  sections: [
    {
      title: "User responsibility",
      body: [
        "Users are responsible for complying with all local, state, federal, and other applicable laws or regulations related to recording and consent.",
        "That responsibility exists regardless of what device or software is used.",
      ],
    },
    {
      title: "No replacement for legal guidance",
      body: [
        "Nothing on this site should be treated as legal advice or a compliance determination for a specific meeting or jurisdiction.",
        "Users should consult appropriate legal or compliance guidance when needed.",
      ],
    },
    {
      title: "Practical expectation",
      body: [
        "Before recording a client conversation, users should confirm what notice or consent is required in the places where they work and with the participants involved.",
        "The website surfaces this page before checkout to reduce the risk of assumption-based use.",
      ],
    },
  ],
  policyLinksSection,
  finalCta: legalFinalCta,
};

export const privacyPolicyPage: PolicyPageDocument = {
  seo: {
    title: "Privacy Policy | Inko",
    description:
      "A phase-one privacy policy shell covering website data, demo submissions, waitlist submissions, and support contact handling.",
    path: "/privacy-policy",
  },
  hero: {
    id: "privacy-hero",
    eyebrow: "Privacy Policy",
    badge: "Phase-one policy shell",
    title: "How website information should be handled in phase one.",
    subtitle:
      "This policy shell covers site analytics, form submissions, support contact handling, and other website-level information practices.",
  },
  sections: [
    {
      title: "Information collected through the website",
      body: [
        "The website may collect information submitted through demo, waitlist, and support forms, along with limited analytics about page interactions.",
        "Information collection should stay proportionate to conversion support and operational follow-up needs.",
      ],
    },
    {
      title: "Use of information",
      body: [
        "Submitted information may be used to respond to demo requests, manage waitlist interest, provide support, and improve the site experience.",
        "Phase-one analytics are intended to understand the conversion journey rather than create opaque behavior tracking.",
      ],
    },
    {
      title: "Operational safeguards",
      body: [
        "The production privacy policy should be finalized before launch with the real operational stack, vendors, and retention practices.",
        "This phase-one shell keeps the required page and site structure ready so final policy copy can be updated centrally.",
      ],
    },
  ],
  policyLinksSection,
  finalCta: legalFinalCta,
};

export const termsPage: PolicyPageDocument = {
  seo: {
    title: "Terms | Inko",
    description:
      "A phase-one terms shell covering website use, order expectations, policy references, and limitation language placeholders.",
    path: "/terms",
  },
  hero: {
    id: "terms-hero",
    eyebrow: "Terms",
    badge: "Phase-one policy shell",
    title: "General terms for using the website and placing an order.",
    subtitle:
      "These terms are structured so final launch language can be completed without rebuilding the site architecture.",
  },
  sections: [
    {
      title: "Website use",
      body: [
        "The site is intended to provide product, pricing, policy, and conversion-path information related to Inko phase one.",
        "Use of the site should be lawful and consistent with the information and purchasing paths presented.",
      ],
    },
    {
      title: "Orders and policies",
      body: [
        "Orders, refunds, delivery expectations, and consent responsibilities should be read together with the linked policy pages rather than in isolation.",
        "The terms page should not contradict the pre-order, shipping, refund, or consent notices surfaced elsewhere on the site.",
      ],
    },
    {
      title: "Launch-ready completion",
      body: [
        "Before production launch, the final terms should be reviewed with the actual commerce, support, and operational setup in place.",
        "This page provides the structural location and navigational visibility required for that update.",
      ],
    },
  ],
  policyLinksSection,
  finalCta: legalFinalCta,
};
