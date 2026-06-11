import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Revenue Workflows Sydney | Revenue OS Australia | Enai.ai",
  description: "Top revenue workflows for Sydney companies. Scale sales in Australia with AI. AEST timezone support.",
  keywords: "revenue workflows Sydney, Revenue Workflow Australia, Sydney revenue software",
};

export default function SydneyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="bg-[#F5F1ED] py-20 px-6 mt-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revenue Workflows for Sydney Companies
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

