import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/config/site-config";

const routes = [
  "",
  "/how-it-works",
  "/pricing",
  "/proof",
  "/faq",
  "/book-demo",
  "/contact",
  "/waitlist",
  "/updates",
  "/referral",
  "/team-plan-interest",
  "/checkout-confirmation",
  "/pre-order-policy",
  "/returns-refunds",
  "/shipping-delivery",
  "/consent-recording-notice",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
