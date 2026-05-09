"use client";

import type { AnalyticsEventName, AnalyticsPayload, DeviceType, VisitorType } from "@/types/analytics";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const visitorKey = "inko-website-visitor";

function getDeviceType(): DeviceType {
  if (typeof window === "undefined") {
    return "unknown";
  }

  if (window.innerWidth < 768) {
    return "mobile";
  }

  if (window.innerWidth < 1200) {
    return "tablet";
  }

  return "desktop";
}

function getVisitorType(): VisitorType {
  if (typeof window === "undefined") {
    return "unknown";
  }

  const previousVisit = window.localStorage.getItem(visitorKey);

  if (previousVisit) {
    return "returning";
  }

  window.localStorage.setItem(visitorKey, "true");
  return "new";
}

export function buildAnalyticsPayload(payload: AnalyticsPayload = {}): AnalyticsPayload {
  return {
    device_type: getDeviceType(),
    new_vs_returning: getVisitorType(),
    ...payload,
  };
}

export function trackEvent(
  eventName: AnalyticsEventName,
  payload: AnalyticsPayload = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  const finalPayload = buildAnalyticsPayload(payload);

  window.dataLayer?.push({
    event: eventName,
    ...finalPayload,
  });

  window.dispatchEvent(
    new CustomEvent("inko:analytics", {
      detail: {
        eventName,
        payload: finalPayload,
      },
    }),
  );

  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics]", eventName, finalPayload);
  }
}
