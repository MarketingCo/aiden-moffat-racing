'use client';

import { motion } from 'framer-motion';

export default function Sponsors() {
  const categories = [
    {
      title: "Title & Primary Partners",
      partners: [
        { 
          name: 'LKQ Euro Car Parts', 
          type: 'Aiden\'s Title Partner', 
          accent: 'bg-blue-600',
          svg: (
            <svg viewBox="0 0 300 80" className="h-full w-full">
              <rect width="80" height="40" x="10" y="20" fill="#0054A6" rx="4"/>
              <text x="18" y="50" className="font-black" fill="white" fontSize="24">LKQ</text>
              <text x="100" y="45" className="font-bold" fill="#0054A6" fontSize="18">Euro Car Parts</text>
            </svg>
          )
        },
        { 
          name: 'Power Maxed', 
          type: 'Team Title Partner', 
          accent: 'bg-red-600',
          svg: (
            <svg viewBox="0 0 400 100" className="h-full w-full">
              <text x="10" y="60" className="italic font-black" fill="#E21F26" fontSize="48">POWER MAXED</text>
              <text x="280" y="60" className="font-bold" fill="#333" fontSize="24">RACING</text>
            </svg>
          )
        },
        { 
          name: 'Steel Seal', 
          type: 'Major Partner', 
          accent: 'bg-yellow-500',
          svg: (
            <svg viewBox="0 0 250 60" className="h-full w-full">
              <text x="10" y="45" className="font-black" fill="#222" fontSize="36">STEEL SEAL</text>
              <path d="M10 50h230v4H10z" fill="#E21F26"/>
            </svg>
          )
        },
      ]
    },
    {
      title: "Technical & Performance",
      partners: [
        { 
          name: 'Audi', 
          type: 'Vehicle Manufacturer', 
          accent: 'bg-zinc-400',
          svg: (
            <svg viewBox="0 0 1000 353" fill="currentColor" className="h-full w-full">
              <path d="M176.5 353c-97.5 0-176.5-79-176.5-176.5S79 0 176.5 0s176.5 79 176.5 176.5S274 353 176.5 353zm0-313c-75.4 0-136.5 61.1-136.5 136.5S101.1 313 176.5 313s136.5-61.1 136.5-136.5S251.9 40 176.5 40z"/>
              <path d="M392.2 353c-97.5 0-176.5-79-176.5-176.5S294.7 0 392.2 0s176.5 79 176.5 176.5S489.7 353 392.2 353zm0-313c-75.4 0-136.5 61.1-136.5 136.5S316.8 313 392.2 313s136.5-61.1 136.5-136.5S467.6 40 392.2 40z"/>
              <path d="M607.8 353c-97.5 0-176.5-79-176.5-176.5S510.3 0 607.8 0s176.5 79 176.5 176.5S705.3 353 607.8 353zm0-313c-75.4 0-136.5 61.1-136.5 136.5S532.4 313 607.8 313s136.5-61.1 136.5-136.5S683.2 40 607.8 40z"/>
              <path d="M823.5 353c-97.5 0-176.5-79-176.5-176.5S726 0 823.5 0s176.5 79 176.5 176.5S921 353 823.5 353zm0-313c-75.4 0-136.5 61.1-136.5 136.5S748.1 313 823.5 313s136.5-61.1 136.5-136.5S898.9 40 823.5 40z"/>
            </svg>
          )
        },
        { name: 'Awesome', type: 'Performance Parts', accent: 'bg-orange-500' },
        { name: 'Eibach', type: 'Suspension Partner', accent: 'bg-red-500' },
        { name: 'Teng Tools', type: 'Official Tools', accent: 'bg-red-700' },
        { name: 'Milltek Sport', type: 'Exhaust Systems', accent: 'bg-zinc-600' },
      ]
    },
    {
      title: "BTCC Series Partners",
      partners: [
        { 
          name: 'Kwik Fit', 
          type: 'Series Title Sponsor', 
          accent: 'bg-blue-700',
          svg: (
            <svg viewBox="0 0 200 50" className="h-full w-full">
              <rect width="200" height="50" fill="#0054A6"/>
              <circle cx="170" cy="25" r="15" fill="#FCAF17"/>
              <text x="10" y="35" className="italic font-bold" fill="white" fontSize="28">Kwik Fit</text>
            </svg>
          )
        },
        { 
          name: 'Goodyear', 
          type: 'Official Tyre Partner', 
          accent: 'bg-yellow-400',
          svg: (
            <svg viewBox="0 0 300 60" fill="#002E67" className="h-full w-full">
              <path d="M45.2 15.5l-5.4 12.2h10.8l-5.4-12.2zm-15.2 28.5l12.5-28.5h5.4l12.5 28.5h-5.8l-3.2-7.5H31.2l-3.2 7.5h-5.8z"/>
              <path fill="#FFDE00" d="M150 10c-5 0-10 5-10 10s5 10 10 10 10-5 10-10-5-10-10-10zm0 5c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z"/>
            </svg>
          )
        },
        { 
          name: 'Castrol', 
          type: 'Official Oil Partner', 
          accent: 'bg-green-600',
          svg: (
            <svg viewBox="0 0 158 40" className="h-full w-full">
              <path fill="#00824D" d="M18.5 0C8.3 0 0 8.3 0 18.5S8.3 37 18.5 37h121c10.2 0 18.5-8.3 18.5-18.5S149.7 0 139.5 0h-121z"/>
              <path fill="#FFF" d="M25.4 25.8c-4.2 0-7.6-3.4-7.6-7.6s3.4-7.6 7.6-7.6 7.6 3.4 7.6 7.6-3.4 7.6-7.6 7.6z"/>
              <path fill="#E21F26" d="M139.5 5.5c7.2 0 13 5.8 13 13s-5.8 13-13 13-13-5.8-13-13 5.8-13 13-13z"/>
            </svg>
          )
        },
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
                      
                      {partner.svg ? (
                        <div className="h-12 w-full max-w-[180px] flex items-center justify-center transition-transform group-hover:scale-110 grayscale hover:grayscale-0">
                          {partner.svg}
                        </div>
                      ) : (
                        <>
                          <span className="text-lg font-black italic tracking-tighter text-zinc-800 uppercase text-center leading-none group-hover:text-black transition-colors">
                            {partner.name}
                          </span>
                          <span className="mt-2 text-[9px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-zinc-500 transition-colors">
                            {partner.type}
                          </span>
                        </>
                      )}
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
