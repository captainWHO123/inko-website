import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

export type HowToUseStep = {
  step: string;
  title: string;
  desc: string;
  image: string;
};

type HowToUseProps = {
  steps: HowToUseStep[];
};

const HEADER_HEIGHT = 72;
const SCROLL_SCREENS_PER_STEP = 0.72;
const FINAL_HOLD_SCREENS = 0.45;
const DESKTOP_SNAP_QUERY = "(min-width: 1024px)";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export const HowToUse = ({ steps }: HowToUseProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndicator, setActiveIndicator] = useState(0);
  const [shouldSnap, setShouldSnap] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);
  const lastStepIndex = Math.max(steps.length - 1, 0);
  const totalScreens = (steps.length - 1) * SCROLL_SCREENS_PER_STEP + FINAL_HOLD_SCREENS;
  const travelEndProgress = 1 - FINAL_HOLD_SCREENS / totalScreens;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const rawX = useTransform(scrollYProgress, (value) => {
    if (lastStepIndex === 0 || slideWidth === 0) return 0;

    const travelProgress = clamp(value / travelEndProgress, 0, 1);
    const stepPosition = travelProgress * lastStepIndex;
    const snappedPosition = shouldSnap ? Math.round(stepPosition) : stepPosition;

    return -snappedPosition * slideWidth;
  });

  const x = useSpring(rawX, {
    stiffness: shouldSnap ? 200 : 130,
    damping: shouldSnap ? 30 : 26,
    mass: 0.18,
  });

  /* Track actual container width to avoid 100vw scrollbar mismatch */
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const ro = new ResizeObserver(([entry]) => {
      setSlideWidth(entry.contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_SNAP_QUERY);
    const syncShouldSnap = () => setShouldSnap(mediaQuery.matches);

    syncShouldSnap();
    mediaQuery.addEventListener("change", syncShouldSnap);

    return () => mediaQuery.removeEventListener("change", syncShouldSnap);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const travelProgress = lastStepIndex === 0 ? 0 : clamp(value / travelEndProgress, 0, 1);
      const nextIndex = Math.round(travelProgress * lastStepIndex);
      setActiveIndicator(nextIndex);
    });

    return () => unsubscribe();
  }, [lastStepIndex, scrollYProgress, travelEndProgress]);

  const scrollToStep = useCallback(
    (index: number) => {
      const el = targetRef.current;
      if (!el || lastStepIndex === 0) return;

      const sectionTop = el.offsetTop;
      const sectionScrollable = el.scrollHeight - window.innerHeight;
      const targetProgress = (index / lastStepIndex) * travelEndProgress;
      const targetScroll = sectionTop + targetProgress * sectionScrollable;

      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    },
    [lastStepIndex, travelEndProgress],
  );

  return (
    <section
      ref={targetRef}
      id="how-to-use"
      className="relative"
      style={{
        backgroundColor: "var(--surface-muted)",
        height: `${(totalScreens + 1) * 100}vh`,
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full flex-col px-6 pb-6" style={{ paddingTop: `${HEADER_HEIGHT + 24}px` }}>
          <div className="mx-auto max-w-7xl text-center">
            <p className="mb-4 text-lg font-bold tracking-widest text-inko-blue uppercase">How to Use </p>
          </div>

          <div ref={viewportRef} className="relative -mx-6 mt-6 min-h-0 flex-1 overflow-hidden">
            <motion.div style={{ x, width: `${steps.length * slideWidth}px` }} className="flex h-full">
              {steps.map((item) => (
                <section key={item.step} className="flex h-full shrink-0 items-center px-4 sm:px-6" style={{ width: `${slideWidth}px` }}>
                  <div className="mx-auto flex h-full w-full max-w-5xl flex-col items-center text-center">
                    <p className="mb-2 text-[32px] font-normal text-inko-blue">{item.step}</p>
                    <h3 className="mb-3 font-mono text-[40px] leading-tight font-medium">{item.title}</h3>
                    <p className="mx-auto mb-5 min-h-12 max-w-3xl font-sans text-xl leading-relaxed font-normal" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                    <div className="flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden rounded-3xl">
                      <img src={item.image} alt={item.title} className="block max-h-full w-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                </section>
              ))}
            </motion.div>
          </div>

          <div className="mt-4 flex justify-center gap-3">
            {steps.map((step, index) => (
              <motion.button
                key={step.step}
                type="button"
                aria-label={`Go to step ${index + 1}`}
                onClick={() => scrollToStep(index)}
                animate={{
                  opacity: activeIndicator === index ? 1 : 0.3,
                  scale: activeIndicator === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="h-2 w-2 cursor-pointer rounded-full bg-inko-blue"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
