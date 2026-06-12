import Link from "next/link";
import { ArrowRight, Search, ShieldCheck, Users, X } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Approval rules",
    text: "Voice, claims, volume, and exclusions are set by you. ENAI executes inside those lines — never around them.",
  },
  {
    icon: Search,
    title: "Audit trail",
    text: "Every message traces back to the signal, the source, and the rule that allowed it. Nothing is a black box.",
  },
  {
    icon: Users,
    title: "Human handoff",
    text: "Sensitive accounts and judgment calls escalate to your team. Autonomy is earned, not assumed.",
  },
];

const neverSends = [
  "Messages outside your approved voice and claims",
  "Outreach to accounts or segments you've excluded",
  "Volume beyond the pacing rules you set",
];

export default function GovernedSection() {
  return (
    <section className="bg-[#F5F1ED] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-black/45">
            Governed by design
          </p>
          <h2 className="mt-4 text-[34px] leading-[1.1] text-[#1E3A3A] md:text-[48px]">
            Autonomy your brand can sign off on.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/60 md:text-lg">
            The reason teams trust ENAI to act isn&apos;t that it&apos;s clever.
            It&apos;s that every action is constrained, logged, and reversible.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-black/[0.07] bg-white p-6 md:p-7"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1E3A3A]/[0.07] text-[#1E3A3A]">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-medium tracking-[-0.01em] text-[#1E3A3A]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black/55">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-black/[0.07] bg-[#1E3A3A] p-6 text-white md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-md">
              <h3 className="text-xl font-medium tracking-[-0.01em]">
                What ENAI will never send
              </h3>
              <ul className="mt-5 space-y-3">
                {neverSends.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-white/75">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <X className="h-3 w-3 text-amber-300" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/security"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50"
            >
              Read the security overview
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
