'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy } from 'lucide-react';

export default function CalendarSection() {
  const races = [
    { date: 'APR 19', track: 'Donington Park', event: 'Season Opener', status: 'Upcoming' },
    { date: 'MAY 10', track: 'Brands Hatch', event: 'Indy Circuit', status: 'Upcoming' },
    { date: 'MAY 24', track: 'Thruxton', event: 'High Speed Battle', status: 'Upcoming' },
    { date: 'JUN 07', track: 'Oulton Park', event: 'Island Circuit', status: 'Upcoming' },
    { date: 'JUN 21', track: 'Croft', event: 'North East Thrills', status: 'Upcoming' },
  ];

  return (
    <section id="calendar" className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm">Race Schedule</span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none">
              2026 <span className="text-white">Calendar</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-bold uppercase text-xs tracking-[0.2em] max-w-xs md:text-right">
            Follow Aiden across the UK's most iconic circuits in the Kwik Fit BTCC.
          </p>
        </div>

        <div className="grid gap-4">
          {races.map((race, index) => (
            <motion.div
              key={race.track}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col md:flex-row items-center justify-between p-6 bg-zinc-900/50 border border-white/5 hover:border-red-600/30 transition-all rounded-sm"
            >
              <div className="flex items-center gap-8 w-full md:w-auto">
                <div className="flex flex-col items-center justify-center bg-red-600 p-4 min-w-[100px] skew-x-[-12deg]">
                  <span className="text-white font-black italic text-xl skew-x-[12deg]">{race.date}</span>
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase italic tracking-tighter group-hover:text-red-600 transition-colors">
                    {race.track}
                  </h3>
                  <div className="flex items-center gap-2 text-zinc-500 font-bold uppercase text-[10px] tracking-widest mt-1">
                    <MapPin className="h-3 w-3" />
                    {race.event}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 mt-6 md:mt-0 w-full md:w-auto justify-between">
                <div className="px-4 py-1 border border-zinc-700 text-zinc-400 font-black uppercase italic text-[10px] tracking-widest group-hover:border-red-600/50 group-hover:text-red-600 transition-all">
                  {race.status}
                </div>
                <button className="flex items-center gap-2 font-black uppercase italic text-xs tracking-widest hover:text-red-600 transition-all">
                  Tickets <Calendar className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
