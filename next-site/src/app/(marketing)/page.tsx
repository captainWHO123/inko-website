import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { EarlyAccessForm } from "@/components/landing/early-access-form";

export const metadata: Metadata = {
  title: "Inko | Mobile Post-Conversation Workspace",
  description:
    "Inko turns insurance advisor meetings and calls into summaries, follow-up drafts, next steps, and client records.",
};

const advisorSignals = ["Family", "Life Insurance", "Budget Focus"];

const waveformBars = [16, 26, 38, 24, 46, 32, 52, 30, 42, 24, 36, 18];

const summaryCards = [
  {
    title: "Key Needs",
    tone: "blue",
    items: ["Family life coverage", "Protect education fund", "Keep monthly premium predictable"],
  },
  {
    title: "Concerns",
    tone: "orange",
    items: ["Monthly budget sensitivity", "Wants clear comparison", "Before deciding"],
  },
  {
    title: "Decision Timeline",
    tone: "cyan",
    items: ["Review in 2 weeks", "Check spouse comfort", "By Thursday"],
  },
  {
    title: "Client Signals",
    tone: "indigo",
    items: ["Budget honest", "Family priority", "Needs simplicity"],
  },
  {
    title: "Next Best Action",
    tone: "slate",
    items: ["Send two quote options", "Schedule policy review"],
  },
];

const followupItems = [
  "Send quote comparison by Thursday",
  "Schedule policy review next week",
  "Confirm education fund priority",
];

const advisorAvatars = [
  {
    name: "Insurance advisor portrait",
    image: "/avatars/advisor-1.jpg",
  },
  {
    name: "Broker team advisor portrait",
    image: "/avatars/advisor-2.jpg",
  },
  {
    name: "Consultative insurance advisor portrait",
    image: "/avatars/advisor-3.jpg",
  },
];

const workflowSteps = [
  {
    number: "1",
    title: "Capture",
    body: "Record a meeting, call, or in-person consultation from your phone.",
    variant: "recording",
  },
  {
    number: "2",
    title: "Structure",
    body: "Inko extracts what matters so you do not have to rebuild it from memory.",
    variant: "summary",
  },
  {
    number: "3",
    title: "Act",
    body: "Get follow-ups, next steps, updated records, and move the client forward.",
    variant: "followup",
  },
];

const outcomeCards = [
  {
    variant: "summary",
    title: "Conversation Summary",
    body: "Understand what was said without replaying.",
  },
  {
    variant: "draft",
    title: "Follow-up Drafts",
    body: "Create personalized follow-ups while it is still fresh.",
  },
  {
    variant: "memory",
    title: "Client Memory",
    body: "Keep every client's needs, concerns, and history.",
  },
  {
    variant: "advisor",
    title: "Ask Advisor",
    body: "Ask what to say next, or which product fits.",
  },
  {
    variant: "crm",
    title: "CRM-ready Notes",
    body: "Turn conversations into structured records.",
  },
];

const scenarioChips = [
  "Insurance Consultations",
  "Client Review Meetings",
  "Follow-up Calls",
  "Renewal Conversations",
  "Long-cycle Consultative Sales",
  "Broker Team Handoffs",
];

function LogoMark() {
  return (
    <span className="relative flex h-6 w-4 items-center justify-center" aria-hidden="true">
      <span className="absolute left-1 top-0 h-3 w-2 rotate-[24deg] rounded-full bg-[#1f8fff]" />
      <span className="absolute bottom-0 left-0 h-4 w-2 rotate-[24deg] rounded-full bg-[#64d8ff]" />
    </span>
  );
}

