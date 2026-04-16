import { useEffect, useRef, useState } from "react";
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
const FINAL_HOLD_SCREENS = 0.8;

export const HowToUse = ({ steps }: HowToUseProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeIndicator, setActiveIndicator] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const rawX = useTransform(
    scrollYProgress,
    [0, 1 - FINAL_HOLD_SCREENS / (steps.length + FINAL_HOLD_SCREENS - 1), 1],
    ["0vw", `-${(steps.length - 1) * 100}vw`, `-${(steps.length - 1) * 100}vw`],
  );

  const x = useSpring(rawX, {
    stiffness: 110,
    damping: 24,
    mass: 0.22,
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const nextIndex = Math.round(value * (steps.length - 1));
      setActiveIndicator(nextIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress, steps.length]);

  return (
    <section
      ref={targetRef}
      id="how-to-use"
      className="relative"
      style={{
        backgroundColor: "var(--surface-muted)",
        height: `${(steps.length + FINAL_HOLD_SCREENS) * 100}vh`,
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full flex-col px-6 pb-6" style={{ paddingTop: `${HEADER_HEIGHT + 24}px` }}>
          <div className="mx-auto max-w-7xl text-center">
            <p className="mb-4 text-2xl font-bold tracking-widest text-inko-blue uppercase">Process</p>
          </div>

          <div className="relative mt-6 min-h-0 flex-1 overflow-hidden">
            <motion.div style={{ x, width: `${steps.length * 100}vw` }} className="flex h-full">
              {steps.map((item) => (
                <section key={item.step} className="flex h-full w-screen shrink-0 items-center px-4 sm:px-6">
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
              <motion.div
                key={step.step}
                animate={{
                  opacity: activeIndicator === index ? 1 : 0.3,
                  scale: activeIndicator === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="h-2 w-2 rounded-full bg-inko-blue"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
