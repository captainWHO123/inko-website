import inkoDarkModeLogo from "../assets/logo/logo_darkmode.svg";

export const Footer = () => (
  <footer className="px-6 py-24 text-white" style={{ background: "var(--footer-gradient)" }}>
    <div className="mx-auto max-w-7xl">
      <div className="mb-32 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <img src={inkoDarkModeLogo} alt="Inko" className="mb-4 h-8 w-auto" />
          <p className="mb-8 max-w-xs text-lg leading-tight" style={{ color: "var(--text-footer)" }}>
            Turn each conversation into a business asset.
          </p>
          <a href="mailto:contact_us@inko.com" className="transition-colors hover:text-white" style={{ color: "var(--text-footer)" }}>
            contact_us@inko.com
          </a>
        </div>

        <div className="md:col-span-3">
          <h4 className="mb-10 text-sm tracking-widest uppercase font-mono" style={{ color: "var(--text-footer-muted)" }}>About</h4>
          <ul className="space-y-6 font-mono">
            <li><a href="#faq" className="transition-colors hover:text-inko-blue">FAQ</a></li>
            <li><a href="#" className="transition-colors hover:text-inko-blue">Join Us</a></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="mb-10 text-sm tracking-widest uppercase font-mono" style={{ color: "var(--text-footer-muted)" }}>Legal</h4>
          <ul className="space-y-6 font-mono">
            <li><a href="#" className="transition-colors hover:text-inko-blue">Privacy Policy</a></li>
            <li><a href="#" className="transition-colors hover:text-inko-blue">Terms of Use</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-12 text-center" style={{ borderTop: "1px solid var(--border-footer)" }}>
        <p className="text-xs font-mono" style={{ color: "var(--text-footer-muted)" }}>© 2026 Inko AI. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
