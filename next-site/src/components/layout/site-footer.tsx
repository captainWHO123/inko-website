import Link from "next/link";

import { footerNavigation } from "@/lib/config/navigation";
import { siteConfig } from "@/lib/config/site-config";
import type { PreorderStateExperience } from "@/types/state";

interface SiteFooterProps {
  experience: PreorderStateExperience;
}

export function SiteFooter({ experience }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/6 bg-[#171c1f] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))] md:px-6 md:py-20">
        <div>
          <p className="font-serif text-3xl italic tracking-[-0.03em]">Inko</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/68">
            {siteConfig.tagline}
          </p>
          <p className="mt-4 text-sm text-white/52">{experience.footerNote}</p>
          <p className="mt-4 text-sm text-white/52">
            Support:{" "}
            <a className="text-white/85 transition hover:text-white" href={`mailto:${siteConfig.supportEmail}`}>
              {siteConfig.supportEmail}
            </a>
          </p>
        </div>

        {footerNavigation.map((group) => (
          <div key={group.title}>
            <p className="font-serif text-xl italic text-white/92">
              {group.title}
            </p>
            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link className="text-sm text-white/62 transition hover:text-white" href={item.href}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
