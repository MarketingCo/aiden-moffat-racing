'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/40 z-10" />
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1541890289-b86df5bafd81?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-30 scale-105" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 mb-6 border-l-4 border-red-600 bg-white/10 text-white font-bold tracking-widest uppercase italic text-sm">
            2026 Kwik Fit BTCC Challenger
          </span>
          <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase mb-6 leading-none">
            Aiden <span className="text-red-600">Moffat</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-gray-400 mb-10 max-w-2xl mx-auto uppercase tracking-wide">
            Driving the LKQ Euro Car Parts <span className="text-white">Audi S3 Saloon</span> for Power Maxed Racing.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="w-full md:w-auto px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-black uppercase italic tracking-widest transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              Book Training <ChevronRight className="h-5 w-5" />
            </button>
            <button className="w-full md:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-black uppercase italic tracking-widest backdrop-blur-md transition-all flex items-center justify-center gap-2 border border-white/20">
              Watch Season Preview <Play className="h-5 w-5 fill-current" />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 border-l-2 border-red-600 pl-4 py-2">
            <span className="text-4xl font-black italic">13</span>
            <span className="text-xs font-bold uppercase tracking-widest leading-none text-gray-400">BTCC Seasons<br/>Experience</span>
          </div>
          <div className="flex items-center gap-4 border-l-2 border-red-600 pl-4 py-2">
            <span className="text-4xl font-black italic">16</span>
            <span className="text-xs font-bold uppercase tracking-widest leading-none text-gray-400">Career Wins &<br/>Podiums</span>
          </div>
        </div>
      </div>
    </div>
  );
}
