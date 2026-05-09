import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import type { CtaLink, FaqCategory, PolicyLink, ProofSample } from "@/types/sections";

interface EditorialSectionProps extends ComponentPropsWithoutRef<"section"> {
  shellClassName?: string;
}

function toAnalyticsContext(cta?: CtaLink) {
  if (!cta) {
    return undefined;
  }

  return {
    user_path_type: cta.userPathType,
    checkout_mode: cta.checkoutMode,
  };
}

export function EditorialSection({
  className,
  shellClassName,
  children,
  ...props
}: EditorialSectionProps) {
  return (
    <section className={cn("px-4 py-16 md:px-6 md:py-24", className)} {...props}>
      <div className={cn("mx-auto max-w-7xl", shellClassName)}>{children}</div>
    </section>
  );
}

export function EditorialPanel({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-black/5 bg-white/78 shadow-[0_40px_90px_-58px_rgba(16,25,34,0.28)] backdrop-blur-sm md:rounded-[3rem]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface EditorialHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  className?: string;
}

export function EditorialHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "default",
  className,
}: EditorialHeadingProps) {
  const isInverse = tone === "inverse";

  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "text-[0.72rem] font-semibold uppercase tracking-[0.26em]",
            isInverse ? "text-teal-100/72" : "text-teal-800/76",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-4 font-serif text-4xl leading-[1.02] tracking-[-0.03em] md:text-6xl",
          isInverse ? "text-white" : "text-ink-950",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-8 md:text-lg",
            align === "center" && "mx-auto",
            isInverse ? "text-white/72" : "text-ink-700",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

interface EditorialActionRowProps {
  primary?: CtaLink;
  secondary?: CtaLink;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  className?: string;
}

export function EditorialActionRow({
  primary,
  secondary,
  align = "left",
  tone = "default",
  className,
}: EditorialActionRowProps) {
  const isInverse = tone === "inverse";

  if (!primary && !secondary) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex flex-wrap gap-3",
        align === "center" && "justify-center",
        className,
      )}
    >
      {primary ? (
        <PrimaryButton
          href={primary.href}
          external={primary.external}
          analyticsEvent={primary.eventName}
          analyticsContext={toAnalyticsContext(primary)}
          className={
            isInverse
              ? "bg-white text-teal-900 hover:bg-white/90"
              : "bg-teal-800 hover:bg-teal-700"
          }
        >
          {primary.label}
        </PrimaryButton>
      ) : null}
      {secondary ? (
        <SecondaryButton
          href={secondary.href}
          external={secondary.external}
          analyticsEvent={secondary.eventName}
          analyticsContext={toAnalyticsContext(secondary)}
          className={
            isInverse
              ? "border-white/18 bg-white/8 text-white hover:border-white/28 hover:bg-white/12"
              : undefined
          }
        >
          {secondary.label}
        </SecondaryButton>
      ) : null}
    </div>
  );
}

export function EditorialChecklist({
  items,
  className,
  tone = "default",
}: {
  items: string[];
  className?: string;
  tone?: "default" | "inverse";
}) {
  const inverse = tone === "inverse";

  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex items-start gap-3 text-sm leading-6 md:text-[0.96rem]",
            inverse ? "text-white/72" : "text-ink-700",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "mt-2 h-1.5 w-1.5 rounded-full",
              inverse ? "bg-teal-200" : "bg-teal-700",
            )}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function EditorialQuote({
  quote,
  label,
  tone = "dark",
  className,
}: {
  quote: string;
  label?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "rounded-[2rem] border p-8 md:p-10",
        isDark
          ? "border-white/8 bg-[linear-gradient(180deg,rgba(20,34,43,0.98),rgba(17,27,35,0.96))] text-white shadow-[0_44px_88px_-60px_rgba(16,24,32,0.72)]"
          : "border-black/5 bg-white/72 text-ink-950 shadow-[0_34px_78px_-54px_rgba(16,24,32,0.24)]",
        className,
      )}
    >
      <p className="font-serif text-3xl leading-[1.2] tracking-[-0.03em] md:text-4xl">
        {quote}
      </p>
      {label ? (
        <p
          className={cn(
            "mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.26em]",
            isDark ? "text-teal-100/70" : "text-teal-800/72",
          )}
        >
          {label}
        </p>
      ) : null}
    </div>
  );
}

