import type { ReactNode } from "react";

import { V4MarketingChrome } from "@/components/v4/marketing-chrome";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <V4MarketingChrome>{children}</V4MarketingChrome>
  );
}
