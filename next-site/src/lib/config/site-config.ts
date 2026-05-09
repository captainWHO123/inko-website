import { siteSettings } from "@/content/fallback/site";
import { isPreorderState } from "@/lib/utils/guards";

const fallbackSiteUrl = "http://localhost:3000";
const envPreorderState = process.env.NEXT_PUBLIC_PREORDER_STATE;
const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const envCheckoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL;
const envCheckoutMode = process.env.NEXT_PUBLIC_CHECKOUT_MODE;

function normalizeSiteUrl(value: string | undefined) {
  if (!value) {
    return undefined;
  }

  const withProtocol =
    value.startsWith("http://") || value.startsWith("https://") ? value : `https://${value}`;

  return withProtocol.replace(/\/$/, "");
}

const resolvedCheckoutMode =
  envCheckoutMode === "live" || envCheckoutMode === "placeholder"
    ? envCheckoutMode
    : envCheckoutUrl
      ? "live"
      : siteSettings.checkoutMode;

export const siteConfig = {
  ...siteSettings,
  siteUrl:
    normalizeSiteUrl(envSiteUrl) ??
    normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
    normalizeSiteUrl(process.env.VERCEL_URL) ??
    fallbackSiteUrl,
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? siteSettings.supportEmail,
  checkoutUrl: envCheckoutUrl ?? siteSettings.checkoutUrl,
  checkoutMode: resolvedCheckoutMode,
  checkoutPlaceholderMessage:
    process.env.NEXT_PUBLIC_CHECKOUT_PLACEHOLDER_MESSAGE ?? siteSettings.checkoutPlaceholderMessage,
  preorderState:
    envPreorderState && isPreorderState(envPreorderState)
      ? envPreorderState
      : siteSettings.defaultPreorderState,
  demoWebhookUrl: process.env.INKO_DEMO_WEBHOOK_URL,
  waitlistWebhookUrl: process.env.INKO_WAITLIST_WEBHOOK_URL,
};