export function EditorialMetricCard({
  value,
  label,
  className,
  inverse = false,
}: {
  value: string;
  label: string;
  className?: string;
  inverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] border p-6",
        inverse
          ? "border-white/10 bg-white/6 text-white"
          : "border-black/5 bg-white/70 text-ink-950",
        className,
      )}
    >
      <p
        className={cn(
          "font-serif text-4xl leading-none tracking-[-0.04em]",
          inverse ? "text-white" : "text-teal-800",
        )}
      >
        {value}
      </p>
      <p
        className={cn(
          "mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em]",
          inverse ? "text-white/64" : "text-ink-600",
        )}
      >
        {label}
      </p>
    </div>
  );
}

export function EditorialPolicyGrid({
  items,
  className,
}: {
  items: PolicyLink[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2", className)}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "rounded-[1.75rem] border p-6 transition hover:-translate-y-0.5",
            item.highlight
              ? "border-teal-200/70 bg-teal-50/70"
              : "border-black/5 bg-white/72",
          )}
        >
          <p className="text-lg font-semibold text-ink-950">{item.title}</p>
          <p className="mt-3 text-sm leading-7 text-ink-700">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}

function ProofFieldList({
  heading,
  items,
}: {
  heading: string;
  items: Array<{ label: string; value: string }>;
}) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="rounded-[1.75rem] border border-white/8 bg-white/4 p-5">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-teal-100/70">
        {heading}
      </p>
      <dl className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={`${heading}-${item.label}`} className="grid gap-1">
            <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-white/40">
              {item.label}
            </dt>
            <dd className="text-sm leading-6 text-white/82">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function ProofSurface({ sample, index }: { sample: ProofSample; index: number }) {
  return (
    <div
      className={cn(
        "grid gap-6 px-5 py-6 md:px-8 md:py-8",
        index > 0 && "border-t border-white/8",
        "lg:grid-cols-[1.1fr_0.9fr]",
      )}
    >
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-teal-200/12 bg-teal-200/8 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal-100/78">
            {sample.label}
          </span>
          {sample.statusLabel ? (
            <span className="text-[0.72rem] uppercase tracking-[0.2em] text-white/44">
              {sample.statusLabel}
            </span>
          ) : null}
        </div>
        <h3 className="mt-4 font-serif text-3xl tracking-[-0.03em] text-white">
          {sample.title}
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 md:text-[0.98rem]">
          {sample.preview}
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {sample.detail.map((detailItem, detailIndex) => (
            <div
              key={`${sample.id}-detail-${detailIndex}`}
              className="rounded-[1.5rem] border border-white/6 bg-white/3 p-4"
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/40">
                {sample.detailHeadings?.[detailIndex] ?? `Point ${detailIndex + 1}`}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/74">{detailItem}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <ProofFieldList
          heading={sample.inspectorTitle ?? "Fields"}
          items={sample.inspectorFields ?? []}
        />
        <ProofFieldList heading="Structured output" items={sample.structuredFields ?? []} />
        {sample.actionItems?.length ? (
          <div className="rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-teal-100/70">
              Next actions
            </p>
            <EditorialChecklist items={sample.actionItems} className="mt-4" tone="inverse" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function ProofWorkspacePreview({
  samples,
  className,
}: {
  samples: ProofSample[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[2rem] border border-black/6 bg-[linear-gradient(180deg,#efe9de,#f7f3ea)] shadow-[0_48px_96px_-66px_rgba(16,25,34,0.34)] md:rounded-[3rem]",
        className,
      )}
    >
      <div className="grid lg:grid-cols-[0.3fr_0.7fr]">
        <aside className="border-b border-black/6 bg-[#f4eee4] p-5 lg:border-b-0 lg:border-r">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-teal-800/70">
            Workspace modes
          </p>
          <div className="mt-5 grid gap-3">
            {samples.map((sample, index) => (
              <div
                key={sample.id}
                className={cn(
                  "rounded-[1.5rem] border p-4",
                  index === 0
                    ? "border-teal-200/80 bg-white shadow-[0_16px_34px_-28px_rgba(16,25,34,0.24)]"
                    : "border-black/5 bg-white/44",
                )}
              >
                <p className="text-sm font-semibold text-ink-950">{sample.label}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-500">
                  {sample.statusLabel ?? sample.title}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[1.5rem] border border-black/5 bg-white/54 p-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-ink-500">
              Status
            </p>
            <p className="mt-3 text-sm font-semibold text-teal-800">System active</p>
            <p className="mt-2 text-sm leading-6 text-ink-700">
              Capture becomes reviewable, client-facing, and CRM-ready without forcing a
              second pass from scratch.
            </p>
          </div>
        </aside>

        <div className="overflow-hidden rounded-t-[2rem] bg-[linear-gradient(180deg,#16242e,#111a22)] text-white lg:rounded-none lg:rounded-r-[3rem]">
          <div className="flex items-center justify-between border-b border-white/6 px-5 py-4 md:px-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-teal-200/14 bg-teal-200/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal-100/76">
                Product states
              </span>
              <span className="text-xs text-white/40">Post-meeting workspace preview</span>
            </div>
            <span className="text-xs uppercase tracking-[0.18em] text-white/38">Live preview</span>
          </div>
          <div>
            {samples.map((sample, index) => (
              <ProofSurface key={sample.id} sample={sample} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FaqBoard({
  categories,
  supportTitle,
  supportBody,
  primaryCta,
  secondaryCta,
}: {
  categories: FaqCategory[];
  supportTitle: string;
  supportBody: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.28fr_0.72fr]">
      <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
        <EditorialPanel className="p-5 md:p-6">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-teal-800/70">
            FAQ navigation
          </p>
          <nav className="mt-5 grid gap-2">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-[1.25rem] border border-black/5 bg-white/70 px-4 py-3 text-sm font-medium text-ink-800 transition hover:border-teal-200 hover:text-teal-900"
              >
                {category.title}
              </a>
            ))}
          </nav>
        </EditorialPanel>

        <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,#184f53,#12393d)] p-6 text-white shadow-[0_36px_74px_-52px_rgba(16,24,32,0.56)]">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-teal-100/72">
            Need support?
          </p>
          <h3 className="mt-4 font-serif text-3xl tracking-[-0.03em]">{supportTitle}</h3>
          <p className="mt-4 text-sm leading-7 text-white/72">{supportBody}</p>
          <EditorialActionRow
            primary={primaryCta}
            secondary={secondaryCta}
            tone="inverse"
            className="mt-6"
          />
        </div>
      </aside>

      <div className="space-y-10">
        {categories.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-28">
            <div className="border-b border-black/6 pb-5">
              <h3 className="font-serif text-3xl tracking-[-0.03em] text-ink-950">
                {category.title}
              </h3>
              {category.description ? (
                <p className="mt-3 text-sm leading-7 text-ink-700">{category.description}</p>
              ) : null}
            </div>
            <div className="mt-5 space-y-3">
              {category.items.map((item, index) => (
                <details
                  key={item.id}
                  open={Boolean(item.priority || index === 0)}
                  className="group overflow-hidden rounded-[1.75rem] border border-black/6 bg-white/72"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 md:px-7">
                    <span className="text-base font-semibold text-ink-950 md:text-lg">
                      {item.question}
                    </span>
                    <span className="text-xl text-teal-800 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="border-t border-black/6 px-5 py-5 text-sm leading-7 text-ink-700 md:px-7">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
            {category.cta ? (
              <div className="mt-5">
                <SecondaryButton href={category.cta.href}>{category.cta.label}</SecondaryButton>
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
}
