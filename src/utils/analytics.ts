declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

function hasAnalyticsConsent(): boolean {
  try {
    const consent = JSON.parse(localStorage.getItem("cookie-consent") || "{}");
    return consent.analytics === true;
  } catch {
    return false;
  }
}

export function loadAnalytics() {
  if (!hasAnalyticsConsent()) return;

  const gtmId = import.meta.env.VITE_GTM_ID;
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  // Prefer GTM; fall back to direct GA
  if (gtmId) {
    loadGTM(gtmId);
  } else if (gaId) {
    loadGA(gaId);
  }
}

function loadGTM(id: string) {
  if (document.getElementById("gtm-script")) return;
  const script = document.createElement("script");
  script.id = "gtm-script";
  script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');`;
  document.head.appendChild(script);
}

function loadGA(id: string) {
  if (document.getElementById("ga-script")) return;

  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args as unknown as Record<string, unknown>);
  };
  window.gtag("js", new Date());
  window.gtag("config", id);
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (window.gtag) {
    window.gtag("event", name, params);
  }
  if (window.dataLayer) {
    window.dataLayer.push({ event: name, ...params });
  }
}
