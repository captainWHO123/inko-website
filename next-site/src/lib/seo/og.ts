import { siteConfig } from "@/lib/config/site-config";

export function buildOgImage(path: string) {
  return `${siteConfig.siteUrl}${path}`;
}
