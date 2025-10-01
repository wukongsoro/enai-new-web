import type { Metadata, Viewport } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: "Enai AI - AI-Powered Sales Automation Platform | AI BDR Software for B2B Sales Teams",
  description: "Transform your B2B sales with Enai.ai's AI BDR agents. Automate lead qualification, prospecting, and personalized outreach. Scale your sales team 10x without hiring. Trusted by companies worldwide for AI sales automation.",
  keywords: "AI BDR software, AI sales automation platform, automated lead generation, AI SDR tools, AI outbound sales, B2B sales automation, AI prospecting tools, sales automation software, AI lead qualification, automated sales outreach, AI sales agents, sales development AI, outbound sales automation, AI powered sales tools, sales intelligence platform",
  authors: [{ name: "Nikhil Nehra", url: "https://www.linkedin.com/in/nikhil-nehra-57716a23b" }],
  creator: "Nikhil Nehra",
  publisher: "Enai AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.enai.ai'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': 'https://www.enai.ai',
      'en-GB': 'https://www.enai.ai',
      'en': 'https://www.enai.ai',
    },
  },
  openGraph: {
    title: "Enai AI - AI-Powered Sales Automation Platform | Scale Your B2B Sales 10x",
    description: "Transform your B2B sales with Enai.ai's AI BDR agents. Automate lead qualification, prospecting, and personalized outreach. Scale your sales team 10x without hiring. Trusted by companies worldwide.",
    url: "https://www.enai.ai/",
    siteName: "Enai AI",
    images: [
      {
        url: "https://www.enai.ai/enai-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Enai.ai - AI-Powered Sales Automation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enai AI - AI-Powered Sales Automation Platform | AI BDR Software",
    description: "Transform your B2B sales with Enai.ai's AI BDR agents. Automate lead qualification, prospecting, and personalized outreach. Scale your sales team 10x without hiring.",
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Enai.ai",
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#ffffff",
  },
  verification: {
    google: "verification_token",
    yandex: "verification_token",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400..700&family=Inter+Tight:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.enai.ai/#organization",
                  "name": "Enai AI",
                  "url": "https://www.enai.ai",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.enai.ai/enai-logo.png",
                    "width": 512,
                    "height": 512
                  },
                  "description": "AI-powered sales automation platform that transforms B2B sales with AI BDR agents",
                  "founder": {
                    "@type": "Person",
                    "name": "Nikhil Nehra",
                    "jobTitle": "Founder & CEO",
                    "url": "https://www.linkedin.com/in/nikhilnehra"
                  },
                  "foundingDate": "2024",
                  "sameAs": [
                    "https://twitter.com/enai_ai",
                    "https://www.linkedin.com/company/enai-ai"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Sales",
                    "url": "https://calendly.com/enai-ai2024/30min"
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://www.enai.ai/#nikhil-nehra",
                  "name": "Nikhil Nehra",
                  "jobTitle": "Founder & CEO",
                  "worksFor": {
                    "@id": "https://www.enai.ai/#organization"
                  },
                  "description": "Founder and CEO of Enai AI, a leading AI-powered sales automation platform. Expert in B2B sales automation, AI-driven lead generation, and scaling sales teams.",
                  "url": "https://www.linkedin.com/in/nikhil-nehra-57716a23b",
                  "sameAs": [
                    "https://www.linkedin.com/in/nikhil-nehra-57716a23b",
                    "https://twitter.com/niknehra"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.enai.ai/#website",
                  "url": "https://www.enai.ai",
                  "name": "Enai AI",
                  "publisher": {
                    "@id": "https://www.enai.ai/#organization"
                  },
                  "inLanguage": "en-US"
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
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
