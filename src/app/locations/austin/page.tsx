import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Sales Automation Austin | AI BDR Software Austin TX | Enai.ai",
  description: "Leading AI sales automation for Austin tech companies. Scale sales 10x with AI BDR agents. Central timezone support.",
  keywords: "AI sales automation Austin, AI BDR Austin TX, sales automation Texas",
};

export default function AustinPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-6 mt-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Sales Automation for Austin Companies
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join Austin's fastest-growing tech companies using Enai AI. CT timezone support included.
            </p>
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

