'use client';

import { Mail, Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-red-600" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-black p-12 lg:p-20 skew-x-[-1deg]">
          <div className="lg:w-1/2 skew-x-[1deg]">
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm">Join the Inner Circle</span>
            <h2 className="text-4xl lg:text-5xl font-black uppercase italic tracking-tighter mb-4 text-white leading-tight">
              Get the <span className="text-red-600">Race Report</span>
            </h2>
            <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.2em] max-w-sm">
              Exclusive tech insights, post-race analysis, and priority training dates delivered directly to your inbox.
            </p>
          </div>
          
          <div className="lg:w-1/2 w-full skew-x-[1deg]">
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 h-5 w-5" />
                <input 
                  type="email" 
                  placeholder="ENTER YOUR EMAIL"
                  className="w-full bg-zinc-900 border border-white/10 p-5 pl-12 text-white font-bold uppercase italic text-xs tracking-widest focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white font-black uppercase italic tracking-widest px-8 py-5 flex items-center justify-center gap-2 transition-all">
                Subscribe <Send className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-4 text-zinc-600 text-[8px] font-bold uppercase tracking-[0.2em]">
              No spam. Just racing. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
