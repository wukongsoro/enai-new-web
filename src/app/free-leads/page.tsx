"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Target, MapPin, Calendar, CheckCircle2, ArrowRight, Sparkles, Gift, Users, Loader2 } from "lucide-react";

export default function FreeLeadsPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        company: "",
        jobTitle: "",
        targetMarket: "",
        phone: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            // Submit to Netlify Forms
            const form = e.target as HTMLFormElement;
            const formDataObj = new FormData(form);

            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formDataObj as unknown as Record<string, string>).toString(),
            });

            if (!response.ok) {
                throw new Error("Form submission failed");
            }

            setIsSubmitted(true);
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const targetMarkets = [
        "SaaS / Software",
        "Financial Services",
        "Healthcare & Life Sciences",
        "Manufacturing & Industrial",
        "Retail & E-commerce",
        "Professional Services",
        "Technology & IT",
        "Real Estate",
        "Energy & Utilities",
        "Other",
    ];

    if (isSubmitted) {
        return (
            <>
                <Navigation />
                <main className="min-h-screen bg-gradient-to-br from-[#1E3A3A] via-[#2A4A4A] to-[#0D1F1F] pt-48 pb-20">
                    <div className="max-w-2xl mx-auto px-6 text-center">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl">
                            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center">
                                <CheckCircle2 className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                You&apos;re All Set!
                            </h1>
                            <p className="text-lg text-white/70 mb-8">
                                We&apos;ve received your request. Our team will prepare <strong className="text-amber-300">100 targeted leads</strong> based on your target market and have them ready for you at <strong className="text-amber-300">Booth A4-67</strong>.
                            </p>
                            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 mb-8">
                                <div className="flex items-center justify-center gap-4 text-amber-300">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5" />
                                        <span className="font-medium">Booth A4-67</span>
                                    </div>
                                    <div className="w-px h-6 bg-amber-500/30" />
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5" />
                                        <span className="font-medium">Wed, Feb 4</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-white/60 mb-8">
                                See you at the Doha Web Summit!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="https://app.cal.eu/nikhil/30min"
                                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black px-8 py-4 text-sm font-semibold hover:from-amber-300 hover:to-amber-400 transition-all duration-300 rounded-xl shadow-lg shadow-amber-500/25"
                                >
                                    Book a Meeting Too
                                    <Calendar className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="/"
                                    className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 text-sm font-medium hover:bg-white/10 transition-all duration-300 rounded-xl"
                                >
                                    Explore ENAI
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-gradient-to-br from-[#1E3A3A] via-[#2A4A4A] to-[#0D1F1F] pt-48 pb-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left: Value Prop */}
                        <div className="lg:sticky lg:top-48">
                            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-amber-300/90 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                                <Gift className="w-4 h-4" />
                                Doha Web Summit Exclusive
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200">100 FREE Leads</span>
                                <br />Based on Your Target Market
                            </h1>
                            <p className="text-lg text-white/70 mb-8 leading-relaxed">
                                Visit ENAI at the Doha Web Summit and walk away with 100 qualified leads tailored to your ideal customer profile. No strings attached.
                            </p>

                            <div className="space-y-4 mb-10">
                                {[
                                    "100 verified business contacts",
                                    "Matched to your target industry",
                                    "Complete with emails & LinkedIn profiles",
                                    "Ready to import into your CRM",
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                        </div>
                                        <span className="text-white/80">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400/20 to-amber-500/10 rounded-xl flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-amber-300" />
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">Booth A4-67</div>
                                        <div className="text-white/60 text-sm">Doha Exhibition & Convention Center</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400/20 to-amber-500/10 rounded-xl flex items-center justify-center">
                                        <Calendar className="w-6 h-6 text-amber-300" />
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">Wednesday, February 4, 2026</div>
                                        <div className="text-white/60 text-sm">Web Summit Qatar Exhibition Day</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-[#1E3A3A] rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Target className="w-5 h-5 text-amber-300" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-[#1E3A3A]">Claim Your Free Leads</h2>
                                    <p className="text-sm text-black/50">Fill in your details below</p>
                                </div>
                            </div>

                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 text-sm text-left">
                                    {error}
                                </div>
                            )}

                            {/* Netlify Forms - name must match hidden form below */}
                            <form
                                name="websummit-leads"
                                method="POST"
                                data-netlify="true"
                                onSubmit={handleSubmit}
                                className="space-y-5"
                            >
                                {/* Hidden field for Netlify */}
                                <input type="hidden" name="form-name" value="websummit-leads" />

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="text-left">
                                        <label className="block text-sm font-medium text-[#1E3A3A] mb-2 text-left">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            placeholder="Sarah Mitchell"
                                            className="w-full px-4 py-3 bg-[#F5F1ED] border border-black/5 rounded-xl text-[#1E3A3A] placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-left"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <label className="block text-sm font-medium text-[#1E3A3A] mb-2 text-left">
                                            Work Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="sarah@company.com"
                                            className="w-full px-4 py-3 bg-[#F5F1ED] border border-black/5 rounded-xl text-[#1E3A3A] placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-left"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="text-left">
                                        <label className="block text-sm font-medium text-[#1E3A3A] mb-2 text-left">
                                            Company *
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            required
                                            placeholder="Acme Inc."
                                            className="w-full px-4 py-3 bg-[#F5F1ED] border border-black/5 rounded-xl text-[#1E3A3A] placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-left"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <label className="block text-sm font-medium text-[#1E3A3A] mb-2 text-left">
                                            Job Title *
                                        </label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            value={formData.jobTitle}
                                            onChange={handleChange}
                                            required
                                            placeholder="VP of Sales"
                                            className="w-full px-4 py-3 bg-[#F5F1ED] border border-black/5 rounded-xl text-[#1E3A3A] placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-left"
                                        />
                                    </div>
                                </div>

                                <div className="text-left">
                                    <label className="block text-sm font-medium text-[#1E3A3A] mb-2 text-left">
                                        Target Market / Industry *
                                    </label>
                                    <select
                                        name="targetMarket"
                                        value={formData.targetMarket}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#F5F1ED] border border-black/5 rounded-xl text-[#1E3A3A] focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all appearance-none cursor-pointer text-left"
                                    >
                                        <option value="">Select your target market</option>
                                        {targetMarkets.map((market) => (
                                            <option key={market} value={market}>
                                                {market}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="text-left">
                                    <label className="block text-sm font-medium text-[#1E3A3A] mb-2 text-left">
                                        Phone (Optional)
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+971 50 123 4567"
                                        className="w-full px-4 py-3 bg-[#F5F1ED] border border-black/5 rounded-xl text-[#1E3A3A] placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-left"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-[#1E3A3A] to-[#2A4A4A] text-white py-4 px-8 rounded-xl font-semibold text-base hover:from-[#2A4A4A] hover:to-[#3A5A5A] transition-all duration-300 shadow-lg shadow-[#1E3A3A]/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Claiming Your Leads...
                                        </>
                                    ) : (
                                        <>
                                            <Sparkles className="w-5 h-5" />
                                            Claim My 100 Free Leads
                                            <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-black/40 text-center mt-4">
                                    By submitting, you agree to receive your leads and occasional updates from ENAI.
                                    We respect your privacy.
                                </p>
                            </form>

                            <div className="mt-8 pt-6 border-t border-black/5">
                                <div className="flex items-center gap-3">
                                    <Users className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                    <p className="text-sm text-black/60 text-left">
                                        <span className="font-semibold text-[#1E3A3A]">47 people</span> have claimed their leads today
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Hidden HTML form for Netlify to detect at build time (required for Next.js) */}
            <form name="websummit-leads" data-netlify="true" hidden>
                <input type="text" name="fullName" />
                <input type="email" name="email" />
                <input type="text" name="company" />
                <input type="text" name="jobTitle" />
                <input type="text" name="targetMarket" />
                <input type="tel" name="phone" />
            </form>

            <Footer />
        </>
    );
}
