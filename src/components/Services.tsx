import { CheckCircle2, Monitor, Users, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'One-on-One Racing Coach',
      description: 'Personalized high-performance coaching. Tailored for all levels, focusing on line selection, data analysis, and mental preparation.',
      icon: <Zap className="h-10 w-10 text-red-600" />,
      features: ['Personal Track Session', 'Full Data Breakdown', 'Live Radio Coaching', 'Post-Session Video Analysis'],
      price: 'Contact for Pricing',
    },
    {
      title: 'Group Track Days',
      description: 'Dynamic group training designed to foster competitive environments. Ideal for teams or clubs looking to shave seconds.',
      icon: <Users className="h-10 w-10 text-red-600" />,
      features: ['Lead-Follow Drills', 'Group Data Debriefs', 'Race Craft Tactics', 'Pit-Stop Workshop'],
      price: 'From £450',
    },
    {
      title: 'Advanced Sim Training',
      description: 'Utilize professional-grade simulators to master circuits before you ever hit the tarmac. Perfect for off-season preparation.',
      icon: <Monitor className="h-10 w-10 text-red-600" />,
      features: ['Assetto Corsa Pro Setup', 'Circuit Familiarization', 'Stress Scenarios', 'Remote Sessions Available'],
      price: '£150 / hr',
    },
  ];

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-red-600/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic">Master the Track</span>
          <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4 leading-none">
            Race <span className="text-white">Training</span>
          </h2>
          <div className="w-20 h-2 bg-red-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-zinc-900 border border-white/5 hover:border-red-600/50 transition-all duration-500 rounded-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                {service.icon}
              </div>
              
              <div className="mb-8">{service.icon}</div>
              <h3 className="text-2xl font-black uppercase italic italic tracking-tighter mb-4">{service.title}</h3>
              <p className="text-gray-400 font-medium text-sm leading-relaxed mb-8">{service.description}</p>
              
              <ul className="space-y-3 mb-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight">
                    <CheckCircle2 className="h-4 w-4 text-red-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between border-t border-white/5 pt-6">
                <span className="text-red-600 font-black italic tracking-tighter uppercase text-xs tracking-widest">Bespoke Packages</span>
                <button 
                  onClick={() => {
                    const event = new CustomEvent('open-contact');
                    window.dispatchEvent(event);
                  }}
                  className="px-4 py-2 bg-white text-black font-black uppercase italic text-xs tracking-widest hover:bg-red-600 hover:text-white transition-all"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
