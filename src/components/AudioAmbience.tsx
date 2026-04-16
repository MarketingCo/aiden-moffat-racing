'use client';

import { useState, useRef } from 'react';
import { Volume2, VolumeX, Radio } from 'lucide-react';

export default function AudioAmbience() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAmbience = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.1;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60] hidden lg:block">
      <button 
        onClick={toggleAmbience}
        className={`group flex items-center gap-4 p-4 rounded-full border backdrop-blur-xl transition-all duration-500 ${isPlaying ? 'bg-red-600 border-red-500 shadow-[0_0_20px_rgba(255,0,0,0.4)]' : 'bg-black/50 border-white/10 hover:border-white/20'}`}
      >
        <div className="relative">
           {isPlaying && (
             <div className="absolute inset-0 animate-ping bg-white/20 rounded-full" />
           )}
           {isPlaying ? <Volume2 className="h-5 w-5 text-white" /> : <VolumeX className="h-5 w-5 text-zinc-500" />}
        </div>
        
        <div className={`overflow-hidden transition-all duration-500 ${isPlaying ? 'w-32 opacity-100' : 'w-0 opacity-0'}`}>
           <div className="flex items-center gap-2 whitespace-nowrap">
              <Radio className="h-3 w-3 text-white/50 animate-pulse" />
              <span className="text-[8px] font-black text-white uppercase tracking-[0.2em]">Pit Comms: Active</span>
           </div>
        </div>
      </button>
    </div>
  );
}
