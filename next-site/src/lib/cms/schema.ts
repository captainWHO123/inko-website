import type { CmsCollectionSchema } from "@/types/cms";

export const cmsSchema: CmsCollectionSchema[] = [
  {
    name: "siteSettings",
    description: "Global brand, contact, CTA, and commercial defaults.",
    fields: [
      { name: "brandName", type: "string", description: "Public-facing brand name." },
      { name: "supportEmail", type: "string", description: "Primary support contact." },
      { name: "checkoutUrl", type: "string", description: "External checkout destination." },
      { name: "checkoutMode", type: "enum", description: "Whether checkout is live or placeholder-based." },
      { name: "defaultPreorderState", type: "enum", description: "Initial operational site state." },
    ],
  },
  {
    name: "navigationSettings",
    description: "Top navigation and footer groups.",
    fields: [
      { name: "primary", type: "array", description: "Primary navigation items." },
      { name: "footer", type: "array", description: "Footer navigation groups." },
    ],
  },
  {
    name: "homePage",
    description: "Home page sections in semantic order.",
    fields: [
      { name: "hero", type: "object", description: "Hero content block." },
      { name: "workflowSection", type: "object", description: "Workflow explainer section." },
      { name: "finalCta", type: "object", description: "Homepage closing CTA cluster." },
    ],
  },
  {
    name: "faqPage",
    description: "Objection-reduction categories and items.",
    fields: [
      { name: "categories", type: "array", description: "FAQ categories." },
      { name: "finalCta", type: "object", description: "Closing CTA block." },
    ],
  },
  {
    name: "policyPages",
    description: "Legal/support policy documents with long-form sections.",
    fields: [
      { name: "hero", type: "object", description: "Page hero." },
      { name: "sections", type: "array", description: "Long-form policy sections." },
      { name: "policyLinksSection", type: "object", description: "Related policy links." },
    ],
  },
];
