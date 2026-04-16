import { useEffect, useRef, useState, type RefObject } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  SHOWCASE_EASE_OUT,
  SHOWCASE_PANEL_STYLE,
  type ShowcaseCycleProps,
  ShowcaseComposerShell,
  ShowcaseMessageBubble,
  ShowcaseResultFrame,
  ShowcaseSendButton,
  ShowcaseStopButton,
  scheduleTyping,
} from "./showcaseDemoPrimitives";

type DemoStep = "typing" | "panel" | "highlight" | "selected" | "sending" | "result";

type Contact = {
  id: string;
  name: string;
  initials: string;
};

const CONTACTS: Contact[] = [
  { id: "1", name: "James Bond", initials: "JB" },
  { id: "2", name: "Jiamluca Watts", initials: "JW" },
  { id: "3", name: "Jason Wong", initials: "JW" },
];

const SELECTED_CONTACT = CONTACTS[2];

const RESULT_PROMPTS = [
  "Explain why this plan combination fits Jason better than the alternatives.",
  "Show me a lower-budget version of this recommendation for Jason.",
  "Draft a message to Jason explaining this recommendation in simple terms.",
];

const TYPING_PROMPT = "Review @J";
const SELECTED_SUFFIX =
  " 's history and recommend the insurance plan combo that best fits his current situation.";

const MentionTag = ({ name }: { name: string }) => (
  <span className="inline-flex items-center rounded-lg border border-[#E3F5FF] bg-white px-2 py-0.5 font-medium text-[#3B99FB]">
    @{name}
  </span>
);

const ComposerInput = ({
  step,
  value,
  selectedSuffix,
}: {
  step: DemoStep;
  value: string;
  selectedSuffix: string;
}) => {
  const isExpanded = step === "selected" || step === "sending";
  const isSending = step === "sending";
  const showSelectedCursor = step === "selected" && selectedSuffix !== SELECTED_SUFFIX;
  const showCursor = step === "typing" || step === "panel" || step === "highlight" || showSelectedCursor;

  return (
    <ShowcaseComposerShell
      layout
      overlay={<MentionPanel step={step} />}
      action={
        <AnimatePresence mode="wait" initial={false}>
          {isSending ? <ShowcaseStopButton key="stop" /> : <ShowcaseSendButton key="send" />}
        </AnimatePresence>
      }
      className="min-h-[88px] px-7 py-5"
      contentClassName={`pr-16 text-[18px] leading-[1.7] text-[#166EB1] ${isExpanded ? "pt-1" : "pt-0.5"}`}
      actionClassName={`absolute right-6 ${isExpanded ? "top-6" : "top-1/2 -translate-y-1/2"}`}
    >
      {isExpanded ? (
        <p className="max-w-[88%]">
          <span>Review </span>
          <MentionTag name={SELECTED_CONTACT.name} />
          <span>{selectedSuffix}</span>
          {showSelectedCursor ? (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="ml-0.5 inline-block h-7 w-0.5 rounded-full bg-[#3B99FB] align-[-0.15em]"
            />
          ) : null}
        </p>
      ) : (
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
      )}
    </ShowcaseComposerShell>
  );
};

