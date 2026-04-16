'use client';

import { motion } from 'framer-motion';

export default function Sponsors() {
  const categories = [
    {
      title: "Title & Primary Partners",
      partners: [
        { name: 'LKQ Euro Car Parts', type: 'Aiden\'s Title Partner', accent: 'bg-blue-600' },
        { name: 'Power Maxed', type: 'Team Title Partner', accent: 'bg-red-600' },
        { name: 'Steel Seal', type: 'Major Partner', accent: 'bg-yellow-500' },
      ]
    },
    {
      title: "Technical & Performance",
      partners: [
        { name: 'Audi', type: 'Vehicle Manufacturer', accent: 'bg-zinc-400' },
        { name: 'Awesome', type: 'Performance Parts', accent: 'bg-orange-500' },
        { name: 'Eibach', type: 'Suspension Partner', accent: 'bg-red-500' },
        { name: 'Teng Tools', type: 'Official Tools', accent: 'bg-red-700' },
        { name: 'Milltek Sport', type: 'Exhaust Systems', accent: 'bg-zinc-600' },
        { name: 'Pipercross', type: 'Air Filtration', accent: 'bg-zinc-800' },
      ]
    },
    {
      title: "BTCC Series Partners",
      partners: [
        { name: 'Kwik Fit', type: 'Series Title Sponsor', accent: 'bg-blue-700' },
        { name: 'Goodyear', type: 'Official Tyre Partner', accent: 'bg-yellow-400' },
        { name: 'Castrol', type: 'Official Oil Partner', accent: 'bg-green-600' },
        { name: 'ITV Sport', type: 'Official Broadcaster', accent: 'bg-blue-400' },
      ]
    }
  ];

  return (
    <section id="sponsors" className="py-24 bg-white selection:bg-black selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm">Our Network</span>
          <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4 text-black leading-none">
            Strategic <span className="text-red-600">Partnerships</span>
          </h2>
          <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.2em] max-w-md mx-auto">
            Aiden is proud to represent a elite roster of global automotive and lifestyle brands.
          </p>
        </div>

        <div className="space-y-24">
          {categories.map((cat, catIdx) => (
            <div key={cat.title}>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px bg-zinc-200 flex-grow" />
                <h3 className="text-zinc-400 font-black uppercase italic text-xs tracking-[0.3em] whitespace-nowrap">
                  {cat.title}
                </h3>
                <div className="h-px bg-zinc-200 flex-grow" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cat.partners.map((partner, idx) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (catIdx * 0.1) + (idx * 0.05) }}
                    className="group"
                  >
                    <div className="w-full aspect-[16/7] bg-zinc-50 flex flex-col items-center justify-center p-6 transition-all duration-300 border border-zinc-100 hover:border-red-600/20 hover:bg-white hover:shadow-lg relative overflow-hidden">
                      <div className={`absolute left-0 top-0 w-1 h-full ${partner.accent} opacity-40 group-hover:opacity-100 transition-opacity`} />
                      <span className="text-lg font-black italic tracking-tighter text-zinc-800 uppercase text-center leading-none group-hover:text-black transition-colors">
                        {partner.name}
                      </span>
                      <span className="mt-2 text-[9px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-zinc-500 transition-colors">
                        {partner.type}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-zinc-950 text-white flex flex-col lg:flex-row items-center justify-between gap-12 rounded-sm relative overflow-hidden skew-x-[-2deg]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="relative z-10 skew-x-[2deg]">
            <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-4 leading-tight">
              Scale Your Brand<br/>With <span className="text-red-600">Aiden Moffat Racing</span>
            </h3>
            <p className="text-zinc-400 font-bold uppercase text-[10px] tracking-[0.2em] max-w-xl">
              Unlock global exposure through prime-time ITV coverage, VIP hospitality, and high-performance brand activation across the 2026 BTCC season.
            </p>
          </div>
          <button className="relative z-10 skew-x-[2deg] px-12 py-5 bg-red-600 hover:bg-red-700 text-white font-black uppercase italic tracking-widest transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap">
            Download Partner Deck
          </button>
        </div>
      </div>
    </section>
  );
}
