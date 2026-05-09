"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

import { cn } from "@/lib/utils/cn";

interface MotionLayerProps {
  children: ReactNode;
  className?: string;
  y?: number;
  x?: number;
  scale?: number;
  rotate?: number;
}

export function MotionLayer({
  children,
  className,
  y = 18,
  x = 0,
  scale = 0,
  rotate = 0,
}: MotionLayerProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [y, 0, -y]),
    { stiffness: 110, damping: 26, mass: 0.4 },
  );
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [x, 0, -x]),
    { stiffness: 110, damping: 26, mass: 0.4 },
  );
  const layerScale = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [1, 1 + scale, 1]),
    { stiffness: 110, damping: 24, mass: 0.42 },
  );
  const layerRotate = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [rotate * -1, 0, rotate]),
    { stiffness: 95, damping: 24, mass: 0.46 },
  );

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{
        x: translateX,
        y: translateY,
        scale: layerScale,
        rotate: layerRotate,
      }}
    >
      {children}
    </motion.div>
  );
}
