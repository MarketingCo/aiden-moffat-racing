'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Timer, Trophy, Zap } from 'lucide-react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    // Target: April 19, 2026 - BTCC Season Opener at Donington Park
    const targetDate = new Date('2026-04-19T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute top-0 right-0 p-8 hidden xl:block z-30">
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-black/80 backdrop-blur-xl border border-white/10 p-6 skew-x-[-6deg]"
      >
        <div className="flex items-center gap-3 mb-4 skew-x-[6deg]">
          <Timer className="text-red-600 h-5 w-5 animate-pulse" />
          <span className="text-white font-black uppercase italic text-xs tracking-[0.2em]">Next Race: Donington Park</span>
        </div>
        
        <div className="flex gap-4 skew-x-[6deg]">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hrs', value: timeLeft.hours },
            { label: 'Min', value: timeLeft.minutes },
            { label: 'Sec', value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl font-black italic text-white tracking-tighter leading-none">{String(item.value).padStart(2, '0')}</div>
              <div className="text-[8px] font-bold uppercase text-red-600 tracking-widest mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
