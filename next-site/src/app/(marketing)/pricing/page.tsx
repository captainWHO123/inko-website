import Image from "next/image";

import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { pricingPage } from "@/content/fallback/pricing";
import {
  resolvePolicyLinksSection,
  resolvePricingCardContent,
  resolveSplitCtaContent,
} from "@/lib/cms/mappers";
import { getPricingPage } from "@/lib/cms/queries";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(pricingPage.seo);

export default async function PricingPage() {
  const [{ data: page }] = await Promise.all([getPricingPage()]);

  const pricing = resolvePricingCardContent(page.pricingCard);
  const policyLinks = resolvePolicyLinksSection(page.policyLinksSection);
  const finalCta = resolveSplitCtaContent(page.finalDecisionSupport);

  return (
    <>
      <section className="relative overflow-hidden px-4 pb-20 pt-20 md:px-6 lg:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(183,236,240,0.18),transparent_26%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
          <div>
            <h1 className="font-serif text-5xl leading-[1.02] tracking-[-0.06em] text-primary md:text-7xl lg:text-[5rem]">
              Transparent pricing.
              <br />
              <span className="italic font-normal">Total clarity.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-ink-700 md:text-xl">
              One simple package. Hardware and premium service stay unified for the
              first year, so the decision is visible before checkout.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-outline-variant/10 bg-white shadow-[0_32px_80px_-46px_rgba(16,24,32,0.2)] md:rounded-[2.5rem]">
            <Image
              src="/reference/hero-introducing-pen-app.webp"
              alt="Inko pricing preview"
              width={1508}
              height={834}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 lg:py-24">
        <div className="mx-auto overflow-hidden rounded-[2.5rem] border border-outline-variant/10 bg-surface-container shadow-[0_42px_88px_-54px_rgba(16,24,32,0.18)] md:grid md:max-w-7xl md:grid-cols-[0.66fr_0.34fr]">
          <div className="bg-[linear-gradient(165deg,#ffffff_0%,#fbf9f4_100%)] p-8 md:p-12 lg:p-16">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary/62">
                  Professional tier
                </p>
                <h2 className="mt-4 font-serif text-4xl tracking-[-0.05em] text-primary md:text-6xl">
                  {pricing.title}
                </h2>
              </div>
              <span className="rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary">
                {pricing.badge}
              </span>
            </div>

            <div className="mt-10 flex items-end gap-4">
              <p className="font-serif text-7xl leading-none tracking-[-0.06em] text-primary md:text-[5.5rem]">
                ${pricing.price}
              </p>
              <div className="pb-2">
                <p className="text-lg italic text-ink-600">{pricing.priceSuffix}</p>
                <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary/62">
                  Full ownership + first-year service
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-ink-700">
              {pricing.description}
            </p>

            <div className="mt-12 grid gap-10 border-t border-outline-variant/20 pt-10 md:grid-cols-2">
              <div>
                <h3 className="border-b border-outline-variant/20 pb-4 font-serif text-2xl italic text-primary">
                  Hardware Components
                </h3>
                <ul className="mt-7 space-y-5">
                  {pricing.included.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-ink-700">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-fixed-dim" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="border-b border-outline-variant/20 pb-4 font-serif text-2xl italic text-primary">
                  Software Service
                </h3>
                <ul className="mt-7 space-y-5">
                  {pricing.included.slice(3).map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-ink-700">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-fixed-dim" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center bg-surface-container-high p-8 text-center md:p-12 lg:p-16">
            <h3 className="font-serif text-3xl italic tracking-[-0.04em] text-primary">
              Precision hardware
            </h3>
            <div className="relative mt-10 w-full">
              <div className="absolute inset-0 rounded-full bg-primary-fixed/30 blur-3xl" />
              <Image
                src={pricing.hardwareMedia?.src ?? "/reference/inko-pen-hardware.webp"}
                alt={pricing.hardwareMedia?.alt ?? "Inko hardware"}
                width={2880}
                height={1800}
                className="relative h-auto w-full object-contain"
              />
            </div>
            <p className="mt-8 text-base leading-8 text-ink-700">
              The hardware starts the workflow in the room, but the value shows up after
              the meeting in software.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 md:px-6 lg:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-primary px-8 py-12 text-white shadow-[0_44px_90px_-56px_rgba(16,24,32,0.42)] md:px-12">
          <div className="text-center">
            <h2 className="font-serif text-4xl tracking-[-0.05em] md:text-6xl">
              Decision clarity by default
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#b7ecf0]/74">
              The pricing page explains what the product includes and how the purchase
              stays visible before someone commits.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {page.includedSection.items.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 text-center"
              >
                <h3 className="font-serif text-2xl italic">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 text-center md:px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 md:flex-row">
          <PrimaryButton
            href={finalCta.primaryCta.href}
            external={finalCta.primaryCta.external}
            analyticsEvent={finalCta.primaryCta.eventName}
            className="px-10 py-4 text-base"
          >
            {finalCta.primaryCta.label}
          </PrimaryButton>
          <SecondaryButton
            href={finalCta.secondaryCta.href}
            external={finalCta.secondaryCta.external}
            analyticsEvent={finalCta.secondaryCta.eventName}
            className="px-10 py-4 text-base"
          >
            {finalCta.secondaryCta.label}
          </SecondaryButton>
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-[1.75rem] border border-primary/10 bg-surface-container-low p-8 text-left shadow-[0_20px_48px_-36px_rgba(16,24,32,0.2)]">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-xl text-primary">
              i
            </div>
            <div>
              <h3 className="font-serif text-2xl italic text-primary">Pre-order Build Notice</h3>
              <p className="mt-3 text-base leading-8 text-ink-700">
                {page.preorderDetails.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {policyLinks.items.slice(0, 4).map((item) => (
            <div
              key={item.href}
              className="rounded-[1.75rem] border border-outline-variant/10 bg-white p-6 shadow-[0_18px_42px_-34px_rgba(16,24,32,0.14)]"
            >
              <p className="text-lg font-semibold text-primary">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-ink-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
