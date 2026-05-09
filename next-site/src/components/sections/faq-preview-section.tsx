import { Accordion } from "@/components/ui/accordion";
import { SecondaryButton } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import type { FaqPreviewSectionContent } from "@/types/sections";
import type { PreorderState } from "@/types/state";

interface FaqPreviewSectionProps {
  content: FaqPreviewSectionContent;
  pageState: PreorderState;
  entryPage: string;
}

export function FaqPreviewSection({
  content,
  pageState,
  entryPage,
}: FaqPreviewSectionProps) {
  return (
    <section id={content.id} className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
        <div className="mt-10 space-y-10">
          {content.categories.map((category) => (
            <div key={category.id}>
              <div className="mb-4 max-w-3xl">
                <h3 className="text-2xl font-semibold text-ink-950">{category.title}</h3>
                {category.description ? (
                  <p className="mt-2 text-sm leading-7 text-ink-700">{category.description}</p>
                ) : null}
              </div>
              <Accordion items={category.items} categoryId={category.id} pageState={pageState} />
              {category.cta ? (
                <div className="mt-4">
                  <SecondaryButton
                    href={category.cta.href}
                    external={category.cta.external}
                    analyticsEvent={category.cta.eventName}
                    analyticsContext={{
                      page_state: pageState,
                      user_path_type: category.cta.userPathType,
                      checkout_mode: category.cta.checkoutMode,
                      entry_page: entryPage,
                      location: `${category.id}-cta`,
                    }}
                  >
                    {category.cta.label}
                  </SecondaryButton>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
