import { PageAnalytics } from "@/components/layout/page-analytics";
import { HeroSection } from "@/components/sections/hero-section";
import { PolicyDocumentSection } from "@/components/sections/policy-document-section";
import { PolicyLinksSection } from "@/components/sections/policy-links-section";
import { SplitCtaSection } from "@/components/sections/split-cta-section";
import { termsPage } from "@/content/fallback/policies";
import { resolveHeroContent, resolvePolicyLinksSection, resolveSplitCtaContent } from "@/lib/cms/mappers";
import { getTermsPage } from "@/lib/cms/queries";
import { getPreorderStateExperience } from "@/lib/config/preorder-state";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(termsPage.seo);

export default async function TermsPage() {
  const [{ data: page }] = await Promise.all([getTermsPage()]);
  const experience = getPreorderStateExperience();

  return (
    <>
      <PageAnalytics eventName="policy_page_view" payload={{ page_state: experience.state, location: "terms" }} />
      <HeroSection content={resolveHeroContent(page.hero, "terms")} pageState={experience.state} entryPage="terms" />
      <PolicyDocumentSection
        eyebrow="Policy detail"
        title="Launch-ready terms can plug into this structure without refactoring the site."
        subtitle={experience.policyMessage}
        sections={page.sections}
      />
      {page.policyLinksSection ? <PolicyLinksSection content={resolvePolicyLinksSection(page.policyLinksSection)} /> : null}
      {page.finalCta ? <SplitCtaSection content={resolveSplitCtaContent(page.finalCta)} pageState={experience.state} entryPage="terms" /> : null}
    </>
  );
}
