'use client';

import { motion } from 'framer-motion';
import { Home, Trophy, Gauge, MessageSquare, Menu } from 'lucide-react';

export default function MobileHUD({ onContactOpen }: { onContactOpen: () => void }) {
  const navItems = [
    { name: 'Home', icon: <Home className="h-5 w-5" />, href: '#' },
    { name: 'Garage', icon: <Gauge className="h-5 w-5" />, href: '#the-machine' },
    { name: 'Track', icon: <Trophy className="h-5 w-5" />, href: '#calendar' },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden p-4">
      <div className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-full h-16 flex items-center justify-around px-6 relative overflow-hidden">
        {/* Subtle Scan Line for HUD effect */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,0,0,0.05)_1px,transparent_1px)] bg-[length:100%_4px]" />
        
        {navItems.map((item) => (
          <a key={item.name} href={item.href} className="flex flex-col items-center gap-1 group">
            <div className="p-2 group-active:scale-90 transition-transform text-zinc-500 group-hover:text-white">
              {item.icon}
            </div>
            <span className="text-[7px] font-black uppercase tracking-widest text-zinc-600">{item.name}</span>
          </a>
        ))}

        <button 
          onClick={onContactOpen}
          className="flex flex-col items-center gap-1 group relative"
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 p-4 bg-red-600 rounded-full border-4 border-black shadow-[0_0_20px_rgba(220,38,38,0.5)]">
             <MessageSquare className="h-5 w-5 text-white" />
          </div>
          <span className="mt-8 text-[7px] font-black uppercase tracking-widest text-red-600 animate-pulse">Comms</span>
        </button>
      </div>
    </div>
  );
}
