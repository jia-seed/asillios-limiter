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
  title: "Shiplight - Premium LED Light Bulbs & LED Lighting Solutions",
  description: "Shop premium LED light bulbs, LED light strips, and commercial shop lights. Energy-efficient lighting solutions with long-lasting durability and bright illumination.",
  keywords: "led light bulbs, led light strips, shop lights led, led lighting, energy efficient bulbs, commercial lighting",
  authors: [{ name: "Shiplight" }],
  creator: "Shiplight",
  publisher: "Shiplight",
  robots: "index, follow",
  alternates: {
    canonical: "https://shiplight.ai",
  },
  openGraph: {
    title: "Shiplight - Premium LED Light Bulbs & LED Lighting Solutions",
    description: "Shop premium LED light bulbs, LED light strips, and commercial shop lights. Energy-efficient lighting solutions.",
    url: "https://shiplight.ai",
    siteName: "Shiplight",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiplight - Premium LED Light Bulbs & LED Lighting Solutions",
    description: "Shop premium LED light bulbs, LED light strips, and commercial shop lights. Energy-efficient lighting solutions.",
    creator: "@shiplight",
  },
  icons: {
    icon: "/greek.png",
  },
  verification: {
    google: "google-site-verification-placeholder",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://shiplight.ai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Shiplight",
              "url": "https://shiplight.ai",
              "logo": "https://shiplight.ai/greek.png",
              "description": "Premium LED lighting solutions including LED light bulbs, LED light strips, and commercial shop lights.",
              "sameAs": [
                "https://twitter.com/shiplight",
                "https://github.com/shiplight"
              ]
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
