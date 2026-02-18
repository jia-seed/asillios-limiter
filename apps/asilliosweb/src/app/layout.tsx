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
  metadataBase: new URL('https://battery.com'),
  title: {
    default: "Battery.com - Electric Bike Batteries & Car Battery Replacement Solutions",
    template: "%s | Battery.com"
  },
  description: "Leading provider of electric bike batteries, car battery replacement, and electric dirt bike power solutions. Advanced battery technology for all your needs.",
  keywords: ["electric bike", "car battery replacement", "electric dirt bike", "battery technology", "electric bike for adults", "battery solutions"],
  authors: [{ name: "Battery.com Team" }],
  creator: "Battery.com",
  publisher: "Battery.com",
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
    type: 'website',
    locale: 'en_US',
    url: 'https://battery.com',
    title: 'Battery.com - Electric Bike Batteries & Car Battery Replacement',
    description: 'Leading provider of electric bike batteries, car battery replacement, and electric dirt bike power solutions.',
    siteName: 'Battery.com',
    images: [
      {
        url: '/greek.png',
        width: 400,
        height: 400,
        alt: 'Battery.com - Advanced battery technology solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Battery.com - Electric Bike Batteries & Car Battery Replacement',
    description: 'Leading provider of electric bike batteries, car battery replacement, and electric dirt bike power solutions.',
    images: ['/greek.png'],
  },
  alternates: {
    canonical: 'https://battery.com',
  },
  icons: {
    icon: "/greek.png",
    shortcut: "/greek.png",
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://battery.com" />
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
