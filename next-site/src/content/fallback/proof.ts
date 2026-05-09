import type { ProofPageDocument } from "@/types/content";
import type { ProofSample } from "@/types/sections";

export const proofSamples: ProofSample[] = [
  {
    id: "meeting-summary-sample",
    label: "Summary",
    title: "Annual Policy Review",
    surfaceKind: "summary",
    workspaceTabs: ["Summary", "Open items", "Actions"],
    statusLabel: "Summary ready",
    preview: "Session with Alex & Sarah Richardson",
    detail: [
      "Discussed increasing term life coverage from the current base to a stronger family-protection position.",
      "Legacy planning for the family business came up, with interest in a trust structure and cleaner beneficiary design.",
      "Cash reserves still support a stronger protection layer without disrupting the monthly planning rhythm.",
    ],
    detailHeadings: ["Meeting objective", "Advisor takeaway", "Open items"],
    tags: ["Post-meeting summary", "Advisor workflow", "Review state"],
    structuredFields: [
      { label: "Priority", value: "High" },
      { label: "Next follow-up", value: "Review scenarios next Thursday" },
      { label: "Advisor", value: "Coverage review owner" },
      { label: "Consent state", value: "Confirmed in meeting" },
    ],
    inspectorTitle: "Household",
    inspectorFields: [
      { label: "New member", value: "Leo Richardson (Age 0)" },
      { label: "Employment", value: "Sarah promoted to partner" },
      { label: "Review state", value: "Ready now" },
    ],
    actionItems: [
      "Send quote for the upgraded term life layer",
      "Schedule intro call with the estate planning attorney",
      "Recalculate yield projections before the next review",
    ],
    ctaLabel: "Open view",
  },
  {
    id: "follow-up-sample",
    label: "Follow-up",
    title: "Term Life Strategy Draft",
    surfaceKind: "follow_up",
    workspaceTabs: ["Compose", "Preview", "Send"],
    statusLabel: "Draft prepared",
    preview:
      "Thank you for the conversation today. I am sending two options that keep family protection front and center while staying aligned with the monthly budget we reviewed.",
    detail: [
      "Recap the agreed protection priority and confirm the missing information required for the quote package.",
      "Translate the meeting into a message the client can respond to quickly without re-reading notes from the appointment.",
      "Keep the draft ready for advisor review and send without sounding generic or underprepared.",
    ],
    detailHeadings: ["Draft direction", "Client-facing structure", "Workflow benefit"],
    tags: ["Follow-up generation", "Client-ready", "Send state"],
    structuredFields: [
      { label: "Recipient", value: "alex.richardson@clientmail.com, sarah.rich@lawfirm.com" },
      { label: "Tone", value: "Professional and concise" },
      { label: "Call to action", value: "Reply with preferred review time" },
      { label: "Delivery", value: "Advisor review then send" },
      { label: "Channel", value: "Email draft" },
    ],
    inspectorTitle: "Send settings",
    inspectorFields: [
      { label: "Send state", value: "Needs final advisor review" },
      { label: "Reply path", value: "Client selects review time" },
      { label: "Window", value: "Within 24 to 48 hours" },
    ],
    actionItems: [
      "Send the draft within 24 to 48 hours",
      "Ask the client to confirm the preferred review window",
      "Attach the two scenarios discussed in the meeting",
    ],
    ctaLabel: "Open view",
  },
  {
    id: "client-memory-sample",
    label: "Client memory",
    title: "Alex Richardson",
    surfaceKind: "client_memory",
    workspaceTabs: ["Profile", "Preferences", "Continuity"],
    statusLabel: "Profile preserved",
    preview:
      "Prefers high-level strategic overviews by email, followed by deeper in-person review. Values direct comparisons and concise written follow-up.",
    detail: [
      "Carry forward known objections, preferences, and household context without rediscovering them every time.",
      "Keep decision timing and previous commitments attached to the relationship, not buried in old notes.",
      "Show up to the next meeting prepared instead of reconstructing context from scratch.",
    ],
    detailHeadings: ["Continuity", "What stays attached", "Advisor benefit"],
    tags: ["Family protection", "Tax efficiency", "Legacy trust"],
    structuredFields: [
      { label: "Status", value: "Married, 2 children" },
      { label: "Residence", value: "Oakville, ON" },
      { label: "Business", value: "Proprietary technology practice" },
      { label: "Decision style", value: "Wants comparison before committing" },
      { label: "Communication cue", value: "Prefers concise written recap after meetings" },
    ],
    inspectorTitle: "Persistent cues",
    inspectorBody:
      "Known preferences and concerns stay attached to the relationship so the next meeting starts with continuity, not reconstruction.",
    actionItems: [
      "Keep future explanations simple and direct",
      "Frame options against monthly affordability first",
      "Bring comparison scenarios to the next review conversation",
    ],
    ctaLabel: "Open view",
  },
  {
    id: "crm-output-sample",
    label: "CRM handoff",
    title: "Salesforce Integration",
    surfaceKind: "crm_handoff",
    workspaceTabs: ["Fields", "Owner", "Deadline"],
    statusLabel: "Queue ready",
    preview:
      "Activity log updated with the meeting summary, household changes, and the next advisor-owned action inside the CRM record.",
    detail: [
      "Turn the meeting into a clean record that can support follow-up, compliance, and team coordination.",
      "Shape the conversation into something the rest of the workflow can use immediately.",
      "Keep the handoff operational instead of retyping details into multiple places.",
    ],
    detailHeadings: ["Record handoff", "Workflow value", "Why the structure matters"],
    tags: ["CRM-ready", "Structured data", "Operational state"],
    structuredFields: [
      { label: "Meeting date", value: "2024-10-24" },
      { label: "Need category", value: "High-priority life" },
      { label: "Urgency", value: "Immediate" },
      { label: "Next action owner", value: "Advisor" },
      { label: "Follow-up due", value: "Within 48 hours" },
      { label: "Sync target", value: "Advisor CRM record" },
    ],
    inspectorTitle: "CRM destination fields",
    inspectorFields: [
      { label: "Activity Date", value: "Mapped" },
      { label: "Client Need Type", value: "Mapped" },
      { label: "Priority Level", value: "Mapped" },
    ],
    actionItems: [
      "Update the CRM with household stage and need category",
      "Assign the advisor as next action owner",
      "Set a follow-up deadline within 48 hours",
    ],
    ctaLabel: "Open view",
  },
];

