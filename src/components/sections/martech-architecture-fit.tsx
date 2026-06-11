const stackRows = [
  {
    category: "Analytics & Forecasting",
    entries: [
      { tool: "Clari", tag: "Adds action", detail: "Turns forecasts into next steps" },
      { tool: "Gong", tag: "Uses context", detail: "Learns from call and deal signals" },
    ],
  },
  {
    category: "CRM & Collaboration",
    entries: [
      { tool: "HubSpot", tag: "Works inside", detail: "Updates contacts, deals, and tasks" },
      { tool: "Slack", tag: "Alerts team", detail: "Notifies humans when judgment is needed" },
    ],
  },
  {
    category: "Outbound Execution",
    entries: [
      { tool: "Salesloft / Outreach", tag: "Automates work", detail: "Runs sequences with sales context" },
      { tool: "Instantly / Lemlist", tag: "Personalizes", detail: "Adds timing, fit, and buyer context" },
    ],
  },
  {
    category: "Enrichment & Workflows",
    entries: [
      { tool: "Clay", tag: "Uses context", detail: "Turns enrichment into action" },
      { tool: "Apollo", tag: "Finds buyers", detail: "Adds contacts to qualified workflows" },
    ],
  },
  {
    category: "Data & Intelligence",
    entries: [
      { tool: "ZoomInfo", tag: "Finds buyers", detail: "Adds contact and company coverage" },
      { tool: "Bombora / 6sense", tag: "Uses intent", detail: "Acts when accounts show demand" },
    ],
  },
];

const differentiationRows = [
  {
    dimension: "Built for",
    legacy: "Enterprise teams with RevOps",
    enai: "Lean teams without RevOps headcount",
  },
  {
    dimension: "UX model",
    legacy: "Dashboards plus manual work",
    enai: "Plain-language requests and done-for-you actions",
  },
  {
    dimension: "Setup time",
    legacy: "Weeks to months",
    enai: "Hours",
  },
  {
    dimension: "Signal model",
    legacy: "Pipeline-centric (CRM data only)",
    enai: "Buyer-centric: inbound, outbound, intent, and conversations",
  },
  {
    dimension: "Buyer experience",
    legacy: "More reporting for internal teams",
    enai: "Faster, more relevant follow-up for buyers",
  },
  {
    dimension: "RevOps required",
    legacy: "Yes - dedicated analyst to interpret",
    enai: "No - ENAI handles the repetitive work",
  },
  {
    dimension: "Execution model",
    legacy: "Insights that someone must act on",
    enai: "Actions completed with human approval where needed",
  },
];

const badgeStyles: Record<string, string> = {
  "Works inside": "bg-black/[0.04] text-black/70 border-black/10",
  "Uses context": "bg-black/[0.04] text-black/70 border-black/10",
  "Alerts team": "bg-black/[0.04] text-black/70 border-black/10",
  "Adds action": "bg-black/[0.08] text-black/85 border-black/15",
  "Automates work": "bg-black/[0.08] text-black/85 border-black/15",
  Personalizes: "bg-white text-black/65 border-black/10",
  "Finds buyers": "bg-white text-black/65 border-black/10",
  "Uses intent": "bg-white text-black/65 border-black/10",
};

export default function MartechArchitectureFit() {
  return (
    <section className="bg-[#E8DDD4] pb-24 md:pb-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-[#F5F1ED] p-8 md:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
          <div className="max-w-4xl">
            <div className="inline-flex items-center font-mono text-xs tracking-[0.2em] uppercase text-black/45 font-bold px-4 py-2 border border-black/10 rounded-full bg-white/65">
              Fits your current workflow
            </div>
            <h3 className="mt-5 text-[30px] md:text-[44px] heading-strong text-black leading-tight text-balance">
              Keep your tools. Give them an AI team that acts.
            </h3>
            <p className="mt-4 text-base md:text-lg text-black/65 leading-relaxed">
              ENAI plugs into the tools revenue teams already use, then turns signals,
              contacts, campaign activity, and conversations into booked meetings and next steps.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-black text-xl md:text-2xl heading-strong">
                  From signal to meeting, without tool sprawl
                </p>
                <p className="mt-1 text-sm md:text-base text-black/60">
                  Your CRM, data tools, and outreach channels stay in place. ENAI does the work between them.
                </p>
              </div>
              <p className="font-mono text-xs tracking-[0.18em] uppercase text-black/40 font-semibold">
                Existing stack · Better outcomes
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {stackRows.map((row) => (
                <article
                  key={row.category}
                  className="rounded-2xl border border-black/10 bg-[#F8F5F2] p-5 md:p-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[230px_1fr] gap-4">
                    <h4 className="font-mono text-[11px] md:text-xs uppercase tracking-[0.16em] text-black/50 font-semibold">
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
                Works inside - ENAI updates the tools your team already uses
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-black/[0.08] px-3 py-1.5 text-black/85">
                Adds action - ENAI completes the steps that normally sit in dashboards
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-black/65">
                Uses context - ENAI personalizes based on buyer, account, and timing
              </span>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-black/10 bg-white/90 p-6 md:p-8">
            <div className="max-w-4xl">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-black/45 font-semibold">
                Why teams choose ENAI
              </p>
              <h4 className="mt-3 font-display text-[28px] md:text-[36px] heading-strong text-black leading-tight">
                More meetings without more manual revenue ops
              </h4>
              <p className="mt-3 text-sm md:text-base text-black/65 leading-relaxed">
                Most revenue tools create more work for a person to interpret. ENAI is designed
                for lean teams that need the work done: find the buyer, send the follow-up,
                qualify the reply, and book the meeting.
              </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
              <div className="hidden md:grid grid-cols-3 bg-black text-white">
                <p className="px-4 py-3 font-mono text-[11px] md:text-xs uppercase tracking-[0.14em] text-white/60 font-semibold">
                  Dimension
                </p>
                <p className="px-4 py-3 text-[11px] md:text-xs text-white/50 font-semibold">
                  Traditional revenue tools
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
                  <p className="px-4 pt-3 md:py-3 text-sm font-semibold text-black/75">{row.dimension}</p>
                  <p className="px-4 py-1.5 md:py-3 text-sm text-black/55">
                    <span className="md:hidden block font-mono text-[10px] uppercase tracking-[0.14em] text-black/40 font-semibold mb-0.5">Traditional revenue tools</span>
                    {row.legacy}
                  </p>
                  <p className="px-4 pb-3 pt-1.5 md:py-3 text-sm font-semibold text-black">
                    <span className="md:hidden block font-mono text-[10px] uppercase tracking-[0.14em] text-black/40 font-semibold mb-0.5">ENAI</span>
                    {row.enai}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
