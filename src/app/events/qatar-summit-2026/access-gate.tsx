"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { Lock, ArrowRight } from "lucide-react";

// Secret access token - only people with QR code can access
const VALID_ACCESS_TOKEN = "ENAI-INVESTOR-2026";

function AccessGateContent({ children }: { children: React.ReactNode }) {
    const searchParams = useSearchParams();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [inputCode, setInputCode] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        // Check URL parameter for access token
        const accessToken = searchParams.get("access");
        if (accessToken === VALID_ACCESS_TOKEN) {
            setIsAuthorized(true);
            // Store in session so they don't lose access on refresh
            sessionStorage.setItem("investor_access", "granted");
        } else if (sessionStorage.getItem("investor_access") === "granted") {
            // Already granted access in this session
            setIsAuthorized(true);
        }
        setIsLoading(false);
    }, [searchParams]);

    const handleCodeSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputCode.trim().toUpperCase() === VALID_ACCESS_TOKEN) {
            setIsAuthorized(true);
            sessionStorage.setItem("investor_access", "granted");
            setError("");
        } else {
            setError("Invalid access code. Please scan the QR code or enter the correct code.");
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#1E3A3A] via-[#2A4A4A] to-[#0D1F1F] flex items-center justify-center">
                <div className="animate-pulse text-white/60">Loading...</div>
            </div>
        );
    }

    if (!isAuthorized) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#1E3A3A] via-[#2A4A4A] to-[#0D1F1F] flex items-center justify-center px-6">
                <div className="max-w-md w-full">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 text-center">
                        {/* Lock Icon */}
                        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-400/20 to-amber-500/10 rounded-full flex items-center justify-center">
                            <Lock className="w-10 h-10 text-amber-300" />
                        </div>

                        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Investor Access Only
                        </h1>
                        <p className="text-white/60 mb-8">
                            This page is restricted to authorized investors. Please scan the QR code or enter your access code below.
                        </p>

                        <form onSubmit={handleCodeSubmit} className="space-y-4">
                            <input
                                type="text"
                                value={inputCode}
                                onChange={(e) => setInputCode(e.target.value)}
                                placeholder="Enter access code"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50 transition-all"
                            />
                            {error && (
                                <p className="text-red-400 text-sm">{error}</p>
                            )}
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black px-6 py-3 font-semibold hover:from-amber-300 hover:to-amber-400 transition-all duration-300 rounded-lg"
                            >
                                Access Page
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>

                        <div className="mt-8 pt-6 border-t border-white/10">
                            <p className="text-white/40 text-sm">
                                Need access? Contact{" "}
                                <a href="mailto:Nikhil@enai.ai" className="text-amber-300 hover:text-amber-200 transition-colors">
                                    Nikhil@enai.ai
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}

export default function AccessGate({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gradient-to-br from-[#1E3A3A] via-[#2A4A4A] to-[#0D1F1F] flex items-center justify-center">
                <div className="animate-pulse text-white/60">Loading...</div>
            </div>
        }>
            <AccessGateContent>{children}</AccessGateContent>
        </Suspense>
    );
}
