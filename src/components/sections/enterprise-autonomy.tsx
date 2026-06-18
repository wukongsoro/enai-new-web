"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Phosphor30 from "@/components/ui/phosphor-30";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Mail,
  MessageSquareText,
  Plus,
  ShieldCheck,
  Users,
} from "lucide-react";

const workflowSteps = [
  "Read market signals",
  "Build the account brief",
  "Map the buying committee",
  "Prepare governed outreach",
];
const TOTAL = workflowSteps.length;

const accountNodes = [
  { name: "Operations", role: "Route owner", x: "50%", y: "20%", tone: "neutral" },
  { name: "Finance", role: "Economic buyer", x: "25%", y: "48%", tone: "supporter" },
  { name: "Commercial", role: "Revenue owner", x: "67%", y: "47%", tone: "supporter" },
  { name: "Procurement", role: "Approval path", x: "43%", y: "72%", tone: "detractor" },
];

// Light, on-brand surfaces (cream + deep green accents).
const cardClass =
  "overflow-hidden rounded-2xl border border-black/[0.07] bg-white text-[#1E3A3A] shadow-[0_24px_70px_-60px_rgba(30,58,58,0.45)]";

export default function EnterpriseAutonomy() {
  // Fluid execution: the plan builds one step at a time, then loops.
  const [step, setStep] = useState(1); // 1..TOTAL+1 (TOTAL+1 = all complete)

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStep(TOTAL + 1);
      return;
    }
    const id = setInterval(() => {
      setStep((s) => (s >= TOTAL + 1 ? 1 : s + 1));
    }, 1100);
    return () => clearInterval(id);
  }, []);

  const allDone = step > TOTAL;
  const revealed = Math.min(step, TOTAL);
  const doneCount = allDone ? TOTAL : Math.max(0, revealed - 1);

  return (
    <section
      id="platform"
      className="relative overflow-hidden bg-[#E8DDD4] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
          <h2 className="max-w-4xl text-[42px] leading-[1.02] text-[#1E3A3A] md:text-[64px] lg:text-[82px]">
            Run the revenue motion
            <span className="block text-[#1E3A3A]/35">from signal to meeting</span>
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-black/55 md:text-lg">
            ENAI turns account signals, buyer context, outreach, qualification,
            and handoff into one governed operating layer.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* Agent Workflows — fluid, step-by-step execution */}
          <article className={`${cardClass} flex min-h-[500px] flex-col p-6 md:p-8 lg:col-span-2`}>
            <div>
              <h3 className="text-2xl font-medium tracking-[-0.02em] md:text-[28px]">
                Agent Workflows
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-black/50">
                Ask for the outcome. ENAI plans the work, applies your rules,
                and moves the account forward.
              </p>
            </div>

            {/* Command input */}
            <div className="mt-8 rounded-2xl border border-black/[0.07] bg-[#F5F1ED] p-4 md:p-5">
              <p className="text-[15px] leading-relaxed text-black/80">
                Find logistics accounts showing expansion intent, map the buying
                committee, and prepare a governed first-touch sequence.
                <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[2px] animate-pulse bg-[#1E3A3A]/70 align-middle" />
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-black/10 bg-white px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-black/45">
                  <Plus className="h-3 w-3" /> Ask
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1E3A3A] text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>

            {/* Live status */}
            <div className="mt-5 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1E3A3A]/20 bg-[#1E3A3A]/[0.07] px-3 py-1 text-xs font-medium text-[#1E3A3A]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1E3A3A]" />
                {allDone ? "Plan complete" : "ENAI working"}
              </span>
              <span className="font-mono text-[11px] text-black/35">
                {doneCount}/{TOTAL} steps
              </span>
            </div>

            {/* Steps keep a stable footprint so the page does not jump while the run animates. */}
            <div className="mt-4 grid flex-1 content-start gap-3 sm:grid-cols-2">
              {workflowSteps.map((row, index) => {
                const visible = index < revealed;
                const isActive = !allDone && index === revealed - 1;
                const done = allDone || index < revealed - 1;
                return (
                  <div
                    key={row}
                    className={`flex min-h-[54px] items-center gap-3 rounded-xl border px-3 py-3 transition-[border-color,background-color,opacity] duration-500 ${
                      visible && isActive
                        ? "border-[#1E3A3A]/25 bg-[#1E3A3A]/[0.05]"
                        : visible
                          ? "border-black/[0.07] bg-[#F8F5F2]"
                          : "border-black/[0.04] bg-[#F8F5F2]/45 opacity-35"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-500 ${
                        visible && done
                          ? "bg-[#1E3A3A]/12 text-[#1E3A3A]"
                          : visible
                            ? "bg-[#1E3A3A]/[0.06] text-[#1E3A3A]/70"
                            : "bg-black/[0.04] text-black/20"
                      }`}
                    >
                      {visible && done ? (
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      ) : visible ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      )}
                    </span>
                    <span className={`text-sm font-medium ${visible ? "text-black/75" : "text-black/35"}`}>
                      {row}
                    </span>
                  </div>
                );
              })}
            </div>
          </article>

          {/* Buyer Intelligence — contained orb */}
          <article className={`${cardClass} relative flex min-h-[500px] flex-col p-6 md:p-8`}>
            <div>
              <h3 className="text-2xl font-medium tracking-[-0.02em] md:text-[28px]">
                Buyer Intelligence
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-black/50">
                Signals, context, and stakeholder routes in motion.
              </p>
            </div>

            <div className="relative flex flex-1 items-center justify-center">
              {/* Contained orb */}
              <div className="relative h-[210px] w-[210px]">
                <div className="absolute inset-0 overflow-hidden rounded-full [mask-image:radial-gradient(circle,black_56%,transparent_76%)]">
                  <Phosphor30 pixelRatio={1.25} />
                </div>
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10" />
              </div>

              {/* Floating questions */}
              <div className="absolute left-0 top-[24%] max-w-[235px] rounded-xl border border-black/[0.07] bg-white/95 px-4 py-3 text-[14px] leading-snug text-black/70 shadow-[0_20px_50px_-30px_rgba(30,58,58,0.5)] backdrop-blur-sm">
                Which accounts are showing expansion intent this week?
              </div>
              <div className="absolute bottom-[14%] right-0 max-w-[235px] rounded-xl border border-black/[0.07] bg-white/95 px-4 py-3 text-[14px] leading-snug text-black/70 shadow-[0_20px_50px_-30px_rgba(30,58,58,0.5)] backdrop-blur-sm">
                Who is the buyer, operator, and safest route in?
              </div>
            </div>
          </article>

          {/* Governed Outreach */}
          <article className={`${cardClass} min-h-[310px] p-6 md:p-7`}>
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-medium tracking-[-0.02em]">Governed Outreach</h3>
              <Mail className="h-5 w-5 text-black/35" />
            </div>
            <div className="mt-12 rounded-xl border border-black/[0.06] bg-[#F5F1ED] p-4 text-[15px] leading-relaxed text-black/65">
              Draft a first-touch message for the COO based on port congestion,
              cost pressure, and regional expansion.
            </div>
          </article>

          {/* Qualification */}
          <article className={`${cardClass} min-h-[310px] p-6 md:p-7`}>
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-medium tracking-[-0.02em]">Qualification</h3>
              <MessageSquareText className="h-5 w-5 text-black/35" />
            </div>
            <div className="mt-12 space-y-3">
              {["Budget confirmed", "Route volume shared", "Meeting booked"].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl border border-black/[0.06] bg-[#F8F5F2] px-3 py-3"
                >
                  <span className="text-sm font-medium text-black/65">{item}</span>
                  <CheckCircle2 className="h-4 w-4 text-[#1E3A3A]/70" />
                </div>
              ))}
            </div>
          </article>

          {/* Control Layer */}
          <article className={`${cardClass} flex min-h-[310px] flex-col p-6 md:p-7`}>
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-medium tracking-[-0.02em]">Control Layer</h3>
              <ShieldCheck className="h-5 w-5 text-black/35" />
            </div>
            <p className="mt-12 text-[15px] leading-relaxed text-black/55">
              Every action is traceable to source context, approval rules, and
              the handoff path your team controls.
            </p>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-[#1E3A3A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#16302F]"
            >
              See ENAI run it
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

          {/* Account Map */}
          <article className={`${cardClass} relative min-h-[420px] p-6 md:p-8 lg:col-span-3`}>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-medium tracking-[-0.02em] md:text-[28px]">
                  Account Map
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-black/50">
                  ENAI does not stop at a lead. It builds the route through the account.
                </p>
              </div>
              <Users className="h-5 w-5 text-black/35" />
            </div>

            <div className="relative mx-auto mt-10 h-[285px] max-w-4xl">
              <div className="absolute left-1/2 top-1/2 h-[210px] w-[620px] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dotted border-[#1E3A3A]/25" />
              <div className="absolute left-1/2 top-1/2 h-[150px] w-[430px] max-w-[78vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dotted border-[#1E3A3A]/15" />

              {/* Connection lines from the ENAI hub to each stakeholder */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden
              >
                {accountNodes.map((node) => (
                  <line
                    key={node.name}
                    x1="50"
                    y1="47"
                    x2={parseFloat(node.x)}
                    y2={parseFloat(node.y)}
                    stroke="#1E3A3A"
                    strokeOpacity="0.22"
                    strokeWidth="0.18"
                    strokeDasharray="0.9 0.9"
                  />
                ))}
              </svg>

              {/* Central ENAI hub */}
              <div className="absolute left-1/2 top-[47%] z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center gap-2 rounded-full border border-[#1E3A3A]/15 bg-[#1E3A3A] px-4 py-2 shadow-[0_14px_40px_-22px_rgba(30,58,58,0.8)]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                  <span className="text-sm font-semibold tracking-tight text-white">ENAI</span>
                </div>
              </div>

              {accountNodes.map((node) => (
                <div
                  key={node.name}
                  className="absolute w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-black/[0.07] bg-white p-3 shadow-[0_18px_50px_-38px_rgba(30,58,58,0.55)]"
                  style={{ left: node.x, top: node.y }}
                >
                  <p className="text-sm font-semibold text-[#1E3A3A]">{node.name}</p>
                  <p className="mt-1 text-xs text-black/45">{node.role}</p>
                  <span
                    className={`mt-3 inline-flex rounded-full px-2 py-1 text-[11px] ${
                      node.tone === "detractor"
                        ? "bg-amber-500/15 text-amber-700"
                        : node.tone === "supporter"
                          ? "bg-[#1E3A3A]/10 text-[#1E3A3A]"
                          : "bg-black/[0.05] text-black/45"
                    }`}
                  >
                    {node.tone}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
