import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Calendar, MapPin, Users, TrendingUp, Zap, Globe, ArrowRight, Building2, Target, ChartBar, CheckCircle2, DollarSign, Clock, Bot, Shield, Rocket, LineChart, Award, BrainCircuit, Briefcase, BadgeCheck, Lock, Database, Eye, Layers, Mail, Phone, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
    title: "Web Summit Qatar 2026 | ENAI - Meet Us in Doha",
    description: "Meet the ENAI team at Web Summit Qatar 2026 in Doha, February 1-4. ENAI is the autonomous revenue platform that transforms how enterprises generate pipeline. Save $300K-$500K annually.",
    keywords: "Web Summit Qatar 2026, ENAI, autonomous revenue, AI sales platform, enterprise AI, Doha conference, investor meeting, autonomous revenue execution",
    openGraph: {
        title: "Meet ENAI at Web Summit Qatar 2026 | Doha",
        description: "Schedule an exclusive meeting with ENAI leadership at Web Summit Qatar 2026. Discover the autonomous revenue platform transforming enterprise sales.",
        type: "website",
    },
};

// Web Summit Qatar meeting booking link
const WEB_SUMMIT_BOOKING_LINK = "https://app.cal.eu/nikhil/30min";

const eventStats = [
    { value: "30,000+", label: "Global Attendees", icon: Users },
    { value: "Feb 1-4", label: "2026", icon: Calendar },
    { value: "Wednesday, Feb 4", label: "Exhibition Date", icon: Rocket },
    { value: "DECC", label: "Doha, Qatar", icon: MapPin },
];

// From pitch deck: Market Opportunity
const marketOpportunity = [
    { stat: "$4.1B", label: "AI sales automation (2025)" },
    { stat: "$15B", label: "Projected market by 2030" },
    { stat: "72%", label: "Time lost to non-selling tasks" },
    { stat: "28%", label: "Time reps actually spend selling" },
];

// From pitch deck: The Problem
const problemStats = [
    { stat: "72%", description: "Of sales rep time is lost to account research, admin tasks, and manual outreach" },
    { stat: "28%", description: "Time sales reps actually spend selling" },
    { stat: "5 tools", description: "Average number of GTM tools needed in current stacks" },
    { stat: "$300K+", description: "Annual cost savings per enterprise deployment" },
];

// From pitch deck: The Solution/Product
const platformCapabilities = [
    {
        icon: Target,
        name: "Account Research",
        capability: "Autonomously researches accounts, identifies buying intent signals, and finds decision-makers across your target market.",
    },
    {
        icon: Bot,
        name: "Multi-Channel Outreach",
        capability: "Executes personalized outreach across Email, Social, and Voice channels. No generic messaging. Real personalization at scale.",
    },
    {
        icon: Zap,
        name: "Replaces Your Stack",
        capability: "One platform replaces ZoomInfo, Apollo (Intelligence), Clay (Orchestration), and Outreach/Salesloft (Engagement).",
    },
];

// From pitch deck: Platform Impact
const platformImpact = [
    { value: "40-60%", label: "Reduction in research time" },
    { value: "20-35%", label: "Increase in meeting conversion" },
    { value: "25-40%", label: "Faster rep onboarding" },
    { value: "$300K-$500K", label: "Average annual savings" },
];

// From pitch deck: Customer results
const customerResults = [
    {
        company: "Series B SaaS Company",
        industry: "Enterprise Software",
        result: "Automated entire outbound workflow with ENAI",
        metric: "$420K annual savings",
    },
    {
        company: "Global Logistics Provider",
        industry: "Supply Chain",
        result: "40% reduction in account research time",
        metric: "35% more meetings booked",
    },
    {
        company: "FinTech Scale-up",
        industry: "Financial Services",
        result: "Consolidated 5 tools into one platform",
        metric: "25% faster new rep onboarding",
    },
];

