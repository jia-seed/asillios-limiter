'use client';

import { useState } from 'react';
import FeaturesSectionDemo from '../components/features-section-demo-1';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark bg-black min-h-screen">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <main
        className="transition-all duration-300 ease-out"
        style={{ marginLeft: sidebarOpen ? '14rem' : '0' }}
      >
        <FeaturesSectionDemo />
      </main>
    </div>
  );
}
