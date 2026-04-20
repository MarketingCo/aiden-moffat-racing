'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GlobalEliteEffects({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Simulate high-tech boot sequence
    const timer = setTimeout(() => setLoading(false), 2500);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative z-10 text-center"
            >
              <div className="text-4xl font-black italic tracking-tighter text-white mb-4">
                AIDEN<span className="text-red-600">MOFFAT</span>
              </div>
              <div className="h-1 w-64 bg-zinc-900 overflow-hidden relative">
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-red-600"
                />
              </div>
              <div className="mt-4 flex gap-4 justify-center">
                 <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-[0.3em] animate-pulse">Initializing Telemetry...</span>
              </div>
            </motion.div>

            {/* Matrix-style data stream bits */}
            <div className="absolute bottom-10 left-10 text-[8px] font-mono text-red-600/40 space-y-1 hidden md:block">
               <div>&gt; SYSTEM_BOOT_SEQUENCE: OK</div>
               <div>&gt; ENGINE_MAPPING: OPTIMAL</div>
               <div>&gt; CHASSIS_STIFFNESS: 100%</div>
               <div>&gt; BTCC_DATABASE_CONNECT: ESTABLISHED</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Cursor - Sharp Chevron */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[99] hidden lg:flex items-center justify-center font-black text-cyan-400 text-3xl italic tracking-tighter mix-blend-difference"
        style={{ 
          x: mousePos.x - 16,
          y: mousePos.y - 16,
        }}
      >
        &gt;
      </motion.div>

      <div className={loading ? 'hidden' : 'block'}>
        {children}
      </div>
    </>
  );
}
