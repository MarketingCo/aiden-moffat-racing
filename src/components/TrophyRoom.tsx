'use client';

import { motion } from 'framer-motion';
import { Award, Star, ShieldCheck } from 'lucide-react';

export default function TrophyRoom() {
  const trophies = [
    { year: '2017', title: 'BTCC Winner', track: 'Donington Park', desc: 'Maiden victory in the most competitive touring car series in the world.' },
    { year: '2018', title: 'BTCC Winner', track: 'Silverstone', desc: 'A tactical masterclass in changeable conditions at the home of British racing.' },
    { year: '2021', title: 'Jack Sears Trophy', track: 'Championship', desc: 'Proving consistency and speed across a grueling 30-race season.' },
    { year: '2023', title: 'BTCC Winner', track: 'Brands Hatch', desc: 'A dominant performance in the season finale to secure a top-ten finish.' },
  ];

  return (
    <section id="trophies" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-black">
          <div>
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm">Career Honors</span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none">
              The Trophy <span className="text-red-600">Room.</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.2em] max-w-xs md:text-right leading-loose">
            A testament to 13 years of relentless pursuit of excellence in the UK's premier motorsport series.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trophies.map((trophy, idx) => (
            <motion.div
              key={trophy.title + trophy.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 bg-zinc-50 border border-zinc-200 rounded-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                 <Award className="h-24 w-24 text-black" />
              </div>
              
              <div className="text-red-600 font-black italic text-3xl mb-1 tracking-tighter">{trophy.year}</div>
              <h3 className="text-black font-black uppercase italic tracking-tighter text-xl mb-4 leading-none">{trophy.title}</h3>
              <div className="flex items-center gap-2 text-zinc-400 font-bold uppercase text-[9px] tracking-widest mb-6">
                 <Star className="h-3 w-3 text-yellow-500 fill-current" />
                 {trophy.track}
              </div>
              <p className="text-zinc-500 font-bold uppercase text-[9px] leading-relaxed tracking-wider mb-8">
                {trophy.desc}
              </p>
              
              <div className="flex items-center gap-2">
                 <ShieldCheck className="h-4 w-4 text-red-600" />
                 <span className="text-[8px] font-black uppercase tracking-widest text-black">Official Record</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
