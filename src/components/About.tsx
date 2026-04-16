import { Flag, Shield, Trophy, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { name: 'BTCC Seasons', value: '13', icon: <Trophy className="h-6 w-6 text-red-600" /> },
    { name: 'Race Car', value: 'Audi S3', icon: <Flag className="h-6 w-6 text-red-600" /> },
    { name: 'Current Team', value: 'PMR', icon: <Users className="h-6 w-6 text-red-600" /> },
    { name: 'Title Partner', value: 'LKQ Euro', icon: <Shield className="h-6 w-6 text-red-600" /> },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl" />
            <div className="aspect-[4/5] bg-[url('https://images.unsplash.com/photo-1511919095327-ef552af36c3a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center rounded-sm border-2 border-white/5 shadow-2xl scale-95" />
            <div className="absolute -bottom-6 -right-6 p-10 bg-black border border-white/10 hidden md:block">
              <span className="text-8xl font-black italic tracking-tighter text-red-600">16</span>
              <p className="font-bold uppercase tracking-widest text-sm">BTCC Number</p>
            </div>
          </div>

          <div>
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic">The Story So Far</span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-8 leading-tight">
              A Seasoned Veteran<br/>at 29.
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-10">
              <p>
                Aiden Moffat made history as the youngest driver ever to compete in the BTCC in 2013. Now entering his 13th full season, he brings unparalleled experience to <span className="text-white font-bold">Power Maxed Racing</span>.
              </p>
              <p>
                For 2026, Aiden returns to front-wheel drive, piloting the brand-new <span className="text-white font-bold">Audi S3 Saloon</span>. Backed by long-term partner <span className="text-white font-bold">LKQ Euro Car Parts</span>, he is poised to be a consistent front-runner and championship contender.
              </p>
              <p>
                Aiden isn't just about winning on the track; he's dedicated to sharing his knowledge and experience through specialized race training programs designed for drivers of all levels.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col gap-2">
                  {stat.icon}
                  <span className="text-2xl font-black italic tracking-tighter">{stat.value}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{stat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
