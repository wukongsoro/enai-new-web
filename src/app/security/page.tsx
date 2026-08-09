import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Database,
  Eye,
  FileCheck2,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Security and Assurance | ENAI",
  description:
    "Review ENAI's security principles, governance controls, data handling commitments, and assurance roadmap.",
  openGraph: {
    title: "Security and Assurance | ENAI",
    description:
      "Security, governance, and data handling for controlled revenue execution.",
    type: "website",
  },
};

const controlModel = [
  {
    icon: ShieldCheck,
    title: "Authority is explicit",
    description:
      "Customer-defined rules determine what ENAI can research, prepare, approve, send, or escalate.",
  },
  {
    icon: Eye,
    title: "Actions remain explainable",
    description:
      "Revenue work is tied back to source context, workflow rules, and the human handoff path.",
  },
  {
    icon: Database,
    title: "Customer boundaries matter",
    description:
      "Workspace access and tenant controls are designed to keep customer context separated and permissioned.",
  },
  {
    icon: FileCheck2,
    title: "Judgment has an owner",
    description:
      "Sensitive accounts, unsupported claims, and exceptions can be routed to a person before action is taken.",
  },
];

const safeguards = [
  {
    icon: LockKeyhole,
    title: "Encrypted data handling",
    description:
      "Customer data is protected in transit and at rest using industry-standard encryption controls.",
  },
  {
    icon: KeyRound,
    title: "Controlled access",
    description:
      "Access is limited by role and operational need, with enterprise identity and audit requirements addressed during deployment.",
  },
  {
    icon: Database,
    title: "No model training on customer data",
    description:
      "Customer data is not used to train generalized AI models. Retention and deletion terms are agreed as part of deployment.",
  },
];

const assurance = [
  ["SOC 2 Type II", "Readiness programme in progress", "Certification is not currently claimed"],
  ["ISO 27001", "Control mapping on the assurance roadmap", "Certification is not currently claimed"],
  ["GDPR and CCPA", "Data protection and contract review", "Regulatory alignment, not a certification badge"],
];

export default function SecurityPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        <section className="bg-[#173C3A] px-6 pb-24 pt-40 text-white md:pb-32 md:pt-48 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white/48">
              Security and assurance
            </p>
            <div className="mt-8 grid gap-10 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
              <h1 className="max-w-4xl text-[48px] leading-[1.02] text-white md:text-[72px] lg:text-[88px]">
                Control is part of the product.
              </h1>
              <p className="max-w-sm text-base leading-7 text-white/64 md:text-lg">
                ENAI is designed for revenue work that touches customer relationships, private context, and company reputation. Security and governance are reviewed as one system.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="mailto:Nikhil@enai.ai?subject=ENAI%20security%20overview"
                className="inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-[#173C3A]"
              >
                Request security overview
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/privacy-policy"
                className="inline-flex items-center border border-white/25 px-6 py-3.5 text-sm font-semibold text-white"
              >
                Read privacy policy
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-black/8 px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Governance model</p>
              <h2 className="section-title mt-4 text-black">
                The system should know what it may do, why it may do it, and when to stop.
              </h2>
            </div>
            <div className="mt-14 grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
              {controlModel.map((control) => {
                const Icon = control.icon;
                return (
                  <div key={control.title} className="border-b border-r border-black/10 p-7 md:p-8">
                    <Icon className="h-5 w-5 text-[#1E3A3A]" />
                    <h3 className="mt-8 text-lg font-semibold text-black">{control.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-black/58">{control.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#F5F1ED] px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
            <div>
              <p className="section-eyebrow">Data safeguards</p>
              <h2 className="section-title mt-4 text-black">Clear commitments, stated precisely.</h2>
              <p className="section-copy mt-6">
                Security language should be reviewable, not ornamental. Deployment-specific requirements are documented with the customer before ENAI is given authority.
              </p>
            </div>
            <div className="border-t border-black/12">
              {safeguards.map((safeguard) => {
                const Icon = safeguard.icon;
                return (
                  <div key={safeguard.title} className="grid gap-4 border-b border-black/12 py-7 sm:grid-cols-[44px_180px_1fr] sm:items-start">
                    <Icon className="h-5 w-5 text-[#1E3A3A]" />
                    <h3 className="text-base font-semibold text-black">{safeguard.title}</h3>
                    <p className="text-sm leading-6 text-black/58">{safeguard.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
              <div>
                <p className="section-eyebrow">Assurance roadmap</p>
                <h2 className="section-title mt-4 text-black">No badge before the evidence.</h2>
              </div>
              <div className="overflow-hidden border border-black/10">
                {assurance.map(([standard, programme, claim]) => (
                  <div key={standard} className="grid gap-3 border-t border-black/10 p-5 first:border-t-0 md:grid-cols-[0.28fr_0.38fr_0.34fr] md:p-6">
                    <p className="font-semibold text-black">{standard}</p>
                    <p className="text-sm leading-6 text-black/60">{programme}</p>
                    <p className="flex items-start gap-2 text-sm leading-6 text-[#1E3A3A]">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0" />
                      {claim}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#111514] px-6 py-20 text-white lg:px-10 lg:py-24">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/42">Enterprise review</p>
              <h2 className="mt-4 max-w-3xl text-4xl leading-tight md:text-5xl">
                Review the controls against your requirements.
              </h2>
            </div>
            <Link
              href="mailto:Nikhil@enai.ai?subject=ENAI%20enterprise%20security%20review"
              className="inline-flex shrink-0 items-center gap-2 border border-white/25 px-6 py-3.5 text-sm font-semibold text-white"
            >
              Start a security review
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
