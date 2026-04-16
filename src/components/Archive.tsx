'use client';

import { motion } from 'framer-motion';

export default function Archive() {
  const cars = [
    { year: '2021-2023', name: 'BMW 330i M Sport', livery: 'Laser Tools Racing', color: 'bg-blue-600' },
    { year: '2019-2020', name: 'Infiniti Q50', livery: 'Laser Tools Racing', color: 'bg-zinc-800' },
    { year: '2015-2018', name: 'Mercedes-Benz A-Class', livery: 'Laser Tools Racing', color: 'bg-zinc-600' },
    { year: '2013-2014', name: 'Chevrolet Cruze', livery: 'Aiden Moffat Racing', color: 'bg-white' },
  ];

  return (
    <section id="archive" className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm">Historical Data</span>
          <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none text-white">
            The <span className="text-red-600">Archive</span>
          </h2>
          <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.2em] mt-6 max-w-lg">
            A comprehensive visual record of every machine piloted by Aiden across 13 seasons of elite touring car competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cars.map((car, idx) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-80 bg-zinc-900 border border-white/5 rounded-sm overflow-hidden cursor-pointer"
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${car.color}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              
              <div className="p-8 relative z-20 h-full flex flex-col justify-end">
                <span className="text-red-600 font-black italic tracking-tighter text-2xl mb-1">{car.year}</span>
                <h4 className="text-white font-black uppercase italic tracking-tighter text-lg leading-none mb-2">{car.name}</h4>
                <p className="text-zinc-500 font-bold uppercase text-[9px] tracking-widest">{car.livery}</p>
                
                <div className="mt-6 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-white font-black uppercase italic text-[10px] tracking-widest border border-white/10 px-3 py-2 hover:bg-white hover:text-black transition-all">
                    View Specs
                  </span>
                </div>
              </div>

              {/* Decorative Number Background */}
              <div className="absolute -top-10 -right-10 text-[120px] font-black italic text-white/5 tracking-tighter leading-none select-none pointer-events-none group-hover:text-red-600/5 transition-colors">
                {idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
