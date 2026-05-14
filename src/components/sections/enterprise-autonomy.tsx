"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, Mail, CalendarCheck, Zap, CheckCircle2, Clock, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const workflowTabs = [
    { id: "prospect", label: "Prospect" },
    { id: "engage", label: "Engage" },
    { id: "qualify", label: "Qualify" },
    { id: "close", label: "Close" },
];

interface WorkflowStep {
    icon: React.ElementType;
    label: string;
    detail: string;
    status: "complete" | "active" | "pending";
}

const workflowData: Record<string, { title: string; stats: { value: string; label: string }[]; steps: WorkflowStep[] }> = {
    prospect: {
        title: "Signal Detection & Prospecting",
        stats: [
            { value: "2,847", label: "Signals detected" },
            { value: "412", label: "Accounts scored" },
            { value: "94%", label: "Accuracy rate" },
        ],
        steps: [
            { icon: Search, label: "Scan intent signals", detail: "Monitor 12 signal sources", status: "complete" },
            { icon: BarChart3, label: "Score & prioritize", detail: "Firmographic + intent overlay", status: "complete" },
            { icon: Users, label: "Map key contacts", detail: "Decision-maker identification", status: "active" },
            { icon: CheckCircle2, label: "Route to outreach", detail: "Auto-assign to sequence", status: "pending" },
        ],
    },
    engage: {
        title: "Governed Multi-Channel Outreach",
        stats: [
            { value: "1,204", label: "Sequences active" },
            { value: "38%", label: "Open rate" },
            { value: "12%", label: "Reply rate" },
        ],
        steps: [
            { icon: Mail, label: "Generate messaging", detail: "Personalized per account", status: "complete" },
            { icon: CheckCircle2, label: "Compliance check", detail: "Approval gate passed", status: "complete" },
            { icon: Zap, label: "Execute sequence", detail: "Email + LinkedIn + call", status: "active" },
            { icon: Clock, label: "Follow-up logic", detail: "Automated re-engagement", status: "pending" },
        ],
    },
    qualify: {
        title: "Deterministic Qualification",
        stats: [
            { value: "186", label: "Leads qualified" },
            { value: "72%", label: "Conversion rate" },
            { value: "2.1 days", label: "Avg response time" },
        ],
        steps: [
            { icon: Users, label: "Capture responses", detail: "Multi-channel aggregation", status: "complete" },
            { icon: BarChart3, label: "Run qualification logic", detail: "BANT + custom criteria", status: "complete" },
            { icon: CheckCircle2, label: "Score readiness", detail: "Buy-signal confidence", status: "active" },
            { icon: CalendarCheck, label: "Book meeting", detail: "Governed calendar sync", status: "pending" },
        ],
    },
    close: {
        title: "Pipeline Intelligence & Close",
        stats: [
            { value: "$2.4M", label: "Pipeline value" },
            { value: "34", label: "Deals in motion" },
            { value: "28 days", label: "Avg cycle" },
        ],
        steps: [
            { icon: BarChart3, label: "Monitor deal health", detail: "Real-time signal tracking", status: "complete" },
            { icon: Zap, label: "Trigger alerts", detail: "At-risk deal detection", status: "complete" },
            { icon: Users, label: "Stakeholder mapping", detail: "Org chart intelligence", status: "active" },
            { icon: CheckCircle2, label: "Close & handoff", detail: "Governed next-steps", status: "pending" },
        ],
    },
};

