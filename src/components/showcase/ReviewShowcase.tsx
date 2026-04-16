import { useEffect, useRef, useState, type RefObject } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  SHOWCASE_EASE_OUT,
  type ShowcaseCycleProps,
  ShowcaseComposerShell,
  ShowcaseMessageBubble,
  ShowcaseResultFrame,
  ShowcaseSendButton,
  scheduleTyping,
} from "./showcaseDemoPrimitives";

type DemoStep = "typing" | "selected" | "result";

const REVIEW_PROMPT = "Review and summarize my work performance this week.";

const REVIEW_PROMPTS = [
  "Summarize today's client conversations by deal stage.",
  "Where did I lose momentum in client conversations?",
  "How can I improve my performance next week?",
];

const ReviewComposerInput = ({ value, showCursor }: { value: string; showCursor: boolean }) => {
  return (
    <ShowcaseComposerShell
      action={<ShowcaseSendButton />}
      className="min-h-[88px] px-7 py-5"
      contentClassName="pt-1 pr-16 text-[18px] leading-[1.7] text-[#166EB1]"
      actionClassName="absolute top-6 right-6"
    >
      <div className="flex flex-wrap items-center gap-x-0.5 gap-y-2">
        <span>{value}</span>
        {showCursor ? (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="mt-0.5 inline-block h-8 w-0.5 rounded-full bg-[#3B99FB]"
          />
        ) : null}
      </div>
    </ShowcaseComposerShell>
  );
};

const ReviewResultPanel = ({
  resultViewRef,
  showThought,
  showContent,
}: {
  resultViewRef: RefObject<HTMLDivElement | null>;
  showThought: boolean;
  showContent: boolean;
}) => (
  <ShowcaseResultFrame resultViewRef={resultViewRef}>
    <div className="space-y-8">
      <div className="flex justify-end">
        <ShowcaseMessageBubble>{REVIEW_PROMPT}</ShowcaseMessageBubble>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: showThought ? 1 : 0, y: showThought ? 0 : 8 }}
        transition={{ duration: 0.35 }}
        className="text-[16px] italic text-[#666666]"
      >
        Thought for a couple of seconds
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 16 }}
        transition={{ duration: 0.45, ease: SHOWCASE_EASE_OUT }}
        className="space-y-7 text-[17px] leading-[1.55] text-[#171717]"
      >
        <p>
          I reviewed your work activity this week and summarized your overall performance across
          client conversations.
        </p>

        <section className="space-y-4">
          <h3 className="text-[18px] font-bold text-[#171717]">Weekly performance summary</h3>
          <p>
            This week, you maintained strong momentum in client-facing work, with a clear focus on
            follow-up, solution positioning, and objection handling. Your conversations showed
            consistent effort in identifying client needs, addressing budget concerns, and moving
            opportunities forward with practical next steps.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-[18px] font-bold text-[#171717]">Key strengths</h3>
          <ul className="list-disc space-y-2.5 pl-7">
            <li>Stayed active and engaged across client conversations</li>
            <li>Showed strong awareness of client concerns and decision factors</li>
            <li>Followed up with clear action-oriented communication</li>
            <li>Demonstrated solid judgment in matching solutions to client needs</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-[18px] font-bold text-[#171717]">Areas to improve</h3>
          <ul className="list-disc space-y-2.5 pl-7">
            <li>Strengthen consistency in follow-up timing</li>
            <li>Make value communication more concise and outcome-focused</li>
            <li>Surface buying signals and decision risks earlier in conversations</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-[18px] font-bold text-[#171717]">Overall assessment</h3>
          <ul className="list-disc space-y-2.5 pl-7">
            <li>
              You delivered a productive week with solid client coverage and thoughtful follow-up.
              The next step is to improve efficiency and sharpen conversion-focused communication.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <p className="text-[16px] text-[#666666]">Suggested prompts:</p>
          <div className="space-y-3">
            {REVIEW_PROMPTS.map((prompt, index) => (
              <motion.button
                key={prompt}
                type="button"
                whileHover={{ x: 4 }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 8 }}
                transition={{ duration: 0.25, delay: 0.08 + index * 0.06 }}
                className="w-full rounded-[1.2rem] border border-[#E9EEF4] bg-white px-4 py-3.5 text-left text-[16px] leading-[1.45] text-[#252525]"
              >
                {prompt}
              </motion.button>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  </ShowcaseResultFrame>
);

export const ReviewShowcase = ({ onCycleComplete }: ShowcaseCycleProps) => {
  const [step, setStep] = useState<DemoStep>("typing");
  const [inputValue, setInputValue] = useState("");
  const [showThought, setShowThought] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [sequenceId, setSequenceId] = useState(0);
  const resultViewRef = useRef<HTMLDivElement>(null);

  const restartOrAdvance = () => {
    if (onCycleComplete) {
      onCycleComplete();
      return;
    }

    setSequenceId((current) => current + 1);
  };

  useEffect(() => {
    setStep("typing");
    setInputValue("");
    setShowThought(false);
    setShowContent(false);

    if (resultViewRef.current) {
      resultViewRef.current.scrollTop = 0;
    }

    const timeouts: number[] = [];
    const schedule = (delay: number, callback: () => void) => {
      timeouts.push(window.setTimeout(callback, delay));
    };

    const typingCompleteAt = scheduleTyping({
      schedule,
      startDelay: 350,
      text: REVIEW_PROMPT,
      interval: 68,
      onUpdate: setInputValue,
    });

    schedule(typingCompleteAt + 480, () => setStep("selected"));
    schedule(typingCompleteAt + 1480, () => setStep("result"));
    schedule(typingCompleteAt + 2230, () => setShowThought(true));
    schedule(typingCompleteAt + 3280, () => setShowContent(true));

    return () => {
      timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, [sequenceId]);

  useEffect(() => {
    if (step !== "result" || !showContent || !resultViewRef.current) {
      return;
    }

    const resultView = resultViewRef.current;
    let frameId = 0;
    let scrollTimeout = 0;
    let replayTimeout = 0;

    scrollTimeout = window.setTimeout(() => {
      const targetScroll = resultView.scrollHeight - resultView.clientHeight;

      if (targetScroll <= 0) {
        replayTimeout = window.setTimeout(restartOrAdvance, 2200);
        return;
      }

      const startTime = performance.now();
      const duration = 3400;

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = progress * (2 - progress);

        resultView.scrollTop = targetScroll * eased;

        if (progress < 1) {
          frameId = requestAnimationFrame(animateScroll);
        } else {
          replayTimeout = window.setTimeout(restartOrAdvance, 2200);
        }
      };

      frameId = requestAnimationFrame(animateScroll);
    }, 1400);

    return () => {
      window.clearTimeout(scrollTimeout);
      window.clearTimeout(replayTimeout);
      cancelAnimationFrame(frameId);
    };
  }, [onCycleComplete, showContent, step]);

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-xl">
      <AnimatePresence mode="wait" initial={false}>
        {step === "result" ? (
          <ReviewResultPanel
            resultViewRef={resultViewRef}
            showThought={showThought}
            showContent={showContent}
          />
        ) : (
          <motion.div
            key="review-composer"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: SHOWCASE_EASE_OUT }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/2 right-0 left-0 -translate-y-1/2">
              <ReviewComposerInput value={inputValue} showCursor={step === "typing"} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
