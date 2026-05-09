import type { DemoPageDocument } from "@/types/content";

export const demoPage: DemoPageDocument = {
  seo: {
    title: "Book a Demo | Inko",
    description:
      "Book a quiet, support-led walkthrough to see how Inko fits your meeting style, privacy expectations, and post-meeting workflow.",
    path: "/book-demo",
    keywords: ["book a demo", "insurance advisor demo", "workflow demo"],
  },
  hero: {
    id: "demo-hero",
    eyebrow: "Personalized experience",
    badge: "Quiet automation",
    title: "The quiet way to automate.",
    subtitle:
      "Experience how Inko captures the nuance of your meetings and turns it into structured intelligence without interrupting how you work.",
  },
  whatYouWillSee: {
    id: "demo-what-you-see",
    eyebrow: "What you will see",
    title: "A calm walkthrough focused on the real workflow",
    subtitle:
      "We keep the demo practical: how capture becomes usable follow-up, continuity, and structured output after the meeting.",
    columns: 2,
    items: [
      {
        title: "How the workflow fits an advisor day",
        body: "You will see how meeting capture flows into summary, follow-up, client memory, and CRM-ready output.",
      },
      {
        title: "How privacy is handled",
        body: "We walk through the handling model so you can understand where client context lives and how it stays protected.",
      },
      {
        title: "Fit questions, answered directly",
        body: "Bring questions about meeting volume, team workflow, records, and whether Inko matches the way you already operate.",
      },
      {
        title: "No sales choreography",
        body: "Booking a demo is not a commitment to buy. It is a support path for high-fit visitors who want clarity first.",
      },
    ],
  },
  whoItsFor: {
    id: "demo-who",
    eyebrow: "Why book a walkthrough",
    title: "Support that respects the way advisors actually decide.",
    subtitle:
      "The demo path is built for people who already see the fit and want a precise human conversation before moving ahead.",
    items: [
      {
        title: "Direct advisory support",
        body: "Join a 1-on-1 session with our team to map Inko to your workflow, meeting style, and post-meeting rhythm.",
      },
      {
        title: "Full privacy audit",
        body: "Learn how client conversations stay structured, protected, and invisible to the public web.",
      },
      {
        title: "Workflow fit check",
        body: "See whether Inko fits your team setup, meeting volume, and current record-keeping process before you buy.",
      },
    ],
  },
  form: {
    id: "demo-form",
    eyebrow: "Request a demo",
    title: "Secure My Demo Spot",
    subtitle:
      "Fill in your details for a tailored walkthrough of Inko Starter.",
    submitLabel: "Secure My Demo Spot",
    successTitle: "Request received",
    successMessage:
      "We’ll use your answers to shape a useful walkthrough and reach out about the time that fits best.",
    fields: [
      {
        name: "fullName",
        label: "Full name",
        type: "text",
        placeholder: "Arthur Morgan",
        required: true,
      },
      {
        name: "workEmail",
        label: "Work email",
        type: "email",
        placeholder: "arthur@atelier.com",
        required: true,
      },
      {
        name: "role",
        label: "Role",
        type: "select",
        required: true,
        options: [
          { value: "principal-advisor", label: "Principal advisor" },
          { value: "wealth-manager", label: "Wealth manager" },
          { value: "compliance-officer", label: "Compliance officer" },
          { value: "ops-leader", label: "Operations leader" },
          { value: "other", label: "Other" },
        ],
      },
      {
        name: "teamType",
        label: "Team type",
        type: "select",
        required: true,
        options: [
          { value: "boutique", label: "Independent boutique" },
          { value: "mid-size", label: "Mid-size agency" },
          { value: "enterprise", label: "Enterprise division" },
          { value: "multi-advisor", label: "Multi-advisor office" },
        ],
      },
      {
        name: "meetingVolume",
        label: "Approximate meeting volume",
        type: "select",
        required: true,
        options: [
          { value: "1-5", label: "1-5 client meetings per week" },
          { value: "6-10", label: "6-10 client meetings per week" },
          { value: "11-20", label: "11-20 client meetings per week" },
          { value: "20-plus", label: "20+ client meetings per week" },
        ],
      },
      {
        name: "biggestPain",
        label: "Biggest post-meeting pain",
        type: "textarea",
        placeholder: "For example: follow-up speed, notes, remembering details, CRM cleanup, or team continuity.",
        required: true,
      },
      {
        name: "preferredTime",
        label: "Preferred time",
        type: "select",
        required: true,
        options: [
          { value: "mornings-est", label: "Mornings (EST)" },
          { value: "afternoons-est", label: "Afternoons (EST)" },
          { value: "next-available", label: "Next available slot" },
        ],
      },
    ],
    secondaryCta: {
      label: "See pricing first",
      href: "/pricing",
    },
  },
  reassurance: {
    id: "demo-reassurance",
    eyebrow: "Client perspective",
    title: "A respectful follow-up, not a pressure sequence.",
    subtitle:
      "After you book, we use your context to shape a better conversation. There is no obligation to buy.",
    lead:
      "\"Inko feels less like a tool and more like an assistant who has been with me for a decade. It knows what matters.\"",
    points: [
      "Your answers help tailor the conversation",
      "You can still buy directly later from the pricing page",
      "If the fit is not right yet, the waitlist path remains available",
    ],
  },
  alternateCta: {
    id: "demo-alternate-cta",
    eyebrow: "Prefer a different path?",
    title: "You can still review the offer without booking first.",
    subtitle: "The pricing page stays visible for confident buyers, and the proof page remains available if you want to inspect the outputs first.",
    primaryCta: {
      label: "See pricing",
      href: "/pricing",
    },
    secondaryCta: {
      label: "Inspect proof",
      href: "/proof",
    },
  },
};
