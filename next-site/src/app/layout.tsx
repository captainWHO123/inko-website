import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { siteConfig } from "@/lib/config/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.siteTitle,
    template: "%s",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.siteUrl),
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <head />
      <body className="bg-surface-0 font-sans text-ink-950 antialiased">
        {children}
      </body>
    </html>
  );
}
