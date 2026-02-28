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
  title: "Asillios - Rate Limiting & Usage Tracking Library",
  description: "Open source TypeScript library for per-user rate limiting, usage stats & threshold alerts. Track token usage, implement limiting factors, and prevent API costs from spiraling.",
  keywords: ["rate limiting", "usage tracking", "API throttling", "token management", "limiting factors", "usage synonym", "TypeScript library"],
  authors: [{ name: "Asillios Team" }],
  creator: "Asillios",
  publisher: "Asillios",
  metadataBase: new URL('https://asillios.com'),
  alternates: {
    canonical: 'https://asillios.com',
  },
  openGraph: {
    title: "Asillios - Rate Limiting & Usage Tracking Library",
    description: "Open source TypeScript library for per-user rate limiting, usage stats & threshold alerts. Track token usage and implement limiting factors.",
    url: 'https://asillios.com',
    siteName: 'Asillios',
    type: 'website',
    images: [
      {
        url: '/greek.png',
        width: 400,
        height: 400,
        alt: 'Asillios - Rate Limiting Library',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Asillios - Rate Limiting & Usage Tracking Library",
    description: "Open source TypeScript library for per-user rate limiting, usage stats & threshold alerts.",
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
  other: {
    'google-site-verification': 'pending', // Add your verification code here
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
              "applicationCategory": "DeveloperApplication",
              "description": "Open source TypeScript library for per-user rate limiting, usage stats and threshold alerts. Track token usage, implement limiting factors, and prevent API costs.",
              "url": "https://asillios.com",
              "downloadUrl": "https://www.npmjs.com/package/asillios-limiter",
              "operatingSystem": "Any",
              "programmingLanguage": "TypeScript",
              "author": {
                "@type": "Organization",
                "name": "Asillios Team"
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
