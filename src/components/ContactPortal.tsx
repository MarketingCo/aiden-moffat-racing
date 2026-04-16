'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Terminal, Shield, MessageSquare } from 'lucide-react';

export default function ContactPortal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-sm overflow-hidden shadow-2xl"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between p-4 bg-zinc-800 border-b border-white/5">
              <div className="flex items-center gap-3">
                <Terminal className="h-4 w-4 text-red-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white italic">Secure Comms Terminal v2.6</span>
              </div>
              <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                <X className="h-4 w-4 text-zinc-500" />
              </button>
            </div>

            <div className="p-8 lg:p-12">
              {formState === 'success' ? (
                <div className="text-center py-12">
                  <div className="inline-flex p-6 bg-red-600/10 rounded-full mb-6">
                    <Shield className="h-12 w-12 text-red-600 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-2">Transmission Received</h3>
                  <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">Aiden's team will analyze and respond shortly.</p>
                  <button onClick={onClose} className="mt-10 px-8 py-3 bg-white text-black font-black uppercase italic text-xs tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all">
                    Return to Mission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[8px] font-black text-zinc-500 uppercase tracking-[0.3em]">Full Name / Identity</label>
                      <input required type="text" className="w-full bg-black border border-white/5 p-4 text-white font-bold uppercase italic text-xs focus:border-red-600 outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[8px] font-black text-zinc-500 uppercase tracking-[0.3em]">Return Frequency (Email)</label>
                      <input required type="email" className="w-full bg-black border border-white/5 p-4 text-white font-bold uppercase italic text-xs focus:border-red-600 outline-none transition-colors" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[8px] font-black text-zinc-500 uppercase tracking-[0.3em]">Enquiry Type</label>
                    <select className="w-full bg-black border border-white/5 p-4 text-white font-bold uppercase italic text-xs focus:border-red-600 outline-none transition-colors appearance-none">
                      <option>Sponsorship / Partnership</option>
                      <option>Elite Race Training</option>
                      <option>Media / PR Request</option>
                      <option>General Support</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[8px] font-black text-zinc-500 uppercase tracking-[0.3em]">Message Data</label>
                    <textarea rows={4} className="w-full bg-black border border-white/5 p-4 text-white font-bold uppercase italic text-xs focus:border-red-600 outline-none transition-colors resize-none" />
                  </div>

                  <button 
                    disabled={formState === 'sending'}
                    className="w-full py-5 bg-red-600 hover:bg-red-700 text-white font-black uppercase italic tracking-[0.3em] text-xs flex items-center justify-center gap-3 transition-all disabled:opacity-50"
                  >
                    {formState === 'sending' ? 'Transmitting...' : 'Execute Transmission'}
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Bottom Status Bar */}
            <div className="p-4 bg-black flex items-center justify-between">
               <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-green-500 rounded-full" />
                    <span className="text-[7px] font-black text-zinc-600 uppercase tracking-widest">Link Optimized</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500">
                    <MessageSquare className="h-2 w-2" />
                    <span className="text-[7px] font-black text-zinc-600 uppercase tracking-widest">End-to-end Encrypted</span>
                  </div>
               </div>
               <span className="text-[7px] font-mono text-zinc-700">0x882_AIDEN_MOFFAT_OFFICIAL</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
