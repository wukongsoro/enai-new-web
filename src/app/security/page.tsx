import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Shield, Lock, Eye, Server, FileCheck, Users, Clock, CheckCircle2, Award, Globe, ShieldCheck, CreditCard, Heart, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Security & Trust | ENAI - Enterprise-Grade AI Security & Compliance",
  description: "Learn about ENAI's commitment to security, privacy, and compliance. SOC 2 Type II, ISO 27001, GDPR, CCPA, HIPAA compliant AI sales automation platform.",
  keywords: "enterprise security, SOC 2 compliance, ISO 27001, GDPR compliant, CCPA compliant, AI security, data privacy, sales automation security",
  openGraph: {
    title: "Security & Trust | ENAI - Enterprise-Grade AI Security",
    description: "Enterprise security and compliance for AI-powered sales automation. SOC 2, ISO 27001, GDPR ready.",
    type: "website",
  },
};

const certifications = [
  {
    name: "SOC 2 Type II",
    status: "Underway",
    icon: ShieldCheck,
    color: "#1E3A3A",
    description: "Security controls audit",
  },
  {
    name: "ISO 27001",
    status: "Underway", 
    icon: Award,
    color: "#2D4A4A",
    description: "Information security standard",
  },
  {
    name: "GDPR",
    status: "Underway",
    icon: Globe,
    color: "#0A4D68",
    description: "EU data protection",
  },
  {
    name: "CCPA",
    status: "Underway",
    icon: FileText,
    color: "#1A365D",
    description: "California privacy act",
  },
  {
    name: "HIPAA",
    status: "Planned",
    icon: Heart,
    color: "#4A5A6A",
    description: "Healthcare data protection",
  },
  {
    name: "PCI DSS",
    status: "Planned",
    icon: CreditCard,
    color: "#3A5A5A",
    description: "Payment card security",
  },
];

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data encrypted in transit (TLS 1.3) and at rest (AES-256).",
  },
  {
    icon: Eye,
    title: "Zero Data Retention",
    description: "Your data is never used to train our AI models.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Enterprise-grade cloud with 99.9% uptime SLA.",
  },
  {
    icon: Users,
    title: "Access Controls",
    description: "RBAC, SSO integration, and comprehensive audit logging.",
  },
  {
    icon: FileCheck,
    title: "Regular Audits",
    description: "Quarterly third-party penetration testing.",
  },
  {
    icon: Clock,
    title: "Incident Response",
    description: "24/7 monitoring with rapid response protocols.",
  },
];

const trustStats = [
  { value: "256-bit", label: "AES Encryption" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Monitoring" },
  { value: "<24h", label: "Response Time" },
];

export default function SecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "ENAI Security & Trust",
            "description": "Enterprise-grade security and compliance for AI-powered sales automation.",
          })
        }}
      />
      <Navigation />
      <main className="bg-white">
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-[#1E3A3A] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-white/70 px-4 py-2 bg-white/10 border border-white/10 rounded-full mb-8">
                <Shield className="w-4 h-4" />
                Trust & Security
              </div>
              <h1 className="h1 text-white mb-6">
                Enterprise-Grade Security
              </h1>
              <p className="text-body-lg text-white/70 leading-relaxed max-w-2xl">
                Your data security is our top priority. ENAI is built with enterprise-grade security controls, ensuring your sensitive business information remains protected.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="https://calendly.com/enai-ai2024/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-[#1E3A3A] px-8 py-4 text-sm font-medium hover:bg-white/90 transition-all duration-300"
                >
                  Request Security Overview
                </Link>
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-sm font-medium hover:bg-white/10 transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F5F1ED]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trustStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-stat text-[#1E3A3A] mb-2">{stat.value}</div>
                  <div className="text-body-sm text-black/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="h2 text-black mb-6">
                Compliance & Certifications
              </h2>
              <p className="text-body-lg text-black/60 leading-relaxed">
                Industry-leading security certifications to protect your data.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {certifications.map((cert, index) => {
                const CertIcon = cert.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#F5F1ED] p-6 rounded-lg text-center hover:shadow-md transition-all duration-300 group"
                  >
                    <div 
                      className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-lg group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: cert.color }}
                    >
                      <CertIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-sm font-medium text-black mb-1">{cert.name}</h3>
                    <span className="inline-flex items-center gap-1 text-[10px] text-black/50 uppercase tracking-wider">
                      {cert.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#1E3A3A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="h2 text-white mb-6">
                How We Protect Your Data
              </h2>
              <p className="text-body-lg text-white/70 leading-relaxed">
                Security built into every layer of our platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 mb-6 flex items-center justify-center bg-white/10 rounded-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-3">{feature.title}</h3>
                  <p className="text-body-sm text-white/60 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="h2 text-black mb-6">
                  Our Data Privacy Principles
                </h2>
                <p className="text-body-lg text-black/60 leading-relaxed mb-8">
                  Transparent, ethical data handling. Your business data is yours.
                </p>
                <ul className="space-y-4">
                  {[
                    "Your data is never used to train our AI models",
                    "Full data portability—export your data anytime",
                    "Automatic data deletion upon account termination",
                    "Strict access controls with audit logging",
                    "GDPR-compliant data processing agreements",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#1E3A3A] flex-shrink-0 mt-0.5" />
                      <span className="text-body text-black/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#F5F1ED] p-10 rounded-lg">
                <div className="text-quote text-black/80 mb-6">
                  &ldquo;Security isn&apos;t just a feature—it&apos;s foundational to everything we build.&rdquo;
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1E3A3A] flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-black">ENAI Security Team</div>
                    <div className="text-body-sm text-black/60">Dedicated to your protection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#E8DDD4]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="h2 text-black mb-6">
                Have Security Questions?
              </h2>
              <p className="text-body-lg text-black/60 leading-relaxed mb-10">
                Our security team is ready to discuss your specific requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="https://calendly.com/enai-ai2024/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black text-white px-8 py-4 text-sm font-medium hover:bg-black/90 transition-all duration-300"
                >
                  Schedule Security Review
                </Link>
                <Link
                  href="mailto:enai.ai2024@gmail.com"
                  className="inline-flex items-center justify-center border border-black text-black px-8 py-4 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
                >
                  Contact Security Team
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