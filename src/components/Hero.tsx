'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import Countdown from './Countdown';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
});

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <Countdown />

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/50 z-10" />
        <div className="w-full h-full bg-[url('/images/audi1.jpg')] bg-cover bg-center grayscale opacity-25 scale-105" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl">
        <motion.span
          {...fadeUp(0.1)}
          className="inline-block px-4 py-1.5 mb-8 border-l-4 border-red-600 bg-white/[0.07] text-white font-bold tracking-widest uppercase text-xs"
        >
          2026 Kwik Fit BTCC Challenger
        </motion.span>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase mb-6 leading-none group"
        >
          <span className="inline-block animate-glitch">Aiden</span>{' '}
          <span className="text-red-600 inline-block animate-glitch">Moffat</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.32)}
          className="text-lg md:text-xl font-semibold text-zinc-400 mb-10 max-w-2xl mx-auto uppercase tracking-wider"
        >
          Driving the LKQ Euro Car Parts{' '}
          <span className="text-white font-bold">Audi S3 Saloon</span>{' '}
          for Power Maxed Racing.
        </motion.p>

        <motion.div
          {...fadeUp(0.44)}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
            className="group/btn w-full md:w-auto px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase italic tracking-widest transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            Request Private Briefing
            <ChevronRight className="h-5 w-5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </button>
          <button className="w-full md:w-auto px-10 py-4 bg-white/[0.07] hover:bg-white/[0.12] text-white font-black uppercase italic tracking-widest backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 border border-white/[0.12] hover:border-white/25 active:scale-[0.98]">
            Watch Season Preview
            <Play className="h-4 w-4 fill-current" />
          </button>
        </motion.div>
      </div>

      {/* Stats sidebar */}
      <motion.div
        {...fadeUp(0.6)}
        className="absolute bottom-10 left-10 hidden lg:flex flex-col gap-5"
      >
        {[
          { value: '13', label: 'BTCC Seasons\nExperience' },
          { value: '16', label: 'Career Wins &\nPodiums' },
        ].map(({ value, label }) => (
          <div key={value} className="flex items-center gap-4 border-l-2 border-red-600 pl-4 py-2">
            <span className="text-4xl font-black italic">{value}</span>
            <span className="text-xs font-bold uppercase tracking-widest leading-snug text-zinc-400 whitespace-pre-line">
              {label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
