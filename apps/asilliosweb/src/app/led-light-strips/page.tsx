import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LED Light Strips - Flexible LED Lighting Solutions | Shiplight',
  description: 'Premium LED light strips for accent lighting, under-cabinet installation, and decorative applications. Cuttable, waterproof options with RGB and single-color variants.',
  keywords: 'led light strips, flexible led strips, RGB led strips, under cabinet lighting, accent lighting, waterproof led strips',
  alternates: {
    canonical: 'https://shiplight.ai/led-light-strips',
  },
  openGraph: {
    title: 'LED Light Strips - Flexible LED Lighting Solutions | Shiplight',
    description: 'Premium LED light strips for accent lighting and decorative applications. Cuttable and waterproof options available.',
    url: 'https://shiplight.ai/led-light-strips',
  },
};

export default function LEDStripsPage() {
  const stripTypes = [
    {
      name: 'RGB LED Strips',
      description: 'Color-changing LED strips with 16 million color combinations and dynamic effects.',
      specs: ['12V/24V options', '30/60 LEDs per meter', 'Music sync capable'],
      applications: ['Entertainment areas', 'Gaming setups', 'Mood lighting']
    },
    {
      name: 'Single Color LED Strips',
      description: 'Consistent, bright illumination in warm white, cool white, or daylight colors.',
      specs: ['2700K-6500K options', '120 LEDs per meter', 'High CRI 90+'],
      applications: ['Under-cabinet lighting', 'Cove lighting', 'Task lighting']
    },
    {
      name: 'Waterproof LED Strips',
      description: 'IP65/IP67 rated LED strips suitable for outdoor and wet location installations.',
      specs: ['Silicone coating', 'Marine-grade adhesive', 'UV resistant'],
      applications: ['Outdoor lighting', 'Bathroom lighting', 'Pool areas']
    }
  ];

  const installationTips = [
    'Measure your space carefully before ordering',
    'Use aluminum channels for better heat dissipation',
    'Connect power every 16 feet for consistent brightness',
    'Choose appropriate controllers for dimming needs',
    'Use proper connectors for cuts and corners'
  ];

  return (
    <div className="dark bg-black min-h-screen">
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-neutral-400">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-white">LED Light Strips</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            LED Light Strips
          </h1>
          <p className="text-xl text-neutral-300 mb-6 max-w-3xl">
            Transform any space with flexible LED light strips. Perfect for accent lighting, under-cabinet illumination, 
            and creative installations. Available in RGB color-changing and single-color options.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-teal-900/30 border border-teal-700 rounded-lg px-4 py-2">
              <span className="text-teal-300 font-medium">Cuttable Design</span>
            </div>
            <div className="bg-teal-900/30 border border-teal-700 rounded-lg px-4 py-2">
              <span className="text-teal-300 font-medium">Easy Installation</span>
            </div>
            <div className="bg-teal-900/30 border border-teal-700 rounded-lg px-4 py-2">
              <span className="text-teal-300 font-medium">App Control</span>
            </div>
          </div>
        </div>

        {/* LED Strip Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">LED Light Strip Options</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {stripTypes.map((strip, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{strip.name}</h3>
                <p className="text-neutral-300 mb-4">{strip.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-neutral-400 mb-2">Specifications:</h4>
                  <ul className="space-y-1">
                    {strip.specs.map((spec, i) => (
                      <li key={i} className="text-sm text-neutral-300">• {spec}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-neutral-400 mb-2">Perfect For:</h4>
                  <ul className="space-y-1">
                    {strip.applications.map((app, i) => (
                      <li key={i} className="text-sm text-teal-300">✓ {app}</li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded transition-colors">
                  Shop {strip.name}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Installation Guide */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Installation Made Simple</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Plan Your Layout</h3>
                    <p className="text-neutral-300">Measure your installation area and plan cut points. LED strips can be cut every 3 inches at designated marks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Clean & Prepare</h3>
                    <p className="text-neutral-300">Clean the mounting surface thoroughly. The adhesive backing works best on smooth, dry surfaces.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Install & Connect</h3>
                    <p className="text-neutral-300">Peel and stick the LED strip, then connect to your controller and power supply. Test before final installation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Pro Installation Tips</h3>
              <ul className="space-y-3">
                {installationTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-teal-400 mt-1">•</span>
                    <span className="text-neutral-300 text-sm">{tip}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-teal-900/20 border border-teal-700 rounded">
                <h4 className="text-teal-300 font-medium mb-2">Need Help?</h4>
                <p className="text-neutral-300 text-sm">
                  Our installation guides and video tutorials make it easy to get professional results. 
                  Contact our support team for personalized assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Popular LED Strip Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Under Cabinet Lighting</h3>
              <p className="text-neutral-300 mb-4">Illuminate countertops and workspaces with bright, even LED lighting.</p>
              <ul className="text-sm text-teal-300 space-y-1">
                <li>✓ Kitchen cabinets</li>
                <li>✓ Workshop benches</li>
                <li>✓ Display cases</li>
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Accent Lighting</h3>
              <p className="text-neutral-300 mb-4">Add ambiance and highlight architectural features with decorative LED strips.</p>
              <ul className="text-sm text-teal-300 space-y-1">
                <li>✓ Cove lighting</li>
                <li>✓ Stair lighting</li>
                <li>✓ Architectural accents</li>
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Entertainment Areas</h3>
              <p className="text-neutral-300 mb-4">Create immersive lighting experiences with color-changing RGB LED strips.</p>
              <ul className="text-sm text-teal-300 space-y-1">
                <li>✓ Home theaters</li>
                <li>✓ Gaming setups</li>
                <li>✓ Party spaces</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Complete Your LED Setup</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/led-light-bulbs" className="group bg-neutral-900 border border-neutral-800 hover:border-teal-600 rounded-lg p-6 transition-colors">
              <h3 className="text-lg font-semibold text-white group-hover:text-teal-300 mb-2">LED Light Bulbs</h3>
              <p className="text-neutral-400 text-sm">Energy-efficient LED bulbs for all your lighting fixtures and lamps.</p>
            </Link>

            <Link href="/shop-lights" className="group bg-neutral-900 border border-neutral-800 hover:border-teal-600 rounded-lg p-6 transition-colors">
              <h3 className="text-lg font-semibold text-white group-hover:text-teal-300 mb-2">LED Shop Lights</h3>
              <p className="text-neutral-400 text-sm">Bright, linkable LED fixtures perfect for garages and workshops.</p>
            </Link>

            <Link href="/" className="group bg-neutral-900 border border-neutral-800 hover:border-teal-600 rounded-lg p-6 transition-colors">
              <h3 className="text-lg font-semibold text-white group-hover:text-teal-300 mb-2">All LED Solutions</h3>
              <p className="text-neutral-400 text-sm">Browse our complete range of premium LED lighting products.</p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}