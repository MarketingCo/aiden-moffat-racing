'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Play, Square, Activity, Radio } from 'lucide-react';

export default function LiveComms() {
  const [activeChannel, setActiveChannel] = useState<number | null>(null);

  const channels = [
    { id: 1, name: 'Driver -> Engineer', label: 'Telemetry Check', desc: 'Audio link from cockpit to pit wall.' },
    { id: 2, name: 'Pit -> Driver', label: 'Strategy Update', desc: 'Critical race-pace adjustments and gaps.' },
    { id: 3, name: 'Engine Start', label: 'Audi S3 Ignition', desc: 'High-fidelity shakedown startup sequence.' },
    { id: 4, name: 'Impact Gun', label: 'Pit Stop Audio', desc: 'Simulation of a sub-3 second tyre change.' },
  ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          <div className="lg:col-span-1">
             <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm">Aural Experience</span>
             <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-tight mb-8 text-white">
               Live <span className="text-red-600">Comms.</span>
             </h2>
             <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-12 leading-relaxed">
               Immerse yourself in the sonic environment of a BTCC race weekend. From the roar of the Audi S3 to the precision of the pit wall radio.
             </p>
             
             <div className="p-6 bg-black border border-white/5 rounded-sm">
                <div className="flex items-center gap-4 mb-4">
                   <div className="p-3 bg-red-600/10 rounded-full text-red-600 animate-pulse">
                      <Radio className="h-5 w-5" />
                   </div>
                   <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-white">Radio Status</div>
                      <div className="text-zinc-500 text-[8px] font-bold uppercase tracking-widest mt-1 italic">Channel 16: Established</div>
                   </div>
                </div>
                <div className="flex gap-1 h-8 items-end">
                   {Array(20).fill(' ').map((_, i) => (
                     <motion.div 
                       key={i}
                       animate={{ height: activeChannel ? [10, 30, 15, 25, 10] : 10 }}
                       transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.05 }}
                       className="flex-grow bg-red-600/40 rounded-t-[1px]"
                     />
                   ))}
                </div>
             </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
             {channels.map((ch) => (
               <div 
                 key={ch.id}
                 className={`p-8 border transition-all duration-500 group relative overflow-hidden ${activeChannel === ch.id ? 'bg-red-600 border-red-500 shadow-[0_0_30px_rgba(255,0,0,0.3)]' : 'bg-zinc-900 border-white/5 hover:border-red-600/30'}`}
               >
                  <div className="relative z-10 flex flex-col h-full justify-between">
                     <div>
                        <div className="flex justify-between items-start mb-6">
                           <span className={`text-[8px] font-black uppercase tracking-[0.4em] ${activeChannel === ch.id ? 'text-white' : 'text-zinc-600'}`}>Channel 0{ch.id}</span>
                           <Mic className={`h-4 w-4 ${activeChannel === ch.id ? 'text-white animate-pulse' : 'text-zinc-700'}`} />
                        </div>
                        <h4 className={`text-2xl font-black uppercase italic tracking-tighter mb-2 ${activeChannel === ch.id ? 'text-white' : 'text-zinc-300'}`}>{ch.name}</h4>
                        <p className={`text-[10px] font-bold uppercase tracking-widest mb-8 ${activeChannel === ch.id ? 'text-red-100' : 'text-zinc-500'}`}>{ch.desc}</p>
                     </div>
                     
                     <button 
                       onClick={() => setActiveChannel(activeChannel === ch.id ? null : ch.id)}
                       className={`w-full py-4 flex items-center justify-center gap-4 font-black uppercase italic text-xs tracking-widest transition-all ${activeChannel === ch.id ? 'bg-white text-black' : 'bg-black text-white hover:bg-red-600'}`}
                     >
                        {activeChannel === ch.id ? (
                          <>Stop Stream <Square className="h-3 w-3 fill-current" /></>
                        ) : (
                          <>Initialize Feed <Play className="h-3 w-3 fill-current" /></>
                        )}
                     </button>
                  </div>
                  <div className="absolute -bottom-10 -right-10 text-[100px] font-black italic text-white/[0.02] tracking-tighter leading-none select-none pointer-events-none group-hover:text-red-600/[0.05] transition-colors">
                    {ch.id}
                  </div>
               </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
