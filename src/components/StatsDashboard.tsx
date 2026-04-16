'use client';

import { motion } from 'framer-motion';

export default function StatsDashboard() {
  const stats = [
    { label: 'BTCC Victories', value: '4', color: 'text-red-600' },
    { label: 'Career Podiums', value: '16', color: 'text-white' },
    { label: 'Total BTCC Starts', value: '250+', color: 'text-white' },
    { label: 'Pole Positions', value: '2', color: 'text-red-600' },
  ];

  return (
    <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col items-center justify-center text-center p-8 ${idx !== stats.length - 1 ? 'lg:border-r border-white/10' : ''}`}
            >
              <span className={`text-7xl md:text-8xl font-black italic tracking-tighter mb-4 ${stat.color} drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]`}>
                {stat.value}
              </span>
              <span className="text-zinc-500 font-black uppercase italic text-[10px] tracking-[0.3em] max-w-[120px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
