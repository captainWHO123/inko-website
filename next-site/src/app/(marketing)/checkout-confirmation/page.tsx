import { PageAnalytics } from "@/components/layout/page-analytics";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { getPreorderStateExperience } from "@/lib/config/preorder-state";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Checkout confirmation | Inko",
  description: "Confirmation page for completed Inko checkout flows.",
  path: "/checkout-confirmation",
});

export default function CheckoutConfirmationPage() {
  const experience = getPreorderStateExperience();

  return (
    <main className="px-4 py-24">
      <PageAnalytics
        eventName="checkout_complete"
        payload={{
          page_state: experience.state,
          location: "checkout-confirmation",
        }}
      />
      <div className="mx-auto max-w-3xl rounded-[32px] border border-ink-200 bg-white p-10 text-center shadow-card">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-800">
          Confirmation
        </p>
        <h1 className="mt-4 font-serif text-5xl text-ink-950">Your order is confirmed.</h1>
        <p className="mt-4 text-base leading-8 text-ink-700">
          Keep an eye on your inbox for next steps, delivery updates, and support information tied to your order.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <PrimaryButton href="/pre-order-policy">Review pre-order policy</PrimaryButton>
          <SecondaryButton href="/shipping-delivery">Review shipping details</SecondaryButton>
        </div>
      </div>
    </main>
  );
}
