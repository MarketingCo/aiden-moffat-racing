import { Flag, Shield, Trophy, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { name: 'BTCC Seasons', value: '13', icon: <Trophy className="h-5 w-5 text-red-600" /> },
    { name: 'Race Car', value: 'Audi S3', icon: <Flag className="h-5 w-5 text-red-600" /> },
    { name: 'Current Team', value: 'PMR', icon: <Users className="h-5 w-5 text-red-600" /> },
    { name: 'Title Partner', value: 'LKQ Euro', icon: <Shield className="h-5 w-5 text-red-600" /> },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="aspect-[4/5] bg-[url('/images/Aiden_Trophy.jpg')] bg-cover bg-center border border-white/[0.06] shadow-2xl" />
            <div className="absolute -bottom-6 -right-6 p-8 bg-black border border-white/[0.08] hidden md:block">
              <span className="text-7xl font-black italic tracking-tighter text-red-600">16</span>
              <p className="font-bold uppercase tracking-widest text-xs text-zinc-400 mt-1">BTCC Number</p>
            </div>
          </div>

          {/* Copy */}
          <div>
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-xs">
              The Story So Far
            </span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-8 leading-tight">
              A Seasoned Veteran<br />at 29.
            </h2>
            <div className="space-y-5 text-zinc-400 text-base leading-relaxed mb-10">
              <p>
                Aiden Moffat made history as the youngest driver ever to compete in the BTCC in 2013. Now entering his 13th full season, he brings unparalleled experience to{' '}
                <span className="text-white font-semibold">Power Maxed Racing</span>.
              </p>
              <p>
                For 2026, Aiden returns to front-wheel drive, piloting the brand-new{' '}
                <span className="text-white font-semibold">Audi S3 Saloon</span>. Backed by long-term partner{' '}
                <span className="text-white font-semibold">LKQ Euro Car Parts</span>, he is poised to be a consistent front-runner and championship contender.
              </p>
              <p>
                Beyond the circuit, Aiden is committed to sharing his knowledge through specialist race training programmes designed for drivers at all levels.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col gap-2">
                  {stat.icon}
                  <span className="text-xl font-black italic tracking-tighter">{stat.value}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 leading-tight">
                    {stat.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
