import Link from "next/link";
import { ArrowUpRight, PlayCircle, Route, ShieldCheck } from "lucide-react";

const evidence = [
  {
    icon: PlayCircle,
    title: "Unedited product runs",
    description:
      "Watch ENAI work through real revenue workflows without relying on a deck, a staged dashboard, or an outcome claim.",
    label: "Product evidence",
  },
  {
    icon: Route,
    title: "Market-specific execution",
    description:
      "Inspect how the signals, buying committee, permitted claims, and seller handoff change from one vertical to another.",
    label: "Vertical evidence",
  },
  {
    icon: ShieldCheck,
    title: "Visible control model",
    description:
      "Review the approval rules, exclusions, source context, escalation path, and authority boundary before a deployment begins.",
    label: "Governance evidence",
  },
];

export default function WorkflowsSection() {
  return (
    <section className="border-t border-black/5 bg-[#E8DDD4] px-6 py-20 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <p className="section-eyebrow">Evidence before promise</p>
            <h2 className="section-title mt-4 text-black">What buyers can inspect before a pilot.</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-black/62 lg:justify-self-end">
            ENAI should be evaluated on the work it can show, the market context it preserves, and the controls a customer can verify.
          </p>
        </div>

        <div className="mt-14 grid border-l border-t border-black/10 md:grid-cols-3">
          {evidence.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="border-b border-r border-black/10 bg-[#F5F1ED] p-7 md:p-8">
                <Icon className="h-6 w-6 text-[#1E3A3A]" />
                <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.16em] text-black/38">{item.label}</p>
                <h3 className="mt-3 text-2xl leading-tight text-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-black/60">{item.description}</p>
              </article>
            );
          })}
        </div>

        <Link href="/demo-library" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A3A]">
          Open the demo library
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
