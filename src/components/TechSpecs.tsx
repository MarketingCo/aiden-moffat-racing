'use client';

import { motion } from 'framer-motion';
import { Gauge, Fuel, Zap, Settings2 } from 'lucide-react';

export default function TechSpecs() {
  const specs = [
    { name: 'Engine', value: '2.0L Turbocharged NGTC-spec', icon: <Fuel className="h-6 w-6 text-red-600" /> },
    { name: 'Power', value: '350+ BHP @ 7000 RPM', icon: <Zap className="h-6 w-6 text-red-600" /> },
    { name: 'Gearbox', value: '6-Speed Xtrac Sequential', icon: <Settings2 className="h-6 w-6 text-red-600" /> },
    { name: 'Drivetrain', value: 'Front-Wheel Drive', icon: <Gauge className="h-6 w-6 text-red-600" /> },
  ];

  return (
    <section id="the-machine" className="py-24 bg-zinc-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm">The Engineering</span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-8 leading-tight">
              The <span className="text-white">Machine</span>
            </h2>
            <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-12">
              Power Maxed Racing's 2026 Audi S3 Saloon is a masterpiece of NGTC engineering, specifically developed for the demands of the BTCC.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {specs.map((spec) => (
                <div key={spec.name} className="p-6 bg-zinc-900/50 border border-white/5 rounded-sm group hover:border-red-600/30 transition-all">
                  <div className="mb-4">{spec.icon}</div>
                  <h4 className="text-white font-black uppercase italic tracking-tighter text-lg mb-1">{spec.name}</h4>
                  <p className="text-zinc-500 font-bold uppercase text-[9px] tracking-widest leading-relaxed">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-red-600/10 rounded-full blur-[120px] -z-10" />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative aspect-video rounded-sm overflow-hidden border border-white/10"
            >
              <div 
                className="w-full h-full bg-[url('/images/audi2.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 flex items-center gap-4">
                <div className="p-4 bg-red-600 text-white skew-x-[-12deg]">
                  <span className="font-black italic text-xl skew-x-[12deg]">2026</span>
                </div>
                <div className="font-black uppercase italic text-sm tracking-tighter">Audi S3 NGTC Specification</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
