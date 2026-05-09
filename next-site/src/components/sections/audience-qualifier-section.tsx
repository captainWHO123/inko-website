import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import type { AudienceQualifierSectionContent } from "@/types/sections";

interface AudienceQualifierSectionProps {
  content: AudienceQualifierSectionContent;
}

export function AudienceQualifierSection({ content }: AudienceQualifierSectionProps) {
  return (
    <section id={content.id} className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
        <div className="mt-10 grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal className="h-full" delay={20}>
            <div className="h-full rounded-[32px] border border-[#31495C] bg-[linear-gradient(145deg,#172838_0%,#1a2c3d_56%,#203649_100%)] p-6 text-white shadow-[0_34px_72px_-38px_rgba(16,25,34,0.48)] md:p-8">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal-100">
              Best-fit view
            </p>
            <p className="mt-5 font-serif text-3xl leading-[1.02] tracking-[-0.04em] text-white md:text-[2.5rem]">
              The right buyer should recognize their workflow quickly.
            </p>
            {content.footnote ? (
              <p className="mt-5 max-w-md text-sm leading-7 text-white/72">{content.footnote}</p>
            ) : null}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="overflow-hidden rounded-[32px] border border-white/84 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,238,0.92))] shadow-[0_22px_42px_-30px_rgba(16,25,34,0.16)]">
            <div className="grid gap-px bg-ink-200/65 md:grid-cols-3">
              {content.items.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 70}
                  className="relative bg-white/92 px-5 py-6 md:min-h-[17rem] md:px-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-teal-300/60 bg-teal-50 text-sm font-semibold text-teal-900">
                      {index + 1}
                    </span>
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-teal-800">
                      Fits if
                    </p>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-ink-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-7 text-ink-700">{item.body}</p>
                </Reveal>
              ))}
            </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
