import { HeroSection } from "@/components/sections/hero-section";
import { OutcomeCardsSection } from "@/components/sections/outcome-cards-section";
import { SplitCtaSection } from "@/components/sections/split-cta-section";
import { referralPage } from "@/content/fallback/future";
import { resolveHeroContent, resolveSplitCtaContent } from "@/lib/cms/mappers";
import { getReferralPage } from "@/lib/cms/queries";
import { getPreorderStateExperience } from "@/lib/config/preorder-state";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(referralPage.seo);

export default async function ReferralPage() {
  const [{ data: page }] = await Promise.all([getReferralPage()]);
  const experience = getPreorderStateExperience();

  return (
    <>
      <HeroSection content={resolveHeroContent(page.hero, "referral")} pageState={experience.state} entryPage="referral" />
      <OutcomeCardsSection content={page.contentSection} />
      {page.finalCta ? (
        <SplitCtaSection content={resolveSplitCtaContent(page.finalCta)} pageState={experience.state} entryPage="referral" />
      ) : null}
    </>
  );
}
