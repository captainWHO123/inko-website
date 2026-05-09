import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils/cn";

type CardTone = "default" | "warm" | "outline" | "stage";

const toneClasses: Record<CardTone, string> = {
  default:
    "border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(250,247,241,0.9))] shadow-card ring-1 ring-ink-950/[0.03] backdrop-blur-sm",
  warm:
    "border border-amber-200/70 bg-[linear-gradient(180deg,rgba(252,246,237,0.96),rgba(249,239,225,0.9))] shadow-card ring-1 ring-amber-950/[0.05]",
  outline: "border border-ink-200/75 bg-white/70 shadow-[0_18px_34px_-30px_rgba(16,24,32,0.12)] backdrop-blur-sm",
  stage:
    "border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(94,176,190,0.14),transparent_18%),linear-gradient(145deg,#101820_0%,#162431_52%,#1c3340_100%)] text-white shadow-[0_40px_82px_-52px_rgba(16,24,32,0.6)] ring-1 ring-black/10 backdrop-blur-sm",
};

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  tone?: CardTone;
  padded?: boolean;
}

export function Card({
  className,
  tone = "default",
  padded = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[32px]",
        toneClasses[tone],
        padded && "p-6 md:p-8",
        className,
      )}
      {...props}
    />
  );
}
