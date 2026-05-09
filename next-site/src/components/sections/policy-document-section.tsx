import { Card } from "@/components/ui/card";
import { NoticeBar } from "@/components/ui/notice-bar";
import { SectionHeader } from "@/components/ui/section-header";
import type { LongformSection, NoticeBannerContent } from "@/types/sections";

interface PolicyDocumentSectionProps {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  notice?: NoticeBannerContent;
  sections: LongformSection[];
}

export function PolicyDocumentSection({
  title,
  eyebrow,
  subtitle,
  notice,
  sections,
}: PolicyDocumentSectionProps) {
  return (
    <section className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
        {notice ? <NoticeBar notice={notice} className="mt-8" /> : null}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {sections.map((section, index) => (
            <Card key={section.title} className="relative overflow-hidden border-ink-200/80 bg-white">
              <div className="absolute inset-x-0 top-0 h-1 bg-teal-300/80" />
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface-1 text-sm font-semibold text-teal-900">
                  {index + 1}
                </span>
                <h2 className="text-xl font-semibold text-ink-950">{section.title}</h2>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-7 text-ink-700">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.items?.length ? (
                <ul className="mt-5 space-y-2 text-sm leading-7 text-ink-700">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-teal-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
