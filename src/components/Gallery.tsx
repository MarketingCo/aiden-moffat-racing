'use client';

import { motion } from 'framer-motion';
import { Camera, Eye, Zap } from 'lucide-react';

export default function GallerySection() {
  const images = [
    { src: '/images/audi2.jpg', title: 'Audi S3 Paddock', span: 'col-span-1 row-span-1' },
    { src: '/images/audi3.jpg', title: 'Track Performance', span: 'col-span-1 md:col-span-2 row-span-1' },
    { src: '/images/Aiden Autograph.jpg', title: 'Fan Experience', span: 'col-span-1 row-span-1' },
  ];

  return (
    <section id="gallery" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm">On the Limit</span>
          <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none mb-6">
            In Focus <span className="text-white">Gallery</span>
          </h2>
          <div className="flex items-center justify-center gap-4 text-zinc-500 font-black uppercase italic text-xs tracking-widest">
             <Camera className="h-4 w-4 text-red-600" /> 2026 Season Launch Details
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-sm border border-white/5 ${img.span}`}
            >
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                style={{ backgroundImage: `url('${img.src}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-xl font-black uppercase italic tracking-tighter text-white mb-2">{img.title}</h3>
                <div className="flex items-center gap-2 font-black uppercase italic text-[10px] tracking-widest text-red-600">
                  <Eye className="h-3 w-3" /> Full Screen View
                </div>
              </div>

              <div className="absolute top-6 right-6 p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <Zap className="h-4 w-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.instagram.com/aidenmoffat16" 
            target="_blank" 
            className="inline-flex items-center gap-4 px-8 py-4 bg-zinc-900 border border-white/10 font-black uppercase italic text-xs tracking-widest hover:bg-red-600 hover:text-white transition-all"
          >
            Follow on Instagram for more
          </a>
        </div>
      </div>
    </section>
  );
}