const MentionPanel = ({ step }: { step: DemoStep }) => {
  const isVisible = step === "panel" || step === "highlight";
  const highlightedName = step === "highlight" ? SELECTED_CONTACT.name : "";

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.96 }}
          transition={{ duration: 0.28, ease: SHOWCASE_EASE_OUT }}
          style={SHOWCASE_PANEL_STYLE}
          className="absolute right-0 bottom-full z-20 mb-4 w-64 overflow-hidden rounded-[2rem] border border-white/80 bg-white/95 p-3 backdrop-blur-xl"
        >
          {CONTACTS.map((contact) => {
            const isHighlighted = contact.name === highlightedName;

            return (
              <div key={contact.id} className="relative flex items-center gap-3 rounded-[1.35rem] px-3 py-3">
                {isHighlighted ? (
                  <motion.div
                    layoutId="recommend-highlight"
                    className="absolute inset-0 rounded-[1.35rem] bg-[#EAF5FF]"
                  />
                ) : null}

                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E3F5FF] text-[11px] font-medium text-[#3B99FB]">
                  {contact.initials}
                </div>
                <span className="relative z-10 text-[15px] font-medium text-[#1F2430]">
                  @{contact.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

const ResultPanel = ({
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
        <ShowcaseMessageBubble>
          <p>
            <span>Review </span>
            <MentionTag name={SELECTED_CONTACT.name} />
            <span> 's history and recommend the insurance plan combo that best fits his current situation.</span>
          </p>
        </ShowcaseMessageBubble>
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
          I reviewed @{SELECTED_CONTACT.name}&apos;s historical records and matched them against
          his current needs, financial situation, and stated concerns.
        </p>

        <section className="space-y-4">
          <h3 className="text-[18px] font-bold text-[#171717]">Recommended plan combination</h3>
          <p>A balanced protection-focused package appears to be the best fit for Jason at this stage:</p>
          <ul className="list-disc space-y-2.5 pl-7">
            <li>
              <strong>Core life insurance coverage</strong> to protect his family&apos;s financial
              security
            </li>
            <li>
              <strong>Critical illness coverage</strong> to reduce the risk of major
              out-of-pocket expenses
            </li>
            <li>
              <strong>A flexible savings or education-focused component</strong> to support
              longer-term planning without creating excessive short-term payment pressure
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-[18px] font-bold text-[#171717]">Why this fits</h3>
          <ul className="list-disc space-y-2.5 pl-7">
            <li>Jason appears to need solid baseline protection first</li>
            <li>His decision-making signals suggest he values practicality and flexibility</li>
            <li>A blended plan structure helps balance protection, affordability, and future planning</li>
            <li>
              This combination lowers the risk of being underinsured while avoiding an overly
              aggressive premium burden
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-[18px] font-bold text-[#171717]">Recommendation</h3>
          <ul className="list-disc space-y-2.5 pl-7">
            <li>
              Start with a core protection package now, then expand the savings component later
              if his budget or priorities evolve.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <p className="text-[16px] text-[#666666]">Suggested prompts:</p>
          <div className="space-y-3">
            {RESULT_PROMPTS.map((prompt, index) => (
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

export const RecommendShowcase = ({ onCycleComplete }: ShowcaseCycleProps) => {
  const [step, setStep] = useState<DemoStep>("typing");
  const [inputValue, setInputValue] = useState("");
  const [selectedSuffix, setSelectedSuffix] = useState("");
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
    setSelectedSuffix("");
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
      text: TYPING_PROMPT,
      interval: 130,
      onUpdate: setInputValue,
    });

    schedule(typingCompleteAt + 220, () => setStep("panel"));
    schedule(typingCompleteAt + 1120, () => setStep("highlight"));
    const selectedTypingStart = typingCompleteAt + 1920;

    schedule(selectedTypingStart, () => {
      setStep("selected");
      setSelectedSuffix("");
    });

    const selectedTypingCompleteAt = scheduleTyping({
      schedule,
      startDelay: selectedTypingStart + 90,
      text: SELECTED_SUFFIX,
      interval: 48,
      onUpdate: setSelectedSuffix,
    });

    schedule(selectedTypingCompleteAt + 620, () => setStep("sending"));
    schedule(selectedTypingCompleteAt + 1570, () => setStep("result"));
    schedule(selectedTypingCompleteAt + 2320, () => setShowThought(true));
    schedule(selectedTypingCompleteAt + 3420, () => setShowContent(true));

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
      const duration = 3600;

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
          <ResultPanel
            resultViewRef={resultViewRef}
            showThought={showThought}
            showContent={showContent}
          />
        ) : (
          <motion.div
            key="composer"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: SHOWCASE_EASE_OUT }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/2 right-0 left-0 -translate-y-1/2">
              <div className="relative">
                <MentionPanel step={step} />
                <ComposerInput step={step} value={inputValue} selectedSuffix={selectedSuffix} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
