export default function Sponsors() {
  const sponsors = [
    { name: 'LKQ Euro Car Parts', type: 'Title Partner', accent: 'bg-blue-600' },
    { name: 'Power Maxed Racing', type: 'Official Team', accent: 'bg-red-600' },
    { name: 'Steel Seal', type: 'Major Sponsor', accent: 'bg-yellow-500' },
    { name: 'Castrol', type: 'Technical Partner', accent: 'bg-green-600' },
  ];

  return (
    <section id="sponsors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic">Our Partners</span>
          <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4 text-black">
            Powered by <span className="text-red-600">The Best</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="flex flex-col group">
              <div className="w-full aspect-video bg-zinc-100 flex flex-col items-center justify-center p-8 transition-all duration-500 border-b-4 border-transparent group-hover:border-red-600 group-hover:shadow-xl relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-2 h-full ${sponsor.accent}`} />
                <span className="text-xl font-black italic tracking-tighter text-zinc-800 uppercase text-center leading-none">
                  {sponsor.name}
                </span>
                <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  {sponsor.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-zinc-950 text-white flex flex-col md:flex-row items-center justify-between gap-8 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10">
            <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-2">Drive Your Brand Forward</h3>
            <p className="text-zinc-400 font-bold uppercase text-xs tracking-widest">Bespoke Sponsorship Packages for the 2026 Season Launch</p>
          </div>
          <button className="relative z-10 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase italic tracking-widest transition-all">
            Partnership Enquiry
          </button>
        </div>
      </div>
    </section>
  );
}
