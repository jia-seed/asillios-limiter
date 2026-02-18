'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

const navItems = [
  { label: 'LED Bulbs', href: '/led-light-bulbs' },
  { label: 'LED Strips', href: '/led-light-strips' },
  { label: 'Shop Lights', href: '/shop-lights' },
];

const externalLinks = [
  {
    label: 'Support',
    href: 'https://shiplight.ai/support',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
  {
    label: 'Contact',
    href: 'https://shiplight.ai/contact',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [activeSection, setActiveSection] = React.useState('');

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Toggle Button - Always visible */}
      <button
        onClick={onToggle}
        className="fixed left-4 top-4 z-50 hidden lg:flex items-center justify-center w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 hover:border-neutral-700 transition-colors"
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-neutral-400"
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed left-0 top-0 h-screen w-56 bg-black border-r border-neutral-800 z-40 hidden lg:flex flex-col"
          >
            {/* Logo */}
            <div className="p-6 border-b border-neutral-800">
              <a href="/" className="flex items-center gap-3">
                <Image
                  src="/greek.png"
                  alt="Shiplight LED Lighting"
                  title="Shiplight - Premium LED Solutions"
                  width={32}
                  height={32}
                  className="opacity-80"
                />
                <span className="text-white font-medium text-lg">Shiplight</span>
              </a>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="relative block"
                    >
                      <motion.div
                        className={`px-4 py-2.5 rounded-lg text-sm transition-colors ${
                          isActive
                            ? 'text-white bg-teal-900/50'
                            : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                        }`}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-teal-500 rounded-full"
                          />
                        )}
                        {item.label}
                      </motion.div>
                    </a>
                  );
                })}
              </div>
            </nav>

            {/* External Links */}
            <div className="p-4 border-t border-neutral-800">
              <div className="space-y-1">
                {externalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-neutral-800/50 rounded-lg transition-colors"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-neutral-800 flex justify-center">
              <div className="text-neutral-400 text-xs text-center">
                <p>© 2024 Shiplight</p>
                <p>Premium LED Solutions</p>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
