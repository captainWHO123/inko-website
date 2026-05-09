import Link from "next/link";

import { V4ProofWorkspaceShowcase } from "@/components/v4/proof-workspace-showcase";
import { proofPage } from "@/content/fallback/proof";
import { resolveHeroContent, resolveSplitCtaContent } from "@/lib/cms/mappers";
import { getProofPage } from "@/lib/cms/queries";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(proofPage.seo);

function StatCard({
  value,
  label,
  tone = "light",
  icon,
  className = "",
}: {
  value?: string;
  label: string;
  tone?: "light" | "dark";
  icon?: string;
  className?: string;
}) {
  return (
    <div
      className={[
        "flex min-h-[13rem] flex-col justify-end rounded-[1.75rem] p-8",
        tone === "dark"
          ? "bg-[#0f5a58] text-white shadow-[0_26px_58px_-38px_rgba(15,90,88,0.58)]"
          : "bg-[#ece8df] text-ink-950",
        className,
      ].join(" ")}
    >
      {value ? (
        <p className="font-serif text-5xl italic leading-none tracking-[-0.05em] md:text-6xl">
          {value}
        </p>
      ) : (
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/60 text-xl text-[#184f53]">
          {icon}
        </div>
      )}
      <p
        className={[
          "mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.22em] leading-6",
          tone === "dark" ? "text-white/72" : "text-ink-600",
        ].join(" ")}
      >
        {label}
      </p>
    </div>
  );
}

export default async function ProofPage() {
  const [{ data: page }] = await Promise.all([getProofPage()]);

  const hero = resolveHeroContent(page.hero, "proof");
  const finalCta = resolveSplitCtaContent(page.finalCta);
  const supportPoints = page.supportReassurance.points.slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden px-4 pb-14 pt-16 md:px-6 md:pb-20 md:pt-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_50%_-10%,rgba(183,236,240,0.34),transparent_62%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-5xl leading-[0.98] tracking-[-0.05em] text-primary md:text-7xl">
              {hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink-700 md:text-lg">
              {hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {hero.highlights?.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-ink-800">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#184f53] text-[0.68rem] font-bold text-white">
                    •
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 text-center">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal-800/68">
              Functional Proof
            </p>
            <div className="mx-auto mt-3 h-px w-14 bg-primary-container/30" />
          </div>

          <div className="mt-8 md:mt-10">
            <V4ProofWorkspaceShowcase samples={page.proofSamples.items} />
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-[#ffddbb] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#5a3613]">
              {page.workflowFit.eyebrow}
            </span>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.02] tracking-[-0.04em] text-primary md:text-6xl">
              {page.workflowFit.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-700">
              {page.workflowFit.lead}
            </p>

            <div className="mt-12 space-y-8">
              {supportPoints.map((point) => (
                <div key={point.title} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] bg-[#ece8df] text-xl text-primary">
                    {point.title === supportPoints[0]?.title ? "S" : "C"}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{point.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink-700">{point.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatCard value="98%" label="Reduction in manual data entry" className="row-span-2 min-h-[17rem]" />
            <div className="space-y-4 pt-12">
              <StatCard value="10k+" label="Meetings summarized per month" tone="dark" />
              <StatCard icon="AI" label="AI powered reasoning" className="min-h-[10.5rem]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary px-4 py-24 md:px-6 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl leading-[1.02] tracking-[-0.04em] text-white md:text-6xl">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#b7ecf0]/84">
            {finalCta.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={finalCta.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary transition hover:bg-[#dff5f6]"
            >
              {finalCta.primaryCta.label}
            </Link>
            <Link
              href={finalCta.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-[#9cd0d4]/40 px-8 py-4 text-sm font-semibold text-[#d8f3f4] transition hover:bg-white/8"
            >
              {finalCta.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
