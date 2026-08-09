export type IndustryDefinition = {
  name: string;
  slug: string;
  shortName: string;
  proof: "Demo available" | "Workflow model";
  image: string;
  headline: string;
  summary: string;
  signals: string[];
  stakeholders: string[];
  controls: string[];
  handoff: string;
};

export const industries: IndustryDefinition[] = [
  {
    name: "Logistics and transport",
    shortName: "Logistics",
    proof: "Demo available",
    slug: "logistics-transport",
    image: "/enai-blog-logistics-transport.jpg",
    headline: "Turn network change into a governed route into the account.",
    summary:
      "ENAI connects expansion, lane, capacity, facility, and leadership signals to the operations, commercial, finance, and procurement stakeholders responsible for the next decision.",
    signals: ["Network expansion", "Lane and capacity pressure", "Facility openings", "Leadership change"],
    stakeholders: ["Operations", "Commercial", "Finance", "Procurement"],
    controls: ["Approved operational claims", "Account exclusions", "Source-backed context", "Seller escalation"],
    handoff: "A seller-ready account brief with the signal, buying route, permitted claims, source context, and recommended next action.",
  },
  {
    name: "Healthcare",
    shortName: "Healthcare",
    proof: "Demo available",
    slug: "healthcare",
    image: "/enai-blog-healthcare-revenue.jpg",
    headline: "Coordinate commercial work where language and authority matter.",
    summary:
      "ENAI researches provider priorities and service-line change, maps clinical and commercial stakeholders, and prepares outreach inside approved terminology and review boundaries.",
    signals: ["Service-line growth", "Provider expansion", "Operational change", "Leadership appointments"],
    stakeholders: ["Clinical leadership", "Operations", "Finance", "Commercial teams"],
    controls: ["Approved terminology", "Restricted claims", "Human review", "Traceable source context"],
    handoff: "A reviewed account brief that shows the operational reason to engage, the stakeholder route, and the evidence behind the recommendation.",
  },
  {
    name: "Wholesale and B2B retail",
    shortName: "Wholesale",
    proof: "Demo available",
    slug: "wholesale-b2b-retail",
    image: "/enai-blog-wholesale-retail.jpg",
    headline: "Move from channel demand to the buyer responsible for acting.",
    summary:
      "ENAI connects distributor, assortment, channel, and regional demand signals to category, commercial, operations, and finance decision-makers.",
    signals: ["Distributor change", "Assortment expansion", "Regional demand", "Channel performance"],
    stakeholders: ["Category buyers", "Commercial", "Operations", "Finance"],
    controls: ["Brand voice", "Account-level rules", "Pacing limits", "Evidence requirements"],
    handoff: "A buyer-ready execution plan with channel context, stakeholder ownership, approved outreach logic, and a clear seller handoff.",
  },
  {
    name: "Industrials",
    shortName: "Industrials",
    slug: "industrials",
    proof: "Workflow model",
    image: "/enai-blog-industrials.jpg",
    headline: "Map the technical and commercial route through a complex account.",
    summary:
      "ENAI connects facility, capital investment, specification, procurement, and leadership signals to the engineering, operations, commercial, and finance stakeholders behind an industrial purchase.",
    signals: ["Facility expansion", "Capital investment", "RFP and RFQ activity", "Leadership change"],
    stakeholders: ["Engineering", "Operations", "Procurement", "Finance"],
    controls: ["Approved technical claims", "Source requirements", "Account exclusions", "Human review"],
    handoff: "A technical and commercial account brief with the buying route, evidence, approved claims, and seller-owned next action.",
  },
  {
    name: "Professional services",
    shortName: "Professional services",
    slug: "professional-services",
    proof: "Workflow model",
    image: "/enai-blog-professional-services.jpg",
    headline: "Extend business development without flattening the relationship.",
    summary:
      "ENAI helps advisory, consulting, legal, and accounting teams connect market change and relationship context to the partner, practice, and client stakeholders responsible for the opportunity.",
    signals: ["Leadership change", "Regulatory change", "Market expansion", "Relationship activity"],
    stakeholders: ["Partners", "Practice leaders", "Client executives", "Procurement"],
    controls: ["Partner-approved voice", "Relationship exclusions", "Claim review", "Named human owner"],
    handoff: "A relationship-aware brief that preserves the reason to engage, existing context, permitted message, and responsible partner.",
  },
  {
    name: "Private equity",
    shortName: "Private equity",
    slug: "private-equity",
    proof: "Workflow model",
    image: "/enai-blog-private-equity.jpg",
    headline: "Turn an investment thesis into a traceable sourcing workflow.",
    summary:
      "ENAI structures target research, thesis fit, founder and operator mapping, approved outreach, and internal handoff for investment teams that need evidence rather than list volume.",
    signals: ["Ownership change", "Sector consolidation", "Founder transition", "Operational expansion"],
    stakeholders: ["Founders", "Operators", "Investment team", "Operating partners"],
    controls: ["Thesis criteria", "Excluded targets", "Source traceability", "Partner approval"],
    handoff: "A thesis-linked target brief with ownership context, stakeholder map, source evidence, and partner-controlled next step.",
  },
  {
    name: "Financial services",
    shortName: "Financial services",
    slug: "financial-services",
    proof: "Workflow model",
    image: "/enai-blog-financial-services.jpg",
    headline: "Prepare commercial action inside stricter review boundaries.",
    summary:
      "ENAI connects market, firm, portfolio, and leadership signals to governed research and outreach workflows where claims, approvals, auditability, and escalation require explicit ownership.",
    signals: ["Portfolio change", "Regulatory development", "Leadership appointment", "Business expansion"],
    stakeholders: ["Business leadership", "Risk", "Compliance", "Commercial teams"],
    controls: ["Approved language", "Mandatory review", "Audit context", "Restricted segments"],
    handoff: "A review-ready account brief that shows the signal, stakeholder route, permitted language, evidence, and human approver.",
  },
  {
    name: "Technology and SaaS",
    shortName: "Technology",
    slug: "technology-saas",
    proof: "Workflow model",
    image: "/enai-blog-software.jpg",
    headline: "Connect product and account signals to the people who own expansion.",
    summary:
      "ENAI brings product activity, renewal timing, technology change, hiring, and account research into a single route across users, technical evaluators, finance, and executive sponsors.",
    signals: ["Product adoption", "Renewal timing", "Technology change", "Team expansion"],
    stakeholders: ["Product users", "Technical evaluators", "Finance", "Executive sponsors"],
    controls: ["Usage-data boundaries", "Approved value claims", "Account ownership", "Seller escalation"],
    handoff: "An expansion or acquisition brief with product context, the buying route, permitted value claims, and the seller responsible for the next step.",
  },
  {
    name: "Recruitment and staffing",
    shortName: "Recruitment",
    slug: "recruitment-staffing",
    proof: "Workflow model",
    image: "/enai-blog-ai-native.jpg",
    headline: "Turn workforce change into coordinated candidate and client development.",
    summary:
      "ENAI connects hiring velocity, role demand, leadership moves, funding, and location change to the talent, department, procurement, and commercial stakeholders involved in a placement decision.",
    signals: ["Hiring velocity", "New role clusters", "Funding and expansion", "Leadership moves"],
    stakeholders: ["Talent leaders", "Hiring managers", "Procurement", "Agency partners"],
    controls: ["Candidate consent boundaries", "Client ownership", "Approved role claims", "Recruiter handoff"],
    handoff: "A role-specific client brief with demand evidence, decision ownership, relationship context, and a recruiter-controlled next action.",
  },
  {
    name: "Energy and infrastructure",
    shortName: "Energy",
    slug: "energy-infrastructure",
    proof: "Workflow model",
    image: "/enai-blog-hardware.jpg",
    headline: "Follow projects, assets, and policy change into the account.",
    summary:
      "ENAI connects capital programmes, asset development, permits, tenders, supply constraints, and leadership change to the technical, commercial, finance, and public-sector stakeholders behind the project.",
    signals: ["Capital programmes", "Permits and tenders", "Asset expansion", "Supply constraints"],
    stakeholders: ["Project leadership", "Engineering", "Commercial", "Public-sector stakeholders"],
    controls: ["Tender restrictions", "Approved technical claims", "Jurisdiction rules", "Named account owner"],
    handoff: "A project-linked account brief with source evidence, stakeholder roles, procurement context, approved claims, and the responsible commercial owner.",
  },
  {
    name: "Telecommunications",
    shortName: "Telecom",
    slug: "telecommunications",
    proof: "Workflow model",
    image: "/enai-blog-sovereign-ai.jpg",
    headline: "Map network investment to the technical and commercial buying route.",
    summary:
      "ENAI connects network rollout, spectrum, infrastructure partnerships, service launches, procurement cycles, and executive change to the teams responsible for architecture, operations, finance, and commercial growth.",
    signals: ["Network rollout", "Service launches", "Infrastructure partnerships", "Procurement cycles"],
    stakeholders: ["Network architecture", "Operations", "Procurement", "Commercial leadership"],
    controls: ["Technical evidence", "Territory ownership", "Partner exclusions", "Human approval"],
    handoff: "A network-specific opportunity brief with the investment signal, architecture context, buying committee, permitted engagement, and seller handoff.",
  },
];

export const getIndustry = (slug: string) => industries.find((industry) => industry.slug === slug);
