"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export function EarlyAccessForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: "Early access visitor",
          workEmail: email,
          role: "Insurance advisor or consultative sales professional",
          interest:
            "Interested in early access for mobile post-conversation workflow testing.",
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string; error?: string }
        | null;

      if (!response.ok) {
        throw new Error(result?.error ?? "Unable to submit your request right now.");
      }

      setStatus("success");
      setMessage(result?.message ?? "You are on the early access list.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit your request right now.");
    }
  }

  return (
    <form
      className="flex w-full max-w-[28rem] flex-row gap-3 max-[520px]:mx-auto max-[520px]:flex-col"
      onSubmit={handleSubmit}
    >
      <label className="sr-only" htmlFor="early-access-email">
        Work email address
      </label>
      <input
        id="early-access-email"
        className="h-[3.25rem] min-h-[3.25rem] flex-1 rounded-[0.82rem] border border-[#dbe8f4] bg-white/92 px-4 text-[0.9rem] font-semibold text-[#17243a] shadow-[0_18px_42px_-32px_rgba(9,21,42,0.34)] outline-none transition placeholder:text-[#95a5b8] focus:border-[#1f8fff] focus:ring-4 focus:ring-[#ccecff] max-[520px]:w-full"
        name="workEmail"
        onChange={(event) => {
          setEmail(event.target.value);
          if (status !== "idle") {
            setStatus("idle");
            setMessage("");
          }
        }}
        placeholder="Work email address"
        required
        type="email"
        value={email}
      />
      <button
        className="h-[3.25rem] min-h-[3.25rem] rounded-[0.82rem] bg-[#1f8fff] px-6 text-[0.86rem] font-black text-white shadow-[0_18px_38px_-20px_rgba(31,143,255,0.9)] transition hover:bg-[#117dea] disabled:cursor-not-allowed disabled:bg-[#8ccaff] max-[520px]:w-full"
        disabled={status === "submitting"}
        type="submit"
      >
        {status === "submitting" ? "Joining..." : "Get Early Access"}
      </button>

      <span aria-live="polite" className="hidden">
        {message ? (
          <span
            className={[
              "block text-center text-[0.78rem] font-semibold",
              status === "error" ? "text-[#c33b3b]" : "text-[#1f8fff]",
            ].join(" ")}
          >
            {message}
          </span>
        ) : null}
      </span>
      {message ? (
        <p
          aria-live="polite"
          className={[
            "hidden basis-full text-[0.78rem] font-semibold",
            status === "error" ? "text-[#c33b3b]" : "text-[#1f8fff]",
          ].join(" ")}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
