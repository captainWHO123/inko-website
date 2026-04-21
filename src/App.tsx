import { Fragment, useState, useEffect, type ReactNode } from "react";
import { FAQ } from "./components/FAQ";
import { FeatureSection } from "./components/FeatureSection";
import { Footer } from "./components/Footer";
import { HeroWithKit } from "./components/HeroWithKit";
import { HowToUse } from "./components/HowToUse";
import { Navbar } from "./components/Navbar";
import { PainPoints } from "./components/PainPoints";
import { Testimonial } from "./components/Testimonial";
import { AboutUs } from "./components/AboutUs";
import { ThankYou } from "./components/ThankYou";
import { CookieConsent } from "./components/CookieConsent";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfService } from "./components/TermsOfService";
import { CookiePolicy } from "./components/CookiePolicy";
import { FEATURE_SECTIONS, HOW_TO_USE_STEPS } from "./content/landing";
import { Shield, Smartphone, Link2 } from "lucide-react";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <div
          className="absolute inset-x-0 top-0 -z-20 h-[1700px]"
          style={{ background: "var(--hero-gradient)" }}
        />
        <div className="absolute top-[120px] right-[-12%] -z-10 h-[48vw] w-[48vw] rounded-full blur-[120px]" style={{ backgroundColor: "var(--hero-glow-cyan)" }} />
        <div className="absolute top-[-60px] left-[-18%] -z-10 h-[34vw] w-[34vw] rounded-full blur-[140px]" style={{ backgroundColor: "var(--hero-glow-amber)" }} />

        <HeroWithKit />

        <PainPoints />

        {FEATURE_SECTIONS.map((section) => (
          <Fragment key={section.title}>
            <FeatureSection
              tag={section.tag}
              title={section.title}
              description={section.description}
              image={section.image}
              sectionId={section.sectionId}
              bgColor={section.bgColor}
              visualType={section.visualType}
            />
          </Fragment>
        ))}

        <HowToUse steps={HOW_TO_USE_STEPS} />

        <Testimonial />

        <section className="relative overflow-hidden bg-transparent px-6 py-32 text-center">
          <div className="absolute top-1/2 left-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2" style={{ background: "radial-gradient(circle at center, var(--surface-overlay-soft) 0%, transparent 70%)" }} />

          <p className="mb-4 text-base text-[var(--text-muted)]">
            Join 140+ agents on the waitlist
          </p>
          <h2 className="mb-4 font-mono text-5xl tracking-tight font-bold">
            Be among the first 200 agents.
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-xl text-[var(--text-secondary)]">
            Get early access to Inko and start turning every conversation into a
            closing asset. No credit card, no commitment.
          </p>

          <button
            onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
            className="shadow-inko-blue/30 transform rounded-2xl bg-inko-blue px-12 py-5 text-xl font-mono font-medium text-white shadow-2xl transition-all hover:scale-105 hover:bg-inko-blue/90 active:scale-95"
          >
            Claim my spot &rarr;
          </button>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <Shield className="h-4 w-4" />
              <span>Your data is yours</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <Smartphone className="h-4 w-4" />
              <span>iOS app, launching soon</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <Link2 className="h-4 w-4" />
              <span>Connects with major CRMs</span>
            </div>
          </div>
        </section>

        <AboutUs />

        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  let page: ReactNode;
  switch (route) {
    case "#/thank-you":
      page = <ThankYou />;
      break;
    case "#/privacy":
      page = <PrivacyPolicy />;
      break;
    case "#/terms":
      page = <TermsOfService />;
      break;
    case "#/cookies":
      page = <CookiePolicy />;
      break;
    default:
      page = <LandingPage />;
  }

  return (
    <div className="min-h-screen">
      {page}
      <CookieConsent />
    </div>
  );
}
