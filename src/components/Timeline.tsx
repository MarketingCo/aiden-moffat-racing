'use client';

import { motion } from 'framer-motion';

export default function Timeline() {
  const events = [
    { year: '2013', title: 'The Record Breaker', desc: 'Youngest ever driver to compete in the BTCC at just 16 years old.' },
    { year: '2017', title: 'First Victory', desc: 'Emotional maiden win at Donington Park, marking him as a future star.' },
    { year: '2021', title: 'BMW Power', desc: 'Proved versatility by mastering rear-wheel-drive machinery with Laser Tools Racing.' },
    { year: '2026', title: 'The Audi Era', desc: 'Full circle return to Power Maxed Racing for a championship title assault.' },
  ];

  return (
    <section id="career" className="py-24 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm">The Journey</span>
          <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4 text-white leading-none">
            Road to <span className="text-red-600">2026</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line for Mobile, Horizontal for Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden lg:block" />
          
          <div className="space-y-16 lg:space-y-32">
            {events.map((event, idx) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 flex justify-center">
                  <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-sm relative group hover:border-red-600/30 transition-all max-w-sm text-center lg:text-left">
                    <div className="text-4xl font-black italic text-red-600 mb-2 tracking-tighter">{event.year}</div>
                    <h3 className="text-xl font-black uppercase italic text-white mb-4 tracking-tighter">{event.title}</h3>
                    <p className="text-zinc-500 font-bold uppercase text-[9px] tracking-widest leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center lg:w-0">
                  <div className="h-4 w-4 bg-red-600 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] z-10" />
                </div>
                <div className="lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