function Header() {
  return (
    <header className="relative z-30">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-5 py-5 sm:px-8 lg:py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-[1.78rem] font-black leading-none text-[#06121f]">
          <LogoMark />
          <span>inko</span>
        </Link>

        <nav className="flex items-center gap-4 text-[0.82rem] font-bold text-[#07111f] max-[520px]:hidden lg:gap-9">
          <a className="transition hover:text-[#1d8dff]" href="#features">
            Features
          </a>
          <a className="transition hover:text-[#1d8dff]" href="#how-to-use">
            How to Use
          </a>
          <a className="transition hover:text-[#1d8dff]" href="#faq">
            FAQ
          </a>
        </nav>

        <form className="flex items-center gap-2 max-[520px]:hidden">
          <label className="sr-only" htmlFor="nav-work-email">
            Work email address
          </label>
          <input
            id="nav-work-email"
            className="h-12 w-[9.6rem] rounded-[0.72rem] border border-[#dbe8f4] bg-white px-4 text-[0.78rem] font-semibold text-[#17243a] shadow-[0_12px_28px_-22px_rgba(9,21,42,0.28)] outline-none placeholder:text-[#8b9aaa] lg:w-[12.5rem]"
            placeholder="Work email address"
            type="email"
          />
          <a
            className="inline-flex h-12 items-center justify-center rounded-[0.72rem] bg-[#1f8fff] px-6 text-[0.78rem] font-black text-white shadow-[0_18px_34px_-18px_rgba(25,127,255,0.9)] transition hover:bg-[#117dea]"
            href="#early-access"
          >
            Get Early Access
          </a>
        </form>

        <a
          className="hidden h-10 items-center justify-center rounded-[0.78rem] bg-[#1f8fff] px-4 text-[0.72rem] font-black text-white shadow-[0_18px_34px_-18px_rgba(25,127,255,0.9)] transition hover:bg-[#117dea] max-[520px]:inline-flex"
          href="#early-access"
        >
          Get Early Access
        </a>
      </div>
    </header>
  );
}

function HeroBadge() {
  return (
    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#bfe7fb] bg-[#ecf8ff] px-3 py-1.5 text-[0.74rem] font-black text-[#1b86d5] shadow-[0_12px_26px_-24px_rgba(31,143,255,0.45)]">
      <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#77cfff] text-[0.58rem]">
        i
      </span>
      Built for Insurance Advisors &amp; Consultative Sales
    </div>
  );
}

function AdvisorProof({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "flex items-center gap-3 pt-1 max-[520px]:flex-col max-[520px]:items-start" : "flex items-center gap-3 pt-1 max-[520px]:justify-center"}>
      <div className="flex pl-2">
        {advisorAvatars.map((advisor, index) => (
          <span
            key={advisor.name}
            aria-label={advisor.name}
            className="relative -ml-2 block h-9 w-9 rounded-full border-2 border-white bg-[#d9e9f7] bg-cover bg-center shadow-[0_12px_22px_-16px_rgba(10,23,51,0.45)]"
            role="img"
            style={{
              backgroundImage: `url("${advisor.image}")`,
              zIndex: advisorAvatars.length - index,
            }}
          />
        ))}
      </div>
      <div className="text-[0.76rem] leading-5 text-[#162235]">
        <p>
          <span className="font-black">140+ advisors</span> joined the early access list.
        </p>
        <p>Priority access for early software testing.</p>
      </div>
    </div>
  );
}

function PhoneFrame({
  children,
  className = "",
  widthClassName = "w-[196px]",
  label,
}: {
  children: ReactNode;
  className?: string;
  widthClassName?: string;
  label: string;
}) {
  return (
    <article
      aria-label={label}
      className={[
        "relative aspect-[9/19.2] rounded-[1.55rem] border border-[#c6ced8] bg-[#111827] p-[0.34rem] shadow-[0_30px_48px_-28px_rgba(9,21,42,0.44),0_10px_24px_-18px_rgba(9,21,42,0.5)] sm:rounded-[1.8rem] lg:rounded-[2rem] lg:p-[0.4rem]",
        widthClassName,
        className,
      ].join(" ")}
    >
      <div className="absolute left-1/2 top-1.5 z-20 h-[0.5rem] w-[3.35rem] -translate-x-1/2 rounded-full bg-black sm:h-[0.58rem] sm:w-[3.75rem] lg:h-[0.64rem] lg:w-[4.2rem]" />
      <div className="h-full overflow-hidden rounded-[1.28rem] bg-white sm:rounded-[1.45rem] lg:rounded-[1.62rem]">
        <div className="flex h-full flex-col">
          <div className="flex h-5 shrink-0 items-center justify-between px-2.5 pt-1.5 text-[0.42rem] font-black text-[#17243a]">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-2.5 rounded-[0.18rem] border border-[#17243a]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#17243a]" />
            </span>
          </div>
          {children}
        </div>
      </div>
    </article>
  );
}

function AppChrome({
  title,
  children,
  scrollClassName = "",
}: {
  title: string;
  children: ReactNode;
  scrollClassName?: string;
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] px-2.5 pb-0 pt-1">
      <div className="mb-2 flex shrink-0 items-center justify-between text-[#16233a]">
        <span className="text-[0.65rem] font-black">&lt;</span>
        <span className="text-[0.56rem] font-black">{title}</span>
        <span className="text-[0.62rem] text-[#9badbf]">...</span>
      </div>
      <div className="relative min-h-0 flex-1 overflow-hidden pb-2">
        <div className={scrollClassName}>{children}</div>
      </div>
    </div>
  );
}

function Waveform() {
  return (
    <div className="flex h-[4.75rem] items-center justify-center gap-[0.26rem]">
      {waveformBars.map((height, index) => (
        <span
          key={`${height}-${index}`}
          className="w-[0.28rem] rounded-full bg-[#1f8fff]"
          style={{ height }}
        />
      ))}
    </div>
  );
}

