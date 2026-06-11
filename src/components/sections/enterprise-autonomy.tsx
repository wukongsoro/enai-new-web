"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, Mail, CalendarCheck, Zap, CheckCircle2, Clock, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const workflowTabs = [
    { id: "research", label: "Research" },
    { id: "committee", label: "Committee" },
    { id: "execute", label: "Execute" },
    { id: "govern", label: "Govern" },
];

interface WorkflowStep {
    icon: React.ElementType;
    label: string;
    detail: string;
    status: "complete" | "active" | "pending";
}

const workflowData: Record<string, { title: string; stats: { value: string; label: string }[]; steps: WorkflowStep[] }> = {
    research: {
        title: "Research account reality",
        stats: [
            { value: "40-60%", label: "Research time saved" },
            { value: "12", label: "Signal sources" },
            { value: "412", label: "Accounts scored" },
        ],
        steps: [
            { icon: Search, label: "Read market signals", detail: "Hiring, funding, RFPs, events, and intent", status: "complete" },
            { icon: BarChart3, label: "Score against your ICP", detail: "Fit, timing, territory, and use case", status: "complete" },
            { icon: Users, label: "Build the account brief", detail: "Why this account, why now, what to say", status: "active" },
            { icon: CheckCircle2, label: "Route to the right playbook", detail: "Industry workflow selected automatically", status: "pending" },
        ],
    },
    committee: {
        title: "Map the buying committee",
        stats: [
            { value: "3.2x", label: "More qualified meetings" },
            { value: "6-18m", label: "Cycle coverage" },
            { value: "5+", label: "Stakeholder types" },
        ],
        steps: [
            { icon: Users, label: "Find economic and technical buyers", detail: "Role relevance by industry and deal type", status: "complete" },
            { icon: Search, label: "Identify procurement paths", detail: "RFP, security, partner, or executive route", status: "complete" },
            { icon: Mail, label: "Personalize by stakeholder", detail: "Different message for CFO, operator, engineer", status: "active" },
            { icon: CheckCircle2, label: "Multi-thread the account", detail: "No single-threaded pipeline risk", status: "pending" },
        ],
    },
    execute: {
        title: "Execute the revenue motion",
        stats: [
            { value: "20-35%", label: "Conversion lift" },
            { value: "3", label: "Channels" },
            { value: "24/7", label: "Follow-up coverage" },
        ],
        steps: [
            { icon: Mail, label: "Run email, social, and voice", detail: "One playbook across the buyer journey", status: "complete" },
            { icon: Clock, label: "Follow up until signal changes", detail: "Event, reply, meeting, no-show, or reactivation", status: "complete" },
            { icon: CalendarCheck, label: "Qualify and book", detail: "Meetings handed over with account context", status: "active" },
            { icon: Zap, label: "Trigger next action", detail: "Sales, partner, compliance, or founder handoff", status: "pending" },
        ],
    },
    govern: {
        title: "Govern every action",
        stats: [
            { value: "100%", label: "Auditable actions" },
            { value: "$300K+", label: "Annual savings" },
            { value: "0", label: "Black-box decisions" },
        ],
        steps: [
            { icon: CheckCircle2, label: "Apply approval rules", detail: "Industry, brand, and compliance controls", status: "complete" },
            { icon: BarChart3, label: "Explain why it acted", detail: "Source, score, message, and result logged", status: "complete" },
            { icon: Users, label: "Keep humans in control", detail: "Escalation for sensitive accounts and decisions", status: "active" },
            { icon: Zap, label: "Earn more autonomy", detail: "Shadow mode to approved execution", status: "pending" },
        ],
    },
};

const EnterpriseAutonomy = () => {
    const [activeTab, setActiveTab] = useState("research");
    const current = workflowData[activeTab];

    return (
        <section id="platform" className="bg-white py-24 md:py-32 border-b border-black/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
                    {/* Left: Text Content */}
                    <div>
                        <div className="flex flex-col gap-8">
                            <div className="space-y-2">
                                <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-black/40 block">
                                    What ENAI does
                                </span>
                                <h2 className="text-h2 text-black max-w-xl">
                                    Revenue work, executed end-to-end
                                </h2>
                            </div>

                            <div className="space-y-6">
                                <p className="text-xl md:text-2xl font-medium text-black/80 leading-snug">
                                    ENAI coordinates prospecting, qualification, outreach, and handoff in one governed workflow.
                                </p>
                                <p className="text-body-lg text-black/60 max-w-lg leading-relaxed">
                                    Give ENAI your market, offer, and rules. It reads the signal, prepares the account, executes the next step, and leaves an audit trail.
                                </p>
                            </div>

                            <div className="pt-4">
                                <Link
                                    href="https://calendly.com/enai-ai2024/30min"
                                    className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm font-semibold rounded-lg hover:bg-black/90 transition-all duration-300 group"
                                >
                                    See the workflow
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
                                        className={`flex-1 min-w-0 px-1 md:px-4 py-4 h-auto rounded-none text-[10px] md:text-xs font-bold uppercase tracking-[0.08em] md:tracking-[0.15em] transition-all duration-200 ${
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
                                        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[#1E3A3A]/60 mb-1">
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
                                <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8">
                                    {current.stats.map((stat, i) => (
                                        <div key={i} className="bg-white rounded-xl p-3 md:p-4 border border-black/5 min-w-0">
                                            <p className="text-lg md:text-2xl font-semibold text-black">{stat.value}</p>
                                            <p className="text-[10px] md:font-mono text-[11px] font-medium uppercase tracking-wider md:tracking-widest text-black/40 mt-1">{stat.label}</p>
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
