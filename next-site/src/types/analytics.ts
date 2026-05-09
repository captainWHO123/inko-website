import type { PreorderState } from "@/types/state";

export type UserPathType = "direct_purchase" | "demo_assisted" | "observe";
export type DeviceType = "desktop" | "mobile" | "tablet" | "unknown";
export type VisitorType = "new" | "returning" | "unknown";

export type AnalyticsEventName =
  | "hero_primary_cta_click"
  | "hero_secondary_cta_click"
  | "nav_pricing_click"
  | "how_it_works_scroll_depth"
  | "proof_sample_open"
  | "faq_expand"
  | "pricing_cta_click"
  | "policy_page_view"
  | "demo_form_start"
  | "demo_form_submit"
  | "checkout_start"
  | "checkout_complete"
  | "waitlist_submit"
  | "nav_primary_cta_click"
  | "split_cta_click"
  | "sticky_cta_click"
  | "demo_alt_cta_click";

export interface AnalyticsPayload {
  source?: string;
  campaign?: string;
  entry_page?: string;
  device_type?: DeviceType;
  new_vs_returning?: VisitorType;
  page_state?: PreorderState;
  user_path_type?: UserPathType;
  component?: string;
  cta_label?: string;
  sample_id?: string;
  faq_id?: string;
  location?: string;
  section_id?: string;
  [key: string]: string | number | boolean | PreorderState | UserPathType | undefined;
}
