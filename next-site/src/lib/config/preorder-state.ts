import { siteConfig } from "@/lib/config/site-config";
import type { PreorderState, PreorderStateExperience, ResolvedCta } from "@/types/state";

function purchase(label: string): ResolvedCta {
  return {
    label,
    href: siteConfig.checkoutUrl,
    external: siteConfig.checkoutMode === "live",
    checkoutMode: siteConfig.checkoutMode,
    userPathType: "direct_purchase",
  };
}

function demo(label: string): ResolvedCta {
  return {
    label,
    href: siteConfig.demoUrl,
    userPathType: "demo_assisted",
  };
}

function waitlist(label: string): ResolvedCta {
  return {
    label,
    href: "/waitlist",
    userPathType: "observe",
  };
}

const preorderStateConfig: Record<
  PreorderState,
  Omit<PreorderStateExperience, "state">
> = {
  open: {
    banner: {
      tone: "success",
      title: "Pre-orders are open",
      body: "Inko Starter is available with hardware plus the first-year subscription. Demo-assisted purchase is available if you want fit confirmation first.",
    },
    heroPrimary: purchase("Pre-order Inko Starter"),
    heroSecondary: demo("Watch Demo"),
    navPrimary: purchase("Pre-order Inko Starter"),
    pricingPrimary: purchase("Pre-order Inko Starter"),
    pricingSecondary: demo("Book a Demo"),
    splitPrimary: purchase("Pre-order Inko Starter"),
    splitSecondary: demo("Book a Demo"),
    stickyPrimary: purchase("Pre-order Inko Starter"),
    stickySecondary: demo("Book a Demo"),
    footerNote:
      "Phase one keeps one visible SKU and clear policy links so the purchase decision feels transparent.",
    supportMessage:
      "Prefer to confirm fit first? Demo-assisted purchase is available before you commit.",
    policyMessage:
      "Pre-order, shipping, refund, and recording-consent policies remain visible before checkout.",
    highlightedPolicyHrefs: ["/pre-order-policy", "/returns-refunds", "/shipping-delivery"],
    pricingNotice: {
      tone: "info",
      title: "Visible price, visible rules",
      body: "The page keeps the price and policy links together so buyers can decide with less uncertainty.",
    },
    demoFormEnabled: true,
  },
  closing_soon: {
    banner: {
      tone: "warning",
      title: "Early batch closing soon",
      body: "Reserve your spot while the current batch remains open. Demo support is still available if you want a quick fit check first.",
    },
    heroPrimary: purchase("Reserve your spot"),
    heroSecondary: demo("Watch Demo"),
    navPrimary: purchase("Reserve your spot"),
    pricingPrimary: purchase("Reserve your spot"),
    pricingSecondary: demo("Book a Demo"),
    splitPrimary: purchase("Reserve your spot"),
    splitSecondary: demo("Book a Demo"),
    stickyPrimary: purchase("Reserve your spot"),
    stickySecondary: demo("Book a Demo"),
    footerNote:
      "The site stays clear about timing and policies so urgency does not replace trust.",
    supportMessage:
      "If you want to move quickly but still want confirmation, the demo path stays open.",
    policyMessage:
      "Delivery estimates and support rules stay visible during the early-batch closing window.",
    highlightedPolicyHrefs: ["/pre-order-policy", "/shipping-delivery"],
    pricingNotice: {
      tone: "warning",
      title: "Early batch timing matters",
      body: "Read the pre-order and shipping pages before checkout so the delivery expectations are clear.",
    },
    demoFormEnabled: true,
  },
  closed: {
    banner: {
      tone: "warning",
      title: "Pre-orders are currently closed",
      body: "Pricing remains visible for reference. Join the waitlist or book a demo so we can re-engage you when the next step opens.",
    },
    heroPrimary: waitlist("Join Waitlist"),
    heroSecondary: demo("Watch Demo"),
    navPrimary: waitlist("Join Waitlist"),
    pricingPrimary: waitlist("Join Waitlist"),
    pricingSecondary: demo("Book a Demo"),
    splitPrimary: waitlist("Join Waitlist"),
    splitSecondary: demo("Book a Demo"),
    stickyPrimary: waitlist("Join Waitlist"),
    stickySecondary: demo("Book a Demo"),
    footerNote:
      "Pricing remains visible even while checkout is paused so buyers can stay informed without guessing.",
    supportMessage:
      "Checkout is paused, but the demo and waitlist paths remain available for high-intent visitors.",
    policyMessage:
      "Use the support and policy pages to understand timing, delivery, and next-step expectations while pre-orders are closed.",
    highlightedPolicyHrefs: ["/pre-order-policy", "/shipping-delivery"],
    pricingNotice: {
      tone: "warning",
      title: "Checkout is paused",
      body: "You can still review pricing and policies, then join the waitlist or book a demo.",
    },
    demoFormEnabled: true,
  },
  waitlist: {
    banner: {
      tone: "info",
      title: "Waitlist mode is active",
      body: "The price remains visible, while the primary conversion path shifts to waitlist plus demo-assisted purchase.",
    },
    heroPrimary: waitlist("Join Waitlist"),
    heroSecondary: demo("Watch Demo"),
    navPrimary: waitlist("Join Waitlist"),
    pricingPrimary: waitlist("Join Waitlist"),
    pricingSecondary: demo("Book a Demo"),
    splitPrimary: waitlist("Join Waitlist"),
    splitSecondary: demo("Book a Demo"),
    stickyPrimary: waitlist("Join Waitlist"),
    stickySecondary: demo("Book a Demo"),
    footerNote:
      "The site stays purchase-ready in structure while using waitlist as the main path for now.",
    supportMessage:
      "If you want help deciding whether to stay close, use the demo path or read the proof and FAQ pages first.",
    policyMessage:
      "Pricing stays visible, and policy pages remain linked so visitors can evaluate the offer before deciding to wait.",
    highlightedPolicyHrefs: ["/pre-order-policy", "/returns-refunds"],
    pricingNotice: {
      tone: "info",
      title: "Waitlist is the primary path right now",
      body: "Use pricing for clarity, waitlist for updates, and demos for fit confirmation.",
    },
    demoFormEnabled: true,
  },
  demo_priority: {
    banner: {
      tone: "info",
      title: "Demo-assisted purchase is the priority path",
      body: "The site is emphasizing guided fit confirmation while keeping the price visible for buyers who still want to purchase directly.",
    },
    heroPrimary: demo("Book a Demo"),
    heroSecondary: purchase("See pricing and pre-order"),
    navPrimary: demo("Book a Demo"),
    pricingPrimary: purchase("Pre-order Inko Starter"),
    pricingSecondary: demo("Book a Demo"),
    splitPrimary: demo("Book a Demo"),
    splitSecondary: purchase("Pre-order Inko Starter"),
    stickyPrimary: demo("Book a Demo"),
    stickySecondary: purchase("Pre-order Inko Starter"),
    footerNote:
      "The site is prioritizing fit confirmation while still leaving direct purchase available.",
    supportMessage:
      "If you are high-intent but want a quick sense-check before paying, this is the most supported state for that path.",
    policyMessage:
      "Pricing and policies remain visible so demo support adds confidence without hiding the commercial details.",
    highlightedPolicyHrefs: ["/pre-order-policy", "/returns-refunds"],
    pricingNotice: {
      tone: "info",
      title: "Demo support is emphasized",
      body: "Direct purchase still exists, but the site is deliberately steering more visitors toward a quick fit-confirmation conversation first.",
    },
    demoFormEnabled: true,
  },
  delayed: {
    banner: {
      tone: "warning",
      title: "Delivery update",
      body: "There is an active timing update. Review the shipping and pre-order policy pages before you decide how to proceed.",
    },
    heroPrimary: purchase("Review timing and pre-order"),
    heroSecondary: demo("Watch Demo"),
    navPrimary: purchase("Review timing"),
    pricingPrimary: purchase("Pre-order with timing review"),
    pricingSecondary: demo("Book a Demo"),
    splitPrimary: purchase("Review timing and pre-order"),
    splitSecondary: demo("Book a Demo"),
    stickyPrimary: purchase("Review timing"),
    stickySecondary: demo("Book a Demo"),
    footerNote:
      "When timing changes, the site should make delivery communication more visible instead of hoping buyers do not notice.",
    supportMessage:
      "If the delivery update changes your confidence, book a demo or join the waitlist instead of guessing.",
    policyMessage:
      "Shipping and pre-order guidance are highlighted more aggressively during a delay state.",
    highlightedPolicyHrefs: ["/shipping-delivery", "/pre-order-policy"],
    pricingNotice: {
      tone: "warning",
      title: "Delivery timing has an active update",
      body: "Review shipping and pre-order guidance before checkout so your expectations match the current operating reality.",
    },
    demoFormEnabled: true,
  },
};

export function getPreorderStateExperience(
  state: PreorderState = siteConfig.preorderState,
): PreorderStateExperience {
  return {
    state,
    ...preorderStateConfig[state],
  };
}
