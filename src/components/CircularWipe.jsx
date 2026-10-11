import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export const CircularWipe = ({ activeWipe, onComplete }) => {
  const [stage, setStage] = useState('idle'); // 'idle' | 'expanding' | 'fading'
  const [wipeData, setWipeData] = useState(null);

  useEffect(() => {
    if (!activeWipe) {
      setStage('idle');
      setWipeData(null);
      return;
    }

    const { x, y, targetName } = activeWipe;
    // Calculate radius to guarantee it covers every screen corner
    const maxRadius = Math.ceil(
      Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      ) * 1.15
    );

    setWipeData({ x, y, maxRadius, targetName });
    setStage('expanding');

    // After circular expansion reaches full coverage, start smooth fade-out
    const fadeTimer = setTimeout(() => {
      setStage('fading');
    }, 420);

    // After fade-out is complete, reset to idle
    const doneTimer = setTimeout(() => {
      setStage('idle');
      if (onComplete) onComplete();
    }, 720);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [activeWipe, onComplete]);

  if (stage === 'idle' || !wipeData) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Circular Wipe Layer */}
      <div
        style={{
          '--wipe-x': `${wipeData.x}px`,
          '--wipe-y': `${wipeData.y}px`,
          '--wipe-radius': `${wipeData.maxRadius}px`,
        }}
        className={`absolute inset-0 bg-gradient-to-br from-rose-800/90 via-pink-700/85 to-rose-950/90 backdrop-blur-md flex items-center justify-center animate-circular-wipe transition-opacity duration-300 ease-out ${
          stage === 'fading' ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Expanding Accent Ring Wave from Origin Point */}
        <div 
          style={{
            left: `${wipeData.x}px`,
            top: `${wipeData.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
          className="absolute w-20 h-20 rounded-full border-2 border-white/50 animate-ping pointer-events-none" 
        />

        {/* Section Pill indicator during navigation wipe */}
        {wipeData.targetName && (
          <div className="text-center text-white select-none animate-in fade-in zoom-in-90 duration-300">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-rose-200/90 font-semibold block mb-1">
              Navigating
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-pink-200">
              {wipeData.targetName}
            </h3>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};
