import { useEffect, useRef, useState, type RefObject } from "react";
import { AnimatePresence, motion } from "motion/react";
import salesforceIcon from "../../assets/key-visual/salesforce.svg";
import hubspotIcon from "../../assets/key-visual/hubspot.svg";
import gmailIcon from "../../assets/key-visual/gmail.svg";
import {
  SHOWCASE_EASE_OUT,
  SHOWCASE_PANEL_STYLE,
  type ShowcaseCycleProps,
  ShowcaseComposerShell,
  ShowcaseMessageBubble,
  ShowcaseResultFrame,
  ShowcaseSendButton,
  ShowcaseStopButton,
} from "./showcaseDemoPrimitives";

type SyncStatus = "idle" | "typing" | "selecting" | "selected" | "sending" | "result";

const FULL_TEXT = "Push today's client conversations into /";

const SYSTEMS = [
  { name: "Salesforce", icon: salesforceIcon, active: true },
  { name: "Hubspot", icon: hubspotIcon, active: false },
  { name: "Email", icon: gmailIcon, active: false },
] as const;

const ActiveSystemBadge = ({ compact = false }: { compact?: boolean }) => (
  <span
    role="img"
    aria-label="Salesforce"
    className="inline-flex shrink-0 align-middle"
    style={{ height: compact ? 40 : 46, aspectRatio: "153 / 46" }}
  >
    <svg viewBox="0 0 153 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <rect width="152.418" height="45.4478" rx="6.26866" fill="#33A6FF" />
      <g clipPath="url(#sync-salesforce-badge-clip)">
        <path
          d="M22.8699 13.6912C23.8812 12.6388 25.2867 11.984 26.8431 11.984C28.9138 11.984 30.717 13.1393 31.6769 14.8499C32.5133 14.4763 33.4355 14.2671 34.4091 14.2671C38.1424 14.2671 41.166 17.3182 41.166 21.0823C41.166 24.8465 38.1424 27.8975 34.4091 27.8975C33.9532 27.8975 33.5075 27.853 33.079 27.7638C32.2322 29.2722 30.6176 30.2938 28.7663 30.2938C27.9916 30.2938 27.2579 30.1156 26.6066 29.7968C25.7496 31.8159 23.7475 33.2318 21.4198 33.2318C19.092 33.2318 16.9254 31.696 16.1301 29.5431C15.7839 29.6151 15.4239 29.6562 15.0537 29.6562C12.1637 29.6562 9.82227 27.2908 9.82227 24.37C9.82227 22.4125 10.8747 20.7052 12.438 19.7899C12.1157 19.0494 11.9374 18.2301 11.9374 17.3731C11.9409 14.0203 14.6697 11.2983 18.0293 11.2983C20.0039 11.2983 21.7592 12.2377 22.8699 13.6912Z"
          fill="#F7FBFF"
        />
      </g>
      <path
        d="M53.1588 28.7616C50.1653 28.7616 48.2461 27.2464 48.0624 25.0151L48.0533 24.8957H50.0734L50.0826 24.9967C50.1928 26.1996 51.4692 26.971 53.2414 26.971C54.931 26.971 56.1339 26.1262 56.1339 24.8957V24.8865C56.1339 23.8672 55.4177 23.2061 53.6638 22.8296L52.213 22.5174C49.5225 21.9481 48.3655 20.6993 48.3655 18.7434V18.7342C48.3747 16.4477 50.3581 14.8683 53.168 14.8683C55.9778 14.8683 57.8144 16.4569 57.9613 18.5138L57.9705 18.6423H55.9778L55.9595 18.523C55.785 17.4394 54.7474 16.6497 53.1404 16.6589C51.5886 16.6589 50.4407 17.3843 50.4407 18.6332V18.6423C50.4407 19.6249 51.1386 20.2677 52.8558 20.635L54.2974 20.9564C57.0798 21.5532 58.2184 22.6735 58.2184 24.6386V24.6478C58.2184 27.1822 56.2441 28.7616 53.1588 28.7616ZM63.379 28.6055C61.4782 28.6055 60.0733 27.4485 60.0733 25.6395V25.6211C60.0733 23.8397 61.4139 22.8021 63.7922 22.6551L66.4919 22.499V21.6175C66.4919 20.5248 65.8032 19.9187 64.4534 19.9187C63.3515 19.9187 62.626 20.3228 62.3873 21.0298L62.3781 21.0666H60.459L60.4681 21.0023C60.7069 19.3678 62.2771 18.275 64.5452 18.275C67.0521 18.275 68.4662 19.5239 68.4662 21.6175V28.4402H66.4919V27.0261H66.3358C65.7481 28.0362 64.7013 28.6055 63.379 28.6055ZM62.0567 25.5568C62.0567 26.4751 62.8372 27.0169 63.9116 27.0169C65.3992 27.0169 66.4919 26.0435 66.4919 24.758V23.904L64.0585 24.0601C62.6811 24.1427 62.0567 24.6386 62.0567 25.5385V25.5568ZM71.3679 28.4402V14.5561H73.3605V28.4402H71.3679ZM80.5138 28.633C77.5937 28.633 75.8306 26.6404 75.8306 23.4816V23.4724C75.8306 20.3595 77.6304 18.275 80.4127 18.275C83.1951 18.275 84.903 20.286 84.903 23.2796V23.9774H77.8324C77.8692 25.8874 78.916 26.9985 80.5597 26.9985C81.8361 26.9985 82.5982 26.3649 82.837 25.8507L82.8737 25.7772L84.7928 25.768L84.7745 25.8507C84.4439 27.1638 83.0665 28.633 80.5138 28.633ZM80.4219 19.9095C79.0629 19.9095 78.0345 20.837 77.86 22.5541H82.9288C82.7727 20.7727 81.7718 19.9095 80.4219 19.9095ZM90.8993 28.633C88.4934 28.633 86.9691 27.5036 86.7763 25.8323V25.8231H88.7689L88.7781 25.8323C89.026 26.5853 89.7515 27.0903 90.936 27.0903C92.1665 27.0903 93.0205 26.5302 93.0205 25.713V25.6946C93.0205 25.0702 92.5522 24.6478 91.3951 24.3815L89.8066 24.0142C87.9241 23.5826 87.0518 22.7286 87.0518 21.2686V21.2594C87.0518 19.5239 88.6679 18.275 90.9268 18.275C93.2041 18.275 94.6641 19.4137 94.8386 21.039V21.0482H92.9378V21.0298C92.745 20.3319 92.0379 19.8085 90.9176 19.8085C89.8249 19.8085 89.0352 20.3503 89.0352 21.1492V21.1676C89.0352 21.792 89.4943 22.1777 90.6146 22.4439L92.194 22.8021C94.1132 23.252 95.0315 24.0693 95.0315 25.5109V25.5293C95.0315 27.375 93.2684 28.633 90.8993 28.633ZM98.1168 28.4402V20.0381H96.4731V18.4679H98.1168V17.4211C98.1168 15.4376 99.1177 14.4643 101.202 14.4643C101.643 14.4643 102.029 14.4918 102.378 14.5561V16.0161C102.194 15.9886 101.928 15.9702 101.615 15.9702C100.513 15.9702 100.082 16.5028 100.082 17.5129V18.4679H102.295V20.0381H100.1V28.4402H98.1168ZM108.374 28.633C105.445 28.633 103.654 26.6771 103.654 23.4632V23.4448C103.654 20.2401 105.454 18.275 108.374 18.275C111.285 18.275 113.084 20.2309 113.084 23.4448V23.4632C113.084 26.6771 111.294 28.633 108.374 28.633ZM108.374 26.971C110.082 26.971 111.055 25.667 111.055 23.4632V23.4448C111.055 21.2318 110.082 19.9371 108.374 19.9371C106.657 19.9371 105.692 21.2318 105.692 23.4448V23.4632C105.692 25.6762 106.657 26.971 108.374 26.971ZM115.463 28.4402V18.4679H117.455V19.9738H117.602C117.96 18.9178 118.888 18.2934 120.219 18.2934C120.541 18.2934 120.89 18.3393 121.092 18.3852V20.2218C120.734 20.1483 120.394 20.1024 120.017 20.1024C118.493 20.1024 117.455 21.039 117.455 22.4807V28.4402H115.463ZM126.932 28.633C124.021 28.633 122.24 26.6496 122.24 23.4265V23.4081C122.24 20.2493 124.012 18.275 126.923 18.275C129.429 18.275 130.926 19.6892 131.202 21.6267V21.6726L129.292 21.6818L129.283 21.6542C129.062 20.6717 128.254 19.9371 126.932 19.9371C125.27 19.9371 124.269 21.2594 124.269 23.4081V23.4265C124.269 25.6303 125.288 26.971 126.932 26.971C128.181 26.971 128.952 26.4016 129.273 25.3273L129.292 25.2814H131.202L131.183 25.364C130.825 27.3015 129.402 28.633 126.932 28.633ZM137.648 28.633C134.728 28.633 132.965 26.6404 132.965 23.4816V23.4724C132.965 20.3595 134.765 18.275 137.547 18.275C140.329 18.275 142.037 20.286 142.037 23.2796V23.9774H134.967C135.003 25.8874 136.05 26.9985 137.694 26.9985C138.97 26.9985 139.732 26.3649 139.971 25.8507L140.008 25.7772L141.927 25.768L141.909 25.8507C141.578 27.1638 140.201 28.633 137.648 28.633ZM137.556 19.9095C136.197 19.9095 135.169 20.837 134.994 22.5541H140.063C139.907 20.7727 138.906 19.9095 137.556 19.9095Z"
        fill="#F7FBFF"
      />
      <defs>
        <clipPath id="sync-salesforce-badge-clip">
          <rect width="31.3433" height="31.3433" fill="white" transform="translate(9.40234 6.26855)" />
        </clipPath>
      </defs>
    </svg>
  </span>
);

