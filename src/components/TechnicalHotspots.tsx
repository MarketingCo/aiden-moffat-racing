'use client';

import { motion } from 'framer-motion';
import { Crosshair, Cpu, Shield, Zap } from 'lucide-react';

export default function TechnicalHotspots() {
  const hotspots = [
    { id: 1, top: '20%', left: '30%', icon: <Cpu className="h-4 w-4" />, title: 'TOCA 2.0L Turbo', detail: '350+ BHP custom mapped for FWD delivery.' },
    { id: 2, top: '45%', left: '70%', icon: <Shield className="h-4 w-4" />, title: 'Roll Cage', detail: 'T45 Steel multi-point reinforcement for max chassis rigidity.' },
    { id: 3, top: '75%', left: '25%', icon: <Zap className="h-4 w-4" />, title: 'Hybrid System', detail: '100V Cosworth electronics for tactical deployment.' },
    { id: 4, top: '80%', left: '55%', icon: <Crosshair className="h-4 w-4" />, title: 'AP Racing', detail: '6-piston monoblock calipers with carbon-metallic pads.' },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm text-center">X-Ray Analysis</span>
          <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none mb-6">
            Engineering <span className="text-white">Precision</span>
          </h2>
        </div>

        <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 shadow-2xl group">
          <div className="absolute inset-0 bg-[url('/images/audi1.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/40 backdrop-grayscale-[0.5] group-hover:backdrop-grayscale-0 transition-all duration-700" />
          
          {/* Scanning Overlay */}
          <div className="absolute inset-0 pointer-events-none border-2 border-red-600/20 m-4">
             <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-600" />
             <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-600" />
             <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-600" />
             <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-600" />
          </div>

          {hotspots.map((point) => (
            <motion.div
              key={point.id}
              className="absolute"
              style={{ top: point.top, left: point.left }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
            >
              <div className="relative group/hotspot">
                <div className="p-3 bg-red-600 text-white rounded-full cursor-pointer animate-pulse relative z-10">
                  {point.icon}
                </div>
                <div className="absolute top-1/2 left-full ml-4 -translate-y-1/2 w-64 p-4 bg-zinc-900/90 backdrop-blur-md border border-red-600/30 opacity-0 group-hover/hotspot:opacity-100 transition-all pointer-events-none skew-x-[-4deg]">
                  <h4 className="text-white font-black uppercase italic tracking-tighter text-sm mb-1">{point.title}</h4>
                  <p className="text-zinc-400 font-bold uppercase text-[9px] tracking-widest leading-relaxed">
                    {point.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
