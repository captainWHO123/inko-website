import Link from "next/link";
import type { ReactNode } from "react";

import { siteConfig } from "@/lib/config/site-config";
import { cn } from "@/lib/utils/cn";

export type V4NavKey = "how-it-works" | "pricing" | "proof" | "faq" | "book-demo";
export type V4FooterVariant = "home" | "pricing" | "proof" | "faq" | "light" | "default";

const navigationItems: Array<{ key: V4NavKey; label: string; href: string }> = [
  { key: "how-it-works", label: "How it Works", href: "/" },
  { key: "pricing", label: "Pricing", href: "/pricing" },
  { key: "proof", label: "Proof", href: "/proof" },
  { key: "faq", label: "FAQ", href: "/faq" },
  { key: "book-demo", label: "Book Demo", href: "/book-demo" },
];

function buttonClassName(kind: "primary" | "secondary" | "ghost" = "primary") {
  if (kind === "secondary") {
    return "inline-flex items-center justify-center rounded-full bg-surface-container-highest px-6 py-3 text-sm font-semibold text-primary transition hover:bg-surface-container";
  }

  if (kind === "ghost") {
    return "inline-flex items-center justify-center rounded-full border border-outline-variant/30 bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-zinc-50";
  }

  return "inline-flex items-center justify-center rounded-full bg-primary-container px-6 py-3 text-sm font-semibold text-white transition hover:scale-[0.98]";
}

export function V4ButtonLink({
  href,
  children,
  className,
  kind = "primary",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  kind?: "primary" | "secondary" | "ghost";
}) {
  return (
    <Link href={href} className={cn(buttonClassName(kind), className)}>
      {children}
    </Link>
  );
}

