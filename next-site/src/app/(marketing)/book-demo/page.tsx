import {
  EditorialActionRow,
  EditorialMetricCard,
  EditorialPanel,
  EditorialQuote,
  EditorialSection,
} from "@/components/editorial/primitives";
import { DemoRequestForm } from "@/components/editorial/demo-request-form";
import { demoPage } from "@/content/fallback/demo";
import {
  resolveDemoFormContent,
  resolveHeroContent,
  resolveSplitCtaContent,
} from "@/lib/cms/mappers";
import { getDemoPage } from "@/lib/cms/queries";
import { getPreorderStateExperience } from "@/lib/config/preorder-state";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(demoPage.seo);

const trustMarks = ["FORBES", "LINCOLN", "EUREKA", "VENTURE"];

const performanceMetrics = [
  {
    value: "99.8%",
    label: "Transcription accuracy",
    body: "Engineered to hold up around dense advisor vocabulary and compliance-heavy conversations.",
  },
  {
    value: "4.5 hrs",
    label: "Weekly time reclaimed",
    body: "Average hours recovered from manual recap, follow-up drafting, and CRM cleanup.",
  },
  {
    value: "Zero",
    label: "Meeting interruptions",
    body: "No visible bot joins, no awkward prompts, and no extra choreography during the conversation.",
  },
];

function HeroTitle({ title }: { title: string }) {
  const [leading, trailing = ""] = title.split(" automate");

  return (
    <h1 className="font-serif text-5xl leading-[1.02] tracking-[-0.04em] text-ink-950 md:text-7xl">
      {leading}
      {" "}
      <span className="italic font-normal">automate</span>
      {trailing}
    </h1>
  );
}

export default async function BookDemoPage() {
  const [{ data: page }] = await Promise.all([getDemoPage()]);
  const experience = getPreorderStateExperience();

  const hero = resolveHeroContent(page.hero, "book-demo");
  const form = resolveDemoFormContent(page.form);
  const alternateCta = resolveSplitCtaContent(page.alternateCta);

  return (
    <>
      <EditorialSection className="overflow-hidden bg-[radial-gradient(circle_at_50%_-8%,rgba(183,236,240,0.34),transparent_44%),linear-gradient(180deg,#f7f2e8_0%,#f4efe6_100%)] pb-20 pt-10 md:pt-14">
        <div className="grid items-start gap-12 lg:grid-cols-[0.44fr_0.56fr]">
          <div className="pt-6">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-teal-800/76">
              {hero.eyebrow}
            </p>
            <div className="mt-6 max-w-xl">
              <HeroTitle title={hero.title} />
            </div>
            <p className="mt-8 max-w-md text-lg leading-8 text-ink-700">{hero.subtitle}</p>

            <div className="mt-12 grid gap-7">
              {page.whoItsFor.items.slice(0, 2).map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/5 bg-white shadow-[0_20px_36px_-30px_rgba(16,24,32,0.28)]">
                    <span className="text-sm font-semibold text-teal-800">+</span>
                  </div>
                  <div className="max-w-md">
                    <h2 className="text-lg font-semibold tracking-[-0.02em] text-ink-950">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-ink-700">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <EditorialQuote
              quote={page.reassurance.lead}
              label={page.reassurance.eyebrow}
              tone="light"
              className="mt-14 max-w-xl bg-white/54"
            />
          </div>

          <DemoRequestForm
            content={form}
            pageState={experience.state}
            endpoint="/api/demo"
            startEventName="demo_form_start"
            submitEventName="demo_form_submit"
            statusLabel="Demo requests active"
            footerNote="SSL encrypted intake. We only use your answers to shape a more useful walkthrough."
            hideSecondaryCta
            className="border-white/70 bg-white/64 px-8 py-10 md:px-12 md:py-12"
          />
        </div>
      </EditorialSection>

      <EditorialSection className="border-t border-black/5 bg-[#f5f0e7] py-20 md:py-24">
        <div className="text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-ink-600">
            Trusted by high-stakes advisors
          </p>
          <div className="mt-12 grid gap-8 text-center text-[1.8rem] font-semibold tracking-[0.28em] text-teal-800/72 sm:grid-cols-2 lg:grid-cols-4">
            {trustMarks.map((mark) => (
              <span key={mark} className="font-serif italic first:not-italic">
                {mark}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {performanceMetrics.map((metric) => (
            <EditorialPanel key={metric.label} className="p-7 md:p-8">
              <EditorialMetricCard
                value={metric.value}
                label={metric.label}
                className="border-none bg-transparent p-0 shadow-none"
              />
              <p className="mt-5 text-sm leading-7 text-ink-700">{metric.body}</p>
            </EditorialPanel>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <EditorialActionRow
            primary={alternateCta.primaryCta}
            secondary={alternateCta.secondaryCta}
            align="center"
            className="justify-center"
          />
        </div>
      </EditorialSection>
    </>
  );
}
