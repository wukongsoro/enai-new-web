import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enai.ai - AI-Powered Sales Automation for B2B | AI Workers for Sales Teams in London UK",
  description: "Transform your B2B sales with Enai.ai's AI workers in London. Our AI agents automate lead qualification, market research, and personalized outreach to help UK businesses scale efficiently and increase revenue by 40%.",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover",
  keywords: "AI sales automation UK, B2B AI tools London, sales AI United Kingdom, lead generation AI UK, AI-powered sales London, AI workers for sales UK, sales process automation Britain, B2B sales software London, AI sales agents UK, automated lead qualification London",
  authors: [{ name: "Enai.ai" }],
  creator: "Enai.ai",
  publisher: "Enai.ai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.enai.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Enai.ai - AI-Powered Sales Automation for B2B | AI Workers for Sales Teams in London UK",
    description: "Transform your B2B sales with Enai.ai's AI workers in London. Our AI agents automate lead qualification, market research, and personalized outreach to help UK businesses scale efficiently and increase revenue by 40%.",
    url: "https://www.enai.ai/",
    siteName: "Enai.ai",
    images: [
      {
        url: "https://www.enai.ai/enai-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Enai.ai - AI-Powered Sales Automation",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enai - AI-Powered Sales Automation for B2B | AI Workers for Sales Teams in London UK",
    description: "Transform your B2B sales with Enai.ai's AI workers in London. Our AI agents automate lead qualification, market research, and personalized outreach to help UK businesses scale efficiently and increase revenue by 40%.",
    creator: "@enai_ai",
    site: "@enai_ai",
    images: ["https://www.enai.ai/enai-twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/enai-logo.png", sizes: "any", type: "image/png" },
    ],
    apple: [
      { url: "/enai-logo.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/enai-logo.png" },
      { rel: "android-chrome-512x512", url: "/enai-logo.png" },
    ],
  },
  manifest: "https://enai.ai/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Enai.ai",
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#ffffff",
    "geo.region": "GB-LND",
    "geo.placename": "London, Harrow, Greater London",
    "geo.position": "51.5919;-0.3392",
    "geo.country": "United Kingdom",
    "ICBM": "51.5919, -0.3392",
    "DC.coverage": "London, UK",
    "location": "London, United Kingdom",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
