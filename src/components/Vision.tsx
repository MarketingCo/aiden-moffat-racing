'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function VisionSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <section ref={containerRef} className="py-40 bg-white overflow-hidden select-none">
      <div className="flex flex-col gap-4">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap flex gap-8">
           {Array(5).fill(' ').map((_, i) => (
             <span key={i} className="text-[120px] md:text-[250px] font-black italic uppercase tracking-tighter text-zinc-900 leading-none">
               Precision<span className="text-red-600">.</span> Intensity<span className="text-red-600">.</span> Victory<span className="text-red-600">.</span>
             </span>
           ))}
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
           <div className="max-w-2xl">
             <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-6 block italic text-sm">2026 Mission Statement</span>
             <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-black leading-tight mb-8">
               The pursuit of the <span className="text-red-600 underline decoration-8 underline-offset-4">Top Step.</span>
             </h2>
             <p className="text-zinc-500 font-bold uppercase text-xs tracking-[0.2em] leading-loose">
               "Thirteen years of preparation has led to this moment. The Audi S3 is the weapon, Power Maxed is the team, and the objective is simple: total championship dominance. We aren't just here to compete; we are here to redefine what's possible on the front-wheel-drive limit."
             </p>
             <div className="mt-12 flex items-center gap-8">
                <div className="h-px w-20 bg-zinc-200" />
                <span className="font-black italic uppercase tracking-widest text-black">Aiden Moffat</span>
             </div>
           </div>
        </div>

        <motion.div style={{ x: x2 }} className="whitespace-nowrap flex gap-8">
           {Array(5).fill(' ').map((_, i) => (
             <span key={i} className="text-[120px] md:text-[250px] font-black italic uppercase tracking-tighter text-zinc-100 leading-none outline-text">
               13 Seasons<span className="text-red-600">.</span> No Compromise<span className="text-red-600">.</span> Only Speed<span className="text-red-600">.</span>
             </span>
           ))}
        </motion.div>
      </div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 2px #f4f4f5;
          color: transparent;
        }
      `}</style>
    </section>
  );
}
