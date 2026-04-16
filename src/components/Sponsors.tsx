export default function Sponsors() {
  const sponsors = [
    { name: 'LKQ Euro Car Parts', logo: 'Title Sponsor', tagline: 'Leading the way in car parts' },
    { name: 'Power Maxed Racing', logo: 'Official Team', tagline: 'Built to Win' },
    { name: 'Kwik Fit', logo: 'BTCC Partner', tagline: 'Keeping you on the road' },
    { name: 'Dunlop', logo: 'Tyre Partner', tagline: 'Grip & Performance' },
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="flex flex-col items-center justify-center group">
              <div className="w-full aspect-[3/2] bg-zinc-100 flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all duration-500 border border-transparent hover:border-zinc-200">
                <span className="text-2xl font-black italic tracking-tighter text-zinc-300 group-hover:text-black uppercase text-center">
                  {sponsor.logo}
                </span>
              </div>
              <p className="mt-4 font-black uppercase italic text-xs tracking-widest text-zinc-400 group-hover:text-red-600 transition-colors">
                {sponsor.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-zinc-950 text-white flex flex-col md:flex-row items-center justify-between gap-8 rounded-sm">
          <div>
            <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-2">Want to Join the Team?</h3>
            <p className="text-zinc-400 font-bold uppercase text-xs tracking-widest">Explore Partnership Opportunities for the 2026/27 Seasons</p>
          </div>
          <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase italic tracking-widest transition-all">
            Partnership Enquiry
          </button>
        </div>
      </div>
    </section>
  );
}
