import { HeroSection } from "@/components/sections/hero-section";
import { OutcomeCardsSection } from "@/components/sections/outcome-cards-section";
import { ReframeSection } from "@/components/sections/reframe-section";
import { SplitCtaSection } from "@/components/sections/split-cta-section";
import { contactPage } from "@/content/fallback/future";
import { resolveHeroContent, resolveSplitCtaContent } from "@/lib/cms/mappers";
import { getContactPage } from "@/lib/cms/queries";
import { getPreorderStateExperience } from "@/lib/config/preorder-state";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(contactPage.seo);

export default async function ContactPage() {
  const [{ data: page }] = await Promise.all([getContactPage()]);
  const experience = getPreorderStateExperience();

  return (
    <>
      <HeroSection content={resolveHeroContent(page.hero, "contact")} pageState={experience.state} entryPage="contact" />
      <OutcomeCardsSection content={page.contentSection} pageState={experience.state} entryPage="contact" />
      {page.supportSection ? <ReframeSection content={page.supportSection} /> : null}
      {page.finalCta ? (
        <SplitCtaSection content={resolveSplitCtaContent(page.finalCta)} pageState={experience.state} entryPage="contact" />
      ) : null}
    </>
  );
}
