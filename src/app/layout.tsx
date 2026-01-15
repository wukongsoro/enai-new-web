import type { Metadata, Viewport } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { SITE_URL, buildCanonicalUrl, defaultKeywords, primaryGeoRegion } from "@/lib/seo";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: "ENAI | Autonomous Revenue Execution Platform",
  description: "ENAI is the autonomous revenue execution platform for enterprise sales teams. End-to-end pipeline generation from research to booked meeting without manual work.",
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
    title: "ENAI | Autonomous Revenue Execution Platform",
    description: "End-to-end pipeline generation for enterprise sales teams. From research to booked meeting in 60 seconds, autonomously.",
    url: buildCanonicalUrl('/'),
    siteName: "Enai AI",
    images: [
      {
        url: `${SITE_URL}/social-share-image.png`,
        width: 1200,
        height: 630,
        alt: "ENAI | Autonomous Revenue Execution Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ENAI | Autonomous Revenue Execution Platform",
    description: "End-to-end pipeline generation for enterprise sales teams. From research to booked meeting in 60 seconds, autonomously.",
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
    "fb:app_id": "YOUR_FACEBOOK_APP_ID",
    'geo.region': primaryGeoRegion,
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
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400..700&family=Inter+Tight:wght@500;600;700&family=Playfair+Display:wght@400;500;600&display=swap"
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
                  "legalName": "ENAI Inc.",
                  "alternateName": "Enai.ai",
                  "url": "https://www.enai.ai",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.enai.ai/enai-logo.png",
                    "width": 512,
                    "height": 512
                  },
                  "description": "Enai AI (enai.ai) is the leading autonomous revenue execution platform for enterprise organizations, automating end-to-end sales workflows from research to revenue. We are a commercial technology company, NOT the European Network for Academic Integrity.",
                  "disambiguatingDescription": "Commercial autonomous revenue execution SaaS platform founded in 2024, providing AI-powered systems for enterprise sales teams. Not to be confused with European Network for Academic Integrity (ENAI).",
                  "slogan": "Autonomous Revenue Execution Platform",
                  "knowsAbout": [
                    "Autonomous Revenue Execution",
                    "Sales Force Automation",
                    "Enterprise AI",
                    "Sales Prospecting",
                    "Lead Qualification",
                    "Pipeline Generation"
                  ],
                  "founder": {
                    "@type": "Person",
                    "name": "Nikhil Nehra",
                    "jobTitle": "Founder & CEO",
                    "url": "https://www.linkedin.com/in/nikhilnehra"
                  },
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
                  "areaServed": [
                    {
                      "@type": "City",
                      "name": "London"
                    },
                    {
                      "@type": "City",
                      "name": "New York"
                    },
                    {
                      "@type": "City",
                      "name": "San Francisco"
                    },
                    {
                      "@type": "City",
                      "name": "Boston"
                    },
                    {
                      "@type": "City",
                      "name": "Austin"
                    },
                    {
                      "@type": "City",
                      "name": "Seattle"
                    },
                    {
                      "@type": "City",
                      "name": "Amsterdam"
                    },
                    {
                      "@type": "City",
                      "name": "Berlin"
                    },
                    {
                      "@type": "City",
                      "name": "Paris"
                    },
                    {
                      "@type": "City",
                      "name": "Singapore"
                    },
                    {
                      "@type": "City",
                      "name": "Sydney"
                    }
                  ],
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
                  "@id": "https://www.enai.ai/#nikhil-nehra",
                  "name": "Nikhil Nehra",
                  "jobTitle": "Founder & CEO",
                  "worksFor": {
                    "@id": "https://www.enai.ai/#organization"
                  },
                  "description": "Founder and CTO of ENAI, leading the technical architecture and development of the platform's autonomous revenue engine. Expert in scalable distributed systems.",
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
                  "inLanguage": "en-US",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.enai.ai/blog?search={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "LocalBusiness",
                  "name": "Enai AI",
                  "image": "https://www.enai.ai/enai-logo.png",
                  "@id": "https://www.enai.ai",
                  "url": "https://www.enai.ai",
                  "telephone": "",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "128 City Road",
                    "addressLocality": "London",
                    "postalCode": "EC1V 2NX",
                    "addressCountry": "GB"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 51.5271,
                    "longitude": -0.0857
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday"
                    ],
                    "opens": "09:00",
                    "closes": "18:00"
                  },
                  "sameAs": [
                    "https://twitter.com/enai_ai",
                    "https://www.linkedin.com/company/enai-ai"
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        {/* Facebook Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            className="hidden"
            src="https://www.facebook.com/tr?id=YOUR_FACEBOOK_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Facebook Pixel Code */}

        {/* Google Analytics (if needed) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />

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
        <Script
          src="https://enai.statuspage.io/embed/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}