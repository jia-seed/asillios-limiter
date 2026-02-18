import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LED Shop Lights - Commercial Grade LED Lighting | Shiplight',  
  description: 'High-performance LED shop lights for garages, workshops, and commercial spaces. Linkable design, 5000K daylight, 50,000+ hour lifespan. Easy installation.',
  keywords: 'led shop lights, shop lights led, commercial led lighting, garage lighting, workshop lights, linkable led lights',
  alternates: {
    canonical: 'https://shiplight.ai/shop-lights',
  },
  openGraph: {
    title: 'LED Shop Lights - Commercial Grade LED Lighting | Shiplight',
    description: 'High-performance LED shop lights for garages, workshops, and commercial spaces. Linkable design with 50,000+ hour lifespan.',
    url: 'https://shiplight.ai/shop-lights',
  },
};

export default function ShopLightsPage() {
  const shopLightSizes = [
    {
      name: '2ft LED Shop Light',
      wattage: '20W',
      lumens: '2,400',
      equivalent: '(40W Fluorescent)',
      applications: ['Small workshops', 'Utility rooms', 'Closets']
    },
    {
      name: '4ft LED Shop Light', 
      wattage: '40W',
      lumens: '4,800',
      equivalent: '(80W Fluorescent)',
      applications: ['Home garages', 'Workbenches', 'Laundry rooms']
    },
    {
      name: '8ft LED Shop Light',
      wattage: '80W', 
      lumens: '9,600',
      equivalent: '(160W Fluorescent)',
      applications: ['Commercial spaces', 'Large workshops', 'Warehouses']
    }
  ];

  const mountingOptions = [
    {
      type: 'Surface Mount',
      description: 'Direct ceiling installation with included mounting hardware',
      bestFor: 'Finished ceilings, easy installation'
    },
    {
      type: 'Chain/Cable Hang',
      description: 'Suspended installation for optimal light distribution',  
      bestFor: 'High ceilings, adjustable height'
    },
    {
      type: 'Grid/T-Bar Mount',
      description: 'Drop ceiling installation with specialized brackets',
      bestFor: 'Commercial drop ceiling systems'
    }
  ];

  return (
    <div className="dark bg-black min-h-screen">
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-neutral-400">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-white">LED Shop Lights</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            LED Shop Lights
          </h1>
          <p className="text-xl text-neutral-300 mb-6 max-w-3xl">
            Illuminate your workspace with commercial-grade LED shop lights. Perfect for garages, workshops, 
            warehouses, and any space requiring bright, reliable lighting. Linkable design for continuous runs.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-teal-900/30 border border-teal-700 rounded-lg px-4 py-2">
              <span className="text-teal-300 font-medium">5000K Daylight</span>
            </div>
            <div className="bg-teal-900/30 border border-teal-700 rounded-lg px-4 py-2">
              <span className="text-teal-300 font-medium">Linkable Design</span>
            </div>
            <div className="bg-teal-900/30 border border-teal-700 rounded-lg px-4 py-2">
              <span className="text-teal-300 font-medium">50,000+ Hours</span>
            </div>
          </div>
        </div>

        {/* Shop Light Sizes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Choose Your Size</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {shopLightSizes.map((light, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{light.name}</h3>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-300">{light.wattage}</div>
                    <div className="text-xs text-neutral-400">Power Draw</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-300">{light.lumens}</div>
                    <div className="text-xs text-neutral-400">Lumens</div>
                  </div>
                </div>

                <p className="text-neutral-400 text-sm mb-4 text-center">{light.equivalent}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-neutral-400 mb-2">Ideal Applications:</h4>
                  <ul className="space-y-1">
                    {light.applications.map((app, i) => (
                      <li key={i} className="text-sm text-teal-300">✓ {app}</li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded transition-colors">
                  Shop {light.name}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose LED Shop Lights?</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Instant Bright Lighting</h3>
                  <p className="text-neutral-300">Unlike fluorescent fixtures, LED shop lights provide instant full brightness with no warm-up time or flickering.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                    <path d="M8 2v4M16 2v4M3 10h18M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Ultra Long Lifespan</h3>
                  <p className="text-neutral-300">50,000+ hour rated life means decades of reliable operation with minimal maintenance and replacement costs.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Linkable Design</h3>
                  <p className="text-neutral-300">Connect multiple fixtures for continuous lighting runs. Perfect for long workspaces and commercial applications.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                    <path d="M12 3v18M8 7l8 8M8 15l8-8"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Easy Installation</h3>
                  <p className="text-neutral-300">Surface mount, chain hang, or T-bar installation options. Includes all mounting hardware for quick setup.</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Technical Specifications</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Color Temperature:</span>
                  <span className="text-white">5000K Daylight</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">CRI Rating:</span>
                  <span className="text-white">80+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Input Voltage:</span>
                  <span className="text-white">120-277V AC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Operating Temp:</span>
                  <span className="text-white">-4°F to 104°F</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Dimming:</span>
                  <span className="text-white">0-10V Compatible</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Warranty:</span>
                  <span className="text-white">5 Year Limited</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-teal-900/20 border border-teal-700 rounded">
                <h4 className="text-teal-300 font-medium mb-2">Energy Savings Calculator</h4>
                <p className="text-neutral-300 text-sm mb-2">
                  A 4ft LED shop light uses 40W compared to 80W for fluorescent equivalents.
                </p>
                <p className="text-teal-300 text-sm font-medium">
                  Save $50+ per fixture annually on electricity costs!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mounting Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Installation Options</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {mountingOptions.map((option, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{option.type}</h3>
                <p className="text-neutral-300 mb-4">{option.description}</p>
                <div className="text-sm">
                  <span className="text-neutral-400">Best for: </span>
                  <span className="text-teal-300">{option.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Applications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Perfect for Every Workspace</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                  <path d="M2 20h20M4 20V8l8-6 8 6v12M8 12h8v8H8z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Home Garages</h3>
              <p className="text-neutral-400 text-sm">Bright, reliable lighting for automotive work and storage areas.</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Workshops</h3>
              <p className="text-neutral-400 text-sm">Professional-grade illumination for detailed work and craftsmanship.</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 3h4v4M8 3H4v4"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Warehouses</h3>
              <p className="text-neutral-400 text-sm">High-bay lighting solutions for storage and distribution facilities.</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                  <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16M3 21h18M9 9h6M9 13h6"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Commercial</h3>
              <p className="text-neutral-400 text-sm">Retail stores, offices, and commercial spaces requiring bright lighting.</p>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Complete Your LED Lighting</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/led-light-bulbs" className="group bg-neutral-900 border border-neutral-800 hover:border-teal-600 rounded-lg p-6 transition-colors">
              <h3 className="text-lg font-semibold text-white group-hover:text-teal-300 mb-2">LED Light Bulbs</h3>
              <p className="text-neutral-400 text-sm">Energy-efficient LED bulbs for fixtures, lamps, and general lighting needs.</p>
            </Link>

            <Link href="/led-light-strips" className="group bg-neutral-900 border border-neutral-800 hover:border-teal-600 rounded-lg p-6 transition-colors">
              <h3 className="text-lg font-semibold text-white group-hover:text-teal-300 mb-2">LED Light Strips</h3>
              <p className="text-neutral-400 text-sm">Flexible LED strips perfect for accent lighting and decorative applications.</p>
            </Link>

            <Link href="/" className="group bg-neutral-900 border border-neutral-800 hover:border-teal-600 rounded-lg p-6 transition-colors">
              <h3 className="text-lg font-semibold text-white group-hover:text-teal-300 mb-2">Browse All LEDs</h3>
              <p className="text-neutral-400 text-sm">Explore our complete collection of premium LED lighting solutions.</p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}