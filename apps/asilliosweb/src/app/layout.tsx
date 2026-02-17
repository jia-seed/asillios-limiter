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
  title: "Asillios - Rate Limiting for LLM Apps",
  description: "Exceptional TypeScript library for per-user rate limiting with OpenAI & Anthropic APIs. Prevent extraordinary API bills while offering free tiers.",
  icons: {
    icon: "/greek.png",
  },
  metadataBase: new URL('https://redbirdcap.com'),
  alternates: {
    canonical: '/',
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