export const proofPage: ProofPageDocument = {
  seo: {
    title: "Proof | Inko",
    description:
      "Inspect the post-meeting workspace, follow-up state, client memory, and CRM-ready handoff inside Inko.",
    path: "/proof",
    keywords: ["insurance advisor workflow", "meeting summary workspace", "crm-ready output"],
  },
  hero: {
    id: "proof-hero",
    eyebrow: "Proof",
    badge: "Evidence over hype",
    title: "Inspect the workspace at work.",
    subtitle:
      "See pen-sized capture turn into summary, follow-up, memory, and CRM-ready output.",
    highlights: [
      "Post-meeting review",
      "Send-ready follow-up",
      "Persistent client memory",
      "Structured CRM handoff",
    ],
    aside: {
      title: "Workspace states",
      body: "A product-like view of the states that matter after the meeting ends.",
      device: {
        label: "How capture starts",
        title: "Pen-sized hardware initiates the workflow.",
        body: "One click begins capture. The software turns the meeting into reviewable and operational post-meeting work.",
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
        ],
        media: {
          type: "image",
          src: "/reference/inko-pen-hardware.webp",
          alt: "Inko pen-sized recorder hardware render",
        },
        calloutLabel: "Tap once to record",
      },
      bullets: [
        "Post-meeting review",
        "Send-ready follow-up",
        "Persistent client memory",
        "Structured CRM handoff",
      ],
      stageMedia: {
        type: "image",
        src: "/reference/proof-v2-capability-board.webp",
        alt: "Inko V2 platform board showing advisor prompts, guidance, and feature capability panels",
      },
    },
  },
  proofSamples: {
    id: "proof-samples",
    eyebrow: "Product states",
    title: "From captured conversation to usable post-meeting work",
    subtitle:
      "Inspect the software states the workflow produces after capture.",
    defaultActiveId: proofSamples[0]?.id,
    items: proofSamples,
  },
  workflowFit: {
    id: "workflow-fit",
    eyebrow: "Built for Compliance",
    title: "Naturally fits your existing workflow.",
    subtitle:
      "The workflow fits after the meeting, not on top of it.",
    lead:
      "Inko does not change how you advise. It remembers how you did it, protects the data at the source, and syncs only into the secure environment you already work from.",
    comparisons: [
      {
        title: "Bank-level security",
        body: "End-to-end encryption from pen to cloud, built for advisors who cannot afford loose post-meeting handling.",
      },
      {
        title: "Concierge support",
        body: "White-glove onboarding and workflow consulting so the system fits your current process instead of fighting it.",
      },
    ],
    points: [
      "Better organized follow-up",
      "Less reliance on memory after an in-person meeting",
      "More consistent handoff into your records",
    ],
  },
  supportReassurance: {
    id: "support-reassurance",
    eyebrow: "Decision support",
    title: "The workflow stays usable under real advisory pressure.",
    subtitle:
      "Security, continuity, and onboarding need to feel as considered as the product itself.",
    points: [
      {
        title: "Bank-Level Security",
        body: "End-to-end encryption from pen to cloud keeps the capture chain protected before it ever reaches the review workflow.",
      },
      {
        title: "24/7 Concierge Support",
        body: "White-glove onboarding and workflow consulting help the system land cleanly inside the process you already run.",
      },
      {
        title: "Wait if you need to",
        body: "The site supports a re-engagement path for visitors who are interested but not ready today.",
      },
    ],
  },
  finalCta: {
    id: "proof-final-cta",
    eyebrow: "Next step",
    title: "Ready to evolve your practice?",
    subtitle: "Join the waitlist for the Inko Starter Kit. First batch shipping Spring 2026.",
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