const SystemPicker = () => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.96 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 10, scale: 0.96 }}
    transition={{ duration: 0.28, ease: SHOWCASE_EASE_OUT }}
    style={SHOWCASE_PANEL_STYLE}
    className="absolute right-0 bottom-full z-20 mb-4 w-[220px] rounded-[24px] border border-white/80 bg-white/95 p-2 backdrop-blur-xl"
  >
    {SYSTEMS.map((item) => (
      <div
        key={item.name}
        className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-medium transition-all ${
          item.active ? "bg-inko-bg text-inko-blue-strong" : "text-inko-text hover:bg-[var(--surface-muted)]"
        }`}
      >
        <img src={item.icon} alt={item.name} className="h-6 w-6 shrink-0" />
        <span>{item.name}</span>
      </div>
    ))}
  </motion.div>
);

const SyncComposer = ({ status, text }: { status: SyncStatus; text: string }) => {
  const isSelected = status === "selected" || status === "sending";
  const showCursor = status === "typing";

  return (
    <ShowcaseComposerShell
      layout
      overlay={<AnimatePresence>{status === "selecting" ? <SystemPicker /> : null}</AnimatePresence>}
      action={
        <AnimatePresence mode="wait" initial={false}>
          {status === "sending" ? <ShowcaseStopButton key="stop" /> : <ShowcaseSendButton key="send" />}
        </AnimatePresence>
      }
      className="min-h-[88px] px-5 py-4 shadow-soft sm:px-7"
      contentClassName="pr-16 text-xl text-inko-blue-strong"
      actionClassName="absolute top-1/2 right-5 -translate-y-1/2 sm:right-7"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span>{text}</span>

        {isSelected ? <ActiveSystemBadge /> : null}

        {showCursor ? (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="h-6 w-0.5 bg-inko-blue-strong"
          />
        ) : null}
      </div>
    </ShowcaseComposerShell>
  );
};

const SyncResultPanel = ({
  resultViewRef,
  showThought,
  showResultContent,
}: {
  resultViewRef: RefObject<HTMLDivElement | null>;
  showThought: boolean;
  showResultContent: boolean;
}) => (
  <ShowcaseResultFrame resultViewRef={resultViewRef}>
    <div className="space-y-8">
      <div className="flex justify-end">
        <ShowcaseMessageBubble>
          <div className="flex flex-wrap items-center gap-2">
            <span>Push today&apos;s client conversations into</span>
            <ActiveSystemBadge compact />
          </div>
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
        animate={{ opacity: showResultContent ? 1 : 0, y: showResultContent ? 0 : 16 }}
        transition={{ duration: 0.45, ease: SHOWCASE_EASE_OUT }}
        className="space-y-7 text-[17px] leading-[1.55] text-[#171717]"
      >
        <p>
          Done - I found today&apos;s client conversations and synced them to{" "}
          <span className="font-semibold text-inko-blue">@salesforce</span>.
        </p>

        <section className="space-y-4">
          <h3 className="text-[18px] font-bold text-[#171717]">Sync summary</h3>
          <ul className="list-disc space-y-2.5 pl-7">
            {["Conversations found: 12", "Synced successfully: 10", "Needs review: 2"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-[18px] font-bold text-[#171717]">Items flagged</h3>
          <ul className="list-disc space-y-2.5 pl-7">
            {[
              "1 conversation missing a clear client name",
              "1 conversation could not be matched to an existing Salesforce record",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-[18px] font-bold text-[#171717]">What was synced</h3>
          <ul className="list-disc space-y-2.5 pl-7">
            {[
              "Conversation summaries",
              "Client names and companies",
              "Key needs and objections",
              "Follow-up actions",
              "Next-step notes",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <p className="text-[16px] text-[#666666]">Suggested prompts:</p>
          <div className="space-y-3">
            {[
              "Summarize today's client conversations by deal stage.",
              "Create follow-up tasks from today's client conversations.",
              "Summarize today's conversations.",
            ].map((prompt, index) => (
              <motion.button
                key={prompt}
                type="button"
                whileHover={{ x: 4 }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: showResultContent ? 1 : 0, y: showResultContent ? 0 : 8 }}
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

export const SyncShowcase = ({ onCycleComplete }: ShowcaseCycleProps) => {
  const [status, setStatus] = useState<SyncStatus>("idle");
  const [text, setText] = useState("");
  const [showThought, setShowThought] = useState(false);
  const [showResultContent, setShowResultContent] = useState(false);
  const resultViewRef = useRef<HTMLDivElement>(null);

  const completeCycle = () => {
    if (onCycleComplete) {
      onCycleComplete();
      return;
    }

    setStatus("idle");
    setText("");
    setShowThought(false);
    setShowResultContent(false);
    if (resultViewRef.current) {
      resultViewRef.current.scrollTop = 0;
    }
  };

  useEffect(() => {
    if (status !== "idle") {
      return;
    }

    const timeout = window.setTimeout(() => setStatus("typing"), 1500);
    return () => window.clearTimeout(timeout);
  }, [status]);

  useEffect(() => {
    if (status !== "typing") {
      return;
    }

    const timeout = window.setTimeout(() => {
      const nextText = FULL_TEXT.slice(0, text.length + 1);
      setText(nextText);

      if (nextText.endsWith("/")) {
        setStatus("selecting");
      }
    }, 40 + Math.random() * 40);

    return () => window.clearTimeout(timeout);
  }, [status, text]);

  useEffect(() => {
    if (status !== "selecting") {
      return;
    }

    const timeout = window.setTimeout(() => {
      setText(FULL_TEXT.replace("/", ""));
      setStatus("selected");
    }, 1200);

    return () => window.clearTimeout(timeout);
  }, [status]);

  useEffect(() => {
    if (status !== "selected") {
      return;
    }

    const timeout = window.setTimeout(() => setStatus("sending"), 1000);
    return () => window.clearTimeout(timeout);
  }, [status]);

  useEffect(() => {
    if (status !== "sending") {
      return;
    }

    const timeout = window.setTimeout(() => {
      setStatus("result");
      setShowThought(false);
      setShowResultContent(false);
    }, 800);

    return () => window.clearTimeout(timeout);
  }, [status]);

  useEffect(() => {
    if (status !== "result") {
      return;
    }

    const thoughtTimeout = window.setTimeout(() => setShowThought(true), 800);
    const contentTimeout = window.setTimeout(() => setShowResultContent(true), 2300);

    return () => {
      window.clearTimeout(thoughtTimeout);
      window.clearTimeout(contentTimeout);
    };
  }, [status]);

  useEffect(() => {
    if (status !== "result" || !showResultContent || !resultViewRef.current) {
      return;
    }

    const resultView = resultViewRef.current;
    const targetScroll = resultView.scrollHeight - resultView.clientHeight;
    let frameId = 0;
    let resetTimeout: number | undefined;

    if (targetScroll <= 0) {
      resetTimeout = window.setTimeout(completeCycle, 2000);
      return () => {
        if (resetTimeout) {
          window.clearTimeout(resetTimeout);
        }
      };
    }

    const startTime = performance.now();
    const duration = 3000;

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress * (2 - progress);

      resultView.scrollTop = targetScroll * eased;

      if (progress < 1) {
        frameId = requestAnimationFrame(animateScroll);
      } else {
        resetTimeout = window.setTimeout(completeCycle, 2000);
      }
    };

    frameId = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(frameId);
      if (resetTimeout) {
        window.clearTimeout(resetTimeout);
      }
    };
  }, [onCycleComplete, showResultContent, status]);

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-xl">
      <AnimatePresence mode="wait" initial={false}>
        {status === "result" ? (
          <SyncResultPanel
            resultViewRef={resultViewRef}
            showThought={showThought}
            showResultContent={showResultContent}
          />
        ) : (
          <motion.div
            key="sync-composer"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.32, ease: SHOWCASE_EASE_OUT }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/2 right-0 left-0 -translate-y-1/2 px-5 sm:px-6">
              <SyncComposer status={status} text={text} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
