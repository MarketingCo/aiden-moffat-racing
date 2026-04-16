'use client';

export default function LiveTicker() {
  const news = [
    "LIVE: 2026 BTCC SEASON LAUNCH AT BRANDS HATCH COMPLETE",
    "TRACK UPDATE: DONINGTON PARK WEATHER - CLEAR (14°C)",
    "TECH: AUDI S3 NGTC CHASSIS #04 SHAKEDOWN SUCCESSFUL",
    "PARTNERS: LKQ EURO CAR PARTS RENEWS FOR 12TH CONSECUTIVE YEAR",
    "TRAINING: NEW SIMULATOR SLOTS AVAILABLE FOR MAY",
    "RACE: T-MINUS 3 DAYS TO DONINGTON OPENER",
  ];

  return (
    <div className="fixed top-20 left-0 w-full z-40 bg-red-600 h-8 flex items-center overflow-hidden border-b border-black/10">
      <div className="whitespace-nowrap flex animate-marquee">
        {/* Render twice for seamless loop */}
        {[...news, ...news].map((item, idx) => (
          <div key={idx} className="flex items-center mx-8">
            <span className="text-white font-black uppercase italic text-[10px] tracking-[0.2em]">{item}</span>
            <div className="h-1 w-1 bg-white rounded-full ml-16" />
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
