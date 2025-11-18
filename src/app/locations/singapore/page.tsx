import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Sales Automation Singapore | AI BDR Software SG | Enai.ai",
  description: "Leading AI sales automation for Singapore companies. Scale sales in APAC with AI. SGT timezone support.",
  keywords: "AI sales automation Singapore, AI BDR Singapore, APAC sales automation",
};

export default function SingaporePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-6 mt-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Sales Automation for Singapore Companies
            </h1>
            <Link href="https://calendly.com/enai-ai2024/30min" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition inline-block">
              Schedule Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

