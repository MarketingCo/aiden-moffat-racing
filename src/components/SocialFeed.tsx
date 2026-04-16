'use client';

import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, ArrowUpRight, Zap, Users } from 'lucide-react';

export default function SocialFeed() {
  const socialPlatforms = [
    {
      name: 'Instagram',
      handle: '@aidenmoffat16',
      icon: <Instagram className="h-6 w-6" />,
      color: 'hover:bg-pink-600',
      href: 'https://www.instagram.com/aidenmoffat16',
      stats: '45K+ Followers',
      description: 'Behind the scenes, race weekend prep, and personal updates.'
    },
    {
      name: 'Twitter / X',
      handle: '@AidenMoffat16',
      icon: <Twitter className="h-6 w-6" />,
      color: 'hover:bg-blue-500',
      href: 'https://twitter.com/AidenMoffat16',
      stats: 'Live Updates',
      description: 'Real-time race commentary and BTCC series news.'
    },
    {
      name: 'Facebook',
      handle: 'Aiden Moffat Racing',
      icon: <Facebook className="h-6 w-6" />,
      color: 'hover:bg-blue-700',
      href: 'https://www.facebook.com/AidenMoffatRacing',
      stats: 'Community',
      description: 'Long-form updates, race reports, and fan interaction.'
    }
  ];

  return (
    <section id="social" className="py-24 bg-zinc-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Left Column: Heading & X-Feed Callout */}
          <div className="lg:col-span-1">
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm text-center lg:text-left">Connect with Aiden</span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-tight mb-8 text-center lg:text-left">
              Join the <span className="text-white">Community</span>
            </h2>
            <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-12 text-center lg:text-left">
              Stay in the loop with live race data, technical insights, and exclusive behind-the-scenes content from the 2026 BTCC season.
            </p>

            <div className="space-y-4">
               <div className="p-6 bg-zinc-900 border border-white/5 rounded-sm relative group overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                   <Zap className="h-8 w-8 text-red-600" />
                 </div>
                 <h4 className="text-white font-black uppercase italic tracking-tighter text-lg mb-2">Live Race Updates</h4>
                 <p className="text-zinc-500 font-bold uppercase text-[9px] tracking-widest leading-relaxed">
                   Follow @AidenMoffat16 for real-time telemetry updates and radio highlights during race weekends.
                 </p>
               </div>
               
               <div className="p-6 bg-zinc-900 border border-white/5 rounded-sm relative group overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                   <Users className="h-8 w-8 text-red-600" />
                 </div>
                 <h4 className="text-white font-black uppercase italic tracking-tighter text-lg mb-2">Fan Zone Access</h4>
                 <p className="text-zinc-500 font-bold uppercase text-[9px] tracking-widest leading-relaxed">
                   Get exclusive access to virtual meet-and-greets and simulator sessions through our social channels.
                 </p>
               </div>
            </div>
          </div>

          {/* Right Column: Platform Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group relative p-8 bg-zinc-900 border border-white/5 transition-all duration-500 overflow-hidden ${platform.color} hover:border-transparent rounded-sm`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3 bg-zinc-800 group-hover:bg-white group-hover:text-black transition-colors rounded-sm shadow-xl">
                      {platform.icon}
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-zinc-700 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white group-hover:text-white mb-1">
                    {platform.name}
                  </h3>
                  <p className="text-red-600 group-hover:text-white/80 font-bold text-xs uppercase tracking-widest mb-4">
                    {platform.handle}
                  </p>
                  
                  <p className="text-zinc-500 group-hover:text-white/70 font-bold uppercase text-[10px] tracking-widest leading-relaxed mb-6">
                    {platform.description}
                  </p>
                  
                  <div className="pt-6 border-t border-white/5 group-hover:border-white/20">
                    <span className="text-white font-black italic tracking-tighter uppercase text-sm">
                      {platform.stats}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
            
            {/* Dedicated BTCC / X Integration Placeholder Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="group relative p-8 bg-white border border-transparent shadow-2xl rounded-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-blue-600 text-white rounded-sm">
                    <Twitter className="h-6 w-6" />
                  </div>
                  <span className="bg-red-600 text-white text-[9px] font-black uppercase px-2 py-1 italic tracking-widest">Live BTCC Feed</span>
                </div>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter text-black mb-4 leading-tight">
                  TOCA Official<br/>Insights
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-zinc-100 pl-4 py-1">
                    <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Latest from @BTCC</p>
                    <p className="text-zinc-800 text-xs font-bold leading-tight mt-1 italic italic">
                      "Aiden Moffat shows blistering pace in FP2 at Donington Park..."
                    </p>
                  </div>
                </div>
              </div>
              <a 
                href="https://twitter.com/BTCC" 
                target="_blank" 
                className="mt-8 flex items-center justify-center gap-2 w-full py-4 bg-black text-white font-black uppercase italic text-xs tracking-widest hover:bg-red-600 transition-all"
              >
                View Full Feed
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
