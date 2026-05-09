import Image from "next/image";

import { cn } from "@/lib/utils/cn";
import type { SectionMedia } from "@/types/sections";

interface StageMediaPanelProps {
  media?: SectionMedia;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  sizes?: string;
  priority?: boolean;
  animated?: boolean;
  framed?: boolean;
}

export function StageMediaPanel({
  media,
  className,
  imageClassName,
  overlayClassName,
  sizes = "100vw",
  priority = false,
  animated = true,
  framed = true,
}: StageMediaPanelProps) {
  if (!media) {
    return null;
  }

  return (
    <div className={cn("relative overflow-hidden", framed && "inko-stage-shell", className)}>
      {framed ? <div className="inko-stage-spotlight" /> : null}
      {framed ? <div className="inko-stage-beam" /> : null}
      {media.type === "image" ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(animated && "inko-stage-pan", "object-cover object-center", imageClassName)}
        />
      ) : (
        <video
          src={media.src}
          poster={media.poster}
          autoPlay
          muted
          loop
          playsInline
          className={cn(animated && "inko-stage-pan", "h-full w-full object-cover object-center", imageClassName)}
        />
      )}
      {framed ? <div className="inko-grid-overlay" /> : null}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,14,18,0.06),rgba(8,14,18,0.22))]",
          overlayClassName,
        )}
      />
    </div>
  );
}
