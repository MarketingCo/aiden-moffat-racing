'use client';

import { useRef, useState, useEffect } from 'react';
import { Eraser, Download, UserCheck } from 'lucide-react';

export default function AutographCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsRaceDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set initial canvas background
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Line style
    ctx.strokeStyle = '#e60000';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.shadowBlur = 5;
    ctx.shadowColor = 'rgba(230, 0, 0, 0.5)';
  }, []);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setIsRaceDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsRaceDrawing(false);
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    ctx?.beginPath();
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = ('touches' in e ? e.touches[0].clientY : e.clientY) - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <section className="py-24 bg-white selection:bg-red-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 block italic text-sm">Fan Engagement</span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-8 leading-tight text-black">
              The Digital <span className="text-red-600">Fan Wall.</span>
            </h2>
            <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-12 leading-relaxed">
              Every fan is part of the journey. Leave your mark on the digital wall before the 2026 season opener. Draw your signature or a message of support.
            </p>
            
            <div className="flex gap-4">
               <button 
                 onClick={clear}
                 className="flex items-center gap-3 px-6 py-4 bg-zinc-100 text-zinc-500 font-black uppercase italic text-xs tracking-widest hover:bg-zinc-200 transition-all"
               >
                  <Eraser className="h-4 w-4" /> Reset Board
               </button>
               <button className="flex items-center gap-3 px-6 py-4 bg-black text-white font-black uppercase italic text-xs tracking-widest hover:bg-red-600 transition-all">
                  <Download className="h-4 w-4" /> Save Signature
               </button>
            </div>

            <div className="mt-12 flex items-center gap-4 text-zinc-400">
               <UserCheck className="h-5 w-5 text-red-600" />
               <span className="text-[9px] font-black uppercase tracking-widest italic">1,240+ Fans have signed this week</span>
            </div>
          </div>

          <div className="relative group">
             <div className="absolute -inset-4 bg-zinc-100 border border-zinc-200 rounded-sm -z-10" />
             <canvas
               ref={canvasRef}
               width={600}
               height={400}
               onMouseDown={startDrawing}
               onMouseUp={stopDrawing}
               onMouseOut={stopDrawing}
               onMouseMove={draw}
               onTouchStart={startDrawing}
               onTouchEnd={stopDrawing}
               onTouchMove={draw}
               className="w-full aspect-[3/2] bg-zinc-950 rounded-sm cursor-crosshair shadow-2xl border-4 border-zinc-900"
             />
             <div className="absolute top-4 right-4 pointer-events-none opacity-20">
                <span className="text-[8px] font-black text-white uppercase tracking-[0.4em]">Interactive Mesh: Sync On</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
