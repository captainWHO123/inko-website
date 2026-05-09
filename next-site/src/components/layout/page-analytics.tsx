"use client";

import { useEffect, useRef } from "react";

import { trackEvent } from "@/lib/analytics/track";
import type { AnalyticsEventName, AnalyticsPayload } from "@/types/analytics";

interface PageAnalyticsProps {
  eventName?: AnalyticsEventName;
  payload?: AnalyticsPayload;
  scrollEventName?: AnalyticsEventName;
  scrollPayload?: AnalyticsPayload;
  scrollThreshold?: number;
}

export function PageAnalytics({
  eventName,
  payload,
  scrollEventName,
  scrollPayload,
  scrollThreshold = 0.55,
}: PageAnalyticsProps) {
  const hasTrackedScroll = useRef(false);

  useEffect(() => {
    if (eventName) {
      trackEvent(eventName, payload);
    }
  }, [eventName, payload]);

  useEffect(() => {
    const scrollEvent = scrollEventName;

    if (!scrollEvent) {
      return;
    }

    function handleScroll() {
      if (hasTrackedScroll.current) {
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight;
      const thresholdPosition = document.documentElement.scrollHeight * scrollThreshold;

      if (scrollPosition >= thresholdPosition) {
        hasTrackedScroll.current = true;
        trackEvent(scrollEvent as AnalyticsEventName, scrollPayload);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollEventName, scrollPayload, scrollThreshold]);

  return null;
}
