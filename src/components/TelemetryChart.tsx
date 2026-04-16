'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Activity } from 'lucide-react';

const data = [
  { time: '0.0', speed: 110, brake: 0, gear: 4 },
  { time: '0.5', speed: 125, brake: 0, gear: 4 },
  { time: '1.0', speed: 138, brake: 0, gear: 5 },
  { time: '1.5', speed: 145, brake: 10, gear: 5 },
  { time: '2.0', speed: 120, brake: 80, gear: 3 },
  { time: '2.5', speed: 85, brake: 100, gear: 2 },
  { time: '3.0', speed: 65, brake: 90, gear: 2 },
  { time: '3.5', speed: 68, brake: 20, gear: 2 },
  { time: '4.0', speed: 85, brake: 0, gear: 3 },
  { time: '4.5', speed: 105, brake: 0, gear: 3 },
  { time: '5.0', speed: 120, brake: 0, gear: 4 },
];

export default function TelemetryChart() {
  return (
    <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm">Data Acquisition</span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none text-white">
              Lap <span className="text-red-600">Telemetry</span>
            </h2>
          </div>
          <div className="flex gap-4">
             <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-white/10 rounded-sm">
                <div className="h-2 w-2 bg-blue-500 rounded-full" />
                <span className="text-[8px] font-black text-white uppercase tracking-widest">Speed (MPH)</span>
             </div>
             <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-white/10 rounded-sm">
                <div className="h-2 w-2 bg-red-600 rounded-full" />
                <span className="text-[8px] font-black text-white uppercase tracking-widest">Brake Pressure (%)</span>
             </div>
          </div>
        </div>

        <div className="h-[400px] w-full bg-zinc-900/30 border border-white/5 p-8 rounded-sm relative group">
          <div className="absolute top-4 right-4 flex items-center gap-2 text-zinc-600">
             <Activity className="h-4 w-4 animate-pulse text-red-600" />
             <span className="text-[8px] font-black uppercase tracking-[0.3em]">Sector 1 Analysis - Turn 1 (Redgate)</span>
          </div>
          
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorSpeed" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorBrake" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#dc2626" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#dc2626" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
              <XAxis dataKey="time" stroke="#444" fontSize={10} tickFormatter={(val) => `${val}s`} />
              <YAxis stroke="#444" fontSize={10} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#111', border: '1px solid #333', fontSize: '10px', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
              />
              <Area type="monotone" dataKey="speed" stroke="#3b82f6" fillOpacity={1} fill="url(#colorSpeed)" strokeWidth={3} />
              <Area type="monotone" dataKey="brake" stroke="#dc2626" fillOpacity={1} fill="url(#colorBrake)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-6 bg-zinc-900/50 border border-white/5">
              <h4 className="text-white font-black uppercase italic text-xs mb-2">Braking Point</h4>
              <p className="text-zinc-500 font-bold uppercase text-[9px] leading-relaxed">Inititated at 1.4s mark. 100% pressure reached within 0.8s.</p>
           </div>
           <div className="p-6 bg-zinc-900/50 border border-white/5">
              <h4 className="text-white font-black uppercase italic text-xs mb-2">Apex Speed</h4>
              <p className="text-zinc-500 font-bold uppercase text-[9px] leading-relaxed">Minimum velocity of 65 MPH sustained through corner rotation.</p>
           </div>
           <div className="p-6 bg-zinc-900/50 border border-white/5">
              <h4 className="text-white font-black uppercase italic text-xs mb-2">Gear Selection</h4>
              <p className="text-zinc-500 font-bold uppercase text-[9px] leading-relaxed">Downshift sequence: 5-4-3-2. Rapid engine braking utilized.</p>
           </div>
        </div>
      </div>
    </section>
  );
}
