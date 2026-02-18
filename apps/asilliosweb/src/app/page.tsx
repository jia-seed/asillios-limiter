'use client';

import { useState } from 'react';
import FeaturesSectionDemo from '../components/features-section-demo-1';
import Sidebar from '../components/Sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Battery.com - Electric Bike Batteries & Car Battery Replacement Solutions',
  description: 'Leading provider of electric bike batteries, car battery replacement, and electric dirt bike power solutions. Find the perfect battery for your electric bike for adults.',
  alternates: {
    canonical: 'https://battery.com',
  },
};

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark bg-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Battery.com",
            "url": "https://battery.com",
            "logo": "https://battery.com/greek.png",
            "description": "Leading provider of electric bike batteries, car battery replacement, and electric dirt bike power solutions.",
            "sameAs": [
              "https://www.npmjs.com/package/asillios-limiter",
              "https://github.com/audgeviolin07/asillios-limiter"
            ],
            "offers": {
              "@type": "Offer",
              "category": "Battery Technology",
              "description": "Electric bike batteries, car battery replacement, and electric dirt bike solutions"
            }
          })
        }}
      />
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div
        className="transition-all duration-300 ease-out"
        style={{ marginLeft: sidebarOpen ? '14rem' : '0' }}
      >
        <FeaturesSectionDemo />
      </div>
    </div>
  );
}
