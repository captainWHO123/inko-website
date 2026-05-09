import { demoPage } from "@/content/fallback/demo";
import {
  contactPage,
  referralPage,
  teamPlanInterestPage,
  updatesPage,
  waitlistPage,
} from "@/content/fallback/future";
import { faqPage } from "@/content/fallback/faq";
import { homePage } from "@/content/fallback/home";
import { howItWorksPage } from "@/content/fallback/how-it-works";
import {
  consentNoticePage,
  preorderPolicyPage,
  privacyPolicyPage,
  returnsRefundsPage,
  shippingDeliveryPage,
  termsPage,
} from "@/content/fallback/policies";
import { pricingPage } from "@/content/fallback/pricing";
import { proofPage } from "@/content/fallback/proof";
import { navigationSettings, preorderStateSettings, siteSettings } from "@/content/fallback/site";
import { toFallbackDocument } from "@/lib/cms/mappers";

export async function getSiteSettings() {
  return toFallbackDocument(siteSettings);
}

export async function getNavigationSettings() {
  return toFallbackDocument(navigationSettings);
}

export async function getPreorderStateSettings() {
  return toFallbackDocument(preorderStateSettings);
}

export async function getHomePage() {
  return toFallbackDocument(homePage);
}

export async function getHowItWorksPage() {
  return toFallbackDocument(howItWorksPage);
}

export async function getPricingPage() {
  return toFallbackDocument(pricingPage);
}

export async function getProofPage() {
  return toFallbackDocument(proofPage);
}

export async function getFaqPage() {
  return toFallbackDocument(faqPage);
}

export async function getDemoPage() {
  return toFallbackDocument(demoPage);
}

export async function getWaitlistPage() {
  return toFallbackDocument(waitlistPage);
}

export async function getContactPage() {
  return toFallbackDocument(contactPage);
}

export async function getUpdatesPage() {
  return toFallbackDocument(updatesPage);
}

export async function getReferralPage() {
  return toFallbackDocument(referralPage);
}

export async function getTeamPlanInterestPage() {
  return toFallbackDocument(teamPlanInterestPage);
}

export async function getPreorderPolicyPage() {
  return toFallbackDocument(preorderPolicyPage);
}

export async function getReturnsRefundsPage() {
  return toFallbackDocument(returnsRefundsPage);
}

export async function getShippingDeliveryPage() {
  return toFallbackDocument(shippingDeliveryPage);
}

export async function getConsentNoticePage() {
  return toFallbackDocument(consentNoticePage);
}

export async function getPrivacyPolicyPage() {
  return toFallbackDocument(privacyPolicyPage);
}

export async function getTermsPage() {
  return toFallbackDocument(termsPage);
}
