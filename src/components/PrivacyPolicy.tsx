import { LegalPageLayout } from "./LegalPageLayout";

const sectionHeading = "text-xl font-bold";
const paragraph = "text-base leading-relaxed";
const list = "list-disc pl-6 space-y-2";

export function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="April 20, 2026">
      <p className={paragraph}>
        Inko AI ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we
        collect, use, and safeguard your information when you visit our website and use our services.
      </p>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>1. Information We Collect</h2>
        <p className={`${paragraph} mb-3`}>We collect the following types of information:</p>
        <ul className={list}>
          <li>
            <strong>Account Information:</strong> Email address when you sign up for early access or our waitlist.
          </li>
          <li>
            <strong>Usage Data:</strong> How you interact with our website, including pages visited and features used.
          </li>
          <li>
            <strong>Conversation Data:</strong> When you use our app, audio recordings and transcriptions of client
            conversations are processed to provide analysis. This data is encrypted and never used for AI model training.
          </li>
          <li>
            <strong>Device Information:</strong> Browser type, operating system, and device identifiers collected
            automatically via cookies and similar technologies.
          </li>
        </ul>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>2. How We Use Your Information</h2>
        <ul className={list}>
          <li>To provide and improve our services</li>
          <li>To send you updates about product availability and features</li>
          <li>To generate AI-powered insights from your conversation data</li>
          <li>To analyze usage patterns and improve user experience</li>
          <li>To comply with legal obligations</li>
        </ul>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>3. Third-Party Services</h2>
        <p className={`${paragraph} mb-3`}>
          We use the following third-party services that may collect information:
        </p>
        <ul className={list}>
          <li>
            <strong>Google Analytics / Google Tag Manager:</strong> For website traffic analysis. Data is anonymized
            where possible.
          </li>
          <li>
            <strong>Kit (ConvertKit):</strong> For managing our email waitlist and communications.
          </li>
          <li>
            <strong>Cloudflare:</strong> For website hosting, performance optimization, and security.
          </li>
        </ul>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>4. Data Storage & Security</h2>
        <p className={paragraph}>
          Your data is stored on secure servers with industry-standard encryption. We implement appropriate technical
          and organizational measures to protect your personal data against unauthorized access, alteration, disclosure,
          or destruction.
        </p>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>5. Data Retention</h2>
        <p className={paragraph}>
          We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy,
          unless a longer retention period is required by law.
        </p>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>6. Your Rights</h2>
        <p className={`${paragraph} mb-3`}>Depending on your jurisdiction, you may have the right to:</p>
        <ul className={list}>
          <li>Access the personal data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Object to or restrict processing of your data</li>
          <li>Data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>7. Cookies</h2>
        <p className={paragraph}>
          We use cookies and similar tracking technologies. For details, please see our{" "}
          <a href="#/cookies" className="underline" style={{ color: "var(--text-brand)" }}>Cookie Policy</a>.
        </p>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>8. Children's Privacy</h2>
        <p className={paragraph}>
          Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
          information from children.
        </p>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>9. Changes to This Policy</h2>
        <p className={paragraph}>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
          policy on this page and updating the "Last updated" date.
        </p>
      </div>
    </LegalPageLayout>
  );
}
