"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { PrimaryButton } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics/track";
import { cn } from "@/lib/utils/cn";
import type { NavigationItem } from "@/types/content";
import type { PreorderStateExperience } from "@/types/state";

interface SiteHeaderProps {
  navigation: NavigationItem[];
  experience: PreorderStateExperience;
}

export function SiteHeader({ navigation, experience }: SiteHeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href: string) {
    return pathname === href;
  }

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/76 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-6">
        <Link href="/" className="shrink-0">
          <span className="font-serif text-3xl italic tracking-[-0.03em] text-teal-800">
            Inko
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "border-b-2 border-transparent pb-1 text-sm font-medium text-ink-600 transition hover:text-teal-900",
                isActive(item.href) && "border-teal-800 text-teal-900",
              )}
              onClick={() => {
                if (item.href === "/pricing") {
                  trackEvent("nav_pricing_click", {
                    page_state: experience.state,
                    location: "site-header",
                  });
                }
              }}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <PrimaryButton
            href={experience.navPrimary.href}
            external={experience.navPrimary.external}
            analyticsEvent="nav_primary_cta_click"
            analyticsContext={{
              page_state: experience.state,
              user_path_type: experience.navPrimary.userPathType,
              checkout_mode: experience.navPrimary.checkoutMode,
              location: "site-header",
            }}
            className="px-5 py-3 text-[0.92rem]"
          >
            {experience.navPrimary.label}
          </PrimaryButton>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <PrimaryButton
            href={experience.navPrimary.href}
            external={experience.navPrimary.external}
            analyticsEvent="nav_primary_cta_click"
            analyticsContext={{
              page_state: experience.state,
              user_path_type: experience.navPrimary.userPathType,
              checkout_mode: experience.navPrimary.checkoutMode,
              location: "site-header-mobile",
            }}
            className="px-4"
          >
            {experience.navPrimary.label}
          </PrimaryButton>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white/80 text-teal-900"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="text-lg">{menuOpen ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-black/5 bg-white/88 px-4 py-4 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-[1.25rem] px-4 py-3 text-sm font-medium text-ink-800 transition hover:bg-teal-50",
                  isActive(item.href) && "bg-teal-50 text-teal-900",
                )}
                onClick={() => {
                  if (item.href === "/pricing") {
                    trackEvent("nav_pricing_click", {
                      page_state: experience.state,
                      location: "site-header-mobile",
                    });
                  }
                  setMenuOpen(false);
                }}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
