import { cn } from "@/lib/utils/cn";

/* eslint-disable @next/next/no-img-element */

interface PenDeviceFigureProps {
  className?: string;
  tone?: "dark" | "light";
  compact?: boolean;
  hotspots?: Array<{
    label: string;
    anchor: "button" | "microphone" | "body";
    side?: "left" | "right";
  }>;
  media?: {
    type: "figure" | "image" | "video";
    src?: string;
    alt?: string;
    poster?: string;
  };
  calloutLabel?: string;
}

export function PenDeviceFigure({
  className,
  tone = "dark",
  compact = false,
  hotspots = [],
  media,
  calloutLabel = "One-click capture",
}: PenDeviceFigureProps) {
  const shellClassName =
    tone === "dark"
      ? "border-white/12 bg-[linear-gradient(180deg,#f3f6f9_0%,#ced7df_55%,#8fa0b0_100%)]"
      : "border-ink-200/85 bg-[linear-gradient(180deg,#f7fafc_0%,#dbe3ea_58%,#a3b0bb_100%)]";
  const clipClassName =
    tone === "dark" ? "border-white/14 bg-white/10" : "border-ink-200/85 bg-white/90";
  const detailClassName = tone === "dark" ? "bg-[#1f3445]" : "bg-[#dfe7ed]";
  const shadowClassName =
    tone === "dark"
      ? "shadow-[0_22px_44px_-20px_rgba(7,12,18,0.6)]"
      : "shadow-[0_20px_38px_-22px_rgba(16,24,32,0.22)]";

  return (
    <div
      className={cn(
        "group/pen relative flex items-center justify-center inko-float",
        compact ? "h-28 w-20" : "h-40 w-24",
        className,
      )}
    >
      <div
        className={cn(
          "absolute right-0 top-0 z-20 rounded-full border px-2.5 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.14em]",
          tone === "dark"
            ? "border-white/14 bg-white/10 text-white/80"
            : "border-ink-200/80 bg-white/92 text-ink-700",
        )}
      >
        {calloutLabel}
      </div>
      {!media?.src || media.type === "figure"
        ? hotspots.map((hotspot) => {
            const anchorClassName =
              hotspot.anchor === "button"
                ? compact
                  ? "top-[42%]"
                  : "top-[44%]"
                : hotspot.anchor === "microphone"
                  ? compact
                    ? "top-[22%]"
                    : "top-[24%]"
                  : compact
                    ? "top-[68%]"
                    : "top-[70%]";

            return (
              <div
                key={`${hotspot.anchor}-${hotspot.label}`}
                className={cn(
                  "absolute z-20 hidden items-center gap-2 rounded-full border px-2.5 py-1.5 text-[0.52rem] font-semibold uppercase tracking-[0.12em] shadow-[0_18px_32px_-24px_rgba(16,24,32,0.35)] transition duration-300 md:flex",
                  anchorClassName,
                  hotspot.side === "left" ? "left-0 -translate-x-[72%]" : "right-0 translate-x-[72%] flex-row-reverse",
                  tone === "dark"
                    ? "border-white/12 bg-[#183042]/86 text-white/82 opacity-0 backdrop-blur-sm group-hover/pen:opacity-100"
                    : "border-ink-200/85 bg-white/94 text-ink-700 opacity-0 backdrop-blur-sm group-hover/pen:opacity-100",
                )}
              >
                <span
                  className={cn(
                    "h-px w-8",
                    tone === "dark" ? "bg-white/24" : "bg-ink-300/80",
                  )}
                />
                <span>{hotspot.label}</span>
              </div>
            );
          })
        : null}
      {media?.src && media.type === "image" ? (
        <>
          <div
            className={cn(
              "absolute bottom-0 left-1/2 h-3 w-16 -translate-x-1/2 rounded-full blur-md",
              tone === "dark" ? "bg-black/42" : "bg-ink-950/16",
            )}
          />
          <div
            className={cn(
              "relative flex h-full w-full items-center justify-center rounded-[32px] border",
              compact ? "p-1.5" : "p-2",
              clipClassName,
            )}
          >
            <img
              src={media.src}
              alt={media.alt ?? "Inko pen-sized recorder"}
              className="h-full w-full rounded-[28px] object-contain drop-shadow-[0_22px_30px_rgba(16,24,32,0.22)]"
            />
          </div>
        </>
      ) : null}
      {media?.src && media.type === "video" ? (
        <>
          <div
            className={cn(
              "absolute bottom-0 left-1/2 h-3 w-16 -translate-x-1/2 rounded-full blur-md",
              tone === "dark" ? "bg-black/42" : "bg-ink-950/16",
            )}
          />
          <div
            className={cn(
              "relative flex h-full w-full items-center justify-center rounded-[32px] border",
              compact ? "p-1.5" : "p-2",
              clipClassName,
            )}
          >
            <video
              src={media.src}
              poster={media.poster}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full rounded-[28px] object-contain drop-shadow-[0_22px_30px_rgba(16,24,32,0.22)]"
            />
          </div>
        </>
      ) : null}
      {!media?.src || media.type === "figure" ? (
        <>
          <div
            className={cn(
              "absolute bottom-0 left-1/2 h-3 w-12 -translate-x-1/2 rounded-full blur-md",
              tone === "dark" ? "bg-black/40" : "bg-ink-950/15",
            )}
          />
          <div
            className={cn(
              "relative flex h-full w-full items-center justify-center rounded-[32px] border",
              compact ? "p-2" : "p-3",
              clipClassName,
            )}
          >
            <div
              className={cn(
                "relative rounded-full border transition duration-300 group-hover/pen:rotate-[1.5deg] group-hover/pen:scale-[1.02]",
                compact ? "h-24 w-5" : "h-32 w-6",
                shellClassName,
                shadowClassName,
              )}
            >
              <div
                className={cn(
                  "absolute left-1/2 top-2 h-[38%] w-[35%] -translate-x-1/2 rounded-full blur-[10px]",
                  tone === "dark" ? "bg-white/24" : "bg-white/55",
                )}
              />
              <div
                className={cn(
                  "absolute left-1/2 rounded-full",
                  compact ? "top-3 h-6 w-2.5 -translate-x-1/2" : "top-4 h-7 w-3 -translate-x-1/2",
                  detailClassName,
                )}
              />
              <div
                className={cn(
                  "absolute left-1/2 rounded-full",
                  compact ? "top-10 h-2 w-2 -translate-x-1/2 bg-white/90" : "top-12 h-2.5 w-2.5 -translate-x-1/2 bg-white/92",
                )}
              />
              <div
                className={cn(
                  "absolute left-1/2 rounded-full ring-2 inko-pulse",
                  compact ? "top-10 h-2 w-2 -translate-x-1/2 ring-white/35" : "top-12 h-2.5 w-2.5 -translate-x-1/2 ring-white/40",
                  "bg-white/95",
                )}
              />
              <div
                className={cn(
                  "absolute bottom-8 left-1/2 h-4 -translate-x-1/2 rounded-full bg-white/32",
                  compact ? "w-1.5" : "w-2",
                )}
              />
              <div
                className={cn(
                  "absolute bottom-3 left-1/2 h-5 -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,#f8fafc_0%,#d6dee5_100%)]",
                  compact ? "w-2.5" : "w-3",
                )}
              />
              <div
                className={cn(
                  "absolute inset-x-1/2 top-1 h-6 -translate-x-1/2 rounded-full border",
                  compact ? "w-1.5" : "w-2",
                  tone === "dark"
                    ? "border-white/18 bg-white/12"
                    : "border-ink-200/85 bg-white/94",
                )}
              />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
