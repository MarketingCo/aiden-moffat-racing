'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Wind, ArrowDown, ChevronRight, Activity } from 'lucide-react';

export default function SetupSheet() {
  const [mode, setSetupMode] = useState<'Quali' | 'Race'>('Quali');

  const setups = {
    Quali: {
      title: 'Max Attack / Qualifying',
      wing: '12° (High Drag)',
      height: '35mm (Ultra Low)',
      bias: '58% Front',
      stiffness: '10/10 (Max)',
      desc: 'Aggressive aero and stiff suspension for single-lap peak performance. Minimal margin for error.'
    },
    Race: {
      title: 'Endurance / Race Trim',
      wing: '8° (Optimum Slip)',
      height: '45mm (Kerb Friendly)',
      bias: '54% Front',
      stiffness: '7/10 (Compliant)',
      desc: 'Balanced setup for tyre longevity and kerb riding. Designed for consistent pace over 20+ laps.'
    }
  };

  const current = setups[mode];

  return (
    <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/3">
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm">Technical Briefing</span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none text-white">
              Live <span className="text-red-600">Setup.</span>
            </h2>
            <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-12 leading-relaxed">
              Every millimeter counts. Toggle between Aiden's specific Audi S3 configurations to see how we adapt the machine to the session requirements.
            </p>
            
            <div className="flex flex-col gap-4">
               {(['Quali', 'Race'] as const).map((m) => (
                 <button
                   key={m}
                   onClick={() => setSetupMode(m)}
                   className={`p-6 border flex items-center justify-between transition-all duration-500 skew-x-[-6deg] ${mode === m ? 'bg-red-600 border-red-500' : 'bg-zinc-900 border-white/5 hover:border-red-600/30'}`}
                 >
                    <span className={`font-black uppercase italic tracking-widest skew-x-[6deg] ${mode === m ? 'text-white' : 'text-zinc-500'}`}>
                      {m === 'Quali' ? 'QUALIFYING TRIM' : 'RACE TRIM'}
                    </span>
                    <ChevronRight className={`h-4 w-4 skew-x-[6deg] ${mode === m ? 'text-white' : 'text-zinc-700'}`} />
                 </button>
               ))}
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
             <div className="bg-zinc-900/50 border border-white/5 p-8 lg:p-12 rounded-sm relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Settings className="h-40 w-40 text-white animate-spin-slow" />
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mode}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="relative z-10"
                  >
                    <div className="flex items-center gap-4 mb-12">
                       <div className="h-2 w-2 bg-red-600 rounded-full animate-ping" />
                       <h3 className="text-3xl font-black uppercase italic tracking-tighter text-white">{current.title}</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                       <div className="space-y-8">
                          <div className="flex items-center gap-6">
                             <div className="p-3 bg-zinc-800 rounded-sm text-red-600"><Wind className="h-6 w-6" /></div>
                             <div>
                                <div className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">Rear Wing Angle</div>
                                <div className="text-white font-black italic tracking-tighter text-2xl">{current.wing}</div>
                             </div>
                          </div>
                          <div className="flex items-center gap-6">
                             <div className="p-3 bg-zinc-800 rounded-sm text-red-600"><ArrowDown className="h-6 w-6" /></div>
                             <div>
                                <div className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">Front Ride Height</div>
                                <div className="text-white font-black italic tracking-tighter text-2xl">{current.height}</div>
                             </div>
                          </div>
                       </div>
                       
                       <div className="space-y-8">
                          <div className="flex items-center gap-6">
                             <div className="p-3 bg-zinc-800 rounded-sm text-red-600"><Activity className="h-6 w-6" /></div>
                             <div>
                                <div className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">Brake Bias</div>
                                <div className="text-white font-black italic tracking-tighter text-2xl">{current.bias}</div>
                             </div>
                          </div>
                          <div className="flex items-center gap-6">
                             <div className="p-3 bg-zinc-800 rounded-sm text-red-600"><Settings className="h-6 w-6" /></div>
                             <div>
                                <div className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">Chassis Stiffness</div>
                                <div className="text-white font-black italic tracking-tighter text-2xl">{current.stiffness}</div>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="mt-12 p-6 bg-black/40 border border-white/5 italic">
                       <p className="text-zinc-400 font-bold uppercase text-[10px] leading-loose tracking-widest">
                         {current.desc}
                       </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
             </div>
          </div>

        </div>
      </div>
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
