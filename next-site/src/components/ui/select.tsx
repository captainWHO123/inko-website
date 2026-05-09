import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils/cn";

export const Select = forwardRef<
  HTMLSelectElement,
  ComponentPropsWithoutRef<"select">
>(function Select({ className, ...props }, ref) {
  return (
    <select
      ref={ref}
      className={cn(
        "h-12 w-full rounded-[1.25rem] border border-black/8 bg-[#f8f3ea] px-4 text-sm text-ink-950 outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-200",
        className,
      )}
      {...props}
    />
  );
});
