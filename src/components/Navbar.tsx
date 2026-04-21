import React, { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import inkoLightModeLogo from "../assets/logo/logo_lightmode.svg";
import inkoDarkModeLogo from "../assets/logo/logo_darkmode.svg";

const KIT_FORM_ID = "8899105";

export const Navbar = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const desktopEmailRef = useRef<HTMLInputElement>(null);
  const mobileEmailRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero");

    if (!heroSection) {
      setIsLightMode(window.scrollY > 760);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLightMode(!entry.isIntersecting);
      },
      {
        threshold: 0.05,
        rootMargin: "-72px 0px 0px 0px",
      },
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  const navTextClass = isLightMode ? "text-inko-text" : "text-[var(--text-on-dark)]";
  const logoSrc = isLightMode ? inkoLightModeLogo : inkoDarkModeLogo;
  const menuPanelStyle = {
    backgroundColor: isLightMode ? "var(--surface-base)" : "rgba(20, 24, 27, 0.92)",
  } as const;
  const mobileInputClass = isLightMode ? "text-slate-500 placeholder:text-slate-300" : "text-white placeholder:text-white/45";
  const mobilePanelTextClass = isLightMode ? "text-inko-text" : "text-white";
  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  const handleSubmit = async (emailRef: React.RefObject<HTMLInputElement | null>): Promise<void> => {
    const input = emailRef.current;
    if (!input) return;
    const email = input.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      input.focus();
      return;
    }
    setIsSubmitting(true);
    try {
      await fetch(`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`, {
        method: "POST",
        body: new URLSearchParams({ email_address: email }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        mode: "no-cors",
      });
    } catch {
      // no-cors won't give us a readable response, but the request is sent
    }
    window.location.hash = "#/thank-you";
  };

  return (
    <nav
      className="fixed top-0 right-0 left-0 z-50 backdrop-blur-md transition-colors duration-300"
      style={{ backgroundColor: isLightMode ? "var(--surface-header-light)" : "var(--surface-header-dark)" }}
    >
      <div className="px-6">
        <div className="mx-auto max-w-7xl py-2.5">
          <div className="flex items-center justify-between lg:grid lg:grid-cols-[auto_1fr] lg:items-center lg:gap-10">
            <a href="#hero" className="flex items-center" aria-label="Back to top" onClick={closeMenu}>
              <img src={logoSrc} alt="Inko" className="h-5 w-auto" />
            </a>

            <div className="hidden min-w-0 items-center justify-end gap-8 lg:flex">
              <div className="flex items-center gap-8">
                <a href="#features" className={`header-ui-text transition-colors hover:text-inko-blue ${navTextClass}`}>Features</a>
                <a href="#how-to-use" className={`header-ui-text transition-colors hover:text-inko-blue ${navTextClass}`}>How to Use</a>
                <a href="#faq" className={`header-ui-text transition-colors hover:text-inko-blue ${navTextClass}`}>FAQ</a>
              </div>

              <div
                className="inline-flex items-center justify-start gap-3 rounded-lg"
                style={{ backgroundColor: "var(--surface-base)" }}
              >
                <div className="flex items-center justify-center gap-2.5 pl-3">
                  <input
                    ref={desktopEmailRef}
                    type="email"
                    placeholder="Enter Your Work Email"
                    className="header-ui-text w-40 bg-transparent text-slate-400 outline-none placeholder:text-slate-300"
                    onKeyDown={(e) => { if (e.key === "Enter") handleSubmit(desktopEmailRef); }}
                  />
                </div>
                <button
                  onClick={() => handleSubmit(desktopEmailRef)}
                  disabled={isSubmitting}
                  className="header-ui-text flex items-center justify-center gap-2.5 rounded-lg bg-cyan-500 px-3 py-2 text-slate-50 disabled:opacity-60"
                >
                  Get Early Access
                </button>
              </div>
            </div>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
              className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:text-inko-blue lg:hidden ${navTextClass}`}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isMenuOpen ? (
            <div
              className="mt-3 rounded-2xl border border-white/10 p-4 shadow-[0_18px_48px_rgba(0,0,0,0.18)] backdrop-blur-xl lg:hidden"
              style={menuPanelStyle}
            >
              <div className="flex flex-col gap-4">
                <a href="#features" onClick={closeMenu} className={`header-ui-text transition-colors hover:text-inko-blue ${mobilePanelTextClass}`}>Features</a>
                <a href="#how-to-use" onClick={closeMenu} className={`header-ui-text transition-colors hover:text-inko-blue ${mobilePanelTextClass}`}>How to Use</a>
                <a href="#faq" onClick={closeMenu} className={`header-ui-text transition-colors hover:text-inko-blue ${mobilePanelTextClass}`}>FAQ</a>
              </div>

              <div className="mt-5 rounded-xl" style={{ backgroundColor: "var(--surface-base)" }}>
                <div className="flex flex-col gap-3 p-3">
                  <input
                    ref={mobileEmailRef}
                    type="email"
                    placeholder="Enter Your Work Email"
                    className={`header-ui-text w-full bg-transparent outline-none ${mobileInputClass}`}
                    onKeyDown={(e) => { if (e.key === "Enter") handleSubmit(mobileEmailRef); }}
                  />
                  <button
                    onClick={() => handleSubmit(mobileEmailRef)}
                    disabled={isSubmitting}
                    className="header-ui-text flex w-full items-center justify-center gap-2.5 rounded-lg bg-cyan-500 px-3 py-2 text-slate-50 disabled:opacity-60"
                  >
                    Get Early Access
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};
