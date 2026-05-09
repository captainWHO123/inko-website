import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils/cn";

export function Badge({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-teal-300/70 bg-teal-50/95 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal-900 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}
