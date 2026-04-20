import { LegalPageLayout } from "./LegalPageLayout";

const sectionHeading = "text-xl font-bold";
const paragraph = "text-base leading-relaxed";
const list = "list-disc pl-6 space-y-2";

export function TermsOfService() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="April 20, 2026">
      <p className={paragraph}>
        Welcome to Inko AI. By accessing or using our website and services, you agree to be bound by these Terms of
        Service. If you do not agree, please do not use our services.
      </p>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>1. Acceptance of Terms</h2>
        <p className={paragraph}>
          By creating an account, signing up for our waitlist, or using our services, you acknowledge that you have
          read, understood, and agree to be bound by these Terms and our{" "}
          <a href="#/privacy" className="underline" style={{ color: "var(--text-brand)" }}>Privacy Policy</a>.
        </p>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>2. Description of Service</h2>
        <p className={paragraph}>
          Inko AI provides an AI-powered platform that helps insurance advisers and sales professionals record,
          analyze, and act on client conversations. Our services include conversation recording, AI-generated
          insights, automated follow-up emails, CRM integration, and custom analysis templates.
        </p>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>3. User Obligations</h2>
        <ul className={list}>
          <li>You must obtain proper consent before recording any conversations</li>
          <li>You are responsible for the accuracy of information you provide</li>
          <li>You must not use the service for any unlawful purpose</li>
          <li>You must not attempt to reverse-engineer or compromise our systems</li>
          <li>You are responsible for maintaining the confidentiality of your account</li>
        </ul>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>4. Intellectual Property</h2>
        <p className={paragraph}>
          All content, features, and functionality of Inko AI — including but not limited to text, graphics, logos,
          software, and design — are owned by Inko AI and protected by copyright, trademark, and other intellectual
          property laws.
        </p>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>5. User Content</h2>
        <p className={paragraph}>
          You retain ownership of the conversation data and content you upload to our service. By using our service,
          you grant us a limited license to process your content solely for the purpose of providing the service.
          We will not use your conversation data for AI model training.
        </p>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>6. Limitation of Liability</h2>
        <p className={paragraph}>
          Inko AI provides AI-generated insights and analysis for informational purposes only. We do not guarantee
          the accuracy, completeness, or reliability of AI-generated content. You should not rely solely on our
          service for professional advice. To the maximum extent permitted by law, Inko AI shall not be liable for
          any indirect, incidental, or consequential damages arising from your use of the service.
        </p>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>7. Service Availability</h2>
        <p className={paragraph}>
          We strive to provide continuous availability but do not guarantee uninterrupted service. We reserve the
          right to modify, suspend, or discontinue any part of the service at any time with reasonable notice.
        </p>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>8. Termination</h2>
        <p className={paragraph}>
          We may terminate or suspend your access to the service immediately, without prior notice, for any breach
          of these Terms. Upon termination, your right to use the service will cease immediately.
        </p>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>9. Changes to Terms</h2>
        <p className={paragraph}>
          We reserve the right to modify these Terms at any time. We will notify users of significant changes via
          email or a notice on our website. Continued use of the service after changes constitutes acceptance of the
          new Terms.
        </p>
      </div>

      <div>
        <h2 className={`${sectionHeading} mb-3`}>10. Governing Law</h2>
        <p className={paragraph}>
          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which
          Inko AI is registered, without regard to its conflict of law provisions.
        </p>
      </div>
    </LegalPageLayout>
  );
}
