import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { Zap } from "lucide-react";
import { HeroShowcaseCarousel } from "./showcase";

type SubmitState = "idle" | "submitting" | "success" | "error";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("Priority to open App version for internal testing.");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      setSubmitState("error");
      setMessage("Please enter your work email.");
      return;
    }

    setSubmitState("submitting");
    setMessage("Submitting...");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = (await response.json().catch(() => ({}))) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(data.error || "Unable to join the waitlist right now.");
      }

      setSubmitState("success");
      setMessage(data.message || "You are on the waitlist. Please check your inbox for confirmation.");
      setEmail("");
    } catch (error) {
      const fallbackMessage = error instanceof Error ? error.message : "Unable to join the waitlist right now.";
      setSubmitState("error");
      setMessage(fallbackMessage);
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden px-6 pt-20 pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-inko-blue/10 px-3 py-1 text-2xl font-semibold text-inko-blue">
            <Zap className="h-4 w-4" />
            <span>Autopilot For Insurance Adviser</span>
          </div>
          <h1 className="mb-8 text-5xl leading-[1.1] font-bold text-[var(--text-on-dark)] lg:text-6xl">
            Turn Conversations <br />
            <span className="text-[var(--text-on-dark)]">Into Assets.</span>
          </h1>
          <p className="mb-10 max-w-xl text-xl leading-relaxed text-[var(--text-on-dark-muted)]">
            Built for sales professionals, Inko records, parses, and permanently stores the details from every in-person conversation. Turn each context into a traceable, compounding asset.
          </p>

          <form
            onSubmit={handleSubmit}
            className="ring-inko-blue/20 focus-within:ring-2 grid h-[66px] w-full max-w-[503px] overflow-hidden rounded-xl bg-white transition-all"
            style={{ gridTemplateColumns: "48.91% 51.09%" }}
          >
            <label className="flex min-w-0 items-center px-[17px]">
              <span className="sr-only">Work email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter Your Work Email"
                autoComplete="email"
                required
                className="w-full min-w-0 bg-transparent text-[18px] font-medium text-[#166EB1] outline-none placeholder:text-[#C2D9EB]"
              />
            </label>
            <button
              type="submit"
              disabled={submitState === "submitting"}
              className="flex h-full items-center justify-center whitespace-nowrap bg-[#4ACBEC] px-6 text-[18px] font-medium text-white transition-colors hover:bg-[#3ec3e6] disabled:cursor-not-allowed disabled:bg-[#8fdff1]"
            >
              {submitState === "submitting" ? "Submitting..." : "Get Early Access"}
            </button>
          </form>
          <p
            className={`mt-4 text-base ${
              submitState === "error"
                ? "text-[#ffd7d7]"
                : submitState === "success"
                  ? "text-[#d8ffe7]"
                  : "text-[var(--text-on-dark-muted)]"
            }`}
          >
            {message}
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
          <HeroShowcaseCarousel />
        </motion.div>
      </div>
    </section>
  );
};
