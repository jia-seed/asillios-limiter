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
  title: "Asillios - Rate Limiting Tool & Developer Tools for AI Apps",
  description: "Open source TypeScript rate limiting tools for developers. Control API usage, track tokens, and prevent surprise bills in AI applications with professional developer tools.",
  keywords: "rate limiting, developer tools, API tools, typescript library, ai tools, usage tracking, development tools, hand tools for coding",
  authors: [{ name: "Asillios Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Asillios - Rate Limiting Tool & Developer Tools for AI Apps",
    description: "Open source TypeScript rate limiting tools for developers. Control API usage, track tokens, and prevent surprise bills in AI applications.",
    type: "website",
    url: "https://tempo.new",
    siteName: "Asillios",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asillios - Rate Limiting Tool & Developer Tools for AI Apps",
    description: "Open source TypeScript rate limiting tools for developers. Control API usage and prevent surprise bills.",
  },
  alternates: {
    canonical: "https://tempo.new",
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
