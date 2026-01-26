'use client'

import { useState } from 'react'
import Link from 'next/link'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Servizi', href: '/servizi' },
    { name: 'Progetti', href: '/progetti' },
    { name: 'About', href: '/about' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-light tracking-wider hover:text-gray-300 transition-colors">
            HYLE
          </Link>

          {/* Desktop Menu - Nascondi su mobile */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="px-4 py-2 border border-gray-600 text-sm hover:border-white hover:text-white transition-colors"
            >
              Contattaci
            </Link>
          </div>

          {/* Mobile Menu Button - Mostra solo su mobile */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span className="text-xl">{isOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors py-2 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="px-4 py-3 border border-gray-600 text-center hover:border-white hover:text-white transition-colors mt-4"
                onClick={() => setIsOpen(false)}
              >
                Contattaci
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
