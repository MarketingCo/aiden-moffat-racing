'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Circle, Info, Droplets, Zap } from 'lucide-react';

export default function TyreStrategy() {
  const [selected, setSelected] = useState('Medium');

  const compounds = [
    { name: 'Hard', color: 'bg-zinc-100', desc: 'Maximum longevity. Low peak grip. Ideal for long stints.', durability: 95, grip: 60 },
    { name: 'Medium', color: 'bg-yellow-400', desc: 'The baseline. Balanced wear and performance.', durability: 75, grip: 75 },
    { name: 'Soft', color: 'bg-red-600', desc: 'Maximum qualifying performance. Rapid degradation.', durability: 40, grip: 100 },
    { name: 'Wet', color: 'bg-blue-600', desc: 'Deep tread for water clearance. 12L/sec dispersal.', durability: 60, grip: 50 },
  ];

  const current = compounds.find(c => c.name === selected)!;

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm">Engineering Hub</span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-8 leading-tight">
              Tyre <span className="text-white">Strategy.</span>
            </h2>
            
            <div className="grid grid-cols-2 gap-4 mb-12">
               {compounds.map((c) => (
                 <button
                   key={c.name}
                   onClick={() => setSelected(c.name)}
                   className={`p-6 border flex items-center justify-between transition-all duration-300 ${selected === c.name ? 'bg-white border-white' : 'bg-zinc-900 border-white/5 hover:border-red-600/30'}`}
                 >
                    <div className="flex items-center gap-4">
                       <div className={`h-4 w-4 rounded-full ${c.color} ${selected === c.name ? 'ring-4 ring-black/10' : ''}`} />
                       <span className={`font-black uppercase italic tracking-tighter ${selected === c.name ? 'text-black' : 'text-white'}`}>{c.name}</span>
                    </div>
                    {selected === c.name && <Zap className="h-4 w-4 text-red-600 animate-pulse" />}
                 </button>
               ))}
            </div>

            <div className="space-y-8">
               <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-zinc-500">
                     <span>Peak Grip Efficiency</span>
                     <span className="text-white">{current.grip}%</span>
                  </div>
                  <div className="h-1 w-full bg-zinc-900">
                     <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: `${current.grip}%` }}
                       className="h-full bg-red-600"
                     />
                  </div>
               </div>
               
               <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-zinc-500">
                     <span>Thermal Durability</span>
                     <span className="text-white">{current.durability}%</span>
                  </div>
                  <div className="h-1 w-full bg-zinc-900">
                     <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: `${current.durability}%` }}
                       className="h-full bg-zinc-400"
                     />
                  </div>
               </div>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.1, x: -20 }}
                className="bg-zinc-900 border border-white/10 p-12 rounded-sm relative overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 p-20 opacity-5">
                   <Circle className="h-64 w-64 text-white" />
                </div>
                <div className="relative z-10">
                   <div className="flex items-center gap-4 mb-8">
                      <div className={`p-4 rounded-sm ${current.color} text-black`}>
                         {selected === 'Wet' ? <Droplets className="h-8 w-8" /> : <Info className="h-8 w-8" />}
                      </div>
                      <div>
                        <h3 className="text-3xl font-black uppercase italic tracking-tighter text-white">Goodyear {selected}</h3>
                        <p className="text-[10px] font-black text-red-600 uppercase tracking-widest">BTCC Official Specification</p>
                      </div>
                   </div>
                   <p className="text-zinc-500 font-bold uppercase text-xs tracking-widest leading-relaxed mb-12">
                     {current.desc} Optimized for the Audi S3 Saloon's front-end weight distribution and aggressive braking style.
                   </p>
                   <div className="flex items-center gap-8 border-t border-white/5 pt-8">
                      <div>
                        <div className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-1">Operating Window</div>
                        <div className="text-white font-black italic tracking-tighter text-xl">85°C - 105°C</div>
                      </div>
                      <div>
                        <div className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-1">Camber Limit</div>
                        <div className="text-white font-black italic tracking-tighter text-xl">-4.5 Degrees</div>
                      </div>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
