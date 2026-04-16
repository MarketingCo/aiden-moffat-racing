'use client';

import { motion } from 'framer-motion';
import { CloudRain, Wind, Thermometer, Activity, Gauge } from 'lucide-react';

export default function ChampionshipHUD() {
  const telemetryData = [
    { label: 'Brake Temp', value: '452°C', status: 'Optimal' },
    { label: 'Tyre Pressure', value: '2.1 Bar', status: 'Stable' },
    { label: 'Hybrid Charge', value: '88%', status: 'Deploying' },
    { label: 'Engine Map', value: 'Mode 7', status: 'Aggressive' },
  ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      {/* Background Scanning Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="h-full w-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Weather Hub */}
          <div className="bg-black/50 backdrop-blur-xl border border-white/5 p-8 rounded-sm relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <CloudRain className="h-40 w-40 text-white" />
            </div>
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-6 block italic text-[10px]">Circuit Conditions</span>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-4xl font-black italic text-white tracking-tighter uppercase leading-none">Donington</h3>
                <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest mt-2">Leicestershire, UK</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-black text-white italic">14°C</div>
                <div className="text-zinc-500 font-bold uppercase text-[8px] tracking-widest">Partly Cloudy</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-zinc-900/50 border border-white/5">
                <Wind className="h-4 w-4 text-red-600" />
                <span className="text-[10px] font-black text-white uppercase italic">12 MPH SW</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-zinc-900/50 border border-white/5">
                <Thermometer className="h-4 w-4 text-red-600" />
                <span className="text-[10px] font-black text-white uppercase italic">Humidity: 62%</span>
              </div>
            </div>
          </div>

          {/* Telemetry Dashboard */}
          <div className="lg:col-span-2 bg-black/50 backdrop-blur-xl border border-white/5 p-8 rounded-sm relative overflow-hidden">
             <div className="flex items-center justify-between mb-8">
               <span className="text-red-600 font-bold uppercase tracking-[0.3em] italic text-[10px]">Real-Time Diagnostics</span>
               <div className="flex items-center gap-2">
                 <div className="h-2 w-2 bg-red-600 rounded-full animate-ping" />
                 <span className="text-[9px] font-black text-white uppercase tracking-widest">Live System Link</span>
               </div>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {telemetryData.map((data, idx) => (
                  <motion.div 
                    key={data.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 border-l-2 border-red-600 bg-zinc-900/30"
                  >
                    <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1">{data.label}</div>
                    <div className="text-2xl font-black italic text-white tracking-tighter mb-2">{data.value}</div>
                    <div className="flex items-center gap-2">
                      <Activity className="h-3 w-3 text-red-600" />
                      <span className="text-[8px] font-black text-zinc-400 uppercase italic">{data.status}</span>
                    </div>
                  </motion.div>
                ))}
             </div>

             <div className="mt-8 p-4 bg-red-600/10 border border-red-600/20 rounded-sm flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Gauge className="h-5 w-5 text-red-600" />
                  <span className="text-[10px] font-black text-white uppercase italic tracking-widest">Current Throttle Position: 0% (Static)</span>
                </div>
                <div className="hidden md:block h-px flex-grow mx-8 bg-red-600/20" />
                <span className="text-[8px] font-black text-red-600 uppercase tracking-[0.2em] animate-pulse">Waiting for Paddock Signal</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
