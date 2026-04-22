'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Monitor, Users, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'One-on-One Racing Coach',
      description:
        'Personalised high-performance coaching tailored to your level — focusing on line selection, data analysis, and mental preparation.',
      icon: <Zap className="h-8 w-8 text-red-600" />,
      features: [
        'Personal Track Session',
        'Full Data Breakdown',
        'Live Radio Coaching',
        'Post-Session Video Analysis',
      ],
      price: 'Contact for Pricing',
    },
    {
      title: 'Group Track Days',
      description:
        'Dynamic group training designed to foster competitive environments — ideal for teams or clubs looking to shave seconds off their lap times.',
      icon: <Users className="h-8 w-8 text-red-600" />,
      features: [
        'Lead-Follow Drills',
        'Group Data Debriefs',
        'Race Craft Tactics',
        'Pit-Stop Workshop',
      ],
      price: 'From £450',
    },
    {
      title: 'Advanced Sim Training',
      description:
        'Utilise professional-grade simulators to master circuits before you ever hit the tarmac — perfect for off-season preparation.',
      icon: <Monitor className="h-8 w-8 text-red-600" />,
      features: [
        'Assetto Corsa Pro Setup',
        'Circuit Familiarisation',
        'Pressure Scenarios',
        'Remote Sessions Available',
      ],
      price: '£150 / hr',
    },
  ];

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-red-600/[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-3 block italic text-xs">
            Master the Track
          </span>
          <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4 leading-none">
            Race <span className="text-white">Training</span>
          </h2>
          <div className="w-16 h-0.5 bg-red-600 mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="group relative p-8 bg-zinc-900/60 border border-white/[0.06] hover:border-red-600/40 hover:bg-zinc-900/80 transition-all duration-300 overflow-hidden"
            >
              {/* Decorative top accent */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-400" />

              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-black uppercase italic tracking-tighter mb-3">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">{service.description}</p>

              <ul className="space-y-2.5 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between border-t border-white/[0.06] pt-5">
                <span className="text-red-600 font-black italic text-xs tracking-widest uppercase">
                  {service.price}
                </span>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                  className="px-5 py-2 bg-white text-black font-black uppercase italic text-xs tracking-widest hover:bg-red-600 hover:text-white transition-all duration-200 active:scale-[0.98]"
                >
                  Enquire
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
