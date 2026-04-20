import { useEffect } from "react";

import type { ReactNode } from "react";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--surface-page)" }}>
      <div className="mx-auto max-w-3xl px-6 py-24">
        <a
          href="#"
          className="mb-12 inline-flex items-center gap-2 font-mono text-sm transition-colors"
          style={{ color: "var(--text-brand)" }}
        >
          ← Back to Home
        </a>

        <h1 className="mb-4 text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
          {title}
        </h1>
        <p className="mb-12 text-sm" style={{ color: "var(--text-muted)" }}>
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {children}
        </div>

        <div className="mt-16 border-t pt-8" style={{ borderColor: "var(--border-default)" }}>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Questions? Contact us at{" "}
            <a href="mailto:contact_us@inko.com" className="underline" style={{ color: "var(--text-brand)" }}>
              contact_us@inko.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
