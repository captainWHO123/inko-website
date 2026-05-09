"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { V4Footer, V4Header, type V4FooterVariant, type V4NavKey } from "@/components/v4/site-shell";

function resolveActiveNav(pathname: string): V4NavKey | undefined {
  if (pathname === "/" || pathname === "/how-it-works") {
    return "how-it-works";
  }

  if (pathname.startsWith("/pricing")) {
    return "pricing";
  }

  if (pathname.startsWith("/proof")) {
    return "proof";
  }

  if (pathname.startsWith("/faq")) {
    return "faq";
  }

  if (pathname.startsWith("/book-demo")) {
    return "book-demo";
  }

  return undefined;
}

function resolveFooterVariant(pathname: string): V4FooterVariant {
  if (pathname === "/") {
    return "home";
  }

  if (pathname.startsWith("/pricing")) {
    return "pricing";
  }

  if (pathname.startsWith("/proof")) {
    return "proof";
  }

  if (pathname.startsWith("/faq")) {
    return "faq";
  }

  if (pathname.startsWith("/book-demo")) {
    return "light";
  }

  return "default";
}

export function V4MarketingChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/") {
    return <>{children}</>;
  }

  return (
    <>
      <V4Header active={resolveActiveNav(pathname)} />
      <main>{children}</main>
      <V4Footer variant={resolveFooterVariant(pathname)} />
    </>
  );
}
