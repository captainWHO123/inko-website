import { HeroSection } from "@/components/sections/hero-section";
import { OutcomeCardsSection } from "@/components/sections/outcome-cards-section";
import { SplitCtaSection } from "@/components/sections/split-cta-section";
import { teamPlanInterestPage } from "@/content/fallback/future";
import { resolveHeroContent, resolveSplitCtaContent } from "@/lib/cms/mappers";
import { getTeamPlanInterestPage } from "@/lib/cms/queries";
import { getPreorderStateExperience } from "@/lib/config/preorder-state";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(teamPlanInterestPage.seo);

export default async function TeamPlanInterestPage() {
  const [{ data: page }] = await Promise.all([getTeamPlanInterestPage()]);
  const experience = getPreorderStateExperience();

  return (
    <>
      <HeroSection content={resolveHeroContent(page.hero, "team-plan-interest")} pageState={experience.state} entryPage="team-plan-interest" />
      <OutcomeCardsSection content={page.contentSection} />
      {page.finalCta ? (
        <SplitCtaSection content={resolveSplitCtaContent(page.finalCta)} pageState={experience.state} entryPage="team-plan-interest" />
      ) : null}
    </>
  );
}