// From pitch deck: Team Information
const teamMembers = [
    {
        name: "Nikhil Nehra",
        role: "Founder and CTO",
        background: "Founder and CTO of ENAI, leading the technical architecture and development of the platform's autonomous revenue engine. With expertise in scalable distributed systems, he oversees the engineering of ENAI's core infrastructure. Holds a Master’s degree from Brunel University London.",
        email: "Nikhil@enai.ai",
    },
    {
        name: "Zeeshan Idrees",
        role: "Co-founder, Sales and Strategy",
        background: "Seasoned revenue leader with 20+ years scaling global B2B organizations. Architect of high-performance sales motions at Salesforce and Deloitte. Driving the ENAI mission to redefine enterprise growth.",
        email: "Zeeshan@enai.ai",
    },
    {
        name: "Ken Konsein",
        role: "Strategic Advisor",
        background: "Distinguished global business executive with 30+ years leading multi-billion dollar divisions. Deep expertise in digital transformation from leadership tenures at AWS, Cognizant, and HCL.",
        email: "",
    },
];

// Real technical moat from IP Investor Brief
const technicalMoat = [
    {
        icon: Shield,
        title: "Autonomy Control Plane",
        description: "The defensible layer is not the LLM. It is the governance system that wraps it. Single-choke-point egress, mandatory PII scrubbing, timeout enforcement, and append-only audit trails.",
    },
    {
        icon: Eye,
        title: "Progressive Trust and Authority",
        description: "Shadow mode first. Authority after verified outcomes. The system learns from results and earns autonomy over time. Requires durable ledgers, outcome verification, and calibration.",
    },
    {
        icon: Lock,
        title: "Non-Bypassable Outbound Safety",
        description: "Send authority gates with suppression controls, deliverability constraints, and permission checks. Enterprise safety requires idempotency and audit-grade logging.",
    },
    {
        icon: Database,
        title: "Database-Enforced Tenant Isolation",
        description: "Postgres Row Level Security with fail-closed defaults. RLS-by-construction removes an entire class of cross-tenant security bugs.",
    },
];

// From pitch deck: Roadmap/Traction
const roadmap = [
    {
        year: "Year 2 (Now)",
        milestones: ["Soft launch in UK and USA", "Expanding product ecosystem", "Preparing for Series A"],
    },
    {
        year: "Year 3",
        milestones: ["Full launch: UK, USA, Europe, GCC", "500+ paying clients", "Open API access"],
    },
    {
        year: "Vision",
        milestones: ["$100M ARR platform", "Category leader in Autonomous Revenue"],
    },
];

const whyNow = [
    {
        icon: BrainCircuit,
        title: "Agentic AI Inflection",
        detail: "LLMs can now reason, plan, and execute. We are building the operating system for autonomous revenue.",
    },
    {
        icon: DollarSign,
        title: "Massive Cost Pressure",
        detail: "Companies are cutting sales headcount while revenue targets stay flat. They need a platform that scales without the burn.",
    },
    {
        icon: Globe,
        title: "MENA Digital Transformation",
        detail: "Qatar Vision 2030 and Saudi 2030 are driving massive enterprise tech adoption. First-mover advantage in GCC.",
    },
    {
        icon: Rocket,
        title: "Category Creation",
        detail: "Autonomous revenue is the next enterprise software category. First movers will define it. We are building the category leader.",
    },
];

const notableSpeakers = [
    { name: "Cliff Obrecht", title: "Co-founder and COO, Canva" },
    { name: "Eduardo Saverin", title: "Co-founder, Facebook and B Capital" },
    { name: "Mati Staniszewski", title: "Co-founder, ElevenLabs" },
    { name: "Colin Kaepernick", title: "Founder and CEO, Lumi" },
    { name: "Cristobal Valenzuela", title: "Founder and CEO, Runway" },
    { name: "Yanis Varoufakis", title: "Economist and Author" },
];

