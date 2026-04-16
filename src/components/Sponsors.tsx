'use client';

import { motion } from 'framer-motion';

export default function Sponsors() {
  const categories = [
    {
      title: "Title & Primary Partners",
      partners: [
        { 
          name: 'LKQ Euro Car Parts', 
          href: 'https://www.eurocarparts.com',
          type: 'Aiden\'s Title Partner', 
          accent: 'bg-blue-600',
          svg: (
            <svg viewBox="0 0 300 80" className="h-full w-full">
              <rect width="80" height="40" x="10" y="20" fill="#0054A6" rx="4"/>
              <text x="18" y="50" style={{ fontWeight: 900 }} fill="white" fontSize="24">LKQ</text>
              <text x="100" y="45" style={{ fontWeight: 700 }} fill="#0054A6" fontSize="18">Euro Car Parts</text>
            </svg>
          )
        },
        { 
          name: 'Power Maxed', 
          href: 'https://www.powermaxed.com',
          type: 'Team Title Partner', 
          accent: 'bg-red-600',
          svg: (
            <svg viewBox="0 0 400 100" className="h-full w-full">
              <text x="10" y="60" style={{ fontStyle: 'italic', fontWeight: 900 }} fill="#E21F26" fontSize="48">POWER MAXED</text>
              <text x="280" y="60" style={{ fontWeight: 700 }} fill="white" fontSize="24">RACING</text>
            </svg>
          )
        },
        { 
          name: 'Steel Seal', 
          href: 'https://www.steelseal.co.uk',
          type: 'Major Partner', 
          accent: 'bg-yellow-500',
          svg: (
            <svg viewBox="0 0 250 60" className="h-full w-full">
              <text x="10" y="45" style={{ fontWeight: 900 }} fill="white" fontSize="36">STEEL SEAL</text>
              <path d="M10 50h230v4H10z" fill="#E21F26"/>
            </svg>
          )
        },
      ]
    },
    {
      title: "Personal & Technical Partners",
      partners: [
        { 
          name: 'Enviroworx', 
          href: 'https://www.enviroworx.co.uk',
          type: 'Director\'s Brand', 
          accent: 'bg-green-500',
          svg: (
            <svg viewBox="0 0 400 100" className="h-full w-full">
              <text x="10" y="70" style={{ fontWeight: 900 }} fontSize="45" fill="white" letterSpacing="-1">ENVIROWORX</text>
              <path d="M340 30 L360 70 M360 30 L340 70" stroke="#4CAF50" strokeWidth="8" strokeLinecap="round"/>
            </svg>
          )
        },
        { 
          name: 'A1 Automotive', 
          href: 'https://powermaxedracing.com/a1-automotive-race-and-restoration/',
          type: 'Race & Restoration', 
          accent: 'bg-red-700',
          svg: (
            <svg viewBox="0 0 400 120" className="h-full w-full">
              <text x="10" y="85" style={{ fontWeight: 900 }} fontSize="100" fill="white">A1</text>
              <text x="120" y="55" style={{ fontWeight: 'bold' }} fontSize="25" fill="white">AUTOMOTIVE</text>
              <text x="120" y="85" fontSize="18" fill="#E31E24">RACE & RESTORATION</text>
            </svg>
          )
        },
        { 
          name: 'CarCave', 
          href: 'https://www.carcave.scot',
          type: 'Scotland Partner', 
          accent: 'bg-zinc-700',
          svg: (
            <svg viewBox="0 0 400 100" className="h-full w-full">
              <path d="M20 20 L60 20 L60 80 L20 80 Z" fill="none" stroke="white" strokeWidth="4"/>
              <text x="75" y="70" style={{ fontWeight: 'bold' }} fontSize="45" fill="white">CARCAVE</text>
            </svg>
          )
        },
        { 
          name: 'Audi', 
          href: 'https://www.audi.co.uk',
          type: 'Vehicle Manufacturer', 
          accent: 'bg-zinc-400',
          svg: (
            <svg viewBox="0 0 1000 353" fill="white" className="h-full w-full">
              <path d="M176.5 353c-97.5 0-176.5-79-176.5-176.5S79 0 176.5 0s176.5 79 176.5 176.5S274 353 176.5 353zm0-313c-75.4 0-136.5 61.1-136.5 136.5S101.1 313 176.5 313s136.5-61.1 136.5-136.5S251.9 40 176.5 40z"/>
              <path d="M392.2 353c-97.5 0-176.5-79-176.5-176.5S294.7 0 392.2 0s176.5 79 176.5 176.5S489.7 353 392.2 353zm0-313c-75.4 0-136.5 61.1-136.5 136.5S316.8 313 392.2 313s136.5-61.1 136.5-136.5S467.6 40 392.2 40z"/>
              <path d="M607.8 353c-97.5 0-176.5-79-176.5-176.5S510.3 0 607.8 0s176.5 79 176.5 176.5S705.3 353 607.8 353zm0-313c-75.4 0-136.5 61.1-136.5 136.5S532.4 313 607.8 313s136.5-61.1 136.5-136.5S683.2 40 607.8 40z"/>
              <path d="M823.5 353c-97.5 0-176.5-79-176.5-176.5S726 0 823.5 0s176.5 79 176.5 176.5S921 353 823.5 353zm0-313c-75.4 0-136.5 61.1-136.5 136.5S748.1 313 823.5 313s136.5-61.1 136.5-136.5S898.9 40 823.5 40z"/>
            </svg>
          )
        },
      ]
    },
    {
      title: "BTCC Series Partners",
      partners: [
        { 
          name: 'Kwik Fit', 
          href: 'https://www.kwik-fit.com',
          type: 'Series Title Sponsor', 
          accent: 'bg-blue-700',
          svg: (
            <svg viewBox="0 0 200 50" className="h-full w-full">
              <rect width="200" height="50" fill="#0054A6"/>
              <circle cx="170" cy="25" r="15" fill="#FCAF17"/>
              <text x="10" y="35" style={{ fontStyle: 'italic', fontWeight: 700 }} fill="white" fontSize="28">Kwik Fit</text>
            </svg>
          )
        },
        { 
          name: 'Goodyear', 
          href: 'https://www.goodyear.eu',
          type: 'Official Tyre Partner', 
          accent: 'bg-yellow-400',
          svg: (
            <svg viewBox="0 0 500 100" className="h-full w-full">
               <path fill="white" d="M45.2,72.1c-4.8,0-8.8-1.4-12-4.1c-3.2-2.7-4.8-6.6-4.8-11.6c0-5.1,1.7-9.1,5.1-11.9c3.4-2.8,7.9-4.2,13.5-4.2c3.8,0,7.1,0.6,9.9,1.8v8.4c-2.8-1.8-5.8-2.7-9-2.7c-2.8,0-5,0.7-6.6,2.1c-1.6,1.4-2.4,3.5-2.4,6.3c0,2.8,0.8,4.9,2.4,6.3c1.6,1.4,3.8,2.1,6.6,2.1c3.4,0,6.5-1,9.3-3v8.4C52.4,71.4,49.1,72.1,45.2,72.1z M105.4,72.1c-5.5,0-10-1.4-13.4-4.2c-3.4-2.8-5.1-6.8-5.1-11.9c0-5,1.6-9,4.8-11.7c3.2-2.7,7.2-4.1,12-4.1c4.8,0,8.8,1.4,12,4.1c3.2,2.7,4.8,6.7,4.8,11.7c0,5.1-1.7,9.1-5.1,11.9C115.4,70.7,110.9,72.1,105.4,72.1z"/>
               <text x="150" y="72" style={{ fontStyle: 'italic', fontWeight: 900 }} fontSize="55" fill="white">GOODYEAR</text>
            </svg>
          )
        },
        { 
          name: 'Castrol', 
          href: 'https://www.castrol.com/en_gb/united-kingdom/home.html',
          type: 'Official Oil Partner', 
          accent: 'bg-green-600',
          svg: (
            <svg viewBox="0 0 300 100" className="h-full w-full">
              <path fill="white" d="M50,20 A30,30 0 1,0 50,80 A30,30 0 0,0 70,75 L65,65 A20,20 0 1,1 50,30 A20,20 0 0,1 65,35 L70,25 A30,30 0 0,0 50,20 Z"/>
              <text x="90" y="65" style={{ fontWeight: 'bold' }} fontSize="45" fill="white">Castrol</text>
            </svg>
          )
        },
        { 
          name: 'ITV Sport', 
          href: 'https://www.itv.com/btcc',
          type: 'Official Broadcaster', 
          accent: 'bg-blue-400',
          svg: (
            <svg viewBox="0 0 300 100" className="h-full w-full">
              <path fill="white" d="M20,40 Q20,30 30,30 L50,30 Q60,30 60,40 L60,70 Q60,80 50,80 L30,80 Q20,80 20,70 Z M80,30 L100,30 L110,60 L120,30 L140,30 L120,80 L100,80 Z"/>
              <text x="150" y="75" style={{ fontWeight: 900 }} fontSize="40" fill="white">SPORT</text>
            </svg>
          )
        },
      ]
    }
  ];

  return (
    <section id="sponsors" className="py-24 bg-black border-t border-white/5 selection:bg-red-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm">Our Network</span>
          <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4 text-white leading-none">
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
                <div className="h-px bg-white/5 flex-grow" />
                <h3 className="text-zinc-600 font-black uppercase italic text-xs tracking-[0.3em] whitespace-nowrap">
                  {cat.title}
                </h3>
                <div className="h-px bg-white/5 flex-grow" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cat.partners.map((partner, idx) => (
                  <motion.a
                    key={partner.name}
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (catIdx * 0.1) + (idx * 0.05) }}
                    className="group"
                  >
                    <div className="w-full aspect-[16/7] bg-zinc-900/50 flex flex-col items-center justify-center p-6 transition-all duration-300 border border-white/5 hover:border-red-600/30 hover:bg-zinc-900 hover:shadow-2xl relative overflow-hidden">
                      <div className={`absolute left-0 top-0 w-1 h-full ${partner.accent} opacity-40 group-hover:opacity-100 transition-opacity`} />
                      
                      {partner.svg ? (
                        <div className="h-12 w-full max-w-[180px] flex items-center justify-center transition-transform group-hover:scale-110 grayscale hover:grayscale-0">
                          {partner.svg}
                        </div>
                      ) : (
                        <>
                          <span className="text-lg font-black italic tracking-tighter text-zinc-400 uppercase text-center leading-none group-hover:text-white transition-colors">
                            {partner.name}
                          </span>
                          <span className="mt-2 text-[9px] font-bold uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors">
                            {partner.type}
                          </span>
                        </>
                      )}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-white text-black flex flex-col lg:flex-row items-center justify-between gap-12 rounded-sm relative overflow-hidden skew-x-[-2deg]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="relative z-10 skew-x-[2deg]">
            <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-4 leading-tight">
              Scale Your Brand<br/>With <span className="text-red-600">Aiden Moffat Racing</span>
            </h3>
            <p className="text-zinc-600 font-bold uppercase text-[10px] tracking-[0.2em] max-w-xl">
              Unlock global exposure through prime-time ITV coverage, VIP hospitality, and high-performance brand activation across the 2026 BTCC season.
            </p>
          </div>
          <button className="relative z-10 skew-x-[2deg] px-12 py-5 bg-black hover:bg-red-600 text-white font-black uppercase italic tracking-widest transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap">
            Download Partner Deck
          </button>
        </div>
      </div>
    </section>
  );
}
