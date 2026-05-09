import { PageAnalytics } from "@/components/layout/page-analytics";
import { HeroSection } from "@/components/sections/hero-section";
import { PolicyDocumentSection } from "@/components/sections/policy-document-section";
import { PolicyLinksSection } from "@/components/sections/policy-links-section";
import { SplitCtaSection } from "@/components/sections/split-cta-section";
import { consentNoticePage } from "@/content/fallback/policies";
import { resolveHeroContent, resolvePolicyLinksSection, resolveSplitCtaContent } from "@/lib/cms/mappers";
import { getConsentNoticePage } from "@/lib/cms/queries";
import { getPreorderStateExperience } from "@/lib/config/preorder-state";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(consentNoticePage.seo);

export default async function ConsentRecordingNoticePage() {
  const [{ data: page }] = await Promise.all([getConsentNoticePage()]);
  const experience = getPreorderStateExperience();

  return (
    <>
      <PageAnalytics eventName="policy_page_view" payload={{ page_state: experience.state, location: "consent-recording-notice" }} />
      <HeroSection content={resolveHeroContent(page.hero, "consent-recording-notice")} pageState={experience.state} entryPage="consent-recording-notice" />
      <PolicyDocumentSection
        eyebrow="Policy detail"
        title="This product does not replace your legal responsibility."
        subtitle={experience.policyMessage}
        notice={page.notice}
        sections={page.sections}
      />
      {page.policyLinksSection ? <PolicyLinksSection content={resolvePolicyLinksSection(page.policyLinksSection)} /> : null}
      {page.finalCta ? <SplitCtaSection content={resolveSplitCtaContent(page.finalCta)} pageState={experience.state} entryPage="consent-recording-notice" /> : null}
    </>
  );
}