export default function QatarSummit2026Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Event",
                        "name": "ENAI at Web Summit Qatar 2026",
                        "description": "Meet the ENAI team at Web Summit Qatar 2026 to discover the future of autonomous revenue execution.",
                        "startDate": "2026-02-01",
                        "endDate": "2026-02-04",
                        "location": {
                            "@type": "Place",
                            "name": "Doha Exhibition and Convention Center (DECC)",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Doha",
                                "addressCountry": "QA"
                            }
                        },
                    })
                }}
            />
            <Navigation />
            <main className="bg-white">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A3A] via-[#2A4A4A] to-[#0D1F1F]" />
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-amber-500/20 to-transparent rounded-full blur-3xl" />
                        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full blur-3xl" />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Recognition Badge */}
                            <div className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-amber-300/90 px-5 py-2.5 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6 backdrop-blur-sm">
                                <Award className="w-4 h-4" />
                                UK&apos;s Most Innovative AI Start-up
                            </div>

                            <h1 className="h1 text-white mb-4">
                                The Autonomous
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200">
                                    Revenue Platform
                                </span>
                            </h1>

                            <p className="text-body-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-4">
                                ENAI autonomously researches accounts, identifies intent, finds decision-makers, and executes multi-channel outreach. One platform. End-to-end revenue execution. $300K to $500K in annual savings.
                            </p>

                            <p className="text-body text-amber-300/90 font-medium mb-8">
                                We are building the operating system for autonomous revenue. Meet us at Web Summit Qatar.
                            </p>

                            {/* Event Badge */}
                            <div className="flex flex-col items-center gap-2 mb-10 text-white/60">
                                <div className="inline-flex items-center gap-2 text-body-sm">
                                    <Calendar className="w-4 h-4" />
                                    February 1-4, 2026 at DECC, Doha
                                </div>
                                <div className="inline-flex items-center gap-2 text-amber-300 font-medium">
                                    <Rocket className="w-4 h-4" />
                                    Meet us at the ENAI Booth on Wed, Feb 4
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href={WEB_SUMMIT_BOOKING_LINK}
                                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black px-8 py-4 text-sm font-semibold hover:from-amber-300 hover:to-amber-400 transition-all duration-300 rounded-lg shadow-lg shadow-amber-500/25"
                                >
                                    Book a Meeting
                                    <Calendar className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="mailto:Nikhil@enai.ai?subject=ENAI Series A - Investor Deck Request&cc=Zeeshan@enai.ai"
                                    className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-sm font-medium hover:bg-white/10 transition-all duration-300 rounded-lg"
                                >
                                    Request Investor Deck
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Event Context Bar */}
                <section className="py-8 bg-[#F5F1ED] border-y border-black/5">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                            {eventStats.map((stat, index) => {
                                const StatIcon = stat.icon;
                                return (
                                    <div key={index} className="flex items-center gap-3">
                                        <StatIcon className="w-5 h-5 text-[#1E3A3A]/60" />
                                        <div>
                                            <span className="font-bold text-[#1E3A3A]">{stat.value}</span>
                                            <span className="text-black/50 ml-1">{stat.label}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* THE PROBLEM: Outbound is Broken */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-red-600/80 px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-6">
                                    The Problem
                                </div>
                                <h2 className="h2 text-black mb-6">
                                    Outbound is Broken
                                </h2>
                                <p className="text-body-lg text-black/60 leading-relaxed mb-8">
                                    Sales reps only spend 28% of their time actually selling. The rest is lost to account research, admin tasks, and manual outreach. Generic messaging results in low engagement. Scaling pipeline requires expensive headcount increases.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "72% of rep time lost to non-selling activities",
                                        "Account research takes hours per prospect",
                                        "Generic outreach gets ignored",
                                        "Scaling means hiring more expensive headcount",
                                        "Current stacks require 5+ different tools",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-red-600 text-xs font-bold">✕</span>
                                            </div>
                                            <span className="text-body text-black/70">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {problemStats.map((stat, index) => (
                                    <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl text-center">
                                        <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">{stat.stat}</div>
                                        <div className="text-body-sm text-black/60">{stat.description}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* THE SOLUTION: Meet ENAI */}
                <section className="py-20 md:py-28 bg-[#1E3A3A]">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-amber-300/90 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                                <Bot className="w-4 h-4" />
                                The Solution
                            </div>
                            <h2 className="h2 text-white mb-6">
                                End-to-End Revenue Execution
                            </h2>
                            <p className="text-body-lg text-white/70 leading-relaxed">
                                One platform for the entire revenue workflow. ENAI autonomously researches accounts, identifies intent, finds decision-makers, and executes multi-channel outreach across Email, Social, and Voice.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {platformCapabilities.map((agent, index) => {
                                const AgentIcon = agent.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl"
                                    >
                                        <div className="w-14 h-14 mb-6 flex items-center justify-center bg-gradient-to-br from-amber-400/20 to-amber-500/10 rounded-xl">
                                            <AgentIcon className="w-7 h-7 text-amber-300" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-4">{agent.name}</h3>
                                        <p className="text-body-sm text-white/60 leading-relaxed">{agent.capability}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Multi-channel icons */}
                        <div className="flex justify-center gap-8 pt-8 border-t border-white/10">
                            <div className="flex items-center gap-2 text-white/60">
                                <Mail className="w-5 h-5 text-amber-300" />
                                <span className="text-body-sm">Email</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/60">
                                <MessageSquare className="w-5 h-5 text-amber-300" />
                                <span className="text-body-sm">Social</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/60">
                                <Phone className="w-5 h-5 text-amber-300" />
                                <span className="text-body-sm">Voice</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Platform Impact */}
                <section className="py-16 bg-gradient-to-br from-[#0D1F1F] to-[#1E3A3A]">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {platformImpact.map((stat, index) => (
                                <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                                    <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-white/50">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Market Opportunity */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-[#1E3A3A]/70 px-4 py-2 bg-[#1E3A3A]/5 border border-[#1E3A3A]/10 rounded-full mb-6">
                                <ChartBar className="w-4 h-4" />
                                Market Opportunity
                            </div>
                            <h2 className="h2 text-black mb-6">
                                $15 Billion Market by 2030
                            </h2>
                            <p className="text-body-lg text-black/60 leading-relaxed">
                                The AI sales automation market is projected to grow from $4.1B in 2025 to $15B by 2030. We are building the category leader.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {marketOpportunity.map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-[#1E3A3A] to-[#2A4A4A] p-6 rounded-xl text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-amber-300 mb-2">{item.stat}</div>
                                    <div className="text-body-sm text-white/70">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Customer Results */}
                <section className="py-20 md:py-28 bg-[#F5F1ED]">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-[#1E3A3A]/70 px-4 py-2 bg-[#1E3A3A]/5 border border-[#1E3A3A]/10 rounded-full mb-6">
                                <Award className="w-4 h-4" />
                                Customer Results
                            </div>
                            <h2 className="h2 text-black mb-6">
                                Real Outcomes From Real Deployments
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {customerResults.map((customer, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-xl shadow-sm"
                                >
                                    <div className="flex items-center gap-2 text-caption uppercase tracking-wider text-[#1E3A3A]/70 mb-4">
                                        <Building2 className="w-4 h-4" />
                                        {customer.industry}
                                    </div>
                                    <h3 className="text-lg font-medium text-black mb-2">{customer.company}</h3>
                                    <p className="text-body text-black/60 mb-4">{customer.result}</p>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 border border-emerald-200 rounded-full">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        <span className="text-sm font-medium text-emerald-700">{customer.metric}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* THE MOAT: Technical Defensibility */}
                <section className="py-20 md:py-28 bg-gradient-to-br from-[#0D1F1F] to-[#1E3A3A]">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-amber-300/90 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                                <Layers className="w-4 h-4" />
                                The Moat
                            </div>
                            <h2 className="h2 text-white mb-6">
                                Autonomy Control Plane
                            </h2>
                            <p className="text-body-lg text-white/70 leading-relaxed">
                                Our moat is not &quot;using an LLM.&quot; The defensible layer is the governance architecture that makes AI safe for enterprise deployment.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {technicalMoat.map((item, index) => {
                                const ItemIcon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl"
                                    >
                                        <div className="flex items-start gap-5">
                                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-amber-400/20 to-amber-500/10 rounded-lg">
                                                <ItemIcon className="w-6 h-6 text-amber-300" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                                                <p className="text-body-sm text-white/60 leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Roadmap */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-[#1E3A3A]/70 px-4 py-2 bg-[#1E3A3A]/5 border border-[#1E3A3A]/10 rounded-full mb-6">
                                <TrendingUp className="w-4 h-4" />
                                Roadmap
                            </div>
                            <h2 className="h2 text-black mb-6">
                                Path to $100M ARR
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {roadmap.map((phase, index) => (
                                <div key={index} className="bg-[#F5F1ED] p-8 rounded-xl">
                                    <h3 className="text-lg font-semibold text-[#1E3A3A] mb-4">{phase.year}</h3>
                                    <ul className="space-y-3">
                                        {phase.milestones.map((milestone, mIndex) => (
                                            <li key={mIndex} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-body-sm text-black/70">{milestone}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="py-20 md:py-28 bg-[#1E3A3A]">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-amber-300/90 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                                <Briefcase className="w-4 h-4" />
                                The Team
                            </div>
                            <h2 className="h2 text-white mb-6">
                                Built by Enterprise Veterans
                            </h2>
                            <p className="text-body-lg text-white/70 leading-relaxed">
                                Leadership from Salesforce, Deloitte, AWS, Cognizant, and HCL. We know what it takes to win in enterprise.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl text-center"
                                >
                                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400/30 to-amber-500/20 rounded-full flex items-center justify-center">
                                        <span className="text-2xl font-bold text-amber-300">{member.name.split(' ').map(n => n[0]).join('')}</span>
                                    </div>
                                    <h3 className="text-lg font-medium text-white mb-1">{member.name}</h3>
                                    <p className="text-sm text-amber-300/80 mb-4">{member.role}</p>
                                    <p className="text-body-sm text-white/60 leading-relaxed">{member.background}</p>
                                    {member.email && (
                                        <Link href={`mailto:${member.email}`} className="inline-block mt-4 text-sm text-amber-300 hover:text-amber-200 transition-colors">
                                            {member.email}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Now */}
                <section className="py-20 md:py-28 bg-[#F5F1ED]">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-[#1E3A3A]/70 px-4 py-2 bg-[#1E3A3A]/5 border border-[#1E3A3A]/10 rounded-full mb-6">
                                <Rocket className="w-4 h-4" />
                                Timing
                            </div>
                            <h2 className="h2 text-black mb-6">
                                Why This Moment Matters
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {whyNow.map((item, index) => {
                                const ItemIcon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white p-8 rounded-xl shadow-sm"
                                    >
                                        <div className="flex items-start gap-5">
                                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#1E3A3A] rounded-lg">
                                                <ItemIcon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium text-black mb-2">{item.title}</h3>
                                                <p className="text-body-sm text-black/60 leading-relaxed">{item.detail}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Notable Speakers at Event */}
                <section className="py-12 bg-white border-t border-black/5">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="text-center mb-8">
                            <p className="text-caption uppercase tracking-wider text-black/50">Also at Web Summit Qatar 2026</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            {notableSpeakers.map((speaker, index) => (
                                <div key={index} className="bg-[#F5F1ED] px-4 py-2 rounded-full text-body-sm">
                                    <span className="font-medium text-black">{speaker.name}</span>
                                    <span className="text-black/40 ml-2">{speaker.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 md:py-28 bg-gradient-to-br from-[#0D1F1F] to-[#1E3A3A]">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="h2 text-white mb-6">
                                Series A: Let&apos;s Talk
                            </h2>
                            <p className="text-body-lg text-white/70 leading-relaxed mb-4">
                                We are preparing for Series A and taking limited meetings at Web Summit Qatar. If you are an investor interested in autonomous revenue and enterprise AI, we want to meet you.
                            </p>
                            <p className="text-body text-amber-300/90 font-medium mb-10">
                                February 1-4, 2026 at DECC, Doha. Headquartered in London, UK.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href={WEB_SUMMIT_BOOKING_LINK}
                                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black px-8 py-4 text-sm font-semibold hover:from-amber-300 hover:to-amber-400 transition-all duration-300 rounded-lg shadow-lg shadow-amber-500/25"
                                >
                                    Book a Meeting
                                    <Calendar className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="mailto:Nikhil@enai.ai?subject=ENAI Series A - Investor Meeting at Web Summit Qatar&cc=Zeeshan@enai.ai"
                                    className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-sm font-medium hover:bg-white/10 transition-all duration-300 rounded-lg"
                                >
                                    Email the Founders
                                </Link>
                            </div>

                            <div className="mt-10 pt-8 border-t border-white/10">
                                <p className="text-body-sm text-white/50">
                                    Contact: Nikhil@enai.ai | Zeeshan@enai.ai | enai.ai
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
