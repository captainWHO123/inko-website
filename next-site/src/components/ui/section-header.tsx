import { cn } from "@/lib/utils/cn";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  headingLevel?: "h1" | "h2" | "h3";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  headingLevel = "h2",
  tone = "dark",
  className,
}: SectionHeaderProps) {
  const TitleTag = headingLevel;
  const eyebrowRowClassName =
    align === "center" ? "justify-center" : "justify-start";

  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div className={cn("mb-4 flex items-center gap-3", eyebrowRowClassName)}>
          <p className={cn("text-[0.68rem] font-semibold uppercase tracking-[0.24em]", tone === "light" ? "text-teal-100" : "text-teal-800")}>
            {eyebrow}
          </p>
          <span className={cn("h-px w-14", tone === "light" ? "bg-white/18" : "bg-teal-300/90")} />
        </div>
      ) : null}
      <TitleTag className={cn("max-w-4xl font-serif text-3xl leading-[1.06] tracking-[-0.03em] sm:text-4xl md:text-5xl", tone === "light" ? "text-white" : "text-ink-950")}>
        {title}
      </TitleTag>
      {subtitle ? (
        <p className={cn("mt-4 max-w-2xl text-base leading-8 md:text-[1.0625rem]", tone === "light" ? "text-white/72" : "text-ink-700")}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
