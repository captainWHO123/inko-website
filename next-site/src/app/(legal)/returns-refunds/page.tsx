import { PageAnalytics } from "@/components/layout/page-analytics";
import { HeroSection } from "@/components/sections/hero-section";
import { PolicyDocumentSection } from "@/components/sections/policy-document-section";
import { PolicyLinksSection } from "@/components/sections/policy-links-section";
import { SplitCtaSection } from "@/components/sections/split-cta-section";
import { returnsRefundsPage } from "@/content/fallback/policies";
import { resolveHeroContent, resolvePolicyLinksSection, resolveSplitCtaContent } from "@/lib/cms/mappers";
import { getReturnsRefundsPage } from "@/lib/cms/queries";
import { getPreorderStateExperience } from "@/lib/config/preorder-state";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(returnsRefundsPage.seo);

export default async function ReturnsRefundsPage() {
  const [{ data: page }] = await Promise.all([getReturnsRefundsPage()]);
  const experience = getPreorderStateExperience();

  return (
    <>
      <PageAnalytics eventName="policy_page_view" payload={{ page_state: experience.state, location: "returns-refunds" }} />
      <HeroSection content={resolveHeroContent(page.hero, "returns-refunds")} pageState={experience.state} entryPage="returns-refunds" />
      <PolicyDocumentSection
        eyebrow="Policy detail"
        title="Make refund and replacement expectations visible before purchase."
        subtitle={experience.policyMessage}
        sections={page.sections}
      />
      {page.policyLinksSection ? <PolicyLinksSection content={resolvePolicyLinksSection(page.policyLinksSection)} /> : null}
      {page.finalCta ? <SplitCtaSection content={resolveSplitCtaContent(page.finalCta)} pageState={experience.state} entryPage="returns-refunds" /> : null}
    </>
  );
}
