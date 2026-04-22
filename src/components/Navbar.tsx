'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Trophy, Zap } from 'lucide-react';
import { useRaceMode } from './RaceModeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isRaceMode, toggleRaceMode } = useRaceMode();

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Racing Services', href: '#services' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isRaceMode
          ? 'bg-black/95 border-red-600/60 shadow-[0_1px_20px_rgba(255,0,0,0.15)]'
          : 'bg-black/90 border-white/[0.08]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Trophy
              className={`h-7 w-7 transition-colors duration-200 ${
                isRaceMode ? 'text-red-500' : 'text-red-600 group-hover:text-red-500'
              }`}
            />
            <span className="text-xl font-black tracking-tighter italic uppercase">
              Aiden
              <span className={`${isRaceMode ? 'text-red-500 animate-pulse' : 'text-red-600'} transition-colors`}>
                Moffat
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-zinc-400 hover:text-white px-1 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-150 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-600 after:transition-all after:duration-200 hover:after:w-full"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button
              onClick={toggleRaceMode}
              className={`flex items-center gap-2 px-4 py-2 [clip-path:polygon(8px_0%,100%_0%,calc(100%-8px)_100%,0%_100%)] transition-all duration-200 ${
                isRaceMode
                  ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(255,0,0,0.35)]'
                  : 'bg-zinc-900 text-zinc-500 border border-white/[0.08] hover:border-white/20 hover:text-zinc-300'
              }`}
            >
              <Zap className={`h-3.5 w-3.5 ${isRaceMode ? 'fill-current' : ''}`} />
              <span className="text-[10px] font-black uppercase italic tracking-widest">
                {isRaceMode ? 'Race Mode On' : 'Race Mode'}
              </span>
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors duration-150 focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/98 border-t border-white/[0.06]">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2.5 text-zinc-400 hover:text-white text-sm font-bold uppercase italic tracking-widest transition-colors duration-150 border-b border-white/[0.04] last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
