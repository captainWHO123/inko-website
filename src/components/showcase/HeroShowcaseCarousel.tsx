import { useEffect, useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SyncShowcase } from "./SyncShowcase";
import { RecommendShowcase } from "./RecommendShowcase";
import { ReviewShowcase } from "./ReviewShowcase";
import type { ShowcaseCycleProps } from "./showcaseDemoPrimitives";

type Slide = {
  id: string;
  label: string;
  Component: ComponentType<ShowcaseCycleProps>;
};

const SLIDES: Slide[] = [
  { id: "sync", label: "Sync", Component: SyncShowcase },
  { id: "recommend", label: "Recommend", Component: RecommendShowcase },
  { id: "review", label: "Review", Component: ReviewShowcase },
];

export const HeroShowcaseCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasPendingAdvance, setHasPendingAdvance] = useState(false);

  const advanceToNextSlide = () => {
    setActiveIndex((current) => (current + 1) % SLIDES.length);
  };

  useEffect(() => {
    if (isPaused || !hasPendingAdvance) {
      return;
    }

    setHasPendingAdvance(false);
    advanceToNextSlide();
  }, [hasPendingAdvance, isPaused]);

  const handleCycleComplete = () => {
    if (isPaused) {
      setHasPendingAdvance(true);
      return;
    }

    advanceToNextSlide();
  };

  const ActiveComponent = SLIDES[activeIndex].Component;

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mb-6 flex justify-center">
        <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] p-1 backdrop-blur-sm">
          {SLIDES.map((slide, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => {
                  setHasPendingAdvance(false);
                  setActiveIndex(index);
                }}
                className={`rounded-full px-4 py-2 font-mono text-sm font-medium transition-all ${
                  isActive
                    ? "bg-white text-inko-text shadow-soft"
                    : "text-[var(--text-on-dark-subtle)] hover:text-[var(--text-on-dark)]"
                }`}
                aria-pressed={isActive}
              >
                {slide.label}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={SLIDES[activeIndex].id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          <ActiveComponent onCycleComplete={handleCycleComplete} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
