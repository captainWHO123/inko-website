"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";

import { trackEvent } from "@/lib/analytics/track";
import { cn } from "@/lib/utils/cn";
import type { AnalyticsEventName, AnalyticsPayload } from "@/types/analytics";

interface BaseButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  analyticsEvent?: AnalyticsEventName;
  analyticsContext?: AnalyticsPayload;
  trackingLabel?: string;
  fullWidth?: boolean;
  className?: string;
}

type ButtonProps = BaseButtonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof BaseButtonProps>;

const baseClassName =
  "inline-flex min-h-[3.2rem] items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold tracking-[-0.01em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 md:px-6";

const variantClassName = {
  primary:
    "bg-teal-800 text-white shadow-[0_28px_54px_-28px_rgba(24,79,83,0.55)] ring-1 ring-black/5 hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-[0_34px_66px_-30px_rgba(24,79,83,0.62)]",
  secondary:
    "border border-black/6 bg-white/78 text-teal-900 shadow-[0_20px_38px_-28px_rgba(16,25,34,0.26)] backdrop-blur-sm hover:-translate-y-0.5 hover:border-teal-200 hover:bg-white",
};

function fireButtonAnalytics(
  eventName: AnalyticsEventName | undefined,
  payload: AnalyticsPayload | undefined,
  label: string,
) {
  if (!eventName) {
    return;
  }

  const eventPayload = {
    ...payload,
    cta_label: label,
  };

  trackEvent(eventName, eventPayload);

  if (
    payload?.user_path_type === "direct_purchase" &&
    payload?.checkout_mode !== "placeholder"
  ) {
    trackEvent("checkout_start", eventPayload);
  }
}

function LinkButton({
  href,
  external,
  analyticsEvent,
  analyticsContext,
  trackingLabel,
  className,
  fullWidth,
  children,
  variant,
}: BaseButtonProps & { variant: "primary" | "secondary" }) {
  const label = trackingLabel ?? (typeof children === "string" ? children : "cta");

  const handleClick = () => {
    fireButtonAnalytics(analyticsEvent, analyticsContext, label);
  };

  const classes = cn(
    baseClassName,
    variantClassName[variant],
    fullWidth && "w-full",
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href ?? "#"} className={classes} onClick={handleClick}>
      {children}
    </Link>
  );
}

function ClickButton({
  analyticsEvent,
  analyticsContext,
  trackingLabel,
  children,
  className,
  fullWidth,
  onClick,
  variant,
  ...props
}: ButtonProps & { variant: "primary" | "secondary" }) {
  const label = trackingLabel ?? (typeof children === "string" ? children : "cta");

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    fireButtonAnalytics(analyticsEvent, analyticsContext, label);
    onClick?.(event);
  };

  return (
    <button
      className={cn(
        baseClassName,
        variantClassName[variant],
        fullWidth && "w-full",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

export function PrimaryButton({
  href,
  external,
  ...props
}: ButtonProps) {
  if (href) {
    return <LinkButton href={href} external={external} variant="primary" {...props} />;
  }

  return <ClickButton variant="primary" {...props} />;
}

export function SecondaryButton({
  href,
  external,
  ...props
}: ButtonProps) {
  if (href) {
    return <LinkButton href={href} external={external} variant="secondary" {...props} />;
  }

  return <ClickButton variant="secondary" {...props} />;
}
