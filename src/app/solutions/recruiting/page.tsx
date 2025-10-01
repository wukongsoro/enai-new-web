import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Sales Tools for Recruiting Agencies | Automate Candidate Outreach | Enai.ai",
  description: "Transform your recruiting agency with AI-powered candidate and client outreach. Place 3x more candidates without hiring more recruiters. Built for staffing agencies.",
  keywords: "AI for recruiting agencies, staffing agency automation, candidate outreach automation, recruiting sales tools",
};

export default function RecruitingSolutionPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-6 mt-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Sales Automation for Recruiting Agencies
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Place 3x more candidates without hiring more recruiters. Automate candidate and client outreach at scale.
            </p>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition inline-block"
            >
              Book Demo for Recruiting Agencies
            </Link>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Built for High-Volume Recruiting</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Candidate Outreach Automation</h3>
                <p className="text-gray-600">
                  Reach 1,000+ candidates daily with personalized messages based on skills, experience, and job fit.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Client Pipeline Generation</h3>
                <p className="text-gray-600">
                  Automate client prospecting and relationship building to keep your pipeline full of job orders.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Placement Acceleration</h3>
                <p className="text-gray-600">
                  Match candidates to opportunities faster with AI-powered qualification and scheduling.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Recruiting Agency?</h2>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition inline-block"
            >
              Schedule Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

