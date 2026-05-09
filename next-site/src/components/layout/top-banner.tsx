import type { PreorderStateExperience } from "@/types/state";

interface TopBannerProps {
  experience: PreorderStateExperience;
}

export function TopBanner({ experience }: TopBannerProps) {
  return (
    <div className="border-b border-black/5 bg-teal-50/80 px-4 py-2.5 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl text-center text-sm text-teal-950">
        <span className="font-semibold">{experience.banner.title}</span>
        <span className="mx-2 hidden text-teal-950/35 md:inline">/</span>
        <span className="block text-teal-950/78 md:inline">{experience.banner.body}</span>
      </div>
    </div>
  );
}
