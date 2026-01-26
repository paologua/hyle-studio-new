// components/Navigation.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Servizi', path: '/servizi' },
  { name: 'Progetti', path: '/progetti' },
  { name: 'Evoluzione', path: '/about' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 md:py-8 bg-black/80 backdrop-blur-sm border-b border-gray-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo/Home */}
          <Link 
            href="/" 
            className="text-lg font-light tracking-wider hover:text-gray-300 transition-colors"
          >
            HYLE
          </Link>

          {/* Navigation Links - Centered */}
          <div className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-light tracking-wider transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Contact */}
          <div className="text-right">
            <a
              href="mailto:info@hyle.studio"
              className="text-sm font-light tracking-wider text-gray-500 hover:text-gray-300 transition-colors"
            >
              info@hyle.studio
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-black/90 backdrop-blur-sm border-b border-gray-800 md:hidden">
        <div className="flex justify-between items-center">
          {/* Logo/Home */}
          <Link 
            href="/" 
            className="text-lg font-light tracking-wider hover:text-gray-300 transition-colors"
          >
            HYLE
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative">
              <span className={`absolute left-0 w-6 h-px bg-current transition-all duration-300 ${isMenuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 w-6 h-px bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'top-2 opacity-100'}`} />
              <span className={`absolute left-0 w-6 h-px bg-current transition-all duration-300 ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-b border-gray-800">
            <div className="px-6 py-8 space-y-6">
              {navigationItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-lg font-light tracking-wider transition-colors ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-6 border-t border-gray-800">
                <a
                  href="mailto:info@hyle.studio"
                  className="text-lg font-light tracking-wider text-gray-500 hover:text-gray-300 transition-colors block"
                >
                  info@hyle.studio
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-20 md:h-24" />
    </>
  );
}
