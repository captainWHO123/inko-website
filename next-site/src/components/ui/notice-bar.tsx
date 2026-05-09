import type { NoticeBannerContent } from "@/types/sections";

import { cn } from "@/lib/utils/cn";

const toneClasses: Record<NoticeBannerContent["tone"], string> = {
  info: "border-blue-200 bg-blue-50 text-blue-950",
  success: "border-teal-200 bg-teal-50 text-teal-950",
  warning: "border-amber-200 bg-amber-50 text-amber-950",
  danger: "border-red-200 bg-red-50 text-red-950",
};

interface NoticeBarProps {
  notice: NoticeBannerContent;
  className?: string;
}

export function NoticeBar({ notice, className }: NoticeBarProps) {
  return (
    <div
      className={cn(
        "rounded-[24px] border px-4 py-3 text-sm shadow-[0_16px_34px_-24px_rgba(16,24,32,0.3)] md:px-5",
        toneClasses[notice.tone],
        className,
      )}
    >
      <p className="font-semibold">{notice.title}</p>
      <p className="mt-1 text-sm/6 opacity-90">{notice.body}</p>
    </div>
  );
}
