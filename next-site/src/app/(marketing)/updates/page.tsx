import { HeroSection } from "@/components/sections/hero-section";
import { OutcomeCardsSection } from "@/components/sections/outcome-cards-section";
import { SplitCtaSection } from "@/components/sections/split-cta-section";
import { updatesPage } from "@/content/fallback/future";
import { resolveHeroContent, resolveSplitCtaContent } from "@/lib/cms/mappers";
import { getUpdatesPage } from "@/lib/cms/queries";
import { getPreorderStateExperience } from "@/lib/config/preorder-state";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(updatesPage.seo);

export default async function UpdatesPage() {
  const [{ data: page }] = await Promise.all([getUpdatesPage()]);
  const experience = getPreorderStateExperience();

  return (
    <>
      <HeroSection content={resolveHeroContent(page.hero, "updates")} pageState={experience.state} entryPage="updates" />
      <OutcomeCardsSection content={page.contentSection} />
      {page.finalCta ? (
        <SplitCtaSection content={resolveSplitCtaContent(page.finalCta)} pageState={experience.state} entryPage="updates" />
      ) : null}
    </>
  );
}
