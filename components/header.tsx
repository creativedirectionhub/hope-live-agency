'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 20)
    }

    if (typeof window !== 'undefined') {
      window?.addEventListener?.('scroll', handleScroll)
      return () => window?.removeEventListener?.('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'What You Get' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/creator-success', label: 'Success Stories' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#4B0082]/95 backdrop-blur-md shadow-lg' : 'bg-[#4B0082]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-white/40 transition-all">
              <Image
                src="/hope-logo.png"
                alt="H.O.P.E Live Agency"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-bold text-white font-playfair">H.O.P.E</span>
              <p className="text-xs text-white/80 -mt-1">Live Agency</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks?.map?.((link) => (
              <Link
                key={link?.href ?? ''}
                href={link?.href ?? '#'}
                className="text-white/90 hover:text-white font-medium transition-colors relative group"
              >
                {link?.label ?? ''}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF7A00] group-hover:w-full transition-all duration-300" />
              </Link>
            )) ?? null}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/apply">
              <Button className="bg-[#FF7A00] hover:bg-[#C81D77] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                Apply to Join
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen?.(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#4B0082] border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks?.map?.((link) => (
              <Link
                key={link?.href ?? ''}
                href={link?.href ?? '#'}
                onClick={() => setIsMobileMenuOpen?.(false)}
                className="block text-white/90 hover:text-white font-medium py-2 transition-colors"
              >
                {link?.label ?? ''}
              </Link>
            )) ?? null}
            <Link href="/apply" onClick={() => setIsMobileMenuOpen?.(false)}>
              <Button className="w-full bg-[#FF7A00] hover:bg-[#C81D77] text-white font-semibold">
                Apply to Join
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
