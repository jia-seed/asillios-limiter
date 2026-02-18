'use client';

import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image from "next/image";
import ShinyText from "./ShinyText";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Premium LED Light Bulbs",
      description:
        "Energy-efficient LED light bulbs with up to 80% less energy consumption. Long-lasting bulbs with 25,000+ hour lifespan and instant brightness.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 md:col-span-1 lg:col-span-4 border-b md:border-r lg:border-r border-neutral-800",
    },
    {
      title: "LED Light Strips",
      description:
        "Flexible LED light strips perfect for accent lighting, under-cabinet installation, and decorative applications with customizable lengths.",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 md:col-span-1 lg:col-span-2 border-b border-neutral-800",
    },
    {
      title: "Commercial Shop Lights",
      description:
        "High-performance LED shop lights for warehouses, garages, and commercial spaces. Bright, durable lighting that reduces operating costs.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 md:col-span-1 lg:col-span-3 border-b md:border-b lg:border-b-0 md:border-r lg:border-r border-neutral-800",
    },
    {
      title: "Smart LED Solutions",
      description:
        "Wi-Fi enabled smart LED bulbs with app control, dimming, color changing, and voice assistant compatibility for modern homes.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 md:col-span-1 lg:col-span-3 border-neutral-800",
    },
  ];


  return (
    <div className="relative z-20 max-w-7xl mx-auto pb-20">
      {/* Navbar */}
      <div className="sticky top-4 z-50 flex justify-center px-4">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="nav"
          className="dark:bg-black bg-black text-white px-6 py-2 flex items-center gap-6"
        >
          <a href="/" className="font-medium text-sm hover:text-neutral-300 transition-colors">Shiplight</a>
          <div className="h-4 w-px bg-neutral-700" />
          <a href="/led-light-bulbs" className="text-neutral-400 hover:text-white transition-colors text-sm">LED Bulbs</a>
          <a href="/led-light-strips" className="text-neutral-400 hover:text-white transition-colors text-sm">LED Strips</a>
          <a href="/shop-lights" className="text-neutral-400 hover:text-white transition-colors text-sm">Shop Lights</a>
        </HoverBorderGradient>
      </div>

      <div className="pt-16 pb-12 md:pt-20 lg:pt-32 lg:pb-16 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium mb-6">
              <ShinyText text="Premium LED Lighting Solutions" speed={3} />
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 font-normal leading-snug mb-4">
              Discover energy-efficient LED light bulbs, versatile LED light strips, and powerful shop lights for every space.
            </p>

            <p className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed mb-4">
              Shiplight offers premium LED lighting solutions designed for maximum energy efficiency, longevity, and brilliant illumination across residential and commercial applications.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-xs bg-teal-900/50 text-teal-300 px-3 py-1 rounded-full border border-teal-700">Energy Efficient</span>
              <span className="text-xs bg-teal-900/50 text-teal-300 px-3 py-1 rounded-full border border-teal-700">25,000+ Hour Lifespan</span>
              <span className="text-xs bg-teal-900/50 text-teal-300 px-3 py-1 rounded-full border border-teal-700">Instant On</span>
            </div>

            <div id="shop" className="flex flex-col sm:flex-row items-center gap-4 mb-8 scroll-mt-20">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="a"
                href="/led-light-bulbs"
                className="dark:bg-teal-900 bg-teal-900 text-white flex items-center space-x-2 px-6 py-3 hover:bg-teal-800"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 21H15M12 3C8.5 3 6 5.5 6 9C6 11 7 12.5 8 13.5C8.5 14 9 14.5 9 15V16C9 17 10 18 11 18H13C14 18 15 17 15 16V15C15 14.5 15.5 14 16 13.5C17 12.5 18 11 18 9C18 5.5 15.5 3 12 3Z"/>
                </svg>
                <span>Shop LED Bulbs</span>
              </HoverBorderGradient>

              <HoverBorderGradient
                containerClassName="rounded-full"
                as="a"
                href="/led-light-strips"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12H21M3 6H21M3 18H21"/>
                </svg>
                <span>LED Strips</span>
              </HoverBorderGradient>
            </div>

            {/* LED Benefits */}
            <div>
              <p className="text-neutral-500 text-xs mb-3">Why choose LED lighting solutions?</p>
              <div className="relative bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="text-teal-400">✓</span>
                    <span>Up to 80% energy savings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-teal-400">✓</span>
                    <span>25,000+ hour lifespan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-teal-400">✓</span>
                    <span>Instant brightness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-teal-400">✓</span>
                    <span>Mercury-free & eco-friendly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: LED Illustration */}
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/greek.png"
              alt="Premium LED lighting solutions showcase"
              title="Shiplight LED Lighting Solutions"
              width={400}
              height={400}
              priority
              sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 400px"
              className="opacity-80 w-48 h-48 md:w-64 md:h-64 lg:w-[400px] lg:h-[400px]"
            />
            <p className="text-xs md:text-sm text-neutral-500 text-center mt-4 md:mt-6 max-w-xs md:max-w-sm leading-relaxed px-4 md:px-0">
              <span className="text-neutral-200">Shiplight</span> illuminates spaces with premium <span className="text-neutral-200">LED technology</span>. From energy-efficient <a href="/led-light-bulbs" className="text-teal-400 hover:text-teal-300">LED light bulbs</a> to versatile <a href="/led-light-strips" className="text-teal-400 hover:text-teal-300">LED light strips</a> and powerful <a href="/shop-lights" className="text-teal-400 hover:text-teal-300">shop lights</a> - we brighten your world efficiently.
            </p>
          </div>
        </div>
      </div>

      <div id="features" className="relative scroll-mt-20 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 mt-6 border rounded-md border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>

      {/* LED Product Categories Section */}
      <div id="products" className="mt-20 px-4 md:px-8 space-y-8 scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-medium text-white text-center mb-12">Explore Our LED Lighting Categories</h2>

        <ProductCard
          title="LED Light Bulbs"
          description="Premium LED light bulbs available in various wattages and color temperatures. Perfect for residential and commercial lighting needs."
          features={[
            "A19, A21, BR30, PAR38 bulb types",
            "Dimmable options available", 
            "2700K-6500K color temperatures",
            "Energy Star certified models",
            "25,000+ hour rated life"
          ]}
          link="/led-light-bulbs"
        />

        <ProductCard
          title="LED Light Strips"
          description="Flexible LED light strips for accent lighting, under-cabinet illumination, and decorative applications with easy installation."
          features={[
            "Cuttable every 3 inches",
            "IP65 waterproof options",
            "RGB and single-color variants", 
            "Self-adhesive backing",
            "Controller and app compatible"
          ]}
          link="/led-light-strips"
        />

        <ProductCard
          title="Commercial Shop Lights"
          description="High-performance LED shop lights designed for warehouses, garages, workshops, and industrial applications."
          features={[
            "Linkable design for continuous runs",
            "5000K daylight color temperature",
            "Pull chain or wall switch options",
            "Easy surface or chain mounting",
            "50,000+ hour commercial rated"
          ]}
          link="/shop-lights"
        />

        <ProductCard
          title="Smart LED Solutions"
          description="WiFi-enabled smart LED bulbs with app control, voice assistant compatibility, and advanced scheduling features."
          features={[
            "Works with Alexa, Google, Siri",
            "16 million color options",
            "Sunrise/sunset scheduling",
            "Music sync capabilities",
            "Energy monitoring features"
          ]}
          link="/smart-led"
        />
      </div>

    </div>
  );
}

