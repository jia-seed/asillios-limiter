import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Asillios - Per-User Rate Limiting Library for OpenAI & Anthropic APIs",
  description: "Asillios is an open source TypeScript library for per-user rate limiting, usage tracking, and threshold alerts. Control API costs and prevent usage spikes.",
  keywords: ["rate limiting", "usage tracking", "OpenAI", "Anthropic", "API limiting", "token limiting", "usage synonym", "limiting factors", "TypeScript"],
  authors: [{ name: "Asillios Team" }],
  creator: "Asillios",
  publisher: "Asillios",
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
  alternates: {
    canonical: "https://www.asillios.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.asillios.com",
    siteName: "Asillios",
    title: "Asillios - Per-User Rate Limiting Library for OpenAI & Anthropic APIs",
    description: "Open source TypeScript library for per-user rate limiting, usage tracking, and threshold alerts. Control API costs and prevent usage spikes.",
    images: [
      {
        url: "https://www.asillios.com/greek.png",
        width: 400,
        height: 400,
        alt: "Asillios - Rate limiting library logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asillios - Per-User Rate Limiting Library",
    description: "Open source TypeScript library for per-user rate limiting, usage tracking, and threshold alerts.",
    images: ["https://www.asillios.com/greek.png"],
  },
  icons: {
    icon: "/greek.png",
    shortcut: "/greek.png",
    apple: "/greek.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Asillios",
              "description": "Open source TypeScript library for per-user rate limiting, usage tracking, and threshold alerts for OpenAI and Anthropic APIs",
              "url": "https://www.asillios.com",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Any",
              "programmingLanguage": "TypeScript",
              "author": {
                "@type": "Organization",
                "name": "Asillios",
                "url": "https://www.asillios.com"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
