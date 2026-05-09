import { proofSamples } from "@/content/fallback/proof";
import type { HowItWorksPageDocument } from "@/types/content";

export const howItWorksPage: HowItWorksPageDocument = {
  seo: {
    title: "How It Works | Inko",
    description:
      "Understand Inko as a workflow system for meeting capture, follow-up, client memory, and CRM-ready output.",
    path: "/how-it-works",
    keywords: ["how inko works", "advisor workflow", "post-meeting system"],
  },
  hero: {
    id: "how-hero",
    eyebrow: "How it works",
    badge: "Workflow first",
    title: "Explain the workflow, not just the feature list.",
    subtitle:
      "Inko is meant to make the advisor understand how meeting capture connects to better post-meeting execution.",
  },
  overview: {
    id: "how-overview",
    eyebrow: "Overview",
    title: "The job is to reduce post-meeting admin and missed details.",
    subtitle:
      "That means focusing on the transition from conversation to summary, follow-up, memory, and structured output.",
    points: [
      {
        title: "Before",
        body: "Continuity matters because the next meeting starts before you sit down with the client again.",
      },
      {
        title: "During",
        body: "Capture matters because recall is fragile and note-taking can disrupt a professional conversation.",
      },
      {
        title: "After",
        body: "Execution matters because that is where organization, responsiveness, and CRM pressure show up.",
      },
    ],
  },
  beforeMeeting: {
    id: "before-meeting",
    eyebrow: "Before the meeting",
    title: "Prepare around continuity, not guesswork.",
    subtitle:
      "The workflow should help the advisor remember context, existing priorities, and unresolved questions before the next conversation begins.",
    steps: [
      {
        id: "before-context",
        title: "Review existing context",
        body: "Previous conversations, known concerns, and open questions should be easy to recover before the meeting starts.",
        outcome: "Less relearning",
      },
      {
        id: "before-focus",
        title: "Enter with a clearer follow-up goal",
        body: "The advisor should know what needs to be clarified, confirmed, or advanced in the next conversation.",
        outcome: "More focused discussion",
      },
    ],
  },
  duringMeeting: {
    id: "during-meeting",
    eyebrow: "During the meeting",
    title: "Stay present while the meeting is captured.",
    subtitle:
      "The goal is not to turn the meeting into a software demo. The goal is to let the advisor focus on the client.",
    steps: [
      {
        id: "during-capture",
        title: "Capture the conversation",
        body: "The meeting is captured so the advisor is not relying only on memory later.",
        outcome: "Better meeting recall",
      },
      {
        id: "during-signal",
        title: "Preserve decision-relevant detail",
        body: "Important constraints, objections, preferences, and next-step signals should survive the conversation.",
        outcome: "Stronger post-meeting signal",
      },
    ],
  },
  afterMeeting: {
    id: "after-meeting",
    eyebrow: "After the meeting",
    title: "Convert the conversation into usable work quickly.",
    subtitle:
      "This is where the advisor feels the difference: less reconstruction, clearer follow-up, and cleaner records.",
    steps: [
      {
        id: "after-summary",
        title: "Generate a summary",
        body: "A clear recap helps the advisor decide what matters, what changed, and what should happen next.",
        outcome: "Faster review",
      },
      {
        id: "after-followup",
        title: "Draft the follow-up",
        body: "The system should reduce the blank-page work involved in writing a professional follow-up.",
        outcome: "Quicker client response",
      },
      {
        id: "after-structure",
        title: "Produce structured output",
        body: "Key fields and action items should be easier to move into the advisor’s workflow and record-keeping process.",
        outcome: "Lower CRM friction",
      },
    ],
  },
  outputGallery: {
    id: "output-gallery",
    eyebrow: "What output looks like",
    title: "Output examples explain the workflow better than a technical feature dump.",
    subtitle:
      "The samples below are representative of the kind of post-meeting outputs the workflow is designed to support.",
    items: proofSamples,
  },
  valueSection: {
    id: "value-section",
    eyebrow: "Why it matters",
    title: "The value is less admin drag and more reliable follow-through.",
    subtitle:
      "Advisors do not need more complexity after the meeting. They need a cleaner path from conversation to action.",
    lead:
      "When the workflow fits, the advisor feels more organized, more responsive, and less likely to miss the detail that mattered in the room.",
    points: [
      "Less dependence on memory after a packed meeting day",
      "Faster client-facing follow-up",
      "Cleaner structured record for the next conversation",
    ],
  },
  finalCta: {
    id: "how-final-cta",
    eyebrow: "Decision support",
    title: "If the workflow matches how you work, take the next step that feels right.",
    subtitle: "See the price directly or book a demo if you want a guided walkthrough first.",
    primaryCta: {
      label: "See Pricing",
      href: "/pricing",
    },
    secondaryCta: {
      label: "Book a Demo",
      href: "/book-demo",
    },
  },
};
