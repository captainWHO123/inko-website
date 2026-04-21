import { motion } from "motion/react";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

type TemplateDimension = {
  id: string;
  label: string;
  backgroundColor: string;
  textColor: string;
  badge?: string;
  widths: string[];
};

type MovePlacement = "before" | "after";

type AutoplayStep = {
  itemId: string;
  targetId: string;
  placement: MovePlacement;
};

const templateDimensions: TemplateDimension[] = [
  { id: "need", label: "Need", backgroundColor: "#f1ffeb", textColor: "#2f8d03", widths: ["100%", "100%", "43%"] },
  { id: "resistance", label: "Resistance", backgroundColor: "#ffe6e6", textColor: "#cf0303", widths: ["100%", "64%"] },
  {
    id: "script-review",
    label: "Script Review",
    backgroundColor: "#e3e8ff",
    textColor: "#4f62b5",
    badge: "Edit",
    widths: ["100%", "92%"],
  },
  { id: "budget", label: "Budget", backgroundColor: "#e9f6ff", textColor: "#096fb8", widths: ["100%"] },
  { id: "timeline", label: "Timeline", backgroundColor: "#fff5ee", textColor: "#c44f01", widths: ["64%"] },
];

const cardSurfaceStyle = {
  backgroundImage: "linear-gradient(105deg, rgba(255, 255, 255, 0.9) 41.24%, rgba(255, 255, 255, 0.72) 83.336%)",
  boxShadow: "0 12.78px 29.82px rgba(17, 62, 84, 0.08)",
} as const;

const rowLayoutTransition = {
  type: "spring",
  stiffness: 360,
  damping: 32,
  mass: 0.65,
} as const;

const staticDimensionIds = ["budget", "timeline"] as const;
const staticDimensionIdSet = new Set<string>(staticDimensionIds);
const activeRowShadow = "0 16px 38px rgba(17, 62, 84, 0.16)";
const autoPlaySequence: AutoplayStep[] = [
  { itemId: "need", targetId: "resistance", placement: "after" },
  { itemId: "script-review", targetId: "resistance", placement: "before" },
  { itemId: "need", targetId: "script-review", placement: "before" },
  { itemId: "resistance", targetId: "need", placement: "after" },
];
const AUTO_PLAY_INITIAL_DELAY = 1000;
const AUTO_PLAY_STEP_DURATION = 1140;
const AUTO_PLAY_STEP_DELAY = 520;
const AUTO_PLAY_RESUME_DELAY = 1400;

function moveItem<T extends { id: string }>(items: T[], itemId: string, insertIndex: number) {
  const activeItem = items.find((item) => item.id === itemId);

  if (!activeItem) {
    return items;
  }

  const remainingItems = items.filter((item) => item.id !== itemId);
  const boundedIndex = Math.max(0, Math.min(insertIndex, remainingItems.length));
  const nextItems = [
    ...remainingItems.slice(0, boundedIndex),
    activeItem,
    ...remainingItems.slice(boundedIndex),
  ];

  return nextItems.every((item, index) => item.id === items[index]?.id) ? items : nextItems;
}

function getStaticDimensions<T extends { id: string }>(items: T[]) {
  const itemMap = new Map(items.map((item) => [item.id, item]));

  return staticDimensionIds
    .map((id) => itemMap.get(id))
    .filter((item): item is T => Boolean(item));
}

function getAnimatedDimensions<T extends { id: string }>(items: T[]) {
  return items.filter((item) => !staticDimensionIdSet.has(item.id));
}

function moveAnimatedItem<T extends { id: string }>(items: T[], itemId: string, insertIndex: number) {
  if (staticDimensionIdSet.has(itemId)) {
    return items;
  }

  const nextAnimatedItems = moveItem(getAnimatedDimensions(items), itemId, insertIndex);
  const nextItems = [...nextAnimatedItems, ...getStaticDimensions(items)];

  return nextItems.every((item, index) => item.id === items[index]?.id) ? items : nextItems;
}

function getInsertIndex<T extends { id: string }>(
  items: T[],
  itemId: string,
  targetId: string,
  placement: MovePlacement,
) {
  const remainingItems = items.filter((item) => item.id !== itemId);
  const targetIndex = remainingItems.findIndex((item) => item.id === targetId);

  if (targetIndex === -1) {
    return null;
  }

  return placement === "before" ? targetIndex : targetIndex + 1;
}

