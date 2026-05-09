import { PageAnalytics } from "@/components/layout/page-analytics";
import { HeroSection } from "@/components/sections/hero-section";
import { PolicyDocumentSection } from "@/components/sections/policy-document-section";
import { PolicyLinksSection } from "@/components/sections/policy-links-section";
import { SplitCtaSection } from "@/components/sections/split-cta-section";
import { privacyPolicyPage } from "@/content/fallback/policies";
import { resolveHeroContent, resolvePolicyLinksSection, resolveSplitCtaContent } from "@/lib/cms/mappers";
import { getPrivacyPolicyPage } from "@/lib/cms/queries";
import { getPreorderStateExperience } from "@/lib/config/preorder-state";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(privacyPolicyPage.seo);

export default async function PrivacyPolicyPage() {
  const [{ data: page }] = await Promise.all([getPrivacyPolicyPage()]);
  const experience = getPreorderStateExperience();

  return (
    <>
      <PageAnalytics eventName="policy_page_view" payload={{ page_state: experience.state, location: "privacy-policy" }} />
      <HeroSection content={resolveHeroContent(page.hero, "privacy-policy")} pageState={experience.state} entryPage="privacy-policy" />
      <PolicyDocumentSection
        eyebrow="Policy detail"
        title="Launch-ready privacy copy can plug into this structure."
        subtitle={experience.policyMessage}
        sections={page.sections}
      />
      {page.policyLinksSection ? <PolicyLinksSection content={resolvePolicyLinksSection(page.policyLinksSection)} /> : null}
      {page.finalCta ? <SplitCtaSection content={resolveSplitCtaContent(page.finalCta)} pageState={experience.state} entryPage="privacy-policy" /> : null}
    </>
  );
}
