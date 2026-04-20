import { LegalPageLayout } from "./LegalPageLayout";

const sectionHeading = "text-xl font-bold";
const paragraph = "text-base leading-relaxed";
const list = "list-disc pl-6 space-y-2";

export function CookiePolicy() {
  return (
    <LegalPageLayout title="Cookie Policy" lastUpdated="April 20, 2026">
      <p className={paragraph}>
        This Cookie Policy explains how Inko AI uses cookies and similar technologies when you visit our website.
        For information about how we handle your personal data, please see our{" "}
        <a href="#/privacy" className="underline" style={{ color: "var(--text-brand)" }}>Privacy Policy</a>.
      </p>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>What Are Cookies?</h2>
        <p className={paragraph}>
          Cookies are small text files placed on your device when you visit a website. They are widely used to make
          websites work more efficiently and to provide information to site owners.
        </p>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>Types of Cookies We Use</h2>

        <h3 className="mb-2 font-bold">Essential Cookies</h3>
        <p className={`${paragraph} mb-3`}>
          These cookies are necessary for the website to function properly. They cannot be disabled.
        </p>
        <ul className={`${list} mb-4`}>
          <li>
            <strong>cookie-consent</strong> — Stores your cookie preference. Persists for 1 year.
          </li>
        </ul>

        <h3 className="mb-2 font-bold">Analytics Cookies</h3>
        <p className={`${paragraph} mb-3`}>
          These cookies help us understand how visitors interact with our website so we can improve the experience.
          They are only loaded after you give consent.
        </p>
        <ul className={list}>
          <li>
            <strong>Google Analytics (_ga, _ga_*)</strong> — Used to distinguish users and measure website traffic.
            Persists for up to 2 years.
          </li>
          <li>
            <strong>Google Tag Manager</strong> — Manages analytics and tracking tags. Session-based.
          </li>
        </ul>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>Third-Party Cookies</h2>
        <p className={paragraph}>
          We use third-party services that may set their own cookies:
        </p>
        <ul className={list}>
          <li>
            <strong>Google Analytics</strong> — Traffic analysis and user behavior tracking
          </li>
          <li>
            <strong>Kit (ConvertKit)</strong> — Email subscription form functionality
          </li>
        </ul>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>Managing Your Preferences</h2>
        <p className={paragraph}>
          When you first visit our website, you will be presented with a cookie consent banner where you can accept
          or reject non-essential cookies. You can change your preference at any time by clicking the "Manage
          Cookies" link in our website footer.
        </p>
        <p className={paragraph}>
          You can also control cookies through your browser settings. Most browsers allow you to refuse cookies or
          delete existing ones. Note that disabling cookies may affect the functionality of our website.
        </p>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>Changes to This Policy</h2>
        <p className={paragraph}>
          We may update this Cookie Policy from time to time. Any changes will be posted on this page with an
          updated "Last updated" date.
        </p>
      </div>
    </LegalPageLayout>
  );
}
