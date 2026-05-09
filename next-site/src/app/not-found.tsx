import { PrimaryButton, SecondaryButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="px-4 py-24">
      <div className="mx-auto max-w-3xl rounded-[32px] border border-ink-200 bg-white p-10 text-center shadow-card">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-800">
          Page not found
        </p>
        <h1 className="mt-4 font-serif text-5xl text-ink-950">This page is not available.</h1>
        <p className="mt-4 text-base leading-8 text-ink-700">
          Use the main conversion paths to get back on track.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <PrimaryButton href="/">Go home</PrimaryButton>
          <SecondaryButton href="/pricing">See pricing</SecondaryButton>
        </div>
      </div>
    </main>
  );
}
