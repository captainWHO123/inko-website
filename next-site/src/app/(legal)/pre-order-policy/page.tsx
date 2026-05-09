import { PageAnalytics } from "@/components/layout/page-analytics";
import { HeroSection } from "@/components/sections/hero-section";
import { PolicyDocumentSection } from "@/components/sections/policy-document-section";
import { PolicyLinksSection } from "@/components/sections/policy-links-section";
import { SplitCtaSection } from "@/components/sections/split-cta-section";
import { preorderPolicyPage } from "@/content/fallback/policies";
import {
  resolveHeroContent,
  resolvePolicyLinksSection,
  resolveSplitCtaContent,
} from "@/lib/cms/mappers";
import { getPreorderPolicyPage } from "@/lib/cms/queries";
import { getPreorderStateExperience } from "@/lib/config/preorder-state";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(preorderPolicyPage.seo);

export default async function PreOrderPolicyPage() {
  const [{ data: page }] = await Promise.all([getPreorderPolicyPage()]);
  const experience = getPreorderStateExperience();

  return (
    <>
      <PageAnalytics eventName="policy_page_view" payload={{ page_state: experience.state, location: "pre-order-policy" }} />
      <HeroSection content={resolveHeroContent(page.hero, "pre-order-policy")} pageState={experience.state} entryPage="pre-order-policy" />
      <PolicyDocumentSection
        eyebrow="Policy detail"
        title="Read the pre-order rules before the checkout decision."
        subtitle={experience.policyMessage}
        notice={page.notice}
        sections={page.sections}
      />
      {page.policyLinksSection ? <PolicyLinksSection content={resolvePolicyLinksSection(page.policyLinksSection)} /> : null}
      {page.finalCta ? <SplitCtaSection content={resolveSplitCtaContent(page.finalCta)} pageState={experience.state} entryPage="pre-order-policy" /> : null}
    </>
  );
}
