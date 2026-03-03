'use client';

import { useState } from 'react';
import FeaturesSectionDemo from '../components/features-section-demo-1';
import Sidebar from '../components/Sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Asillios - TypeScript Rate Limiting Library for OpenAI & Anthropic",
  description: "Control API usage and costs with Asillios. Open source TypeScript library for per-user rate limiting, usage tracking, and threshold alerts.",
  keywords: ["rate limiting library", "usage synonym", "limiting factors", "OpenAI rate limiting", "Anthropic usage tracking", "API cost control"],
  alternates: {
    canonical: "https://www.asillios.com",
  },
};

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark bg-black min-h-screen">
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
