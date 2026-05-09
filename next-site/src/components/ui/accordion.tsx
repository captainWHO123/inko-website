"use client";

import { useMemo, useState } from "react";

import { trackEvent } from "@/lib/analytics/track";
import { cn } from "@/lib/utils/cn";
import type { FaqItem } from "@/types/sections";
import type { PreorderState } from "@/types/state";

interface AccordionProps {
  items: FaqItem[];
  categoryId: string;
  pageState: PreorderState;
}

export function Accordion({ items, categoryId, pageState }: AccordionProps) {
  const priorityIds = useMemo(
    () => items.filter((item) => item.priority).map((item) => item.id),
    [items],
  );
  const [openIds, setOpenIds] = useState<string[]>(() => {
    const initialIds = [...priorityIds];

    if (typeof window === "undefined") {
      return initialIds;
    }

    const hash = window.location.hash.replace("#", "");

    if (hash && items.some((item) => item.id === hash) && !initialIds.includes(hash)) {
      initialIds.push(hash);
    }

    return initialIds;
  });

  function toggleItem(itemId: string) {
    setOpenIds((current) => {
      const isOpen = current.includes(itemId);

      if (!isOpen) {
        trackEvent("faq_expand", {
          faq_id: itemId,
          section_id: categoryId,
          page_state: pageState,
        });
      }

      if (isOpen) {
        return current.filter((id) => id !== itemId);
      }

      window.history.replaceState({}, "", `#${itemId}`);
      return [...current, itemId];
    });
  }

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <article
            key={item.id}
            id={item.id}
            className="rounded-[24px] border border-ink-200 bg-white p-5 shadow-sm"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              onClick={() => toggleItem(item.id)}
            >
              <span className="text-base font-semibold text-ink-950">{item.question}</span>
              <span
                aria-hidden="true"
                className={cn(
                  "text-xl text-teal-800 transition",
                  isOpen && "rotate-45",
                )}
              >
                +
              </span>
            </button>
            {isOpen ? (
              <div className="mt-4 border-t border-ink-100 pt-4 text-sm leading-7 text-ink-700">
                <p>{item.answer}</p>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
