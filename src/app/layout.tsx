import type { Metadata, Viewport } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import GoogleAnalytics from "@/components/analytics/google-analytics";
import { SITE_URL, buildCanonicalUrl, defaultKeywords, primaryGeoRegion } from "@/lib/seo";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: "ENAI | The Revenue Operating System",
  description: "ENAI is the Revenue Operating System for governed execution in complex B2B markets, connecting market signals, buying systems, customer policy, and seller handoff.",
  keywords: defaultKeywords,
  authors: [{ name: "Nikhil Nehra", url: "https://www.linkedin.com/in/nikhil-nehra-57716a23b" }],
  creator: "Nikhil Nehra",
  publisher: "Enai AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: buildCanonicalUrl('/'),
    languages: {
      'en-US': SITE_URL,
      'en-GB': SITE_URL,
      'en': SITE_URL,
    },
  },
  openGraph: {
    title: "ENAI | The Revenue Operating System",
    description: "The Revenue Operating System for governed execution across market signals, buying systems, customer policy, and seller handoff.",
    url: buildCanonicalUrl('/'),
    siteName: "Enai AI",
    images: [
      {
        url: `${SITE_URL}/social-share-image.png`,
        width: 1200,
        height: 630,
        alt: "ENAI | The Revenue Operating System",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ENAI | The Revenue Operating System",
    description: "The Revenue Operating System for governed execution across market signals, buying systems, customer policy, and seller handoff.",
    creator: "@enai_ai",
    site: "@enai_ai",
    images: [`${SITE_URL}/social-share-image.png`],
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
    'geo.region': primaryGeoRegion,
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
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400..700&family=Inter+Tight:wght@500;600;700&family=Playfair+Display:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap"
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
                  "@id": "https://enai.ai/#organization",
                  "name": "Enai AI",
                  "alternateName": "Enai.ai",
                  "url": "https://enai.ai",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://enai.ai/enai-logo.png",
                    "width": 512,
                    "height": 512
                  },
                  "description": "ENAI is the Revenue Operating System for governed revenue execution in complex vertical markets, connecting market signals, buying systems, customer policy, qualification, and seller handoff.",
                  "disambiguatingDescription": "Commercial revenue technology company founded in 2024. Distinct from the European Network for Academic Integrity.",
                  "slogan": "The Revenue Operating System",
                  "knowsAbout": [
                    "Revenue Operating System",
                    "Governed Revenue Execution",
                    "Enterprise AI Governance",
                    "Buying Committee Mapping",
                    "Vertical Revenue Workflows",
                    "Seller Handoff"
                  ],
                  "founder": [
                    {
                      "@type": "Person",
                      "name": "Nikhil Nehra",
                      "jobTitle": "Founder & CEO",
                      "url": "https://www.linkedin.com/in/nikhil-nehra-57716a23b"
                    },
                    {
                      "@type": "Person",
                      "name": "Zeeshan Idrees",
                      "jobTitle": "Co-Founder",
                      "url": "https://linkedin.com/in/zidrees"
                    }
                  ],
                  "foundingDate": "2024",
                  "foundingLocation": {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "London",
                      "addressCountry": "GB"
                    }
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "128 City Road",
                    "addressLocality": "London",
                    "postalCode": "EC1V 2NX",
                    "addressCountry": "GB"
                  },
                  "areaServed": "Worldwide",
                  "sameAs": [
                    "https://twitter.com/enai_ai",
                    "https://www.linkedin.com/company/enai-ai"
                  ],
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "contactType": "Sales",
                      "url": "https://calendly.com/enai-ai2024/30min",
                      "availableLanguage": ["en"],
                      "areaServed": "Worldwide"
                    }
                  ]
                },
                {
                  "@type": "Person",
                  "@id": "https://enai.ai/#nikhil-nehra",
                  "name": "Nikhil Nehra",
                  "jobTitle": "Founder & CEO",
                  "worksFor": {
                    "@id": "https://enai.ai/#organization"
                  },
                  "description": "Founder and CEO of ENAI, leading the architecture and development of the company's governed revenue workflow platform.",
                  "url": "https://www.linkedin.com/in/nikhil-nehra-57716a23b",
                  "sameAs": [
                    "https://www.linkedin.com/in/nikhil-nehra-57716a23b",
                    "https://twitter.com/niknehra"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://enai.ai/#website",
                  "url": "https://enai.ai",
                  "name": "Enai AI",
                  "publisher": {
                    "@id": "https://enai.ai/#organization"
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
        {children}
        <GoogleAnalytics />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
