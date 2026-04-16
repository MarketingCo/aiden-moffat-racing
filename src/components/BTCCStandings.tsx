'use client';

import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown, Minus } from 'lucide-react';

export default function BTCCStandings() {
  const standings = [
    { pos: 1, driver: 'Ash Sutton', car: 'Ford Focus ST', points: 42, change: 'minus' },
    { pos: 2, driver: 'Tom Ingram', car: 'Hyundai i30N', points: 38, change: 'up' },
    { pos: 3, driver: 'Aiden Moffat', car: 'Audi S3 Saloon', points: 35, change: 'up', highlight: true },
    { pos: 4, driver: 'Jake Hill', car: 'BMW 330e M Sport', points: 31, change: 'down' },
    { pos: 5, driver: 'Josh Cook', car: 'Toyota Corolla', points: 28, change: 'minus' },
  ];

  return (
    <section id="standings" className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm">Championship HUD</span>
          <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none text-white">
            Live <span className="text-red-600">Standings</span>
          </h2>
        </div>

        <div className="bg-zinc-900 border border-white/5 rounded-sm overflow-hidden shadow-2xl">
          <div className="grid grid-cols-12 gap-4 p-6 bg-zinc-800/50 border-b border-white/5 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">
             <div className="col-span-1">Pos</div>
             <div className="col-span-5">Driver / Machine</div>
             <div className="col-span-3 text-center">Trend</div>
             <div className="col-span-3 text-right">Points</div>
          </div>

          <div className="divide-y divide-white/5">
            {standings.map((entry) => (
              <motion.div 
                key={entry.driver}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`grid grid-cols-12 gap-4 p-6 items-center transition-colors ${entry.highlight ? 'bg-red-600/10' : 'hover:bg-white/5'}`}
              >
                <div className="col-span-1">
                  <span className={`text-2xl font-black italic tracking-tighter ${entry.highlight ? 'text-red-600' : 'text-zinc-500'}`}>
                    {String(entry.pos).padStart(2, '0')}
                  </span>
                </div>
                <div className="col-span-5">
                   <div className={`text-lg font-black uppercase italic tracking-tighter leading-none ${entry.highlight ? 'text-white' : 'text-zinc-300'}`}>
                     {entry.driver}
                   </div>
                   <div className="text-[8px] font-bold uppercase tracking-widest text-zinc-600 mt-1">{entry.car}</div>
                </div>
                <div className="col-span-3 flex justify-center">
                   {entry.change === 'up' && <ChevronUp className="h-4 w-4 text-green-500" />}
                   {entry.change === 'down' && <ChevronDown className="h-4 w-4 text-red-600" />}
                   {entry.change === 'minus' && <Minus className="h-4 w-4 text-zinc-700" />}
                </div>
                <div className="col-span-3 text-right">
                   <span className="text-xl font-black italic text-white tracking-tighter">{entry.points}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="p-4 bg-zinc-950/50 text-center border-t border-white/5">
             <a href="https://www.btcc.net/standings" target="_blank" className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors">
               View Full Championship Classification
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
