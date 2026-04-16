'use client';

import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, ChevronRight } from 'lucide-react';

export default function PaddockTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['SYSTEM_INIT: SUCCESSFUL', 'ESTABLISHING LINK TO AUDI_S3_CHASSIS_04...', 'LINK READY. TYPE "HELP" FOR COMMANDS.']);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    let response = '';

    switch(cmd) {
      case 'help':
        response = 'AVAILABLE: STATUS, AUDI-SPECS, CALENDAR, LIVERY, CLEAR';
        break;
      case 'status':
        response = 'CHASSIS: OPTIMAL | HYBRID: 100% | TYRES: NEW_SOFT | DRIVER: READY';
        break;
      case 'audi-specs':
        response = 'NGTC 2.0L TURBO | 350BHP | XTRAC 6-SPEED | AP RACING 6-POT';
        break;
      case 'calendar':
        response = 'NEXT: DONINGTON PARK (APR 19) | BRANDS HATCH (MAY 10)';
        break;
      case 'livery':
        response = 'ACCESSING RENDERS... [ERROR: ENCRYPTED] - CONTACT PR FOR KEY';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        response = `COMMAND NOT RECOGNIZED: ${cmd}`;
    }

    setHistory([...history, `> ${input}`, response]);
    setInput('');
  };

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
           <TerminalIcon className="h-6 w-6 text-red-600" />
           <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white">Paddock <span className="text-red-600">Terminal</span></h2>
        </div>

        <div className="bg-black border border-white/10 rounded-sm overflow-hidden shadow-2xl">
           <div className="bg-zinc-900 px-4 py-2 flex items-center gap-2 border-b border-white/5">
              <div className="h-2 w-2 rounded-full bg-red-600" />
              <div className="h-2 w-2 rounded-full bg-zinc-700" />
              <div className="h-2 w-2 rounded-full bg-zinc-700" />
              <span className="ml-4 text-[8px] font-black text-zinc-500 uppercase tracking-widest">aiden_moffat_security_portal.exe</span>
           </div>
           
           <div 
             ref={scrollRef}
             className="h-64 overflow-y-auto p-6 font-mono text-[10px] text-zinc-400 space-y-2 scrollbar-hide"
           >
              {history.map((line, i) => (
                <div key={i} className={line.startsWith('>') ? 'text-red-600' : ''}>{line}</div>
              ))}
           </div>

           <form onSubmit={handleCommand} className="p-4 bg-zinc-900 border-t border-white/5 flex items-center gap-4">
              <ChevronRight className="h-4 w-4 text-red-600" />
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="ENTER COMMAND..."
                className="bg-transparent border-none text-white font-mono text-[10px] w-full outline-none uppercase placeholder:text-zinc-700"
              />
           </form>
        </div>
      </div>
    </section>
  );
}
