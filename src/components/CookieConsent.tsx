import { useState, useEffect } from "react";
import { loadAnalytics } from "../utils/analytics";

interface CookieConsentState {
  analytics: boolean;
  timestamp: number;
}

function getConsent(): CookieConsentState | null {
  try {
    return JSON.parse(localStorage.getItem("cookie-consent") || "null");
  } catch {
    return null;
  }
}

function saveConsent(analytics: boolean) {
  const state: CookieConsentState = { analytics, timestamp: Date.now() };
  localStorage.setItem("cookie-consent", JSON.stringify(state));
}

// Exposed globally so Footer "Manage Cookies" link can re-trigger
(window as unknown as Record<string, unknown>).resetCookieConsent = () => {
  localStorage.removeItem("cookie-consent");
  window.dispatchEvent(new Event("cookie-consent-reset"));
};

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (!consent) {
      setVisible(true);
    } else if (consent.analytics) {
      loadAnalytics();
    }

    const handleReset = () => setVisible(true);
    window.addEventListener("cookie-consent-reset", handleReset);
    return () => window.removeEventListener("cookie-consent-reset", handleReset);
  }, []);

  function handleAccept() {
    saveConsent(true);
    setVisible(false);
    loadAnalytics();
  }

  function handleReject() {
    saveConsent(false);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div
        className="mx-auto max-w-4xl rounded-2xl border p-6 shadow-2xl sm:flex sm:items-center sm:gap-6"
        style={{
          backgroundColor: "var(--color-hero-900)",
          borderColor: "var(--border-on-dark)",
        }}
      >
        <p className="mb-4 flex-1 text-sm leading-relaxed sm:mb-0" style={{ color: "var(--text-footer)" }}>
          We use cookies to analyze site traffic and improve your experience. By clicking "Accept", you agree to our{" "}
          <a href="#/cookies" className="underline hover:text-white" style={{ color: "var(--text-footer-muted)" }}>
            Cookie Policy
          </a>{" "}
          and{" "}
          <a href="#/privacy" className="underline hover:text-white" style={{ color: "var(--text-footer-muted)" }}>
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={handleReject}
            className="rounded-xl border px-5 py-2.5 text-sm font-mono font-medium transition-all hover:bg-white/10"
            style={{ borderColor: "var(--border-on-dark)", color: "var(--text-footer)" }}
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="rounded-xl px-5 py-2.5 text-sm font-mono font-medium text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "var(--color-blue-500)" }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
