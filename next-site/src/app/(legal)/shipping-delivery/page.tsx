import { PageAnalytics } from "@/components/layout/page-analytics";
import { HeroSection } from "@/components/sections/hero-section";
import { PolicyDocumentSection } from "@/components/sections/policy-document-section";
import { PolicyLinksSection } from "@/components/sections/policy-links-section";
import { SplitCtaSection } from "@/components/sections/split-cta-section";
import { shippingDeliveryPage } from "@/content/fallback/policies";
import { resolveHeroContent, resolvePolicyLinksSection, resolveSplitCtaContent } from "@/lib/cms/mappers";
import { getShippingDeliveryPage } from "@/lib/cms/queries";
import { getPreorderStateExperience } from "@/lib/config/preorder-state";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(shippingDeliveryPage.seo);

export default async function ShippingDeliveryPage() {
  const [{ data: page }] = await Promise.all([getShippingDeliveryPage()]);
  const experience = getPreorderStateExperience();

  return (
    <>
      <PageAnalytics eventName="policy_page_view" payload={{ page_state: experience.state, location: "shipping-delivery" }} />
      <HeroSection content={resolveHeroContent(page.hero, "shipping-delivery")} pageState={experience.state} entryPage="shipping-delivery" />
      <PolicyDocumentSection
        eyebrow="Policy detail"
        title="Delivery expectations should be visible before the order is placed."
        subtitle={experience.policyMessage}
        sections={page.sections}
      />
      {page.policyLinksSection ? <PolicyLinksSection content={resolvePolicyLinksSection(page.policyLinksSection)} /> : null}
      {page.finalCta ? <SplitCtaSection content={resolveSplitCtaContent(page.finalCta)} pageState={experience.state} entryPage="shipping-delivery" /> : null}
    </>
  );
}
