import type {
  SimpleMarketingPageDocument,
  WaitlistPageDocument,
} from "@/types/content";

export const contactPage: SimpleMarketingPageDocument = {
  seo: {
    title: "Contact | Inko",
    description: "Contact Inko for support, pre-order questions, or demo follow-up.",
    path: "/contact",
  },
  hero: {
    id: "contact-hero",
    eyebrow: "Contact",
    badge: "Support path",
    title: "Talk to us about fit, policies, or next steps.",
    subtitle:
      "Use the pricing and policy pages for clear self-serve answers, or reach out when you want human help before or after the decision.",
  },
  contentSection: {
    id: "contact-options",
    eyebrow: "Support options",
    title: "Choose the support path that matches what you need.",
    subtitle: "Phase one is meant to feel helpful and low-pressure.",
    columns: 3,
    items: [
      {
        title: "Book a Demo",
        body: "Best when you want to understand workflow fit before buying.",
        cta: {
          label: "Book a Demo",
          href: "/book-demo",
        },
      },
      {
        title: "Review pricing and policy pages",
        body: "Best when you mostly need clarity on what is included, delivery expectations, or refund rules.",
        cta: {
          label: "See pricing",
          href: "/pricing",
        },
      },
      {
        title: "Email support",
        body: "Use hello@get-inko.com for direct support or questions that are easier to answer asynchronously.",
        cta: {
          label: "Email support",
          href: "mailto:hello@get-inko.com",
          external: true,
        },
      },
    ],
  },
  supportSection: {
    id: "contact-support",
    eyebrow: "What to expect",
    title: "A support-first response, not a pressure sequence.",
    subtitle:
      "The site is designed to support both confident buyers and people who need a little more clarity before they decide.",
    lead:
      "If you are a strong fit for phase one, the fastest routes are usually pricing, proof, FAQ, or a lightweight demo.",
  },
  finalCta: {
    id: "contact-final-cta",
    eyebrow: "Ready for the next step?",
    title: "Pick the path that matches your confidence level.",
    subtitle: "Buy directly, book a demo, or join the waitlist for updates.",
    primaryCta: {
      label: "See pricing",
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

export const waitlistPage: WaitlistPageDocument = {
  seo: {
    title: "Waitlist | Inko",
    description: "Join the Inko waitlist and stay in the loop if you are interested but not ready to buy today.",
    path: "/waitlist",
  },
  hero: {
    id: "waitlist-hero",
    eyebrow: "Waitlist",
    badge: "Observe and re-engage",
    title: "Stay close without forcing the decision today.",
    subtitle:
      "The waitlist is for visitors who see the fit but want updates, timing clarity, or another reason to come back later.",
  },
  benefitsSection: {
    id: "waitlist-benefits",
    eyebrow: "Why join",
    title: "Use the waitlist when the fit feels real but the timing does not.",
    subtitle:
      "This path supports re-engagement instead of pushing every visitor into immediate checkout.",
    columns: 3,
    items: [
      {
        title: "Stay updated on pre-order timing",
        body: "Useful if you want to watch delivery expectations or next-batch messaging before deciding.",
      },
      {
        title: "Revisit when you are operationally ready",
        body: "Helpful if you want a reminder after a busy stretch or after checking with your team.",
      },
      {
        title: "Keep the demo path open",
        body: "You can still move into a demo-assisted purchase later if you want fit confirmation before buying.",
      },
    ],
  },
  form: {
    id: "waitlist-form",
    eyebrow: "Join the waitlist",
    title: "Leave the context that will make follow-up more useful.",
    subtitle:
      "A little context helps us send the right updates instead of generic noise.",
    submitLabel: "Join waitlist",
    successTitle: "You’re on the list",
    successMessage:
      "We’ll use your answers to keep future updates more relevant to your workflow and buying stage.",
    fields: [
      {
        name: "fullName",
        label: "Full name",
        type: "text",
        placeholder: "Jordan Lee",
        required: true,
      },
      {
        name: "workEmail",
        label: "Work email",
        type: "email",
        placeholder: "jordan@agency.com",
        required: true,
      },
      {
        name: "role",
        label: "Role",
        type: "select",
        required: true,
        options: [
          { value: "individual-advisor", label: "Individual advisor" },
          { value: "broker-owner", label: "Broker or team owner" },
          { value: "operations", label: "Operations or support lead" },
          { value: "other", label: "Other" },
        ],
      },
      {
        name: "interest",
        label: "What would make the timing better for you?",
        type: "textarea",
        placeholder: "For example: delivery clarity, team buy-in, more sample outputs, or another review point.",
        required: true,
      },
    ],
    secondaryCta: {
      label: "Book a Demo",
      href: "/book-demo",
    },
  },
  reassurance: {
    id: "waitlist-reassurance",
    eyebrow: "No-pressure path",
    title: "Waiting is a supported route, not a lost lead.",
    subtitle:
      "The site is meant to serve buyers who want to come back at the right time with better context.",
    lead:
      "If you are interested but not ready, the waitlist keeps the relationship warm without forcing a rushed checkout decision.",
    points: [
      "Useful for re-engagement and retargeting",
      "Keeps pricing and demo paths open",
      "Helps future updates land with better context",
    ],
  },
  finalCta: {
    id: "waitlist-final-cta",
    eyebrow: "Prefer another route?",
    title: "You can still move directly into pricing or a demo.",
    subtitle: "The waitlist is only one of the supported conversion paths.",
    primaryCta: {
      label: "See pricing",
      href: "/pricing",
    },
    secondaryCta: {
      label: "Book a Demo",
      href: "/book-demo",
    },
  },
};

export const updatesPage: SimpleMarketingPageDocument = {
  seo: {
    title: "Updates | Inko",
    description: "Stay updated on the Inko phase-one rollout, policy clarity, and launch readiness.",
    path: "/updates",
  },
  hero: {
    id: "updates-hero",
    eyebrow: "Updates",
    badge: "Future-facing",
    title: "Follow the phase-one rollout without guessing.",
    subtitle:
      "This page gives the site a destination for future launch updates, shipping signals, and pre-order-state communication.",
  },
  contentSection: {
    id: "updates-content",
    eyebrow: "What belongs here",
    title: "A place for visible operational updates",
    subtitle:
      "As the website evolves, this page can carry launch notes, timing changes, and other confidence-building updates.",
    columns: 3,
    items: [
      {
        title: "Pre-order state changes",
        body: "Useful when the site moves between open, closing soon, waitlist, or delayed states.",
      },
      {
        title: "Fulfillment readiness updates",
        body: "Useful for delivery clarity and low-surprise communication during early batches.",
      },
      {
        title: "Product and support updates",
        body: "Useful for keeping future buyers and waitlist members engaged.",
      },
    ],
  },
  finalCta: {
    id: "updates-final-cta",
    eyebrow: "Stay in the loop",
    title: "Use the waitlist if you want future updates with context.",
    subtitle: "You can also go straight to pricing or book a demo if you are already evaluating fit.",
    primaryCta: {
      label: "Join Waitlist",
      href: "/waitlist",
    },
    secondaryCta: {
      label: "See pricing",
      href: "/pricing",
    },
  },
};

export const referralPage: SimpleMarketingPageDocument = {
  seo: {
    title: "Referral | Inko",
    description: "A placeholder page for future referral motion and referral program interest.",
    path: "/referral",
  },
  hero: {
    id: "referral-hero",
    eyebrow: "Referral",
    badge: "Future expansion",
    title: "Referral motion belongs here as the phase-one site matures.",
    subtitle:
      "The architecture keeps room for a referral path without turning the early site into a generic growth-template landing page.",
  },
  contentSection: {
    id: "referral-content",
    eyebrow: "Why this page exists",
    title: "The site is built for future expansion into referrals and re-engagement.",
    subtitle:
      "The conversion system is meant to support a broader lifecycle than a single checkout button.",
    columns: 2,
    items: [
      {
        title: "Advisor-to-advisor referrals",
        body: "A natural future path if the workflow resonates in broker teams and local advisor networks.",
      },
      {
        title: "Trust-driven introductions",
        body: "A future referral program can build on the same clarity and low-pressure tone established in phase one.",
      },
    ],
  },
  finalCta: {
    id: "referral-final-cta",
    eyebrow: "Still evaluating?",
    title: "Use the main conversion paths while referral motion is still future-facing.",
    subtitle: "Pricing, proof, FAQ, demos, and waitlist remain the active paths today.",
    primaryCta: {
      label: "See pricing",
      href: "/pricing",
    },
    secondaryCta: {
      label: "Join Waitlist",
      href: "/waitlist",
    },
  },
};

export const teamPlanInterestPage: SimpleMarketingPageDocument = {
  seo: {
    title: "Team Plan Interest | Inko",
    description: "Register interest in future team-plan expansion without crowding the phase-one one-SKU offer.",
    path: "/team-plan-interest",
  },
  hero: {
    id: "team-plan-hero",
    eyebrow: "Team Plan Interest",
    badge: "Future expansion",
    title: "Signal team interest without complicating the phase-one pricing story.",
    subtitle:
      "Phase one keeps one SKU and one visible price, but the architecture leaves room for future team-plan demand capture.",
  },
  contentSection: {
    id: "team-plan-content",
    eyebrow: "Why this page exists",
    title: "Future team demand should have a home without confusing today’s offer.",
    subtitle:
      "This page is a clean place to capture interest from broker teams or operations leaders without making phase one feel enterprise-heavy.",
    columns: 3,
    items: [
      {
        title: "Broker teams",
        body: "Teams that want stronger continuity and cleaner follow-through across multiple advisors.",
      },
      {
        title: "Operations leaders",
        body: "People who care about better records, cleaner handoff, and more consistent post-meeting follow-up.",
      },
      {
        title: "Future team workflow expansion",
        body: "A natural next step once the phase-one individual workflow proves itself.",
      },
    ],
  },
  finalCta: {
    id: "team-plan-final-cta",
    eyebrow: "Current next step",
    title: "If you are evaluating for a team, the best phase-one path is still a conversation.",
    subtitle: "Book a demo to discuss fit, or use the waitlist to stay close as the offer expands.",
    primaryCta: {
      label: "Book a Demo",
      href: "/book-demo",
    },
    secondaryCta: {
      label: "Join Waitlist",
      href: "/waitlist",
    },
  },
};
