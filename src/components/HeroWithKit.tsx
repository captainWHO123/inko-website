import { motion } from "motion/react";
import { HeroShowcaseCarousel } from "./showcase";
import { StyledKitForm } from "./StyledKitForm";

export const HeroWithKit = () => {
  return (
    <section id="hero" className="relative overflow-hidden px-6 pt-20 pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-inko-blue/10 px-3 py-1 text-lg font-semibold text-inko-blue">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-inko-blue opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-inko-blue" />
            </span>
            <span>Built for Sales Professionals</span>
          </div>
          <h1 className="mb-8 text-5xl leading-[1.1] font-bold text-[var(--text-on-dark)] lg:text-6xl">
            Stop losing deals because you{" "}
            <span className="italic">forgot what your client said.</span>
          </h1>
          <p className="mb-6 max-w-xl text-xl leading-relaxed text-[var(--text-on-dark-muted)]">
            Inko captures every sales conversation and turns it into a structured
            client record — automatically. Know exactly what to say next, every
            time you walk in the door.
          </p>

          {/* Social proof */}
          <div className="mb-8 flex items-center gap-3">
            <div className="flex -space-x-3">
              {["JM", "SK", "AR", "PL"].map((initials, i) => (
                <div
                  key={initials}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-xs font-bold shadow-sm"
                  style={{
                    backgroundColor: ["#33a6ff", "#4ACBEC", "#166eb1", "#72bdd2"][i],
                    color: i === 2 ? "rgba(255,255,255,0.9)" : "#fff",
                    zIndex: i + 1,
                  }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <span className="text-sm text-[var(--text-on-dark-subtle)]">
              140+ agents on the waitlist
            </span>
          </div>

          {/* Kit Form */}
          <div className="w-full max-w-[503px]">
            <StyledKitForm />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <HeroShowcaseCarousel />
        </motion.div>
      </div>
    </section>
  );
};
