import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Calendar, MapPin, Users, TrendingUp, Zap, ArrowRight, Target, CheckCircle2, DollarSign, Clock, Bot, Rocket, LineChart, Award, Mail, Layers, Search, MessageSquare, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "Web Summit Qatar 2026 | ENAI - Autonomous Revenue Agents",
    description: "ENAI deploys autonomous agents to run your revenue engine end to end. From research to booked meetings, without the headcount. See it live Feb 4.",
    keywords: "Web Summit Qatar 2026, ENAI demo, AI sales platform, enterprise sales automation, Doha conference, autonomous revenue agents",
    openGraph: {
        title: "Autonomous Revenue Agents | ENAI at Web Summit Qatar",
        description: "ENAI deploys autonomous agents to run your revenue engine end to end. See it live at our booth Feb 4, DECC Doha.",
        type: "website",
    },
};

// Cal.eu booking link
const DEMO_BOOKING_LINK = "https://app.cal.eu/nikhil/30min";

// Event stats
const eventStats = [
    { value: "30,000+", label: "Global Attendees", icon: Users },
    { value: "Feb 1-4", label: "2026", icon: Calendar },
    { value: "Wednesday, Feb 4", label: "Our Booth Day", icon: Rocket },
    { value: "DECC", label: "Doha, Qatar", icon: MapPin },
];

// Problem statistics
const problemStats = [
    { stat: "72%", description: "Of sales rep time is lost to account research, admin tasks, and manual outreach" },
    { stat: "28%", description: "Time sales reps actually spend selling" },
    { stat: "5+ tools", description: "Average number of GTM tools in the modern sales stack" },
    { stat: "$300K+", description: "Annual cost of manual prospecting headcount" },
];

// Platform capabilities - Rox style
const platformCapabilities = [
    {
        icon: Search,
        name: "Sales Intelligence",
        capability: "Surface the right accounts at the right time. ENAI continuously monitors intent signals, news, and org changes to give your reps real-time research insights before every conversation.",
    },
    {
        icon: MessageSquare,
        name: "Outbound Execution",
        capability: "Launch personalized campaigns in minutes, not weeks. ENAI packages strategy into repeatable plays and executes multi-channel outreach at scale—email, LinkedIn, and phone.",
    },
    {
        icon: Layers,
        name: "Stack Consolidation",
        capability: "Replace the patchwork of point solutions. ENAI unifies ZoomInfo, Apollo, Clay, Outreach, and Salesloft into a single platform with one login and one bill.",
    },
    {
        icon: Bot,
        name: "Meeting Automation",
        capability: "Free your reps to focus on customers instead of manual tasks. ENAI takes care of the busywork behind every deal, from research to follow-ups to calendar booking.",
    },
];

// Quantifiable results
const customerResults = [
    { value: "60%", label: "Less time prospecting", icon: Clock },
    { value: "35%", label: "More meetings booked", icon: TrendingUp },
    { value: "5→1", label: "Tools consolidated", icon: Zap },
    { value: "$400K", label: "Saved in year one", icon: DollarSign },
];

// How it works steps - Rox style
const howItWorks = [
    {
        step: "01",
        title: "Connect",
        description: "Integrate with Salesforce or HubSpot. Define your ideal customer profile and target criteria. That's the only setup.",
    },
    {
        step: "02",
        title: "Deploy",
        description: "ENAI agents continuously surface opportunities, score intent, and build personalized outreach sequences—automatically.",
    },
    {
        step: "03",
        title: "Close",
        description: "Meetings land on your calendar. Pipeline grows. Revenue follows. All without adding headcount.",
    },
];

// Customer testimonials (representative)
const testimonials = [
    {
        quote: "We consolidated 5 GTM tools into ENAI and saved over $400K in the first year.",
        company: "Series B SaaS Company",
        role: "VP of Sales",
    },
    {
        quote: "Our reps went from 40% prospecting time to 15%. Pipeline velocity increased by 50%.",
        company: "Global Logistics Provider",
        role: "Head of Revenue Operations",
    },
];