function easeInOutCubic(value: number) {
  if (value < 0.5) {
    return 4 * value * value * value;
  }

  return 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function DragHandle({ isDragging }: { isDragging: boolean }) {
  return (
    <div
      className={`flex self-stretch items-center bg-white/70 px-1.5 sm:px-2 lg:px-[8.5px] ${isDragging ? "cursor-grabbing" : "cursor-grab touch-none"}`}
      data-drag-handle="true"
    >
      <div className="grid grid-cols-2 gap-[2px] sm:gap-[3px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <span
            key={index}
            className="h-[2px] w-[2px] rounded-full bg-[#d4d4d4] sm:h-[3px] sm:w-[3px] lg:h-[3.5px] lg:w-[3.5px]"
          />
        ))}
      </div>
    </div>
  );
}

function TemplateDimensionRow({
  itemId,
  label,
  backgroundColor,
  textColor,
  badge,
  isDragging,
  dragOffset,
  onPointerDown,
  onRef,
}: {
  itemId: string;
  label: string;
  backgroundColor: string;
  textColor: string;
  badge?: string;
  isDragging: boolean;
  dragOffset: number;
  onPointerDown: (event: ReactPointerEvent<HTMLDivElement>) => void;
  onRef: (node: HTMLDivElement | null) => void;
}) {
  return (
    <motion.div
      ref={onRef}
      layout
      transition={rowLayoutTransition}
      onPointerDown={onPointerDown}
      className={`relative overflow-hidden rounded-[10px] sm:rounded-[12px] lg:rounded-[9.86px] ${isDragging ? "z-20 cursor-grabbing" : "z-0 cursor-grab"}`}
      style={{
        y: isDragging ? dragOffset : 0,
        boxShadow: isDragging ? activeRowShadow : "0 0 0 rgba(0, 0, 0, 0)",
        scale: isDragging ? 1.01 : 1,
      }}
      aria-grabbed={isDragging}
      data-template-dimension-id={itemId}
    >
      <div className="flex items-stretch" style={{ backgroundColor }}>
        <DragHandle isDragging={isDragging} />
        <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5 px-3 py-2.5 text-center sm:gap-2 sm:px-4 sm:py-3 lg:gap-2 lg:px-[18px] lg:py-[10px]">
          <span
            className="shrink-0 whitespace-nowrap text-[12px] leading-[1.2] font-medium sm:text-[13px] lg:text-[14px]"
            style={{ color: textColor }}
          >
            {label}
          </span>
          {badge ? (
            <span className="shrink-0 whitespace-nowrap rounded-[4px] bg-[#4f62b5] px-1.5 py-0.5 text-[12px] leading-[1.1] font-medium text-white lg:px-[7px] lg:py-[2px] lg:text-[12px]">
              {badge}
            </span>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

function PreviewSection({
  label,
  widths,
  isDragging,
  dragOffset,
}: {
  label: string;
  widths: string[];
  isDragging: boolean;
  dragOffset: number;
}) {
  return (
    <motion.div
      layout
      transition={rowLayoutTransition}
      className={`relative flex flex-col gap-1 sm:gap-1.5 lg:gap-[5px] ${isDragging ? "z-10" : "z-0"}`}
      style={{ y: isDragging ? dragOffset : 0 }}
    >
      <p className="whitespace-nowrap text-[14px] leading-[1.2] font-medium text-[#090c0d] lg:text-[15px]">
        {label}
      </p>
      <div className="flex flex-col gap-1 sm:gap-1.5 lg:gap-[5px]">
        {widths.map((width, index) => (
          <div
            key={`${label}-${index}`}
            className="h-[6px] rounded-[4px] bg-[#f1f1f1] sm:h-[10px] lg:h-[16px]"
            style={{ width }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function TemplateFeatureVisual() {
  const [dimensions, setDimensions] = useState(templateDimensions);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState(0);

  const dimensionsRef = useRef(dimensions);
  const rowRefs = useRef(new Map<string, HTMLDivElement>());
  const dragSessionRef = useRef<{
    pointerId: number;
    pointerOffsetY: number;
  } | null>(null);
  const activeAnimationFrameRef = useRef<number | null>(null);
  const autoPlayStepIndexRef = useRef(0);
  const autoPlayPausedRef = useRef(false);
  const autoPlayResumeTimerRef = useRef<number | null>(null);
  const autoDragGenerationRef = useRef(0);
  const isAutoDraggingRef = useRef(false);
  const isPointerInsideRef = useRef(false);

  useEffect(() => {
    dimensionsRef.current = dimensions;
  }, [dimensions]);

  const clearResumeTimer = () => {
    if (autoPlayResumeTimerRef.current !== null) {
      window.clearTimeout(autoPlayResumeTimerRef.current);
      autoPlayResumeTimerRef.current = null;
    }
  };

  const pauseAutoPlay = () => {
    clearResumeTimer();
    autoPlayPausedRef.current = true;
  };

  const resumeAutoPlay = (delay = 0) => {
    clearResumeTimer();

    if (delay <= 0) {
      autoPlayPausedRef.current = false;
      return;
    }

    autoPlayResumeTimerRef.current = window.setTimeout(() => {
      autoPlayPausedRef.current = false;
      autoPlayResumeTimerRef.current = null;
    }, delay);
  };

  const cancelScriptedDrag = () => {
    autoDragGenerationRef.current += 1;

    if (activeAnimationFrameRef.current !== null) {
      cancelAnimationFrame(activeAnimationFrameRef.current);
      activeAnimationFrameRef.current = null;
    }

    if (!isAutoDraggingRef.current) {
      return;
    }

    isAutoDraggingRef.current = false;
    setActiveId(null);
    setDragOffset(0);
  };

  const getProjectedInsertIndex = (
    currentDimensions: TemplateDimension[],
    movingId: string,
    projectedCenter: number,
    preserveStaticItems = false,
  ) => {
    const remainingDimensions = currentDimensions.filter(
      (item) => item.id !== movingId && (!preserveStaticItems || !staticDimensionIdSet.has(item.id)),
    );
    let insertIndex = remainingDimensions.length;

    for (let index = 0; index < remainingDimensions.length; index += 1) {
      const row = rowRefs.current.get(remainingDimensions[index].id);

      if (!row) {
        continue;
      }

      const rowRect = row.getBoundingClientRect();

      if (projectedCenter < rowRect.top + rowRect.height / 2) {
        insertIndex = index;
        break;
      }
    }

    return insertIndex;
  };

  const applyProjectedDragPosition = (
    movingId: string,
    projectedTop: number,
    preserveStaticItems = false,
  ) => {
    const activeRow = rowRefs.current.get(movingId);

    if (!activeRow) {
      return false;
    }

    const activeRowRect = activeRow.getBoundingClientRect();
    const projectedCenter = projectedTop + activeRowRect.height / 2;

    setDragOffset(projectedTop - activeRowRect.top);
    setDimensions((currentDimensions) => {
      const insertIndex = getProjectedInsertIndex(currentDimensions, movingId, projectedCenter, preserveStaticItems);
      return preserveStaticItems
        ? moveAnimatedItem(currentDimensions, movingId, insertIndex)
        : moveItem(currentDimensions, movingId, insertIndex);
    });

    return true;
  };

  const getAutoPlaySlotTop = (step: AutoplayStep) => {
    const currentDimensions = getAnimatedDimensions(dimensionsRef.current);
    const insertIndex = getInsertIndex(currentDimensions, step.itemId, step.targetId, step.placement);
    const activeRow = rowRefs.current.get(step.itemId);

    if (insertIndex === null || !activeRow) {
      return null;
    }

    const remainingDimensions = currentDimensions.filter((item) => item.id !== step.itemId);

    if (insertIndex < remainingDimensions.length) {
      const slotRow = rowRefs.current.get(remainingDimensions[insertIndex].id);
      return slotRow ? slotRow.getBoundingClientRect().top : null;
    }

    const remainingRows = remainingDimensions
      .map((item) => rowRefs.current.get(item.id))
      .filter((row): row is HTMLDivElement => Boolean(row));

    if (remainingRows.length === 0) {
      return activeRow.getBoundingClientRect().top;
    }

    const rowTops = remainingRows.map((row) => row.getBoundingClientRect().top).sort((left, right) => left - right);
    const rowDiffs = rowTops.slice(1).map((top, index) => top - rowTops[index]).filter((diff) => diff > 0);
    const stepSize =
      rowDiffs.length > 0
        ? rowDiffs.reduce((total, diff) => total + diff, 0) / rowDiffs.length
        : activeRow.getBoundingClientRect().height + 8;

    return rowTops[rowTops.length - 1] + stepSize;
  };

  useEffect(() => {
    if (!activeId || !dragSessionRef.current) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const dragSession = dragSessionRef.current;

      if (!dragSession || event.pointerId !== dragSession.pointerId) {
        return;
      }

      const activeRow = rowRefs.current.get(activeId);

      if (!activeRow) {
        return;
      }

      event.preventDefault();
      const projectedTop = event.clientY - dragSession.pointerOffsetY;
      applyProjectedDragPosition(activeId, projectedTop);
    };

    const stopDragging = (event?: PointerEvent) => {
      const dragSession = dragSessionRef.current;

      if (event && dragSession && event.pointerId !== dragSession.pointerId) {
        return;
      }

      dragSessionRef.current = null;
      setActiveId(null);
      setDragOffset(0);
      document.body.style.userSelect = "";

      if (!isPointerInsideRef.current) {
        resumeAutoPlay(AUTO_PLAY_RESUME_DELAY);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: false });
    window.addEventListener("pointerup", stopDragging);
    window.addEventListener("pointercancel", stopDragging);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", stopDragging);
      window.removeEventListener("pointercancel", stopDragging);
      document.body.style.userSelect = "";
    };
  }, [activeId]);

  useEffect(() => {
    let isCancelled = false;

    const wait = (duration: number) =>
      new Promise<void>((resolve) => {
        window.setTimeout(resolve, duration);
      });

    const waitForNextFrame = () =>
      new Promise<void>((resolve) => {
        requestAnimationFrame(() => resolve());
      });

    const playAutoStep = async (step: AutoplayStep) => {
      if (autoPlayPausedRef.current || dragSessionRef.current || rowRefs.current.size < templateDimensions.length) {
        return false;
      }

      const slotTop = getAutoPlaySlotTop(step);
      const activeRow = rowRefs.current.get(step.itemId);

      if (slotTop === null || !activeRow) {
        return false;
      }

      const startTop = activeRow.getBoundingClientRect().top;
      const generation = autoDragGenerationRef.current + 1;

      autoDragGenerationRef.current = generation;
      isAutoDraggingRef.current = true;
      setActiveId(step.itemId);
      setDragOffset(0);

      await waitForNextFrame();
      await waitForNextFrame();

      return new Promise<boolean>((resolve) => {
        const startedAt = performance.now();

        const finish = (completed: boolean) => {
          if (activeAnimationFrameRef.current !== null) {
            cancelAnimationFrame(activeAnimationFrameRef.current);
            activeAnimationFrameRef.current = null;
          }

          isAutoDraggingRef.current = false;
          setDragOffset(0);
          setActiveId(null);
          resolve(completed);
        };

        const tick = (currentTime: number) => {
          if (
            isCancelled ||
            autoPlayPausedRef.current ||
            dragSessionRef.current ||
            generation !== autoDragGenerationRef.current
          ) {
            finish(false);
            return;
          }

          const progress = Math.min(1, (currentTime - startedAt) / AUTO_PLAY_STEP_DURATION);
          const easedProgress = easeInOutCubic(progress);
          const projectedTop = startTop + (slotTop - startTop) * easedProgress;

          if (!applyProjectedDragPosition(step.itemId, projectedTop, true)) {
            finish(false);
            return;
          }

          if (progress < 1) {
            activeAnimationFrameRef.current = requestAnimationFrame(tick);
            return;
          }

          setDimensions((currentDimensions) => {
            const animatedDimensions = getAnimatedDimensions(currentDimensions);
            const insertIndex = getInsertIndex(animatedDimensions, step.itemId, step.targetId, step.placement);
            return insertIndex === null ? currentDimensions : moveAnimatedItem(currentDimensions, step.itemId, insertIndex);
          });
          finish(true);
        };

        activeAnimationFrameRef.current = requestAnimationFrame(tick);
      });
    };

    const runAutoPlay = async () => {
      await wait(AUTO_PLAY_INITIAL_DELAY);

      while (!isCancelled) {
        if (autoPlayPausedRef.current || dragSessionRef.current || rowRefs.current.size < templateDimensions.length) {
          await wait(180);
          continue;
        }

        const step = autoPlaySequence[autoPlayStepIndexRef.current];
        const completed = await playAutoStep(step);

        if (isCancelled) {
          break;
        }

        if (completed) {
          autoPlayStepIndexRef.current = (autoPlayStepIndexRef.current + 1) % autoPlaySequence.length;
          await wait(AUTO_PLAY_STEP_DELAY);
        } else {
          await wait(180);
        }
      }
    };

    runAutoPlay();

    return () => {
      isCancelled = true;
      clearResumeTimer();

      if (activeAnimationFrameRef.current !== null) {
        cancelAnimationFrame(activeAnimationFrameRef.current);
        activeAnimationFrameRef.current = null;
      }
    };
  }, []);

  const handlePointerDown = (itemId: string) => (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    if (event.pointerType === "touch") {
      const target = event.target as HTMLElement;

      if (!target.closest("[data-drag-handle='true']")) {
        return;
      }
    }

    const currentRow = rowRefs.current.get(itemId);

    if (!currentRow) {
      return;
    }

    event.preventDefault();
    pauseAutoPlay();
    cancelScriptedDrag();

    const currentRowRect = currentRow.getBoundingClientRect();

    dragSessionRef.current = {
      pointerId: event.pointerId,
      pointerOffsetY: event.clientY - currentRowRect.top,
    };

    document.body.style.userSelect = "none";
    setActiveId(itemId);
    setDragOffset(0);
  };

  return (
    <div
      className="grid w-full items-stretch gap-2 bg-[#f2f2f2] p-2 sm:gap-3 sm:p-3 md:grid-cols-[43%_1fr] md:gap-1.5 md:p-1.5 lg:min-h-[428px] lg:grid-cols-[44%_1fr] lg:gap-1 lg:p-1"
      onPointerEnter={() => {
        isPointerInsideRef.current = true;
        pauseAutoPlay();
      }}
      onPointerLeave={() => {
        isPointerInsideRef.current = false;
        resumeAutoPlay(260);
      }}
    >
      <div
        className="flex h-full flex-col gap-2 rounded-[20px] border border-white/90 p-2 backdrop-blur-sm sm:gap-3 sm:p-3 lg:gap-[10px] lg:rounded-[20px] lg:border-[2.5px] lg:p-[20px]"
        style={cardSurfaceStyle}
      >
        <div className="flex items-center justify-between gap-2">
          <p className="whitespace-nowrap text-[16px] leading-[1.1] font-medium text-[#090c0d] sm:text-[17px] lg:text-[19px]">
            My Template
          </p>
          <span className="shrink-0 whitespace-nowrap rounded-[4px] bg-[#8e0dff] px-1.5 py-0.5 text-[12px] leading-[1.1] font-medium text-white sm:px-2 sm:py-1 sm:text-[12px] lg:px-[7px] lg:py-[2px] lg:text-[13px]">
            Customize
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-1 sm:gap-1.5 lg:gap-[5px]">
          {dimensions.map((item) => (
            <TemplateDimensionRow
              key={item.id}
              itemId={item.id}
              label={item.label}
              backgroundColor={item.backgroundColor}
              textColor={item.textColor}
              badge={item.badge}
              isDragging={activeId === item.id}
              dragOffset={dragOffset}
              onPointerDown={handlePointerDown(item.id)}
              onRef={(node) => {
                if (node) {
                  rowRefs.current.set(item.id, node);
                } else {
                  rowRefs.current.delete(item.id);
                }
              }}
            />
          ))}

          <div className="flex flex-1 items-center justify-center overflow-hidden rounded-[10px] bg-[#f5f5f5] sm:rounded-[12px] lg:rounded-[10px]">
            <div className="flex items-center gap-1 text-[#b6b6b6] sm:gap-2 lg:gap-3">
              <span className="text-[16px] leading-none font-light sm:text-[18px] lg:text-[20px]">+</span>
              <span className="whitespace-nowrap text-[12px] leading-[1.2] font-normal sm:text-[13px] lg:text-[14px]">
                Create Dimensions
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex h-full flex-col gap-3 rounded-[20px] border border-white/90 p-2 backdrop-blur-sm sm:gap-4 sm:p-3 lg:gap-[20px] lg:rounded-[20px] lg:border-[2.5px] lg:p-[20px]"
        style={cardSurfaceStyle}
      >
        <p className="text-center text-[12px] leading-[1.1] font-normal text-[#a0a1a5] lg:text-[13px]">
          Preview
        </p>

        <div className="flex flex-1 flex-col gap-3 sm:gap-4 lg:gap-[20px]">
          {dimensions.map((section) => (
            <PreviewSection
              key={section.id}
              label={section.label}
              widths={section.widths}
              isDragging={activeId === section.id}
              dragOffset={dragOffset}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
