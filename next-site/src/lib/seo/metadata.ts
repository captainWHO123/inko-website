import type { Metadata } from "next";

import { siteConfig } from "@/lib/config/site-config";
import { buildOgImage } from "@/lib/seo/og";
import type { SeoFields } from "@/types/sections";

export function createPageMetadata(seo: SeoFields): Metadata {
  const url = `${siteConfig.siteUrl}${seo.path}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    metadataBase: new URL(siteConfig.siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: siteConfig.brandName,
      type: "website",
      images: [
        {
          url: buildOgImage("/og.svg"),
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [buildOgImage("/og.svg")],
    },
  };
}
