import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { TopBanner } from "@/components/layout/top-banner";
import { primaryNavigation } from "@/lib/config/navigation";
import { getPreorderStateExperience } from "@/lib/config/preorder-state";

export default function LegalLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const experience = getPreorderStateExperience();

  return (
    <>
      <TopBanner experience={experience} />
      <SiteHeader navigation={primaryNavigation} experience={experience} />
      <main>{children}</main>
      <SiteFooter experience={experience} />
    </>
  );
}
