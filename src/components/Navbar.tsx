import { useEffect, useState } from "react";
import inkoLightModeLogo from "../assets/logo/logo_lightmode.svg";
import inkoDarkModeLogo from "../assets/logo/logo_darkmode.svg";

export const Navbar = () => {
  const [isLightMode, setIsLightMode] = useState(false);

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

  return (
    <nav
      className="fixed top-0 right-0 left-0 z-50 backdrop-blur-md transition-colors duration-300"
      style={{ backgroundColor: isLightMode ? "var(--surface-header-light)" : "var(--surface-header-dark)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center px-6 py-2.5">
        <a href="#hero" className="flex items-center" aria-label="Back to top">
          <img src={logoSrc} alt="Inko" className="h-5 w-auto" />
        </a>

        <div className="ml-auto flex items-center gap-6">
          <div className="hidden items-center gap-6 md:flex">
            <a href="#features" className={`header-ui-text transition-colors hover:text-inko-blue ${navTextClass}`}>Features</a>
            <a href="#how-to-use" className={`header-ui-text transition-colors hover:text-inko-blue ${navTextClass}`}>How to Use</a>
            <a href="#faq" className={`header-ui-text transition-colors hover:text-inko-blue ${navTextClass}`}>FAQ</a>
          </div>

          <div
            className="hidden sm:inline-flex items-center justify-start gap-3 rounded-lg"
            style={{ backgroundColor: "var(--surface-base)" }}
          >
            <div className="flex items-center justify-center gap-2.5 pl-3">
              <input
                type="email"
                placeholder="Enter Your Work Email"
                className="header-ui-text w-40 bg-transparent text-slate-400 outline-none placeholder:text-slate-300"
              />
            </div>
            <button className="header-ui-text flex items-center justify-center gap-2.5 rounded-lg bg-cyan-500 px-3 py-2 text-slate-50">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
