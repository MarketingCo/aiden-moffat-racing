'use client';

import { motion } from 'framer-motion';
import { Target, Info, CornerDownRight } from 'lucide-react';

export default function TrackInsight() {
  return (
    <section className="py-24 bg-white text-black overflow-hidden skew-y-[-1deg]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 skew-y-[1deg]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm">Track Insights</span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-8 leading-tight">
              Mastering <span className="text-red-600">Donington Park</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 p-6 bg-zinc-50 border-l-4 border-red-600">
                <Target className="h-10 w-10 text-red-600 shrink-0" />
                <div>
                  <h4 className="font-black uppercase italic text-lg mb-2">The Redgate Approach</h4>
                  <p className="text-zinc-600 text-[11px] font-bold uppercase leading-relaxed tracking-wider">
                    "Redgate is all about the exit. It's very easy to overcook the entry, but you need to sacrifice that speed to ensure you're full throttle early for the run down to Hollywood."
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 p-6 bg-zinc-50 border-l-4 border-zinc-900">
                <CornerDownRight className="h-10 w-10 text-zinc-900 shrink-0" />
                <div>
                  <h4 className="font-black uppercase italic text-lg mb-2">Craner Curves Dynamics</h4>
                  <p className="text-zinc-600 text-[11px] font-bold uppercase leading-relaxed tracking-wider">
                    "The most iconic section in the UK. In the Audi, we're looking for stability through the compression. Precision on the curb is the difference between a podium and a gravel trap."
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4 p-4 bg-zinc-900 text-white inline-flex rounded-sm">
               <Info className="h-5 w-5 text-red-600" />
               <span className="text-[10px] font-black uppercase italic tracking-widest">Next Session: Free Practice 1 - April 19, 09:30</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-red-600/5 rounded-full blur-[80px]" />
            <motion.div
              initial={{ opacity: 0, rotate: 5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              className="relative aspect-square bg-[url('https://images.unsplash.com/photo-1511919095327-ef552af36c3a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center border-[20px] border-zinc-100 shadow-2xl"
            >
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-0 right-0 p-8">
                 <div className="text-8xl font-black italic text-white/20 tracking-tighter leading-none">01</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