function RecordingPhone() {
  return (
    <PhoneFrame
      label="Recording screen"
      widthClassName="w-[146px] sm:w-[160px] lg:w-[176px]"
      className="origin-bottom-left rotate-[-4deg] lg:translate-y-7"
    >
      <AppChrome title="Recording" scrollClassName="inko-phone-scroll-recording">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[0.68rem] font-black text-[#17243a]">Anna Johnson</p>
            <p className="mt-0.5 text-[0.43rem] font-semibold text-[#7d8ca0]">
              Policy Review Meeting
            </p>
          </div>
          <span className="rounded-full bg-[#fff0f0] px-1.5 py-1 text-[0.4rem] font-black text-[#ff4d4d]">
            REC
          </span>
        </div>

        <div className="mt-5 text-center">
          <p className="text-[1.48rem] font-black text-[#17243a]">12:48</p>
          <Waveform />
        </div>

        <div className="rounded-[0.86rem] border border-[#e6edf5] bg-white p-2 shadow-[0_12px_28px_-24px_rgba(9,21,42,0.35)]">
          <div className="mb-1.5 flex items-center gap-1.5 text-[0.45rem] font-black text-[#495c72]">
            <span className="h-2.5 w-2.5 rounded bg-[#e8f4ff]" />
            Live Transcript
          </div>
          <p className="text-[0.43rem] leading-[0.7rem] text-[#7a8ba0]">
            We want enough coverage for the kids, but the monthly payment needs to stay reasonable...
          </p>
        </div>

        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {advisorSignals.map((signal) => (
            <span
              key={signal}
              className="rounded-full bg-[#edf7ff] px-1.5 py-1 text-[0.38rem] font-black text-[#1d8dff]"
            >
              {signal}
            </span>
          ))}
        </div>
      </AppChrome>
    </PhoneFrame>
  );
}

function CardToneIcon({ tone }: { tone: string }) {
  const toneClassName =
    tone === "orange"
      ? "border-[#ffd9c2] bg-[#fff6ef] text-[#ff7a1a]"
      : tone === "cyan"
        ? "border-[#bdeeff] bg-[#effbff] text-[#10a8e8]"
        : tone === "indigo"
          ? "border-[#d9ddff] bg-[#f4f6ff] text-[#5d6eff]"
          : tone === "slate"
            ? "border-[#dce5ef] bg-[#f7fbff] text-[#5d7088]"
            : "border-[#bfddff] bg-[#f0f8ff] text-[#1f8fff]";

  return (
    <span
      className={[
        "mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[0.3rem] border text-[0.42rem] font-black",
        toneClassName,
      ].join(" ")}
    >
      {tone === "orange" ? "!" : tone === "slate" ? ">" : "."}
    </span>
  );
}

function SummaryPhone() {
  return (
    <PhoneFrame
      label="Summary screen"
      widthClassName="w-[168px] sm:w-[188px] lg:w-[212px]"
      className="z-20 origin-bottom scale-[1.02]"
    >
      <AppChrome title="Summary" scrollClassName="inko-phone-scroll-summary">
        <div className="mb-2.5 flex items-start justify-between gap-2">
          <div>
            <p className="text-[0.74rem] font-black text-[#17243a]">Anna Johnson</p>
            <p className="mt-0.5 text-[0.45rem] font-semibold text-[#7d8ca0]">
              Family Protection Review
            </p>
          </div>
          <span className="rounded-full bg-[#edf7ff] px-1.5 py-1 text-[0.38rem] font-black text-[#1d8dff]">
            Summary Ready
          </span>
        </div>

        <div className="space-y-1.5">
          {summaryCards.map((card) => (
            <section
              key={card.title}
              className="rounded-[0.75rem] border border-[#e5edf6] bg-white px-2 py-1.5 shadow-[0_10px_26px_-24px_rgba(9,21,42,0.3)]"
            >
              <div className="flex gap-2">
                <CardToneIcon tone={card.tone} />
                <div>
                  <h3 className="text-[0.48rem] font-black text-[#253650]">{card.title}</h3>
                  <ul className="mt-1 space-y-0.5 text-[0.39rem] leading-[0.62rem] text-[#7b8aa0]">
                    {card.items.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-2.5 grid grid-cols-2 gap-2">
          <button className="rounded-[0.68rem] bg-[#1f8fff] py-2 text-[0.43rem] font-black text-white">
            Generate Follow-up
          </button>
          <button className="rounded-[0.68rem] border border-[#bfdfff] bg-white py-2 text-[0.43rem] font-black text-[#1f8fff]">
            Ask Advisor
          </button>
        </div>
      </AppChrome>
    </PhoneFrame>
  );
}

function FollowUpPhone() {
  return (
    <PhoneFrame
      label="Follow-up ready screen"
      widthClassName="w-[146px] sm:w-[160px] lg:w-[176px]"
      className="origin-bottom-right rotate-[4deg] lg:translate-y-8"
    >
      <AppChrome title="Follow-up Ready" scrollClassName="inko-phone-scroll-followup">
        <div className="rounded-[0.86rem] border border-[#e4ecf6] bg-white p-2 shadow-[0_12px_28px_-24px_rgba(9,21,42,0.35)]">
          <h3 className="text-[0.56rem] font-black text-[#17243a]">Follow-up Draft</h3>
          <p className="mt-1.5 text-[0.42rem] leading-[0.68rem] text-[#6f7f94]">
            Hi Anna, great speaking with you today. I will send two options that balance family protection with your monthly budget goal.
          </p>
        </div>

        <section className="mt-2.5">
          <h3 className="text-[0.52rem] font-black text-[#17243a]">Next Steps</h3>
          <div className="mt-1.5 space-y-1.5">
            {followupItems.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-[0.72rem] bg-[#f4f9ff] px-2 py-1.5">
                <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-[#1f8fff] text-[0.42rem] font-black text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <span className="text-[0.42rem] font-bold leading-[0.68rem] text-[#53647a]">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-2.5">
          <h3 className="text-[0.52rem] font-black text-[#17243a]">CRM-ready Record</h3>
          <div className="mt-1.5 space-y-1.5">
            {["Stage: Follow-up needed", "Tags: Family, Budget Focus", "Product Interest: 500k term target"].map(
              (item) => (
                <p key={item} className="rounded-[0.66rem] border border-[#e5edf6] bg-white px-2 py-1.5 text-[0.4rem] font-bold text-[#617288]">
                  {item}
                </p>
              ),
            )}
          </div>
        </section>

        <div className="mt-2.5 grid grid-cols-2 gap-2">
          <button className="rounded-[0.68rem] bg-[#1f8fff] py-2 text-[0.4rem] font-black text-white">
            Review &amp; Send
          </button>
          <button className="rounded-[0.68rem] border border-[#bfdfff] bg-white py-2 text-[0.4rem] font-black text-[#1f8fff]">
            Copy to CRM
          </button>
        </div>
      </AppChrome>
    </PhoneFrame>
  );
}

function ProductMockups() {
  return (
    <div className="relative mx-auto mt-0 w-full max-w-[38.5rem] max-[520px]:mt-8 max-[520px]:max-w-[28rem]">
      <div className="absolute inset-x-12 top-8 h-60 rounded-full bg-[#dff3ff] blur-3xl" />
      <div className="absolute inset-x-0 bottom-5 h-16 rounded-full bg-[#d6ecff] blur-2xl" />
      <p className="absolute left-[16%] top-0 block max-w-[12rem] rotate-[-8deg] text-center text-[0.9rem] font-black leading-4 text-[#1f8fff] [font-family:var(--font-newsreader)]">
        From conversation
        <br />
        to follow-up
        <br />
        in one mobile workflow.
      </p>

      <div className="relative flex min-h-[330px] scale-[0.93] items-end justify-center -space-x-5 sm:min-h-[390px] lg:min-h-[435px] max-[520px]:scale-[0.86]">
        <RecordingPhone />
        <SummaryPhone />
        <FollowUpPhone />
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-center text-[0.76rem] font-black uppercase tracking-[0.12em] text-[#111927]">
      {children}
    </p>
  );
}

function IconBox({ kind }: { kind: string }) {
  if (kind === "clock") {
    return (
      <span className="flex h-8 w-8 items-center justify-center rounded-[0.48rem] bg-[#eaf6ff]">
        <span className="relative h-4 w-4 rounded-full border-2 border-[#1f8fff]">
          <span className="absolute left-1/2 top-1/2 h-[0.42rem] w-[2px] -translate-x-1/2 -translate-y-full rounded-full bg-[#1f8fff]" />
          <span className="absolute left-1/2 top-1/2 h-[2px] w-[0.42rem] -translate-y-1/2 rounded-full bg-[#1f8fff]" />
        </span>
      </span>
    );
  }

  if (kind === "list") {
    return (
      <span className="flex h-8 w-8 flex-col justify-center gap-1 rounded-[0.48rem] bg-[#eaf6ff] px-2">
        {[0, 1, 2].map((item) => (
          <span key={item} className="flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-[#1f8fff]" />
            <span className="h-[2px] flex-1 rounded-full bg-[#1f8fff]" />
          </span>
        ))}
      </span>
    );
  }

  if (kind === "reply") {
    return (
      <span className="flex h-8 w-8 items-center justify-center rounded-[0.48rem] bg-[#eaf6ff]">
        <span className="relative h-4 w-4 rounded-[0.35rem] bg-[#1f8fff]">
          <span className="absolute -bottom-1 left-1 h-2 w-2 rotate-45 bg-[#1f8fff]" />
        </span>
      </span>
    );
  }

  if (kind === "arrow") {
    return (
      <span className="flex h-8 w-8 items-center justify-center rounded-[0.48rem] bg-[#eaf6ff]">
        <span className="relative h-4 w-4">
          <span className="absolute left-0 top-[0.42rem] h-[2px] w-4 -rotate-45 rounded-full bg-[#1f8fff]" />
          <span className="absolute right-0 top-0 h-2 w-2 border-r-2 border-t-2 border-[#1f8fff]" />
        </span>
      </span>
    );
  }

  if (kind === "groups") {
    return (
      <span className="flex h-8 w-8 items-center justify-center rounded-[0.48rem] bg-[#eaf6ff]">
        <span className="relative h-4 w-5">
          <span className="absolute left-1 top-0 h-2 w-2 rounded-full bg-[#1f8fff]" />
          <span className="absolute right-0 top-1 h-[0.42rem] w-[0.42rem] rounded-full bg-[#72c4ff]" />
          <span className="absolute bottom-0 left-0 h-2 w-4 rounded-full bg-[#1f8fff]" />
        </span>
      </span>
    );
  }

  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-[0.48rem] bg-[#eaf6ff]">
      <span className="relative h-4 w-3 rounded-[0.18rem] border-2 border-[#1f8fff]">
        <span className="absolute left-1 top-1 h-[2px] w-1.5 rounded-full bg-[#1f8fff]" />
        <span className="absolute left-1 top-2 h-[2px] w-1.5 rounded-full bg-[#1f8fff]" />
      </span>
    </span>
  );
}

function RealWorkSection() {
  return (
    <section id="features" className="relative -mt-2 bg-[linear-gradient(180deg,transparent_0%,transparent_49%,#ffffff_50%,#ffffff_100%)] px-5 pb-4 sm:px-8">
      <div className="mx-auto max-w-[1210px]">
        <p className="mb-3 text-center text-[0.78rem] font-black uppercase tracking-[0.12em] text-[#167daf]">
          After the conversation, the real work begins
        </p>
        <div className="relative grid h-[560px] grid-cols-2 overflow-hidden rounded-[2rem] border border-[#d6e6f2] bg-[#f7fbff] shadow-[0_28px_60px_-26px_rgba(9,21,42,0.38)] max-[520px]:h-[720px] max-[520px]:grid-cols-1">
          <div className="relative overflow-hidden bg-[#eaf5fb]">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center opacity-85"
              style={{ backgroundImage: "url('/stitch-homepage/before-stress.jpg')" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,253,255,0.9),rgba(238,247,252,0.55))]" />
            <div className="relative z-10 p-10">
              <h3 className="text-[1.7rem] font-black text-[#07111f]">Before Inko</h3>
              <p className="mt-3 max-w-[14rem] text-[0.88rem] font-bold leading-5 text-[#263142]">
                Notes scattered. Details forgotten. Follow-up delayed.
              </p>
            </div>

            <div className="absolute left-[7%] top-[39%] z-20 rounded-[0.7rem] bg-white px-5 py-4 shadow-[0_14px_28px_-18px_rgba(9,21,42,0.35)]">
              <p className="text-[0.78rem] font-black text-[#07111f]">3 voice memos</p>
              <div className="mt-2 flex h-8 items-center gap-1">
                {[8, 18, 13, 24, 16, 20].map((height, index) => (
                  <span key={`${height}-${index}`} className="w-1 rounded-full bg-[#1f8fff]" style={{ height }} />
                ))}
              </div>
            </div>

            <div className="absolute left-[9%] bottom-[23%] z-20 rounded-[0.7rem] bg-white px-5 py-4 shadow-[0_14px_28px_-18px_rgba(9,21,42,0.35)]">
              <p className="text-[0.78rem] font-black text-[#07111f]">Handwritten notes</p>
              <div className="mt-2 h-7 w-24 rounded bg-[linear-gradient(180deg,#edf3f8,#ffffff)]" />
            </div>

            <div className="absolute bottom-[5%] left-[33%] z-20 rotate-[-8deg] rounded-[0.2rem] bg-[#fff7b3] px-4 py-3 text-[0.68rem] font-black leading-4 text-[#6b5b23] shadow-[0_12px_24px_-18px_rgba(9,21,42,0.4)]">
              Follow-up not
              <br />
              typed
            </div>

            <div className="absolute right-[22%] top-[38%] z-20 rounded-[0.7rem] bg-white px-5 py-4 shadow-[0_14px_28px_-18px_rgba(9,21,42,0.35)]">
              <p className="text-[0.78rem] font-black text-[#07111f]">Email draft</p>
              <p className="text-[0.68rem] font-bold text-[#53647a]">Not sent</p>
            </div>

            <div className="absolute bottom-[8%] right-[23%] z-20 rounded-[0.7rem] bg-white px-5 py-4 shadow-[0_14px_28px_-18px_rgba(9,21,42,0.35)]">
              <p className="text-[0.78rem] font-black text-[#07111f]">CRM update</p>
              <p className="text-[0.68rem] font-bold text-[#ef5364]">Missing</p>
            </div>
          </div>

          <div className="relative overflow-hidden bg-[#dff3ff]">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-[45%] bg-cover bg-center"
              style={{ backgroundImage: "url('/stitch-homepage/after-phone.jpg')" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(223,243,255,0.98),rgba(223,243,255,0.66))]" />
            <div className="relative z-10 p-10">
              <h3 className="text-[1.7rem] font-black text-[#167daf]">After Inko</h3>
              <p className="mt-3 max-w-[16rem] text-[0.88rem] font-bold leading-5 text-[#263142]">
                Everything captured, organized, and ready to act.
              </p>

              <div className="mt-8 grid max-w-[19rem] gap-4">
                {[
                  ["Client Summary", "What matters, cleanly captured"],
                  ["Follow-up Draft", "Personalized and ready to review"],
                  ["Next Steps", "Actionable and time-bound"],
                  ["Client Record", "CRM-ready and complete"],
                ].map(([title, body]) => (
                  <div key={title} className="flex items-center gap-4 rounded-[0.72rem] bg-white px-5 py-4 shadow-[0_14px_28px_-20px_rgba(9,21,42,0.35)]">
                    <IconBox kind="document" />
                    <div>
                      <p className="text-[0.82rem] font-black text-[#07111f]">{title}</p>
                      <p className="text-[0.66rem] font-bold text-[#53647a]">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-1/2 z-30 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#1f8fff] text-3xl font-black text-white shadow-[0_16px_30px_-16px_rgba(31,143,255,0.85)] max-[520px]:hidden">
            -&gt;
          </div>
        </div>
      </div>
    </section>
  );
}
function MiniPhone({ variant }: { variant: string }) {
  if (variant === "recording") {
    return (
      <div className="relative aspect-[9/18.5] w-[7.15rem] rounded-[1.1rem] bg-black p-1 shadow-[0_20px_34px_-22px_rgba(9,21,42,0.48)]">
        <div className="h-full rounded-[0.86rem] bg-[#05080c] px-2 py-5 text-center text-white">
          <p className="text-[0.52rem] font-bold">Recording</p>
          <p className="mt-1 text-[0.34rem] text-white/54">Consulting client call</p>
          <div className="mt-9 flex h-10 items-center justify-center gap-1">
            {[12, 22, 34, 18, 28, 38, 20].map((height, index) => (
              <span key={`${height}-${index}`} className="w-1 rounded-full bg-white/34" style={{ height }} />
            ))}
          </div>
          <span className="mx-auto mt-9 flex h-8 w-8 items-center justify-center rounded-full border border-white/70 bg-[#ef3030]">
            <span className="h-5 w-5 rounded-full border border-white/80" />
          </span>
        </div>
      </div>
    );
  }

  if (variant === "summary") {
    return (
      <div className="relative aspect-[9/18.5] w-[7.15rem] rounded-[1.1rem] bg-black p-1 shadow-[0_20px_34px_-22px_rgba(9,21,42,0.48)]">
        <div className="h-full rounded-[0.86rem] bg-white px-2 py-4 text-[#17243a]">
          <div className="mx-auto mb-3 h-2 w-9 rounded-full bg-black" />
          <p className="text-center text-[0.52rem] font-black">Anna Johnson</p>
          <p className="text-center text-[0.34rem] font-bold text-[#8ca0b5]">Policy review</p>
          <div className="mt-3 space-y-1.5">
            {["Key needs", "Concerns", "Next step"].map((item) => (
              <div key={item} className="rounded-[0.5rem] border border-[#e4edf6] bg-[#f8fbff] p-1.5">
                <p className="text-[0.42rem] font-black">{item}</p>
                <p className="mt-1 h-1 w-12 rounded bg-[#d8e7f5]" />
                <p className="mt-1 h-1 w-9 rounded bg-[#d8e7f5]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[9/18.5] w-[7.15rem] rounded-[1.1rem] bg-black p-1 shadow-[0_20px_34px_-22px_rgba(9,21,42,0.48)]">
      <div className="h-full rounded-[0.86rem] bg-white px-2 py-4 text-[#17243a]">
        <div className="mx-auto mb-3 h-2 w-9 rounded-full bg-black" />
        <p className="text-[0.58rem] font-black">Follow-up Ready</p>
        <div className="mt-2 rounded-[0.56rem] border border-[#e5edf6] bg-[#f8fbff] p-2">
          <p className="h-1 w-16 rounded bg-[#c8dbea]" />
          <p className="mt-1 h-1 w-14 rounded bg-[#c8dbea]" />
          <p className="mt-1 h-1 w-12 rounded bg-[#c8dbea]" />
        </div>
        <p className="mt-3 text-[0.48rem] font-black">Next Steps</p>
        <div className="mt-1.5 space-y-1.5">
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-4 rounded-[0.38rem] bg-[#eef6ff]" />
          ))}
        </div>
        <button className="mt-4 h-5 w-full rounded-[0.42rem] bg-[#1f8fff] text-[0.34rem] font-black text-white">
          Draft email
        </button>
      </div>
    </div>
  );
}

function FlowArrow({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className={[
        "pointer-events-none absolute block h-24 w-56 border-t-2 border-dashed border-[#65b5df] max-[520px]:hidden",
        flip ? "left-[49%] top-[9.8rem] rotate-[9deg]" : "left-[22%] top-[5.9rem] -rotate-[8deg]",
      ].join(" ")}
      aria-hidden="true"
    />
  );
}

function WorkflowSection() {
  return (
    <section id="how-to-use" className="bg-white px-5 pb-1 pt-7 sm:px-8">
      <div className="mx-auto max-w-[1160px]">
        <p className="text-center text-[0.78rem] font-black uppercase tracking-[0.12em] text-[#263142]">How Inko Works</p>
        <h2 className="mx-auto mt-2 max-w-[45rem] text-center text-[2rem] font-black leading-[1.03] tracking-[-0.02em] text-[#07111f] sm:text-[2.85rem]">
          One mobile workflow after every conversation.
        </h2>

        <div className="relative mt-5 grid grid-cols-3 gap-8 max-[520px]:grid-cols-1">
          <FlowArrow />
          <FlowArrow flip />
          {workflowSteps.map((step, index) => (
            <article key={step.title} className="relative text-center">
              <div className="mx-auto flex max-w-[13.8rem] items-start gap-3 text-left">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1f8fff] text-[0.78rem] font-black text-white shadow-[0_12px_24px_-14px_rgba(31,143,255,0.8)]">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-[1.02rem] font-black leading-none text-[#07111f]">{step.title}</h3>
                  <p className="mt-2 text-[0.74rem] font-semibold leading-[1.32] text-[#111b2a]">
                    {step.body}
                  </p>
                </div>
              </div>
              <div className={index === 1 ? "mt-6 justify-self-center pl-3" : "mt-6 justify-self-center"}>
                <MiniPhone variant={step.variant} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutcomePreview({ variant }: { variant: string }) {
  if (variant === "draft") {
    return (
      <div className="mt-3 rounded-[0.7rem] border border-[#e5edf6] bg-white p-2 text-left shadow-[0_12px_24px_-22px_rgba(9,21,42,0.32)]">
        <p className="text-[0.46rem] font-black text-[#17243a]">Follow-up Draft</p>
        <p className="mt-2 text-[0.38rem] leading-[0.62rem] text-[#617288]">
          Hi John, great speaking with you today. Based on what we discussed...
        </p>
        <button className="mt-2 h-5 w-full rounded-[0.38rem] bg-[#1f8fff] text-[0.34rem] font-black text-white">
          Review &amp; Send
        </button>
      </div>
    );
  }

  if (variant === "memory") {
    return (
      <div className="mt-3 rounded-[0.7rem] border border-[#e5edf6] bg-white p-2 text-left shadow-[0_12px_24px_-22px_rgba(9,21,42,0.32)]">
        <div className="flex items-center gap-2">
          <span className="h-5 w-5 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('/avatars/advisor-2.jpg')" }} />
          <div>
            <p className="text-[0.42rem] font-black text-[#17243a]">John Brown</p>
            <p className="text-[0.32rem] text-[#8ca0b5]">Client since 2024</p>
          </div>
        </div>
        <div className="mt-2 flex gap-1">
          {["Health", "Family", "Budget"].map((item) => (
            <span key={item} className="rounded bg-[#edf7ff] px-1 py-0.5 text-[0.28rem] font-black text-[#1f8fff]">
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "advisor") {
    return (
      <div className="mt-3 rounded-[0.7rem] border border-[#e5edf6] bg-white p-2 text-left shadow-[0_12px_24px_-22px_rgba(9,21,42,0.32)]">
        <p className="text-[0.46rem] font-black text-[#17243a]">Ask Advisor</p>
        <p className="mt-2 rounded-[0.42rem] bg-[#f3f8fc] p-2 text-[0.36rem] leading-[0.56rem] text-[#617288]">
          Some recommendations fit John&apos;s output and term needs.
        </p>
        <p className="mt-2 text-[0.36rem] font-black text-[#17243a]">Term Life + Critical Illness</p>
      </div>
    );
  }

  if (variant === "crm") {
    return (
      <div className="mt-3 rounded-[0.7rem] border border-[#e5edf6] bg-white p-2 text-left shadow-[0_12px_24px_-22px_rgba(9,21,42,0.32)]">
        <p className="text-[0.46rem] font-black text-[#17243a]">CRM Record</p>
        <p className="mt-2 text-[0.34rem] font-black text-[#f06a3d]">Follow-up needed</p>
        {["Family", "Budget Focus", "Life Insurance"].map((item) => (
          <p key={item} className="mt-1 h-2 rounded bg-[#edf3f8]" />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-3 rounded-[0.7rem] border border-[#e5edf6] bg-white p-2 text-left shadow-[0_12px_24px_-22px_rgba(9,21,42,0.32)]">
      <p className="text-[0.46rem] font-black text-[#17243a]">Summary</p>
      <div className="mt-2 space-y-1.5">
        {["Key Needs", "Concerns", "Decision Timeline"].map((item, index) => (
          <div key={item} className="rounded-[0.42rem] bg-[#f4f9ff] px-2 py-1.5">
            <p className="text-[0.34rem] font-black text-[#17243a]">{item}</p>
            <p className={index === 0 ? "mt-1 h-1 w-12 rounded bg-[#1f8fff]/30" : "mt-1 h-1 w-9 rounded bg-[#d8e7f5]"} />
          </div>
        ))}
      </div>
    </div>
  );
}

function OutcomesSection() {
  return (
    <section className="bg-white px-5 pb-4 pt-6 sm:px-8">
      <div className="mx-auto max-w-[1160px]">
        <SectionLabel>What You Get</SectionLabel>
        <h2 className="mx-auto mt-2 max-w-[54rem] text-center text-[2rem] font-black leading-[1.04] tracking-[-0.02em] text-[#07111f] sm:text-[2.6rem]">
          The work that usually happens after the meeting - already prepared.
        </h2>

        <div className="mt-4 grid grid-cols-5 gap-4 max-[520px]:grid-cols-1">
          {outcomeCards.map((card) => (
            <article
              key={card.title}
              className="min-h-[13.7rem] rounded-[0.82rem] border border-[#dce7f1] bg-white p-4 shadow-[0_20px_34px_-24px_rgba(9,21,42,0.36)]"
            >
              <h3 className="text-[0.78rem] font-black leading-tight text-[#1f8fff]">{card.title}</h3>
              <p className="mt-2 min-h-[2rem] text-[0.62rem] font-semibold leading-[1.25] text-[#263142]">
                {card.body}
              </p>
              <OutcomePreview variant={card.variant} />
            </article>
          ))}
        </div>

        <div className="mt-7">
          <SectionLabel>Built for Real Sales Conversations</SectionLabel>
        </div>
        <div className="mt-4 grid grid-cols-6 gap-3 max-[520px]:grid-cols-2">
          {scenarioChips.map((chip, index) => (
            <span
              key={chip}
              className="flex min-h-[3.5rem] items-center gap-3 rounded-[0.78rem] border border-[#dce7f1] bg-white px-4 py-3 text-[0.68rem] font-black leading-tight text-[#07111f] shadow-[0_16px_28px_-22px_rgba(9,21,42,0.35)]"
            >
              <IconBox kind={index === 2 ? "reply" : index === 3 ? "clock" : index === 4 ? "arrow" : index === 5 ? "groups" : "document"} />
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaPhone() {
  return (
    <div className="absolute -right-3 -top-5 block w-[18rem] rotate-[18deg] rounded-[2.1rem] border border-black/10 bg-[#0d1420] p-2 shadow-[0_28px_60px_-25px_rgba(9,21,42,0.55)] max-[520px]:hidden lg:right-8 lg:w-[21rem]">
      <div className="aspect-[9/18.5] rounded-[1.68rem] bg-[linear-gradient(145deg,#85dcff_0%,#1f8fff_52%,#006ee8_100%)]">
        <div className="mx-auto h-7 w-20 rounded-b-[1rem] bg-[#0d1420]" />
        <div className="flex h-[78%] items-center justify-center">
          <span className="text-[3.2rem] font-black text-white/92">inko</span>
        </div>
      </div>
    </div>
  );
}

function FinalCTASection() {
  return (
    <section className="bg-white px-5 pb-3 pt-1 sm:px-8">
      <div className="relative mx-auto h-[17rem] max-w-[1160px] overflow-hidden rounded-[1.1rem] bg-[linear-gradient(135deg,#e8f8ff_0%,#caefff_100%)] px-5 py-5 shadow-[0_24px_54px_-32px_rgba(31,143,255,0.38)] max-[520px]:h-auto max-[520px]:pb-8 sm:px-10">
        <div className="relative z-10 max-w-[44rem]">
          <h2 className="text-[2rem] font-black leading-[1.08] tracking-[-0.02em] text-[#07111f] sm:text-[2.5rem]">
            Don&apos;t let the value of a good conversation disappear.
          </h2>
          <p className="mt-3 max-w-[34rem] text-[0.98rem] font-semibold leading-6 text-[#263142]">
            Join early access and see how Inko turns client conversations into follow-ups, next steps, and client records.
          </p>
          <div className="mt-5">
            <EarlyAccessForm />
          </div>
          <AdvisorProof compact />
        </div>
        <CtaPhone />
      </div>
      <Footer />
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-6 bg-white">
      <div className="mx-auto flex max-w-[1160px] flex-row items-center justify-between gap-6 border-t border-[#dde7f1] pt-6 max-[520px]:flex-col max-[520px]:items-start">
        <div className="flex items-center gap-5">
          <Link href="/" className="text-[2rem] font-black leading-none text-[#06121f]">
            inko
          </Link>
          <p className="text-[0.82rem] font-semibold text-[#263142]">
            AI mobile post-conversation workspace for insurance advisors.
          </p>
        </div>
        <nav className="flex flex-wrap gap-7 text-[0.78rem] font-bold text-[#07111f]">
          <a href="/privacy-policy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">LinkedIn</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="stitch-homepage-viewport overflow-hidden">
      <div className="stitch-homepage-canvas min-h-screen overflow-hidden bg-[radial-gradient(circle_at_18%_10%,rgba(219,244,255,0.92),transparent_27%),radial-gradient(circle_at_88%_16%,rgba(202,235,255,0.7),transparent_26%),linear-gradient(180deg,#fbfdff_0%,#f5fbff_35%,#ffffff_58%,#ffffff_100%)] text-[#0a1733]">
        <Header />

        <main className="relative">
          <section className="mx-auto grid max-w-[1160px] grid-cols-[0.88fr_1.18fr] items-center gap-8 px-8 pb-14 pt-7 max-[520px]:grid-cols-1 max-[520px]:px-5 max-[520px]:text-center lg:pb-20 lg:pt-14">
            <div className="relative z-20 mx-0 max-w-[34rem] text-left max-[520px]:mx-auto max-[520px]:text-center">
              <HeroBadge />
              <h1 className="text-[4rem] font-black leading-[1.03] tracking-[-0.03em] text-[#050d19] max-[520px]:text-[2.86rem] lg:text-[4.42rem]">
                Turn every client conversation into a clear{" "}
                <span className="text-[#1f8fff]">next step.</span>
              </h1>

              <p className="mt-5 max-w-[31rem] text-[1.08rem] font-medium leading-7 text-[#101b2a]">
                Inko turns client meetings and calls into summaries, follow-up drafts, next steps, and client records - so every conversation keeps moving after it ends.
              </p>

              <div id="early-access" className="mt-6">
                <EarlyAccessForm />
              </div>

              <AdvisorProof />
            </div>

            <ProductMockups />
          </section>

          <RealWorkSection />
          <WorkflowSection />
          <OutcomesSection />
          <FinalCTASection />
        </main>

      </div>
    </div>
  );
}
