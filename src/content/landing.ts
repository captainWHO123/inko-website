import clientListImage from "../assets/features/client-list.png";
import crmSyncImage from "../assets/features/crm-sync.png";
import askAdvisorImage from "../assets/features/ask-advisor.png";
import followUpEmailImage from "../assets/features/follow-up-email.png";
import captureImage from "../assets/how-to-use/capture.png";
import analyzeImage from "../assets/how-to-use/analyze.png";
import actImage from "../assets/how-to-use/act.png";
import type { FeatureSectionProps } from "../components/FeatureSection";
import type { HowToUseStep } from "../components/HowToUse";
import type { LucideIcon } from "lucide-react";
import { NotebookPen, Clock, Repeat } from "lucide-react";

export const FEATURE_SECTIONS: FeatureSectionProps[] = [
  {
    sectionId: "features",
    tag: "Pre-Conversation",
    title: "Client List",
    description: "Inko manages multiple conversation data points for each client, allowing you to quickly find your clients through the client list.",
    image: clientListImage,
    bgColor: "bg-transparent",
  },
  {
    tag: "Post-Conversation",
    title: "CRM Sync",
    description: "After the conversation, all records are continuously linked to the corresponding contact, automatically updating client info and key tags. Every interaction becomes traceable, compounding, and reusable.",
    image: crmSyncImage,
    bgColor: "bg-transparent",
  },
  {
    tag: "Post-Conversation",
    title: "Template",
    description: "Inko provides multiple analysis dimensions, allowing you to freely combine them into your own custom analysis templates.",
    bgColor: "bg-transparent",
    visualType: "template",
  },
  {
    tag: "Post-Conversation",
    title: "Ask Advisor",
    description: "Inko transforms key conversation details into actionable insights. You can continue to ask AI questions based on a single client interaction, such as 'What should I do next?', 'What is the client really worried about?', or 'How should I prepare for the next meeting?' to get specific follow-up advice.",
    image: askAdvisorImage,
    bgColor: "bg-transparent",
  },
  {
    tag: "Post-Conversation",
    title: "Follow-Up Email",
    description: "Inko can automatically generate ready-to-use follow-up email drafts based on conversation content. Professional yet friendly, it aims to reduce post-meeting friction and ensure follow-up actions actually happen.",
    image: followUpEmailImage,
    bgColor: "bg-transparent",
  },
];

export interface PainPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PAIN_POINTS: PainPoint[] = [
  {
    icon: NotebookPen,
    title: "You take notes, but never use them",
    description:
      "Scribbled notebooks, voice memos, sticky notes — none of it connects back to the right client at the right moment.",
  },
  {
    icon: Clock,
    title: "Follow-up emails take too long",
    description:
      "After a full day of client visits, writing professional follow-up emails feels like a second job. Most don't get sent at all.",
  },
  {
    icon: Repeat,
    title: "You ask the same questions twice",
    description:
      "Coming back to a client three months later and not remembering their situation kills trust faster than any competitor can.",
  },
];

export interface TestimonialData {
  quote: string;
  attribution: { role: string; location: string };
}

export const TESTIMONIAL: TestimonialData = {
  quote:
    "I used to lose at least one deal a month because I couldn't remember the details from a conversation two weeks ago. That's just not acceptable when you're managing 80+ clients.",
  attribution: {
    role: "Beta tester",
    location: "Independent insurance agent, Texas",
  },
};

export const HOW_TO_USE_STEPS: HowToUseStep[] = [
  {
    step: "1/3",
    title: "Capture",
    desc: "Click to Turn on Inko Recorder. Every Conversation is Securely Captured With Consent.",
    image: captureImage,
  },
  {
    step: "2/3",
    title: "Analyze",
    desc: "Inko Identifies Key Insights: Risk Tolerance, Family Needs, Objections, Economics Cues.",
    image: analyzeImage,
  },
  {
    step: "3/3",
    title: "Act",
    desc: "Get Auto-Generated Follow-Up Emails, Next-Step Reminders, and Client Preference Profiles.",
    image: actImage,
  },
];
