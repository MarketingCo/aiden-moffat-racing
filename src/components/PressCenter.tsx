'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Image as ImageIcon, Mail } from 'lucide-react';

export default function PressCenter() {
  const assets = [
    { name: 'Official Driver Bio 2026', type: 'PDF', size: '1.2 MB', icon: <FileText className="h-5 w-5" /> },
    { name: 'High-Res Hero Shots', type: 'ZIP', size: '45 MB', icon: <ImageIcon className="h-5 w-5" /> },
    { name: '2026 Livery Renders', type: 'ZIP', size: '28 MB', icon: <ImageIcon className="h-5 w-5" /> },
    { name: 'Partnership Deck', type: 'PDF', size: '5.4 MB', icon: <FileText className="h-5 w-5" /> },
  ];

  return (
    <section id="press" className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm">Media Relations</span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-tight mb-8">
              Press <span className="text-white">Center</span>
            </h2>
            <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-12 leading-relaxed">
              Official assets and contact information for media inquiries, high-resolution photography, and broadcast requests for the 2026 BTCC campaign.
            </p>
            <a 
              href="mailto:media@aidenmoffat.com" 
              className="flex items-center gap-4 p-6 bg-zinc-900 border border-white/5 group hover:border-red-600/50 transition-all"
            >
              <div className="p-3 bg-zinc-800 group-hover:bg-red-600 transition-colors">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Contact PR</div>
                <div className="text-white font-black uppercase italic tracking-tighter">media@aidenmoffat.com</div>
              </div>
            </a>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {assets.map((asset, idx) => (
              <motion.div
                key={asset.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 bg-zinc-900 border border-white/5 flex items-center justify-between group hover:bg-zinc-800 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="text-zinc-500 group-hover:text-red-600 transition-colors">
                    {asset.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase italic tracking-tighter text-sm">{asset.name}</h4>
                    <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">{asset.type} • {asset.size}</span>
                  </div>
                </div>
                <Download className="h-4 w-4 text-zinc-700 group-hover:text-white transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
