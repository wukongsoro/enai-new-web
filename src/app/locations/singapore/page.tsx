import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Revenue Workflows Singapore | Revenue OS SG | Enai.ai",
  description: "Leading revenue workflows for Singapore companies. Scale sales in APAC with AI. SGT timezone support.",
  keywords: "revenue workflows Singapore, Revenue Workflow Singapore, APAC revenue workflows",
};

export default function SingaporePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="bg-[#F5F1ED] py-20 px-6 mt-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revenue Workflows for Singapore Companies
            </h1>
            <Link href="https://calendly.com/enai-ai2024/30min" className="bg-[#1E3A3A] hover:bg-[#16302F] text-white px-8 py-4 rounded-lg font-semibold transition inline-block">
              Schedule Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

