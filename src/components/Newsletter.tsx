'use client';

import { Mail, Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-zinc-200" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-black p-12 lg:p-20">
          {/* Copy */}
          <div className="lg:w-1/2">
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-xs">
              Join the Inner Circle
            </span>
            <h2 className="text-4xl lg:text-5xl font-black uppercase italic tracking-tighter mb-4 text-white leading-tight">
              Get the <span className="text-red-600">Race Report</span>
            </h2>
            <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
              Exclusive technical insights, post-race analysis, and priority training dates delivered directly to your inbox.
            </p>
          </div>

          {/* Form */}
          <div className="lg:w-1/2 w-full">
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative flex-grow">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 h-4 w-4 pointer-events-none" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-zinc-900 border border-white/[0.08] p-4 pl-12 text-white text-sm focus:outline-none focus:border-red-600/60 transition-colors duration-200 placeholder:text-zinc-600"
                />
              </div>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-black uppercase italic tracking-widest px-8 py-4 flex items-center justify-center gap-2 transition-colors duration-200 whitespace-nowrap text-sm active:scale-[0.98]"
              >
                Subscribe <Send className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-3 text-zinc-600 text-xs">
              No spam. Just racing. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
