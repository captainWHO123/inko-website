"use client";

import { useState } from "react";

const roleOptions = [
  "Principal Advisor",
  "Wealth Manager",
  "Compliance Officer",
  "Ops Leader",
];

const teamTypeOptions = [
  "Independent Boutique",
  "Mid-size Agency",
  "Enterprise Division",
];

const preferredTimeOptions = [
  "Mornings (EST)",
  "Afternoons (EST)",
  "Next Available Slot",
];

export function DemoRequestForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("submitting");
    setMessage("");

    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      workEmail: String(formData.get("workEmail") ?? ""),
      role: String(formData.get("role") ?? ""),
      teamType: String(formData.get("teamType") ?? ""),
      meetingVolume: String(formData.get("meetingVolume") ?? ""),
      biggestPain: String(formData.get("biggestPain") ?? ""),
      preferredTime: String(formData.get("preferredTime") ?? ""),
    };

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as { message?: string; error?: string } | null;

      if (!response.ok) {
        setStatus("error");
        setMessage(result?.error ?? "Unable to submit your request right now.");
        return;
      }

      setStatus("success");
      setMessage(result?.message ?? "Demo request received.");
    } catch {
      setStatus("error");
      setMessage("Unable to submit your request right now.");
    }
  }

  return (
    <form action={handleSubmit} className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="space-y-2">
        <label className="ml-1 text-xs font-label uppercase tracking-wider text-[#404849]">Full name</label>
        <input
          className="w-full rounded-2xl border border-[#184f53]/10 bg-white/40 px-5 py-4 text-[#1d1c16] backdrop-blur-sm outline-none transition focus:border-[#184f53] focus:bg-white/60 focus:shadow-[0_0_20px_rgba(24,79,83,0.05)]"
          name="fullName"
          placeholder="Arthur Morgan"
          required
          type="text"
        />
      </div>

      <div className="space-y-2">
        <label className="ml-1 text-xs font-label uppercase tracking-wider text-[#404849]">Work email</label>
        <input
          className="w-full rounded-2xl border border-[#184f53]/10 bg-white/40 px-5 py-4 text-[#1d1c16] backdrop-blur-sm outline-none transition focus:border-[#184f53] focus:bg-white/60 focus:shadow-[0_0_20px_rgba(24,79,83,0.05)]"
          name="workEmail"
          placeholder="arthur@atelier.com"
          required
          type="email"
        />
      </div>

      <div className="space-y-2">
        <label className="ml-1 text-xs font-label uppercase tracking-wider text-[#404849]">Role</label>
        <select
          className="w-full cursor-pointer appearance-none rounded-2xl border border-[#184f53]/10 bg-white/40 px-5 py-4 text-[#1d1c16] backdrop-blur-sm outline-none transition focus:border-[#184f53] focus:bg-white/60"
          defaultValue={roleOptions[0]}
          name="role"
          required
        >
          {roleOptions.map((option) => (
            <option key={option} className="bg-[#f5f0e7]">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="ml-1 text-xs font-label uppercase tracking-wider text-[#404849]">Team type</label>
        <select
          className="w-full cursor-pointer appearance-none rounded-2xl border border-[#184f53]/10 bg-white/40 px-5 py-4 text-[#1d1c16] backdrop-blur-sm outline-none transition focus:border-[#184f53] focus:bg-white/60"
          defaultValue={teamTypeOptions[0]}
          name="teamType"
          required
        >
          {teamTypeOptions.map((option) => (
            <option key={option} className="bg-[#f5f0e7]">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="ml-1 text-xs font-label uppercase tracking-wider text-[#404849]">
          Approx. weekly meeting volume
        </label>
        <input
          className="w-full rounded-2xl border border-[#184f53]/10 bg-white/40 px-5 py-4 text-[#1d1c16] backdrop-blur-sm outline-none transition focus:border-[#184f53] focus:bg-white/60 focus:shadow-[0_0_20px_rgba(24,79,83,0.05)]"
          name="meetingVolume"
          placeholder="15-20 meetings"
          required
          type="text"
        />
      </div>

      <div className="space-y-2">
        <label className="ml-1 text-xs font-label uppercase tracking-wider text-[#404849]">Preferred time</label>
        <select
          className="w-full cursor-pointer appearance-none rounded-2xl border border-[#184f53]/10 bg-white/40 px-5 py-4 text-[#1d1c16] backdrop-blur-sm outline-none transition focus:border-[#184f53] focus:bg-white/60"
          defaultValue={preferredTimeOptions[0]}
          name="preferredTime"
          required
        >
          {preferredTimeOptions.map((option) => (
            <option key={option} className="bg-[#f5f0e7]">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2 md:col-span-2">
        <label className="ml-1 text-xs font-label uppercase tracking-wider text-[#404849]">
          Biggest post-meeting pain
        </label>
        <textarea
          className="w-full rounded-2xl border border-[#184f53]/10 bg-white/40 px-5 py-4 text-[#1d1c16] backdrop-blur-sm outline-none transition focus:border-[#184f53] focus:bg-white/60 focus:shadow-[0_0_20px_rgba(24,79,83,0.05)]"
          name="biggestPain"
          placeholder="e.g. Manual CRM entry, hunting through notes..."
          required
          rows={3}
        />
      </div>

      <div className="md:col-span-2 pt-6">
        <button
          className="w-full rounded-full bg-[#184f53] py-5 text-lg font-bold text-white shadow-lg transition hover:bg-[#33666a] active:scale-[0.98]"
          disabled={status === "submitting"}
          type="submit"
        >
          {status === "submitting" ? "Submitting..." : "Secure My Demo Spot"}
        </button>

        <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-[#404849]">
          <span className="material-symbols-outlined text-sm">lock</span>
          SSL Encrypted &amp; SOC2-aligned handling
        </p>

        {status === "success" ? (
          <p className="mt-4 text-center text-sm font-medium text-[#184f53]">{message}</p>
        ) : null}

        {status === "error" ? (
          <p className="mt-4 text-center text-sm font-medium text-red-700">{message}</p>
        ) : null}
      </div>
    </form>
  );
}
