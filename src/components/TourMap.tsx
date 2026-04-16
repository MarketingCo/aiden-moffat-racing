'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export default function TourMap() {
  const tracks = [
    { id: 'donington', name: 'Donington Park', pos: { top: '65%', left: '52%' }, date: 'APR 19' },
    { id: 'brands', name: 'Brands Hatch', pos: { top: '82%', left: '65%' }, date: 'MAY 10' },
    { id: 'thruxton', name: 'Thruxton', pos: { top: '85%', left: '45%' }, date: 'MAY 24' },
    { id: 'oulton', name: 'Oulton Park', pos: { top: '55%', left: '42%' }, date: 'JUN 07' },
    { id: 'croft', name: 'Croft', pos: { top: '40%', left: '50%' }, date: 'JUN 21' },
    { id: 'knockhill', name: 'Knockhill', pos: { top: '15%', left: '40%' }, date: 'AUG 10' },
  ];

  return (
    <section id="tour" className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative aspect-[3/4] bg-zinc-900/30 border border-white/5 rounded-sm p-8 flex items-center justify-center">
            {/* Stylized UK Outline (Simplified) */}
            <div className="relative w-full h-full max-w-[400px]">
               <svg viewBox="0 0 400 600" className="w-full h-full opacity-20 stroke-white fill-none stroke-[2]">
                  <path d="M150,50 L180,30 L220,40 L250,100 L230,150 L260,200 L280,300 L260,400 L300,500 L250,550 L150,580 L100,500 L120,400 L80,300 L100,200 L120,100 Z" />
               </svg>
               
               {tracks.map((track) => (
                 <motion.div
                   key={track.id}
                   className="absolute group/pin"
                   style={{ top: track.pos.top, left: track.pos.left }}
                   initial={{ scale: 0 }}
                   whileInView={{ scale: 1 }}
                 >
                   <div className="relative">
                     <MapPin className="h-6 w-6 text-red-600 -translate-x-1/2 -translate-y-full hover:scale-125 transition-transform cursor-pointer" />
                     <div className="absolute top-0 left-full ml-4 -translate-y-full w-32 p-3 bg-white text-black opacity-0 group-hover/pin:opacity-100 transition-all pointer-events-none skew-x-[-6deg] z-50">
                        <div className="font-black uppercase italic text-[10px] leading-tight">{track.name}</div>
                        <div className="text-red-600 font-bold text-[8px] mt-1">{track.date}</div>
                     </div>
                   </div>
                 </motion.div>
               ))}
            </div>
            <div className="absolute bottom-8 left-8 flex items-center gap-2">
               <Navigation className="h-4 w-4 text-zinc-600" />
               <span className="text-[8px] font-black uppercase text-zinc-500 tracking-[0.4em]">GPS Tracking: Sync established</span>
            </div>
          </div>

          <div>
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm">The 2026 Tour</span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-8 leading-tight">
              A Nationwide <span className="text-white">Assault.</span>
            </h2>
            <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-12 leading-relaxed">
              From the high-speed curves of Thruxton to the tight technical challenge of Knockhill, Aiden is bringing the Audi S3 to every corner of the UK. Track his progress as the season unfolds.
            </p>
            
            <div className="space-y-4">
               <div className="p-6 bg-zinc-900 border border-white/5 rounded-sm group hover:border-red-600/30 transition-all">
                  <div className="flex justify-between items-center mb-4">
                     <h4 className="text-white font-black uppercase italic tracking-tighter">Total Tour Distance</h4>
                     <span className="text-red-600 font-black italic tracking-tighter text-xl">4,250 Miles</span>
                  </div>
                  <div className="h-1 w-full bg-zinc-800 relative">
                     <div className="absolute top-0 left-0 h-full w-[12%] bg-red-600" />
                  </div>
                  <div className="mt-2 text-right text-[8px] font-bold text-zinc-600 uppercase tracking-widest">Season Progress: 12%</div>
               </div>

               <button className="w-full py-5 border border-white/10 font-black uppercase italic text-xs tracking-[0.3em] hover:bg-white hover:text-black transition-all">
                  Sync to Calendar
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
