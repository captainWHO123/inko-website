import Link from "next/link";

import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils/cn";
import type { PolicyLinksSectionContent } from "@/types/sections";

interface PolicyLinksSectionProps {
  content: PolicyLinksSectionContent;
}

export function PolicyLinksSection({ content }: PolicyLinksSectionProps) {
  return (
    <section id={content.id} className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {content.items.map((item) => (
            <Card key={item.href} className={cn(item.highlight && "ring-2 ring-amber-200")}>
              <h3 className="text-xl font-semibold text-ink-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-700">{item.description}</p>
              <Link
                href={item.href}
                className="mt-5 inline-flex text-sm font-semibold text-teal-900 transition hover:text-teal-700"
              >
                Read policy
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
