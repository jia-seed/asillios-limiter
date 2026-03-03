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
  title: "Asillios - Rate Limiting Library for LLM Usage Tracking & API Cost Control",
  description: "Open source TypeScript library for per-user rate limiting, usage tracking, and threshold alerts. Control OpenAI & Anthropic API costs with smart usage monitoring.",
  keywords: ["rate limiting", "usage tracking", "API limiting", "OpenAI rate limiter", "Anthropic rate limiter", "token tracking", "usage synonym", "limiting factors"],
  authors: [{ name: "Asillios Team" }],
  creator: "Asillios",
  publisher: "Asillios",
  metadataBase: new URL("https://www.asillios.com"),
  alternates: {
    canonical: "https://www.asillios.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.asillios.com",
    title: "Asillios - Rate Limiting Library for LLM Usage Tracking",
    description: "Open source TypeScript library for per-user rate limiting, usage tracking, and threshold alerts. Control OpenAI & Anthropic API costs.",
    siteName: "Asillios",
    images: [
      {
        url: "/greek.png",
        width: 400,
        height: 400,
        alt: "Asillios - Rate Limiting Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asillios - Rate Limiting Library for LLM Usage Tracking",
    description: "Open source TypeScript library for per-user rate limiting, usage tracking, and threshold alerts.",
    images: ["/greek.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/greek.png",
    apple: "/greek.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Asillios",
    "description": "Open source TypeScript library for per-user rate limiting, usage tracking, and threshold alerts for LLM applications",
    "url": "https://www.asillios.com",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Cross-platform",
    "programmingLanguage": "TypeScript",
    "codeRepository": "https://github.com/audgeviolin07/asillios-limiter",
    "license": "https://github.com/audgeviolin07/asillios-limiter/blob/main/LICENSE",
    "downloadUrl": "https://www.npmjs.com/package/asillios-limiter",
    "author": {
      "@type": "Organization",
      "name": "Asillios Team"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
