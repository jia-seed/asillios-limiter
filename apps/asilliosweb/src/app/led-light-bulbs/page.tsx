import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'LED Light Bulbs - Energy Efficient Lighting | Shiplight',
  description: 'Shop premium LED light bulbs with up to 80% energy savings. Wide selection of A19, BR30, PAR38 bulbs with 25,000+ hour lifespan. Free shipping available.',
  keywords: 'led light bulbs, energy efficient bulbs, LED A19, LED BR30, dimmable LED bulbs, long lasting bulbs',
  alternates: {
    canonical: 'https://shiplight.ai/led-light-bulbs',
  },
  openGraph: {
    title: 'LED Light Bulbs - Energy Efficient Lighting | Shiplight',
    description: 'Shop premium LED light bulbs with up to 80% energy savings. Wide selection with 25,000+ hour lifespan.',
    url: 'https://shiplight.ai/led-light-bulbs',
  },
};

export default function LEDBulbsPage() {
  const bulbTypes = [
    {
      name: 'A19 LED Bulbs',
      description: 'Standard household LED bulbs perfect for lamps, fixtures, and general lighting.',
      wattages: ['9W (60W equiv)', '13W (100W equiv)', '15W (120W equiv)'],
      features: ['Dimmable options', '2700K-5000K', 'Energy Star certified']
    },
    {
      name: 'BR30 LED Bulbs', 
      description: 'Recessed downlight LED bulbs ideal for cans and track lighting applications.',
      wattages: ['11W (65W equiv)', '15W (85W equiv)', '20W (120W equiv)'],
      features: ['Wide flood beam', '3000K-4000K', '90+ CRI rating']
    },
    {
      name: 'PAR38 LED Bulbs',
      description: 'Outdoor and spotlight LED bulbs for security, landscape, and accent lighting.',
      wattages: ['13W (90W equiv)', '18W (120W equiv)', '25W (150W equiv)'],
      features: ['Weather resistant', 'Narrow spot beam', 'Long throw distance']
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
            <li className="text-white">LED Light Bulbs</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Premium LED Light Bulbs
          </h1>
          <p className="text-xl text-neutral-300 mb-6 max-w-3xl">
            Upgrade to energy-efficient LED light bulbs and save up to 80% on your electricity bill. 
            Our premium LED bulbs offer 25,000+ hour lifespan with instant, flicker-free illumination.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-teal-900/30 border border-teal-700 rounded-lg px-4 py-2">
              <span className="text-teal-300 font-medium">80% Energy Savings</span>
            </div>
            <div className="bg-teal-900/30 border border-teal-700 rounded-lg px-4 py-2">
              <span className="text-teal-300 font-medium">25,000+ Hour Life</span>
            </div>
            <div className="bg-teal-900/30 border border-teal-700 rounded-lg px-4 py-2">
              <span className="text-teal-300 font-medium">Instant On</span>
            </div>
          </div>
        </div>

        {/* LED Bulb Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Popular LED Bulb Types</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bulbTypes.map((bulb, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{bulb.name}</h3>
                <p className="text-neutral-300 mb-4">{bulb.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-neutral-400 mb-2">Available Wattages:</h4>
                  <ul className="space-y-1">
                    {bulb.wattages.map((wattage, i) => (
                      <li key={i} className="text-sm text-neutral-300">• {wattage}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-neutral-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {bulb.features.map((feature, i) => (
                      <li key={i} className="text-sm text-teal-300">✓ {feature}</li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded transition-colors">
                  Shop {bulb.name}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose LED Light Bulbs?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">$</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Massive Energy Savings</h3>
                  <p className="text-neutral-300">LED light bulbs use up to 80% less energy than traditional incandescent bulbs, significantly reducing your electricity bills.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">⏰</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Ultra Long Lifespan</h3>
                  <p className="text-neutral-300">With 25,000+ hours of rated life, our LED bulbs last 25x longer than incandescent and 3x longer than CFLs.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🌱</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Environmentally Friendly</h3>
                  <p className="text-neutral-300">LED bulbs contain no mercury, produce less heat, and their longevity means fewer bulbs in landfills.</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">LED vs Traditional Comparison</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Energy Usage:</span>
                  <span className="text-teal-300">80% Less</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Lifespan:</span>
                  <span className="text-teal-300">25x Longer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Heat Generation:</span>
                  <span className="text-teal-300">90% Less</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Mercury Content:</span>
                  <span className="text-teal-300">None</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Warm-up Time:</span>
                  <span className="text-teal-300">Instant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Explore More LED Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/led-light-strips" className="group bg-neutral-900 border border-neutral-800 hover:border-teal-600 rounded-lg p-6 transition-colors">
              <h3 className="text-lg font-semibold text-white group-hover:text-teal-300 mb-2">LED Light Strips</h3>
              <p className="text-neutral-400 text-sm">Flexible LED strips for accent and decorative lighting applications.</p>
            </Link>

            <Link href="/shop-lights" className="group bg-neutral-900 border border-neutral-800 hover:border-teal-600 rounded-lg p-6 transition-colors">
              <h3 className="text-lg font-semibold text-white group-hover:text-teal-300 mb-2">LED Shop Lights</h3>
              <p className="text-neutral-400 text-sm">High-performance LED fixtures for workshops and commercial spaces.</p>
            </Link>

            <Link href="/" className="group bg-neutral-900 border border-neutral-800 hover:border-teal-600 rounded-lg p-6 transition-colors">
              <h3 className="text-lg font-semibold text-white group-hover:text-teal-300 mb-2">All LED Products</h3>
              <p className="text-neutral-400 text-sm">Browse our complete selection of energy-efficient LED lighting.</p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}