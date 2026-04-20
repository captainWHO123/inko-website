import inkoDarkModeLogo from "../assets/logo/logo_darkmode.svg";

export const Footer = () => (
  <footer className="px-6 py-24 text-white" style={{ background: "var(--footer-gradient)" }}>
    <div className="mx-auto max-w-7xl">
      <div className="mb-32 flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <img src={inkoDarkModeLogo} alt="Inko" className="mb-4 h-8 w-auto" />
          <p className="max-w-xs text-lg leading-tight" style={{ color: "var(--text-footer)" }}>
            Turn each conversation into a business asset.
          </p>
        </div>

        <div className="flex w-full flex-col gap-12 md:w-fit md:shrink-0 md:flex-row md:gap-20">
          <div>
            <h4 className="mb-10 text-sm tracking-widest uppercase font-mono" style={{ color: "var(--text-footer-muted)" }}>About</h4>
            <ul className="space-y-6 font-mono">
              <li><a href="#faq" className="transition-colors hover:text-inko-blue">FAQ</a></li>
              <li><a href="#" className="transition-colors hover:text-inko-blue">Join Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-10 text-sm tracking-widest uppercase font-mono" style={{ color: "var(--text-footer-muted)" }}>Legal</h4>
            <ul className="space-y-6 font-mono">
              <li><a href="#/privacy" className="transition-colors hover:text-inko-blue">Privacy Policy</a></li>
              <li><a href="#/terms" className="transition-colors hover:text-inko-blue">Terms of Use</a></li>
              <li><a href="#/cookies" className="transition-colors hover:text-inko-blue">Cookie Policy</a></li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    (window as unknown as Record<string, () => void>).resetCookieConsent?.();
                  }}
                  className="transition-colors hover:text-inko-blue"
                >
                  Manage Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-12 text-center" style={{ borderTop: "1px solid var(--border-footer)" }}>
        <p className="text-xs font-mono" style={{ color: "var(--text-footer-muted)" }}>© 2026 Inko AI. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
