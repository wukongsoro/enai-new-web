const stackRows = [
  {
    category: "Analytics & Forecasting",
    entries: [
      { tool: "Clari", tag: "Competes", detail: "ENAI replaces for SMB" },
      { tool: "Gong", tag: "Integrates", detail: "Conversation signals in" },
    ],
  },
  {
    category: "CRM & Collaboration",
    entries: [
      { tool: "HubSpot", tag: "Integrates", detail: "Core integration layer" },
      { tool: "Slack", tag: "Integrates", detail: "ENAI action delivery" },
    ],
  },
  {
    category: "Outbound Execution",
    entries: [
      { tool: "Salesloft / Outreach", tag: "Competes", detail: "Enterprise tool - ENAI owns SMB" },
      { tool: "Instantly / Lemlist", tag: "Integrates", detail: "ENAI triggers and personalises" },
    ],
  },
  {
    category: "Enrichment & Workflows",
    entries: [
      { tool: "Clay", tag: "Integrates", detail: "Enrichment signals in" },
      { tool: "Apollo", tag: "Overlap", detail: "Feeds plus partial overlap" },
    ],
  },
  {
    category: "Data & Intelligence",
    entries: [
      { tool: "ZoomInfo", tag: "Integrates", detail: "Contact signals in" },
      { tool: "Bombora / 6sense", tag: "Integrates", detail: "Intent signals in" },
    ],
  },
];

const differentiationRows = [
  {
    dimension: "Built for",
    legacy: "Enterprise teams with RevOps",
    enai: "SMB-first - no RevOps required",
  },
  {
    dimension: "UX model",
    legacy: "Dashboards plus manual workflows",
    enai: "Prompt-driven (ChatGPT-style)",
  },
  {
    dimension: "Setup time",
    legacy: "Weeks to months",
    enai: "Hours",
  },
  {
    dimension: "Signal model",
    legacy: "Pipeline-centric (CRM data only)",
    enai: "Signal-centric (inbound + outbound + intent + conversations)",
  },
  {
    dimension: "AI approach",
    legacy: "Retrofitted analytics on legacy platform",
    enai: "LLM-native from day one",
  },
  {
    dimension: "RevOps required",
    legacy: "Yes - dedicated analyst to interpret",
    enai: "No - ENAI is the RevOps layer",
  },
  {
    dimension: "Execution model",
    legacy: "Insights plus reporting to manual action",
    enai: "Autonomous orchestration to direct action",
  },
];

const badgeStyles: Record<string, string> = {
  Integrates: "bg-black/[0.04] text-black/70 border-black/10",
  Competes: "bg-black/[0.08] text-black/85 border-black/15",
  Overlap: "bg-white text-black/65 border-black/10",
};

export default function MartechArchitectureFit() {
  return (
    <section className="bg-[#E8DDD4] pb-24 md:pb-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-[#F5F1ED] p-8 md:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-black/45 font-bold px-4 py-2 border border-black/10 rounded-full bg-white/65">
              Competitive Positioning
            </div>
            <h3 className="mt-5 text-[30px] md:text-[44px] heading-strong text-black leading-tight text-balance">
              The OS layer across your entire GTM stack
            </h3>
            <p className="mt-4 text-base md:text-lg text-black/65 leading-relaxed">
              ENAI does not replace your tools. It makes every tool investment pay off by
              being the intelligence layer that connects, reads, and acts across all of them.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-black text-xl md:text-2xl heading-strong">
                  ENAI - Revenue Operating System
                </p>
                <p className="mt-1 text-sm md:text-base text-black/60">
                  Reads all signals - Orchestrates all actions - Replaces nothing
                  (except Clari at the SMB tier)
                </p>
              </div>
              <p className="text-xs tracking-[0.18em] uppercase text-black/40 font-semibold">
                Signal up · Action down
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {stackRows.map((row) => (
                <article
                  key={row.category}
                  className="rounded-2xl border border-black/10 bg-[#F8F5F2] p-5 md:p-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[230px_1fr] gap-4">
                    <h4 className="text-[11px] md:text-xs uppercase tracking-[0.16em] text-black/50 font-semibold">
                      {row.category}
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {row.entries.map((entry) => (
                        <div
                          key={entry.tool}
                          className="rounded-xl border border-black/10 bg-white p-4"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-black font-semibold text-sm md:text-base">
                              {entry.tool}
                            </p>
                            <span
                              className={`text-[10px] md:text-xs font-semibold px-2 py-1 rounded-full border ${
                                badgeStyles[entry.tag]
                              }`}
                            >
                              {entry.tag}
                            </span>
                          </div>
                          <p className="mt-2 text-xs md:text-sm text-black/60">{entry.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-xs md:text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-3 py-1.5 text-black/70">
                Integrates - ENAI connects and acts on signals
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-black/[0.08] px-3 py-1.5 text-black/85">
                Competes - Enterprise tool, ENAI owns SMB tier
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-black/65">
                Overlap - Complementary with some feature overlap
              </span>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-black/10 bg-white/90 p-6 md:p-8">
            <div className="max-w-4xl">
              <p className="text-xs tracking-[0.2em] uppercase text-black/45 font-semibold">
                Differentiation
              </p>
              <h4 className="mt-3 text-[28px] md:text-[36px] heading-strong text-black leading-tight">
                Built different, from the ground up
              </h4>
              <p className="mt-3 text-sm md:text-base text-black/65 leading-relaxed">
                Every alternative was built for enterprise teams with dedicated RevOps.
                ENAI is the only AI-native Revenue OS designed end-to-end for SMBs.
              </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
              <div className="grid grid-cols-3 bg-black text-white">
                <p className="px-4 py-3 text-[11px] md:text-xs uppercase tracking-[0.14em] text-white/60 font-semibold">
                  Dimension
                </p>
                <p className="px-4 py-3 text-[11px] md:text-xs text-white/50 font-semibold">
                  Traditional ROPs (Clari, Salesloft, Outreach)
                </p>
                <p className="px-4 py-3 text-[11px] md:text-xs text-white font-semibold">
                  ENAI
                </p>
              </div>
              {differentiationRows.map((row) => (
                <div
                  key={row.dimension}
                  className="grid grid-cols-1 md:grid-cols-3 border-t border-black/10 bg-white"
                >
                  <p className="px-4 py-3 text-sm font-semibold text-black/75">{row.dimension}</p>
                  <p className="px-4 py-3 text-sm text-black/55">{row.legacy}</p>
                  <p className="px-4 py-3 text-sm font-semibold text-black">{row.enai}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
