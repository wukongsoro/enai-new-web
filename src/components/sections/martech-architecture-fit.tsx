import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const executionLayers = [
  {
    index: "01",
    title: "Observe the market",
    description:
      "Bring account change, CRM history, conversations, product activity, and intent into one evidence set.",
  },
  {
    index: "02",
    title: "Model the buying system",
    description:
      "Map the operators, economic buyers, evaluators, procurement path, and existing relationships around the decision.",
  },
  {
    index: "03",
    title: "Apply customer policy",
    description:
      "Use explicit rules for claims, approvals, exclusions, pacing, escalation, and human authority before action is taken.",
  },
  {
    index: "04",
    title: "Advance the opportunity",
    description:
      "Coordinate the permitted next steps and hand the seller a qualified opportunity with its evidence and context intact.",
  },
];

const connectedSystems = [
  { label: "Systems of record", tools: "Salesforce · HubSpot" },
  { label: "Signals and context", tools: "Gong · 6sense · ZoomInfo" },
  { label: "Workflow and data", tools: "Clay · Apollo · Slack" },
  { label: "Engagement channels", tools: "Outreach · Salesloft" },
];

export default function MartechArchitectureFit() {
  return (
    <section className="border-y border-black/8 bg-[#E8DDD4] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.46fr_0.54fr] lg:gap-20">
          <div className="lg:sticky lg:top-36 lg:self-start">
            <p className="section-eyebrow text-[#1E3A3A]/55">Works across your revenue stack</p>
            <h2 className="section-title mt-5 text-[#1E3A3A]">
              Keep your systems. Add governed execution.
            </h2>
            <p className="section-copy mt-5 max-w-xl text-black/68">
              ENAI does not replace the systems where customer data already lives. It connects
              their signals to a market-specific buying model, applies your operating rules,
              and moves the right work to the right human.
            </p>
            <Link
              href="/integrations"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A3A]"
            >
              Explore integrations
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="border-t border-black/15">
            {executionLayers.map((layer) => (
              <article
                key={layer.index}
                className="grid gap-3 border-b border-black/15 py-7 sm:grid-cols-[48px_0.42fr_0.58fr] sm:gap-5 md:py-8"
              >
                <span className="font-mono text-[10px] text-[#1E3A3A]/40">{layer.index}</span>
                <h3 className="text-xl leading-tight text-[#1E3A3A] md:text-2xl">{layer.title}</h3>
                <p className="text-sm leading-6 text-black/62 md:text-base md:leading-7">
                  {layer.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 border-y border-black/15 md:mt-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {connectedSystems.map((group) => (
              <div
                key={group.label}
                className="border-b border-black/10 py-6 md:px-6 md:first:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:last:pr-0"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#1E3A3A]/45">
                  {group.label}
                </p>
                <p className="mt-2 text-sm font-semibold text-[#1E3A3A]">{group.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