export function V4Header({ active }: { active?: V4NavKey }) {
  return (
    <header className="sticky top-0 z-40 border-b border-outline-variant/10 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="text-3xl font-serif italic text-primary-container">
          Inko
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navigationItems.map((item) => {
            const isActive = item.key === active;

            return (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "border-b-2 border-transparent pb-1 text-sm font-medium tracking-tight text-zinc-600 transition-colors hover:text-primary-container",
                  isActive && "border-primary-container text-primary-container",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <V4ButtonLink href="/pricing" className="px-5 py-2.5 md:px-6">
          Pre-order Inko Starter
        </V4ButtonLink>
      </nav>
    </header>
  );
}

function FooterLinkGroup({
  title,
  items,
  light = false,
}: {
  title: string;
  items: Array<{ label: string; href: string }>;
  light?: boolean;
}) {
  return (
    <div>
      <h4
        className={cn(
          "mb-6 font-serif text-xl italic",
          light ? "text-[#1d1c16]" : "text-white",
        )}
      >
        {title}
      </h4>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={`${item.label}-${item.href}`}>
            <Link
              href={item.href}
              className={cn(
                "text-sm transition-colors",
                light ? "text-[#404849] hover:text-[#184f53]" : "text-zinc-400 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DarkFooterHome() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950 py-24 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-8 md:grid-cols-6">
        <div className="space-y-8 md:col-span-2">
          <div className="text-3xl font-serif italic tracking-tighter text-white">Inko</div>
          <p className="max-w-xs text-base leading-relaxed text-zinc-500">
            Turn every client conversation into follow-up, notes, and CRM-ready output.{" "}
            {siteConfig.supportEmail}
          </p>
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-600">© Inko 2026</p>
        </div>

        <FooterLinkGroup
          title="Product"
          items={[
            { label: "How it Works", href: "/" },
            { label: "Pricing", href: "/pricing" },
            { label: "Proof", href: "/proof" },
          ]}
        />

        <FooterLinkGroup
          title="Support"
          items={[
            { label: "FAQ", href: "/faq" },
            { label: "Privacy", href: "/privacy-policy" },
            { label: "Contact", href: "/book-demo" },
          ]}
        />

        <div className="md:col-span-2">
          <h4 className="mb-8 font-serif text-xl italic text-white">Join the waitlist</h4>
          <div className="flex flex-col gap-4">
            <input
              className="rounded-full border border-zinc-800 bg-zinc-900 px-6 py-4 text-sm text-white outline-none focus:border-primary-fixed"
              placeholder="Your work email"
              type="email"
            />
            <V4ButtonLink href="/waitlist" className="w-full bg-white py-4 text-center text-sm font-bold text-zinc-950 hover:bg-zinc-200">
              Subscribe
            </V4ButtonLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function DarkFooterColumns({
  groups,
}: {
  groups: Array<{ title: string; items: Array<{ label: string; href: string }> }>;
}) {
  return (
    <footer className="bg-zinc-950 py-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="mb-4 text-2xl font-serif italic text-white">Inko</div>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
            © Inko. Turn every client conversation into follow-up, notes, and CRM-ready output.{" "}
            {siteConfig.supportEmail}
          </p>
        </div>

        {groups.map((group) => (
          <FooterLinkGroup key={group.title} title={group.title} items={group.items} />
        ))}
      </div>
    </footer>
  );
}

function LightFooter() {
  return (
    <footer className="border-t border-black/5 bg-[#f5f0e7] py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="mb-4 text-2xl font-serif text-[#184f53]">Inko</div>
          <p className="max-w-xs text-sm leading-relaxed text-[#404849]">
            © Inko. Turn every client conversation into follow-up, notes, and CRM-ready output.{" "}
            {siteConfig.supportEmail}
          </p>
        </div>

        <FooterLinkGroup
          light
          title="Product"
          items={[
            { label: "How it Works", href: "/" },
            { label: "Proof", href: "/proof" },
            { label: "Pricing", href: "/pricing" },
          ]}
        />

        <FooterLinkGroup
          light
          title="Support"
          items={[
            { label: "FAQ", href: "/faq" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Book a Demo", href: "/book-demo" },
          ]}
        />

        <FooterLinkGroup
          light
          title="Connect"
          items={[
            { label: "Twitter", href: "/" },
            { label: "LinkedIn", href: "/" },
            { label: "Contact Us", href: "/book-demo" },
          ]}
        />
      </div>
    </footer>
  );
}

export function V4Footer({ variant = "default" }: { variant?: V4FooterVariant }) {
  if (variant === "home") {
    return <DarkFooterHome />;
  }

  if (variant === "light") {
    return <LightFooter />;
  }

  if (variant === "pricing") {
    return (
      <DarkFooterColumns
        groups={[
          {
            title: "Product",
            items: [
              { label: "How it Works", href: "/" },
              { label: "Pricing", href: "/pricing" },
              { label: "Starter Kit", href: "/pricing#starter-kit" },
            ],
          },
          {
            title: "Legal",
            items: [
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Data Security", href: "/consent-recording-notice" },
            ],
          },
          {
            title: "Future",
            items: [
              { label: "Roadmap", href: "/updates" },
              { label: "Enterprise", href: "/team-plan-interest" },
              { label: "Partners", href: "/referral" },
            ],
          },
        ]}
      />
    );
  }

  if (variant === "proof") {
    return (
      <DarkFooterColumns
        groups={[
          {
            title: "Product",
            items: [
              { label: "How it Works", href: "/" },
              { label: "Hardware", href: "/pricing" },
              { label: "Enterprise", href: "/team-plan-interest" },
            ],
          },
          {
            title: "Support",
            items: [
              { label: "Help Center", href: "/faq" },
              { label: "API Docs", href: "/proof" },
              { label: "Status", href: "/updates" },
            ],
          },
          {
            title: "Legal",
            items: [
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Cookie Settings", href: "/consent-recording-notice" },
            ],
          },
        ]}
      />
    );
  }

  return (
    <DarkFooterColumns
      groups={[
        {
          title: "Product",
          items: [
            { label: "How it Works", href: "/" },
            { label: "Pricing", href: "/pricing" },
            { label: "FAQ", href: "/faq" },
          ],
        },
        {
          title: "Support",
          items: [
            { label: "Contact", href: "/book-demo" },
            { label: "Documentation", href: "/proof" },
            { label: "Status", href: "/updates" },
          ],
        },
        {
          title: "Legal",
          items: [
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Compliance", href: "/consent-recording-notice" },
          ],
        },
      ]}
    />
  );
}
