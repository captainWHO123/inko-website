import { motion } from "motion/react";
import { Zap } from "lucide-react";
import { HeroShowcaseCarousel } from "./showcase";
import { StyledKitForm } from "./StyledKitForm";

/**
 * Hero Component with Kit Form Integration
 *
 * This version uses Kit (ConvertKit) form instead of the custom form.
 * To use this, replace your existing Hero.tsx with this file.
 */
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
            <Zap className="h-4 w-4" />
            <span>Autopilot For Insurance Adviser</span>
          </div>
          <h1 className="mb-8 text-5xl leading-[1.1] font-bold text-[var(--text-on-dark)] lg:text-6xl">
            Turn Conversations <br />
            <span className="text-[var(--text-on-dark)]">Into Assets.</span>
          </h1>
          <p className="mb-10 max-w-xl text-xl leading-relaxed text-[var(--text-on-dark-muted)]">
            Built for sales professionals, Inko records, parses, and permanently
            stores the details from every in-person conversation. Turn each
            context into a traceable, compounding asset.
          </p>

          {/* Kit Form - replaces the original custom form */}
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