export default function QatarSummitCustomersPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Event",
                        "name": "ENAI Demo at Web Summit Qatar 2026",
                        "description": "See the ENAI autonomous revenue platform in action at Web Summit Qatar 2026.",
                        "startDate": "2026-02-04",
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
                        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-amber-500/10 to-transparent rounded-full blur-3xl" />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-amber-300/90 px-5 py-2.5 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6 backdrop-blur-sm">
                                <Rocket className="w-4 h-4" />
                                Live at Web Summit Qatar — Booth Feb 4
                            </div>

                            <h1 className="h1 text-white mb-4">
                                Autonomous Revenue Agents
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200">
                                    for the Enterprise
                                </span>
                            </h1>

                            <p className="text-body-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-4">
                                ENAI deploys autonomous agents to run your revenue engine end to end. From research to booked meetings, without the headcount.
                            </p>

                            <p className="text-body text-amber-300/90 font-medium mb-8">
                                See it live. Wednesday, February 4. DECC, Doha.
                            </p>

                            {/* Event Badge */}
                            <div className="flex flex-col items-center gap-2 mb-10 text-white/60">
                                <div className="inline-flex items-center gap-2 text-body-sm">
                                    <Calendar className="w-4 h-4" />
                                    February 1-4, 2026 at DECC, Doha
                                </div>
                                <div className="inline-flex items-center gap-2 text-amber-300 font-medium">
                                    <Rocket className="w-4 h-4" />
                                    ENAI Booth: Wednesday, Feb 4
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href={DEMO_BOOKING_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black px-8 py-4 text-sm font-semibold hover:from-amber-300 hover:to-amber-400 transition-all duration-300 rounded-lg shadow-lg shadow-amber-500/25"
                                >
                                    Get 30 Min with the Founders
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="#how-it-works"
                                    className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-sm font-medium hover:bg-white/10 transition-all duration-300 rounded-lg"
                                >
                                    See It Work
                                    <ArrowRight className="w-4 h-4 ml-2" />
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

                {/* THE PROBLEM */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-red-600/80 px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-6">
                                    The Challenge
                                </div>
                                <h2 className="h2 text-black mb-6">
                                    Sales Productivity
                                </h2>
                                <p className="text-body-lg text-black/60 mb-8">
                                    The barrier to revenue growth isn't your team—it's the manual work consuming their time. Reps spend more time on research and admin than actually selling. ENAI changes that.
                                </p>
                                <ul className="space-y-4 text-black/70">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span>Sales reps spend 72% of their time on research and admin</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span>Generic outreach leads to low engagement and poor conversion</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span>5+ disconnected tools create complexity and data silos</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span>Scaling pipeline requires expensive headcount additions</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {problemStats.map((item, index) => (
                                    <div key={index} className="bg-[#F5F1ED] rounded-xl p-6 border border-black/5">
                                        <div className="text-3xl font-bold text-[#1E3A3A] mb-2">{item.stat}</div>
                                        <p className="text-body-sm text-black/60">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* PLATFORM CAPABILITIES */}
                <section className="py-20 md:py-28 bg-[#1E3A3A]">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-amber-300/80 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                                Pipeline Generation
                            </div>
                            <h2 className="h2 text-white mb-4">
                                Drive Consistent Pipeline Growth
                            </h2>
                            <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
                                ENAI continuously surfaces opportunities, packages strategy into repeatable plays, and helps you launch personalized campaigns in minutes.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {platformCapabilities.map((capability, index) => {
                                const CapIcon = capability.icon;
                                return (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                                        <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                                            <CapIcon className="w-6 h-6 text-amber-300" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">{capability.name}</h3>
                                        <p className="text-body-sm text-white/60">{capability.capability}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* QUANTIFIABLE RESULTS */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-green-600/80 px-4 py-2 bg-green-50 border border-green-100 rounded-full mb-6">
                                The Numbers
                            </div>
                            <h2 className="h2 text-black mb-4">
                                Results You Can Measure
                            </h2>
                            <p className="text-body-lg text-black/60 max-w-2xl mx-auto">
                                These aren't projections. This is what teams are seeing right now.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {customerResults.map((result, index) => {
                                const ResultIcon = result.icon;
                                return (
                                    <div key={index} className="bg-[#F5F1ED] rounded-xl p-8 text-center border border-black/5">
                                        <div className="w-14 h-14 bg-[#1E3A3A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <ResultIcon className="w-7 h-7 text-[#1E3A3A]" />
                                        </div>
                                        <div className="text-3xl font-bold text-[#1E3A3A] mb-2">{result.value}</div>
                                        <p className="text-body-sm text-black/60">{result.label}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section id="how-it-works" className="py-20 md:py-28 bg-[#F5F1ED]">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-[#1E3A3A]/60 px-4 py-2 bg-white border border-black/5 rounded-full mb-6">
                                Dead Simple
                            </div>
                            <h2 className="h2 text-black mb-4">
                                Live in 48 Hours
                            </h2>
                            <p className="text-body-lg text-black/60 max-w-2xl mx-auto">
                                Plug in. Define your ICP. Watch meetings land on the calendar.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {howItWorks.map((step, index) => (
                                <div key={index} className="bg-white rounded-xl p-8 border border-black/5 shadow-sm">
                                    <div className="text-5xl font-bold text-[#1E3A3A]/10 mb-4">{step.step}</div>
                                    <h3 className="text-xl font-semibold text-black mb-3">{step.title}</h3>
                                    <p className="text-body text-black/60">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-amber-600/80 px-4 py-2 bg-amber-50 border border-amber-100 rounded-full mb-6">
                                Proof
                            </div>
                            <h2 className="h2 text-black mb-4">
                                Don't Take Our Word for It
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-[#F5F1ED] rounded-xl p-8 border border-black/5">
                                    <p className="text-body-lg text-black/80 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                                    <div>
                                        <p className="font-semibold text-black">{testimonial.company}</p>
                                        <p className="text-body-sm text-black/50">{testimonial.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* MEET US AT THE BOOTH */}
                <section className="py-20 md:py-28 bg-[#1E3A3A]">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-amber-300/80 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                                <MapPin className="w-4 h-4" />
                                Find Us
                            </div>
                            <h2 className="h2 text-white mb-4">
                                See It Live. Feb 4. Doha.
                            </h2>
                            <p className="text-body-lg text-white/70 mb-8">
                                30-minute live demo. Walk through the platform. Ask anything. No pitch deck—just the product.
                            </p>

                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-10">
                                <div className="grid sm:grid-cols-3 gap-6 text-center">
                                    <div>
                                        <Calendar className="w-8 h-8 text-amber-300 mx-auto mb-3" />
                                        <p className="font-semibold text-white">Wednesday, Feb 4</p>
                                        <p className="text-body-sm text-white/50">Exhibition Day</p>
                                    </div>
                                    <div>
                                        <MapPin className="w-8 h-8 text-amber-300 mx-auto mb-3" />
                                        <p className="font-semibold text-white">DECC, Doha</p>
                                        <p className="text-body-sm text-white/50">Qatar</p>
                                    </div>
                                    <div>
                                        <Rocket className="w-8 h-8 text-amber-300 mx-auto mb-3" />
                                        <p className="font-semibold text-white">Live Demos</p>
                                        <p className="text-body-sm text-white/50">See the platform in action</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href={DEMO_BOOKING_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black px-8 py-4 text-sm font-semibold hover:from-amber-300 hover:to-amber-400 transition-all duration-300 rounded-lg shadow-lg shadow-amber-500/25"
                                >
                                    Book a Demo
                                    <Calendar className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="mailto:Nikhil@enai.ai?subject=Web Summit Qatar - Demo Request&cc=Zeeshan@enai.ai"
                                    className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-sm font-medium hover:bg-white/10 transition-all duration-300 rounded-lg"
                                >
                                    <Mail className="w-4 h-4 mr-2" />
                                    Email Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="py-20 md:py-28 bg-[#E8DDD4]">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="h2 text-black mb-6">
                                Ready to Stop Hiring and Start Scaling?
                            </h2>
                            <p className="text-body-lg text-black/60 mb-10">
                                One platform. No busywork. Pipeline on autopilot. Get 30 minutes with the founders and see why enterprise teams are switching.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href={DEMO_BOOKING_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-[#1E3A3A] text-white px-8 py-4 text-sm font-semibold hover:bg-[#2A4A4A] transition-all duration-300 rounded-lg"
                                >
                                    Get 30 Min with the Founders
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="/events/qatar-summit-2026"
                                    className="inline-flex items-center justify-center border border-black/20 text-black px-8 py-4 text-sm font-medium hover:bg-black/5 transition-all duration-300 rounded-lg"
                                >
                                    Investor Information
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
