import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Sales Automation New York | AI BDR Software NYC | Enai.ai",
  description: "Top AI sales automation platform for New York companies. Scale your NYC sales team 10x with AI BDR agents. ET timezone support.",
  keywords: "AI sales automation New York, AI BDR NYC, sales automation Manhattan, New York sales software",
};

export default function NewYorkPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-6 mt-32">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Serving New York & Tri-State Area
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Sales Automation for New York Companies
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join leading NYC enterprises using Enai.ai to transform sales operations. Eastern timezone support included.
            </p>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition inline-block"
            >
              Schedule Demo (ET Available)
            </Link>
          </div>
        </section>
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Scale Your NYC Sales?</h2>
            <Link href="https://calendly.com/enai-ai2024/30min" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition inline-block">
              Book Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

