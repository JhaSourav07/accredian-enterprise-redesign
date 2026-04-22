"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

const NAV_LINKS = [
  { name: 'Home',           href: '/' },
  { name: 'Stats',          href: '#stats' },
  { name: 'Clients',        href: '#clients' },
  { name: 'Accredian Edge', href: '#accredian-edge' },
  { name: 'CAT',            href: '#cat' },
  { name: 'How It Works',   href: '#how-it-works' },
  { name: 'FAQs',           href: '#faqs' },
  { name: 'Testimonials',   href: '#testimonials' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300">
            A
          </div>
          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-400 transition-all duration-300">
            Accredian
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300 transition-colors whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right — CTA + hamburger */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            variant="outline"
            className="hidden sm:inline-flex text-gray-300 border-white/10 bg-transparent hover:bg-white/5 hover:text-white hover:border-white/20 transition-all rounded-xl px-5 py-2 text-sm"
          >
            Log In
          </Button>
          <Button className="hidden sm:inline-flex bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl px-5 py-2 text-sm shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] border-none transition-all duration-300">
            Enquire Now
          </Button>

          {/* Mobile-only enquire */}
          <Button className="sm:hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl px-4 py-1.5 text-sm border-none">
            Enquire
          </Button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 ml-1"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="xl:hidden border-t border-white/8 bg-[#030712]/95 backdrop-blur-xl">
          <nav className="max-w-[1400px] mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-3 pt-3 border-t border-white/8 mt-2">
              <Button variant="outline" className="flex-1 text-gray-300 border-white/10 bg-transparent hover:bg-white/5 rounded-xl py-2.5 text-sm">
                Log In
              </Button>
              <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl py-2.5 text-sm border-none">
                Enquire Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}