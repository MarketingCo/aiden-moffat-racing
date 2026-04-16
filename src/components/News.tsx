'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Tag } from 'lucide-react';

export default function NewsSection() {
  const articles = [
    {
      date: 'April 14, 2026',
      tag: 'Race Prep',
      title: 'Final Shakedown: Audi S3 Performance Metrics Exceed Expectations',
      desc: 'Technical debrief from Croft testing reveals significant gains in front-end mechanical grip.',
      image: '/images/audi3.jpg'
    },
    {
      date: 'April 10, 2026',
      tag: 'Team News',
      title: 'Power Maxed Racing Unveils 2026 LKQ Euro Car Parts Livery',
      desc: 'The brand new look for the season launch at Brands Hatch draws massive fan attention.',
      image: '/images/audi1.jpg'
    }
  ];

  return (
    <section id="news" className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm">Paddock Reports</span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none text-white">
              Latest <span className="text-red-600">News</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 font-black uppercase italic text-xs tracking-widest text-zinc-500 hover:text-white transition-all">
            View All Reports <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {articles.map((article, idx) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-white/5 mb-8">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: `url('${article.image}')` }}
                />
                <div className="absolute top-4 left-4">
                   <span className="bg-red-600 text-white font-black uppercase italic text-[9px] px-3 py-1 tracking-widest">
                     {article.tag}
                   </span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 mb-4 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3 text-red-600" />
                  {article.date}
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-3 w-3 text-red-600" />
                  BTCC 2026
                </div>
              </div>

              <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-4 group-hover:text-red-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest leading-loose mb-8">
                {article.desc}
              </p>
              
              <div className="h-1 w-0 bg-red-600 transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
