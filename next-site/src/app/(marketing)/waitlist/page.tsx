import { HeroSection } from "@/components/sections/hero-section";
import { DemoFormSection } from "@/components/sections/demo-form-section";
import { OutcomeCardsSection } from "@/components/sections/outcome-cards-section";
import { ReframeSection } from "@/components/sections/reframe-section";
import { SplitCtaSection } from "@/components/sections/split-cta-section";
import { waitlistPage } from "@/content/fallback/future";
import {
  resolveDemoFormContent,
  resolveHeroContent,
  resolveSplitCtaContent,
} from "@/lib/cms/mappers";
import { getWaitlistPage } from "@/lib/cms/queries";
import { getPreorderStateExperience } from "@/lib/config/preorder-state";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(waitlistPage.seo);

export default async function WaitlistPage() {
  const [{ data: page }] = await Promise.all([getWaitlistPage()]);
  const experience = getPreorderStateExperience();

  return (
    <>
      <HeroSection content={resolveHeroContent(page.hero, "waitlist")} pageState={experience.state} entryPage="waitlist" />
      <OutcomeCardsSection content={page.benefitsSection} />
      <DemoFormSection
        content={resolveDemoFormContent(page.form)}
        pageState={experience.state}
        endpoint="/api/waitlist"
        submitEventName="waitlist_submit"
      />
      <ReframeSection content={page.reassurance} />
      <SplitCtaSection content={resolveSplitCtaContent(page.finalCta)} pageState={experience.state} entryPage="waitlist" />
    </>
  );
}
