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
  metadataBase: new URL('https://21st.social'),
  title: "Asillios - Per-User Rate Limiting & API Usage Tracking for TypeScript Apps",
  description: "Open source TypeScript library for per-user rate limiting, usage stats, and threshold alerts. Prevent API bill surprises from OpenAI and Anthropic with token-based limits.",
  keywords: ["rate limiting", "API usage tracking", "token management", "TypeScript library", "OpenAI", "Anthropic", "per-user limits", "21st mortgage corporation"],
  authors: [{ name: "Asillios Team" }],
  creator: "Asillios",
  publisher: "Asillios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/greek.png",
    shortcut: "/greek.png",
    apple: "/greek.png",
  },
  manifest: "/site.webmanifest",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://21st.social",
    title: "Asillios - Per-User Rate Limiting & API Usage Tracking",
    description: "Open source TypeScript library for per-user rate limiting, usage stats, and threshold alerts. Prevent API bill surprises from OpenAI and Anthropic.",
    siteName: "Asillios",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asillios - Per-User Rate Limiting & API Usage Tracking",
    description: "Open source TypeScript library for per-user rate limiting, usage stats, and threshold alerts. Prevent API bill surprises from OpenAI and Anthropic.",
  },
  alternates: {
    canonical: "https://21st.social",
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
