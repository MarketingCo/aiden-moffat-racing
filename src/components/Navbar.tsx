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
    <nav className={`fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b transition-colors duration-500 ${isRaceMode ? 'border-red-600 shadow-[0_0_20px_rgba(255,0,0,0.2)]' : 'border-white/10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Trophy className={`h-8 w-8 transition-colors ${isRaceMode ? 'text-red-500' : 'text-red-600'}`} />
              <span className="text-2xl font-black tracking-tighter italic uppercase">
                Aiden<span className={isRaceMode ? 'text-red-500 animate-pulse' : 'text-red-600'}>Moffat</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white hover:border-b-2 hover:border-red-600 px-3 py-2 text-sm font-bold uppercase tracking-widest transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button 
              onClick={toggleRaceMode}
              className={`flex items-center gap-2 px-4 py-2 skew-x-[-12deg] transition-all duration-300 ${isRaceMode ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(255,0,0,0.5)]' : 'bg-zinc-900 text-zinc-500 border border-white/10'}`}
            >
              <Zap className={`h-4 w-4 skew-x-[12deg] ${isRaceMode ? 'fill-current animate-pulse' : ''}`} />
              <span className="text-[10px] font-black uppercase italic tracking-widest skew-x-[12deg]">
                {isRaceMode ? 'RACE MODE ACTIVE' : 'ENGAGE RACE MODE'}
              </span>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase italic"
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
