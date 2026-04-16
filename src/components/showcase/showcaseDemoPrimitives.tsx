import type { ReactNode, RefObject } from "react";
import { motion } from "motion/react";
import { Send, Square } from "lucide-react";

export type ShowcaseCycleProps = {
  onCycleComplete?: () => void;
};

export const SHOWCASE_EASE_OUT = [0.4, 0, 0.2, 1] as const;

export const SHOWCASE_GLASS_STYLE = {
  background: "#F5FAFF",
  boxShadow: "0 26px 56px rgba(3, 74, 118, 0.55)",
};

export const SHOWCASE_PANEL_STYLE = {
  boxShadow: "0 24px 56px rgba(17, 62, 84, 0.16)",
};

export const SHOWCASE_RESULT_INPUT_STYLE = {
  boxShadow: "0 20px 50px rgba(17, 62, 84, 0.08)",
};

export const SHOWCASE_STOP_STYLE = {
  boxShadow: "0 12px 28px rgba(59, 153, 251, 0.35)",
};

export const scheduleTyping = ({
  schedule,
  startDelay,
  text,
  interval,
  onUpdate,
}: {
  schedule: (delay: number, callback: () => void) => void;
  startDelay: number;
  text: string;
  interval: number;
  onUpdate: (value: string) => void;
}) => {
  text.split("").forEach((_, index) => {
    schedule(startDelay + index * interval, () => {
      onUpdate(text.slice(0, index + 1));
    });
  });

  return startDelay + (text.length - 1) * interval;
};

export const ShowcaseSendButton = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.86 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.86 }}
    transition={{ duration: 0.2 }}
    className="text-[#3B99FB]"
  >
    <Send className="h-8 w-8" strokeWidth={1.9} />
  </motion.div>
);

export const ShowcaseStopButton = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.86 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.86 }}
    transition={{ duration: 0.2 }}
    style={SHOWCASE_STOP_STYLE}
    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3B99FB] text-white"
  >
    <Square className="h-4 w-4 fill-current" />
  </motion.div>
);

export const ShowcaseComposerShell = ({
  children,
  action,
  overlay,
  className = "",
  contentClassName = "",
  actionClassName = "",
  layout = false,
}: {
  children: ReactNode;
  action: ReactNode;
  overlay?: ReactNode;
  className?: string;
  contentClassName?: string;
  actionClassName?: string;
  layout?: boolean;
}) => (
  <motion.div
    layout={layout || undefined}
    transition={{ duration: 0.45, ease: SHOWCASE_EASE_OUT }}
    style={SHOWCASE_GLASS_STYLE}
    className={`relative rounded-[2rem] border border-white/70 backdrop-blur-2xl ${className}`}
  >
    {overlay}
    <div className={contentClassName}>{children}</div>
    <div className={actionClassName}>{action}</div>
  </motion.div>
);

export const ShowcaseMessageBubble = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: 18 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.35, ease: SHOWCASE_EASE_OUT }}
    className="max-w-[86%] rounded-[1.35rem] border border-[#F3F6FA] bg-[#F7FBFF] px-4 py-3.5 shadow-[0_4px_12px_rgba(17,62,84,0.08)]"
  >
    <div className="text-[18px] leading-[1.65] text-[#166EB1]">{children}</div>
  </motion.div>
);

export const ShowcaseResultFrame = ({
  resultViewRef,
  children,
  bottomLabel = "Ask about these notes",
}: {
  resultViewRef: RefObject<HTMLDivElement | null>;
  children: ReactNode;
  bottomLabel?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 14, scale: 0.985 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -14, scale: 0.985 }}
    transition={{ duration: 0.35, ease: SHOWCASE_EASE_OUT }}
    className="absolute inset-0 overflow-hidden rounded-[2.35rem] bg-white"
  >
    <div
      ref={resultViewRef}
      className="absolute inset-0 overflow-y-auto px-7 pt-8 pb-44 scrollbar-hide sm:px-9 sm:pt-8 sm:pb-48"
    >
      {children}
    </div>

    <div className="absolute right-7 bottom-7 left-7 sm:right-8 sm:bottom-8 sm:left-8">
      <div
        style={SHOWCASE_RESULT_INPUT_STYLE}
        className="flex h-20 items-center gap-4 rounded-[2rem] border border-white/80 bg-[#F5FAFF] px-7 backdrop-blur-2xl"
      >
        <span className="flex-1 text-[17px] text-[#C7D9EC]">{bottomLabel}</span>
        <ShowcaseStopButton />
      </div>
    </div>
  </motion.div>
);
