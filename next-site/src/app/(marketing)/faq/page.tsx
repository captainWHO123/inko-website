import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { faqPage } from "@/content/fallback/faq";
import { pricingPage } from "@/content/fallback/pricing";
import { resolveSplitCtaContent } from "@/lib/cms/mappers";
import { getFaqPage } from "@/lib/cms/queries";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(faqPage.seo);

export default async function FaqPage() {
  const [{ data: page }] = await Promise.all([getFaqPage()]);
  const finalCta = resolveSplitCtaContent(page.finalCta);

  return (
    <>
      <section className="relative overflow-hidden px-4 pb-8 pt-24 md:px-6 lg:pt-32">
        <div className="absolute left-1/2 top-0 h-[42rem] w-full max-w-5xl -translate-x-1/2 rounded-full bg-primary/6 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-primary">
              Support & Guidance
            </p>
            <h1 className="mt-6 font-serif text-6xl italic leading-[0.94] tracking-[-0.06em] text-on-surface md:text-8xl">
              Commonly
              <br />
              Inquired.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-on-surface-variant/88">
              Everything you need to know about the Inko Starter system, from product fit
              to purchase timing, refunds, privacy, and live support.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-10 md:px-6 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.28fr_0.72fr]">
          <aside className="hidden lg:block lg:sticky lg:top-28 lg:h-fit">
            <nav className="space-y-4">
              {page.categories.categories.map((category, index) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className={
                    index === 0
                      ? "flex items-center gap-2 text-sm font-semibold text-primary"
                      : "block text-sm font-medium text-on-surface-variant transition hover:translate-x-1 hover:text-primary"
                  }
                >
                  {index === 0 ? <span className="h-1.5 w-1.5 rounded-full bg-primary" /> : null}
                  <span>{category.title}</span>
                </a>
              ))}
            </nav>

            <div className="mt-10 rounded-[1.5rem] bg-primary-container p-6 text-white shadow-[0_24px_56px_-34px_rgba(16,24,32,0.44)]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary-fixed/72">
                Need support?
              </p>
              <p className="mt-4 text-sm leading-7 text-white/76">
                If a live walkthrough would make the decision easier, the demo path stays
                available. If you are already clear, pricing stays visible.
              </p>
              <div className="mt-6 grid gap-3">
                <PrimaryButton href="/book-demo" className="w-full bg-primary-fixed text-primary-container hover:bg-white">
                  Book Demo
                </PrimaryButton>
              </div>
            </div>
          </aside>

          <div className="space-y-16">
            {page.categories.categories.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-32">
                <h2 className="border-b border-outline-variant/30 pb-5 font-serif text-4xl italic tracking-[-0.04em] text-on-surface">
                  {category.title}
                </h2>

                {category.id === "pricing-and-purchase" ? (
                  <div className="mt-8 flex flex-col gap-8 rounded-[2rem] bg-primary-container p-10 text-white shadow-[0_32px_72px_-42px_rgba(16,24,32,0.48)] md:flex-row md:items-center md:justify-between">
                    <div className="max-w-md">
                      <h3 className="font-serif text-4xl italic tracking-[-0.04em]">
                        The Investment.
                      </h3>
                      <p className="mt-5 text-lg leading-8 text-primary-fixed/72">
                        Transparent pricing with no hidden implementation fees. Lock in the
                        first-year rate during the pre-order phase.
                      </p>
                    </div>
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/6 px-10 py-8 text-center">
                      <p className="font-serif text-6xl tracking-[-0.05em]">
                        ${pricingPage.pricingCard.price}
                      </p>
                      <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary-fixed/68">
                        Early access first year
                      </p>
                    </div>
                  </div>
                ) : null}

                {category.id === "privacy-and-consent" ? (
                  <div className="mt-8 rounded-[1.75rem] border border-primary/10 bg-surface-container p-8 shadow-[0_16px_42px_-32px_rgba(16,24,32,0.18)]">
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-on-surface">
                      Recording responsibility stays with the user
                    </h3>
                    <p className="mt-3 text-base leading-8 text-on-surface-variant">
                      Users remain responsible for understanding and following local
                      recording and consent rules. The website keeps that visible before
                      someone ever reaches checkout.
                    </p>
                  </div>
                ) : null}

                <div className="mt-6 space-y-4">
                  {category.items.map((item, index) => (
                    <details
                      key={item.id}
                      open={Boolean(item.priority || index === 0)}
                      className="group overflow-hidden rounded-[1.5rem] border border-outline-variant/20 bg-surface-container-low transition hover:border-primary/20 hover:bg-surface-container"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-6 md:px-8">
                        <span className="text-xl font-medium tracking-[-0.02em] text-on-surface md:text-2xl">
                          {item.question}
                        </span>
                        <span className="text-primary/60 transition group-open:rotate-180">
                          ˅
                        </span>
                      </summary>
                      <div className="px-6 pb-7 text-base leading-8 text-on-surface-variant md:px-8">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}

            <section id="demo" className="scroll-mt-32">
              <div className="relative overflow-hidden rounded-[2rem] bg-primary-container p-10 text-white shadow-[0_32px_72px_-42px_rgba(16,24,32,0.48)] md:p-14">
                <div className="absolute right-8 top-0 text-[9rem] text-white/5">?</div>
                <div className="relative max-w-2xl">
                  <h2 className="font-serif text-4xl italic tracking-[-0.04em] md:text-5xl">
                    Still have questions?
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-primary-fixed/70">
                    Connect with our product specialists for a live walkthrough or a quick
                    policy and workflow review before you decide.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <PrimaryButton
                      href="/book-demo"
                      className="bg-primary-fixed text-primary-container hover:bg-white"
                    >
                      Contact Support
                    </PrimaryButton>
                    <SecondaryButton
                      href="/book-demo"
                      className="border-white/20 bg-white/8 text-white hover:border-white/30 hover:bg-white/12"
                    >
                      {finalCta.secondaryCta.label}
                    </SecondaryButton>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
