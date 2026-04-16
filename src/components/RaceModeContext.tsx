'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const RaceModeContext = createContext({
  isRaceMode: false,
  toggleRaceMode: () => {},
});

export const useRaceMode = () => useContext(RaceModeContext);

export function RaceModeProvider({ children }: { children: React.ReactNode }) {
  const [isRaceMode, setIsRaceMode] = useState(false);

  const toggleRaceMode = () => {
    setIsRaceMode(!isRaceMode);
    if (!isRaceMode) {
      // Sound effect could go here
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
      audio.volume = 0.2;
      audio.play().catch(() => {});
    }
  };

  return (
    <RaceModeContext.Provider value={{ isRaceMode, toggleRaceMode }}>
      <div className={isRaceMode ? 'race-mode-active' : ''}>
        {children}
      </div>
    </RaceModeContext.Provider>
  );
}
