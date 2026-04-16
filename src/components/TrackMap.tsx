'use client';

import { motion } from 'framer-motion';

export default function TrackMap() {
  const sectors = [
    { id: 1, name: 'Sector 1', detail: 'Hard braking into Redgate. Target 60mph apex.', color: 'text-red-600' },
    { id: 2, name: 'Sector 2', detail: 'Maximum commitment through Craner Curves.', color: 'text-white' },
    { id: 3, name: 'Sector 3', detail: 'The Esses. Precision over the curbs is vital.', color: 'text-red-600' },
  ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[500px] flex items-center justify-center bg-black border border-white/5 rounded-sm">
             {/* Stylized Track SVG */}
             <svg viewBox="0 0 500 400" className="w-full h-full p-12 overflow-visible">
                <motion.path 
                  d="M100,100 L400,100 Q450,100 450,150 L450,250 Q450,300 400,300 L100,300 Q50,300 50,250 L50,150 Q50,100 100,100"
                  fill="none"
                  stroke="#333"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                  d="M100,100 L400,100 Q450,100 450,150 L450,250 Q450,300 400,300 L100,300 Q50,300 50,250 L50,150 Q50,100 100,100"
                  fill="none"
                  stroke="#E21F26"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {/* Sector Markers */}
                <circle cx="100" cy="100" r="8" fill="white" className="animate-pulse" />
                <circle cx="450" cy="200" r="8" fill="white" className="animate-pulse" />
                <circle cx="100" cy="300" r="8" fill="white" className="animate-pulse" />
             </svg>
             <div className="absolute top-10 left-10 text-[8px] font-black uppercase text-zinc-500 tracking-[0.4em]">Satellite Data Feed: Active</div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm">Race Intelligence</span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-8 leading-tight text-white">
              Sector <span className="text-red-600">Analysis</span>
            </h2>
            <div className="space-y-6">
               {sectors.map((s) => (
                 <div key={s.id} className="p-6 bg-zinc-900 border border-white/5 group hover:border-red-600/30 transition-all">
                    <div className="flex items-center gap-4 mb-2">
                       <span className={`font-black italic text-xl ${s.color}`}>0{s.id}</span>
                       <h4 className="text-white font-black uppercase italic tracking-tighter">{s.name}</h4>
                    </div>
                    <p className="text-zinc-500 font-bold uppercase text-[9px] tracking-widest leading-relaxed">
                      {s.detail}
                    </p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
