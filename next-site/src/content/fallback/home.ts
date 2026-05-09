import { faqCategories } from "@/content/fallback/faq";
import { proofSamples } from "@/content/fallback/proof";
import type { HomePageDocument } from "@/types/content";

export const homePage: HomePageDocument = {
  seo: {
    title: "Inko | Turn every client conversation into follow-up, notes, and CRM-ready output",
    description:
      "Built for U.S. insurance advisors who meet clients offline and need stronger post-meeting execution.",
    path: "/",
    keywords: ["insurance advisor workflow", "post-meeting execution", "preorder site"],
  },
  hero: {
    id: "home-hero",
    eyebrow: "Built for insurance advisors",
    badge: "Service-first pre-order",
    title: "Turn every client conversation into action.",
    subtitle:
      "Pen-sized capture. Summary, follow-up, client memory, and CRM handoff after the meeting.",
    highlights: [
      "Conversation captured",
      "Follow-up drafted",
      "Client memory retained",
      "CRM handoff prepared",
    ],
    supportingNote:
      "A post-meeting system, not a standalone recorder.",
    aside: {
      title: "Post-meeting workspace",
      body: "A premium post-meeting workspace for review, follow-up, continuity, and cleaner records.",
      device: {
        label: "Capture source",
        title: "Pen-sized hardware with one-click capture.",
        body: "Carry it like a pen. Tap once. Let the system take over after the meeting.",
        pills: ["Pen-sized", "One-click capture", "Noise-tuned audio"],
        hotspots: [
          {
            label: "Tap once to record",
            anchor: "button",
            side: "left",
          },
          {
            label: "Noise-tuned mic",
            anchor: "microphone",
            side: "right",
          },
          {
            label: "Pen-sized body",
            anchor: "body",
            side: "left",
          },
        ],
        media: {
          type: "image",
          src: "/reference/inko-pen-hardware.webp",
          alt: "Inko pen-sized capture hardware render",
        },
        calloutLabel: "Tap once to record",
      },
      tabs: ["After meeting", "Summary", "Follow-up", "CRM"],
      stageLabel: "Meeting summary ready",
      stageStatus: "Reviewable",
      stageTitle: "One capture becomes a usable next move.",
      context: {
        label: "Client context",
        body: "Coverage review, spouse copied on the recap, follow-up due within 48 hours.",
      },
      actionChips: ["AI transcript ready", "Draft follow-up", "CRM export prepared"],
      panels: [
        {
          title: "Follow-up",
          body: "Subject: next steps from today&apos;s coverage review\n\nThanks again for the conversation. I&apos;ve attached the two options we discussed and the next step we aligned on for next week.",
          status: "Sendable",
        },
        {
          title: "Client memory",
          body: "Prefers concise recaps, wants spouse included, and evaluates options against monthly affordability first.",
          pills: ["Friday updates", "Comparison-driven", "Budget-sensitive"],
        },
      ],
      footerChips: [
        "Conversation captured",
        "Follow-up drafted",
        "Client memory retained",
        "CRM handoff prepared",
      ],
      stageMedia: {
        type: "image",
        src: "/reference/hero-introducing-pen-app.webp",
        alt: "Inko Note Pen and app introduction board showing the pen hardware, app screen, and key product capabilities",
      },
      bullets: [
        "$400 first year",
        "Hardware included",
        "First-year subscription included",
        "Direct purchase path plus demo-assisted path",
        "Visible policies before checkout",
      ],
    },
  },
  audienceQualifier: {
    id: "audience-qualifier",
    eyebrow: "Built for a specific workflow",
    title: "This is for advisors who feel the post-meeting drag immediately.",
    subtitle:
      "Built narrowly so the right buyer recognizes fit fast.",
    items: [
      {
        title: "Frequent client meetings",
        body: "You meet often enough that recall, follow-up, and documentation pile up fast.",
      },
      {
        title: "Offline and in-person conversations",
        body: "You meet away from your desk, so clean follow-through gets harder later.",
      },
      {
        title: "Professional responsiveness matters",
        body: "You want to stay organized, respond quickly, and avoid small misses after the meeting.",
      },
    ],
    footnote:
      "If that does not sound like your workflow, phase one probably is not for you yet.",
  },
  problemSection: {
    id: "post-meeting-work",
    eyebrow: "The real problem",
    title: "The work starts after the meeting.",
    subtitle:
      "A strong meeting still creates recall, follow-up, and record cleanup.",
    points: [
      {
        title: "Important details fade fast",
        body: "The meeting is rarely the problem. What fades afterward is.",
      },
      {
        title: "Follow-up becomes inconsistent",
        body: "Thoughtful follow-up gets harder after several meetings in a row.",
      },
      {
        title: "CRM pressure is still there",
        body: "Documentation still needs to happen even when the meeting happened away from your desk.",
      },
    ],
  },
  workflowSection: {
    id: "home-workflow",
    eyebrow: "How Inko works",
    title: "Record. Understand. Act.",
    subtitle:
      "One click starts capture. Inko turns the meeting into action-ready output.",
    stageMedia: {
      type: "image",
      src: "/reference/workflow-traditional-vs-inko.webp",
      alt: "Traditional workflow versus Inko workflow across before, during, and after the meeting",
    },
    steps: [
      {
        id: "capture",
        title: "Capture",
        body: "Tap once and capture the conversation without relying on memory later.",
        timing: "During",
        outcome: "Usable meeting record",
        bullets: [
          "One-click capture",
          "Noise-tuned microphones",
        ],
      },
      {
        id: "review",
        title: "Review",
        body: "See transcript, summary, and priorities in one reviewable state.",
        timing: "After",
        outcome: "Clear post-meeting view",
        bullets: [
          "Transcript becomes usable",
          "Summary, actions, and priorities",
        ],
      },
      {
        id: "follow-up",
        title: "Follow-up",
        body: "Turn the next message into a send-ready draft instead of starting from a blank page.",
        timing: "Next step",
        outcome: "Client-ready response",
        bullets: [
          "Clear next step",
          "Professional client-facing language",
        ],
      },
      {
        id: "record",
        title: "Record",
        body: "Preserve client context and prepare the structured handoff your workflow still needs.",
        timing: "After",
        outcome: "Cleaner continuity and CRM handoff",
        bullets: [
          "Client memory preserved",
          "Structured fields prepared",
        ],
      },
    ],
  },
  outcomeSection: {
    id: "outcomes",
    eyebrow: "What you actually get",
    title: "What appears after the meeting feels like product, not paperwork.",
    subtitle:
      "Four software surfaces carry the advisor from recap to next move.",
    columns: 4,
    items: [
      {
        badge: "Summary",
        title: "Meeting summary",
        body: "A reviewable recap with key takeaways, priorities, and next actions.",
        bullets: ["Key takeaways", "Priority", "Next tasks"],
      },
      {
        badge: "Follow-up",
        title: "Follow-up generation",
        body: "A send-ready draft the advisor can refine and send immediately.",
        bullets: ["Client-ready language", "Clear next step", "Sendable draft"],
      },
      {
        badge: "Continuity",
        title: "Client memory",
        body: "A persistent profile with household context, concerns, and communication cues.",
        bullets: ["Client profile", "Household + finance", "Key concerns"],
      },
      {
        badge: "Structure",
        title: "CRM-ready structured output",
        body: "A structured handoff that reduces duplicate entry into CRM or internal workflows.",
        bullets: ["Mapped fields", "Owner + due date", "Export-ready rows"],
      },
    ],
  },
  reframeSection: {
    id: "reframe",
    eyebrow: "More than a recorder",
    title: "The hardware opens the workflow. The workflow earns the purchase.",
    subtitle:
      "Phase one is sold as post-meeting execution support, not gadget ownership.",
    lead:
      "Inko matters because a pen-sized capture device opens a stronger post-meeting system once the software takes over.",
    comparisons: [
      {
        title: "What this is not",
        body: "A broad consumer recorder, a generic AI meeting-notes site, or a feature-first hardware shopping experience.",
      },
      {
        title: "What this is",
        body: "A workflow system that helps advisors convert client conversations into next actions, clearer records, and better continuity.",
      },
    ],
    points: [
      "Pen-sized hardware starts the workflow without becoming the whole story",
      "Position the service around advisor workflow, not audio hardware specs",
      "Keep the commercial decision simple with one phase-one starter offer",
      "Make demo-assisted purchase available without hiding direct purchase",
    ],
  },
  skuSection: {
    eyebrow: "What is included",
    title: "Inko Starter",
    price: 400,
    priceSuffix: "first year",
    badge: "One SKU in phase one",
    description:
      "Hardware plus the first-year subscription, presented as a simple service-first purchase instead of a multi-tier pricing maze.",
    included: [
      "Inko hardware",
      "First-year subscription included",
      "Meeting summary generation",
      "Follow-up generation",
      "Client memory support",
      "CRM-ready structured output",
    ],
    details: [
      "Direct purchase stays available for confident buyers.",
      "Demo-assisted purchase stays available for people who want fit confirmation first.",
      "Policy links stay close to the price so the decision feels lower-surprise.",
    ],
  },
  riskSection: {
    id: "risk-clarity",
    eyebrow: "Risk clarity",
    title: "The decision should feel transparent before checkout.",
    subtitle:
      "Rules about pre-order timing, refunds, shipping, and recording consent should be visible before someone clicks buy.",
    points: [
      {
        title: "Pre-order means rules up front",
        body: "The site surfaces what happens after payment, what timing is estimated, and how updates will be shared if timing changes.",
      },
      {
        title: "Returns and refunds stay visible",
        body: "Refund and replacement handling stays linked from pricing so buyers can review the process before committing.",
      },
      {
        title: "Recording responsibility stays with the user",
        body: "The site makes it explicit that users must understand and comply with applicable recording and consent laws.",
      },
    ],
  },
  proofPreview: {
    id: "proof-preview",
    eyebrow: "Proof preview",
    title: "Preview the post-meeting output in a more structured form",
    subtitle:
      "Use the proof page to inspect the software states behind the workflow before deciding whether it fits your style of work.",
    defaultActiveId: proofSamples[0]?.id,
    items: proofSamples.slice(0, 3),
  },
  faqPreview: {
    id: "faq-preview",
    eyebrow: "FAQ preview",
    title: "Answer the biggest objections before they slow the decision down",
    subtitle:
      "The FAQ is an objection-reduction system, not a generic knowledge base.",
    categories: faqCategories.slice(0, 3),
  },
  finalCta: {
    id: "home-final-cta",
    eyebrow: "Choose your path",
    title: "Buy directly if you are ready. Book a demo if you want a quick fit check. Wait if you need more time.",
    subtitle:
      "The site supports direct purchase, demo-assisted purchase, and re-engagement without forcing every visitor into the same path.",
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