const EnterpriseAutonomy = () => {
    const [activeTab, setActiveTab] = useState("prospect");
    const current = workflowData[activeTab];

    return (
        <section className="bg-white py-24 md:py-32 border-b border-black/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
                    {/* Left: Text Content */}
                    <div>
                        <div className="flex flex-col gap-8">
                            <div className="space-y-2">
                                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/40 block">
                                    Software
                                </span>
                                <h2 className="text-h2 text-black max-w-xl">
                                    Enterprise Autonomy
                                </h2>
                            </div>

                            <div className="space-y-6">
                                <p className="text-xl md:text-2xl font-medium text-black/80 leading-snug">
                                    Not another platform. An Operating System. Turn your GTM stack into a sovereign revenue engine.
                                </p>
                                <p className="text-body-lg text-black/60 max-w-lg leading-relaxed">
                                    Solving complex revenue operations in days, not years. ENAI provides the foundational infrastructure for governed autonomous execution. It reads inbound, outbound, and intent signals to run your revenue motion automatically, with complete audit lineage.
                                </p>
                            </div>

                            <div className="pt-4">
                                <Link
                                    href="https://calendly.com/enai-ai2024/30min"
                                    className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm font-semibold rounded-lg hover:bg-black/90 transition-all duration-300 group"
                                >
                                    Get Started
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right: Interactive Workflow Visualization */}
                    <div className="relative mt-4 lg:mt-0">
                        <div className="bg-[#F5F1ED] rounded-3xl overflow-hidden border border-black/5 shadow-lg">
                            {/* Workflow Tab Bar */}
                            <div className="flex border-b border-black/5 bg-white/60">
                                {workflowTabs.map((tab) => (
                                    <Button
                                        key={tab.id}
                                        variant="ghost"
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex-1 py-4 h-auto rounded-none text-xs font-bold uppercase tracking-[0.15em] transition-all duration-200 ${
                                            activeTab === tab.id
                                                ? "text-[#1E3A3A] border-b-2 border-[#1E3A3A] bg-white hover:bg-white"
                                                : "text-black/30 hover:text-black/60 hover:bg-transparent"
                                        }`}
                                    >
                                        {tab.label}
                                    </Button>
                                ))}
                            </div>

                            {/* Workflow Content */}
                            <div className="p-6 md:p-8">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#1E3A3A]/60 mb-1">
                                            Active Workflow
                                        </p>
                                        <h3 className="text-lg font-semibold text-black">
                                            {current.title}
                                        </h3>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-[#1E3A3A]/10 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-[#1E3A3A] animate-pulse" />
                                    </div>
                                </div>

                                {/* Stats Row */}
                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    {current.stats.map((stat, i) => (
                                        <div key={i} className="bg-white rounded-xl p-4 border border-black/5">
                                            <p className="text-xl md:text-2xl font-semibold text-black">{stat.value}</p>
                                            <p className="text-[11px] font-bold uppercase tracking-widest text-black/40 mt-1">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Steps */}
                                <div className="space-y-3">
                                    {current.steps.map((step, i) => {
                                        const StepIcon = step.icon;
                                        return (
                                            <div
                                                key={i}
                                                className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${
                                                    step.status === "active"
                                                        ? "bg-white border-[#1E3A3A]/20 shadow-sm"
                                                        : step.status === "complete"
                                                        ? "bg-white/60 border-black/5"
                                                        : "bg-transparent border-dashed border-black/10"
                                                }`}
                                            >
                                                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                                                    step.status === "active"
                                                        ? "bg-[#1E3A3A] text-white"
                                                        : step.status === "complete"
                                                        ? "bg-[#1E3A3A]/10 text-[#1E3A3A]"
                                                        : "bg-black/5 text-black/30"
                                                }`}>
                                                    <StepIcon className="w-4 h-4" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className={`text-sm font-semibold ${
                                                        step.status === "pending" ? "text-black/30" : "text-black"
                                                    }`}>
                                                        {step.label}
                                                    </p>
                                                    <p className="text-xs text-black/40 mt-0.5">{step.detail}</p>
                                                </div>
                                                <div className="shrink-0">
                                                    {step.status === "complete" && (
                                                        <CheckCircle2 className="w-4 h-4 text-[#1E3A3A]" />
                                                    )}
                                                    {step.status === "active" && (
                                                        <div className="w-4 h-4 rounded-full border-2 border-[#1E3A3A] border-t-transparent animate-spin" />
                                                    )}
                                                    {step.status === "pending" && (
                                                        <div className="w-4 h-4 rounded-full border-2 border-black/10" />
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnterpriseAutonomy;
