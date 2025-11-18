import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Sales Automation Amsterdam | AI BDR Software Netherlands | Enai.ai",
  description: "AI sales automation for Amsterdam companies. GDPR compliant. CET timezone support.",
  keywords: "AI sales automation Amsterdam, AI BDR Netherlands, Amsterdam verkoopautomatisering",
};

export default function AmsterdamPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-6 mt-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Sales Automation for Amsterdam Companies
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

