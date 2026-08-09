import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { buildAbsoluteUrl, buildCanonicalUrl } from "@/lib/seo";

const PRIVACY_URL = buildCanonicalUrl("/privacy-policy");

export const metadata: Metadata = {
  title: "Privacy Policy | ENAI",
  description:
    "How ENAI collects, uses, protects, retains, and discloses personal information when providing governed revenue workflows.",
  alternates: { canonical: PRIVACY_URL },
  openGraph: {
    title: "Privacy Policy | ENAI",
    description: "ENAI data handling and privacy commitments.",
    url: PRIVACY_URL,
    type: "article",
    images: [buildAbsoluteUrl("/social-share-image.png")],
  },
};

const sections = [
  {
    title: "1. Scope and roles",
    content: [
      "This policy explains how Enai Limited (\"ENAI\", \"we\", \"us\") handles personal information through enai.ai and the ENAI service.",
      "For account, billing, website, and direct marketing information, ENAI acts as a controller. When a customer uses ENAI to process account, prospect, communication, or CRM information, ENAI acts as a processor under the customer's instructions and agreement.",
    ],
  },
  {
    title: "2. Information we process",
    content: [
      "We may process contact and account information, product usage and device information, support communications, connected-service identifiers, and business information provided by customers or obtained from permitted public and commercial sources.",
      "When a customer connects email, calendar, CRM, or other systems, ENAI processes only the information required to provide the configured workflow and related support.",
    ],
  },
  {
    title: "3. How information is used",
    content: [
      "We use information to provide and secure the service, execute customer-configured workflows, maintain integrations, respond to support requests, improve reliability, meet legal obligations, and communicate about the ENAI service.",
      "Customer data is not used to train generalized artificial intelligence or machine-learning models.",
    ],
  },
  {
    title: "4. Google API data",
    content: [
      "ENAI's use and transfer of information received from Google APIs follows the Google API Services User Data Policy, including its Limited Use requirements.",
      "Where a customer connects Google Workspace, ENAI requests the scopes required for the enabled workflow. Authentication tokens and relevant message metadata are protected and used only to provide the service, support the customer, investigate security issues, or comply with law.",
    ],
  },
  {
    title: "5. Service providers and disclosure",
    content: [
      "ENAI may use vetted infrastructure, communications, analytics, payment, support, and data providers where necessary to operate the service. These providers may process information only for the contracted purpose and under appropriate confidentiality and data-protection terms.",
      "We may also disclose information when required by law, to protect the rights and security of ENAI or others, or as part of a corporate transaction subject to appropriate safeguards. ENAI does not sell customer content.",
    ],
  },
  {
    title: "6. International transfers",
    content: [
      "Information may be processed in countries other than the country where it was collected. Where required, ENAI uses contractual and organizational safeguards for international transfers.",
    ],
  },
  {
    title: "7. Retention and deletion",
    content: [
      "ENAI retains information only for as long as needed to provide the service, meet contractual requirements, resolve disputes, and comply with law. Customer data is returned or deleted according to the applicable agreement and legal obligations.",
      "Customers control retention for personal information they submit to the service. Requests concerning customer-controlled data should first be directed to that customer.",
    ],
  },
  {
    title: "8. Security",
    content: [
      "ENAI uses technical and organizational measures designed to protect information against unauthorized access, alteration, disclosure, and loss. These include encryption in transit and at rest, access controls, tenant boundaries, and operational review.",
      "No internet service can guarantee absolute security. Customers should use appropriate access policies and promptly report suspected security issues.",
    ],
  },
  {
    title: "9. Your rights",
    content: [
      "Depending on your location, you may have rights to access, correct, delete, restrict, or object to processing, or to request portability of your personal information. You may also withdraw consent where processing relies on consent and lodge a complaint with a data-protection authority.",
      "We may need to verify your identity before completing a request. Where ENAI processes information for a customer, we will support that customer in responding to valid requests.",
    ],
  },
  {
    title: "10. Cookies, communications, and children",
    content: [
      "ENAI may use essential and limited analytics technologies to operate and understand the website. You can control cookies through your browser. Marketing communications include a way to opt out.",
      "The ENAI service is intended for business users and is not directed to children.",
    ],
  },
  {
    title: "11. Changes and contact",
    content: [
      "We may update this policy as the service, law, or our practices change. Material changes will be identified on this page and, where appropriate, communicated directly.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white pt-36 md:pt-44">
        <header className="border-b border-black/10 px-6 pb-16 lg:px-10 lg:pb-20">
          <div className="mx-auto max-w-5xl">
            <p className="section-eyebrow">Legal</p>
            <h1 className="mt-5 text-5xl leading-tight text-black md:text-7xl">Privacy Policy</h1>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-black/50">
              <span>Effective 10 July 2026</span>
              <span>Enai Limited</span>
              <span>128 City Road, London, EC1V 2NX</span>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 lg:grid-cols-[0.24fr_0.76fr] lg:px-0 lg:py-24">
          <aside className="text-sm leading-6 text-black/50">
            <p>
              Questions or privacy requests can be sent to{" "}
              <Link className="font-medium text-[#1E3A3A] underline underline-offset-4" href="mailto:Nikhil@enai.ai?subject=ENAI%20privacy%20request">
                Nikhil@enai.ai
              </Link>
              .
            </p>
          </aside>
          <article className="divide-y divide-black/10">
            {sections.map((section) => (
              <section key={section.title} className="py-8 first:pt-0">
                <h2 className="text-2xl font-semibold text-black">{section.title}</h2>
                <div className="mt-5 space-y-4">
                  {section.content.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-7 text-black/62">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