const ProductCard = ({ title, description, features, link }: { 
  title: string; 
  description: string; 
  features: string[];
  link: string;
}) => {
  return (
    <div className="rounded-lg overflow-hidden border border-neutral-800 bg-[#0d1117]">
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-neutral-800">
        <span className="text-sm text-white font-medium">{title}</span>
        <a 
          href={link}
          className="flex items-center gap-2 text-xs text-teal-400 hover:text-teal-300 transition-colors px-2 py-1 rounded hover:bg-teal-700/30"
        >
          View Products
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>
      <div className="p-4">
        <p className="text-neutral-300 text-sm mb-4 leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-neutral-400">
              <span className="text-teal-400 mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex py-6 h-full items-start justify-center">
      <div className="text-center w-full px-4">
        <div className="text-4xl md:text-6xl font-mono text-white mb-2">{progress}%</div>
        <div className="w-full max-w-[200px] md:max-w-[280px] mx-auto h-3 bg-neutral-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal-500 rounded-full transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-neutral-600 text-xs mt-2">energy savings with LED</div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-20 bg-gradient-to-t from-black to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonTwo = () => {
  const strips = [
    { id: '16ft', brightness: 85, shade: 'bg-teal-500' },
    { id: '32ft', brightness: 42, shade: 'bg-teal-700' },
    { id: '50ft', brightness: 91, shade: 'bg-teal-400' },
    { id: '65ft', brightness: 23, shade: 'bg-teal-800' },
  ];

  return (
    <div className="relative flex flex-col p-4 h-full overflow-hidden">
      <div className="space-y-3">
        {strips.map((strip) => (
          <div key={strip.id} className="flex items-center gap-3">
            <span className="text-neutral-500 text-xs font-mono w-16">{strip.id}</span>
            <div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                className={cn("h-full rounded-full", strip.shade)}
                initial={{ width: 0 }}
                animate={{ width: `${strip.brightness}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
            <span className="text-neutral-400 text-xs font-mono w-8">{strip.brightness}%</span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-10 bg-gradient-to-t from-black to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  const [alerts, setAlerts] = React.useState<{pct: string, shade: string}[]>([]);

  useEffect(() => {
    const thresholds = [
      { pct: '80%', shade: 'bg-teal-900 border-teal-700 text-white' },
      { pct: '90%', shade: 'bg-teal-800 border-teal-600 text-white' },
      { pct: '100%', shade: 'bg-teal-700 border-teal-500 text-white' },
    ];
    let index = 0;
    const interval = setInterval(() => {
      setAlerts(prev => {
        if (prev.length >= 3) return [];
        return [...prev, thresholds[index]];
      });
      index = (index + 1) % 3;
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-start p-4 h-[140px] overflow-hidden">
      <div className="space-y-2 w-full">
        {alerts.map((alert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn("text-xs font-mono px-3 py-2 rounded border", alert.shade)}
          >
            → LED {alert.pct} brightness activated
          </motion.div>
        ))}
        {alerts.length === 0 && (
          <div className="text-neutral-600 text-xs">Waiting for brightness changes...</div>
        )}
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-10 bg-gradient-to-t from-black to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.08, 0.55, 0.52],
      glowColor: [0.08, 0.46, 0.43],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};

const GitHubLogo = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
};

export default FeaturesSectionDemo;
