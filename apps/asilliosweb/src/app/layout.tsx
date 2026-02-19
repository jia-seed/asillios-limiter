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
  title: "Asillios - Scale Your App Without Surprise API Bills | Rate Limiting Library",
  description: "Scale your LLM applications safely with Asillios. Open source TypeScript library for per-user rate limiting, usage tracking, and cost control.",
  keywords: "rate limiting, scale for developers, API cost control, token tracking, OpenAI limits, Anthropic limits, TypeScript library",
  authors: [{ name: "Asillios Team" }],
  creator: "Asillios",
  publisher: "Asillios",
  metadataBase: new URL('https://asillios.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Asillios - Scale Your App Without Surprise API Bills",
    description: "Scale your LLM applications safely with Asillios. Open source TypeScript library for per-user rate limiting and cost control.",
    url: 'https://asillios.com',
    siteName: 'Asillios',
    type: 'website',
    images: [
      {
        url: '/greek.png',
        width: 400,
        height: 400,
        alt: 'Asillios - Rate Limiting Library for LLM Applications',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Asillios - Scale Your App Without Surprise API Bills",
    description: "Scale your LLM applications safely with Asillios. Open source rate limiting library.",
    images: ['/greek.png'],
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
    icon: "/greek.png",
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://asillios.com" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Asillios',
              description: 'Open source TypeScript library for per-user rate limiting and cost control in LLM applications',
              url: 'https://asillios.com',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Any',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock'
              },
              author: {
                '@type': 'Organization',
                name: 'Asillios Team'
              },
              downloadUrl: 'https://www.npmjs.com/package/asillios-limiter',
              softwareVersion: '0.1.0'
            })
          }}
        />
      </body>
    </html>
  );
}
